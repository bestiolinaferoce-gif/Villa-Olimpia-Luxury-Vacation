#!/usr/bin/env node
/**
 * Verifica igiene repository.
 * Blocca file spazzatura o legacy che non devono piu tornare nel repo.
 */

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const ROOT = path.resolve(__dirname, "..")

const forbiddenTrackedPatterns = [
  /(^|\/)\.DS_Store$/,
  /\.bak$/,
  /(^|\/)tmp_.+/,
  /(^|\/)vercel\.env$/,
  /(^|\/)netlify\.toml$/,
  /(^|\/)project-config\.json$/,
  /(^|\/)validation_report\.json$/,
  /(^|\/)public\/images\/territorio\//,
  /(^|\/)public\/images\/appartamenti\//,
]

const legacyPaths = [
  "public/images/territorio",
  "public/images/appartamenti",
]

function fail(errors) {
  console.error("❌ Repository sporco o incoerente:\n")
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

function main() {
  const errors = []

  const trackedFiles = execSync("git ls-files", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean)

  for (const file of trackedFiles) {
    if (forbiddenTrackedPatterns.some((pattern) => pattern.test(file))) {
      errors.push(`file non consentito tracciato: ${file}`)
    }
  }

  for (const legacyPath of legacyPaths) {
    if (fs.existsSync(path.join(ROOT, legacyPath))) {
      errors.push(`cartella legacy ancora presente: ${legacyPath}`)
    }
  }

  if (errors.length) fail(errors)
  console.log("✅ Repository hygiene check superato")
}

main()
