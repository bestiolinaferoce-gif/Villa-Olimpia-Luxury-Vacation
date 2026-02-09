#!/usr/bin/env node

/**
 * Script NON INTERATTIVO per configurare variabili Vercel tramite token
 * 
 * Uso:
 * VERCEL_TOKEN=token NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXX NEXT_PUBLIC_GTM_ID=GTM-XXX node scripts/setup-vercel-env-auto.js
 */

const https = require('https');

// Info progetto
const PROJECT_ID = 'prj_PZp0zXbRrX03j3Akc7K0At9gjuAY';
const TEAM_ID = 'team_zEdUAsjDZo901Y0wlicAyYwL';

// Ambienti Vercel
const ENVIRONMENTS = ['production', 'preview', 'development'];

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

async function getExistingEnvVars(token) {
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
    console.warn('⚠️  Impossibile recuperare variabili esistenti');
    return [];
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
    return false;
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
    // Se esiste già, elimina e ricrea
    if (error.message.includes('409') || error.message.includes('already exists')) {
      const existingVars = await getExistingEnvVars(token);
      const existing = existingVars.find(e => 
        e.key === name && e.target?.includes(environment)
      );
      
      if (existing) {
        await deleteEnvVar(token, existing.id);
        await makeRequest(options, data);
        return true;
      }
    }
    throw error;
  }
}

async function main() {
  const token = process.env.VERCEL_TOKEN;
  
  if (!token) {
    console.error('❌ VERCEL_TOKEN non fornito');
    console.log('Uso: VERCEL_TOKEN=token node scripts/setup-vercel-env-auto.js');
    process.exit(1);
  }

  console.log('🚀 Configurazione variabili ambiente Vercel');
  console.log('='.repeat(60));
  
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
    process.exit(1);
  }

  // Valori dalle variabili d'ambiente
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-K5NQGHBD';

  const values = {};
  if (GA_ID && GA_ID !== 'G-XXXXXXXXXX') {
    values['NEXT_PUBLIC_GA_MEASUREMENT_ID'] = GA_ID;
  }
  if (GTM_ID && GTM_ID !== 'GTM-XXXXXXX') {
    values['NEXT_PUBLIC_GTM_ID'] = GTM_ID;
  }

  if (Object.keys(values).length === 0) {
    console.log('\n⚠️  Nessuna variabile da configurare');
    console.log('   Fornisci NEXT_PUBLIC_GA_MEASUREMENT_ID e/o NEXT_PUBLIC_GTM_ID come variabili d\'ambiente');
    process.exit(0);
  }

  console.log('\n📋 Variabili da configurare:');
  for (const [name, value] of Object.entries(values)) {
    console.log(`   ${name} = ${value}`);
  }

  // Recupera variabili esistenti
  const existingVars = await getExistingEnvVars(token);
  
  console.log('\n⚙️  Configurazione in corso...\n');

  // Configura ogni variabile per ogni ambiente
  for (const [name, value] of Object.entries(values)) {
    console.log(`\n📝 ${name}`);
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
}

main().catch(error => {
  console.error('\n❌ Errore:', error.message);
  process.exit(1);
});
