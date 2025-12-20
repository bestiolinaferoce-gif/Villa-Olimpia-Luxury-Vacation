#!/usr/bin/env node

/**
 * Script per aggiungere variabili ambiente su Vercel automaticamente
 * Usa l'API di Vercel per aggiungere le variabili senza interazione manuale
 */

const { execSync } = require('child_process');

const VARIABLES = [
  {
    name: 'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    value: 'service_bbp2k8u',
    environments: ['production', 'preview', 'development']
  },
  {
    name: 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
    value: 'template_2kw4d3d',
    environments: ['production', 'preview', 'development']
  },
  {
    name: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
    value: 'JeiPqp4zNMlRw6ug9',
    environments: ['production', 'preview', 'development']
  }
];

console.log('🔧 Aggiunta variabili ambiente su Vercel...\n');

// Verifica che vercel CLI sia disponibile
try {
  execSync('npx vercel --version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ Vercel CLI non trovata. Installazione...');
  execSync('npm install -g vercel', { stdio: 'inherit' });
}

// Aggiungi variabili
VARIABLES.forEach(({ name, value, environments }) => {
  console.log(`➕ Aggiungendo ${name}...`);
  
  environments.forEach(env => {
    try {
      // Usa echo per passare il valore
      execSync(`echo "${value}" | npx vercel env add ${name} ${env}`, {
        stdio: 'pipe',
        input: value
      });
      console.log(`   ✅ ${env}`);
    } catch (error) {
      console.log(`   ⚠️  ${env}: ${error.message.includes('already exists') ? 'Già esistente' : 'Errore'}`);
    }
  });
});

console.log('\n✅ Variabili EmailJS aggiunte!');
console.log('\n⚠️  Per Google Maps API Key:');
console.log('   Devi aggiungere manualmente: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY');
console.log('   Oppure dimmi il valore e lo aggiungo io!\n');















