const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const newFolder = '/Users/francesconigro/Desktop/Foto Villa Olimpia Sito';
const existingFolder = '/Users/francesconigro/Desktop/ViviCalabria.com/public/images/villa/appartamenti';

function getFileHash(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(buffer).digest('hex');
  } catch (e) {
    return null;
  }
}

function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch (e) {
    return 0;
  }
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Analizza file nuovi
const newFiles = getAllFiles(newFolder);
const existingFiles = getAllFiles(existingFolder);

console.log('=== ANALISI DUPLICATI ===\n');
console.log(`File nella cartella caricata: ${newFiles.length}`);
console.log(`File esistenti nel progetto: ${existingFiles.length}\n`);

// Crea mappa file esistenti (nome base + dimensione + hash)
const existingMap = new Map();
existingFiles.forEach(file => {
  const name = path.basename(file).toLowerCase();
  const size = getFileSize(file);
  const hash = getFileHash(file);
  existingMap.set(`${name}_${size}`, { path: file, size, hash, name });
});

// Crea mappa hash esistenti
const existingHashes = new Map();
existingFiles.forEach(file => {
  const hash = getFileHash(file);
  if (hash) {
    if (!existingHashes.has(hash)) {
      existingHashes.set(hash, []);
    }
    existingHashes.get(hash).push(file);
  }
});

const duplicates = [];
const newUnique = [];

newFiles.forEach(newFile => {
  const newName = path.basename(newFile).toLowerCase();
  const newSize = getFileSize(newFile);
  const newHash = getFileHash(newFile);
  
  // Cerca duplicati per nome+size
  const key = `${newName}_${newSize}`;
  const matchByName = existingMap.get(key);
  
  // Cerca duplicati per hash
  const matchByHash = newHash ? existingHashes.get(newHash) : null;
  
  if (matchByName || matchByHash) {
    duplicates.push({
      file: newFile,
      name: path.basename(newFile),
      size: newSize,
      hash: newHash,
      matchByName: matchByName ? matchByName.path : null,
      matchByHash: matchByHash || null
    });
  } else {
    newUnique.push({
      file: newFile,
      name: path.basename(newFile),
      size: newSize,
      hash: newHash
    });
  }
});

console.log('=== DUPLICATI TROVATI ===');
console.log(`Totale duplicati: ${duplicates.length}\n`);
duplicates.forEach((dup, i) => {
  console.log(`${i + 1}. ${dup.name} (${(dup.size / 1024 / 1024).toFixed(2)} MB)`);
  if (dup.matchByName) {
    console.log(`   → Duplicato per nome+size: ${path.relative(existingFolder, dup.matchByName)}`);
  }
  if (dup.matchByHash && dup.matchByHash.length > 0) {
    console.log(`   → Duplicato per hash: ${dup.matchByHash.map(f => path.relative(existingFolder, f)).join(', ')}`);
  }
});

console.log('\n=== FILE NUOVI ===');
console.log(`Totale file nuovi: ${newUnique.length}\n`);
newUnique.forEach((file, i) => {
  console.log(`${i + 1}. ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
});

// Salva risultati
fs.writeFileSync('/tmp/duplicates.json', JSON.stringify(duplicates, null, 2));
fs.writeFileSync('/tmp/new_unique.json', JSON.stringify(newUnique, null, 2));

console.log('\n=== RISULTATI SALVATI ===');
console.log('Duplicati: /tmp/duplicates.json');
console.log('Nuovi: /tmp/new_unique.json');












