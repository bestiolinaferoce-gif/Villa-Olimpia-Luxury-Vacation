import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
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
  ],
})

export default function ContattiPage() {
  return (
    <div className="min-h-screen pt-20">
      <TrackContactSource />
      <Breadcrumb items={[{ label: "Contatti" }]} />

      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prenota la tua vacanza a Villa Olimpia
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Raccontaci le tue date e ti rispondiamo con un preventivo preciso. Prenotando qui hai il canale diretto
              con Villa Olimpia, senza commissioni di portali, con piscina condivisa, giardino mediterraneo e mare a
              pochi passi.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7fr_5fr]">

          <div id="prenota" className="scroll-mt-24">
            <Card className="border border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Richiedi un preventivo</CardTitle>
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

            <Card className="border border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-base">Contatti diretti</CardTitle>
                <CardDescription className="text-sm">Risposta immediata per urgenze o richieste rapide.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Telefono</p>
                    <div className="space-y-1 mt-1">
                      <a href="tel:+393335773390" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        +39 333 577 3390
                      </a>
                      <a href="tel:+393290479193" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        +39 329 047 9193
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href="mailto:villaolimpiacaporizzuto@gmail.com" className="block text-sm text-slate-600 hover:text-slate-900 transition-colors mt-1">
                      villaolimpiacaporizzuto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Indirizzo</p>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Località Capopiccolo snc<br />
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

            <Card className="border border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-base">WhatsApp immediato</CardTitle>
                <CardDescription className="text-sm">Scrivici ora per una risposta veloce.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="luxury" className="w-full" asChild>
                  <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: 333 577 3390
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+393335773390">
                    <Phone className="mr-2 h-4 w-4" />
                    Chiama: 333 577 3390
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-base">Orari di disponibilità</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Lunedì - Venerdì
                    </span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Sabato
                    </span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Domenica
                    </span>
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
