"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Componente per preload intelligente delle risorse critiche
 * Basato sulla pagina corrente
 */
export function PreloadResources() {
  const pathname = usePathname()

  useEffect(() => {
    // Solo nel browser
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    // Preload immagini critiche basato sulla route
    if (pathname === "/") {
      // Preload hero image
      const heroImage = document.createElement("link")
      heroImage.rel = "preload"
      heroImage.as = "image"
      heroImage.href = "/images/villa/hero/villa-olimpia-hero.jpg"
      document.head.appendChild(heroImage)
    }

    // Preload font critici (già gestito da Next.js, ma possiamo aggiungere fallback)
    const preconnectGoogle = document.createElement("link")
    preconnectGoogle.rel = "preconnect"
    preconnectGoogle.href = "https://fonts.googleapis.com"
    document.head.appendChild(preconnectGoogle)

    const preconnectGoogleFonts = document.createElement("link")
    preconnectGoogleFonts.rel = "preconnect"
    preconnectGoogleFonts.href = "https://fonts.gstatic.com"
    preconnectGoogleFonts.crossOrigin = "anonymous"
    document.head.appendChild(preconnectGoogleFonts)

    // DNS prefetch per API esterne
    const dnsPrefetch = document.createElement("link")
    dnsPrefetch.rel = "dns-prefetch"
    dnsPrefetch.href = "https://api.dicebear.com"
    document.head.appendChild(dnsPrefetch)

    return () => {
      // Cleanup se necessario
    }
  }, [pathname])

  return null
}


