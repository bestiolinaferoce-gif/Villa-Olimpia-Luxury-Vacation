import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Clock, Waves, MessageCircle, Users, Home, Building2, Globe } from "lucide-react"

export type PrenotaPageViewProps = {
  apartmentsHref?: string
  settembreHref?: string
  interaVillaHref?: string
}

export function PrenotaPageView({
  apartmentsHref = "/appartamenti",
  settembreHref = "/settembre-capo-rizzuto",
  interaVillaHref = "/intera-villa-calabria",
}: PrenotaPageViewProps) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Maggio · giugno · luglio · settembre — diretto con la struttura
            </div>
            <h1 className="mt-6 text-4xl font-playfair font-bold tracking-tight text-slate-900 md:text-5xl md:leading-tight">
              Prenota la tua vacanza a Villa Olimpia
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Maggio, giugno e settembre sono spesso i mesi ideali per chi cerca mare bellissimo con meno ressa, luce generosa e un ritmo più rilassato. Villa Olimpia è una base forte per famiglie, piccoli gruppi e ospiti dal Nord Europa: prenotazione diretta, risposta entro 24 ore e proposta personalizzata, anche se ti servono più appartamenti nello stesso complesso o una soluzione su misura per l&apos;intera struttura (sempre da verificare in base alle disponibilità reali).
            </p>
            <ol className="mt-5 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  1
                </span>
                Date e ospiti nel form
              </li>
              <li className="hidden text-slate-300 sm:block" aria-hidden>
                →
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  2
                </span>
                Risposta con proposta chiara
              </li>
            </ol>

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
                <Link href={settembreHref} className="underline-offset-2 hover:underline text-primary">
                  September in Capo Rizzuto
                </Link>
                <span aria-hidden>·</span>
                <Link href={interaVillaHref} className="underline-offset-2 hover:underline text-primary">
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="luxury" size="lg" className="w-full sm:w-auto shadow-md" asChild>
                <Link href="#prenota">Vai al form — check disponibilità</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href={apartmentsHref}>Scegli l&apos;appartamento</Link>
              </Button>
            </div>
          </div>

          <div id="prenota" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <Card className="border-2 border-primary/15 shadow-2xl shadow-primary/5 ring-1 ring-primary/5">
              <CardHeader className="space-y-1 pb-2">
                <CardTitle className="font-playfair text-2xl">Check disponibilità</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Un solo passaggio: date, ospiti e recapito. Ti rispondiamo dal canale diretto, senza commissioni OTA.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>

            <div className="mt-5 rounded-2xl border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-50/80 to-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Preferisci WhatsApp?</p>
              <p className="mt-1 text-sm text-slate-600">Stessa giornata lavorativa, numero diretto Villa Olimpia.</p>
              <Button variant="luxury" className="mt-4 w-full bg-[#25D366] hover:bg-[#1ebe5d]" asChild>
                <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Apri WhatsApp · 333 577 3390
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
