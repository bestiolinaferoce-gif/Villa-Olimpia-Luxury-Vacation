#!/usr/bin/env node
/**
 * Genera link UTM pronti da usare per propagazione campagne.
 * Uso:
 * node scripts/generate-campaign-links.js spring2026
 */

const campaign = process.argv[2] || "recovery_summer_2026"
const origin = "https://villaolimpiacaporizzuto.com"

const channels = [
  { source: "instagram", medium: "social", label: "Instagram Bio" },
  { source: "facebook", medium: "social", label: "Facebook Page" },
  { source: "google", medium: "cpc", label: "Google Ads" },
  { source: "airbnb", medium: "referral", label: "Airbnb profile" },
  { source: "booking", medium: "referral", label: "Booking profile" },
  { source: "agency_partners", medium: "b2b", label: "Agenzie Partner" },
  { source: "whatsapp_broadcast", medium: "owned", label: "WhatsApp Broadcast" },
]

const landings = [
  { path: "/giugno-2026", label: "Giugno" },
  { path: "/luglio-2026", label: "Luglio" },
  { path: "/settembre-capo-rizzuto", label: "Settembre" },
  { path: "/no/norway", label: "Norvegia" },
  { path: "/no/oslo-til-lamezia-villa-olimpia", label: "Norvegia Oslo-Lamezia" },
  { path: "/contatti", label: "Contatti diretti", hash: "prenota" },
]

function buildUrl(path, source, medium, hash) {
  const params = new URLSearchParams({
    source: "campaign_link",
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  })
  return `${origin}${path}?${params.toString()}${hash ? `#${hash}` : ""}`
}

console.log(`\nCampaign: ${campaign}\n`)
for (const landing of landings) {
  console.log(`## ${landing.label}`)
  for (const item of channels) {
    console.log(`${item.label}: ${buildUrl(landing.path, item.source, item.medium, landing.hash)}`)
  }
  console.log("")
}
