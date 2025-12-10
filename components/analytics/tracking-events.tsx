"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  trackEvent,
  trackApartmentView,
  trackAvailabilityCheck,
  trackBookingInitiation,
  trackBookingCompleted,
  trackEmailSignup,
  trackPhoneClick,
  trackExternalBookingClick,
  trackReviewRead,
  trackMapInteraction,
  trackLanguageChange,
} from "./google-analytics"

/**
 * Hook per tracciare visualizzazione appartamento
 */
export function useApartmentTracking(apartmentName: string, apartmentId: number) {
  useEffect(() => {
    trackApartmentView(apartmentName, apartmentId)
  }, [apartmentName, apartmentId])
}

/**
 * Componente per tracciare click su link telefonici
 */
export function TrackPhoneClick({ phoneNumber, children }: { phoneNumber: string; children: React.ReactNode }) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber)
  }

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  )
}

/**
 * Componente per tracciare click su link esterni (Booking.com, Airbnb)
 */
export function TrackExternalBooking({
  platform,
  apartmentId,
  children,
}: {
  platform: string
  apartmentId?: number
  children: React.ReactNode
}) {
  const handleClick = () => {
    trackExternalBookingClick(platform, apartmentId)
  }

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  )
}

/**
 * Hook per tracciare tempo speso su pagina recensioni
 */
export function useReviewPageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/recensioni") {
      const startTime = Date.now()
      
      trackEvent("review_read", "Engagement", "Reviews Page")

      return () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000) // in secondi
        if (timeSpent > 10) {
          trackEvent("review_read", "Engagement", `Reviews Page - ${timeSpent}s`, timeSpent)
        }
      }
    }
  }, [pathname])
}

/**
 * Hook per tracciare interazioni con mappa
 */
export function useMapTracking() {
  const handleMapClick = () => {
    trackMapInteraction("map_click")
  }

  const handleMapMarkerClick = (markerName: string) => {
    trackMapInteraction(`marker_click_${markerName}`)
  }

  return {
    handleMapClick,
    handleMapMarkerClick,
  }
}

export {
  trackEvent,
  trackApartmentView,
  trackAvailabilityCheck,
  trackBookingInitiation,
  trackBookingCompleted,
  trackEmailSignup,
  trackPhoneClick,
  trackExternalBookingClick,
  trackReviewRead,
  trackMapInteraction,
  trackLanguageChange,
}


