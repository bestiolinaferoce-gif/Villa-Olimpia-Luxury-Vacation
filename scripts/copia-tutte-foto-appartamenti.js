#!/usr/bin/env node

/**
 * Script per copiare AUTOMATICAMENTE tutte le foto disponibili
 * per Frangipane, Fiordaliso e Orchidea
 */

const fs = require('fs');
const path = require('path');

const DESKTOP = path.join(process.env.HOME, 'Desktop');
const PHOTO_SOURCE = path.join(DESKTOP, 'Foto Villa Olimpia Sito');
const FRANGIPANE_SOURCE = path.join(DESKTOP, 'Frangipane');
const DEST_BASE = path.join(__dirname, '..', 'public', 'images', 'villa', 'appartamenti');

console.log('📸 COPIA AUTOMATICA TUTTE LE FOTO');
console.log('==================================\n');

// Crea le cartelle se non esistono
const folders = ['frangipane', 'fiordaliso', 'orchidea'];
folders.forEach(folder => {
  const destFolder = path.join(DEST_BASE, folder);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
    console.log(`✅ Creata cartella: ${folder}`);
  }
});

let totalCopied = 0;
let totalErrors = 0;

// ============================================
// FRANGIPANE - Copia TUTTE le foto disponibili
// ============================================
console.log('\n📸 FRANGIPANE:');
if (fs.existsSync(FRANGIPANE_SOURCE)) {
  const files = fs.readdirSync(FRANGIPANE_SOURCE).filter(f => 
    f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg')
  );
  
  files.forEach((file, index) => {
    const source = path.join(FRANGIPANE_SOURCE, file);
    // Crea nomi descrittivi
    let destName = file.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    // Se è la prima foto, chiamala main.jpg
    if (index === 0) {
      destName = 'main.jpg';
    } else {
      // Altrimenti mantieni il nome originale ma pulito
      destName = file.toLowerCase()
        .replace(/[^a-z0-9.]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      if (!destName.endsWith('.jpg') && !destName.endsWith('.jpeg')) {
        destName += '.jpg';
      }
    }
    
    const dest = path.join(DEST_BASE, 'frangipane', destName);
    
    try {
      fs.copyFileSync(source, dest);
      console.log(`  ✅ ${destName}`);
      totalCopied++;
    } catch (err) {
      console.log(`  ❌ Errore copia ${file}: ${err.message}`);
      totalErrors++;
    }
  });
} else {
  console.log(`  ⚠️  Cartella non trovata: ${FRANGIPANE_SOURCE}`);
}

// ============================================
// FIORDALISO - Cerca foto specifiche o usa placeholder
// ============================================
console.log('\n📸 FIORDALISO:');
const fiordalisoCandidates = [
  'Living Room appartamento Azalea .jpg',
  'Zona Living Appartamento Tulipano .jpg',
  'Zona Living Appartamento Tulipano ( 1).jpg',
  'Zona Living Appartamento Tulipano ( 2).jpg',
];

let fiordalisoCopied = false;
for (const candidate of fiordalisoCandidates) {
  const source = path.join(PHOTO_SOURCE, candidate);
  if (fs.existsSync(source)) {
    const dest = path.join(DEST_BASE, 'fiordaliso', 'main.jpg');
    try {
      fs.copyFileSync(source, dest);
      console.log(`  ✅ main.jpg (da ${candidate})`);
      totalCopied++;
      fiordalisoCopied = true;
      break;
    } catch (err) {
      console.log(`  ❌ Errore: ${err.message}`);
      totalErrors++;
    }
  }
}

if (!fiordalisoCopied) {
  console.log(`  ⚠️  Nessuna foto trovata per Fiordaliso`);
}

// Copia anche altre foto living se disponibili
fiordalisoCandidates.slice(1).forEach((candidate, index) => {
  const source = path.join(PHOTO_SOURCE, candidate);
  if (fs.existsSync(source)) {
    const dest = path.join(DEST_BASE, 'fiordaliso', `living-${index + 1}.jpg`);
    try {
      fs.copyFileSync(source, dest);
      console.log(`  ✅ living-${index + 1}.jpg`);
      totalCopied++;
    } catch (err) {
      // Ignora errori per foto aggiuntive
    }
  }
});

// ============================================
// ORCHIDEA - Cerca foto specifiche o usa placeholder
// ============================================
console.log('\n📸 ORCHIDEA:');
const orchideaCandidates = [
  'Camera Matrimoniale Appartamento Gardenia.jpg',
  'Camera Matrimoniale Appartamento Gardenia (1).jpg',
  'Camera Matrimoniale Appartamento Azalea .jpg',
  'Terrazza Appartamento Azalea .jpg',
  'Terrazza Azalea .jpg',
  'Terrazza Azalea 3.jpg',
];

let orchideaCopied = false;
for (const candidate of orchideaCandidates) {
  const source = path.join(PHOTO_SOURCE, candidate);
  if (fs.existsSync(source)) {
    const dest = path.join(DEST_BASE, 'orchidea', 'main.jpg');
    try {
      fs.copyFileSync(source, dest);
      console.log(`  ✅ main.jpg (da ${candidate})`);
      totalCopied++;
      orchideaCopied = true;
      break;
    } catch (err) {
      console.log(`  ❌ Errore: ${err.message}`);
      totalErrors++;
    }
  }
}

// Copia anche altre foto terrazza/camera se disponibili
orchideaCandidates.slice(1).forEach((candidate, index) => {
  const source = path.join(PHOTO_SOURCE, candidate);
  if (fs.existsSync(source)) {
    let destName = candidate.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    if (!destName.endsWith('.jpg')) {
      destName += '.jpg';
    }
    const dest = path.join(DEST_BASE, 'orchidea', destName);
    try {
      fs.copyFileSync(source, dest);
      console.log(`  ✅ ${destName}`);
      totalCopied++;
    } catch (err) {
      // Ignora errori per foto aggiuntive
    }
  }
});

// ============================================
// RIEPILOGO
// ============================================
console.log('\n📊 RIEPILOGO:');
console.log(`  ✅ Foto copiate: ${totalCopied}`);
if (totalErrors > 0) {
  console.log(`  ❌ Errori: ${totalErrors}`);
}

// Conta foto finali
console.log('\n📁 FOTO FINALI:');
folders.forEach(folder => {
  const folderPath = path.join(DEST_BASE, folder);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath).filter(f => 
      f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg')
    );
    console.log(`  ${folder}: ${files.length} foto`);
  }
});

console.log('\n✅ Operazione completata!');
console.log('\n💡 Ricarica la pagina nel browser per vedere le nuove foto!');


