import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Clock, Waves, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Prenota ora - Villa Olimpia",
  description:
    "Richiedi disponibilita e preventivo per Villa Olimpia a Capopiccolo. Risposta entro 24h e proposta su misura.",
}

export default function PrenotaPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Prenotazione diretta
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-playfair font-bold text-slate-900">
              Prenota la tua vacanza a Villa Olimpia
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Risposta entro 24 ore, proposta su misura e assistenza reale. Piscina condivisa, giardino perimetrale e mare a 100 metri.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Sicurezza e trasparenza</p>
                <p className="mt-2 text-sm text-slate-600">Preventivo chiaro, nessuna sorpresa e contatto diretto.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Localita premium</p>
                <p className="mt-2 text-sm text-slate-600">Capopiccolo, Area Marina Protetta e Spiaggia dei Gigli.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-700 shadow">
                <Clock className="h-4 w-4 text-primary" />
                Risposta entro 24h
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-700 shadow">
                <Waves className="h-4 w-4 text-primary" />
                Spiaggia a 100m
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-700 shadow">
                <Shield className="h-4 w-4 text-primary" />
                9 lodge indipendenti
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="luxury" asChild>
                <Link href="#prenota">Richiedi preventivo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/appartamenti">Vedi gli appartamenti</Link>
              </Button>
            </div>
          </div>

          <div id="prenota" className="scroll-mt-24">
            <Card className="border-2 border-primary/10 shadow-2xl">
              <CardHeader>
                <CardTitle>Richiedi disponibilita</CardTitle>
                <CardDescription>Compila il form e ricevi una proposta personalizzata.</CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>

            <div className="mt-4 rounded-2xl border border-primary/10 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">WhatsApp immediato</p>
              <p className="mt-2 text-sm text-slate-600">
                Per urgenze scrivici ora. Rispondiamo velocemente.
              </p>
              <Button variant="outline" className="mt-3 w-full" asChild>
                <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: 333 577 3390
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
