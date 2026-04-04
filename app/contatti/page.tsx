import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Sparkles, Clock, Waves, Heart } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { ShareKit } from "@/components/conversion/share-kit"
import { TrackContactSource } from "@/components/analytics/track-contact-source"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Contatti e Prenotazione Diretta a Capo Rizzuto | Villa Olimpia",
  description:
    "Contatta Villa Olimpia per preventivi e prenotazioni dirette dei 9 appartamenti a Capopiccolo, nell'Area Marina Protetta di Capo Rizzuto. Telefono, email e WhatsApp per un contatto rapido e senza intermediari.",
  path: "/contatti",
  keywords: [
    "contatti Villa Olimpia",
    "prenotazione diretta appartamenti Capo Rizzuto",
    "contatti appartamenti capopiccolo",
    "preventivo area marina protetta capo rizzuto",
    "telefono Villa Olimpia Capo Rizzuto",
    "email appartamenti Spiaggia dei Gigli",
    "contatti settembre capo rizzuto",
    "prenotazione gruppo villa calabria",
    "soggiorno 7 notti capo rizzuto",
  ],
})

export default function ContattiPage() {
  return (
    <div className="min-h-screen pt-20">
      <TrackContactSource />
      <Breadcrumb items={[{ label: "Contatti" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow">
              <Sparkles className="h-4 w-4" />
              Date flessibili · gruppi · settembre
            </div>
            <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
              Richieste su misura: famiglie, gruppi e soggiorni più lunghi
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Scrivici per date anche indicative, soggiorni da 7 notti in su, settembre o maggio/giugno — e per
              organizzare più appartamenti nello stesso complesso. Ti rispondiamo dal canale diretto Villa Olimpia,
              con proposta chiara e senza intermediari: piscina condivisa, Area Marina Protetta e mare a pochi passi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow">
                <Clock className="h-4 w-4 text-primary" />
                Risposta entro 24h
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow">
                <Waves className="h-4 w-4 text-primary" />
                A 100m dal mare
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow">
                <Heart className="h-4 w-4 text-primary" />
                Perfetto per famiglie
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-slate-700 shadow border border-emerald-200">
                <span className="text-emerald-600 font-semibold">✓</span>
                Cancellazione flessibile fino a 30 giorni prima
              </div>
              <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-slate-700 shadow border border-amber-200">
                <span className="text-amber-600 font-semibold">−</span>
                Sconto soggiorni 7+ notti (Giugno/Luglio)
              </div>
              <div className="flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm text-slate-700 shadow border border-sky-200">
                <span className="text-sky-600 font-semibold">◎</span>
                Settembre: mare elegante e ritmo più calmo
              </div>
              <div className="flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm text-slate-700 shadow border border-violet-200">
                <span className="text-violet-600 font-semibold">+</span>
                Gruppi e più appartamenti: soluzione su richiesta
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-primary/10 bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-2 text-center md:text-left">
              Richieste più frequenti
            </h2>
            <p className="text-sm text-slate-600 mb-6 text-center md:text-left">
              Scegli il tipo di soggiorno che ti interessa: nel messaggio puoi già indicarlo così rispondiamo più in fretta.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-playfair">Soggiorno famiglia</CardTitle>
                  <CardDescription className="text-sm">
                    Bambini, spazi comuni e vicinanza al mare: ti proponiamo l&apos;appartamento più adatto al tuo nucleo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#prenota">Compila il form</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-playfair">Soggiorno 7+ notti</CardTitle>
                  <CardDescription className="text-sm">
                    Date flessibili e permanenze più lunghe: valutiamo insieme il periodo migliore (anche fuori da agosto).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/prenota">Vai a Prenota</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-playfair">Intera villa / più appartamenti</CardTitle>
                  <CardDescription className="text-sm">
                    Famiglie allargate o piccoli gruppi: disponibilità e combinazioni da verificare caso per caso.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="luxury" size="sm" className="w-full" asChild>
                    <Link href="/intera-villa-calabria">Scopri la pagina dedicata</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div id="prenota" className="scroll-mt-24">
            <Card className="border-2 border-primary/10 shadow-2xl">
              <CardHeader>
                <CardTitle>Richiedi un preventivo</CardTitle>
                <CardDescription>
                  Inserisci le date e le preferenze. Ti risponderemo con la miglior proposta disponibile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <ShareKit />

            <Card className="border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5">
              <CardHeader>
                <CardTitle>Contatti diretti</CardTitle>
                <CardDescription>Risposta immediata per urgenze o richieste rapide.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Telefono</p>
                    <div className="space-y-1">
                      <a href="tel:+393335773390" className="block text-muted-foreground hover:text-primary">
                        +39 333 577 3390
                      </a>
                      <a href="tel:+393290479193" className="block text-muted-foreground hover:text-primary">
                        +39 329 047 9193
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:villaolimpiacaporizzuto@gmail.com" className="text-muted-foreground hover:text-primary">
                      villaolimpiacaporizzuto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Indirizzo</p>
                    <p className="text-muted-foreground">
                      Località Capopiccolo snc
                      <br />
                      Isola di Capo Rizzuto 88841 (KR)
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-3">
                      <a
                        href="https://maps.google.com/?q=Villa+Olimpia+Capo+Rizzuto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apri su Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/15 bg-gradient-to-br from-sky-50 to-white">
              <CardHeader>
                <CardTitle>Sei un&apos;agenzia?</CardTitle>
                <CardDescription>Collaboriamo con agenzie viaggi e tour operator per disponibilità e tariffe dedicate.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="luxury" className="w-full" asChild>
                  <a href="mailto:villaolimpiacaporizzuto@gmail.com?subject=Collaborazione%20Agenzia%20-%20Villa%20Olimpia">
                    Richiedi collaborazione B2B
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Nel form a sinistra puoi compilare anche il campo <strong>Agenzia</strong> per una gestione prioritaria.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>WhatsApp immediato</CardTitle>
                <CardDescription>Scrivici ora per una risposta veloce.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="luxury" className="w-full" asChild>
                  <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp: 333 577 3390
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+393335773390">
                    <Phone className="mr-2 h-5 w-5" />
                    Chiama: 333 577 3390
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 bg-gradient-to-br from-amber-50 via-white to-sky-50">
              <CardHeader>
                <CardTitle>Orari di disponibilità</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunedì - Venerdì</span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabato</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domenica</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
