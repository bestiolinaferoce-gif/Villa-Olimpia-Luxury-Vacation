import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import {
  Wine,
  MapPin,
  Clock,
  ExternalLink,
  Phone,
  Grape,
  Star,
  ChevronRight,
  Mountain,
} from "lucide-react"

export const metadata: Metadata = generateMetadata({
  title: "Tour Enogastronomici Cirò DOC | Vini Calabria | Villa Olimpia",
  description:
    "Scopri il Cirò DOC — vino della Magna Grecia — con tour guidati in cantina, degustazioni e pranzi tra i vigneti. A 30 minuti da Villa Olimpia, Capo Rizzuto.",
  path: "/ciro-wine-tour",
})

const cantine = [
  {
    id: "librandi",
    name: "Cantine Librandi",
    location: "SS 106, Cirò Marina (KR)",
    phone: "+39 0962 31518",
    website: "https://www.librandi.it",
    googleMaps: "https://maps.google.com/?q=Cantine+Librandi+Ciro+Marina",
    description:
      "La più celebre cantina calabrese, 232 ettari di vigneto su 6 tenute. Pionieri della valorizzazione dei vitigni autoctoni. Degustazioni, shop e agriturismo.",
    highlights: [
      "Gravello IGT — premio internazionale",
      "Magno Megonio da Magliocco",
      "Enoteca con 50+ referenze",
      "Tour vigneto a Tenuta Rosaneti",
    ],
    type: "Grande Cantina",
    color: "from-amber-900 to-red-900",
  },
  {
    id: "ippolito",
    name: "Ippolito 1845",
    location: "Via Tirone 118, Cirò Marina (KR)",
    phone: "+39 0962 31106",
    website: "https://www.ippolito1845.it",
    googleMaps: "https://maps.google.com/?q=Ippolito+1845+Ciro+Marina",
    description:
      "Quinta generazione della stessa famiglia dal 1845. Una delle più antiche cantine d'Italia, emblema del Cirò DOC Classico. Cantine storiche suggestive.",
    highlights: [
      "Cirò Rosso Classico Superiore Riserva",
      "175+ anni di storia",
      "Cantina storica scavata nella roccia",
      "Visita con sommelier dedicato",
    ],
    type: "Cantina Storica",
    color: "from-stone-800 to-amber-900",
  },
  {
    id: "caparra",
    name: "Caparra & Siciliani",
    location: "Contrada Quattromani, Cirò Marina (KR)",
    phone: "+39 0962 31435",
    website: "https://www.caparraesiciliani.it",
    googleMaps: "https://maps.google.com/?q=Caparra+Siciliani+Ciro+Marina",
    description:
      "Cooperativa di eccellenza con 130 ettari di Cirò DOC Classico. Produzione artigianale, prezzi accessibili, qualità costante. Ideale per acquisti e degustazioni.",
    highlights: [
      "Cirò DOC Classico di riferimento",
      "130 ha di Cirò Classico",
      "Visita gruppi benvenuta",
      "Shop con prezzi cantina",
    ],
    type: "Cooperativa d'Eccellenza",
    color: "from-green-900 to-stone-800",
  },
  {
    id: "enotria",
    name: "Cantine Enotria",
    location: "Via Nazionale 162, Cirò Marina (KR)",
    phone: "+39 0962 31226",
    website: "https://www.cantineenotria.it",
    googleMaps: "https://maps.google.com/?q=Cantine+Enotria+Ciro+Marina",
    description:
      "Fondata da produttori locali appassionati, con oltre 130 ha di vigneto. Il nome 'Enotria' richiama l'antico nome greco della Calabria — terra del vino.",
    highlights: [
      "Enotria — terra del vino greco",
      "Gaglioppo 100% purezza",
      "Degustazioni guidate su prenotazione",
      "Terrazze panoramiche sui vigneti",
    ],
    type: "Cantina Artigianale",
    color: "from-purple-900 to-red-900",
  },
] as const

