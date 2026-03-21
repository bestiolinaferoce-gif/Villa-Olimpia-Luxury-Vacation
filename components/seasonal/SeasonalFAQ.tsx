"use client"

import { motion } from "framer-motion"
import type { SeasonalMonth } from "@/lib/seasonalConfig"
import { SEASONAL_CAMPAIGN_YEAR } from "@/lib/seasonalConfig"

const FAQ_IT: Record<Exclude<SeasonalMonth, "other">, Array<{ q: string; a: string }>> = {
  maggio: [
    {
      q: "Perché prenotare diretto a maggio?",
      a: "Migliore rapporto qualità/prezzo e assistenza reale, senza commissioni da portale.",
    },
    {
      q: "Come aggiornate la disponibilità?",
      a: "I numeri sulla pagina sono aggiornati manualmente: per le date esatte inviate richiesta o WhatsApp.",
    },
  ],
  giugno: [
    {
      q: "Giugno è già alta stagione?",
      a: "È un periodo molto richiesto: consigliamo di bloccare le date con anticipo.",
    },
    {
      q: "Posso scegliere il lodge?",
      a: "Sì: indicatelo nel form e vi confermiamo disponibilità reale.",
    },
  ],
  luglio: [
    {
      q: "Perché la disponibilità è così limitata?",
      a: "Luglio è il mese più richiesto: mostriamo uno stato indicativo aggiornato manualmente.",
    },
    {
      q: "Risposta rapida?",
      a: "Sì: WhatsApp è il canale più veloce per urgenze, email per dettagli e preventivi.",
    },
  ],
}

export function SeasonalFAQ({ month }: { month: Exclude<SeasonalMonth, "other"> }) {
  const items = FAQ_IT[month]
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h2 className="font-playfair text-3xl font-bold text-slate-900">FAQ · {month} {SEASONAL_CAMPAIGN_YEAR}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <h3 className="font-semibold text-slate-900">{item.q}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
