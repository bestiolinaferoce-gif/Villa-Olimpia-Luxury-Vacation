#!/usr/bin/env node
/**
 * Guardrail SEO e anti-regressione.
 * Controlla i punti che hanno gia creato problemi reali nel progetto.
 */

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8")
}

function assertContains(text, pattern, file, label, errors) {
  if (!pattern.test(text)) {
    errors.push(`${file}: elemento richiesto mancante (${label})`)
  }
}

function assertNotContains(text, pattern, file, label, errors) {
  if (pattern.test(text)) {
    errors.push(`${file}: trovato contenuto non valido (${label})`)
  }
}

function assertFileExists(file, errors) {
  if (!fs.existsSync(path.join(ROOT, file))) {
    errors.push(`${file}: file richiesto mancante`)
  }
}

function fail(errors) {
  console.error("❌ Regressioni SEO trovate:\n")
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

function main() {
  const errors = []

  const layout = read("app/layout.tsx")
  const metadata = read("lib/metadata.ts")
  const sitemap = read("app/sitemap.ts")
  const robotsRoute = read("app/robots.ts")
  const home = read("app/page.tsx")
  const appartamentiHub = read("app/appartamenti/page.tsx")
  const staticRobotsExists = fs.existsSync(path.join(ROOT, "public/robots.txt"))
  const robots = staticRobotsExists ? read("public/robots.txt") : ""

  assertContains(layout, /appartamenti\/\$\{getApartmentSlug\(apartment\)\}/, "app/layout.tsx", "slug canonici in structured data", errors)
  assertNotContains(layout, /\/appartamenti\/1\b/, "app/layout.tsx", "URL numerici structured data", errors)
  assertNotContains(layout, /UTM Builder/i, "app/layout.tsx", "snippet sporchi", errors)

  assertContains(metadata, /villaolimpiacaporizzuto\.com/, "lib/metadata.ts", "dominio ufficiale", errors)
  assertNotContains(metadata, /Giugno e Luglio 2026/i, "lib/metadata.ts", "metadata stagionali obsoleti", errors)

  assertContains(robotsRoute, /MetadataRoute\.Robots/, "app/robots.ts", "metadata route robots", errors)
  assertContains(robotsRoute, /sitemap:\s*`\$\{BASE_URL\}\/sitemap\.xml`/, "app/robots.ts", "sitemap metadata route", errors)
  assertContains(robotsRoute, /host:\s*BASE_URL/, "app/robots.ts", "host metadata route", errors)
  if (staticRobotsExists) {
    assertContains(robots, /^User-agent:\s*\*/im, "public/robots.txt", "user-agent valido", errors)
    assertContains(robots, /^Allow:\s*\//im, "public/robots.txt", "allow root", errors)
    assertContains(robots, /Sitemap:\s*https:\/\/villaolimpiacaporizzuto\.com\/sitemap\.xml/i, "public/robots.txt", "host corretto", errors)
  }
  assertContains(sitemap, /appartamenti/, "app/sitemap.ts", "rotte canoniche appartamenti", errors)
  assertNotContains(sitemap, /path:\s*"\/apartments"|path:\s*"\/rooms"|path:\s*"\/home"/, "app/sitemap.ts", "alias legacy in sitemap", errors)

  assertContains(home, /Scopri meglio Capo Rizzuto prima di prenotare/, "app/page.tsx", "hub link interni home", errors)
  assertNotContains(home, /apartment-\$\{apartment\.id\}/, "app/page.tsx", "link legacy appartamenti in home", errors)
  assertContains(appartamentiHub, /ItemList/, "app/appartamenti/page.tsx", "schema ItemList hub appartamenti", errors)

  if (errors.length) fail(errors)
  console.log("✅ SEO foundations check superato")
}

main()
