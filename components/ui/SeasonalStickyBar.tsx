"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Clock, Users, X } from "lucide-react"
import Link from "next/link"
import {
  SEASONAL_CAMPAIGN_YEAR,
  SEASONAL_CONFIG,
  getAvailabilityPercent,
  getCurrentSeasonalMonth,
  getUrgencyTailwindClasses,
  type SeasonalMonth,
} from "@/lib/seasonalConfig"
import { trackEvent } from "@/components/analytics/google-analytics"

const SESSION_KEY = "seasonal_sticky_closed_v1"

export interface SeasonalStickyBarProps {
  targetMonth?: Exclude<SeasonalMonth, "other">
}

export function SeasonalStickyBar({ targetMonth }: SeasonalStickyBarProps) {
  const activeKey = targetMonth ?? getCurrentSeasonalMonth()
  const config =
    activeKey === "other" ? SEASONAL_CONFIG.other : SEASONAL_CONFIG[activeKey]
  const pct = getAvailabilityPercent(config)
  const styles = getUrgencyTailwindClasses(config.urgencyLevel)

  const [mounted, setMounted] = useState(false)
  const [closed, setClosed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)

  const messages = useMemo(() => {
    return [
      `${config.availabilityLeft}/${config.totalUnits} lodge liberi (agg. manuale)`,
      `Da €${config.priceFrom}/notte · Maggio–Luglio ${SEASONAL_CAMPAIGN_YEAR}`,
      config.discountBadge ?? "Prenota diretto — zero commissioni OTA",
    ]
  }, [config])

  useEffect(() => {
    setMounted(true)
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") setClosed(true)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!mounted || closed) return
    let showTimer: number | undefined
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      const scrollPct = max <= 0 ? 1 : el.scrollTop / max
      if (scrollPct >= 0.2) {
        showTimer = window.setTimeout(() => setVisible(true), 3000)
        window.removeEventListener("scroll", onScroll)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (showTimer !== undefined) window.clearTimeout(showTimer)
    }
  }, [mounted, closed])

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

  if (!mounted || closed || !visible) return null

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
                <div className="mt-1 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-black/20">
                  <motion.div
                    className="h-full rounded-full bg-white/90"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-end gap-2">
              <Link
                href={`/contatti?source=seasonal_sticky&month=${config.month}#prenota`}
                onClick={onCta}
                className="inline-flex max-w-[min(100%,14rem)] items-center justify-center gap-1 rounded-full bg-white px-3 py-2 text-left text-[11px] font-semibold leading-tight text-slate-900 shadow sm:max-w-none sm:py-1.5 sm:text-sm"
              >
                <span className="line-clamp-2 sm:line-clamp-none">{config.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1.5 hover:bg-black/10"
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
