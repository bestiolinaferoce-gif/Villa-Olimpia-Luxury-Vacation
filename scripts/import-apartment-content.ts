#!/usr/bin/env ts-node
/**
 * Script per importare contenuti appartamenti da file esterni
 * Legge i file da: ~/Desktop/Villa Olimpia 2026/villa_olimpia_final/
 * e aggiorna data/apartment-content.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { homedir } from 'os'

const CONTENT_DIR = path.join(homedir(), 'Desktop', 'Villa Olimpia 2026', 'villa_olimpia_final')
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'apartment-content.ts')

// Mapping nomi appartamenti a ID
const APARTMENT_MAP: Record<string, number> = {
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

interface ApartmentFile {
  name: string
  lang: 'ITA' | 'ENG'
  type: 'long' | 'OTA'
  content: string
}

function readApartmentFiles(): ApartmentFile[] {
  const files: ApartmentFile[] = []
  
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
    const content = fs.readFileSync(filePath, 'utf-8').trim()
    
    // Skip placeholder
    if (content.includes('contenuto completo da inserire') || content.includes('Versione')) {
      console.log(`⏭️  Skipping placeholder: ${file}`)
      continue
    }
    
    files.push({ name, lang: lang as 'ITA' | 'ENG', type: type as 'long' | 'OTA', content })
  }
  
  return files
}

function generateTypeScriptContent(files: ApartmentFile[]): string {
  const contentByApartment: Record<number, { long?: string; ota?: string }> = {}
  
  // Raggruppa per appartamento
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
  
  // Genera codice TypeScript
  let output = `// Contenuti importati automaticamente da file esterni
// Ultimo aggiornamento: ${new Date().toISOString()}

export interface ApartmentContent {
  shortDescription: string
  fullPremiumDescription: string
  featureBullets: string[]
  perfectFor: string[]
  seoParagraph: string
  technicalSummary: {
    capacity: string
    rooms: string
    bathrooms: string
    outdoorArea: string
    floor: string
  }
  otaDescription?: string // Descrizione ottimizzata per OTA
}

export const apartmentContent: Record<number, ApartmentContent> = {
`

  // Genera contenuto per ogni appartamento
  for (const [aptId, content] of Object.entries(contentByApartment)) {
    const id = parseInt(aptId)
    const aptName = Object.keys(APARTMENT_MAP).find(k => APARTMENT_MAP[k] === id) || 'Unknown'
    
    output += `  ${id}: { // ${aptName}\n`
    output += `    shortDescription: ${JSON.stringify(content.ota || 'Descrizione breve...')},\n`
    output += `    fullPremiumDescription: ${JSON.stringify(content.long || 'Descrizione completa...')},\n`
    output += `    otaDescription: ${JSON.stringify(content.ota || '')},\n`
    output += `    featureBullets: [\n`
    output += `      "Caratteristica 1",\n`
    output += `      "Caratteristica 2",\n`
    output += `    ],\n`
    output += `    perfectFor: [\n`
    output += `      "Coppie",\n`
    output += `      "Famiglie",\n`
    output += `    ],\n`
    output += `    seoParagraph: ${JSON.stringify(content.long || '')},\n`
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

// Main
console.log('📥 Importazione contenuti appartamenti...')
console.log(`📁 Directory: ${CONTENT_DIR}`)

const files = readApartmentFiles()
console.log(`\n✅ Trovati ${files.length} file con contenuti`)

if (files.length === 0) {
  console.log('\n⚠️  Nessun contenuto trovato. I file contengono ancora placeholder?')
  console.log('💡 Popola i file e riprova!')
  process.exit(0)
}

const tsContent = generateTypeScriptContent(files)
fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf-8')

console.log(`\n✅ Contenuti importati in: ${OUTPUT_FILE}`)
console.log(`📊 Appartamenti aggiornati: ${Object.keys(APARTMENT_MAP).length}`)

