"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const GA_MEASUREMENT_ID =
  typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "undefined" &&
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "" &&
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : "G-NW2FHPE98G"

/**
 * Invia page_view a GA4 quando cambia la route (navigazione client-side).
 * Gli script GA sono già caricati da AnalyticsUnified.
 */
export function AnalyticsPageView() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined" || !(window as any).gtag || !pathname) return
    const pagePath = pathname + (window.location.search || "")
    ;(window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.origin + pagePath,
      page_title: document.title || undefined,
    })
  }, [pathname])

  return null
}
