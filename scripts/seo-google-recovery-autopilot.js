#!/usr/bin/env node
/**
 * Autopilota SEO/Google per recupero richieste soggiorno.
 * Esegue i controlli ripetibili e genera un report giornaliero con priorita operative.
 */

const fs = require("fs")
const https = require("https")
const path = require("path")
const { execFileSync } = require("child_process")

const ROOT = path.resolve(__dirname, "..")
const SITE_URL = process.env.SITE_URL || "https://villaolimpiacaporizzuto.com"
const REPORT_DIR = path.join(ROOT, "reports", "seo-google-autopilot")
const TODAY = new Date().toISOString().slice(0, 10)

const priorityPages = [
  { label: "Giugno 2026", path: "/giugno-2026", intent: "vendita giugno immediata" },
  { label: "Prenota", path: "/prenota", intent: "conversione richiesta disponibilita" },
  { label: "Contatti", path: "/contatti", intent: "telefono, WhatsApp, form diretto" },
  { label: "Home", path: "/", intent: "brand e domanda generica" },
  {
    label: "Bandiera Blu",
    path: "/bandiera-blu-2026-isola-capo-rizzuto",
    intent: "query mare pulito e fiducia territoriale",
  },
]

const campaignChannels = [
  { label: "Google Ads", source: "google", medium: "cpc" },
  { label: "Google Business Profile", source: "google_business_profile", medium: "organic" },
  { label: "WhatsApp Broadcast", source: "whatsapp_broadcast", medium: "owned" },
  { label: "Facebook", source: "facebook", medium: "social" },
  { label: "Instagram", source: "instagram", medium: "social" },
]

const checks = [
  ["check:seo", "Fondamenta SEO locali"],
  ["verify:analytics", "Analytics live"],
  ["verify:live-seo", "SEO live produzione"],
  ["verify:contact-channels", "WhatsApp/link contatto"],
]

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      { headers: { "User-Agent": "VillaOlimpiaSEOAutopilot/1.0" }, timeout: 15000 },
      (res) => {
        let body = ""
        res.on("data", (chunk) => {
          body += chunk
        })
        res.on("end", () => resolve({ status: res.statusCode || 0, headers: res.headers, body }))
      }
    )
    req.on("error", reject)
    req.on("timeout", () => {
      req.destroy(new Error(`Timeout su ${url}`))
    })
    req.end()
  })
}

function runNpmScript(scriptName, label) {
  try {
    const output = execFileSync("npm", ["run", scriptName], {
      cwd: ROOT,
      encoding: "utf8",
      env: { ...process.env, SITE_URL },
      stdio: ["ignore", "pipe", "pipe"],
    })
    return { label, scriptName, ok: true, output: output.trim() }
  } catch (error) {
    return {
      label,
      scriptName,
      ok: false,
      output: `${error.stdout || ""}\n${error.stderr || ""}`.trim() || error.message,
    }
  }
}

function buildCampaignUrl(pagePath, channel) {
  const params = new URLSearchParams({
    source: "campaign_link",
    utm_source: channel.source,
    utm_medium: channel.medium,
    utm_campaign: "giugno_2026_recovery",
  })
  return `${SITE_URL}${pagePath}?${params.toString()}`
}

function extractSitemapEntry(xml, pagePath) {
  const pageUrl = pagePath === "/" ? SITE_URL : `${SITE_URL}${pagePath}`
  const escaped = pageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const match = xml.match(new RegExp(`<url>[\\s\\S]*?<loc>${escaped}\\/?</loc>[\\s\\S]*?</url>`, "i"))
  if (!match) return null
  const lastmod = match[0].match(/<lastmod>(.*?)<\/lastmod>/i)?.[1] || "n/a"
  const changefreq = match[0].match(/<changefreq>(.*?)<\/changefreq>/i)?.[1] || "n/a"
  const priority = match[0].match(/<priority>(.*?)<\/priority>/i)?.[1] || "n/a"
  return { lastmod, changefreq, priority }
}

