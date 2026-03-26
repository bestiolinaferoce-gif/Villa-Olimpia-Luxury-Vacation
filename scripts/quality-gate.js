#!/usr/bin/env node
/**
 * Quality gate ferreo per Villa Olimpia.
 * Se qualcosa fallisce, il deploy va bloccato.
 */

const { spawnSync } = require("child_process")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")

const steps = [
  { label: "Repository hygiene", command: "node", args: ["scripts/check-repo-hygiene.js"] },
  { label: "SEO foundations", command: "node", args: ["scripts/check-seo-foundations.js"] },
  { label: "Apartment integrity", command: "node", args: ["scripts/check-apartment-integrity.js"] },
  { label: "Copy consistency", command: "node", args: ["scripts/check-site-copy-consistency.js"] },
  { label: "Analytics configuration", command: "node", args: ["scripts/verify-analytics.js"], optional: true },
  { label: "Production build", command: "npm", args: ["run", "build"] },
]

for (const step of steps) {
  console.log(`\n=== ${step.label} ===`)
  const result = spawnSync(step.command, step.args, {
    cwd: ROOT,
    stdio: "inherit",
    shell: false,
  })

  if (result.status !== 0) {
    if (step.optional) {
      console.warn(`\n[WARN] Step non bloccante fallito: ${step.label}`)
      continue
    }
    console.error(`\n[FAIL] Quality gate interrotto su: ${step.label}`)
    process.exit(result.status || 1)
  }
}

console.log("\n✅ Quality gate completato: repository, SEO, contenuti e build sono coerenti.")
