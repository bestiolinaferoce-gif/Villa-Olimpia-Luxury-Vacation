"use client"

import { useEffect } from "react"
import * as webVitals from "web-vitals"

function sendToAnalytics(metric: { name: string; value: number; id: string }) {
  if (typeof window === "undefined") return

  ;(window as typeof window & { dataLayer?: object[] }).dataLayer = (window as typeof window & { dataLayer?: object[] }).dataLayer || []
  ;(window as typeof window & { dataLayer?: object[] }).dataLayer!.push({
    event: "web_vitals",
    event_category: "Web Vitals",
    event_label: metric.name,
    value: Math.round(metric.value),
    metric_id: metric.id,
  })
}

export function WebVitalsReporter() {
  useEffect(() => {
    const vitals = webVitals as Record<
      string,
      ((callback: typeof sendToAnalytics) => void) | undefined
    >

    ;[
      vitals.onCLS ?? vitals.getCLS,
      vitals.onLCP ?? vitals.getLCP,
      vitals.onINP ?? vitals.getFID,
      vitals.onFCP ?? vitals.getFCP,
      vitals.onTTFB ?? vitals.getTTFB,
    ].forEach((registerMetric) => registerMetric?.(sendToAnalytics))
  }, [])
  return null
}
