import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Waves, MapPin, Star, Umbrella } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Migliori Spiagge di Capo Rizzuto e Capopiccolo | Villa Olimpia",
  description: "Scopri le migliori spiagge di Capo Rizzuto: Spiaggia dei Gigli, Capopiccolo, Le Castella e Area Marina Protetta. Villa Olimpia si trova a meno di 100 metri dal mare con accesso rapido alle spiagge migliori della costa ionica.",
  path: "/spiagge-capo-rizzuto",
})

const capopiccoloImages = [
  {
    src: "/images/territory/spiaggia-capopiccolo.jpg",
    alt: "Spiaggia di Capopiccolo nell'Area Marina Protetta di Capo Rizzuto",
  },
  {
    src: "/images/territory/spiaggia-capopiccolo-lato-interno.jpg",
    alt: "Cala di Capopiccolo con mare cristallino vicino Villa Olimpia",
  },
  {
    src: "/images/territory/spiaggia-capopiccolo-panorama.jpg",
    alt: "Panorama di Capopiccolo a Isola di Capo Rizzuto",
  },
]



const selectedBeachPhotoSet = [
  {
    src: "/images/territory/spiaggia-grande-capo-rizzuto-01.jpg",
    alt: "Spiaggia Grande Capo Rizzuto",
    label: "Spiaggia Grande",
  },
  {
    src: "/images/territory/spiaggia-grande-capo-rizzuto-02.jpg",
    alt: "Spiaggia Grande Capo Rizzuto panoramica",
    label: "Costa ionica",
  },
  {
    src: "/images/territory/spiaggia-grande-capo-rizzuto-lido-01.jpg",
    alt: "Lido a Spiaggia Grande Capo Rizzuto",
    label: "Lido e servizi",
  },
  {
    src: "/images/territory/lido-spiaggia-grande-capo-rizzuto-01.jpg",
    alt: "Lido Spiaggia Grande Capo Rizzuto",
    label: "Spiaggia attrezzata",
  },
  {
    src: "/images/territory/spiagge-rosse-01.jpg",
    alt: "Spiagge Rosse a Capo Rizzuto",
    label: "Spiagge Rosse",
  },
  {
    src: "/images/territory/spiagge-rosse-02.jpg",
    alt: "Spiagge Rosse dettaglio costa",
    label: "Colori naturali",
  },
  {
    src: "/images/territory/tramonto-le-castella-desktop-01.jpg",
    alt: "Tramonto su Le Castella",
    label: "Le Castella sunset",
  },
  {
    src: "/images/territory/tramonto-area-marina-protetta-desktop-01.jpg",
    alt: "Tramonto Area Marina Protetta",
    label: "Area Marina Protetta",
  },
]
export default function SpiaggeCapoRizzutoPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Le Migliori Spiagge di Capo Rizzuto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scopri le spiagge più belle della costa ionica calabrese, dalla Spiaggia dei Gigli 
              alle calette incontaminate di Capopiccolo.{" "}
              <Link href="/appartamenti" className="underline underline-offset-4 decoration-primary/60 hover:text-primary">
                Villa Olimpia
              </Link>{" "}
              è la base perfetta per la tua vacanza al mare, a meno di 100 metri dalla spiaggia Bandiera Blu.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Questa guida ti aiuta a scegliere tra le spiagge di Capopiccolo, Le Castella e l&apos;Area Marina Protetta di Capo Rizzuto,
              con consigli pratici per famiglie, snorkeling e giornate di relax vicino a Villa Olimpia.
            </p>
            <div className="relative w-full max-w-5xl mx-auto mt-6 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/territory/spiaggia-capopiccolo.jpg"
                alt="Spiaggia di Capopiccolo Capo Rizzuto"
                width={1200}
                height={630}
                priority
                className="h-auto w-full object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
            Le spiagge più belle della costa ionica in foto
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            Selezione reale dal territorio di Capo Rizzuto: Spiaggia Grande, Spiagge Rosse, Le Castella e Area Marina Protetta.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedBeachPhotoSet.map((photo) => (
              <div key={photo.src} className="rounded-xl overflow-hidden border border-primary/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="px-3 py-2 text-xs sm:text-sm font-medium text-slate-700">{photo.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50/60 border-y border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">Guida pratica alle spiagge</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Per famiglie</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p><strong>Consigliate:</strong> Spiaggia dei Gigli, Spiaggia Grande.</p>
                <p><strong>Punti forti:</strong> accesso semplice, fondali graduali, stabilimenti vicini.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Per snorkeling</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p><strong>Consigliate:</strong> calette di Capopiccolo e Area Marina Protetta.</p>
                <p><strong>Punti forti:</strong> acqua limpida e fondali interessanti vicino costa.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Per tramonto e foto</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p><strong>Consigliate:</strong> Le Castella e affacci della riserva marina.</p>
                <p><strong>Punti forti:</strong> luce serale, skyline del castello, costa panoramica.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Perché il mare di Capo Rizzuto è così apprezzato
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le spiagge di Capo Rizzuto sono apprezzate per la varietà del paesaggio e per la qualità
                  dell&apos;esperienza che offrono. In pochi chilometri si passa da zone più ampie e semplici da
                  raggiungere a calette più raccolte, punti panoramici e tratti di costa che mantengono un forte
                  legame con l&apos;ambiente naturale circostante.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Questa varietà rende Capo Rizzuto una meta molto ricercata da chi organizza una vacanza in
                  Calabria vicino al mare. Famiglie, coppie e piccoli gruppi trovano qui la possibilità di vivere
                  giornate diverse, alternando spiagge più comode a luoghi più suggestivi e tranquilli.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Capopiccolo e la Spiaggia dei Gigli
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Capopiccolo è uno dei riferimenti più importanti per chi sceglie di soggiornare in questa zona
                  della costa. La Spiaggia dei Gigli è uno dei punti più interessanti per vicinanza, bellezza del
                  mare e comodità di accesso. Per molti viaggiatori rappresenta uno dei motivi principali per
                  scegliere un soggiorno in questa parte di Isola di Capo Rizzuto.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Chi cerca una casa vacanza o appartamenti vicino alla Spiaggia dei Gigli trova in questa zona un
                  equilibrio molto forte tra paesaggio, tranquillità e praticità. Soggiornare vicino al mare
                  permette di vivere meglio la giornata e di ridurre gli spostamenti, soprattutto durante i mesi più
                  intensi dell&apos;estate.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Spiagge da Non Perdere
            </h2>

            <div className="grid gap-4 md:grid-cols-3 mb-10">
              {capopiccoloImages.map((image) => (
                <div key={image.src} className="relative overflow-hidden rounded-2xl border border-primary/10 shadow-sm bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="px-4 py-3 text-sm text-muted-foreground">{image.alt}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    <CardTitle className="text-2xl">Spiaggia dei Gigli</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    A meno di 100 m da Villa Olimpia - Bandiera Blu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    La <strong>Spiaggia dei Gigli</strong> è una delle spiagge più famose della Calabria, 
                    caratterizzata da sabbia fine e acque cristalline. Raggiungibile a piedi da Villa Olimpia 
                    in circa 1 minuto, è perfetta per famiglie grazie alla sua gradualità e alla presenza 
                    di servizi e stabilimenti balneari.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Caratteristiche</p>
                      <p className="text-sm text-muted-foreground">Sabbia fine, acque basse, Bandiera Blu</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Servizi</p>
                      <p className="text-sm text-muted-foreground">Stabilimenti balneari, ristoranti, parcheggio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Spiagge di Capopiccolo</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Area Marina Protetta Capo Rizzuto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Le spiagge di <strong>Capopiccolo</strong> si trovano nell&apos;Area Marina Protetta Capo Rizzuto, 
                    una delle riserve marine più importanti d&apos;Italia. Le acque sono cristalline e i fondali ricchi 
                    di vita marina, perfetti per snorkeling e immersioni.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3 mb-4">
                    {capopiccoloImages.map((image) => (
                      <div key={`card-${image.src}`} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Attività</p>
                      <p className="text-sm text-muted-foreground">Snorkeling, immersioni, kayak</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Ambiente</p>
                      <p className="text-sm text-muted-foreground">Area protetta, natura incontaminata</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Spiaggia di Le Castella</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    8 minuti da Villa Olimpia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    La spiaggia di <strong>Le Castella</strong> offre una vista spettacolare sul Castello Aragonese. 
                    Sabbia dorata e acque turchesi la rendono una delle spiagge più fotografate della Calabria.
                  </p>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-4">
                    <Image
                      src="/images/territory/tramonto-castello-aragonese-le-castella.jpg"
                      alt="Castello Aragonese di Le Castella al tramonto visto dalla costa"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Vista</p>
                      <p className="text-sm text-muted-foreground">Panorama sul Castello Aragonese</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Atmosfera</p>
                      <p className="text-sm text-muted-foreground">Romantica e suggestiva</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Spiagge Rosse</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    12 km da Villa Olimpia - Bandiera Blu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Le <strong>Spiagge Rosse</strong> devono il loro nome alla particolare colorazione della sabbia, 
                    che assume tonalità rossastre. Questa caratteristica unica, unita alle acque cristalline, 
                    le rende una meta imperdibile per gli amanti della fotografia e della natura.
                  </p>
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
              Attività da Fare sulle Spiagge
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La scelta della spiaggia dipende dal tipo di vacanza che si desidera vivere. Chi viaggia con
                bambini tende a preferire zone più comode e facilmente raggiungibili, mentre chi cerca angoli più
                suggestivi può orientarsi verso punti meno centrali o più panoramici. Capo Rizzuto consente di
                combinare entrambe le cose, offrendo più possibilità all&apos;interno dello stesso territorio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Questo è uno dei motivi per cui la zona funziona così bene anche come base di soggiorno. Non si
                tratta di una sola spiaggia, ma di un insieme di luoghi che permettono di costruire una vacanza più
                varia, alternando mare, relax, passeggiate, escursioni e visite nei dintorni.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Snorkeling",
                  description: "Esplora i fondali dell'Area Marina Protetta, ricchi di pesci colorati e vita marina."
                },
                {
                  title: "Immersioni Subacquee",
                  description: "Centri diving organizzano immersioni per tutti i livelli, dai principianti agli esperti."
                },
                {
                  title: "Kayak e Paddle",
                  description: "Noleggia kayak o paddle board per esplorare le calette nascoste lungo la costa."
                },
                {
                  title: "Pesca Sportiva",
                  description: "Le acque ricche di pesce offrono ottime opportunità per la pesca sportiva."
                },
              ].map((activity, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Villa Olimpia */}
      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
              Perché Scegliere Villa Olimpia per le Spiagge di Capo Rizzuto
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Villa Olimpia è la base perfetta per esplorare tutte le spiagge della zona, con appartamenti indipendenti e piscina condivisa:
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
              Per vivere davvero bene questa zona, è utile scegliere un alloggio in una posizione strategica,
              vicino al mare e ben collegato alle principali spiagge e attrazioni. Soggiornare a Capopiccolo,
              vicino alla Spiaggia dei Gigli, consente di avere un accesso più immediato alla costa e allo stesso
              tempo di muoversi facilmente verso Le Castella, l&apos;Area Marina Protetta e gli altri luoghi di
              interesse del territorio.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A meno di 100 m dalla Spiaggia dei Gigli (1 minuto a piedi)",
                "Parcheggio gratuito per raggiungere le altre spiagge",
                "Piscina privata per relax dopo la spiaggia",
                "WiFi gratuito per condividere le tue foto",
                "Cucina completa per pranzi al sacco",
                "Posizione centrale per esplorare tutta la costa",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/90 rounded-lg shadow-sm border border-primary/10">
                  <Umbrella className="h-5 w-5 text-primary flex-shrink-0" />
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
                <Link href="/capo-rizzuto">
                  <div className="text-center">
                    <p className="font-semibold">Appartamenti</p>
                    <p className="text-sm text-muted-foreground">Capo Rizzuto</p>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/le-castella">
                  <div className="text-center">
                    <p className="font-semibold">Le Castella</p>
                    <p className="text-sm text-muted-foreground">Castello Aragonese</p>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/area-marina-protetta">
                  <div className="text-center">
                    <p className="font-semibold">Area Marina</p>
                    <p className="text-sm text-muted-foreground">Protetta</p>
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
            Prenota la Tua Vacanza al Mare
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per scoprire le spiagge più belle della Calabria e prenota in modo diretto, senza commissioni di portali.
          </p>
          <Button variant="luxury" size="lg" asChild className="group">
            <Link href="/contatti?source=spiagge-page#prenota">
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
