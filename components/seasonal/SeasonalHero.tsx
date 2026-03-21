"use client"

import Image from "next/image"
import Link from "next/link"
import { differenceInCalendarDays } from "date-fns"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { MonthConfig } from "@/lib/seasonalConfig"
import { getAvailabilityPercent, whatsappUrlForConfig } from "@/lib/seasonalConfig"
import { Shield, Clock, Sparkles } from "lucide-react"

export interface SeasonalHeroProps {
  config: MonthConfig
  locale?: "it" | "en"
}

export function SeasonalHero({ config, locale = "it" }: SeasonalHeroProps) {
  const start = new Date(config.monthStartISO + "T12:00:00")
  const today = new Date()
  const daysLeft = Math.max(0, differenceInCalendarDays(start, today))
  const pct = getAvailabilityPercent(config)
  const headline = locale === "en" ? config.heroTaglineEn : config.heroTagline

  return (
    <section className="relative min-h-[70vh] overflow-hidden pt-24">
      <Image
        src="/images/villa/gallery/Esterni_Piscina_Notte_01.jpg"
        alt="Villa Olimpia — piscina"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/90" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {config.label} · {config.availabilityLeft}/{config.totalUnits} lodge liberi (agg. manuale)
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-playfair text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            {headline}
          </motion.h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/90">
            <Clock className="h-4 w-4" />
            {daysLeft > 0 ? (
              <span>
                Mancano <strong>{daysLeft}</strong> giorni all&apos;inizio del periodo
              </span>
            ) : (
              <span>Periodo imminente o in corso — scrivici per le date esatte.</span>
            )}
          </p>
          <div className="mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-emerald-400"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white" asChild>
              <a href={whatsappUrlForConfig(config)} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={`/contatti?source=seasonal_hero&month=${config.month}#prenota`}>
                Richiedi preventivo email
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/85">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> Risposta rapida in giornata lavorativa
            </span>
            <span className="inline-flex items-center gap-1">
              <Shield className="h-3.5 w-3.5" /> Prenotazione diretta · niente commissioni OTA
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
