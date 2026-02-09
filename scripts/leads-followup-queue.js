#!/usr/bin/env node
/**
 * Coda follow-up lead: mostra chi contattare subito con messaggio pronto.
 * Uso:
 *   npm run leads:queue
 *   npm run leads:queue -- --only-overdue
 */

const fs = require("fs")
const path = require("path")

const onlyOverdue = process.argv.includes("--only-overdue")

const baseDir = process.env.LEADS_STORE_DIR
  ? path.resolve(process.env.LEADS_STORE_DIR)
  : path.join(process.cwd(), "data", "leads")

function loadLeads() {
  if (!fs.existsSync(baseDir)) return []
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith(".ndjson"))
  const rows = []
  for (const file of files) {
    const raw = fs.readFileSync(path.join(baseDir, file), "utf8")
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue
      try {
        rows.push(JSON.parse(line))
      } catch {
        // skip bad line
      }
    }
  }
  return rows
}

function byDeadline(a, b) {
  const ad = new Date(a?.followUpPlan?.firstContactBy || 0).getTime()
  const bd = new Date(b?.followUpPlan?.firstContactBy || 0).getTime()
  return ad - bd
}

function main() {
  const leads = loadLeads()
  if (!leads.length) {
    console.log("Nessun lead disponibile in archivio.")
    return
  }

  const now = Date.now()
  const queue = leads
    .filter((l) => l?.followUpPlan?.firstContactBy)
    .sort(byDeadline)
    .filter((l) => {
      if (!onlyOverdue) return true
      return new Date(l.followUpPlan.firstContactBy).getTime() <= now
    })
    .slice(0, 15)

  if (!queue.length) {
    console.log("Nessun lead in coda follow-up.")
    return
  }

  console.log(`Lead in coda follow-up: ${queue.length}\n`)
  for (const lead of queue) {
    const deadline = new Date(lead.followUpPlan.firstContactBy).toISOString()
    const overdue = new Date(deadline).getTime() <= now ? "OVERDUE" : "in tempo"
    console.log(`[${overdue}] ${lead.leadId} | ${lead.name} | ${lead.leadTier} | ${lead.phone}`)
    console.log(`  Entro: ${deadline} | Canale: ${lead.followUpPlan.channel}`)
    console.log(`  Check-in: ${lead.checkIn} -> ${lead.checkOut} | Ospiti: ${lead.guests}`)
    console.log(`  Fonte: ${lead.sourceNormalized || lead.source || "n/a"}`)
    console.log(`  Draft WA: ${lead.followUpPlan.whatsappDraft}`)
    console.log("")
  }
}

main()
