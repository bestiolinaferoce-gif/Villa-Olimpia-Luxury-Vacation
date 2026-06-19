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
      a: "Le prime due settimane sono ancora più tranquille rispetto a luglio e agosto; dall'ultima decade la domanda cresce. Per le date precise rispondiamo direttamente noi.",
    },
    {
      q: "Com'è il mare a giugno a Capo Rizzuto?",
      a: "Il mare è già adatto ai primi bagni estivi e le spiagge sono molto meno affollate rispetto ad agosto. Isola di Capo Rizzuto è Bandiera Blu 2026.",
    },
    {
      q: "Gli appartamenti sono adatti a famiglie con bambini?",
      a: "Sì: gli appartamenti sono indipendenti, con cucina e zona pranzo, parcheggio in struttura e piscina con area lettini a uso degli ospiti. Per esigenze specifiche, come lavatrice o spazi esterni, confermiamo il lodge più adatto in risposta.",
    },
    {
      q: "Posso scegliere il lodge?",
      a: "Sì: indicate la preferenza nel form (o su WhatsApp) e vi confermiamo cosa è davvero disponibile per le vostre date — niente calendario automatico.",
    },
    {
      q: "Come aggiornate la disponibilità mostrata?",
      a: "Lo stato in pagina è aggiornato manualmente per il canale diretto. La conferma reale arriva nella nostra risposta entro un giorno lavorativo.",
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
  settembre: [
    {
      q: "Settembre è adatto al mercato Nord Europa?",
      a: "Sì: per chi arriva da Nord Europa settembre unisce mare ancora piacevole, meno folla e migliore valore rispetto all'alta stagione. È il mese da promuovere per coppie, famiglie flessibili e soggiorni 7+ notti.",
    },
    {
      q: "Meglio prenotare direttamente o via portale?",
      a: "Per settembre conviene scriverci direttamente: possiamo proporre il lodge più adatto, verificare più appartamenti nella stessa struttura e rispondere con una tariffa chiara senza commissioni OTA.",
    },
    {
      q: "La piscina e il mare sono ancora utilizzabili?",
      a: "Il mare a settembre è spesso ancora piacevole. Per piscina e servizi stagionali confermiamo sempre nella risposta in base alle date precise del soggiorno.",
    },
  ],
  ottobre: [
    {
      q: "Ottobre è un buon periodo per Villa Olimpia?",
      a: "Ottobre è più adatto a chi cerca tranquillità, soggiorni lunghi, lavoro da remoto o base per scoprire costa e borghi. È meno balneare di agosto, ma molto interessante per ospiti Nord Europa.",
    },
    {
      q: "Fate offerte per soggiorni lunghi?",
      a: "Sì: per ottobre valutiamo proposte su misura per 7+ notti e long stay. Indicate date flessibili, numero ospiti ed esigenze nel form.",
    },
    {
      q: "Come arrivo da Lamezia o Crotone?",
      a: "Villa Olimpia è raggiungibile in auto dagli aeroporti di Lamezia Terme e Crotone. Nella risposta possiamo indicare distanze, tempi reali e consigli pratici.",
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
