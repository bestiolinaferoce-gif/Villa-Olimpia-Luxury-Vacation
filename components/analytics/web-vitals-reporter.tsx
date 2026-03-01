"use client"

import { useEffect } from "react"
import { onCLS, onLCP, onINP, onFCP, onTTFB } from "web-vitals"

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
    onCLS(sendToAnalytics)
    onLCP(sendToAnalytics)
    onINP(sendToAnalytics)
    onFCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  }, [])
  return null
}
