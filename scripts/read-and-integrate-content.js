#!/usr/bin/env node
/**
 * Script Node.js per leggere contenuti da file esterni e integrarli
 * Compatibile con tutti i sistemi
 */

const fs = require('fs')
const path = require('path')
const os = require('os')

// Prova più percorsi possibili
const possiblePaths = [
  path.join(os.homedir(), 'Desktop', 'Villa Olimpia 2026', 'villa_olimpia_final'),
  path.join(os.homedir(), 'Desktop', 'villa_olimpia_final'),
  path.join(os.homedir(), 'Desktop', 'Villa Olimpia 2026', 'villa_olimpia_verified', 'data', 'apartments'),
]

let CONTENT_DIR = possiblePaths[0]
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    CONTENT_DIR = p
    break
  }
}
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'apartment-content.ts')

const APARTMENT_MAP = {
  'Frangipane': 1,
  'Fiordaliso': 2,
  'Orchidea': 3,
  'Tulipano': 4,
  'Geranio': 5,
  'Giglio': 6,
  'Lavanda': 7,
  'Gardenia': 8,
  'Azalea': 9,
}

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8').trim()
  } catch (error) {
    return null
  }
}

function isPlaceholder(content) {
  return !content || 
         content.includes('contenuto completo da inserire') ||
         content.includes('Versione') && content.length < 100 ||
         content.length < 50
}

