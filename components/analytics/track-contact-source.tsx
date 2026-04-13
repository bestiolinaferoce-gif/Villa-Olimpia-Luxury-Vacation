"use client"

import { useEffect } from "react"
import { useSearchParams, usePathname } from "next/navigation"
import { trackEvent } from "@/components/analytics/google-analytics"

function getLocaleFromPathname(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean)[0]
  return ["en", "de", "fr"].includes(seg) ? seg : "it"
}

/**
 * Traccia l'arrivo sulla pagina contatti/contact con:
 * - ?source= per attribuzione CTA di provenienza
 * - locale corrente (it/en/de/fr)
 * - pathname completo per pagina di provenienza
 */
export function TrackContactSource() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname)
    const source = searchParams.get("source") ?? "organic"

    trackEvent("contact_page_view", "Conversion", `${locale}_${source}`)

    // Traccia il locale come dimensione utente
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("set", "user_properties", { locale })
    }
  }, [searchParams, pathname])

  return null
}
