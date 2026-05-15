"use client"

import Link from "next/link"
import { Waves, Home, Sun, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MonthConfig } from "@/lib/seasonalConfig"
import { whatsappUrlForConfig } from "@/lib/seasonalConfig"
import {
  trackCtaClick,
  trackWhatsAppClick,
} from "@/components/analytics/google-analytics"

export interface SeasonalValuePropsProps {
  config: MonthConfig
}

const ITEMS = [
  {
    icon: Waves,
    title: "Mare a pochi minuti",
    body: "Spiagge libere e attrezzate dell'Area Marina Protetta raggiungibili dalla struttura. Una base comoda anche con bambini, senza il ritmo pieno di agosto.",
  },
  {
    icon: Sun,
    title: "Piscina + zona giardino",
    body: "Piscina stagionale con lettini e area verde a uso degli ospiti della struttura. Per il periodo esatto di apertura confermiamo sempre in risposta.",
  },
  {
    icon: Home,
    title: "Appartamenti da vivere",
    body: "Appartamenti indipendenti con cucina attrezzata, zona pranzo e parcheggio in struttura. Niente vincolo di orari ristorante: ritmi da casa, non da hotel.",
  },
  {
    icon: Users,
    title: "Giugno: più calmo di agosto",
    body: "Primi bagni estivi, giornate lunghe, meno traffico e spiagge meno affollate. Indicato per famiglie con bambini piccoli e coppie che cercano quiete.",
  },
]

export function SeasonalValueProps({ config }: SeasonalValuePropsProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Perché {config.label}
        </p>
        <h2 className="mt-2 font-playfair text-3xl font-bold text-slate-900">
          Cosa cercano davvero le famiglie a giugno
        </h2>
        <p className="mt-3 text-slate-600">
          Niente promesse generiche: ecco i punti concreti che la maggior parte degli ospiti
          ci segnala nelle recensioni dirette. Per le date esatte e le tariffe rispondiamo
          noi, senza calendario automatico.
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <li
              key={item.title}
              className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.body}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          asChild
          className="gap-2 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
        >
          <a
            href={whatsappUrlForConfig(config)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick(`seasonal_${config.month}_value_props`)
            }
          >
            <MessageCircle className="h-4 w-4" />
            Chiedi su WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link
            href={`/contatti?source=seasonal_value_props&month=${config.month}#prenota`}
            onClick={() =>
              trackCtaClick(`seasonal_${config.month}_value_props_form`)
            }
          >
            Richiedi date e tariffe
          </Link>
        </Button>
        <p className="text-xs text-slate-500 sm:ml-2">
          Rispondiamo direttamente noi, di solito entro un giorno lavorativo.
        </p>
      </div>
    </section>
  )
}