function readAllApartmentFiles() {
  const files = []
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Directory non trovata: ${CONTENT_DIR}`)
    return files
  }

  const fileList = fs.readdirSync(CONTENT_DIR)
  
  for (const file of fileList) {
    if (!file.endsWith('.txt') || file === 'README.txt') continue
    
    const match = file.match(/^(\w+)_(ITA|ENG)_(long|OTA)\.txt$/)
    if (!match) continue
    
    const [, name, lang, type] = match
    const filePath = path.join(CONTENT_DIR, file)
    const content = readFileContent(filePath)
    
    if (!content || isPlaceholder(content)) {
      console.log(`⏭️  Skipping placeholder: ${file}`)
      continue
    }
    
    files.push({ name, lang, type, content })
  }
  
  return files
}

function generateTypeScript(files) {
  const contentByApartment = {}
  
  // Raggruppa per appartamento (solo ITA per ora)
  for (const file of files) {
    const aptId = APARTMENT_MAP[file.name]
    if (!aptId) {
      console.warn(`⚠️  Appartamento non mappato: ${file.name}`)
      continue
    }
    
    if (!contentByApartment[aptId]) {
      contentByApartment[aptId] = {}
    }
    
    if (file.lang === 'ITA') {
      if (file.type === 'long') {
        contentByApartment[aptId].long = file.content
      } else {
        contentByApartment[aptId].ota = file.content
      }
    }
  }
  
  // Leggi il file esistente per mantenere struttura
  let existingContent = ''
  try {
    existingContent = fs.readFileSync(OUTPUT_FILE, 'utf-8')
  } catch (e) {
    // File non esiste, creeremo da zero
  }
  
  // Genera nuovo contenuto
  let output = `// Contenuti importati automaticamente da file esterni
// Ultimo aggiornamento: ${new Date().toISOString()}

export interface ApartmentContent {
  seoTitle: string
  airbnbTitle: string
  shortDescription: string
  fullPremiumDescription: string
  features: string[]
  perfectFor: string[]
  seoParagraph: string
  technicalSummary: {
    capacity: string
    rooms: string
    bathrooms: string
    outdoorArea: string
    floor: string
  }
  otaDescription?: string
}

export const apartmentContent: Record<number, ApartmentContent> = {
`

  // Genera per ogni appartamento
  for (const [aptId, content] of Object.entries(contentByApartment)) {
    const id = parseInt(aptId)
    const aptName = Object.keys(APARTMENT_MAP).find(k => APARTMENT_MAP[k] === id) || 'Unknown'
    const longDesc = content.long || ''
    const otaDesc = content.ota || ''
    
    // Estrai features dal testo (semplificato)
    const features = extractFeatures(longDesc)
    const perfectFor = extractPerfectFor(longDesc)
    
    output += `  ${id}: { // ${aptName}\n`
    output += `    seoTitle: "Appartamento ${aptName} – Villa Olimpia Capo Rizzuto",\n`
    output += `    airbnbTitle: "🏖️ ${aptName} – Appartamento con Piscina | Villa Olimpia",\n`
    output += `    shortDescription: ${JSON.stringify(otaDesc.substring(0, 200) || 'Descrizione breve...')},\n`
    output += `    fullPremiumDescription: ${JSON.stringify(longDesc || 'Descrizione completa...')},\n`
    output += `    otaDescription: ${JSON.stringify(otaDesc || '')},\n`
    output += `    features: [\n`
    features.forEach(f => {
      output += `      ${JSON.stringify(f)},\n`
    })
    output += `    ],\n`
    output += `    perfectFor: [\n`
    perfectFor.forEach(p => {
      output += `      ${JSON.stringify(p)},\n`
    })
    output += `    ],\n`
    output += `    seoParagraph: ${JSON.stringify(longDesc || '')},\n`
    output += `    technicalSummary: {\n`
    output += `      capacity: "4",\n`
    output += `      rooms: "1",\n`
    output += `      bathrooms: "1",\n`
    output += `      outdoorArea: "Terrazza",\n`
    output += `      floor: "Terra",\n`
    output += `    },\n`
    output += `  },\n`
  }
  
  output += `}\n\n`
  output += `export function getApartmentContent(id: number): ApartmentContent | undefined {\n`
  output += `  return apartmentContent[id]\n`
  output += `}\n`
  
  return output
}

function extractFeatures(text) {
  // Estrai features comuni dal testo
  const features = []
  const keywords = [
    'terrazza', 'balcone', 'vista mare', 'vista piscina', 'cucina', 
    'aria condizionata', 'wi-fi', 'wifi', 'tv', 'bagno', 'doccia',
    'parcheggio', 'piscina', 'gazebo', 'veranda'
  ]
  
  const lowerText = text.toLowerCase()
  keywords.forEach(keyword => {
    if (lowerText.includes(keyword)) {
      features.push(keyword.charAt(0).toUpperCase() + keyword.slice(1))
    }
  })
  
  return features.length > 0 ? features : ['Terrazza privata', 'Vista mare', 'Cucina completa']
}

function extractPerfectFor(text) {
  const perfectFor = []
  const lowerText = text.toLowerCase()
  
  if (lowerText.includes('coppia') || lowerText.includes('coppie')) {
    perfectFor.push('Coppie')
  }
  if (lowerText.includes('famiglia') || lowerText.includes('famiglie')) {
    perfectFor.push('Famiglie')
  }
  if (lowerText.includes('amici') || lowerText.includes('gruppo')) {
    perfectFor.push('Gruppi di amici')
  }
  
  return perfectFor.length > 0 ? perfectFor : ['Coppie', 'Famiglie']
}

// Main
console.log('📥 Importazione contenuti appartamenti...')
console.log(`📁 Directory: ${CONTENT_DIR}\n`)

const files = readAllApartmentFiles()
console.log(`✅ Trovati ${files.length} file con contenuti validi\n`)

if (files.length === 0) {
  console.log('⚠️  Nessun contenuto trovato. I file contengono ancora placeholder?')
  console.log('💡 Popola i file in:')
  console.log(`   ${CONTENT_DIR}`)
  console.log('\n📝 Formato file: [Nome]_[ITA|ENG]_[long|OTA].txt')
  process.exit(0)
}

const tsContent = generateTypeScript(files)
fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf-8')

console.log(`✅ Contenuti importati in: ${OUTPUT_FILE}`)
console.log(`📊 Appartamenti aggiornati: ${Object.keys(APARTMENT_MAP).length}`)
console.log('\n🎉 Importazione completata!')

