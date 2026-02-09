#!/usr/bin/env node
/**
 * Verifica coerenza testi pubblici del sito.
 * Blocca riferimenti geografici incoerenti e distanze obsolete.
 */

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8")
}

function assertNotContains(text, pattern, file, label, errors) {
  if (pattern.test(text)) {
    errors.push(`${file}: trovato testo non valido (${label})`)
  }
}

function assertContains(text, pattern, file, label, errors) {
  if (!pattern.test(text)) {
    errors.push(`${file}: testo richiesto mancante (${label})`)
  }
}

function fail(errors) {
  console.error("❌ Incongruenze copy trovate:\n")
  for (const err of errors) console.error(`- ${err}`)
  process.exit(1)
}

function main() {
  const errors = []

  const reviewsFile = "data/reviews-detailed.ts"
  const reviews = read(reviewsFile)
  assertNotContains(reviews, /\bTropea\b/i, reviewsFile, "Tropea", errors)
  assertNotContains(reviews, /\bCapo Vaticano\b/i, reviewsFile, "Capo Vaticano", errors)
  assertNotContains(reviews, /\bGrotticelle\b/i, reviewsFile, "Grotticelle", errors)
  assertNotContains(reviews, /\bRiaci\b/i, reviewsFile, "Riaci", errors)

  const distanceFiles = [
    "app/location/page.tsx",
    "app/cosa-fare-capo-rizzuto/page.tsx",
    "app/spiagge-capo-rizzuto/page.tsx",
    "app/area-marina-protetta/page.tsx",
    "app/le-castella/page.tsx",
    "app/capo-rizzuto/page.tsx",
  ]

  for (const file of distanceFiles) {
    const text = read(file)
    assertNotContains(text, /\b500m\b/i, file, "500m", errors)
    assertNotContains(text, /\b500 metri\b/i, file, "500 metri", errors)
    assertContains(text, /(meno di 100 metri|meno di 100 m|100 metri|100 m)/i, file, "distanza spiaggia aggiornata", errors)
  }

  const orchideaFiles = ["data/apartments.ts", "data/apartment-content.ts", "data/apartments-seo.ts"]
  for (const file of orchideaFiles) {
    const text = read(file)
    assertNotContains(text, /Orchidea[\s\S]{0,900}\b2 bagni?\b/i, file, "Orchidea con 2 bagni", errors)
    assertContains(text, /Orchidea[\s\S]{0,900}\b1 bagno\b/i, file, "Orchidea con 1 bagno", errors)
  }

  const giglioFiles = ["data/apartments.ts", "data/apartment-content.ts", "data/apartments-seo.ts"]
  for (const file of giglioFiles) {
    const text = read(file)
    assertNotContains(text, /Giglio[\s\S]{0,900}area letto a castello/i, file, "Giglio con letto a castello", errors)
    assertContains(text, /Giglio[\s\S]{0,900}una piazza e mezza/i, file, "Giglio con una piazza e mezza", errors)
  }

  if (errors.length) fail(errors)
  console.log("✅ Controllo coerenza copy superato")
}

main()
