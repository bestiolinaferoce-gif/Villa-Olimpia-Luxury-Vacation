#!/usr/bin/env node

/**
 * Script per configurare automaticamente le variabili d'ambiente su Vercel
 * 
 * Prerequisiti:
 * 1. Vercel CLI installato: npm i -g vercel
 * 2. Autenticato: vercel login
 * 3. Progetto collegato: vercel link (se non già fatto)
 * 
 * Uso:
 * node scripts/setup-vercel-env.js
 * 
 * Oppure con valori personalizzati:
 * NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123 node scripts/setup-vercel-env.js
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variabili da configurare
const ENV_VARS = {
  'NEXT_PUBLIC_GA_MEASUREMENT_ID': {
    description: 'Google Analytics 4 Measurement ID (formato: G-XXXXXXXXXX)',
    example: 'G-ABC123XYZ',
    required: false,
    default: null
  },
  'NEXT_PUBLIC_GTM_ID': {
    description: 'Google Tag Manager Container ID (formato: GTM-XXXXXXX)',
    example: 'GTM-K5NQGHBD',
    required: false,
    default: 'GTM-K5NQGHBD'
  }
};

// Ambienti Vercel
const ENVIRONMENTS = ['production', 'preview', 'development'];

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function execCommand(command) {
  try {
    return execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
  } catch (error) {
    throw new Error(`Errore esecuzione comando: ${command}\n${error.message}`);
  }
}

async function checkVercelAuth() {
  console.log('🔍 Verifica autenticazione Vercel...');
  try {
    const output = execCommand('npx vercel whoami');
    console.log(`✅ Autenticato come: ${output.trim()}`);
    return true;
  } catch (error) {
    console.error('❌ Non sei autenticato con Vercel CLI');
    console.log('\n📝 Per autenticarti, esegui:');
    console.log('   npx vercel login');
    return false;
  }
}

async function getProjectInfo() {
  try {
    const fs = require('fs');
    const path = require('path');
    const projectJsonPath = path.join(process.cwd(), '.vercel', 'project.json');
    
    if (fs.existsSync(projectJsonPath)) {
      const projectData = JSON.parse(fs.readFileSync(projectJsonPath, 'utf-8'));
      return {
        projectId: projectData.projectId,
        orgId: projectData.orgId,
        projectName: projectData.projectName
      };
    }
  } catch (error) {
    // Ignora errori
  }
  return null;
}

async function getCurrentEnvVars() {
  console.log('\n🔍 Recupero variabili esistenti...');
  try {
    const output = execCommand('npx vercel env ls');
    const vars = {};
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^(\w+)\s+(\w+)\s+(.+)$/);
      if (match) {
        const [, name, env, value] = match;
        if (!vars[name]) vars[name] = {};
        vars[name][env] = value;
      }
    }
    return vars;
  } catch (error) {
    console.warn('⚠️  Impossibile recuperare variabili esistenti');
    return {};
  }
}

async function setEnvVar(name, value, environments) {
  console.log(`\n📝 Configurazione: ${name} = ${value}`);
  
  for (const env of environments) {
    try {
      // Usa echo per passare il valore al comando vercel env add
      execCommand(`echo "${value}" | npx vercel env add ${name} ${env}`);
      console.log(`   ✅ ${env}: configurato`);
    } catch (error) {
      // Se la variabile esiste già, prova a rimuoverla e riaggiungerla
      try {
        execCommand(`npx vercel env rm ${name} ${env} --yes`);
        execCommand(`echo "${value}" | npx vercel env add ${name} ${env}`);
        console.log(`   ✅ ${env}: aggiornato`);
      } catch (updateError) {
        console.error(`   ❌ ${env}: errore - ${updateError.message}`);
      }
    }
  }
}

async function main() {
  console.log('🚀 Configurazione variabili ambiente Vercel\n');
  console.log('='.repeat(50));
  
  // Verifica autenticazione
  const isAuthenticated = await checkVercelAuth();
  if (!isAuthenticated) {
    rl.close();
    process.exit(1);
  }
  
  // Mostra info progetto
  const projectInfo = await getProjectInfo();
  if (projectInfo) {
    console.log(`\n📦 Progetto: ${projectInfo.projectName}`);
    console.log(`   Project ID: ${projectInfo.projectId}`);
  }
  
  // Recupera variabili esistenti
  const existingVars = await getCurrentEnvVars();
  
  // Chiedi valori all'utente
  const values = {};
  
  console.log('\n' + '='.repeat(50));
  console.log('📋 Configurazione variabili\n');
  
  for (const [varName, config] of Object.entries(ENV_VARS)) {
    // Controlla se esiste già
    const existing = existingVars[varName];
    const existingValue = existing ? Object.values(existing)[0] : null;
    
    // Controlla variabile d'ambiente
    const envValue = process.env[varName];
    
    // Usa valore esistente, env, default o chiedi all'utente
    let value = existingValue || envValue || config.default;
    
    if (!value) {
      console.log(`\n${config.description}`);
      if (config.example) {
        console.log(`   Esempio: ${config.example}`);
      }
      if (existingValue) {
        console.log(`   Valore attuale: ${existingValue}`);
      }
      
      const input = await question(`   Inserisci valore per ${varName} (premi Invio per saltare): `);
      value = input.trim() || null;
    } else {
      console.log(`\n✅ ${varName}: ${value} (${existingValue ? 'esistente' : envValue ? 'da env' : 'default'})`);
    }
    
    if (value && value !== 'G-XXXXXXXXXX' && value !== 'GTM-XXXXXXX') {
      values[varName] = value;
    } else if (config.required && !value) {
      console.error(`\n❌ Errore: ${varName} è richiesto ma non è stato fornito`);
      rl.close();
      process.exit(1);
    }
  }
  
  // Conferma
  console.log('\n' + '='.repeat(50));
  console.log('\n📋 Riepilogo variabili da configurare:');
  for (const [name, value] of Object.entries(values)) {
    console.log(`   ${name} = ${value}`);
  }
  
  if (Object.keys(values).length === 0) {
    console.log('\n⚠️  Nessuna variabile da configurare');
    rl.close();
    return;
  }
  
  const confirm = await question('\n❓ Procedere con la configurazione? (s/n): ');
  if (confirm.toLowerCase() !== 's' && confirm.toLowerCase() !== 'y') {
    console.log('\n❌ Configurazione annullata');
    rl.close();
    return;
  }
  
  // Configura variabili
  console.log('\n' + '='.repeat(50));
  console.log('\n⚙️  Configurazione in corso...\n');
  
  for (const [name, value] of Object.entries(values)) {
    await setEnvVar(name, value, ENVIRONMENTS);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('\n✅ Configurazione completata!');
  console.log('\n📝 Prossimi passi:');
  console.log('   1. Vai su Vercel Dashboard per verificare le variabili');
  console.log('   2. Fai un Redeploy del progetto');
  console.log('   3. Verifica con Google Tag Assistant');
  
  rl.close();
}

// Esegui script
main().catch(error => {
  console.error('\n❌ Errore:', error.message);
  rl.close();
  process.exit(1);
});
