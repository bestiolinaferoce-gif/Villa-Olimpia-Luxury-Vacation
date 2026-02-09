"use client"

import { useCallback } from "react"

const EVENT_OPEN_COOKIE_PREFS = "open-cookie-preferences"

export function CookiePreferencesTrigger({ className, children }: { className?: string; children: React.ReactNode }) {
  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return
    window.dispatchEvent(new Event(EVENT_OPEN_COOKIE_PREFS))
  }, [])

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  )
}
