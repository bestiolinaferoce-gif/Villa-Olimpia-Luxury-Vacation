#!/usr/bin/env node

/**
 * Script per copiare automaticamente le foto dei 3 appartamenti
 * Frangipane, Fiordaliso, Orchidea
 */

const fs = require('fs');
const path = require('path');

const DESKTOP = path.join(process.env.HOME, 'Desktop');
const PHOTO_SOURCE = path.join(DESKTOP, 'Foto Villa Olimpia Sito');
const FRANGIPANE_SOURCE = path.join(DESKTOP, 'Frangipane');
const DEST_BASE = path.join(__dirname, '..', 'public', 'images', 'villa', 'appartamenti');

console.log('📸 COPIA FOTO - 3 APPARTAMENTI');
console.log('==============================\n');

// Crea le cartelle se non esistono
const folders = ['frangipane', 'fiordaliso', 'orchidea'];
folders.forEach(folder => {
  const destFolder = path.join(DEST_BASE, folder);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
    console.log(`✅ Creata cartella: ${folder}`);
  }
});

let copied = 0;
let errors = 0;

// ============================================
// FRANGIPANE - Foto reali specifiche
// ============================================
console.log('\n📸 FRANGIPANE:');
const frangipaneFiles = [
  {
    source: path.join(FRANGIPANE_SOURCE, 'Camera Matrimoniale Appartamento Frangipane(2).jpg'),
    dest: path.join(DEST_BASE, 'frangipane', 'main.jpg')
  },
  {
    source: path.join(FRANGIPANE_SOURCE, 'Camera Matrimoniale Frangipane (1).jpg'),
    dest: path.join(DEST_BASE, 'frangipane', 'bedroom.jpg')
  },
  {
    source: path.join(FRANGIPANE_SOURCE, 'Cucina Appartamento Frangipane 1.jpg'),
    dest: path.join(DEST_BASE, 'frangipane', 'kitchen.jpg')
  },
  {
    source: path.join(FRANGIPANE_SOURCE, 'Bagno Frangipane .jpg'),
    dest: path.join(DEST_BASE, 'frangipane', 'bathroom.jpg')
  }
];

frangipaneFiles.forEach(file => {
  if (fs.existsSync(file.source)) {
    try {
      fs.copyFileSync(file.source, file.dest);
      console.log(`  ✅ ${path.basename(file.dest)}`);
      copied++;
    } catch (err) {
      console.log(`  ❌ Errore copia ${path.basename(file.source)}: ${err.message}`);
      errors++;
    }
  } else {
    console.log(`  ⚠️  File non trovato: ${path.basename(file.source)}`);
  }
});

// ============================================
// FIORDALISO - Placeholder da Azalea
// ============================================
console.log('\n📸 FIORDALISO:');
const fiordalisoSource = path.join(PHOTO_SOURCE, 'Living Room appartamento Azalea .jpg');
const fiordalisoDest = path.join(DEST_BASE, 'fiordaliso', 'main.jpg');

if (fs.existsSync(fiordalisoSource)) {
  try {
    fs.copyFileSync(fiordalisoSource, fiordalisoDest);
    console.log(`  ✅ main.jpg (da Living Room Azalea)`);
    copied++;
  } catch (err) {
    console.log(`  ❌ Errore: ${err.message}`);
    errors++;
  }
} else {
  console.log(`  ⚠️  File non trovato: Living Room appartamento Azalea .jpg`);
}

// ============================================
// ORCHIDEA - Placeholder da Gardenia
// ============================================
console.log('\n📸 ORCHIDEA:');
const orchideaSource = path.join(PHOTO_SOURCE, 'Camera Matrimoniale Appartamento Gardenia.jpg');
const orchideaDest = path.join(DEST_BASE, 'orchidea', 'main.jpg');

if (fs.existsSync(orchideaSource)) {
  try {
    fs.copyFileSync(orchideaSource, orchideaDest);
    console.log(`  ✅ main.jpg (da Camera Gardenia)`);
    copied++;
  } catch (err) {
    console.log(`  ❌ Errore: ${err.message}`);
    errors++;
  }
} else {
  console.log(`  ⚠️  File non trovato: Camera Matrimoniale Appartamento Gardenia.jpg`);
}

// ============================================
// RIEPILOGO
// ============================================
console.log('\n📊 RIEPILOGO:');
console.log(`  ✅ Foto copiate: ${copied}`);
if (errors > 0) {
  console.log(`  ❌ Errori: ${errors}`);
}
console.log('\n✅ Operazione completata!');
console.log('\n💡 Ricarica la pagina nel browser per vedere le nuove foto!');


