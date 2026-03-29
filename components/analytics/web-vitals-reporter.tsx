"use client"

import { useEffect } from "react"
import { getCLS, getLCP, getFID, getFCP, getTTFB } from "web-vitals"

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
    getCLS(sendToAnalytics)
    getLCP(sendToAnalytics)
    getFID(sendToAnalytics)
    getFCP(sendToAnalytics)
    getTTFB(sendToAnalytics)
  }, [])
  return null
}
