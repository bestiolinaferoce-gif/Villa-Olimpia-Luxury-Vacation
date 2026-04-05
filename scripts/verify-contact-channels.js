#!/usr/bin/env node
/**
 * Verifica rapida: link wa.me rispondono; inbox lead nel codice è quella attesa.
 * Uso: node scripts/verify-contact-channels.js
 */
const https = require("https")
const fs = require("fs")
const path = require("path")

const EXPECTED_INBOX = "villaolimpiacaporizzuto@gmail.com"
const WA_NUMBERS = ["393335773390", "393290479193"]

function headRequest(url) {
  return new Promise((resolve) => {
    const req = https.request(
      url,
      { method: "HEAD", timeout: 12000 },
      (res) => {
        resolve({ ok: res.statusCode >= 200 && res.statusCode < 400, status: res.statusCode })
      }
    )
    req.on("error", (e) => resolve({ ok: false, error: e.message }))
    req.on("timeout", () => {
      req.destroy()
      resolve({ ok: false, error: "timeout" })
    })
    req.end()
  })
}

async function main() {
  let failed = false

  const inboxPath = path.join(__dirname, "..", "lib", "lead-inbox.ts")
  const inboxSrc = fs.readFileSync(inboxPath, "utf8")
  if (!inboxSrc.includes(EXPECTED_INBOX)) {
    console.error("[FAIL] lib/lead-inbox.ts non contiene", EXPECTED_INBOX)
    failed = true
  } else {
    console.log("[OK] PRIMARY_LEADS_INBOX =", EXPECTED_INBOX)
  }

  for (const n of WA_NUMBERS) {
    const url = `https://wa.me/${n}`
    const r = await headRequest(url)
    if (r.ok) {
      console.log("[OK] WhatsApp", url, "→ HTTP", r.status)
    } else {
      console.error("[FAIL] WhatsApp", url, r.error || r.status)
      failed = true
    }
  }

  process.exit(failed ? 1 : 0)
}

main()
