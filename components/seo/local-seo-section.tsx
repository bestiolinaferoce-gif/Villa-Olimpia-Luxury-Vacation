import Link from "next/link"
import { MapPin, Waves, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LocalSeoSectionProps {
  title?: string
  subtitle?: string
  ctaHref?: string
  ctaLabel?: string
}

export function LocalSeoSection({
  title = "Villa Olimpia a Capopiccolo",
  subtitle = "Appartamenti con piscina a 100 metri dalla Spiaggia dei Gigli, nel cuore di Isola di Capo Rizzuto.",
  ctaHref = "/contatti",
  ctaLabel = "Richiedi preventivo",
}: LocalSeoSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50/70 to-white">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                Local SEO
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-playfair font-bold text-slate-900">{title}</h2>
              <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  <MapPin className="h-4 w-4 text-primary" />
                  Capopiccolo, Isola di Capo Rizzuto
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  <Waves className="h-4 w-4 text-primary" />
                  Spiaggia dei Gigli a 100m
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="luxury" asChild>
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/location">Vedi la location</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/appartamenti">Vedi gli appartamenti</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Appartamenti con piscina in Calabria",
                text: "9 lodge indipendenti, giardino perimetrale e relax premium a Capo Rizzuto.",
              },
              {
                title: "Vacanze a Capopiccolo",
                text: "Mare cristallino, area marina protetta e spiaggia raggiungibile a piedi.",
              },
              {
                title: "Prenotazione diretta",
                text: "Contatto rapido e risposta entro 24 ore con proposta su misura.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
