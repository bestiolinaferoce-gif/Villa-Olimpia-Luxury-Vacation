import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contatti - Villa Olimpia",
  description: "Contattaci per prenotare il tuo appartamento a Villa Olimpia. Siamo disponibili per rispondere a tutte le tue domande.",
}

export default function ContattiPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Contattaci
            </h1>
            <p className="text-xl text-muted-foreground">
              Siamo qui per aiutarti a pianificare la tua vacanza perfetta in
              Calabria
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Richiedi una Prenotazione</CardTitle>
                <CardDescription>
                  Compila il form e ti risponderemo entro 24 ore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informazioni di Contatto</CardTitle>
                <CardDescription>
                  Siamo disponibili per rispondere a tutte le tue domande
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefono</p>
                    <div className="space-y-1">
                      <a
                        href="tel:+393290479193"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        +39 329 047 9193
                      </a>
                      <a
                        href="tel:+393335773390"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        +39 333 577 3390
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:villaolimpiacaporizzuto@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      villaolimpiacaporizzuto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Indirizzo</p>
                    <p className="text-muted-foreground">
                      Località Capopiccolo snc
                      <br />
                      Isola di Capo Rizzuto 88841 (KR), Calabria, Italia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contatto Rapido</CardTitle>
                <CardDescription>
                  Scrivici su WhatsApp per una risposta immediata
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="luxury"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/393335773390"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp: 333 577 3390
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/393290479193"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp: 329 047 9193
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Orari di Disponibilità</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunedi - Venerdi</span>
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

