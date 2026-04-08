"use client"

import Image from "next/image"
import Link from "next/link"
import { differenceInCalendarDays } from "date-fns"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { MonthConfig } from "@/lib/seasonalConfig"
import { getAvailabilityPercent, whatsappUrlForConfig } from "@/lib/seasonalConfig"
import { Shield, Clock, Sparkles, MessageCircle, Phone } from "lucide-react"

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
            className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="text-white">{config.label}</span>
            <span className="font-normal normal-case text-white/80">
              · {config.availabilityLeft}/{config.totalUnits} lodge liberi (agg. manuale)
            </span>
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              size="lg"
              className="w-full gap-2 bg-[#25D366] text-white shadow-lg shadow-black/25 hover:bg-[#1ebe5d] sm:w-auto"
              asChild
            >
              <a href={whatsappUrlForConfig(config)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp diretto
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full border border-white/25 bg-white/95 text-slate-900 hover:bg-white sm:w-auto"
              asChild
            >
              <Link href={`/contatti?source=seasonal_hero&month=${config.month}#prenota`}>
                Preventivo via form
              </Link>
            </Button>
          </div>
          <a
            href="tel:+393335773390"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Oppure chiama · +39 333 577 3390
          </a>
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
