#!/usr/bin/env node

/**
 * Script per testare che i tag Google siano presenti sul sito
 */

const https = require('https');

const SITE_URL = 'https://villa-olimpia-luxury-vacation-ayq1ii2du.vercel.app';

function fetchURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function checkTags() {
  console.log('🔍 Verifica tag Google sul sito...\n');
  console.log(`📡 URL: ${SITE_URL}\n`);
  
  try {
    const { statusCode, body } = await fetchURL(SITE_URL);
    
    if (statusCode !== 200) {
      console.log(`❌ Errore: Status ${statusCode}`);
      return;
    }
    
    // Cerca Google Tag Manager
    const gtmFound = body.includes('GTM-K5NQGHBD') || body.includes('googletagmanager.com/gtm.js');
    const gtmScript = body.match(/googletagmanager\.com\/gtm\.js[^"']*/);
    
    // Cerca Google Analytics
    const gaFound = body.includes('G-FHYFT8YKNF') || body.includes('googletagmanager.com/gtag/js');
    const gaScript = body.match(/googletagmanager\.com\/gtag\/js[^"']*/);
    
    console.log('📊 Risultati verifica:\n');
    
    if (gtmFound) {
      console.log('✅ Google Tag Manager: TROVATO');
      if (gtmScript) {
        console.log(`   Script: ${gtmScript[0].substring(0, 60)}...`);
      }
    } else {
      console.log('❌ Google Tag Manager: NON TROVATO');
    }
    
    if (gaFound) {
      console.log('✅ Google Analytics: TROVATO');
      if (gaScript) {
        console.log(`   Script: ${gaScript[0].substring(0, 60)}...`);
      }
    } else {
      console.log('❌ Google Analytics: NON TROVATO');
    }
    
    // Cerca dataLayer
    const dataLayerFound = body.includes('dataLayer') || body.includes('window.dataLayer');
    if (dataLayerFound) {
      console.log('✅ DataLayer: TROVATO');
    }
    
    console.log('\n' + '='.repeat(60));
    
    if (gtmFound && gaFound) {
      console.log('\n✅ TUTTI I TAG SONO PRESENTI SUL SITO!');
      console.log('\n📝 Per vedere i dati in Google Analytics:');
      console.log('   1. Visita il sito: ' + SITE_URL);
      console.log('   2. Naviga tra alcune pagine');
      console.log('   3. Torna su Google Analytics → Real-time');
      console.log('   4. Dovresti vedere la tua visita!');
    } else {
      console.log('\n⚠️  Alcuni tag non sono stati trovati.');
      console.log('   Potrebbe essere normale se il sito usa lazy loading.');
      console.log('   Verifica con Google Tag Assistant nel browser.');
    }
    
  } catch (error) {
    console.error('❌ Errore:', error.message);
  }
}

checkTags();
