import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, TrendingUp, Mountain, Waves, Castle, Map as MapIcon, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { generateMetadata as genMeta } from "@/lib/metadata"

export const metadata: Metadata = genMeta({
  title: "Territorio, spiagge e attrazioni vicino Villa Olimpia in Calabria",
  description: "Scopri cosa vedere vicino Villa Olimpia: Area Marina Protetta di Capo Rizzuto, Capopiccolo, Le Castella, Santa Severina e gite in giornata tra mare, borghi e natura.",
  path: "/territorio",
  keywords: [
    "valli cupe calabria",
    "castello santa severina",
    "santa severina cosa vedere",
    "area marina protetta capo rizzuto",
    "capo rizzuto attrazioni",
    "le castella calabria",
    "calabria turismo",
    "riserva marina capo rizzuto",
    "gite in giornata calabria ionica",
    "spiaggia dei gigli"
  ]
})

const destinations = [
  {
    id: "valli-cupe",
    name: "Valli Cupe",
    category: "Natura e Trekking",
    distance: "circa 1h 15 min",
    duration: "mezza giornata / giornata",
    difficulty: "Media",
    price: "accessi, guide e aperture da verificare",
    description: "La Riserva Naturale Regionale Valli Cupe, nell'area di Sersale, è una delle escursioni più interessanti dell'entroterra calabrese per chi cerca canyon, gole, sentieri freschi e scorci d'acqua lontani dalla costa.",
    fullDescription: "È una gita adatta a chi desidera alternare il mare della costa ionica a un'esperienza più verde e fresca. Le condizioni dei sentieri, gli accessi e l'eventuale supporto di guide locali vanno controllati prima della partenza sui canali ufficiali.",
    highlights: [
      "canyon e cascatelle",
      "sentieri naturalistici",
      "giornata fresca nell'entroterra",
      "guide locali in stagione",
      "ideale in primavera ed estate"
    ],
    image: "/images/territory/valli-cupe-canyon.jpg",
    images: [
      "/images/territory/valli-cupe-canyon.jpg",
      "/images/territory/valli-cupe-sentiero.jpg",
      "/images/territory/valli-cupe-cascata.jpg"
    ],
    icon: Mountain,
    href: "/cosa-fare-capo-rizzuto",
    coordinates: { lat: 39.0667, lng: 16.7833 },
    officialSite: "https://comune.sersale.cz.it/novita/riserva-regionale-valli-cupe/",
    officialLabel: "Info ufficiali sulla Riserva Valli Cupe",
    contactLine1: "Comune di Sersale · Centralino 0961 930911",
    contactLine2: "Ente gestore: Associazione dei Comuni della Riserva"
  },
  {
    id: "castello-santa-severina",
    name: "Santa Severina e Castello Normanno",
    category: "Cultura e Storia",
    distance: "circa 50 minuti",
    duration: "2-3 ore",
    difficulty: "Facile",
    price: "intero €5 · ridotto €3",
    description: "Santa Severina, tra i borghi più belli della Calabria, è una gita culturale molto solida per chi vuole affiancare al mare un castello normanno, il battistero bizantino e uno dei panorami più noti della valle del Neto.",
    fullDescription: "Il borgo ruota attorno a Piazza Campo, al castello e ai luoghi religiosi storici. È una visita adatta a coppie, famiglie e ospiti che vogliono inserire nel soggiorno una mezza giornata più culturale, con informazioni ufficiali facili da verificare online.",
    highlights: [
      "castello normanno",
      "borgo storico",
      "vista sulla valle",
      "itinerario culturale",
      "abbinabile a pranzo tipico"
    ],
    image: "/images/territory/santa-severina-panorama.jpg",
    images: [
      "/images/territory/santa-severina-panorama.jpg",
      "/images/territory/santa-severina-borgo.jpg",
      "/images/territory/santa-severina-castello.jpg"
    ],
    icon: Castle,
    href: "/cosa-fare-capo-rizzuto",
    coordinates: { lat: 39.1481, lng: 16.9133 },
    officialSite: "https://www.comune.santaseverina.kr.it/vivere_il_comune/luoghi/luogo_5.html",
    officialLabel: "Sito ufficiale Castello Normanno",
    contactLine1: "Comune di Santa Severina · 0962 51062",
    contactLine2: "protocollo@comune.santaseverina.kr.it"
  },
  {
    id: "sila-piccola",
    name: "Sila Piccola",
    category: "Montagna e Natura",
    distance: "40 minuti",
    duration: "Mezza giornata / Giornata intera",
    difficulty: "Varie",
    price: "Gratuito",
    description: "La Sila Piccola è una proposta sensata per chi desidera una giornata diversa dal mare: boschi, aria più fresca, sentieri e tavole tipiche dell'entroterra calabrese.",
    fullDescription: "Non è un'escursione da improvvisare all'ultimo in piena estate senza programma, ma una buona alternativa per chi ama paesaggi montani, prodotti locali e tappe naturalistiche lontane dalla costa.",
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
    href: "/cosa-fare-capo-rizzuto",
    coordinates: { lat: 39.2667, lng: 16.5833 }
  },
  {
    id: "capopiccolo",
    name: "Capopiccolo e Spiagge di Capo Rizzuto",
    category: "Mare e Spiaggia",
    distance: "5-10 minuti",
    duration: "Mezza giornata",
    difficulty: "Facile",
    price: "Gratuito",
    description: "Capopiccolo e le spiagge vicine a Villa Olimpia offrono calette luminose, mare trasparente e accessi comodi per chi cerca relax, snorkeling e scorci autentici della costa ionica.",
    fullDescription: "A pochi minuti da Villa Olimpia si aprono alcune delle spiagge piu belle della zona, tra Capopiccolo, la Spiaggia dei Gigli e le altre cale dell'Area Marina Protetta. Le acque limpide, i colori del fondale e la vicinanza alla struttura le rendono perfette per giornate di mare senza stress.",
    highlights: [
      "Capopiccolo",
      "Spiaggia dei Gigli",
      "Acque cristalline",
      "Snorkeling",
      "Cale panoramiche"
    ],
    image: "/images/territory/spiaggia-capopiccolo.jpg",
    images: [
      "/images/territory/spiaggia-capopiccolo.jpg",
      "/images/territory/spiaggia-capopiccolo-lato-interno.jpg",
      "/images/territory/spiaggia-capopiccolo-panorama.jpg"
    ],
    icon: Waves,
    href: "/spiagge-capo-rizzuto",
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
    image: "/images/territory/castello-aragonese-le-castella.jpg",
    images: [
      "/images/territory/castello-aragonese-le-castella.jpg",
      "/images/territory/castello-aragonese-le-castella-2.jpg",
      "/images/territory/tramonto-castello-aragonese-le-castella.jpg"
    ],
    icon: Castle,
    href: "/le-castella",
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
    href: "/location",
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
    image: "/images/territory/area-marina-protetta-capo-rizzuto.jpg",
    images: [
      "/images/territory/area-marina-protetta-capo-rizzuto.jpg",
      "/images/territory/tramonto-area-marina-protetta.jpg",
      "/images/territory/spiaggia-capopiccolo-lato-interno.jpg"
    ],
    icon: Waves,
    href: "/area-marina-protetta",
    coordinates: { lat: 38.95, lng: 17.0833 }
  },
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
            src="/images/territory/spiaggia-capopiccolo-panorama.jpg"
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
              Villa Olimpia si trova in una posizione strategica all&apos;interno dell&apos;Area Marina
              Protetta di Capo Rizzuto. Questo significa mare, calette e spiagge raggiungibili in
              pochi minuti, ma anche la possibilità di organizzare escursioni in giornata verso
              borghi storici, natura dell&apos;entroterra e mete adatte alle famiglie senza rinunciare
              alla comodità della costa ionica.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Soggiornare qui significa avere una base comoda per conoscere meglio il territorio di
              Isola di Capo Rizzuto e della Calabria ionica, senza rinunciare alla tranquillità della
              vacanza sul mare.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Il vero vantaggio di Villa Olimpia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Il principale punto di forza di Villa Olimpia non è soltanto la struttura, ma la sua
                collocazione. Essere a Capopiccolo, in prossimità dell&apos;Area Marina Protetta di Capo
                Rizzuto, permette di vivere il soggiorno in modo più semplice e più ricco. Il mare
                resta il centro dell&apos;esperienza, ma la posizione consente anche di ampliare facilmente
                la vacanza con escursioni culturali, naturalistiche e family-friendly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Per chi organizza un soggiorno in Calabria, questo è un vantaggio concreto: una sola
                base, più possibilità di scoperta, meno spostamenti inutili e maggiore libertà nel
                costruire giornate diverse tra spiaggia, relax e visite nei dintorni.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Mare, spiagge e gite in giornata
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Il primo livello di esplorazione riguarda ciò che si trova già a pochi minuti da Villa
                Olimpia: Capopiccolo, la Spiaggia dei Gigli, Le Castella e l&apos;intera Area Marina
                Protetta di Capo Rizzuto. Questa zona è ideale per chi cerca acque limpide, paesaggi
                costieri suggestivi, snorkeling, giornate al mare e tramonti sul litorale ionico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Accanto a questo, il territorio permette anche alcune escursioni in giornata molto
                interessanti. Valli Cupe rappresenta una proposta valida per chi ama la natura e i
                percorsi immersi nel verde. Santa Severina è perfetta per chi preferisce una gita
                culturale tra castello, borgo e panorama sull&apos;entroterra. In stagione, anche attività
                family-friendly come i parchi acquatici possono completare il soggiorno.
              </p>
            </div>
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
                <Card key={destination.id} className="group relative overflow-hidden border border-white/60 bg-white/85 backdrop-blur-sm shadow-[0_20px_60px_rgba(15,23,42,0.10)] hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] transition-all">
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-amber-100/40 via-transparent to-sky-100/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} - ${destination.category}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
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

                    {destination.images.length > 1 && (
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {destination.images.slice(0, 3).map((image, imageIndex) => (
                          <div key={`${destination.id}-thumb-${imageIndex}`} className="relative h-20 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                            <Image
                              src={image}
                              alt={`${destination.name} - anteprima ${imageIndex + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                              sizes="120px"
                            />
                          </div>
                        ))}
                      </div>
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

                    {(destination.officialSite || destination.contactLine1) && (
                      <div className="mb-4 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-4 text-sm shadow-sm">
                        <p className="font-semibold text-slate-900 mb-2">Informazioni utili verificate</p>
                        {destination.officialSite && destination.officialLabel && (
                          <p className="mb-1">
                            <a
                              href={destination.officialSite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-sky-700 underline underline-offset-4"
                            >
                              {destination.officialLabel}
                            </a>
                          </p>
                        )}
                        {destination.contactLine1 && <p className="text-muted-foreground">{destination.contactLine1}</p>}
                        {destination.contactLine2 && <p className="text-muted-foreground">{destination.contactLine2}</p>}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm font-semibold text-sky-700">
                        {destination.price}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={destination.href ?? "/location"}>
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

      {/* Day Trips */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-sky-100 text-sky-800 px-4 py-2 rounded-full font-semibold mb-4">
                Escursioni in giornata
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Dalla Costa all&apos;Entroterra, Senza Cambiare Base
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Il vero vantaggio di Villa Olimpia è poter vivere il mare dell&apos;Area Marina Protetta
                e, nello stesso soggiorno, organizzare gite sensate verso borghi, natura e attività
                per famiglie nel raggio di una giornata.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/territory/valli-cupe-crocchio.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  alt="Valli Cupe in Calabria, escursione naturalistica in giornata da Villa Olimpia"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Escursioni credibili, senza promesse forzate</h3>
                  <p className="text-lg leading-relaxed">
                    Da Villa Olimpia il cuore della vacanza resta il mare di Capopiccolo e
                    dell&apos;Area Marina Protetta di Capo Rizzuto. Proprio per questo conviene valorizzare
                    solo gite davvero sensate: <strong>Valli Cupe</strong> per la natura, <strong>Santa Severina</strong>
                    per il borgo e il castello, e alcune proposte family-friendly da valutare
                    in alta stagione.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/70">
                  <h4 className="font-bold mb-3 text-lg">Perché questa impostazione funziona meglio</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>rafforza il posizionamento di Villa Olimpia come base strategica sulla costa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>aiuta Google a capire il territorio reale, senza claim deboli o gonfiati</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>dà al visitatore idee concrete per allungare il soggiorno e chiedere consigli diretti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>mantiene pulito il sito, evitando informazioni non verificate o giuridicamente deboli</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/70">
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="font-bold text-lg mb-2">Valli Cupe</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  giornata natura • circa 1h 15 min
                </p>
                <p className="text-sm">
                  Ideale per chi vuole aggiungere al soggiorno una giornata più verde e fresca,
                  tra canyon, sentieri e paesaggi dell&apos;entroterra calabrese.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-sky-400/70">
                <div className="text-3xl mb-3">🏰</div>
                <h4 className="font-bold text-lg mb-2">Santa Severina</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  borgo storico • circa 50 min
                </p>
                <p className="text-sm">
                  Una gita culturale molto adatta a chi ama castelli, panorama, centro storico e
                  una Calabria diversa da quella solo balneare.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/70">
                <div className="text-3xl mb-3">🎢</div>
                <h4 className="font-bold text-lg mb-2">Odissea 2000</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  family day • circa 1h 45 min
                </p>
                <p className="text-sm">
                  Da considerare soprattutto per famiglie con bambini o ragazzi nelle giornate più
                  calde, come alternativa ludica al mare.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-bold mb-1">Punto di forza</div>
                  <div>Base sulla costa</div>
                  <div className="text-sm opacity-90">con mare e servizi vicini</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-bold mb-1">Escursioni utili</div>
                  <div>Mezza giornata o giornata</div>
                  <div className="text-sm opacity-90">senza cambiare struttura</div>
                </div>
                <div>
                  <Info className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-bold mb-1">Buona pratica</div>
                  <div>Verifica orari e aperture</div>
                  <div className="text-sm opacity-90">prima di partire</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contatti">
                    Verifica disponibilità per il tuo tour
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Come valorizzare davvero questa posizione
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="text-4xl">🌊</div>
                  <div>
                    <h4 className="font-semibold mb-2">Prima il mare dell&apos;Area Marina Protetta</h4>
                    <p className="text-sm text-muted-foreground">
                      La vacanza a Villa Olimpia parte dalla costa di Capopiccolo, dalla Spiaggia dei
                      Gigli e dalle cale dell&apos;Area Marina Protetta di Capo Rizzuto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🚗</div>
                  <div>
                    <h4 className="font-semibold mb-2">Poi gite sensate e credibili</h4>
                    <p className="text-sm text-muted-foreground">
                      Santa Severina, Valli Cupe o un parco acquatico hanno senso solo come
                      completamento del soggiorno, non come promessa principale.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h4 className="font-semibold mb-2">Base unica, più libertà</h4>
                    <p className="text-sm text-muted-foreground">
                      Questo approccio rafforza il messaggio più utile per l&apos;ospite: soggiornare sulla
                      costa e decidere giorno per giorno cosa aggiungere all&apos;itinerario.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">ℹ️</div>
                  <div>
                    <h4 className="font-semibold mb-2">Informazioni da verificare sempre</h4>
                    <p className="text-sm text-muted-foreground">
                      Tempi di percorrenza, aperture e condizioni di visita possono cambiare:
                      è bene considerarli come indicativi e aggiornabili.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Le immagini di Santa Severina e Valli Cupe presenti in questa pagina sono state selezionate e ottimizzate
                per il sito di Villa Olimpia. Orari, accessi e riferimenti utili vanno sempre verificati sui siti ufficiali
                indicati prima della visita.
              </p>
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
