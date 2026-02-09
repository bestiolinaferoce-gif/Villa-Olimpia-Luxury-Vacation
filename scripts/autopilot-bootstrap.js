#!/usr/bin/env node
/**
 * Autopilot bootstrap:
 * - normalizza .env.local con default utili
 * - crea cartelle operative
 * - genera file link marketing
 * - salva report stato in data/marketing/autopilot-status.json
 */

const fs = require("fs")
const path = require("path")

const root = process.cwd()
const envPath = path.join(root, ".env.local")
const marketingDir = path.join(root, "data", "marketing")
const leadsDir = path.join(root, "data", "leads")

const defaults = {
  RESEND_API_KEY: "",
  LEADS_FROM_EMAIL: "",
  LEADS_AUTOREPLY_ENABLED: "true",
  LEADS_STORE_DIR: "data/leads",
  WHATSAPP_ACCESS_TOKEN: "",
  WHATSAPP_PHONE_NUMBER_ID: "",
  WHATSAPP_TEMPLATE_NAME: "lead_confirmation",
  WHATSAPP_TEMPLATE_LANG: "it",
  LEADS_TO_EMAIL: "villaolimpiacaporizzuto@gmail.com",
}

const requiredExternal = [
  "RESEND_API_KEY",
  "LEADS_FROM_EMAIL",
  "WHATSAPP_ACCESS_TOKEN",
  "WHATSAPP_PHONE_NUMBER_ID",
]

function parseEnv(content) {
  const out = {}
  for (const line of content.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const idx = trimmed.indexOf("=")
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim()
    if (key) out[key] = value
  }
  return out
}

function stringifyEnv(env) {
  const keys = Object.keys(env).sort()
  return keys.map((k) => `${k}=${env[k]}`).join("\n") + "\n"
}

function buildCampaignLinks(campaign) {
  const base = "https://villaolimpiacaporizzuto.com/contatti"
  const channels = [
    { source: "instagram", medium: "social", label: "Instagram Bio" },
    { source: "facebook", medium: "social", label: "Facebook Page" },
    { source: "google", medium: "cpc", label: "Google Ads" },
    { source: "airbnb", medium: "referral", label: "Airbnb profile" },
    { source: "booking", medium: "referral", label: "Booking profile" },
    { source: "agency_partners", medium: "b2b", label: "Agenzie Partner" },
    { source: "whatsapp_broadcast", medium: "owned", label: "WhatsApp Broadcast" },
  ]

  const lines = [`Campaign: ${campaign}`, ""]
  for (const ch of channels) {
    const params = new URLSearchParams({
      source: "campaign_link",
      utm_source: ch.source,
      utm_medium: ch.medium,
      utm_campaign: campaign,
    })
    lines.push(`${ch.label}:`)
    lines.push(`${base}?${params.toString()}#prenota`)
    lines.push("")
  }
  return lines.join("\n")
}

function main() {
  const envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : ""
  const env = parseEnv(envContent)

  for (const [k, v] of Object.entries(defaults)) {
    if (!env[k] || !String(env[k]).trim()) env[k] = v
  }

  fs.writeFileSync(envPath, stringifyEnv(env), "utf8")
  fs.mkdirSync(marketingDir, { recursive: true })
  fs.mkdirSync(leadsDir, { recursive: true })

  const month = new Date().toISOString().slice(0, 7).replace("-", "_")
  const campaignName = `always_on_${month}`
  const links = buildCampaignLinks(campaignName)
  const linksPath = path.join(marketingDir, `campaign-links-${campaignName}.txt`)
  fs.writeFileSync(linksPath, links, "utf8")

  const missing = requiredExternal.filter((k) => !env[k] || !String(env[k]).trim())
  const status = {
    generatedAt: new Date().toISOString(),
    envPath,
    linksPath,
    leadsDir,
    missingExternalConfig: missing,
    ready: missing.length === 0,
  }

  const statusPath = path.join(marketingDir, "autopilot-status.json")
  fs.writeFileSync(statusPath, JSON.stringify(status, null, 2), "utf8")

  console.log("Autopilot bootstrap completato.")
  console.log(`- Env aggiornato: ${envPath}`)
  console.log(`- Link campagna: ${linksPath}`)
  console.log(`- Status: ${statusPath}`)
  if (missing.length) {
    console.log(`- Config esterna mancante: ${missing.join(", ")}`)
  } else {
    console.log("- Config esterna completa.")
  }
}

main()
