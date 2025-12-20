#!/usr/bin/env node

/**
 * Script per rinominare automaticamente le foto e assegnarle agli appartamenti
 * 
 * Uso:
 *   node scripts/auto-rename-and-assign-photos.js [--dry-run] [--execute]
 * 
 * --dry-run: Mostra solo cosa farebbe senza eseguire (default)
 * --execute: Esegue effettivamente le operazioni
 */

const fs = require('fs')
const path = require('path')

const APARTMENTS = [
  { id: 1, name: 'Frangipane', folder: 'frangipane' },
  { id: 2, name: 'Fiordaliso', folder: 'fiordaliso' },
  { id: 3, name: 'Orchidea', folder: 'orchidea' },
  { id: 4, name: 'Tulipano', folder: 'tulipano' },
  { id: 5, name: 'Giglio', folder: 'giglio' },
  { id: 6, name: 'Lavanda', folder: 'lavanda' },
  { id: 7, name: 'Geranio', folder: 'geranio' },
  { id: 8, name: 'Gardenia', folder: 'gardenia' },
  { id: 9, name: 'Azalea', folder: 'azalea' },
]

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']
const PHOTOS_PER_APARTMENT = 7
const BASE_PATH = path.join(__dirname, '..')
const SOURCE_PATHS = [
  path.join(BASE_PATH, 'public/images/appartamenti'),
  path.join(BASE_PATH, 'public/images/gallery'),
  path.join(BASE_PATH, 'public/images/villa/appartamenti'),
]

// Tipi di foto e loro priorità (1 = più importante, non usare come prima foto)
const PHOTO_TYPES = {
  'bagno': { priority: 10, prefix: 'bagno' },
  'bathroom': { priority: 10, prefix: 'bagno' },
  'camera': { priority: 1, prefix: 'camera' },
  'bedroom': { priority: 1, prefix: 'camera' },
  'living': { priority: 2, prefix: 'zona_living' },
  'zona_living': { priority: 2, prefix: 'zona_living' },
  'cucina': { priority: 3, prefix: 'cucina' },
  'kitchen': { priority: 3, prefix: 'cucina' },
  'terrazza': { priority: 4, prefix: 'terrazza' },
  'veranda': { priority: 4, prefix: 'veranda' },
  'balcone': { priority: 4, prefix: 'balcone' },
  'esterni': { priority: 5, prefix: 'esterni' },
  'ingresso': { priority: 6, prefix: 'ingresso' },
}

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
}

function detectPhotoType(filename) {
  const lower = filename.toLowerCase()
  for (const [key, value] of Object.entries(PHOTO_TYPES)) {
    if (lower.includes(key)) {
      return value
    }
  }
  return { priority: 99, prefix: 'foto' }
}

function findApartmentInFilename(filename) {
  const lower = filename.toLowerCase()
  for (const apt of APARTMENTS) {
    if (lower.includes(apt.name.toLowerCase()) || lower.includes(apt.folder.toLowerCase())) {
      return apt
    }
  }
  return null
}

function findImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList
  
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    
    files.forEach(file => {
      const filePath = path.join(dir, file.name)
      try {
        if (file.isDirectory()) {
          findImageFiles(filePath, fileList)
        } else {
          const ext = path.extname(file.name).toLowerCase()
          if (IMAGE_EXTENSIONS.includes(ext)) {
            fileList.push(filePath)
          }
        }
      } catch (e) {
        // Skip errors
      }
    })
  } catch (e) {
    // Skip directory errors
  }
  
  return fileList
}

function getAllImages() {
  const allImages = []
  SOURCE_PATHS.forEach(sourcePath => {
    if (fs.existsSync(sourcePath)) {
      const images = findImageFiles(sourcePath)
      allImages.push(...images)
    }
  })
  return allImages
}

