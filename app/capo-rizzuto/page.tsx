import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Check, MapPin, Waves, Car, Wifi, Umbrella } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Appartamenti Capo Rizzuto | Villa Olimpia | Affitto Vacanze Calabria",
  description: "Cerca appartamenti a Capo Rizzuto? Villa Olimpia offre 9 appartamenti vacanza con piscina, WiFi, parcheggio. Vicino Le Castella e spiagge.",
  path: "/capo-rizzuto",
})

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Villa Olimpia",
  "image": "https://villaolimpiacaporizzuto.com/images/villa-olimpia-main.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Località Capopiccolo snc",
    "addressLocality": "Isola di Capo Rizzuto",
    "addressRegion": "Calabria",
    "postalCode": "88841",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.913856",
    "longitude": "17.0754964"
  },
  "telephone": "+393290479193",
  "priceRange": "€€",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "9.4"
  },
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Piscina"},
    {"@type": "LocationFeatureSpecification", "name": "Parcheggio gratuito"},
    {"@type": "LocationFeatureSpecification", "name": "WiFi gratuito"}
  ]
}

export default function CapoRizzutoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrg),
        }}
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Appartamenti Vacanza a Capo Rizzuto - Villa Olimpia
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stai cercando <strong>appartamenti a Capo Rizzuto</strong> per le tue vacanze in Calabria? 
                Villa Olimpia è la soluzione perfetta: 9 appartamenti indipendenti con piscina condivisa, 
                giardino mediterraneo e parcheggio gratuito.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
                Perché Scegliere Villa Olimpia a Capo Rizzuto
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Umbrella, text: "9 appartamenti indipendenti (2-6 ospiti)" },
                  { icon: Waves, text: "Piscina 12x6m con area relax" },
                  { icon: MapPin, text: "A 500m dalle spiagge di Capopiccolo" },
                  { icon: Car, text: "8 minuti da Le Castella" },
                  { icon: Wifi, text: "WiFi fibra gratuito" },
                  { icon: Car, text: "Parcheggio privato custodito" },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-lg font-medium">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Apartment Types */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
                Appartamenti Capo Rizzuto: Tipologie Disponibili
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Villa Olimpia offre appartamenti per ogni esigenza: dal monolocale per coppie 
                al trilocale per famiglie di 6 persone. Tutti gli appartamenti dispongono di:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Monolocali</CardTitle>
                    <CardDescription>Perfetti per coppie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Cucina completa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Terrazza privata</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Vista giardino</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bilocali</CardTitle>
                    <CardDescription>Ideali per famiglie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>2 camere</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Bagno completo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Fino a 4 ospiti</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Trilocali</CardTitle>
                    <CardDescription>Per grandi famiglie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>2-3 camere</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Fino a 6 ospiti</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Veranda privata</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
                Dove Si Trova Villa Olimpia
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Villa Olimpia si trova a <strong>Capopiccolo, Isola di Capo Rizzuto</strong>, 
                nella provincia di Crotone, Calabria. La posizione strategica ti permette di:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { emoji: "🏖️", text: "Raggiungere la spiaggia a piedi in 7 minuti (500m)" },
                  { emoji: "🏰", text: "Visitare il Castello Aragonese di Le Castella (3km - 8 min auto)" },
                  { emoji: "🐠", text: "Fare snorkeling nell'Area Marina Protetta (2km)" },
                  { emoji: "🍷", text: "Degustare vini DOC a Cirò (30km)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-3xl">{item.emoji}</span>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-center">
                Scopri di Più su Capo Rizzuto
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild className="h-auto py-4">
                  <Link href="/le-castella">
                    <div className="text-center">
                      <p className="font-semibold">Le Castella</p>
                      <p className="text-sm text-muted-foreground">Castello Aragonese</p>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto py-4">
                  <Link href="/spiagge-capo-rizzuto">
                    <div className="text-center">
                      <p className="font-semibold">Spiagge</p>
                      <p className="text-sm text-muted-foreground">Migliori spiagge</p>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto py-4">
                  <Link href="/cosa-fare-capo-rizzuto">
                    <div className="text-center">
                      <p className="font-semibold">Cosa Fare</p>
                      <p className="text-sm text-muted-foreground">Attività e attrazioni</p>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Prenota il Tuo Appartamento a Capo Rizzuto
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Non aspettare! Gli appartamenti di Villa Olimpia sono molto richiesti, 
              soprattutto nei mesi estivi (giugno-settembre).
            </p>
            <Button variant="luxury" size="lg" asChild className="group">
              <Link href="/contatti">
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  Verifica Disponibilità
                </span>
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
