import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sun, Users, Heart, Globe, Waves, ArrowRight, MessageCircle, Phone } from "lucide-react"

const reasons = [
  {
    title: "Mare ancora caldo",
    text: "In molte settimane di settembre il mare resta invitante: nuotate piacevoli e giornate luminose senza la ressa di agosto.",
  },
  {
    title: "Meno affollamento",
    text: "Spiagge e strade sono più vivibili: ti godi Capopiccolo, la Spiaggia dei Gigli e l'Area Marina Protetta con più spazio e calma.",
  },
  {
    title: "Atmosfera più rilassata",
    text: "Il ritmo è più elegante: piscina, terrazze e momenti conviviali in villa senza stress da alta stagione.",
  },
  {
    title: "Qualità per famiglie e coppie",
    text: "Ideale se cerchi un soggiorno curato, con servizi chiari e contatto diretto con chi gestisce Villa Olimpia.",
  },
]

export type SettembreCapoRizzutoPageViewProps = {
  contactCtaHref?: string
  prenotaHref?: string
  contattiBandHref?: string
  appartamentiHref?: string
  homeHref?: string
}

export function SettembreCapoRizzutoPageView({
  contactCtaHref = "/contatti?source=settembre_landing#prenota",
  prenotaHref = "/prenota",
  contattiBandHref = "/contatti?source=settembre_band#prenota",
  appartamentiHref = "/appartamenti",
  homeHref = "/",
}: SettembreCapoRizzutoPageViewProps) {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: "Settembre a Capo Rizzuto" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow">
              <Sun className="h-4 w-4" />
              Settembre · quiet luxury vicino al mare
            </div>
            <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
              Settembre a Capo Rizzuto: il mese più elegante per il mare
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Villa Olimpia è una base perfetta per chi ama la Calabria autentica: piscina condivisa, nove appartamenti
              indipendenti e la comodità di essere a due passi dall&apos;Area Marina Protetta. A settembre il mare si
              vive con luce speciale, meno folla e un soggiorno più rilassato — senza rinunciare a qualità e servizi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="luxury" size="lg" className="shadow-md" asChild>
                <Link href={contactCtaHref}>
                  Disponibilità settembre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={prenotaHref}>Form prenotazione diretta</Link>
              </Button>
            </div>
            <p className="mt-3 text-sm text-slate-500">Canale diretto Villa Olimpia · risposta in giornata lavorativa</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-slate-900 mb-10">
            Perché scegliere settembre a Villa Olimpia
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {reasons.map((r) => (
              <Card key={r.title} className="border border-primary/10 shadow-sm">
                <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                  <div className="mt-0.5 rounded-full bg-primary/10 p-2">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-playfair">{r.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-2">{r.text}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50/80 border-y border-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6 text-center">Ideale per</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Heart className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Coppie</CardTitle>
                <CardDescription>
                  Ritmo lento, tramonti sul mare e giornate da dedicare a spiagge e borghi vicini.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Famiglie</CardTitle>
                <CardDescription>
                  Spazi comodi, piscina e mare vicino: equilibrio tra relax per genitori e divertimento per i più piccoli.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Ospiti dal Nord Europa</CardTitle>
                <CardDescription>
                  May, June and September are often the best months for guests looking for sea, sunshine and quieter stays in Calabria, with more space to enjoy the coast at a slower pace.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-y border-primary/10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border-2 border-primary/12 bg-gradient-to-br from-white via-primary/[0.03] to-ocean/[0.06] p-8 text-center shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-slate-900 md:text-3xl">Parla subito con noi</h2>
            <p className="mt-2 text-slate-600">
              Stesso team che gestisce la struttura: niente call center, niente OTA.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="luxury" size="lg" className="bg-[#25D366] hover:bg-[#1ebe5d]" asChild>
                <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+393335773390">
                  <Phone className="mr-2 h-5 w-5" />
                  Chiama 333 577 3390
                </a>
              </Button>
              <Button variant="luxury" size="lg" asChild>
                <Link href={contattiBandHref}>Form e email</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-ocean/5">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <Waves className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="mb-4 font-playfair text-2xl font-bold text-slate-900 md:text-3xl">
            Scegli l&apos;unità e completa la richiesta
          </h2>
          <p className="mb-8 text-slate-600">
            Ogni lodge ha caratteristiche diverse: dalla coppia alla famiglia numerosa. Poi chiudi il cerchio con il form
            o su WhatsApp.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" asChild>
              <Link href={appartamentiHref}>
                Tutti gli appartamenti
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={homeHref}>Home Villa Olimpia</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
