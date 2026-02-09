#!/usr/bin/env node
/**
 * Report veloce sui lead raccolti in data/leads/*.ndjson
 */

const fs = require("fs")
const path = require("path")

const baseDir = process.env.LEADS_STORE_DIR
  ? path.resolve(process.env.LEADS_STORE_DIR)
  : path.join(process.cwd(), "data", "leads")

function loadLeads() {
  if (!fs.existsSync(baseDir)) return []
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith(".ndjson"))
  const leads = []
  for (const file of files) {
    const content = fs.readFileSync(path.join(baseDir, file), "utf8")
    for (const line of content.split("\n")) {
      if (!line.trim()) continue
      try {
        leads.push(JSON.parse(line))
      } catch {
        // ignora righe non parseabili
      }
    }
  }
  return leads
}

function printTopSources(leads) {
  const bySource = new Map()
  for (const lead of leads) {
    const source = lead.sourceNormalized || lead.source || "unknown"
    bySource.set(source, (bySource.get(source) || 0) + 1)
  }
  const rows = [...bySource.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8)
  console.log("\nTop sorgenti:")
  for (const [source, count] of rows) {
    console.log(`- ${source}: ${count}`)
  }
}

function main() {
  const leads = loadLeads()
  if (!leads.length) {
    console.log("Nessun lead trovato.")
    process.exit(0)
  }

  const hot = leads.filter((l) => l.leadTier === "HOT").length
  const warm = leads.filter((l) => l.leadTier === "WARM").length
  const agencies = leads.filter((l) => l.isAgency).length

  console.log(`Lead totali: ${leads.length}`)
  console.log(`HOT: ${hot} | WARM: ${warm} | COLD: ${leads.length - hot - warm}`)
  console.log(`Agenzie (B2B): ${agencies}`)

  printTopSources(leads)

  const latest = leads
    .filter((l) => l.receivedAt)
    .sort((a, b) => (a.receivedAt < b.receivedAt ? 1 : -1))
    .slice(0, 5)

  console.log("\nUltimi 5 lead:")
  for (const lead of latest) {
    console.log(
      `- ${lead.receivedAt} | ${lead.name} | ${lead.leadTier} | ${lead.sourceNormalized || "n/a"} | ${lead.email}`
    )
  }
}

main()
