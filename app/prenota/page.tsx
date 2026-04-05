import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Clock, Waves, MessageCircle, Users, Home, Building2, Globe } from "lucide-react"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Prenotazione Diretta Appartamenti a Capo Rizzuto | Villa Olimpia",
  description:
    "Prenotazione diretta Villa Olimpia: maggio, giugno e settembre sono spesso i mesi migliori per mare più tranquillo e soggiorni di qualità. Famiglie, piccoli gruppi e richieste per più appartamenti o intera struttura: risposta entro 24 ore, proposta su misura, senza intermediari.",
  path: "/prenota",
  keywords: [
    "prenota villa olimpia",
    "prenotazione diretta appartamento capo rizzuto",
    "prenota appartamenti capopiccolo",
    "vacanza maggio giugno settembre calabria",
    "villa famiglie piccoli gruppi capo rizzuto",
    "prenotazione più appartamenti stessa struttura",
    "area marina protetta capo rizzuto alloggio diretto",
    "richiesta disponibilità villa olimpia",
  ],
})

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
              Maggio, giugno e settembre sono spesso i mesi ideali per chi cerca mare bellissimo con meno ressa, luce generosa e un ritmo più rilassato. Villa Olimpia è una base forte per famiglie, piccoli gruppi e ospiti dal Nord Europa: prenotazione diretta, risposta entro 24 ore e proposta personalizzata, anche se ti servono più appartamenti nello stesso complesso o una soluzione su misura per l&apos;intera struttura (sempre da verificare in base alle disponibilità reali).
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Sicurezza e trasparenza</p>
                <p className="mt-2 text-sm text-slate-600">Preventivo chiaro, nessuna sorpresa e contatto diretto.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Posizione strategica</p>
                <p className="mt-2 text-sm text-slate-600">Capopiccolo, Area Marina Protetta e Spiaggia dei Gigli a pochi passi.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/15 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">Vacanza in famiglia</CardTitle>
                  <CardDescription>
                    Spazi comodi, piscina e vicinanza al mare: ideale per bambini e genitori che vogliono una base tranquilla tra Capopiccolo e Area Marina Protetta.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-primary/15 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">Soggiorno di gruppo</CardTitle>
                  <CardDescription>
                    Piccoli gruppi di amici o parenti: chiedici come organizzare più appartamenti nello stesso complesso per vivere insieme pur mantenendo privacy.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-primary/15 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">Intera villa o più appartamenti</CardTitle>
                  <CardDescription>
                    Per famiglie allargate o esigenze speciali: descrivi numero di ospiti e date flessibili — valuteremo insieme disponibilità e soluzione migliore, senza promesse anticipate.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Globe className="h-4 w-4 text-primary" />
                Ideal for Northern European guests
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                May, June and September are often the best months for guests looking for sea, sun and quieter stays in Calabria. Direct booking with Villa Olimpia means a clear, personal reply — perfect if you are planning a longer stay or travelling with family and friends.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                <Link href="/settembre-capo-rizzuto" className="underline-offset-2 hover:underline text-primary">
                  September in Capo Rizzuto
                </Link>
                <span aria-hidden>·</span>
                <Link href="/intera-villa-calabria" className="underline-offset-2 hover:underline text-primary">
                  Groups &amp; entire property requests
                </Link>
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
                <CardTitle>Richiedi disponibilità</CardTitle>
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
