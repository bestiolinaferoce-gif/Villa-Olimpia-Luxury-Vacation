"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Clock, MessageCircle, Users, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SEASONAL_CONFIG,
  getAvailabilityPercent,
  getCurrentSeasonalMonth,
  getUrgencyTailwindClasses,
  whatsappUrlForConfig,
  type SeasonalMonth,
} from "@/lib/seasonalConfig"
import { trackEvent } from "@/components/analytics/google-analytics"
import { COOKIE_CONSENT_UPDATED_EVENT } from "@/lib/cookie-consent-events"

const SESSION_KEY = "seasonal_sticky_closed_v1"

export interface SeasonalStickyBarProps {
  targetMonth?: Exclude<SeasonalMonth, "other">
}

export function SeasonalStickyBar({ targetMonth }: SeasonalStickyBarProps) {
  const pathname = usePathname()
  const activeKey = targetMonth ?? getCurrentSeasonalMonth()
  const config =
    activeKey === "other" ? SEASONAL_CONFIG.other : SEASONAL_CONFIG[activeKey]
  const pct = getAvailabilityPercent(config)
  const styles = getUrgencyTailwindClasses(config.urgencyLevel)

  const [mounted, setMounted] = useState(false)
  const [closed, setClosed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [consentChoiceMade, setConsentChoiceMade] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)

  const routeHasOwnConversionUi =
    pathname === "/contatti" ||
    pathname === "/prenota" ||
    pathname.endsWith("/contact") ||
    pathname.endsWith("/contatti") ||
    pathname.endsWith("/prenota") ||
    pathname === "/giugno-2026" ||
    pathname === "/luglio-2026"

  const messages = useMemo(() => {
    if (activeKey === "other") {
      return [
        "Settembre e ottobre: richiedi le date disponibili",
        "Preventivo diretto e risposta dalla struttura",
        "Nessuna commissione di portale sulla richiesta diretta",
      ]
    }

    return [
      `${config.availabilityLeft}/${config.totalUnits} lodge liberi (agg. manuale)`,
      `Da €${config.priceFrom}/notte · ${config.label}`,
      config.discountBadge ?? "Prenota diretto — zero commissioni OTA",
    ]
  }, [activeKey, config])

  useEffect(() => {
    setMounted(true)
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") setClosed(true)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    const syncConsentChoice = () => {
      try {
        setConsentChoiceMade(Boolean(localStorage.getItem("cookieConsent")))
      } catch {
        setConsentChoiceMade(false)
      }
    }

    syncConsentChoice()
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsentChoice)
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsentChoice)
  }, [])

  useEffect(() => {
    if (!mounted || closed || !consentChoiceMade || routeHasOwnConversionUi) return
    let showTimer: number | undefined = window.setTimeout(() => setVisible(true), 1200)
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      const scrollPct = max <= 0 ? 1 : el.scrollTop / max
      if (scrollPct >= 0.2) {
        if (showTimer !== undefined) window.clearTimeout(showTimer)
        showTimer = window.setTimeout(() => setVisible(true), 400)
        window.removeEventListener("scroll", onScroll)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (showTimer !== undefined) window.clearTimeout(showTimer)
    }
  }, [mounted, closed, consentChoiceMade, routeHasOwnConversionUi])

  useEffect(() => {
    if (!visible || closed) return
    const id = window.setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [visible, closed, messages.length])

  const onClose = useCallback(() => {
    setClosed(true)
    try {
      sessionStorage.setItem(SESSION_KEY, "1")
    } catch {
      /* ignore */
    }
  }, [])

  const onCta = useCallback(() => {
    trackEvent("seasonal_sticky_cta", "Conversion", config.month)
  }, [config.month])

  const onWhatsApp = useCallback(() => {
    trackEvent("seasonal_sticky_whatsapp", "Lead", config.month, 1, {
      method: "whatsapp",
      lead_channel: "whatsapp",
      source: "seasonal_sticky",
    })
  }, [config.month])

  if (!mounted || closed || !visible || routeHasOwnConversionUi) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[60] px-2 pb-2 sm:px-4"
        role="region"
        aria-label="Promemoria stagionale"
      >
        <div
          className={`${styles.bar} ${styles.pulse ? "animate-pulse" : ""} relative overflow-hidden rounded-t-2xl border border-white/15 shadow-2xl`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
            <div className={`flex min-w-0 flex-1 items-center gap-2 text-xs sm:text-sm ${styles.text}`}>
              <Clock className="hidden h-4 w-4 shrink-0 sm:block" aria-hidden />
              <Users className="h-4 w-4 shrink-0 sm:hidden" aria-hidden />
              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={msgIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="truncate font-medium sm:whitespace-normal"
                  >
                    {messages[msgIndex]}
                  </motion.p>
                </AnimatePresence>
                {activeKey !== "other" ? (
                  <div className="mt-1 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-black/20">
                    <motion.div
                      className="h-full rounded-full bg-white/90"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-end gap-2">
              <a
                href={whatsappUrlForConfig(config)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsApp}
                className="inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-[#128c4a] px-3 py-2 text-[11px] font-semibold leading-tight text-white shadow sm:min-h-10 sm:text-sm"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                <span>WhatsApp</span>
              </a>
              <Link
                href={`/contatti?source=seasonal_sticky&month=${config.month}#prenota`}
                onClick={onCta}
                className="inline-flex min-h-11 max-w-[min(100%,14rem)] items-center justify-center gap-1 rounded-full bg-white px-3 py-2 text-left text-[11px] font-semibold leading-tight text-slate-900 shadow sm:min-h-10 sm:max-w-none sm:text-sm"
              >
                <span className="line-clamp-2 sm:line-clamp-none">{config.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-black/10 sm:min-h-10 sm:min-w-10"
                aria-label="Chiudi"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