function organizePhotos(dryRun = true) {
  console.log('🔍 Analisi foto e assegnazione appartamenti...\n')
  
  const allImages = getAllImages()
  console.log(`📊 Trovate ${allImages.length} foto totali\n`)
  
  // Organizza per appartamento
  const apartmentPhotos = {}
  APARTMENTS.forEach(apt => {
    apartmentPhotos[apt.id] = []
  })
  
  const unassigned = []
  
  allImages.forEach(imagePath => {
    const filename = path.basename(imagePath)
    const apartment = findApartmentInFilename(filename)
    const photoType = detectPhotoType(filename)
    
    if (apartment) {
      apartmentPhotos[apartment.id].push({
        path: imagePath,
        filename,
        type: photoType,
        originalPath: imagePath,
      })
    } else {
      unassigned.push({ path: imagePath, filename })
    }
  })
  
  // Ordina foto per priorità (escludi bagno dalla prima posizione)
  Object.keys(apartmentPhotos).forEach(aptId => {
    apartmentPhotos[aptId].sort((a, b) => {
      // Prima foto non deve essere bagno
      if (a.type.priority === 10 && b.type.priority !== 10) return 1
      if (b.type.priority === 10 && a.type.priority !== 10) return -1
      return a.type.priority - b.type.priority
    })
  })
  
  // Mostra risultati
  console.log('📸 FOTO PER APPARTAMENTO:\n')
  
  const operations = []
  
  Object.keys(apartmentPhotos).forEach(aptId => {
    const apt = APARTMENTS.find(a => a.id === parseInt(aptId))
    const photos = apartmentPhotos[aptId]
    
    console.log(`\n🏠 ${apt.name} (${photos.length} foto trovate):`)
    
    if (photos.length === 0) {
      console.log('   ⚠️  Nessuna foto trovata!')
    } else {
      const targetDir = path.join(BASE_PATH, 'public/images/villa/appartamenti', apt.folder)
      const photosToUse = photos.slice(0, PHOTOS_PER_APARTMENT)
      
      photosToUse.forEach((photo, index) => {
        const ext = path.extname(photo.filename)
        const newName = index === 0 
          ? `main${ext}`
          : `${photo.type.prefix}_${apt.folder}_${index}${ext}`
        
        const newPath = path.join(targetDir, newName)
        const relativeNewPath = path.relative(BASE_PATH, newPath)
        
        console.log(`   ${index + 1}. ${photo.filename}`)
        console.log(`      → ${relativeNewPath}`)
        
        if (!dryRun) {
          operations.push({
            type: 'copy',
            from: photo.path,
            to: newPath,
            apt: apt.name,
          })
        }
      })
      
      if (photos.length < PHOTOS_PER_APARTMENT) {
        console.log(`   ⚠️  Mancano ${PHOTOS_PER_APARTMENT - photos.length} foto (minimo 7 richiesto)`)
      }
    }
  })
  
  if (unassigned.length > 0) {
    console.log(`\n⚠️  ${unassigned.length} foto non assegnate (non contengono nome appartamento)`)
  }
  
  // Esegui operazioni se richiesto
  if (!dryRun && operations.length > 0) {
    console.log('\n📋 Esecuzione operazioni...\n')
    
    operations.forEach(op => {
      try {
        // Crea directory se non esiste
        const targetDir = path.dirname(op.to)
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true })
        }
        
        // Copia file
        fs.copyFileSync(op.from, op.to)
        console.log(`✅ Copiato: ${path.basename(op.from)} → ${path.relative(BASE_PATH, op.to)}`)
      } catch (error) {
        console.error(`❌ Errore copiando ${op.from}:`, error.message)
      }
    })
    
    console.log(`\n✅ Completate ${operations.length} operazioni`)
  } else if (dryRun) {
    console.log('\n💡 Esegui con --execute per applicare le modifiche')
  }
  
  // Genera aggiornamento per data/apartments.ts
  console.log('\n📝 CODICE DA AGGIORNARE IN data/apartments.ts:\n')
  
  Object.keys(apartmentPhotos).forEach(aptId => {
    const apt = APARTMENTS.find(a => a.id === parseInt(aptId))
    const photos = apartmentPhotos[aptId].slice(0, PHOTOS_PER_APARTMENT)
    
    if (photos.length > 0) {
      const ext = path.extname(photos[0].filename)
      const mainImage = `/images/villa/appartamenti/${apt.folder}/main${ext}`
      const images = photos.map((photo, index) => {
        const ext = path.extname(photo.filename)
        if (index === 0) {
          return `/images/villa/appartamenti/${apt.folder}/main${ext}`
        }
        return `/images/villa/appartamenti/${apt.folder}/${photo.type.prefix}_${apt.folder}_${index}${ext}`
      })
      
      console.log(`// ${apt.name} (ID: ${aptId})`)
      console.log(`image: "${mainImage}",`)
      console.log(`images: [`)
      images.forEach(img => console.log(`  "${img}",`))
      console.log(`],`)
      console.log('')
    }
  })
}

// Parse argomenti
const args = process.argv.slice(2)
const dryRun = !args.includes('--execute')

organizePhotos(dryRun)

