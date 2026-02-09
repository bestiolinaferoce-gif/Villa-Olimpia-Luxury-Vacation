#!/usr/bin/env node
/**
 * Test invio template WhatsApp Cloud API.
 * Uso:
 *   npm run whatsapp:test -- +393331112233
 */
const fs = require("fs")
const path = require("path")

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return
  const content = fs.readFileSync(filePath, "utf8")
  for (const line of content.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const idx = trimmed.indexOf("=")
    if (idx <= 0) continue
    const key = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim()
    if (!key) continue
    if (process.env[key] === undefined) {
      process.env[key] = value
    }
  }
}

function loadLocalEnv() {
  const root = process.cwd()
  loadEnvFile(path.join(root, ".env"))
  loadEnvFile(path.join(root, ".env.local"))
}

function normalizePhoneForWhatsApp(rawPhone) {
  const digits = (rawPhone || "").replace(/[^\d+]/g, "")
  if (!digits) return null
  if (digits.startsWith("+")) return digits.slice(1)
  if (digits.startsWith("00")) return digits.slice(2)
  if (digits.startsWith("0")) return `39${digits.slice(1)}`
  if (digits.startsWith("3")) return `39${digits}`
  return digits
}

async function main() {
  loadLocalEnv()
  const toArg = process.argv[2]
  if (!toArg) {
    console.error("Uso: npm run whatsapp:test -- +393331112233")
    process.exit(1)
  }

  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME || "lead_confirmation"
  const lang = process.env.WHATSAPP_TEMPLATE_LANG || "it"

  if (!token || !phoneNumberId) {
    console.error("Config mancante: WHATSAPP_ACCESS_TOKEN / WHATSAPP_PHONE_NUMBER_ID")
    process.exit(1)
  }

  const to = normalizePhoneForWhatsApp(toArg)
  if (!to) {
    console.error("Numero non valido.")
    process.exit(1)
  }

  const response = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: templateName,
        language: { code: lang },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: "Francesco" },
              { type: "text", text: "2026-07-10" },
              { type: "text", text: "2026-07-17" },
              { type: "text", text: "4" },
            ],
          },
        ],
      },
    }),
  })

  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    console.error("Errore invio WhatsApp:", response.status, payload || "")
    process.exit(1)
  }

  console.log("Invio WhatsApp OK")
  console.log(JSON.stringify(payload, null, 2))
}

main().catch((err) => {
  console.error("Errore script:", err)
  process.exit(1)
})
