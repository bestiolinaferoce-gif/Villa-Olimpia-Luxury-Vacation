"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Percent, Shield, Sparkles, ArrowRight } from "lucide-react"

const JUNE_JULY_MSG = {
  remaining: "Giugno: 4 appartamenti · Luglio: 3 appartamenti",
  earlyBooking: "Soggiorni 7+ notti: tariffa agevolata",
}

function isJuneJulyPromoSeason(): boolean {
  const now = new Date()
  return now.getMonth() >= 1 && now.getMonth() <= 6
}

export function JuneJulyBanner() {
  if (!isJuneJulyPromoSeason()) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-r from-primary/90 via-ocean/90 to-primary/90 text-white border-b border-white/20"
      aria-label="Promozione Giugno Luglio"
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm">
            <span className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-4 w-4 text-amber-300" aria-hidden="true" />
              {JUNE_JULY_MSG.remaining}
            </span>
            <span className="flex items-center gap-2 text-white/90">
              <Percent className="h-4 w-4" aria-hidden="true" />
              {JUNE_JULY_MSG.earlyBooking}
            </span>
            <span className="flex items-center gap-2 text-white/90">
              <Shield className="h-4 w-4" aria-hidden="true" />
              Cancellazione gratuita fino a 14gg prima
            </span>
          </div>
          <Link
            href="/contatti?source=june_july_cta#prenota"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold shadow-lg hover:bg-white/95 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary group"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Verifica disponibilità
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
