"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { trackEvent } from "@/components/analytics/google-analytics"

/**
 * Invia un evento GA quando l'utente arriva su /contatti con ?source= (attribuzione).
 * Usato per capire quale pagina/CTA ha portato alla richiesta preventivo.
 */
export function TrackContactSource() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const source = searchParams.get("source")
    if (source) {
      trackEvent("contact_page_view", "Conversion", source)
    }
  }, [searchParams])

  return null
}
