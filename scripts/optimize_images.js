const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const newFiles = JSON.parse(fs.readFileSync('/tmp/new_unique.json', 'utf8'));
const optimizedDir = '/Users/francesconigro/Desktop/Foto_Villa_Olimpia_processed/optimized';

if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

const MB = 1024 * 1024;
const MAX_WIDTH = 2000;
const MAX_SIZE_MB = 1.5;
const JPEG_QUALITY = 85;

function formatBytes(bytes) {
  return (bytes / MB).toFixed(2) + ' MB';
}

function getImageSize(filePath) {
  try {
    const result = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, { encoding: 'utf8' });
    const width = result.match(/pixelWidth: (\d+)/)?.[1];
    const height = result.match(/pixelHeight: (\d+)/)?.[1];
    return { width: parseInt(width), height: parseInt(height) };
  } catch (e) {
    return { width: 0, height: 0 };
  }
}

function normalizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50);
}

function optimizeImage(inputPath, outputPath) {
  const originalSize = fs.statSync(inputPath).size;
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  
  // Normalizza nome file
  const normalizedName = normalizeFileName(baseName);
  const outputFile = path.join(path.dirname(outputPath), normalizedName + '.jpg');
  
  try {
    const dimensions = getImageSize(inputPath);
    let resizeCmd = '';
    
    // Ridimensiona se necessario
    if (dimensions.width > MAX_WIDTH) {
      resizeCmd = `--resampleHeightWidthMax ${MAX_WIDTH}`;
    }
    
    // Converti e comprimi
    if (ext === '.png') {
      // PNG -> JPG
      execSync(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} ${resizeCmd} "${inputPath}" --out "${outputFile}"`, { stdio: 'ignore' });
    } else {
      // JPG -> JPG ottimizzato
      if (resizeCmd) {
        execSync(`sips ${resizeCmd} -s formatOptions ${JPEG_QUALITY} "${inputPath}" --out "${outputFile}"`, { stdio: 'ignore' });
      } else {
        execSync(`sips -s formatOptions ${JPEG_QUALITY} "${inputPath}" --out "${outputFile}"`, { stdio: 'ignore' });
      }
    }
    
    const optimizedSize = fs.statSync(outputFile).size;
    const savings = originalSize - optimizedSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    // Se file ancora troppo grande, comprimi ulteriormente
    if (optimizedSize > MAX_SIZE_MB * MB) {
      const lowerQuality = 75;
      execSync(`sips -s formatOptions ${lowerQuality} "${outputFile}" --out "${outputFile}.tmp"`, { stdio: 'ignore' });
      fs.renameSync(outputFile + '.tmp', outputFile);
      const newSize = fs.statSync(outputFile).size;
      const newSavings = originalSize - newSize;
      const newSavingsPercent = ((newSavings / originalSize) * 100).toFixed(1);
      return {
        original: originalSize,
        optimized: newSize,
        savings: newSavings,
        savingsPercent: newSavingsPercent,
        normalizedName: normalizedName + '.jpg'
      };
    }
    
    return {
      original: originalSize,
      optimized: optimizedSize,
      savings: savings,
      savingsPercent: savingsPercent,
      normalizedName: normalizedName + '.jpg'
    };
  } catch (error) {
    console.error(`Errore ottimizzazione ${inputPath}:`, error.message);
    // Fallback: copia originale
    fs.copyFileSync(inputPath, outputFile);
    return {
      original: originalSize,
      optimized: originalSize,
      savings: 0,
      savingsPercent: 0,
      normalizedName: normalizedName + '.jpg'
    };
  }
}

console.log('=== OTTIMIZZAZIONE FOTO ===\n');
console.log(`File da ottimizzare: ${newFiles.length}\n`);

const results = [];
let totalOriginal = 0;
let totalOptimized = 0;

newFiles.forEach((file, index) => {
  console.log(`[${index + 1}/${newFiles.length}] Processando: ${file.name}`);
  const result = optimizeImage(file.file, path.join(optimizedDir, path.basename(file.name)));
  result.originalName = file.name;
  results.push(result);
  totalOriginal += result.original;
  totalOptimized += result.optimized;
  console.log(`  → ${formatBytes(result.original)} → ${formatBytes(result.optimized)} (${result.savingsPercent}% risparmio)`);
});

const totalSavings = totalOriginal - totalOptimized;
const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);

console.log('\n=== RISULTATI OTTIMIZZAZIONE ===');
console.log(`Foto ottimizzate: ${results.length}`);
console.log(`Dimensione PRIMA: ${formatBytes(totalOriginal)}`);
console.log(`Dimensione DOPO: ${formatBytes(totalOptimized)}`);
console.log(`Risparmio totale: ${formatBytes(totalSavings)} (-${totalSavingsPercent}%)\n`);

// Salva report
fs.writeFileSync('/tmp/optimization_report.json', JSON.stringify({
  summary: {
    totalFiles: results.length,
    totalOriginal: totalOriginal,
    totalOptimized: totalOptimized,
    totalSavings: totalSavings,
    totalSavingsPercent: totalSavingsPercent
  },
  files: results
}, null, 2));

console.log('Report salvato: /tmp/optimization_report.json');












