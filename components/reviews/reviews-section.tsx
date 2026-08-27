import Link from "next/link"
import { ExternalLink, MapPin, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function ReviewsSection() {
  return (
    <section className="bg-gradient-to-b from-background via-primary/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Fonti pubbliche consultabili
            </span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-slate-900 md:text-6xl">
            Recensioni di Villa Olimpia
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Per evitare copie incomplete o valutazioni non aggiornate, non ripubblichiamo recensioni né medie voto sul sito. Puoi consultare direttamente la scheda pubblica Google e verificare data, autore e contenuto sulla fonte originale.
          </p>

          <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="mt-4 font-playfair text-2xl font-bold text-slate-900">
                Scheda Google pubblica
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Le recensioni su Google sono pubblicate e moderate da Google. La struttura non può approvarle preventivamente né limitarne la pubblicazione.
              </p>
              <Button className="mt-6" variant="luxury" asChild>
                <a href={SITE_CONFIG.social.googleReviews} target="_blank" rel="noopener noreferrer">
                  Apri Villa Olimpia su Google
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <MessageCircle className="h-8 w-8 text-emerald-700" />
              <h2 className="mt-4 font-playfair text-2xl font-bold text-slate-900">
                Domande prima di prenotare
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Se vuoi chiarire servizi, distanze, caratteristiche dei lodge o condizioni del soggiorno, chiedi una risposta scritta direttamente alla struttura.
              </p>
              <Button className="mt-6" variant="outline" asChild>
                <Link href="/contatti?source=reviews_page#prenota">Contatta Villa Olimpia</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
