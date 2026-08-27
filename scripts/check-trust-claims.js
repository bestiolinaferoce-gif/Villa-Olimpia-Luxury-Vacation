#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")
const SEARCH_ROOTS = ["app", "components", "lib"]
const errors = []

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return /\.(ts|tsx)$/.test(entry.name) ? [full] : []
  })
}

const forbidden = [
  { pattern: /\b(?:4\.9|9\.4)\s*\/\s*5\b|ratingValue\s*:\s*["'](?:4\.9|9\.4)["']/i, label: "valutazione non documentata" },
  { pattern: /\b(?:62|100)\+?\s+recension/i, label: "numero recensioni non documentato" },
  { pattern: /SEASONAL_LODGE_UI|availabilityLeft|getAvailabilityPercent/, label: "disponibilità stagionale manuale" },
  { pattern: /fine agosto/i, label: "campagna di agosto scaduta" },
  { pattern: /(?:€\s*120|120\s*euro).{0,30}(?:notte|night)/i, label: "tariffa pubblica non sincronizzata" },
  { pattern: /€\s*\{(?:price|apartment\.price)/, label: "tariffa statica esposta nel componente" },
]

for (const root of SEARCH_ROOTS) {
  for (const file of walk(path.join(ROOT, root))) {
    const source = fs.readFileSync(file, "utf8")
    for (const rule of forbidden) {
      if (rule.pattern.test(source)) {
        errors.push(`${path.relative(ROOT, file)}: ${rule.label}`)
      }
    }
  }
}

const calendar = fs.readFileSync(path.join(ROOT, "components/availability-calendar.tsx"), "utf8")
if (!calendar.includes('snapshot.status === "verified"')) {
  errors.push("components/availability-calendar.tsx: manca il controllo fail-closed")
}

if (errors.length) {
  console.error("❌ Controlli fiducia falliti:")
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log("✅ Controlli fiducia e disponibilità superati")
