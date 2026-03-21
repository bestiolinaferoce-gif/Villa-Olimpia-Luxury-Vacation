"use client"

import { motion } from "framer-motion"

export interface SeasonalSocialProofProps {
  monthLabel: string
  bookingsCount: number
  recentLabel?: string
}

export function SeasonalSocialProof({
  monthLabel,
  bookingsCount,
  recentLabel = "Ospite da Nord Italia · 5 giorni fa",
}: SeasonalSocialProofProps) {
  const initials = ["M", "G", "L", "S"]
  return (
    <section className="border-y border-slate-200 bg-slate-900 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          <span className="font-semibold text-emerald-300">✓</span> Oltre{" "}
          <strong>{bookingsCount}</strong> richieste dirette per {monthLabel} (stima interna)
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
