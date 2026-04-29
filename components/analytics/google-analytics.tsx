"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { COOKIE_CONSENT_UPDATED_EVENT } from "@/lib/cookie-consent-events"
import type { MutableRefObject } from "react"

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
    ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    : "G-NW2FHPE98G"

const isGAEnabled = () =>
  Boolean(GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX")

/** Esportato per verifiche e test: GA è configurato e abilitato? */
export function isAnalyticsEnabled(): boolean {
  return isGAEnabled()
}

const COOKIE_CONSENT_STORAGE_KEY = "cookieConsent"

function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!raw) return false

    const parsed = JSON.parse(raw)
    if (parsed === "accepted") return true

    return Boolean(parsed?.preferences?.analytics)
  } catch {
    return false
  }
}

function sendCurrentPageView(
  pathname: string | null,
  lastTrackedPathRef: MutableRefObject<string | null>,
  retryCount = 0
) {
  if (!isGAEnabled() || typeof window === "undefined" || !pathname) return
  if (!hasAnalyticsConsent()) return

  // Retry se gtag non è ancora disponibile (race condition script load)
  if (!window.gtag) {
    if (retryCount < 5) {
      setTimeout(() => sendCurrentPageView(pathname, lastTrackedPathRef, retryCount + 1), 100)
    }
    return
  }

  const pagePath = pathname + (window.location.search || "")
  if (lastTrackedPathRef.current === pagePath) return

  lastTrackedPathRef.current = pagePath
  const pageLocation = window.location.origin + pagePath

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_location: pageLocation,
    page_title: document.title ?? undefined,
  })
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const lastTrackedPathRef = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
    }
  }, [])

  // Page view: invia solo quando il consenso analytics e` effettivamente attivo.
  useEffect(() => {
    sendCurrentPageView(pathname, lastTrackedPathRef)
  }, [pathname])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleConsentUpdated = () => {
      lastTrackedPathRef.current = null
      // Aggiorna esplicitamente analytics_storage PRIMA del pageview
      // per evitare race condition tra consent mode e hit GA4
      if (hasAnalyticsConsent() && typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
          functionality_storage: "granted",
          security_storage: "granted",
        })
      }
      sendCurrentPageView(pathname, lastTrackedPathRef)
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated)
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated)
  }, [pathname])

  if (!isGAEnabled()) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[GA] Measurement ID non configurato. Imposta NEXT_PUBLIC_GA_MEASUREMENT_ID")
    }
    return null
  }

  return (
    <>
      <Script
        id="ga4-script-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.gtag && hasAnalyticsConsent()) {
            const pagePath = window.location.pathname + window.location.search
            window.gtag('config', GA_MEASUREMENT_ID, {
              page_path: pagePath,
              page_location: window.location.href,
              page_title: document.title,
            })
          }
        }}
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
              'send_page_view': false,
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}

// Custom event tracking (no-op se GA non abilitato o gtag non pronto)
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", action, {
    event_category: category,
    event_label: label ?? undefined,
    value: value ?? undefined,
  })
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

/** CTA click con contesto locale — usa label = "<locale>_<cta_id>" */
export const trackCtaClick = (ctaId: string, locale?: string) => {
  const label = locale ? `${locale}_${ctaId}` : ctaId
  trackEvent("cta_click", "Conversion", label)
}

/** Traccia l'avvio del form (campo toccato per la prima volta) */
export const trackFormStart = (formId: string, locale?: string) => {
  const label = locale ? `${locale}_${formId}` : formId
  trackEvent("form_start", "Conversion", label)
}

/** Traccia click WhatsApp con contesto */
export const trackWhatsAppClick = (source: string, locale?: string) => {
  const label = locale ? `${source}_${locale}` : source
  trackEvent("whatsapp_click", "Conversion", label)
}

/** Traccia fallback (quando il submit API fallisce e si apre WA/mailto) */
export const trackFormFallback = (reason: string, locale?: string) => {
  const label = locale ? `${reason}_${locale}` : reason
  trackEvent("form_fallback", "Conversion", label)
}

// Extend Window interface
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}








