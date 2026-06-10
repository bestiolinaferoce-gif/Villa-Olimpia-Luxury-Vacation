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
  const locationData = read("lib/location-data.ts")

  const checks = [
    {
      id: "layout_geo_coordinates",
      ok:
        checkContains(layout, "VILLA_OLIMPIA_LOCATION.coordinates.latitude") &&
        checkContains(layout, "VILLA_OLIMPIA_LOCATION.coordinates.longitude"),
      detail: "app/layout.tsx usa le coordinate canoniche da lib/location-data.ts",
    },
    {
      id: "locale_layout_inherits_root_geo",
      ok:
        checkContains(localeLayout, "NextIntlClientProvider") &&
        !checkContains(localeLayout, "GeoCoordinates") &&
        !checkContains(localeLayout, "hasMap"),
      detail: "app/[locale]/layout.tsx eredita schema e coordinate dal root layout",
    },
    {
      id: "layout_address_consistency",
      ok:
        checkContains(layout, "VILLA_OLIMPIA_LOCATION.address") &&
        checkContains(locationData, EXPECTED.street) &&
        checkContains(locationData, EXPECTED.postalCode),
      detail: "Indirizzo root derivato dalla fonte canonica in lib/location-data.ts",
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
      ok: checkContains(layout, "hasMap") && checkContains(layout, "VILLA_OLIMPIA_LOCATION.coordinates.googleMaps"),
      detail: "JSON-LD root contiene hasMap collegato al link Google canonico",
    },
    {
      id: "location_data_geo_consistency",
      ok:
        checkContains(locationData, `latitude: ${EXPECTED.lat}`) &&
        checkContains(locationData, `longitude: ${EXPECTED.lng}`) &&
        checkContains(locationData, "VILLA_OLIMPIA_GOOGLE_MAPS_URL") &&
        checkContains(locationData, "VILLA_OLIMPIA_GOOGLE_DIRECTIONS_URL"),
      detail: "lib/location-data.ts contiene coordinate e link Google canonici",
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