const stats = [
  { value: "2.700", label: "anni di storia", sublabel: "dalla Magna Grecia" },
  { value: "DOC", label: "dal 1969", sublabel: "tra le prime DOC d'Italia" },
  { value: "3", label: "vitigni autoctoni", sublabel: "Gaglioppo, Greco, Trebbiano" },
  { value: "30km", label: "da Villa Olimpia", sublabel: "35 minuti in auto" },
]

const timelineEvents = [
  {
    year: "700 a.C.",
    title: "La Magna Grecia",
    desc: "I coloni greci portano la viticoltura in Calabria. La regione diventa 'Enotria' — terra del vino.",
  },
  {
    year: "1400",
    title: "Le Cantine Storiche",
    desc: "Le prime cantine di Cirò vengono fondate. Il vino diventa moneta di scambio nel Mediterraneo.",
  },
  {
    year: "1845",
    title: "Ippolito — 5 Generazioni",
    desc: "Nasce la più antica cantina ancora attiva, simbolo della tradizione familiare calabrese.",
  },
  {
    year: "1969",
    title: "Riconoscimento DOC",
    desc: "Il Cirò ottiene la Denominazione di Origine Controllata, tra le prime in Italia.",
  },
  {
    year: "Oggi",
    title: "Eccellenza Internazionale",
    desc: "I vini Cirò DOC vincono premi internazionali e vengono esportati in 40+ Paesi.",
  },
]

const abbinamenti = [
  {
    vino: "Cirò Rosso",
    vitigno: "Gaglioppo 100%",
    colore: "bg-red-900",
    piatti: [
      "Carne alla brace calabrese",
      "'Nduja e salumi artigianali",
      "Formaggi stagionati (Pecorino Crotonese)",
      "Pasta al ragù con maiale nero",
    ],
  },
  {
    vino: "Cirò Bianco",
    vitigno: "Greco Bianco",
    colore: "bg-amber-100",
    piatti: [
      "Pesce fresco dello Jonio",
      "Antipasti di mare",
      "Spaghetti alle vongole",
      "Formaggi freschi (Ricotta di bufala)",
    ],
  },
  {
    vino: "Cirò Rosato",
    vitigno: "Gaglioppo + Greco",
    colore: "bg-pink-200",
    piatti: [
      "Pesce spada alla ghiotta",
      "Melanzane alla parmigiana",
      "Grigliata mista (carne e pesce)",
      "Pizza calabrese",
    ],
  },
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516594915697-87a3d1c0164c?w=900&q=80",
    alt: "Bicchieri di vino rosso in degustazione",
  },
  {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=900&q=80",
    alt: "Filari di vite al tramonto",
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=80",
    alt: "Paesaggio collinare vitato in Calabria",
  },
  {
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&q=80",
    alt: "Dettaglio grappolo d'uva matura",
  },
]

