"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Inizializza dataLayer se non esiste
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
    }
  }, [])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
      if (process.env.NODE_ENV === "development") {
        console.warn("Google Analytics Measurement ID not configured. Set NEXT_PUBLIC_GA_MEASUREMENT_ID")
      }
      return
    }

    // Track page view on route change
    if (typeof window !== "undefined" && window.gtag && pathname) {
      const url = pathname + (window.location.search || "")
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
      })
    }
  }, [pathname])

  // Non renderizzare nulla se GA_MEASUREMENT_ID non è configurato
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return null
  }

  return (
    <>
      {/* Google Analytics 4 - Script di caricamento */}
      <Script
        id="ga4-script-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* Google Analytics 4 - Inizializzazione */}
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
            gtag('config', '${GA_MEASUREMENT_ID}', {
              'send_page_view': true,
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}

// Custom event tracking functions
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Consent Mode helper
export function setConsentMode(prefs: { analytics?: boolean; marketing?: boolean; functional?: boolean }) {
  if (typeof window === "undefined") return
  const analyticsGranted = prefs?.analytics ? "granted" : "denied"
  const marketingGranted = prefs?.marketing ? "granted" : "denied"
  const functionalGranted = prefs?.functional ? "granted" : "denied"
  const payload = {
    ad_storage: marketingGranted,
    analytics_storage: analyticsGranted,
    functionality_storage: functionalGranted,
    personalization_storage: marketingGranted,
    security_storage: "granted",
  } as const

  if (window.gtag) {
    window.gtag("consent", "update", payload)
  } else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(["consent", "update", payload])
  }
}

// Specific event tracking functions
export const trackApartmentView = (apartmentName: string, apartmentId: number) => {
  trackEvent("apartment_view", "Engagement", `${apartmentName} (ID: ${apartmentId})`)
}

export const trackAvailabilityCheck = (checkIn?: string, checkOut?: string, guests?: number) => {
  trackEvent("availability_check", "Booking", `${checkIn}-${checkOut} (${guests} guests)`)
}

export const trackBookingInitiation = (apartmentId?: number) => {
  trackEvent("booking_initiation", "Conversion", apartmentId ? `Apartment ${apartmentId}` : "Unknown")
}

export const trackBookingCompleted = (apartmentId: number, value?: number) => {
  trackEvent("booking_completed", "Conversion", `Apartment ${apartmentId}`, value)
}

export const trackEmailSignup = (source: string) => {
  trackEvent("email_signup", "Engagement", source)
}

export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent("phone_click", "Engagement", phoneNumber)
}

export const trackExternalBookingClick = (platform: string, apartmentId?: number) => {
  trackEvent("external_booking_click", "Conversion", `${platform} - Apartment ${apartmentId || "N/A"}`)
}

export const trackReviewRead = (reviewId?: number) => {
  trackEvent("review_read", "Engagement", reviewId ? `Review ${reviewId}` : "Reviews Page")
}

export const trackMapInteraction = (interactionType: string) => {
  trackEvent("map_interaction", "Engagement", interactionType)
}

export const trackLanguageChange = (language: string) => {
  trackEvent("language_change", "Engagement", language)
}

// Extend Window interface
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}










