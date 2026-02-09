import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Waves, Fish, MapPin, Shield, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Diving Capo Rizzuto | Area Marina Protetta | Villa Olimpia",
  description: "Scopri l'Area Marina Protetta Capo Rizzuto: snorkeling, immersioni, diving. Villa Olimpia a 2km dalla riserva marina. Fondali ricchi di vita.",
  path: "/area-marina-protetta",
})

export default function AreaMarinaProtettaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Area Marina Protetta Capo Rizzuto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Esplora una delle riserve marine più importanti d'Italia. L'Area Marina Protetta Capo Rizzuto 
              offre fondali spettacolari ricchi di biodiversità, perfetti per snorkeling e immersioni.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Cos'è l'Area Marina Protetta Capo Rizzuto
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              L'<strong>Area Marina Protetta Capo Rizzuto</strong> è stata istituita nel 1991 ed è una delle 
              più grandi riserve marine d'Italia, estendendosi per oltre 14.000 ettari lungo la costa ionica calabrese. 
              La riserva protegge un ecosistema marino unico, caratterizzato da fondali ricchi di biodiversità.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              L'area è divisa in tre zone con diversi livelli di protezione, permettendo attività sostenibili 
              come snorkeling, immersioni guidate e pesca sportiva regolamentata, garantendo al contempo la 
              conservazione dell'ambiente marino.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Superficie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">14.000+</p>
                  <p className="text-muted-foreground">ettari protetti</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Distanza da Villa Olimpia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">2 km</p>
                  <p className="text-muted-foreground">dalla riserva</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Fish className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Biodiversità</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground">specie marine</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Attività nell'Area Marina Protetta
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Snorkeling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    L'Area Marina Protetta è perfetta per lo <strong>snorkeling</strong>. I fondali poco profondi 
                    e le acque cristalline permettono di osservare una grande varietà di pesci colorati, stelle marine, 
                    ricci di mare e altre creature marine senza bisogno di attrezzatura subacquea complessa.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Dove:</strong> Le zone A e B dell'area protetta sono accessibili per snorkeling. 
                    Consigliamo di partire dalla spiaggia di Capopiccolo, a soli meno di 100 m da Villa Olimpia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Waves className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Immersioni Subacquee</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Per gli appassionati di <strong>immersioni subacquee</strong>, l'Area Marina Protetta offre 
                    siti di immersione spettacolari. I fondali rocciosi ospitano gorgonie, spugne colorate, 
                    cernie, dentici e molte altre specie marine.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Centri Diving:</strong> Numerosi centri diving nella zona organizzano immersioni guidate 
                    per tutti i livelli, dai principianti (battesimo del mare) agli esperti. Molti centri offrono 
                    anche corsi PADI e brevi certificazioni.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Siti Popolari:</strong> Secca di Punta Rizzuto, Scoglio della Galea, Secca di Le Castella.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Fish className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Pesca Sportiva</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    L'Area Marina Protetta regolamenta la <strong>pesca sportiva</strong> per garantire la 
                    sostenibilità. La pesca è consentita nelle zone B e C con permessi specifici. Le acque 
                    ricche di pesce offrono ottime opportunità per catture di cernie, dentici, orate e spigole.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Life */}
      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Vita Marina da Scoprire
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Pesci Colorati",
                  description: "Saraghi, donzelle, castagnole, triglie e molti altri pesci colorati popolano i fondali."
                },
                {
                  title: "Cernie e Dentici",
                  description: "I fondali rocciosi ospitano cernie e dentici, predatori affascinanti da osservare."
                },
                {
                  title: "Gorgonie e Coralli",
                  description: "Le formazioni di gorgonie gialle e rosse creano paesaggi subacquei spettacolari."
                },
                {
                  title: "Stelle Marine e Ricci",
                  description: "Facilmente osservabili anche in snorkeling, stelle marine e ricci di mare sono comuni."
                },
                {
                  title: "Polpi e Seppie",
                  description: "I maestri del mimetismo, polpi e seppie, si nascondono tra le rocce."
                },
                {
                  title: "Tartarughe Marine",
                  description: "Con un po' di fortuna, è possibile avvistare tartarughe marine Caretta caretta."
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Villa Olimpia */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
              Perché Scegliere Villa Olimpia per l'Area Marina Protetta
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Villa Olimpia è la base perfetta per esplorare l'Area Marina Protetta:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A soli 2km dall'ingresso dell'Area Marina Protetta",
                "A meno di 100 m dalla spiaggia di Capopiccolo (punto di accesso)",
                "Parcheggio gratuito per attrezzatura subacquea",
                "Spazio per asciugare mute e attrezzatura",
                "Cucina completa per preparare pranzi al sacco",
                "WiFi gratuito per prenotare immersioni online",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/90 rounded-lg shadow-sm border border-primary/10">
                  <Waves className="h-5 w-5 text-primary flex-shrink-0" />
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
            Prenota la Tua Vacanza Subacquea
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per esplorare l'Area Marina Protetta Capo Rizzuto.
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
