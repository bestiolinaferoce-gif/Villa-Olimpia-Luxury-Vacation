import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, TrendingUp, Mountain, Waves, Castle, Camera, Ship, Coffee, Map as MapIcon, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { generateMetadata as genMeta } from "@/lib/metadata"

export const metadata: Metadata = genMeta({
  title: "Territorio e Attrazioni - Scopri la Calabria",
  description: "Esplora le meraviglie del territorio calabrese: Valli Cupe, Castello di Santa Severina, Sila Piccola, spiagge rosse e Le Castella. A pochi minuti da Villa Olimpia.",
  path: "/territorio",
  keywords: [
    "valli cupe calabria",
    "castello santa severina",
    "sila piccola calabria",
    "capo rizzuto attrazioni",
    "le castella calabria",
    "calabria turismo",
    "riserva marina capo rizzuto",
    "crotone calabria",
    "spiagge rosse capo rizzuto"
  ]
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
    image: "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
    images: [
      "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
      "/images/villa/gallery/Esterni_Piscina_Giardino_01.jpg",
      "/images/villa/gallery/Esterni_Portico_Giardino_01.jpg"
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
    image: "/images/villa/gallery/Esterni_LeCastella_01.jpg",
    images: [
      "/images/villa/gallery/Esterni_LeCastella_01.jpg",
      "/images/villa/gallery/Esterni_Spiaggia_01.jpg",
      "/images/villa/gallery/Esterni_Spiaggia_Tramonto_01.jpg"
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
    image: "/images/villa/location/beach-4.jpg",
    images: [
      "/images/villa/location/beach-4.jpg",
      "/images/villa/location/beach-5.jpg",
      "/images/villa/location/beach-3.jpg"
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
    image: "/images/villa/gallery/Esterni_Spiaggia_Estiva_01.jpg",
    images: [
      "/images/villa/gallery/Esterni_Spiaggia_Estiva_01.jpg",
      "/images/villa/gallery/Esterni_Spiaggia_Tramonto_01.jpg"
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
    image: "/images/villa/gallery/Esterni_LeCastella_01.jpg",
    images: [
      "/images/villa/gallery/Esterni_LeCastella_01.jpg",
      "/images/villa/gallery/Esterni_Spiaggia_01.jpg",
      "/images/villa/gallery/Esterni_Spiaggia_Tramonto_01.jpg"
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
    image: "/images/villa/location/beach-2.jpg",
    images: [
      "/images/villa/location/beach-2.jpg",
      "/images/villa/location/beach-3.jpg",
      "/images/villa/location/beach-4.jpg"
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
    image: "/images/villa/location/beach-3.jpg",
    images: [
      "/images/villa/location/beach-3.jpg",
      "/images/villa/location/beach-4.jpg",
      "/images/villa/location/beach-5.jpg"
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
    image: "/images/villa/location/beach-5.jpg",
    images: [
      "/images/villa/location/beach-5.jpg",
      "/images/villa/location/beach-2.jpg"
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
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden bg-[#061829]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/villa/gallery/Esterni_Spiaggia_Estiva_01.jpg"
            alt="Vista panoramica Calabria - Territorio Villa Olimpia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_55%)]" />
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
      <section className="py-16 bg-gradient-to-b from-white via-sky-50/60 to-amber-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/70">
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
      <section className="py-16 bg-gradient-to-b from-white via-sky-50/50 to-amber-50/40">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">
            Destinazioni Imperdibili
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {destinations.map((destination, index) => {
              const Icon = destination.icon
              return (
                <Card key={destination.id} className="group relative overflow-hidden border border-white/60 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all">
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-amber-100/40 via-transparent to-sky-100/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} - ${destination.category}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        {destination.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                        <Icon className="h-6 w-6 text-sky-600" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">{destination.name}</CardTitle>
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
                    <p className="text-muted-foreground mb-4">
                      {destination.description}
                    </p>
                    
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
                      <span className="text-sm font-semibold text-sky-700">
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

      {/* Valli Cupe UNESCO - SEZIONE PREMIUM */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-4">
                🏆 Patrimonio UNESCO
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Valli Cupe - Canyon Spettacolare
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A soli 25 km da Villa Olimpia, uno dei canyon più affascinanti d'Italia, 
                Patrimonio dell'Umanità UNESCO
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/villa/gallery/Esterni_Giardino_Overview_01.jpg"
                  fill
                  className="object-cover"
                  alt="Valli Cupe Canyon Patrimonio UNESCO"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Un Canyon nella Sila Piccola</h3>
                  <p className="text-lg leading-relaxed">
                    <strong>Le Valli Cupe</strong> sono un'area naturale di straordinaria bellezza 
                    situata nel cuore della Sila Piccola, tra i comuni di Sersale e Zagarise. 
                    Questo canyon profondo fino a 200 metri, scavato nei millenni dal torrente Uria, 
                    è stato riconosciuto <strong>Patrimonio dell'Umanità UNESCO</strong> per la sua 
                    eccezionale biodiversità e valore geologico.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/70">
                  <h4 className="font-bold mb-3 text-lg">🌿 Biodiversità Unica</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>148 specie botaniche</strong> rare, alcune endemiche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Felci preistoriche</strong> risalenti a 65 milioni di anni fa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Microclima unico</strong> con temperature costanti 12-15°C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Cascate spettacolari</strong> alte fino a 80 metri</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Percorsi Trekking */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/70">
                <div className="text-3xl mb-3">🥾</div>
                <h4 className="font-bold text-lg mb-2">Sentiero Facile</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  3 km • 1h 30min • Adatto a tutti
                </p>
                <p className="text-sm">
                  Passeggiata panoramica sul bordo del canyon con 3 punti di osservazione. 
                  Ideale per famiglie con bambini.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-sky-400/70">
                <div className="text-3xl mb-3">⛰️</div>
                <h4 className="font-bold text-lg mb-2">Sentiero Medio</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  8 km • 4h • Discreto allenamento
                </p>
                <p className="text-sm">
                  Discesa nel canyon, attraversamento ponti tibetani, risalita cascate. 
                  Guida obbligatoria, caschetto fornito.
                </p>
                <div className="mt-3 bg-primary/10 text-primary text-xs px-2 py-1 rounded inline-block">
                  PIÙ POPOLARE
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/70">
                <div className="text-3xl mb-3">🧗</div>
                <h4 className="font-bold text-lg mb-2">Sentiero Avanzato</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  15 km • 7h • Esperti
                </p>
                <p className="text-sm">
                  Percorso completo del canyon con torrentismo, calate su corda, 
                  grotte nascoste. Attrezzatura tecnica necessaria.
                </p>
              </div>
            </div>

            {/* Info Pratiche */}
            <div className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-bold mb-1">Distanza</div>
                  <div>25 km da Villa Olimpia</div>
                  <div className="text-sm opacity-90">30 minuti in auto</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-bold mb-1">Periodo Migliore</div>
                  <div>Aprile - Ottobre</div>
                  <div className="text-sm opacity-90">Clima ideale 15-22°C</div>
                </div>
                <div>
                  <Info className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-bold mb-1">Prenotazione</div>
                  <div>Obbligatoria</div>
                  <div className="text-sm opacity-90">Guide autorizzate</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contatti">
                    Organizziamo l'Escursione per Te
                  </Link>
                </Button>
              </div>
            </div>

            {/* Curiosità */}
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">
                💎 Curiosità sulle Valli Cupe
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="text-4xl">🎬</div>
                  <div>
                    <h4 className="font-semibold mb-2">Location Cinematografica</h4>
                    <p className="text-sm text-muted-foreground">
                      Le Valli Cupe sono state set di numerosi film e documentari naturalistici, 
                      tra cui produzioni BBC e National Geographic.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🦎</div>
                  <div>
                    <h4 className="font-semibold mb-2">Fauna Protetta</h4>
                    <p className="text-sm text-muted-foreground">
                      Habitat del tritone crestato, salamandre rare, e oltre 40 specie di uccelli 
                      protetti tra cui il falco pellegrino.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🌊</div>
                  <div>
                    <h4 className="font-semibold mb-2">Cascate Tutto l'Anno</h4>
                    <p className="text-sm text-muted-foreground">
                      A differenza di altri canyon mediterranei, le cascate delle Valli Cupe 
                      sono attive 365 giorni l'anno grazie alle sorgenti perenni.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🏛️</div>
                  <div>
                    <h4 className="font-semibold mb-2">Storia Millenaria</h4>
                    <p className="text-sm text-muted-foreground">
                      Resti di insediamenti rupestri bizantini (IX-X sec.) nelle grotte naturali 
                      del canyon, visitabili con guide specializzate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
