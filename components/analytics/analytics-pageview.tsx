"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { getResolvedGaMeasurementId } from "@/components/analytics/analytics-config"

/**
 * Invia page_view a GA4 quando cambia la route (navigazione client-side).
 * Gli script GA sono già caricati da AnalyticsUnified.
 */
export function AnalyticsPageView() {
  const pathname = usePathname()

  useEffect(() => {
    const gaMeasurementId = getResolvedGaMeasurementId()
    if (typeof window === "undefined" || !(window as any).gtag || !pathname || !gaMeasurementId) return
    const pagePath = pathname + (window.location.search || "")
    ;(window as any).gtag("config", gaMeasurementId, {
      page_path: pagePath,
      page_location: window.location.origin + pagePath,
      page_title: document.title || undefined,
    })
  }, [pathname])

  return null
}
