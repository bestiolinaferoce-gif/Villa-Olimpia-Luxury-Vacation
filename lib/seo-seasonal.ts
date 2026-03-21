import type { SeasonalMonth } from "@/lib/seasonalConfig"
import { SEASONAL_CONFIG, SEASONAL_CAMPAIGN_YEAR } from "@/lib/seasonalConfig"
import { BASE_URL } from "@/lib/metadata"

export function generateSeasonalSchema(month: Exclude<SeasonalMonth, "other">) {
  const config = SEASONAL_CONFIG[month]
  const monthNum = month === "maggio" ? "05" : month === "giugno" ? "06" : "07"
  const expires = `${SEASONAL_CAMPAIGN_YEAR}-${monthNum}-28`

  return {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name: `Disponibilità ${config.label} — Villa Olimpia`,
    text: config.seoDescription,
    datePosted: new Date().toISOString(),
    expires,
    announcementLocation: {
      "@type": "LodgingBusiness",
      name: "Villa Olimpia",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: config.priceFrom,
      priceCurrency: "EUR",
      availability:
        config.availabilityLeft > 0
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/SoldOut",
      validFrom: new Date().toISOString(),
    },
  } as const
}
