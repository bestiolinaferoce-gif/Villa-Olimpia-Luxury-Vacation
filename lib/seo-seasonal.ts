import type { SeasonalMonth } from "@/lib/seasonalConfig"
import { SEASONAL_CONFIG, seasonalLandingPath } from "@/lib/seasonalConfig"
import { BASE_URL } from "@/lib/metadata"

export function generateSeasonalSchema(month: Exclude<SeasonalMonth, "other">) {
  const config = SEASONAL_CONFIG[month]
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.seoTitle,
    description: config.seoDescription,
    url: `${BASE_URL}${seasonalLandingPath(month)}`,
    about: { "@id": `${BASE_URL}/#business` },
  } as const
}
