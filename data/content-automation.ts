export type CampaignAudience = "all" | "direct" | "agency"

export interface CampaignBanner {
  id: string
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  startsAt?: string // YYYY-MM-DD
  endsAt?: string   // YYYY-MM-DD
  audience?: CampaignAudience
  priority?: number
  enabled?: boolean
}

const CAMPAIGNS: CampaignBanner[] = [
  {
    id: "early-summer-2026",
    title: "Estate 2026: disponibilita limitate",
    subtitle: "Blocca ora il miglior appartamento con risposta entro 24 ore.",
    ctaLabel: "Richiedi preventivo",
    ctaHref: "/contatti",
    startsAt: "2026-02-01",
    endsAt: "2026-07-31",
    audience: "all",
    priority: 1,
    enabled: true,
  },
]

function parseDate(value?: string) {
  if (!value) return null
  const parsed = new Date(`${value}T00:00:00`)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

export function getActiveCampaigns(now: Date = new Date()): CampaignBanner[] {
  return CAMPAIGNS.filter((campaign) => {
    if (campaign.enabled === false) return false
    const start = parseDate(campaign.startsAt)
    const end = parseDate(campaign.endsAt)
    if (start && now < start) return false
    if (end && now > end) return false
    return true
  }).sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
}
