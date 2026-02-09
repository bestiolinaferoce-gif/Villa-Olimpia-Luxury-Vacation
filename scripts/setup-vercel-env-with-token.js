#!/usr/bin/env node

/**
 * Script per configurare automaticamente le variabili d'ambiente su Vercel usando un token
 * 
 * Uso:
 * VERCEL_TOKEN=tuo_token_qui node scripts/setup-vercel-env-with-token.js
 * 
 * Oppure:
 * node scripts/setup-vercel-env-with-token.js
 * (ti chiederà il token)
 */

const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Info progetto (da .vercel/project.json)
const PROJECT_ID = 'prj_PZp0zXbRrX03j3Akc7K0At9gjuAY';
const TEAM_ID = 'team_zEdUAsjDZo901Y0wlicAyYwL';

// Variabili da configurare
const ENV_VARS = {
  'NEXT_PUBLIC_GA_MEASUREMENT_ID': {
    description: 'Google Analytics 4 Measurement ID (formato: G-XXXXXXXXXX)',
    example: 'G-ABC123XYZ',
    required: false
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

function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ statusCode: res.statusCode, data: parsed });
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${JSON.stringify(parsed)}`));
          }
        } catch (e) {
          resolve({ statusCode: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function getToken() {
  // Controlla se il token è già nelle variabili d'ambiente
  if (process.env.VERCEL_TOKEN) {
    return process.env.VERCEL_TOKEN;
  }
  
  // Chiedi all'utente
  console.log('🔑 Token Vercel richiesto');
  console.log('   Puoi trovarlo su: https://vercel.com/account/tokens');
  console.log('');
  const token = await question('Incolla il tuo token Vercel: ');
  return token.trim();
}

async function getExistingEnvVars(token) {
  console.log('\n🔍 Recupero variabili esistenti...');
  
  const options = {
    hostname: 'api.vercel.com',
    path: `/v9/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await makeRequest(options);
    return response.data.envs || [];
  } catch (error) {
    console.warn('⚠️  Impossibile recuperare variabili esistenti:', error.message);
    return [];
  }
}

async function createEnvVar(token, name, value, environment) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v9/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const data = {
    key: name,
    value: value,
    type: 'encrypted',
    target: [environment]
  };

  try {
    await makeRequest(options, data);
    return true;
  } catch (error) {
    // Se la variabile esiste già, prova a eliminarla e ricrearla
    if (error.message.includes('409') || error.message.includes('already exists')) {
      console.log(`   ⚠️  ${name} esiste già per ${environment}, aggiornamento...`);
      // Prima elimina quella esistente
      const existingVars = await getExistingEnvVars(token);
      const existing = existingVars.find(e => e.key === name && e.target?.includes(environment));
      
      if (existing) {
        await deleteEnvVar(token, existing.id);
        // Ricrea
        await makeRequest(options, data);
        return true;
      }
    }
    throw error;
  }
}

async function deleteEnvVar(token, envId) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v9/projects/${PROJECT_ID}/env/${envId}?teamId=${TEAM_ID}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    await makeRequest(options);
    return true;
  } catch (error) {
    // Ignora errori di eliminazione
    return false;
  }
}

async function main() {
  console.log('🚀 Configurazione variabili ambiente Vercel tramite API');
  console.log('='.repeat(60));
  
  // Ottieni token
  const token = await getToken();
  
  if (!token) {
    console.error('\n❌ Token non fornito');
    rl.close();
    process.exit(1);
  }

  // Verifica token
  console.log('\n🔍 Verifica token...');
  try {
    const options = {
      hostname: 'api.vercel.com',
      path: '/v2/user',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    
    const response = await makeRequest(options);
    console.log(`✅ Autenticato come: ${response.data.user?.username || response.data.user?.email || 'Utente Vercel'}`);
  } catch (error) {
    console.error('\n❌ Token non valido:', error.message);
    rl.close();
    process.exit(1);
  }

  // Recupera variabili esistenti
  const existingVars = await getExistingEnvVars(token);
  
  // Chiedi valori all'utente
  const values = {};
  
  console.log('\n' + '='.repeat(60));
  console.log('📋 Configurazione variabili\n');
  
  for (const [varName, config] of Object.entries(ENV_VARS)) {
    // Controlla se esiste già
    const existing = existingVars.find(e => e.key === varName);
    const existingValue = existing ? existing.value : null;
    
    // Controlla variabile d'ambiente locale
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
  console.log('\n' + '='.repeat(60));
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
  console.log('\n' + '='.repeat(60));
  console.log('\n⚙️  Configurazione in corso...\n');
  
  for (const [name, value] of Object.entries(values)) {
    console.log(`\n📝 Configurazione: ${name}`);
    for (const env of ENVIRONMENTS) {
      try {
        await createEnvVar(token, name, value, env);
        console.log(`   ✅ ${env}: configurato`);
      } catch (error) {
        console.error(`   ❌ ${env}: errore - ${error.message}`);
      }
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('\n✅ Configurazione completata!');
  console.log('\n📝 Prossimi passi:');
  console.log('   1. Verifica le variabili su: https://vercel.com/dashboard');
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
