import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Sparkles, Clock, Waves, Heart } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { ShareKit } from "@/components/conversion/share-kit"

export const metadata = {
  title: "Contatti - Villa Olimpia",
  description:
    "Contattaci per prenotare il tuo appartamento a Villa Olimpia. Telefono, email, WhatsApp. Siamo disponibili per rispondere a tutte le tue domande e aiutarti a pianificare la tua vacanza perfetta in Calabria.",
}

export default function ContattiPage() {
  return (
    <div className="min-h-screen pt-20">
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
              Risposta veloce, assistenza reale
            </div>
            <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
              Prenota la tua vacanza a Villa Olimpia
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Raccontaci le tue date e ti rispondiamo con un preventivo preciso. Piscina privata, giardino mediterraneo e mare a pochi passi.
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
                      <a href="tel:+393290479193" className="block text-muted-foreground hover:text-primary">
                        +39 329 047 9193
                      </a>
                      <a href="tel:+393335773390" className="block text-muted-foreground hover:text-primary">
                        +39 333 577 3390
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
                  <a href="https://wa.me/393290479193" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp: 329 047 9193
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
