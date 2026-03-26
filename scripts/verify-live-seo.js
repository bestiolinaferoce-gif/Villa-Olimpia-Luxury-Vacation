#!/usr/bin/env node
/**
 * Verifica SEO live sul dominio pubblico.
 * Controlla endpoint critici, redirect canonici e segnali base per Google.
 */

const https = require("https")
const http = require("http")

const BASE_URL = process.env.SITE_URL || "https://villaolimpiacaporizzuto.com"

const checks = [
  { label: "Home", url: `${BASE_URL}/`, expectStatus: 200, expect: [/Villa Olimpia/i, /Appartamenti con Piscina a Capo Rizzuto/i] },
  { label: "Robots", url: `${BASE_URL}/robots.txt`, expectStatus: 200, expect: [/Sitemap:/i, /Host:\s*villaolimpiacaporizzuto\.com/i] },
  { label: "Sitemap", url: `${BASE_URL}/sitemap.xml`, expectStatus: 200, expect: [/<urlset/i, /appartamenti\/frangipane/i] },
  { label: "Appartamenti hub", url: `${BASE_URL}/appartamenti`, expectStatus: 200, expect: [/Appartamenti a Capo Rizzuto/i, /canonical/i] },
  { label: "Prenota", url: `${BASE_URL}/prenota`, expectStatus: 200, expect: [/Prenota/i] },
]

const redirectChecks = [
  { label: "WWW canonico", url: "https://www.villaolimpiacaporizzuto.com", expectLocation: /^https:\/\/villaolimpiacaporizzuto\.com\/?$/i },
  { label: "Legacy apartments", url: `${BASE_URL}/apartments`, expectLocation: /\/appartamenti$/i },
  { label: "Legacy home", url: `${BASE_URL}/home`, expectLocation: /^(https:\/\/villaolimpiacaporizzuto\.com\/|\/)$/i },
  { label: "Legacy apartment id", url: `${BASE_URL}/appartamenti/1`, expectLocation: /\/appartamenti\/frangipane$/i },
]

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http
    const req = lib.request(
      url,
      { method: "GET", headers: { "User-Agent": "VillaOlimpiaLiveSEO/1.0" } },
      (res) => {
        let body = ""
        res.on("data", (chunk) => {
          body += chunk
        })
        res.on("end", () => {
          resolve({
            statusCode: res.statusCode || 0,
            headers: res.headers,
            body,
          })
        })
      }
    )
    req.on("error", reject)
    req.end()
  })
}

function fail(errors) {
  console.error("❌ Verifica live SEO fallita:\n")
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

async function main() {
  const errors = []

  console.log(`Verifica live SEO su: ${BASE_URL}\n`)

  for (const check of checks) {
    const response = await fetchUrl(check.url)
    if (response.statusCode !== check.expectStatus) {
      errors.push(`${check.label}: status ${response.statusCode}, atteso ${check.expectStatus}`)
      continue
    }
    for (const pattern of check.expect) {
      if (!pattern.test(response.body)) {
        errors.push(`${check.label}: contenuto atteso non trovato (${pattern})`)
      }
    }
    console.log(`✅ ${check.label}`)
  }

  for (const check of redirectChecks) {
    const response = await fetchUrl(check.url)
    const location = response.headers.location || ""
    if (![301, 302, 307, 308].includes(response.statusCode)) {
      errors.push(`${check.label}: redirect assente, status ${response.statusCode}`)
      continue
    }
    if (!check.expectLocation.test(location)) {
      errors.push(`${check.label}: location inattesa (${location})`)
      continue
    }
    console.log(`✅ ${check.label}`)
  }

  if (errors.length) fail(errors)

  console.log("\n✅ Verifica live SEO completata: dominio, redirect, robots, sitemap e pagine chiave risultano coerenti.")
}

main().catch((error) => {
  console.error("❌ Errore durante la verifica live SEO:", error.message)
  process.exit(1)
})
