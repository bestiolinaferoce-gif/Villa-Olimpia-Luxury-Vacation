import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { ShareKit } from "@/components/conversion/share-kit"
import { TrackContactSource } from "@/components/analytics/track-contact-source"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Richiedi disponibilità | Villa Olimpia Capo Rizzuto",
  description:
    "Richiedi disponibilità e prezzi per gli appartamenti di Villa Olimpia a Capopiccolo, Capo Rizzuto. Risposta diretta entro 24h, senza intermediari.",
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

      <section className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-playfair font-bold tracking-tight md:text-4xl">
              Verifica disponibilità e prezzi
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Scrivi le date e quante persone siete: ti rispondiamo entro 24 ore con disponibilità e proposta chiara, senza intermediari.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Preferisci un contatto immediato?{" "}
              <a
                href="https://wa.me/393335773390"
                className="text-white underline underline-offset-2 hover:text-slate-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivi su WhatsApp
              </a>{" "}
              o chiama il{" "}
              <a href="tel:+393335773390" className="text-white underline underline-offset-2 hover:text-slate-200">
                333&nbsp;577&nbsp;3390
              </a>.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div id="prenota" className="scroll-mt-24">
            <Card className="border-2 border-primary/15 shadow-xl shadow-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="font-playfair text-2xl">Richiesta disponibilità</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  Inserisci date e numero di persone — ti risponderemo con la proposta più adatta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Card className="border border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="font-playfair text-base">Contatti diretti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <a
                  href="https://wa.me/393335773390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  WhatsApp · 333 577 3390
                </a>
                <a
                  href="tel:+393335773390"
                  className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  Telefono · 333 577 3390
                </a>
                <a
                  href="tel:+393290479193"
                  className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  Secondo recapito · 329 047 9193
                </a>
                <a
                  href="mailto:villaolimpiacaporizzuto@gmail.com"
                  className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  villaolimpiacaporizzuto@gmail.com
                </a>
                <div className="flex items-start gap-2 text-slate-500 pt-1">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>
                    Località Capopiccolo snc
                    <br />
                    Isola di Capo Rizzuto 88841 (KR)
                  </span>
                </div>
              </CardContent>
            </Card>

            <ShareKit />
          </div>
        </div>
      </div>
    </div>
  )
}
