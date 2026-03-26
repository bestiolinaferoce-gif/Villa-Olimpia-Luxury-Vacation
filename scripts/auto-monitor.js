#!/usr/bin/env node

const fs = require("fs")
const os = require("os")
const path = require("path")
const { execSync } = require("child_process")

const apartmentSlugs = [
  "frangipane",
  "fiordaliso",
  "orchidea",
  "tulipano",
  "giglio",
  "lavanda",
  "geranio",
  "gardenia",
  "azalea",
]

const criticalFiles = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/appartamenti/page.tsx",
  "app/prenota/page.tsx",
  "app/contatti/page.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "lib/metadata.ts",
  "data/apartments.ts",
  "data/apartment-content.ts",
]

function listImages(dir) {
  return fs.readdirSync(dir).filter((file) => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8")
  } catch {
    return ""
  }
}

async function runHealthCheck() {
  const health = {
    timestamp: new Date(),
    errors: [],
    warnings: [],
    fixes: [],
  }

  const root = process.cwd()

  for (const file of criticalFiles) {
    const fullPath = path.join(root, file)
    if (!fs.existsSync(fullPath)) {
      health.errors.push(`File critico mancante: ${file}`)
    }
  }

  const apartmentImagesRoot = path.join(root, "public/images/villa/appartamenti")
  if (!fs.existsSync(apartmentImagesRoot)) {
    health.errors.push("Cartella immagini appartamenti mancante: public/images/villa/appartamenti")
  } else {
    for (const slug of apartmentSlugs) {
      const dir = path.join(apartmentImagesRoot, slug)
      if (!fs.existsSync(dir)) {
        health.errors.push(`Cartella immagini mancante per ${slug}`)
        continue
      }

      const images = listImages(dir)
      if (images.length === 0) {
        health.errors.push(`${slug}: nessuna immagine disponibile`)
      } else if (images.length < 3) {
        health.warnings.push(`${slug}: solo ${images.length} immagini disponibili`)
      }

      if (!images.some((image) => /^main\./i.test(image))) {
        health.warnings.push(`${slug}: immagine main mancante`)
      }
    }
  }

  const layoutSource = readFileSafe(path.join(root, "app/layout.tsx"))
  const metadataSource = readFileSafe(path.join(root, "lib/metadata.ts"))

  if (layoutSource.includes("/appartamenti/1")) {
    health.errors.push("Structured data con URL appartamento numerico vecchio")
  }

  if (layoutSource.includes("UTM Builder")) {
    health.errors.push('Riferimento sporco "UTM Builder" trovato in app/layout.tsx')
  }

  if (metadataSource.includes("Giugno e Luglio 2026")) {
    health.warnings.push("Metadata home ancora datati su Giugno/Luglio 2026")
  }

  if (!fs.existsSync(path.join(root, "public/favicon-villa-olimpia.svg"))) {
    health.errors.push("Favicon ufficiale Villa Olimpia mancante")
  }

  try {
    const trackedJunk = execSync(
      "git ls-files | rg '(^|/)(\\.DS_Store|.*\\.bak|tmp_.*|vercel\\.env|netlify\\.toml|project-config\\.json|validation_report\\.json)$' || true",
      { cwd: root, encoding: "utf8" }
    ).trim()

    if (trackedJunk) {
      trackedJunk
        .split("\n")
        .filter(Boolean)
        .forEach((file) => health.errors.push(`File sporco tracciato nel repo: ${file}`))
    }
  } catch {
    health.warnings.push("Impossibile verificare i file sporchi tracciati via git")
  }

  return health
}

async function generateReport(health) {
  const report = `
=== HEALTH CHECK ${health.timestamp.toISOString()} ===
Errors: ${health.errors.length}
Warnings: ${health.warnings.length}
Fixes Applied: ${health.fixes.length}

${health.errors.length > 0 ? "ERRORS:\n" + health.errors.map((e) => `  [ERR] ${e}`).join("\n") + "\n" : ""}
${health.warnings.length > 0 ? "WARNINGS:\n" + health.warnings.map((w) => `  [WARN] ${w}`).join("\n") + "\n" : ""}
${health.fixes.length > 0 ? "FIXES:\n" + health.fixes.map((f) => `  [FIX] ${f}`).join("\n") + "\n" : ""}
`

  const reportPath = process.env.HEALTH_REPORT_PATH || path.join(os.tmpdir(), "villa-olimpia-health-check.log")
  fs.writeFileSync(reportPath, report)
  console.log(report)
  console.log(`Report salvato in: ${reportPath}`)
  return health
}

if (require.main === module) {
  runHealthCheck()
    .then(generateReport)
    .then((health) => {
      process.exit(health.errors.length > 0 ? 1 : 0)
    })
    .catch((error) => {
      console.error("Error running health check:", error)
      process.exit(1)
    })
}

module.exports = { runHealthCheck, generateReport }
