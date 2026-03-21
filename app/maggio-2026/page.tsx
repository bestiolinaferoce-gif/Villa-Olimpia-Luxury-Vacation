import { generateMetadata } from "@/lib/metadata"
import { SEASONAL_CONFIG } from "@/lib/seasonalConfig"
import { generateSeasonalSchema } from "@/lib/seo-seasonal"
import { SeasonalStickyBar } from "@/components/ui/SeasonalStickyBar"
import { SeasonalHero } from "@/components/seasonal/SeasonalHero"
import { SeasonalSocialProof } from "@/components/seasonal/SeasonalSocialProof"
import { SeasonalAvailabilityGrid } from "@/components/seasonal/SeasonalAvailabilityGrid"
import { SeasonalUrgencyForm } from "@/components/seasonal/SeasonalUrgencyForm"
import { SeasonalFAQ } from "@/components/seasonal/SeasonalFAQ"
import { SeasonalViewTracker } from "@/components/seasonal/SeasonalViewTracker"

const monthKey = "maggio" as const

export const metadata = generateMetadata({
  title: SEASONAL_CONFIG[monthKey].seoTitle,
  description: SEASONAL_CONFIG[monthKey].seoDescription,
  path: "/maggio-2026",
  keywords: [...SEASONAL_CONFIG[monthKey].seoKeywords],
})

export default function SeasonalPage() {
  const config = SEASONAL_CONFIG[monthKey]
  const schema = generateSeasonalSchema(monthKey)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SeasonalViewTracker month={monthKey} />
      <SeasonalStickyBar targetMonth={monthKey} />
      <SeasonalHero config={config} />
      <SeasonalSocialProof monthLabel={config.label} bookingsCount={12} />
      <SeasonalAvailabilityGrid config={config} monthKey={monthKey} />
      <SeasonalUrgencyForm
        config={config}
        monthKey={monthKey}
        defaultCheckIn="2026-05-10"
        defaultCheckOut="2026-05-17"
      />
      <SeasonalFAQ month={monthKey} />
    </>
  )
}
