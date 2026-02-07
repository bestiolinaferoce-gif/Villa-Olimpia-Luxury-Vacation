#!/usr/bin/env node

/**
 * Script per identificare e rimuovere foto duplicate dalla gallery
 * 
 * Uso:
 *   node scripts/remove-duplicate-photos.js [--dry-run] [--delete]
 * 
 * --dry-run: Mostra solo i duplicati senza eliminarli (default)
 * --delete: Elimina effettivamente i duplicati
 */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const GALLERY_PATH = path.join(__dirname, '../public/images/gallery')
const APARTMENTS_PATH = path.join(__dirname, '../public/images/villa/appartamenti')

// Estensioni supportate
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

// Funzione per calcolare hash MD5 di un file
function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath)
  const hashSum = crypto.createHash('md5')
  hashSum.update(fileBuffer)
  return hashSum.digest('hex')
}

// Funzione per trovare tutti i file immagine in una directory
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      findImageFiles(filePath, fileList)
    } else {
      const ext = path.extname(file).toLowerCase()
      if (IMAGE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath)
      }
    }
  })
  
  return fileList
}

// Funzione principale
function findDuplicates(dryRun = true) {
  console.log('🔍 Ricerca foto duplicate...\n')
  
  // Trova tutti i file immagine
  const allImages = []
  
  if (fs.existsSync(GALLERY_PATH)) {
    const galleryImages = findImageFiles(GALLERY_PATH)
    allImages.push(...galleryImages.map(p => ({ path: p, type: 'gallery' })))
  }
  
  if (fs.existsSync(APARTMENTS_PATH)) {
    const apartmentImages = findImageFiles(APARTMENTS_PATH)
    allImages.push(...apartmentImages.map(p => ({ path: p, type: 'apartments' })))
  }
  
  console.log(`📊 Trovati ${allImages.length} file immagine totali\n`)
  
  // Calcola hash per ogni file
  const hashMap = new Map()
  const duplicates = []
  
  allImages.forEach(({ path: filePath, type }) => {
    try {
      const hash = getFileHash(filePath)
      const relativePath = path.relative(path.join(__dirname, '..'), filePath)
      
      if (hashMap.has(hash)) {
        const original = hashMap.get(hash)
        duplicates.push({
          original: original.path,
          duplicate: relativePath,
          hash,
          type,
        })
      } else {
        hashMap.set(hash, { path: relativePath, type })
      }
    } catch (error) {
      console.error(`❌ Errore leggendo ${filePath}:`, error.message)
    }
  })
  
  // Mostra risultati
  if (duplicates.length === 0) {
    console.log('✅ Nessun duplicato trovato!\n')
    return
  }
  
  console.log(`⚠️  Trovati ${duplicates.length} duplicati:\n`)
  
  duplicates.forEach((dup, index) => {
    console.log(`${index + 1}. DUPLICATO:`)
    console.log(`   Originale:  ${dup.original}`)
    console.log(`   Duplicato:  ${dup.duplicate}`)
    console.log(`   Hash:       ${dup.hash.substring(0, 8)}...`)
    console.log('')
  })
  
  // Elimina se richiesto
  if (!dryRun) {
    console.log('🗑️  Eliminazione duplicati...\n')
    
    let deleted = 0
    duplicates.forEach(dup => {
      const fullPath = path.join(__dirname, '..', dup.duplicate)
      try {
        fs.unlinkSync(fullPath)
        console.log(`✅ Eliminato: ${dup.duplicate}`)
        deleted++
      } catch (error) {
        console.error(`❌ Errore eliminando ${dup.duplicate}:`, error.message)
      }
    })
    
    console.log(`\n✅ Eliminati ${deleted} duplicati su ${duplicates.length} totali`)
  } else {
    console.log('💡 Esegui con --delete per eliminare i duplicati')
  }
}

// Parse argomenti
const args = process.argv.slice(2)
const dryRun = !args.includes('--delete')

findDuplicates(dryRun)











