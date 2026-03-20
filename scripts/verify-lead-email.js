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
  const fileEnv = loadEnvLocal()
  const resend =
    process.env.RESEND_API_KEY || fileEnv.RESEND_API_KEY || ""
  const leadsTo =
    process.env.LEADS_TO_EMAIL || fileEnv.LEADS_TO_EMAIL || ""

  console.log("Verifica invio email (Resend + destinatario lead)\n")
  console.log("  RESEND_API_KEY:     ", resend ? "[OK] impostata" : "[!!] MANCANTE")
  console.log(
    "  LEADS_TO_EMAIL:     ",
    leadsTo ? `[OK] ${leadsTo}` : "[!!] MANCANTE"
  )
  console.log("")
  console.log(
    "  Su Vercel: Settings → Environment Variables → Production (e Preview se serve)"
  )
  console.log("  Variabili richieste: RESEND_API_KEY, LEADS_TO_EMAIL")
  console.log(
    "  Dopo averle aggiunte: Redeploy del progetto.\n"
  )

  let ok = true
  if (!resend || resend.startsWith("re_xxxx")) {
    console.log("  [!!] Senza RESEND_API_KEY valida le richieste dalla barra sticky non generano email (fallback WhatsApp).")
    ok = false
  }
  if (!leadsTo || leadsTo.includes("xxxxxxxx")) {
    console.log("  [!!] Senza LEADS_TO_EMAIL le email non hanno un destinatario configurato.")
    ok = false
  }

  if (ok) {
    console.log("  [OK] Configurazione minima presente per recapito email lead / disponibilità.\n")
    process.exit(0)
  }
  console.log("  Esci con codice 1: correggi .env.local o le variabili su Vercel.\n")
  process.exit(1)
}

main()
