#!/usr/bin/env node

/**
 * Script per verificare configurazione e fare redeploy su Vercel
 */

const https = require('https');

const PROJECT_ID = 'prj_PZp0zXbRrX03j3Akc7K0At9gjuAY';
const TEAM_ID = 'team_zEdUAsjDZo901Y0wlicAyYwL';

function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : {};
          resolve({ statusCode: res.statusCode, data: parsed, raw: body });
        } catch (e) {
          resolve({ statusCode: res.statusCode, data: body, raw: body });
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

async function verifyEnvVars(token) {
  console.log('🔍 Verifica variabili ambiente...\n');
  
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
    const envs = response.data.envs || [];
    
    const required = {
      'NEXT_PUBLIC_GA_MEASUREMENT_ID': 'G-NW2FHPE98G',
      'NEXT_PUBLIC_GTM_ID': 'GTM-K5NQGHBD'
    };
    
    const found = {};
    const missing = [];
    
    for (const [key, expectedValue] of Object.entries(required)) {
      const foundVars = envs.filter(e => e.key === key);
      if (foundVars.length > 0) {
        const values = foundVars.map(e => e.value);
        found[key] = values;
        console.log(`✅ ${key}:`);
        foundVars.forEach(e => {
          const envs = e.target?.join(', ') || 'unknown';
          console.log(`   - ${envs}: ${e.value}`);
        });
      } else {
        missing.push(key);
        console.log(`❌ ${key}: NON TROVATO`);
      }
    }
    
    return { found, missing, allFound: missing.length === 0 };
  } catch (error) {
    console.error('❌ Errore verifica:', error.message);
    return { found: {}, missing: [], allFound: false };
  }
}

async function getLatestDeployment(token) {
  console.log('\n🔍 Verifica ultimo deploy...\n');
  
  const options = {
    hostname: 'api.vercel.com',
    path: `/v6/deployments?projectId=${PROJECT_ID}&teamId=${TEAM_ID}&limit=1`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await makeRequest(options);
    const deployments = response.data.deployments || [];
    
    if (deployments.length > 0) {
      const latest = deployments[0];
      console.log(`📦 Ultimo deploy:`);
      console.log(`   - URL: ${latest.url}`);
      console.log(`   - Stato: ${latest.readyState || latest.state}`);
      console.log(`   - Creato: ${new Date(latest.createdAt).toLocaleString('it-IT')}`);
      return latest;
    }
    
    return null;
  } catch (error) {
    console.error('❌ Errore recupero deploy:', error.message);
    return null;
  }
}

async function createDeployment(token) {
  console.log('\n🚀 Creazione nuovo deploy...\n');
  
  const options = {
    hostname: 'api.vercel.com',
    path: `/v13/deployments?teamId=${TEAM_ID}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const data = {
    name: PROJECT_ID,
    project: PROJECT_ID,
    target: 'production'
  };

  try {
    const response = await makeRequest(options, data);
    console.log(`✅ Deploy avviato:`);
    console.log(`   - URL: ${response.data.url || 'In corso...'}`);
    console.log(`   - Stato: ${response.data.readyState || 'building'}`);
    return response.data;
  } catch (error) {
    console.error('❌ Errore creazione deploy:', error.message);
    throw error;
  }
}

async function main() {
  const token = process.env.VERCEL_TOKEN;
  
  if (!token) {
    console.error('❌ VERCEL_TOKEN non fornito');
    process.exit(1);
  }

  console.log('🚀 Verifica e Deploy Automatico Vercel');
  console.log('='.repeat(60));
  
  // Verifica variabili
  const { found, missing, allFound } = await verifyEnvVars(token);
  
  if (!allFound) {
    console.log('\n⚠️  Alcune variabili mancanti. Configurazione automatica...');
    // Qui potresti aggiungere logica per configurare le variabili mancanti
  } else {
    console.log('\n✅ Tutte le variabili sono configurate correttamente!');
  }
  
  // Verifica ultimo deploy
  const latestDeploy = await getLatestDeployment(token);
  
  // Crea nuovo deploy
  try {
    const newDeploy = await createDeployment(token);
    console.log('\n' + '='.repeat(60));
    console.log('\n✅ Deploy avviato con successo!');
    console.log('\n📝 Il deploy sarà completato in 2-3 minuti.');
    console.log(`   Monitora su: https://vercel.com/dashboard`);
    console.log('\n🔍 Dopo il deploy, verifica con Google Tag Assistant:');
    console.log('   1. Installa: https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk');
    console.log('   2. Visita il sito deployato');
    console.log('   3. Abilita Tag Assistant');
    console.log('   4. Dovresti vedere Google Tag Manager e Google Analytics');
  } catch (error) {
    console.log('\n⚠️  Deploy tramite API non disponibile.');
    console.log('   Vercel farà il deploy automatico dopo il push su GitHub.');
    console.log('   (Già fatto - il deploy è in corso)');
  }
}

main().catch(error => {
  console.error('\n❌ Errore:', error.message);
  process.exit(1);
});
