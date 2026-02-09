#!/usr/bin/env node
/**
 * Controllo integrita contenuti appartamenti.
 * Obiettivo: impedire incongruenze tra id/nome/testi nei vari file.
 */

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8")
}

function parseApartments(apartmentsTs) {
  const blockRegex = /{\s*id:\s*(\d+),[\s\S]*?name:\s*"([^"]+)"[\s\S]*?bathrooms:\s*(\d+),/g
  const out = new Map()
  let m
  while ((m = blockRegex.exec(apartmentsTs)) !== null) {
    out.set(Number(m[1]), { name: m[2], bathrooms: Number(m[3]) })
  }
  return out
}

function parseNameByIdFromMap(componentSource) {
  const entryRegex = /{\s*id:\s*'?(\d+)'?,\s*name:\s*"([^"]+)"/g
  const out = new Map()
  let m
  while ((m = entryRegex.exec(componentSource)) !== null) {
    out.set(Number(m[1]), m[2])
  }
  return out
}

function parseBathroomsFromContent(contentTs) {
  const blockRegex = /(\d+):\s*{[\s\S]*?technicalSummary:\s*{[\s\S]*?bathrooms:\s*"(\d+)"/g
  const out = new Map()
  let m
  while ((m = blockRegex.exec(contentTs)) !== null) {
    out.set(Number(m[1]), Number(m[2]))
  }
  return out
}

function fail(errors) {
  console.error("❌ Incongruenze trovate:\n")
  for (const err of errors) console.error(`- ${err}`)
  process.exit(1)
}

function fileExists(file) {
  try {
    fs.accessSync(path.join(ROOT, file))
    return true
  } catch {
    return false
  }
}

function main() {
  const apartmentsTs = read("data/apartments.ts")
  const contentTs = read("data/apartment-content.ts")

  const canonical = parseApartments(apartmentsTs)
  const contentBathrooms = parseBathroomsFromContent(contentTs)
  const villaMap = fileExists("components/villa-interactive-map.tsx")
    ? parseNameByIdFromMap(read("components/villa-interactive-map.tsx"))
    : new Map()
  const planimetriaMap = fileExists("components/planimetria-interattiva.tsx")
    ? parseNameByIdFromMap(read("components/planimetria-interattiva.tsx"))
    : new Map()

  const errors = []

  if (canonical.size !== 9) {
    errors.push(`data/apartments.ts: attesi 9 appartamenti, trovati ${canonical.size}`)
  }

  for (const [id, apt] of canonical.entries()) {
    const contentBath = contentBathrooms.get(id)
    if (contentBath == null) {
      errors.push(`data/apartment-content.ts: technicalSummary mancante per id ${id}`)
    } else if (contentBath !== apt.bathrooms) {
      errors.push(
        `Bagni incoerenti per id ${id} (${apt.name}): apartments.ts=${apt.bathrooms} vs apartment-content.ts=${contentBath}`
      )
    }

    const villaName = villaMap.get(id)
    if (villaName && villaName !== apt.name) {
      errors.push(
        `Mappa villa incoerente per id ${id}: ${villaName} (mappa) vs ${apt.name} (canonical)`
      )
    }

    const planName = planimetriaMap.get(id)
    if (planName && planName !== apt.name) {
      errors.push(
        `Planimetria incoerente per id ${id}: ${planName} (planimetria) vs ${apt.name} (canonical)`
      )
    }
  }

  // Guardrail testuale su casi già problematici
  const forbiddenGiglioComunicanti = /Giglio[\s\S]{0,600}2 camere matrimoniali comunicanti/i
  if (forbiddenGiglioComunicanti.test(apartmentsTs) || forbiddenGiglioComunicanti.test(contentTs)) {
    errors.push('Trovata frase non valida su Giglio: "2 camere matrimoniali comunicanti"')
  }

  const forbiddenOrchidea = /Orchidea[\s\S]{0,600}\b2 bagni?\b/i
  if (forbiddenOrchidea.test(apartmentsTs) || forbiddenOrchidea.test(contentTs)) {
    errors.push('Trovata frase non valida su Orchidea: "2 bagni"')
  }

  const forbiddenGiglio = /Giglio[\s\S]{0,700}area letto a castello/i
  if (forbiddenGiglio.test(apartmentsTs) || forbiddenGiglio.test(contentTs)) {
    errors.push('Trovata frase non valida su Giglio: "area letto a castello"')
  }

  const requiredGiglio = /Giglio[\s\S]{0,900}una piazza e mezza/i
  if (!requiredGiglio.test(apartmentsTs) || !requiredGiglio.test(contentTs)) {
    errors.push('Testo richiesto mancante su Giglio: "una piazza e mezza"')
  }

  if (errors.length) fail(errors)
  console.log("✅ Controllo integrita appartamenti superato")
}

main()
