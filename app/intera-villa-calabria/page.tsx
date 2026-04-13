import Image from "next/image"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, Waves, ShieldCheck, ArrowRight, Home, Clock, MessageCircle } from "lucide-react"

export const metadata = generateMetadata({
  title: "Più appartamenti o intera struttura | Gruppi e famiglie | Villa Olimpia",
  description:
    "Richieste per più appartamenti nello stesso complesso o per l'intera struttura Villa Olimpia a Capo Rizzuto: soluzioni personalizzate per gruppi e famiglie, da verificare in base alle disponibilità. Prenotazione diretta.",
  path: "/intera-villa-calabria",
  keywords: [
    "villa intera capo rizzuto",
    "più appartamenti stessa struttura calabria",
    "gruppo vacanza capo rizzuto",
    "famiglia allargata villa piscina calabria",
    "prenotazione diretta villa olimpia gruppi",
  ],
})

export default function InteraVillaCalabriaPage() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: "Intera struttura e gruppi" }]} />

      {/* Hero con immagine */}
      <section className="relative h-[55vh] overflow-hidden">
        <Image
          src="/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg"
          alt="Villa Olimpia piscina e giardino - soluzione per gruppi e famiglie a Capo Rizzuto"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-2 text-sm font-semibold mb-4">
              <Users className="h-4 w-4" />
              Gruppi · famiglie · più appartamenti
            </div>
            <h1 className="text-4xl font-playfair font-bold md:text-5xl leading-tight">
              Più appartamenti nello stesso complesso: la comodità di Villa Olimpia per gruppi e famiglie
            </h1>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/60 to-white py-14">
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-lg text-slate-600 leading-relaxed">
              Villa Olimpia riunisce nove appartamenti indipendenti attorno a piscina e spazi esterni: è la soluzione
              ideale quando viaggiate in più nuclei ma volete restare vicini. Le richieste per l&apos;intera struttura o
              per combinazioni multiple sono valutate caso per caso — la disponibilità va sempre verificata su richiesta,
              senza impegni automatici.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm">
              <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-sm">
                <Home className="h-4 w-4 text-primary shrink-0" />
                <span className="text-slate-700">9 appartamenti indipendenti</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-sm">
                <Waves className="h-4 w-4 text-primary shrink-0" />
                <span className="text-slate-700">Piscina e giardino condivisi</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-sm">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span className="text-slate-700">Risposta entro 24 ore</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="luxury" size="lg" asChild>
                <Link href="/contatti?source=entire_villa_page#prenota">
                  Invia la tua richiesta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Scrivi su WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6 text-center md:text-left">
            Perché prenotare più appartamenti qui
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-primary/10">
              <CardHeader>
                <Building2 className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Stesso complesso, più privacy</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Ogni famiglia ha il proprio appartamento con cucina e servizi, ma condividete piscina, giardino e momenti
                  insieme senza dovervi spostare in auto ogni giorno.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-primary/10">
              <CardHeader>
                <Waves className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Mare e Area Marina Protetta</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Posizione comoda verso Capopiccolo e la Spiaggia dei Gigli: logistica semplice per tutti, anche con
                  bambini o ospiti con esigenze diverse.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-primary/10">
              <CardHeader>
                <Home className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Spazi esterni condivisi</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  La piscina e le aree comuni diventano il naturale punto d&apos;incontro dopo una giornata al mare.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-primary/10">
              <CardHeader>
                <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg font-playfair">Prenotazione diretta, proposta chiara</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Parli direttamente con Villa Olimpia: ti indichiamo quali combinazioni sono realistiche in base al
                  calendario, senza promettere disponibilità che non possiamo confermare.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-8 text-center">Quando è ideale</h2>
          <div className="space-y-4 text-slate-700">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-playfair">Vacanze in famiglia allargata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Nonni, zii e cugini: più appartamenti permettono a ciascuno di avere i propri spazi pur restando nel
                  medesimo contesto sicuro e curato.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-playfair">Piccoli gruppi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Amici o colleghi: organizzate il soggiorno con logistica semplice e serate condivise in piscina o in
                  terrazza.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-playfair">Soggiorni organizzati su misura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Date flessibili, esigenze particolari o permanenze più lunghe: descrivi la tua situazione e lavoriamo
                  su una proposta personalizzata, nei limiti delle disponibilità reali.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-ocean/10 to-primary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-slate-900 mb-4">
            Esplora gli appartamenti e scrivici
          </h2>
          <p className="text-slate-600 mb-8">
            Guarda le schede degli appartamenti per capire capacità e disposizione, poi contattaci con numero di ospiti e
            periodo indicativo. Maggio, giugno e settembre sono spesso i mesi migliori per soggiorni di gruppo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/appartamenti">Vedi tutti gli appartamenti</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/settembre-capo-rizzuto">Settembre a Capo Rizzuto</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/maggio-2026">Maggio 2026</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