async function inspectPriorityPages() {
  const sitemap = await fetchText(`${SITE_URL}/sitemap.xml`)
  const pages = []

  for (const page of priorityPages) {
    const url = page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`
    const response = await fetchText(url)
    const canonicalPattern = new RegExp(
      `<link[^>]+rel=["']canonical["'][^>]+href=["']${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/?["']`,
      "i"
    )
    pages.push({
      ...page,
      url,
      ok: response.status === 200,
      status: response.status,
      canonical: canonicalPattern.test(response.body),
      title: response.body.match(/<title>(.*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() || "n/a",
      sitemap: extractSitemapEntry(sitemap.body, page.path),
    })
  }

  return pages
}

function renderStatus(ok) {
  return ok ? "OK" : "ATTENZIONE"
}

function renderReport(scriptResults, pages) {
  const failed = scriptResults.filter((item) => !item.ok)
  const badPages = pages.filter((page) => !page.ok || !page.canonical || !page.sitemap)

  const report = [
    `# Autopilota SEO/Google Villa Olimpia - ${TODAY}`,
    "",
    `Dominio controllato: ${SITE_URL}`,
    "",
    "## Stato tecnico",
    ...scriptResults.map((item) => `- ${renderStatus(item.ok)} - ${item.label} (\`npm run ${item.scriptName}\`)`),
    "",
    "## Pagine da spingere su Google",
    ...pages.map((page) => {
      const sitemap = page.sitemap
        ? `sitemap lastmod ${page.sitemap.lastmod}, freq ${page.sitemap.changefreq}, priority ${page.sitemap.priority}`
        : "non trovata in sitemap"
      return `- ${renderStatus(page.ok && page.canonical && page.sitemap)} - ${page.label}: ${page.url} - HTTP ${page.status}, canonical ${page.canonical ? "si" : "no"}, ${sitemap}. Intento: ${page.intent}.`
    }),
    "",
    "## Azioni Google Search Console",
    "- Richiedi indicizzazione solo per queste URL, in questo ordine: /giugno-2026, /prenota, /contatti, /, /bandiera-blu-2026-isola-capo-rizzuto.",
    "- Non richiedere indicizzazione per sitemap.xml, font .woff2, URL vecchie con redirect, URL noindex o duplicati canonici: sono rumore normale.",
    "- Se una delle 5 URL sopra risulta 'URL non su Google', usa 'Testa URL pubblicato' e poi 'Richiedi indicizzazione'.",
    "",
    "## Azioni Google Business Profile",
    "- Pubblica un post/offerta oggi: 'Giugno a Capo Rizzuto: disponibilita limitate, appartamenti con piscina, prenotazione diretta'. Link: /giugno-2026 con UTM Google Business Profile.",
    "- Aggiungi 3 foto reali recenti: piscina/esterni, appartamento luminoso, mare o Bandiera Blu. Evita immagini generiche.",
    "- Controlla che telefono, sito e pulsante messaggio puntino ai contatti corretti.",
    "",
    "## Mini campagna traffico",
    ...priorityPages.slice(0, 3).flatMap((page) => [
      `### ${page.label}`,
      ...campaignChannels.map((channel) => `- ${channel.label}: ${buildCampaignUrl(page.path, channel)}`),
    ]),
    "",
    "## Google Ads consigliato",
    "- Budget emergenza: 10-20 euro/giorno fino al riempimento giugno.",
    "- Landing: /giugno-2026.",
    "- Query: appartamenti capo rizzuto, vacanze capo rizzuto giugno, appartamenti isola capo rizzuto piscina, villa capo rizzuto, casa vacanze capo rizzuto mare.",
    "- Escludi: lavoro, affitto annuale, vendita, meteo, gratis, campeggio se non pertinente.",
    "",
    "## Esito",
    failed.length || badPages.length
      ? `ATTENZIONE: ${failed.length} controlli tecnici falliti, ${badPages.length} pagine prioritarie da verificare.`
      : "OK: base tecnica coerente. La leva principale ora e distribuzione: Search Console, Google Business Profile e Ads.",
    "",
  ].join("\n")

  return report
}

async function main() {
  fs.mkdirSync(REPORT_DIR, { recursive: true })

  const scriptResults = checks.map(([scriptName, label]) => runNpmScript(scriptName, label))
  const pages = await inspectPriorityPages()
  const report = renderReport(scriptResults, pages)
  const reportPath = path.join(REPORT_DIR, `${TODAY}.md`)

  fs.writeFileSync(reportPath, report)
  console.log(report)
  console.log(`\nReport salvato in: ${reportPath}`)

  const hasFailure = scriptResults.some((item) => !item.ok) || pages.some((page) => !page.ok || !page.canonical || !page.sitemap)
  process.exit(hasFailure ? 1 : 0)
}

main().catch((error) => {
  console.error("Autopilota SEO/Google fallito:", error.message)
  process.exit(1)
})
