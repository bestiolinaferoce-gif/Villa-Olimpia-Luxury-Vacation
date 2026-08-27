"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  SEASONAL_CONFIG,
  getUrgencyTailwindClasses,
  seasonalLandingPath,
  type SeasonalMonth,
} from "@/lib/seasonalConfig"

const KEYS: Exclude<SeasonalMonth, "other">[] = ["giugno", "luglio", "settembre", "ottobre"]

export function SeasonalUrgencyBanner() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-playfair text-2xl font-bold text-slate-900 md:text-3xl">
          Scegli il tuo mese — verifica le date in tempo reale
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          Prenotazione diretta: niente commissioni OTA. I calendari Airbnb vengono sincronizzati ogni giorno.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {KEYS.map((k) => {
            const c = SEASONAL_CONFIG[k]
            const u = getUrgencyTailwindClasses(c.urgencyLevel)
            return (
              <motion.div
                key={k}
                whileHover={{ y: -4 }}
                className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${
                  c.urgencyLevel === 3 ? "ring-2 ring-red-400 ring-offset-2" : ""
                }`}
              >
                <div className={`mb-3 h-2 overflow-hidden rounded-full bg-slate-100`}>
                  <div className={`h-full w-full rounded-full ${u.bar}`} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-slate-900">{c.label}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Tariffa e disponibilità su verifica delle date
                </p>
                <Link
                  href={seasonalLandingPath(k)}
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Vedi disponibilità →
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
