import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Wine, MapPin, Clock, Utensils, Grape } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Tour Enogastronomici Cirò | Degustazione Vini DOC | Villa Olimpia",
  description: "Scopri i vini DOC di Cirò: tour enogastronomici, degustazioni, cantine. A 30km da Villa Olimpia. Esperienza unica tra vino e tradizione calabrese.",
  path: "/ciro-wine-tour",
})

export default function CiroWineTourPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Tour Enogastronomici Cirò
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scopri i vini DOC di Cirò, tra i più antichi e prestigiosi d'Italia. Degustazioni, 
              visite alle cantine e abbinamenti con la cucina calabrese tradizionale.
            </p>
          </div>
        </div>
      </section>

      {/* About Cirò Wine */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Il Vino DOC Cirò: Storia e Tradizione
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Il <strong>Cirò DOC</strong> è uno dei vini più antichi d'Italia, con una storia che risale 
              all'epoca della Magna Grecia. Prodotto nella zona di Cirò, a soli 30 km da Villa Olimpia, 
              questo vino è diventato un simbolo della tradizione enologica calabrese.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              La zona di produzione del Cirò DOC si estende su colline che guardano verso il mare Ionio, 
              creando un microclima unico che conferisce ai vini caratteristiche distintive. I vitigni 
              principali sono il Gaglioppo per i rossi e il Greco per i bianchi.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Wine className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Tipologie</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cirò Rosso</li>
                    <li>• Cirò Rosato</li>
                    <li>• Cirò Bianco</li>
                    <li>• Cirò Riserva</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Distanza</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">30 km</p>
                  <p className="text-muted-foreground">da Villa Olimpia</p>
                  <p className="text-sm text-muted-foreground mt-2">Circa 35 minuti in auto</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Grape className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Vitigni</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Gaglioppo</li>
                    <li>• Greco Bianco</li>
                    <li>• Trebbiano</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Tours */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Esperienze Enogastronomiche
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Visita alle Cantine</CardTitle>
                  <CardDescription>Tour guidati nelle cantine storiche</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Molte cantine della zona di Cirò offrono <strong>visite guidate</strong> dove potrai 
                    scoprire i processi di produzione, dalla vendemmia all'imbottigliamento. Le cantine 
                    storiche spesso si trovano in edifici suggestivi con cantine scavate nella roccia.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Durata:</strong> 1-2 ore | <strong>Costo:</strong> Variabile, spesso incluso nella degustazione
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Degustazioni Guidate</CardTitle>
                  <CardDescription>Assaggi di vini DOC con sommelier</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Le <strong>degustazioni guidate</strong> ti permettono di assaggiare diverse tipologie 
                    di Cirò DOC, accompagnate da spiegazioni sui profumi, i sapori e le caratteristiche 
                    di ogni vino. Molte cantine offrono anche abbinamenti con formaggi e salumi locali.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Tipico:</strong> 3-5 vini diversi | <strong>Durata:</strong> 45-90 minuti
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Pranzi e Cene in Cantine</CardTitle>
                  <CardDescription>Abbinamenti vino e cucina calabrese</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Alcune cantine organizzano <strong>pranzi e cene</strong> dove i vini Cirò DOC vengono 
                    abbinati a piatti della tradizione calabrese. Un'esperienza completa che unisce 
                    enologia e gastronomia locale.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Consigliato:</strong> Prenotazione anticipata, specialmente in alta stagione
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tour delle Vigne</CardTitle>
                  <CardDescription>Passeggiate tra i vigneti</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Alcune cantine offrono <strong>passeggiate guidate tra i vigneti</strong>, dove potrai 
                    ammirare il paesaggio collinare che si affaccia sul mare Ionio e conoscere le tecniche 
                    di coltivazione e le caratteristiche del terroir.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Wineries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Cantine Consigliate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Cantine Librandi",
                  description: "Una delle cantine più storiche e rinomate della zona, con degustazioni e visite guidate."
                },
                {
                  name: "Cantine San Francesco",
                  description: "Cantina moderna con vista panoramica, offre degustazioni e abbinamenti gastronomici."
                },
                {
                  name: "Cantine Ippolito",
                  description: "Cantina familiare con tradizione secolare, visite personalizzate e degustazioni."
                },
                {
                  name: "Cantine Caparra & Siciliani",
                  description: "Produzione artigianale, degustazioni in ambiente suggestivo con vista sulle vigne."
                },
              ].map((winery, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{winery.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{winery.description}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Consiglio:</strong> Contattare in anticipo per prenotare visite e degustazioni
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food Pairing */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Abbinamenti con la Cucina Calabrese
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cirò Rosso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Perfetto con:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Carne alla griglia</li>
                    <li>• Formaggi stagionati</li>
                    <li>• 'Nduja e salumi calabresi</li>
                    <li>• Pasta al sugo di carne</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cirò Bianco</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Perfetto con:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pesce fresco</li>
                    <li>• Frutti di mare</li>
                    <li>• Formaggi freschi</li>
                    <li>• Antipasti di mare</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Villa Olimpia */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
              Perché Scegliere Villa Olimpia per i Tour Enogastronomici
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Villa Olimpia è la base perfetta per esplorare le cantine di Cirò:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A soli 30 km dalle cantine di Cirò (35 minuti in auto)",
                "Parcheggio gratuito per raggiungere le cantine",
                "Cucina completa per conservare i vini acquistati",
                "Spazio per riporre le bottiglie in fresco",
                "Posizione strategica per tour di più giorni",
                "WiFi gratuito per prenotare visite online",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Wine className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-lg">{item}</p>
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
                <Link href="/cosa-fare-capo-rizzuto">
                  <div className="text-center">
                    <p className="font-semibold">Cosa Fare</p>
                    <p className="text-sm text-muted-foreground">Attività e attrazioni</p>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/enogastronomia">
                  <div className="text-center">
                    <p className="font-semibold">Enogastronomia</p>
                    <p className="text-sm text-muted-foreground">Cucina calabrese</p>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/capo-rizzuto">
                  <div className="text-center">
                    <p className="font-semibold">Appartamenti</p>
                    <p className="text-sm text-muted-foreground">Capo Rizzuto</p>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Prenota la Tua Esperienza Enogastronomica
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per scoprire i vini DOC di Cirò e la tradizione enologica calabrese.
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
  )
}
