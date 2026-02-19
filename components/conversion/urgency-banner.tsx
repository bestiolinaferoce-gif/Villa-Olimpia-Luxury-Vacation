"use client"

import { useState, useEffect } from "react"
import { Flame, Calendar, Clock, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

/**
 * June/July Conversion Urgency Banner
 * Static values only — no Math.random() to avoid hydration mismatch.
 */

const JUNE_JULY_URGENCY = {
  juneAvailable: 4,
  julyAvailable: 3,
  longStayDiscount: "7+",
} as const

export function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

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
        aria-label="Promozione Giugno e Luglio"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 md:gap-6 text-sm md:text-base flex-wrap">
            {/* June scarcity */}
            <Link
              href="/contatti?source=urgency_june&checkIn=2026-06-01#prenota"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Flame className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-amber-400">Giugno:</strong>{" "}
                <span className="text-white/90">solo {JUNE_JULY_URGENCY.juneAvailable} appartamenti</span>
              </span>
              <ArrowRight className="h-3 w-3 text-amber-400/70 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Link>

            <span className="hidden md:inline text-white/30" aria-hidden="true">|</span>

            {/* July scarcity */}
            <Link
              href="/contatti?source=urgency_july&checkIn=2026-07-01#prenota"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Calendar className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-sky-400">Luglio:</strong>{" "}
                <span className="text-white/90">solo {JUNE_JULY_URGENCY.julyAvailable} disponibili</span>
              </span>
              <ArrowRight className="h-3 w-3 text-sky-400/70 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Link>

            <span className="hidden md:inline text-white/30" aria-hidden="true">|</span>

            {/* Long stay incentive */}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span className="text-emerald-300 font-semibold">
                {JUNE_JULY_URGENCY.longStayDiscount} notti = tariffa dedicata
              </span>
            </div>
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors p-1"
          aria-label="Chiudi banner"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
