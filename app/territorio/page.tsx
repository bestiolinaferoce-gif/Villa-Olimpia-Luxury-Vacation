import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, TrendingUp, Mountain, Waves, Castle, Camera, Ship, Coffee, Map as MapIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { generateMetadata as genMeta } from "@/lib/metadata"

export const metadata: Metadata = genMeta({
  title: "Territorio e Attrazioni - Scopri la Calabria",
  description: "Esplora le meraviglie del territorio calabrese: Valli Cupe, Castello di Santa Severina, Sila Piccola, spiagge rosse e Le Castella. A pochi minuti da Villa Olimpia.",
  path: "/territorio",
})

const destinations = [
  {
    id: "valli-cupe",
    name: "Valli Cupe",
    category: "Natura e Trekking",
    distance: "35 minuti",
    duration: "3-4 ore",
    difficulty: "Media",
    price: "€5",
    description: "Le Valli Cupe rappresentano uno dei canyon più spettacolari della Calabria. Situate a soli 35 minuti da Villa Olimpia, offrono sentieri di trekking mozzafiato attraverso gole profonde, cascate nascoste e una natura incontaminata.",
    fullDescription: "Il percorso principale è adatto a tutti i livelli e permette di scoprire la straordinaria biodiversità della zona, con oltre 50 specie di uccelli e una vegetazione rigogliosa che crea un microclima unico. Le cascate naturali e le formazioni rocciose creano un paesaggio surreale, perfetto per fotografie indimenticabili.",
    highlights: [
      "Cascate naturali spettacolari",
      "Sentieri per tutti i livelli",
      "50+ specie di uccelli",
      "Microclima unico",
      "Guide disponibili"
    ],
    image: "/images/territorio/valli-cupe.jpg",
    images: [
      "/images/territorio/valli-cupe-1.jpg",
      "/images/territorio/valli-cupe-2.jpg",
      "/images/territorio/valli-cupe-3.jpg"
    ],
    icon: Mountain,
    coordinates: { lat: 39.0667, lng: 16.7833 }
  },
  {
    id: "castello-santa-severina",
    name: "Castello di Santa Severina",
    category: "Cultura e Storia",
    distance: "40 minuti",
    duration: "2-3 ore",
    difficulty: "Facile",
    price: "€7",
    description: "Uno dei castelli più imponenti e meglio conservati della Calabria, il Castello di Santa Severina domina la vallata del fiume Neto da oltre mille anni. Il borgo medievale è considerato uno dei 'Borghi più belli d'Italia'.",
    fullDescription: "Il castello normanno-bizantino offre una vista panoramica mozzafiato e ospita un museo che racconta la storia millenaria della fortezza. Il centro storico è un labirinto di vicoli medievali, chiese bizantine e palazzi nobiliari perfettamente conservati.",
    highlights: [
      "Castello normanno-bizantino",
      "Museo storico",
      "Borgo medievale",
      "Chiese bizantine",
      "Vista panoramica"
    ],
    image: "/images/territorio/santa-severina.jpg",
    images: [
      "/images/territorio/santa-severina-1.jpg",
      "/images/territorio/santa-severina-2.jpg",
      "/images/territorio/santa-severina-3.jpg"
    ],
    icon: Castle,
    coordinates: { lat: 39.1481, lng: 16.9133 }
  },
  {
    id: "sila-piccola",
    name: "Sila Piccola",
    category: "Montagna e Natura",
    distance: "40 minuti",
    duration: "Mezza giornata / Giornata intera",
    difficulty: "Varie",
    price: "Gratuito",
    description: "A soli 40 minuti da Villa Olimpia, la Sila Piccola offre un'esperienza montana unica in Calabria. Laghi cristallini, boschi di pini larici, sentieri panoramici e una fauna ricchissima vi aspettano.",
    fullDescription: "D'estate è perfetta per escursioni, mountain bike e pic-nic nei boschi. In inverno (dicembre-marzo) potete trovare anche neve e praticare sci di fondo. Il Parco Nazionale della Sila è patrimonio naturale di inestimabile valore, con laghi di montagna che riflettono i colori del cielo.",
    highlights: [
      "Laghi di montagna",
      "Trekking e mountain bike",
      "Fauna selvatica",
      "Sci di fondo (inverno)",
      "Caseifici DOP"
    ],
    image: "/images/territorio/sila.jpg",
    images: [
      "/images/territorio/sila-1.jpg",
      "/images/territorio/sila-2.jpg",
      "/images/territorio/sila-3.jpg"
    ],
    icon: Mountain,
    coordinates: { lat: 39.2667, lng: 16.5833 }
  },
  {
    id: "spiagge-rosse",
    name: "Spiagge Rosse di Capo Rizzuto",
    category: "Mare e Spiaggia",
    distance: "10 minuti",
    duration: "Mezza giornata",
    difficulty: "Facile",
    price: "Gratuito",
    description: "Le famose 'spiagge rosse' prendono il nome dalle falesie di arenaria rossa che creano un contrasto spettacolare con l'azzurro intenso del mare. A soli 10 minuti da Villa Olimpia.",
    fullDescription: "Le falesie di arenaria rossa creano calette naturali con acque cristalline, perfette per lo snorkeling. Il contrasto tra il rosso delle rocce e l'azzurro del mare è unico al mondo, creando scenari fotografici mozzafiato.",
    highlights: [
      "Falesie di arenaria rossa",
      "Acque cristalline",
      "Snorkeling eccellente",
      "Fondale basso",
      "Panorami unici"
    ],
    image: "/images/territorio/spiagge-rosse.jpg",
    images: [
      "/images/territorio/spiagge-rosse-1.jpg",
      "/images/territorio/spiagge-rosse-2.jpg"
    ],
    icon: Waves,
    coordinates: { lat: 38.95, lng: 17.1 }
  },
  {
    id: "le-castella",
    name: "Le Castella",
    category: "Mare e Cultura",
    distance: "8 minuti",
    duration: "2-3 ore",
    difficulty: "Facile",
    price: "Castello €5",
    description: "Il simbolo di Capo Rizzuto: il Castello Aragonese su un isolotto collegato alla terraferma. Un borgo marinaro incantevole con spiagge cristalline e ristoranti di pesce freschissimo.",
    fullDescription: "Il Castello Aragonese è uno dei simboli più fotografati della Calabria. Costruito nel XV secolo su un isolotto, è collegato alla terraferma da un ponte. Il borgo marinaro offre tre calette sabbiose perfette per famiglie e ristoranti specializzati in pesce fresco del giorno.",
    highlights: [
      "Castello Aragonese (XV secolo)",
      "3 calette sabbiose",
      "Ristoranti pesce fresco",
      "Borgo marinaro caratteristico",
      "Panorami da cartolina"
    ],
    image: "/images/territorio/le-castella.jpg",
    images: [
      "/images/territorio/le-castella-1.jpg",
      "/images/territorio/le-castella-2.jpg",
      "/images/territorio/le-castella-3.jpg"
    ],
    icon: Castle,
    coordinates: { lat: 38.9167, lng: 17.0167 }
  },
  {
    id: "crotone",
    name: "Crotone - Città Magno-Greca",
    category: "Cultura e Storia",
    distance: "20 minuti",
    duration: "Mezza giornata",
    difficulty: "Facile",
    price: "Museo €5",
    description: "Fondata nel 708 a.C., Crotone è una delle città della Magna Grecia più importanti. Il Museo Archeologico Nazionale ospita tesori unici, tra cui l'Hera Lacinia, una delle statue greche più belle al mondo.",
    fullDescription: "Passeggia nel centro storico, visita il Castello Carlo V affacciato sul mare, e scopri la storia di Pitagora che qui fondò la sua scuola. Il lungomare di 5 km è perfetto per passeggiate romantiche al tramonto. I ristoranti del centro storico servono piatti tipici calabresi.",
    highlights: [
      "Museo Archeologico Nazionale",
      "Hera Lacinia (statua greca)",
      "Castello Carlo V",
      "Scuola di Pitagora",
      "Lungomare 5 km"
    ],
    image: "/images/territorio/crotone.jpg",
    images: [
      "/images/territorio/crotone-1.jpg",
      "/images/territorio/crotone-2.jpg",
      "/images/territorio/crotone-3.jpg"
    ],
    icon: Castle,
    coordinates: { lat: 39.0833, lng: 17.1167 }
  },
  {
    id: "riserva-marina",
    name: "Riserva Marina Isola Capo Rizzuto",
    category: "Mare e Natura",
    distance: "5-15 minuti",
    duration: "Mezza giornata / Giornata intera",
    difficulty: "Facile / Media",
    price: "Escursioni da €25",
    description: "L'Area Marina Protetta più grande d'Italia! Oltre 15.000 ettari di mare protetto con una biodiversità straordinaria. Paradiso per snorkeling e diving con fondali ricchissimi di fauna e flora marina.",
    fullDescription: "Escursioni in barca, diving center certificati, percorsi snorkeling guidati e visite al centro di educazione ambientale. La riserva ospita cernie, polpi, stelle marine e una varietà incredibile di pesci colorati.",
    highlights: [
      "15.000 ettari protetti",
      "5 diving center certificati",
      "Snorkeling guidato",
      "Escursioni in barca",
      "Biodiversità straordinaria"
    ],
    image: "/images/territorio/riserva-marina.jpg",
    images: [
      "/images/territorio/riserva-marina-1.jpg",
      "/images/territorio/riserva-marina-2.jpg",
      "/images/territorio/riserva-marina-3.jpg"
    ],
    icon: Waves,
    coordinates: { lat: 38.95, lng: 17.0833 }
  },
  {
    id: "patrimonio-unesco",
    name: "Patrimonio UNESCO Calabria",
    category: "Cultura",
    distance: "Varia",
    duration: "Varia",
    difficulty: "Facile",
    price: "Varia",
    description: "La Calabria ospita siti di inestimabile valore storico e culturale. Scopri le meraviglie riconosciute dall'UNESCO e i candidati al riconoscimento.",
    fullDescription: "La Calabria è ricca di siti candidati UNESCO, tra cui i Bronzi di Riace (conservati a Reggio Calabria), le chiese bizantine del periodo normanno, e i centri storici medievali perfettamente conservati.",
    highlights: [
      "Chiese bizantine",
      "Centri storici medievali",
      "Tradizioni culturali",
      "Arte e architettura",
      "Storia millenaria"
    ],
    image: "/images/territorio/unesco.jpg",
    images: [
      "/images/territorio/unesco-1.jpg",
      "/images/territorio/unesco-2.jpg"
    ],
    icon: Camera,
    coordinates: { lat: 39.0, lng: 17.0 }
  }
]

