"use client"

import Script from "next/script"
import { useCallback, useEffect, useState } from "react"
import { COOKIE_CONSENT_UPDATED_EVENT } from "@/lib/cookie-consent-events"

const STORAGE_KEY = "cookieConsent"

function readMarketingAllowed(): boolean {
  if (typeof window === "undefined") return false
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as unknown
    if (parsed === "accepted") return true
    if (parsed && typeof parsed === "object" && "preferences" in parsed) {
      const prefs = (parsed as { preferences?: { marketing?: boolean } }).preferences
      return Boolean(prefs?.marketing)
    }
    return false
  } catch {
    return false
  }
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Meta (Facebook) Pixel — solo se:
 * - NEXT_PUBLIC_META_PIXEL_ID è un ID numerico valido (nessun ID hardcoded nel repo)
 * - l'utente ha accettato i cookie di marketing (banner cookie)
 */
export function MetaPixelOptional() {
  const pixelId = (process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "").trim()
  const validId = /^\d{10,20}$/.test(pixelId)

  const [marketingOk, setMarketingOk] = useState(false)

  const sync = useCallback(() => {
    setMarketingOk(readMarketingAllowed())
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, sync)
      window.removeEventListener("storage", sync)
    }
  }, [sync])

  useEffect(() => {
    if (marketingOk || typeof window === "undefined") return
    if (typeof window.fbq === "function") {
      try {
        window.fbq("consent", "revoke")
      } catch {
        /* ignore */
      }
    }
  }, [marketingOk])

  if (!validId) return null
  if (!marketingOk) return null

  return (
    <Script
      id="meta-pixel-fbevents"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');
fbq('track','PageView');
        `.trim(),
      }}
    />
  )
}
