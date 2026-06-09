import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Users, BedDouble, Bath, Waves } from "lucide-react"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { BASE_URL, generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Case Vacanze Isola di Capo Rizzuto con Piscina | Villa Olimpia",
  description:
    "Case vacanze a Isola di Capo Rizzuto: 9 lodge Villa Olimpia a Capopiccolo con piscina, a meno di 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta. Prenotazione diretta senza commissioni.",
  path: "/case-vacanze-isola-di-capo-rizzuto",
  keywords: [
    "casa vacanze isola di capo rizzuto",
    "case vacanze capo rizzuto",
    "appartamenti vacanze capo rizzuto",
    "residence capo rizzuto sul mare",
    "appartamenti con piscina capo rizzuto",
    "case vacanze le castella",
  ],
})

const activeLodges = apartments.filter((apartment) => apartment.active !== false)

const faqs = [
  {
    question: "Dove si trovano le case vacanze di Villa Olimpia?",
    answer:
      "Villa Olimpia si trova a Capopiccolo, frazione di Isola di Capo Rizzuto (Crotone), a meno di 100 metri dalla Spiaggia dei Gigli e all'interno dell'Area Marina Protetta di Capo Rizzuto. Le Castella, con la sua fortezza aragonese, è a pochi minuti di auto.",
  },
  {
    question: "Quante persone possono ospitare i lodge?",
    answer:
      "I 9 lodge ospitano da 4 a 6 persone: soluzioni con una camera matrimoniale e divano letto per coppie e famiglie 2+2, e soluzioni con due camere fino a 6 ospiti, come Frangipane, Giglio e l'attico Geranio.",
  },
  {
    question: "C'è la piscina?",
    answer:
      "Sì, tutti gli ospiti hanno accesso alla piscina condivisa immersa nel giardino della struttura.",
  },
  {
    question: "Le case vacanze sono vicine al mare?",
    answer:
      "Sì: la Spiaggia dei Gigli è a meno di 100 metri, raggiungibile a piedi. La zona fa parte dell'Area Marina Protetta di Capo Rizzuto, ideale per snorkeling e mare pulito (Bandiera Blu).",
  },
  {
    question: "Come si prenota?",
    answer:
      "Puoi prenotare direttamente dal sito senza commissioni: invia una richiesta dalla pagina contatti indicando date e numero di ospiti, e ricevi un preventivo personalizzato. In alternativa trovi i lodge anche su Airbnb e Booking.com.",
  },
  {
    question: "I lodge hanno cucina e aria condizionata?",
    answer:
      "Sì, ogni lodge dispone di cucina completa, aria condizionata, WiFi e TV. La dotazione completa è indicata nella pagina di ciascun appartamento.",
  },
]

export default function CaseVacanzeCapoRizzutoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Case Vacanze Villa Olimpia - Isola di Capo Rizzuto",
    url: `${BASE_URL}/case-vacanze-isola-di-capo-rizzuto`,
    numberOfItems: activeLodges.length,
    itemListElement: activeLodges.map((apartment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}/appartamenti/${getApartmentSlug(apartment)}`,
      name: `Appartamento ${apartment.name}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Vacanze Isola di Capo Rizzuto",
        item: `${BASE_URL}/case-vacanze-isola-di-capo-rizzuto`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="case-vacanze-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="case-vacanze-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="case-vacanze-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Case Vacanze a Isola di Capo Rizzuto
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              9 lodge con piscina a Capopiccolo, a meno di 100 metri dalla Spiaggia dei Gigli,
              nel cuore dell&apos;Area Marina Protetta di Capo Rizzuto.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full border border-white/20">
                <MapPin className="w-4 h-4" /> Capopiccolo, Isola di Capo Rizzuto
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full border border-white/20">
                <Waves className="w-4 h-4" /> Spiaggia dei Gigli a meno di 100 m
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4" /> Da 4 a 6 ospiti per lodge
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="luxury" size="lg" asChild>
                <Link href="/contatti">Richiedi disponibilità</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white/40 hover:bg-white/10" asChild>
                <Link href="/appartamenti">Vedi tutti gli appartamenti</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            Cerchi una <strong>casa vacanze a Isola di Capo Rizzuto</strong>? Villa Olimpia è una
            struttura a Capopiccolo con <strong>9 lodge indipendenti</strong>, piscina condivisa e
            giardino, pensata per coppie, famiglie e piccoli gruppi che vogliono vivere il mare
            della Calabria ionica senza rinunciare a comfort e privacy.
          </p>
          <p>
            Ogni lodge dispone di cucina completa, aria condizionata, WiFi e TV. La{" "}
            <Link href="/spiagge-capo-rizzuto" className="text-amber-700 underline underline-offset-2">
              Spiaggia dei Gigli
            </Link>{" "}
            è raggiungibile a piedi in pochi minuti, e la posizione dentro l&apos;
            <Link href="/area-marina-protetta" className="text-amber-700 underline underline-offset-2">
              Area Marina Protetta di Capo Rizzuto
            </Link>{" "}
            la rende una base perfetta per snorkeling, escursioni a{" "}
            <Link href="/le-castella" className="text-amber-700 underline underline-offset-2">
              Le Castella
            </Link>{" "}
            e itinerari nel territorio.
          </p>
          <p>
            Prenotando direttamente dal sito non paghi commissioni di intermediazione e ricevi un
            preventivo personalizzato in giornata.
          </p>
        </div>
      </section>

      {/* Lodge grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
            I 9 lodge di Villa Olimpia
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Tutte le soluzioni sono a Capopiccolo, con accesso a piscina e giardino condivisi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeLodges.map((apartment) => {
              const slug = getApartmentSlug(apartment)
              return (
                <Link
                  key={apartment.id}
                  href={`/appartamenti/${slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={apartment.image}
                      alt={`Appartamento ${apartment.name} - casa vacanze a Isola di Capo Rizzuto`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-playfair font-semibold mb-1 group-hover:text-amber-700 transition-colors">
                      {apartment.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">
                      {apartment.floor} · {apartment.size}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-4 h-4" /> {apartment.guests}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <BedDouble className="w-4 h-4" /> {apartment.bedrooms}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Bath className="w-4 h-4" /> {apartment.bathrooms}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Domande frequenti
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/contatti">Richiedi un preventivo senza impegno</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
