"use client"

import { useState, useEffect, useMemo } from "react"
import { Calendar, Clock, X, ArrowRight, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

/**
 * Messaggio stagionale dinamico (anno corrente) — nessuna scarsità inventata.
 */

export function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const wasDismissed = sessionStorage.getItem("urgency-banner-dismissed")
      if (wasDismissed) setDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("urgency-banner-dismissed", "1")
    }
  }

  if (!mounted || dismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-3 border-b border-white/10"
        role="banner"
        aria-label="Prenotazione diretta Villa Olimpia"
      >
        <div className="container mx-auto px-4 pr-12">
          <div className="flex items-center justify-center gap-3 md:gap-6 text-sm md:text-base flex-wrap">
            <div className="flex items-center gap-2 text-white/95">
              <Sun className="h-4 w-4 text-amber-300 shrink-0" aria-hidden="true" />
              <span>
                Stagione estiva <strong className="text-white">{year}</strong>: verifica disponibilità con anticipo —{" "}
                <strong className="text-amber-200">prenotazione diretta</strong> sul sito ufficiale.
              </span>
            </div>

            <span className="hidden md:inline text-white/30" aria-hidden="true">
              |
            </span>

            <Link
              href="/contatti?source=urgency_peak_season#prenota"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity group font-semibold text-sky-200"
            >
              <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Giugno / Luglio — richiedi date</span>
              <ArrowRight className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>

            <span className="hidden md:inline text-white/30" aria-hidden="true">
              |
            </span>

            <div className="flex items-center gap-2 text-emerald-200/95">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="font-medium">Soggiorni 7+ notti: tariffa dedicata</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors p-1"
          aria-label="Chiudi banner"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
