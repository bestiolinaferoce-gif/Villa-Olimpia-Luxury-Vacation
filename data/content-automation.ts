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
    id: "june-push-2026",
    title: "Giugno a Villa Olimpia: prenota ora e risparmia sulla pre-stagione",
    subtitle: "Tariffe vantaggiose, clima perfetto e spiagge ancora tranquille. Ultimi 4 appartamenti.",
    ctaLabel: "Verifica disponibilità Giugno",
    ctaHref: "/contatti?source=campaign_june&checkIn=2026-06-01#prenota",
    startsAt: "2026-02-01",
    endsAt: "2026-06-15",
    audience: "all",
    priority: 1,
    enabled: true,
  },
  {
    id: "july-push-2026",
    title: "Luglio: il mese perfetto per la tua vacanza al mare in Calabria",
    subtitle: "Piscina privata, Spiaggia dei Gigli a 100m e serate mediterranee. Solo 3 appartamenti rimasti.",
    ctaLabel: "Prenota Luglio",
    ctaHref: "/contatti?source=campaign_july&checkIn=2026-07-01#prenota",
    startsAt: "2026-02-01",
    endsAt: "2026-07-15",
    audience: "all",
    priority: 2,
    enabled: true,
  },
  {
    id: "early-summer-2026",
    title: "Estate 2026: disponibilità limitate",
    subtitle: "Blocca ora il miglior appartamento con risposta entro 24 ore.",
    ctaLabel: "Richiedi preventivo",
    ctaHref: "/contatti?source=campaign_summer#prenota",
    startsAt: "2026-02-01",
    endsAt: "2026-07-31",
    audience: "all",
    priority: 3,
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
