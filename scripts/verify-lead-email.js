#!/usr/bin/env node
/**
 * Verifica che RESEND_API_KEY e LEADS_TO_EMAIL siano impostati
 * per l'invio email da /api/lead e /api/availability-request (barra sticky).
 *
 * Uso: node scripts/verify-lead-email.js
 *      npm run verify:lead-email
 */
const fs = require("fs")
const path = require("path")
const https = require("https")

const ROOT = path.resolve(__dirname, "..")

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local")
  const out = {}
  try {
    if (!fs.existsSync(envPath)) return out
    fs.readFileSync(envPath, "utf8").split("\n").forEach((line) => {
      const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
      if (!m) return
      const k = m[1]
      let v = m[2].replace(/^["']|["']$/g, "").trim()
      if (k === "RESEND_API_KEY" || k === "LEADS_TO_EMAIL") out[k] = v
    })
  } catch (_) {}
  return out
}

function main() {
  const siteUrl = process.env.SITE_URL || ""
  const fileEnv = loadEnvLocal()
  const resend =
    process.env.RESEND_API_KEY || fileEnv.RESEND_API_KEY || ""
  const leadsTo =
    process.env.LEADS_TO_EMAIL || fileEnv.LEADS_TO_EMAIL || ""

  console.log("Verifica invio email (Resend + destinatario lead)\n")
  const localPrefix = siteUrl ? "Locale RESEND_API_KEY:" : "RESEND_API_KEY:     "
  const localLeadsPrefix = siteUrl ? "Locale LEADS_TO_EMAIL:" : "LEADS_TO_EMAIL:     "
  console.log(" ", localPrefix, resend ? "[OK] impostata" : "[--] non presente in .env.local")
  console.log(
    " ",
    localLeadsPrefix,
    leadsTo ? `[OK] ${leadsTo}` : "[--] non presente in .env.local"
  )
  console.log("")
  if (siteUrl) console.log("  SITE_URL:", siteUrl)
  console.log(
    "  Su Vercel: Settings → Environment Variables → Production (e Preview se serve)"
  )
  console.log("  Variabili richieste: RESEND_API_KEY, LEADS_TO_EMAIL")
  console.log(
    "  Dopo averle aggiunte: Redeploy del progetto.\n"
  )

  let ok = true
  if (!siteUrl && (!resend || resend.startsWith("re_xxxx"))) {
    console.log("  [!!] Senza RESEND_API_KEY valida le richieste dalla barra sticky non generano email (fallback WhatsApp).")
    ok = false
  }
  if (!siteUrl && (!leadsTo || leadsTo.includes("xxxxxxxx"))) {
    console.log("  [!!] Senza LEADS_TO_EMAIL le email non hanno un destinatario configurato.")
    ok = false
  }

  if (!siteUrl) {
    if (ok) {
      console.log("  [OK] Configurazione minima presente per recapito email lead / disponibilità.\n")
      process.exit(0)
    }
    console.log("  Esci con codice 1: correggi .env.local o le variabili su Vercel.\n")
    process.exit(1)
  }

  const url = new URL("/api/lead/status", siteUrl)
  https
    .get(url, (res) => {
      let body = ""
      res.on("data", (chunk) => (body += chunk))
      res.on("end", () => {
        try {
          const status = JSON.parse(body)
          const prodOk = Boolean(status?.channels?.resendConfigured)
          console.log("")
          console.log("  Produzione /api/lead/status:")
          console.log("  RESEND:", prodOk ? "[OK] configurato" : "[!!] non configurato")
          console.log("  WEBHOOK:", status?.channels?.webhookConfigured ? "[OK] configurato" : "[--] assente")
          console.log("  TELEGRAM:", status?.channels?.telegramConfigured ? "[OK] configurato" : "[--] assente")
          process.exit(prodOk ? 0 : 1)
        } catch (error) {
          console.log("  [!!] Risposta produzione non leggibile:", error.message)
          process.exit(1)
        }
      })
    })
    .on("error", (error) => {
      console.log("  [!!] Errore verifica produzione:", error.message)
      process.exit(1)
    })
}

main()
