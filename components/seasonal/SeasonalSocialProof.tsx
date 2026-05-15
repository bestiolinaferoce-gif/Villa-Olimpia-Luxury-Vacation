"use client"

import { motion } from "framer-motion"

export interface SeasonalSocialProofProps {
  monthLabel: string
  /** Mostrato solo se >0: numero indicativo di richieste recenti (stima interna). */
  bookingsCount?: number
  recentLabel?: string
  headlineOverride?: string
}

export function SeasonalSocialProof({
  monthLabel,
  bookingsCount,
  recentLabel = "Famiglie e coppie dal Nord Italia ed Europa",
  headlineOverride,
}: SeasonalSocialProofProps) {
  const initials = ["M", "G", "L", "S"]
  const headline =
    headlineOverride ??
    (typeof bookingsCount === "number" && bookingsCount > 0
      ? `Richieste dirette ricevute per ${monthLabel} (stima interna gestionale)`
      : `Famiglie e coppie scelgono il canale diretto per ${monthLabel}`)
  return (
    <section className="border-y border-slate-200 bg-slate-900 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          <span className="font-semibold text-emerald-300">✓</span>{" "}
          {typeof bookingsCount === "number" && bookingsCount > 0 ? (
            <>
              Oltre <strong>{bookingsCount}</strong> {headline.toLowerCase()}
            </>
          ) : (
            headline
          )}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {initials.map((ch, i) => (
              <motion.span
                key={ch + i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-br from-primary to-ocean text-xs font-bold"
              >
                {ch}
              </motion.span>
            ))}
          </div>
          <p className="max-w-xs text-xs text-white/80">{recentLabel}</p>
        </div>
      </div>
    </section>
  )
}
