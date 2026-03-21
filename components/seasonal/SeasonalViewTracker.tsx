"use client"

import { useEffect } from "react"
import { trackEvent } from "@/components/analytics/google-analytics"
import type { SeasonalMonth } from "@/lib/seasonalConfig"

export function SeasonalViewTracker({ month }: { month: Exclude<SeasonalMonth, "other"> }) {
  useEffect(() => {
    trackEvent("seasonal_landing_view", "Engagement", month)
  }, [month])
  return null
}
