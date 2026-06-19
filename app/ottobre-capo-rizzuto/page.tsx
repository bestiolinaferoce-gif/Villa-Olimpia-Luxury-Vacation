import { generateMetadata } from "@/lib/metadata"
import { SEASONAL_CONFIG } from "@/lib/seasonalConfig"
import { generateSeasonalSchema } from "@/lib/seo-seasonal"
import { SeasonalStickyBar } from "@/components/ui/SeasonalStickyBar"
import { SeasonalHero } from "@/components/seasonal/SeasonalHero"
import { SeasonalSocialProof } from "@/components/seasonal/SeasonalSocialProof"
import { SeasonalValueProps } from "@/components/seasonal/SeasonalValueProps"
import { SeasonalAvailabilityGrid } from "@/components/seasonal/SeasonalAvailabilityGrid"
import { SeasonalUrgencyForm } from "@/components/seasonal/SeasonalUrgencyForm"
import { SeasonalFAQ } from "@/components/seasonal/SeasonalFAQ"
import { SeasonalViewTracker } from "@/components/seasonal/SeasonalViewTracker"

const monthKey = "ottobre" as const

export const metadata = generateMetadata({
  title: SEASONAL_CONFIG[monthKey].seoTitle,
  description: SEASONAL_CONFIG[monthKey].seoDescription,
  path: "/ottobre-capo-rizzuto",
  keywords: [...SEASONAL_CONFIG[monthKey].seoKeywords],
})

export default function OttobreCapoRizzutoPage() {
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
      <SeasonalSocialProof monthLabel={config.label} bookingsCount={3} />
      <SeasonalValueProps config={config} />
      <SeasonalAvailabilityGrid config={config} monthKey={monthKey} />
      <SeasonalUrgencyForm
        config={config}
        monthKey={monthKey}
        defaultCheckIn="2026-10-05"
        defaultCheckOut="2026-10-12"
      />
      <SeasonalFAQ month={monthKey} />
    </>
  )
}
