#!/usr/bin/env node
/**
 * Genera link UTM pronti da usare per propagazione campagne.
 * Uso:
 * node scripts/generate-campaign-links.js spring2026
 */

const campaign = process.argv[2] || "always_on"
const base = "https://villaolimpiacaporizzuto.com/contatti"

const channels = [
  { source: "instagram", medium: "social", label: "Instagram Bio" },
  { source: "facebook", medium: "social", label: "Facebook Page" },
  { source: "google", medium: "cpc", label: "Google Ads" },
  { source: "airbnb", medium: "referral", label: "Airbnb profile" },
  { source: "booking", medium: "referral", label: "Booking profile" },
  { source: "agency_partners", medium: "b2b", label: "Agenzie Partner" },
  { source: "whatsapp_broadcast", medium: "owned", label: "WhatsApp Broadcast" },
]

function buildUrl(source, medium) {
  const params = new URLSearchParams({
    source: "campaign_link",
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  })
  return `${base}?${params.toString()}#prenota`
}

console.log(`\nCampaign: ${campaign}\n`)
for (const item of channels) {
  console.log(`${item.label}:`)
  console.log(buildUrl(item.source, item.medium))
  console.log("")
}
