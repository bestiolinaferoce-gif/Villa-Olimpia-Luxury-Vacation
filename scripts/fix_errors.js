const fs = require('fs');
const path = require('path');

const optimizedDir = '/Users/francesconigro/Desktop/Foto_Villa_Olimpia_processed/optimized';
const fixedDir = '/Users/francesconigro/Desktop/Foto_Villa_Olimpia_processed/fixed';

if (!fs.existsSync(fixedDir)) {
  fs.mkdirSync(fixedDir, { recursive: true });
}

const files = fs.readdirSync(optimizedDir);
const corrections = [];
const apartments = ['azalea', 'fiordaliso', 'frangipane', 'gardenia', 'geranio', 'giglio', 'lavanda', 'orchidea', 'tulipano'];

function identifyApartment(fileName) {
  const lower = fileName.toLowerCase();
  for (const apt of apartments) {
    if (lower.includes(apt)) {
      return apt;
    }
  }
  return null;
}

function categorizePhoto(fileName) {
  const lower = fileName.toLowerCase();
  if (lower.includes('camera') || lower.includes('bedroom')) return 'bedroom';
  if (lower.includes('bagno') || lower.includes('bathroom')) return 'bathroom';
  if (lower.includes('cucina') || lower.includes('kitchen')) return 'kitchen';
  if (lower.includes('living') || lower.includes('zona')) return 'living';
  if (lower.includes('terrazza') || lower.includes('terrace') || lower.includes('veranda')) return 'terrace';
  if (lower.includes('facciata') || lower.includes('facade')) return 'facade';
  if (lower.includes('piscina') || lower.includes('pool')) return 'pool';
  if (lower.includes('gazebo')) return 'gazebo';
  if (lower.includes('spiaggia') || lower.includes('beach')) return 'beach';
  if (lower.includes('esterni') || lower.includes('exterior')) return 'exterior';
  if (lower.includes('ingresso') || lower.includes('entrance')) return 'entrance';
  if (lower.includes('villa')) return 'villa';
  return 'other';
}

files.forEach(file => {
  const filePath = path.join(optimizedDir, file);
  if (!fs.statSync(filePath).isFile()) return;
  
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  const apartment = identifyApartment(baseName);
  const category = categorizePhoto(baseName);
  
  // Correzione nome file
  let newName = baseName
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  // Se appartamento identificato, usa pattern standard
  if (apartment) {
    // Rimuovi riferimenti appartamento dal nome (già nella categoria)
    newName = newName.replace(new RegExp(apartment, 'g'), '').replace(/-+/g, '-');
    
    if (category === 'bedroom') {
      newName = `bedroom-${newName.replace(/camera|matrimoniale|letto|appartamento|da/g, '').replace(/-+/g, '-')}`;
    } else if (category === 'bathroom') {
      newName = `bagno-${newName.replace(/bagno|appartamento/g, '').replace(/-+/g, '-')}`;
    } else if (category === 'kitchen') {
      newName = `kitchen-${newName.replace(/cucina|appartamento/g, '').replace(/-+/g, '-')}`;
    } else if (category === 'living') {
      newName = `living-${newName.replace(/living|zona|appartamento|room/g, '').replace(/-+/g, '-')}`;
    } else if (category === 'terrace') {
      newName = `terrace-${newName.replace(/terrazza|appartamento|veranda/g, '').replace(/-+/g, '-')}`;
    }
    
    // Rimuovi numeri alla fine che non fanno parte del pattern
    newName = newName.replace(/-\d+$/, '');
    
    // Assicura pattern: category-number.ext
    if (!newName.match(/-\d+$/)) {
      newName = newName.replace(/-\d+$/, '');
    }
    
    // Trova prossimo numero disponibile se necessario
    // Per ora usiamo il nome base e aggiungiamo numero dopo
  }
  
  // Limita lunghezza
  if (newName.length > 50) {
    newName = newName.substring(0, 50);
  }
  
  const finalName = newName + '.jpg';
  const newPath = path.join(fixedDir, finalName);
  
  // Copia file con nome corretto
  fs.copyFileSync(filePath, newPath);
  
  corrections.push({
    original: file,
    fixed: finalName,
    apartment: apartment || 'unknown',
    category: category,
    action: apartment ? 'renamed' : 'needs_apartment'
  });
});

console.log('=== CORREZIONI APPLICATE ===\n');
corrections.forEach((corr, i) => {
  console.log(`${i + 1}. ${corr.original}`);
  console.log(`   → ${corr.fixed}`);
  console.log(`   Appartamento: ${corr.apartment || 'NON IDENTIFICATO'}`);
  console.log(`   Categoria: ${corr.category}`);
  console.log('');
});

const needsApartment = corrections.filter(c => c.apartment === 'unknown');
if (needsApartment.length > 0) {
  console.log(`\n⚠️  FOTO SENZA APPARTAMENTO IDENTIFICABILE: ${needsApartment.length}`);
  needsApartment.forEach(corr => {
    console.log(`   - ${corr.fixed} (categoria: ${corr.category})`);
  });
}

fs.writeFileSync('/tmp/corrections.json', JSON.stringify(corrections, null, 2));
console.log('\nReport correzioni salvato: /tmp/corrections.json');

