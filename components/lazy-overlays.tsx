"use client"

import dynamic from "next/dynamic"

const FloatingBooking = dynamic(() => import("@/components/floating-booking"), {
  ssr: false,
  loading: () => null,
})
const NewsletterPopup = dynamic(() => import("@/components/newsletter-popup"), {
  ssr: false,
  loading: () => null,
})

export function LazyOverlays() {
  return (
    <>
      <FloatingBooking />
      <NewsletterPopup />
    </>
  )
}