export default function CiroWineTourPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative flex h-[90vh] min-h-[600px] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=85"
          alt="Vigneti Cirò DOC, Calabria"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Grape className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200">Cirò DOC — Vino della Magna Grecia</span>
          </div>
          <h1 className="mb-6 font-playfair text-5xl font-bold leading-tight md:text-7xl">
            Tour Enogastronomici
            <br />
            <span className="text-amber-300">Cirò</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
            2.700 anni di storia del vino tra colline che guardano il mare Ionio. A 30 minuti da Villa Olimpia.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#cantine"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30"
            >
              <Wine className="h-5 w-5" />
              Scopri le Cantine
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Prenota il Soggiorno
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
            <div className="h-3 w-1.5 animate-pulse rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`} className="text-center">
                <div className="mb-1 font-playfair text-4xl font-bold text-amber-400 md:text-5xl">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-white">{stat.label}</div>
                <div className="mt-0.5 text-xs text-white/50">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">2.700 anni di storia</span>
            <h2 className="mt-3 mb-4 font-playfair text-4xl font-bold md:text-5xl">Il Vino della Magna Grecia</h2>
            <p className="mx-auto max-w-2xl text-lg text-stone-500">
              Il Cirò DOC nasce sulle colline di quella che i Greci chiamavano <em>Enotria</em> — la Terra del Vino.
              Una storia che inizia 27 secoli fa e continua nei calici di oggi.
            </p>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-0.5 bg-amber-200 md:left-1/2" />
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <div
                  key={event.year}
                  className={`relative flex items-center gap-8 transition-shadow duration-300 hover:[&_.rounded-2xl]:shadow-md ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-amber-500 shadow-lg md:left-1/2">
                    <Wine className="h-5 w-5 text-white" />
                  </div>
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="mb-1 text-sm font-bold text-amber-600">{event.year}</div>
                      <h3 className="mb-2 font-playfair text-xl font-bold">{event.title}</h3>
                      <p className="text-sm leading-relaxed text-stone-500">{event.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1600&q=80"
          alt="Vigneto Calabria tramonto"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <blockquote className="max-w-2xl">
            <p className="mb-4 font-playfair text-2xl italic md:text-3xl">
              &ldquo;Il Cirò è l&apos;anima della Calabria in un calice. Nato dalla stessa terra che ospitava i Greci,
              custodito da famiglie per generazioni.&rdquo;
            </p>
            <cite className="text-sm text-amber-300">— Guida Michelin, Cirò DOC</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Paesaggi e degustazioni</span>
            <h2 className="mt-3 font-playfair text-3xl font-bold text-stone-900 md:text-4xl">Gallery vino e territorio</h2>
            <p className="mx-auto mt-3 max-w-2xl text-stone-500">
              Un assaggio visivo del Cirò DOC e delle colline che affacciano sullo Ionio.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-stone-200/80"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cantine" className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Esperienze autentiche</span>
            <h2 className="mt-3 mb-4 font-playfair text-4xl font-bold md:text-5xl">Le Cantine da Visitare</h2>
            <p className="mx-auto max-w-2xl text-lg text-stone-500">
              Quattro cantine selezionate, ognuna con una storia unica. Prenotazione consigliata, specialmente in estate.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {cantine.map((cantina) => (
              <div
                key={cantina.id}
                className="group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${cantina.color} p-8 text-white`}>
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider opacity-70">
                        {cantina.type}
                      </span>
                      <h3 className="mt-3 font-playfair text-2xl font-bold">{cantina.name}</h3>
                    </div>
                    <Wine className="h-8 w-8 opacity-50" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{cantina.location}</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="mb-6 leading-relaxed text-stone-600">{cantina.description}</p>
                  <ul className="mb-6 space-y-2">
                    {cantina.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-stone-700">
                        <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={`tel:${cantina.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-stone-50 px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                    >
                      <Phone className="h-4 w-4" />
                      {cantina.phone}
                    </a>
                    <a
                      href={cantina.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Sito ufficiale
                    </a>
                    <a
                      href={cantina.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-amber-300 hover:text-amber-700"
                    >
                      <MapPin className="h-4 w-4" />
                      Mappa
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
            <Clock className="mx-auto mb-2 h-6 w-6 text-amber-600" />
            <p className="font-medium text-amber-800">
              <strong>Consiglio pratico:</strong> Chiama sempre in anticipo per prenotare visite e degustazioni,
              soprattutto in estate (luglio-agosto). Molte cantine richiedono prenotazione minima 48h prima.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-24 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">Gusto e tradizione</span>
            <h2 className="mt-3 mb-4 font-playfair text-4xl font-bold text-white md:text-5xl">
              Abbinamenti con la Cucina Calabrese
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-stone-400">
              Il Cirò DOC nasce per accompagnare i sapori forti e autentici della tradizione calabrese. Ecco gli
              abbinamenti perfetti per ogni momento del pasto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {abbinamenti.map((item) => (
              <div key={item.vino} className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-900">
                <div className={`h-3 ${item.colore}`} />
                <div className="p-6">
                  <h3 className="mb-1 font-playfair text-2xl font-bold text-white">{item.vino}</h3>
                  <p className="mb-5 text-sm italic text-stone-400">{item.vitigno}</p>
                  <ul className="space-y-2">
                    {item.piatti.map((piatto) => (
                      <li key={piatto} className="flex items-center gap-2 text-sm text-stone-300">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                        {piatto}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1513836279014-a89f7d3549be?w=800&q=80"
                alt="Valli Cupe canyon Calabria"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                <Mountain className="mr-1 inline h-3 w-3" />
                Riserva Naturale Valli Cupe, Sersale (CZ)
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                Escursione consigliata
              </span>
              <h2 className="mt-3 mb-5 font-playfair text-4xl font-bold">Valli Cupe — Il Canyon Segreto della Calabria</h2>
              <p className="mb-4 leading-relaxed text-stone-600">
                A 45 minuti da Villa Olimpia, le <strong>Valli Cupe</strong> sono uno dei segreti naturali meglio
                custoditi d&apos;Europa: canyon profondi, cascate, felci rare e foreste primordiali. La Riserva Naturale
                Regionale è patrimonio della Sila Piccola.
              </p>
              <p className="mb-6 leading-relaxed text-stone-600">
                Il percorso ideale? Mattina: trekking tra le gole di Valli Cupe. Pomeriggio: visita a una cantina di
                Cirò. Sera: aperitivo con Cirò Rosato al tramonto. Un giorno perfetto in Calabria.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-stone-700">
                  <MapPin className="h-4 w-4 shrink-0 text-green-600" />
                  Sersale (CZ) — 45 min da Villa Olimpia
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-700">
                  <Clock className="h-4 w-4 shrink-0 text-green-600" />
                  Apertura: tutti i giorni | Ingresso libero con guida
                </div>
              </div>
              <a
                href="https://www.riservavallicupe.it"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-600"
              >
                <ExternalLink className="h-4 w-4" />
                Sito Riserva Naturale Valli Cupe
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Guida pratica</span>
            <h2 className="mt-3 mb-4 font-playfair text-4xl font-bold">Come Organizzare il Tuo Tour</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Prenota le cantine",
                desc: "Chiama 48h prima per prenotare degustazioni. Alcune cantine offrono anche tour guidati dei vigneti su prenotazione.",
              },
              {
                step: "2",
                title: "Parti da Villa Olimpia",
                desc: "Cirò è a 30km (35 min). Ideale partire al mattino. Disponibile parcheggio gratuito a Villa Olimpia.",
              },
              {
                step: "3",
                title: "Abbinaci Valli Cupe",
                desc: "Trekking mattutino a Valli Cupe (45 min) + cantine il pomeriggio = giornata perfetta in Calabria.",
              },
            ].map((item) => (
              <div key={item.step} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black">
                  {item.step}
                </div>
                <h3 className="mb-2 font-playfair text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-stone-950 via-amber-950 to-stone-950 py-24 text-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Wine className="mx-auto mb-6 h-12 w-12 text-amber-400 opacity-80" />
          <h2 className="mb-6 font-playfair text-4xl font-bold md:text-5xl">
            Prenota il Soggiorno
            <br />
            <span className="text-amber-400">Base per il Cirò Tour</span>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/70">
            Villa Olimpia è a 35 minuti dalle cantine di Cirò DOC e 45 minuti da Valli Cupe. Parcheggio privato
            gratuito, cucina attrezzata per conservare i vini acquistati. Prenotazione diretta = nessuna commissione.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contatti?source=wine_tour_cta#prenota"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-10 py-4 font-bold text-black transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Verifica Disponibilità
            </Link>
            <a
              href="https://wa.me/393335773390?text=Ciao!%20Sono%20interessato%20al%20tour%20enogastronomico%20di%20Cir%C3%B2%20da%20Villa%20Olimpia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              WhatsApp diretto
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
