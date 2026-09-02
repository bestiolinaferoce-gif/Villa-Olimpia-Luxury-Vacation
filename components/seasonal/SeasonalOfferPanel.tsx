import Link from "next/link"
import { ArrowRight, CalendarCheck, Coffee, ShieldCheck, Waves } from "lucide-react"
import type { MonthConfig, SeasonalMonth } from "@/lib/seasonalConfig"

type SeasonalOfferPanelProps = {
  config: MonthConfig
  monthKey: Exclude<SeasonalMonth, "other">
}

type PanelCopy = {
  eyebrow: string
  title: string
  intro: string
  points: string[]
}

const copy: Record<Exclude<SeasonalMonth, "other">, PanelCopy> = {
  giugno: {
    eyebrow: "Offerta diretta giugno",
    title: "Mare gia piacevole, piscina e piu tranquillita prima del picco estivo",
    intro:
      "Giugno e il momento ideale per famiglie e coppie che vogliono mare, piscina e ritmi piu comodi rispetto ad agosto. La richiesta viene gestita direttamente dalla struttura con preventivo chiaro e appartamento assegnato in base alle date reali.",
    points: [
      "Spiaggia dei Gigli a circa 100 metri, raggiungibile a piedi",
      "Piscina condivisa riservata agli ospiti di Villa Olimpia",
      "Soggiorni di 7+ notti con sconto dedicato quando disponibile",
    ],
  },
  luglio: {
    eyebrow: "Alta stagione luglio",
    title: "Bloccare le date prima significa scegliere meglio l'appartamento",
    intro:
      "Luglio ha domanda alta: conviene inviare subito date, ospiti e preferenze per ricevere una proposta concreta. La priorita e trasformare la richiesta in un preventivo veloce, senza passaggi inutili e senza commissioni OTA.",
    points: [
      "Soluzioni per coppie, famiglie 2+2 e piccoli gruppi",
      "Piscina, giardino e mare vicino nello stesso soggiorno",
      "Caparra e policy di cancellazione indicate nel preventivo",
    ],
  },
  maggio: {
    eyebrow: "Soggiorni primavera mare",
    title: "Piu luce, meno folla e tariffe dirette piu leggere",
    intro:
      "Maggio e adatto a chi cerca una Calabria piu tranquilla, con spazi indipendenti e risposta diretta dalla struttura.",
    points: [
      "Appartamenti indipendenti con cucina",
      "Spiaggia dei Gigli raggiungibile a piedi",
      "Preventivo personalizzato sulle date reali",
    ],
  },
  settembre: {
    eyebrow: "Offerta diretta settembre",
    title: "Mare ancora caldo, giornate lunghe e la spiaggia finalmente libera",
    intro:
      "Settembre e il mese che chi conosce Capo Rizzuto aspetta: acqua ancora calda, spiagge tornate vivibili e ritmi lenti. Gli appartamenti sono indipendenti, con cucina e piscina riservata agli ospiti, e la richiesta viene gestita direttamente dalla struttura con un preventivo chiaro sulle date reali.",
    points: [
      "Spiaggia dei Gigli a circa 100 metri, raggiungibile a piedi",
      "Piscina condivisa riservata agli ospiti di Villa Olimpia",
      "Prenotazione diretta senza commissioni dei portali",
    ],
  },
  ottobre: {
    eyebrow: "Coda di stagione ottobre",
    title: "La Calabria fuori stagione, con gli spazi tutti per se",
    intro:
      "Ottobre e per chi cerca silenzio, passeggiate e mare da guardare piu che da affollare. Appartamenti indipendenti con cucina, giardino e un territorio da visitare senza code: Le Castella, l'Area Marina Protetta, le cantine del Ciro.",
    points: [
      "Appartamenti indipendenti con cucina e zona pranzo",
      "Le Castella e Area Marina Protetta a pochi minuti",
      "Preventivo personalizzato sulle date reali",
    ],
  },
}

export function SeasonalOfferPanel({ config, monthKey }: SeasonalOfferPanelProps) {
  const c = copy[monthKey]

  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{c.eyebrow}</p>
          <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{c.intro}</p>
          <div className="mt-6 grid gap-3">
            {c.points.map((point: string) => (
              <div key={point} className="flex gap-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <p className="text-sm font-semibold text-amber-900">Cosa ricevi chiedendo ora</p>
          <div className="mt-5 space-y-4">
            <div className="flex gap-3">
              <CalendarCheck className="h-5 w-5 shrink-0 text-amber-700" />
              <div>
                <p className="font-semibold text-slate-950">Disponibilita sulle date esatte</p>
                <p className="text-sm text-slate-600">La pagina e indicativa; la conferma arriva con risposta diretta.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Waves className="h-5 w-5 shrink-0 text-amber-700" />
              <div>
                <p className="font-semibold text-slate-950">Appartamento piu adatto</p>
                <p className="text-sm text-slate-600">Coppia, famiglia o gruppo: proponiamo la soluzione corretta senza forzare.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Coffee className="h-5 w-5 shrink-0 text-amber-700" />
              <div>
                <p className="font-semibold text-slate-950">Servizi extra su richiesta</p>
                <p className="text-sm text-slate-600">Colazione e servizi accessori possono essere quotati separatamente quando richiesti.</p>
              </div>
            </div>
          </div>
          <Link
            href={`/contatti?source=seasonal_offer_panel&month=${config.month}#prenota`}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Ricevi preventivo per {config.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