export default function TerritorioPage() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Territorio" }
      ]} />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/territorio/hero-calabria.jpg"
            alt="Vista panoramica Calabria - Territorio Villa Olimpia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
              Scopri il Territorio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Esplora le meraviglie della Calabria a pochi minuti da Villa Olimpia
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Un Territorio da Esplorare
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Villa Olimpia si trova in una posizione privilegiata, perfetta punto di partenza 
              per scoprire le infinite bellezze della Calabria. Dalle montagne della Sila alle 
              spiagge cristalline, dai castelli medievali ai canyon naturali: ogni giorno una 
              nuova avventura vi aspetta.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">
            Destinazioni Imperdibili
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {destinations.map((destination, index) => {
              const Icon = destination.icon
              return (
                <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} - ${destination.category}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{destination.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {destination.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {destination.duration}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      {destination.description}
                    </p>
                    
                    {destination.fullDescription && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {destination.fullDescription}
                      </p>
                    )}
                    
                    {destination.highlights && destination.highlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Cosa vedere:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                          {destination.highlights.slice(0, 4).map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <TrendingUp className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm font-semibold text-primary">
                        {destination.price}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/territorio/${destination.id}`}>
                          Scopri di più
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Mappa Interattiva
            </h2>
            <p className="text-muted-foreground">
              Visualizza tutte le destinazioni sulla mappa
            </p>
          </div>
          
          <Card className="p-6">
            <div className="h-[500px] bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Mappa interattiva con tutti i punti di interesse
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Integrazione Google Maps da implementare)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-ocean/10 to-primary/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Pronto per Esplorare?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Prenota il tuo soggiorno a Villa Olimpia e scopri tutte queste meraviglie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/appartamenti">
                Vedi Appartamenti
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contatti">
                Contattaci
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


