#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const dns = require("dns").promises

const ROOT = process.cwd()
const DOMAIN = "villaolimpiacaporizzuto.com"
const WWW_DOMAIN = `www.${DOMAIN}`
const EXPECTED = {
  lat: "38.913856",
  lng: "17.0754964",
  street: "Località Capopiccolo snc",
  postalCode: "88841",
}

function read(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), "utf8")
}

async function resolveDomain(host) {
  try {
    const addresses = await dns.resolve(host)
    return { ok: true, addresses }
  } catch (error) {
    return { ok: false, error: error.message }
  }
}

function checkContains(content, token) {
  return content.includes(token)
}

async function main() {
  const layout = read("app/layout.tsx")
  const localeLayout = read("app/[locale]/layout.tsx")
  const constants = read("lib/constants.ts")

  const checks = [
    {
      id: "layout_geo_coordinates",
      ok: checkContains(layout, EXPECTED.lat) && checkContains(layout, EXPECTED.lng),
      detail: "Coordinate presenti in app/layout.tsx",
    },
    {
      id: "locale_layout_geo_coordinates",
      ok: checkContains(localeLayout, EXPECTED.lat) && checkContains(localeLayout, EXPECTED.lng),
      detail: "Coordinate presenti in app/[locale]/layout.tsx",
    },
    {
      id: "layout_address_consistency",
      ok: checkContains(layout, EXPECTED.street) && checkContains(layout, EXPECTED.postalCode),
      detail: "Indirizzo consistente in app/layout.tsx",
    },
    {
      id: "constants_geo_consistency",
      ok:
        checkContains(constants, `lat: ${EXPECTED.lat}`) &&
        checkContains(constants, `lng: ${EXPECTED.lng}`) &&
        checkContains(constants, `street: "${EXPECTED.street}"`) &&
        checkContains(constants, `postalCode: "${EXPECTED.postalCode}"`),
      detail: "Coordinate e indirizzo consistenti in lib/constants.ts",
    },
    {
      id: "has_map_property",
      ok: checkContains(layout, "hasMap") && checkContains(localeLayout, "hasMap"),
      detail: "JSON-LD contiene hasMap in layout principali",
    },
  ]

  const dnsRoot = await resolveDomain(DOMAIN)
  const dnsWww = await resolveDomain(WWW_DOMAIN)

  const result = {
    timestamp: new Date().toISOString(),
    domain: DOMAIN,
    checks,
    dns: {
      root: dnsRoot,
      www: dnsWww,
    },
    summary: {
      totalChecks: checks.length,
      passedChecks: checks.filter((c) => c.ok).length,
      failedChecks: checks.filter((c) => !c.ok).map((c) => c.id),
    },
  }

  const isHealthy = result.summary.failedChecks.length === 0

  console.log(JSON.stringify(result, null, 2))
  process.exit(isHealthy ? 0 : 1)
}

main().catch((error) => {
  console.error("geo-verifica failed:", error)
  process.exit(1)
})
