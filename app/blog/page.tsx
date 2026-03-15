import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, MapPin, Utensils, Users, CreditCard } from "lucide-react"

export const metadata = generateMetadata({
  title: "Blog Villa Olimpia - Consigli e guide per le tue vacanze a Capo Rizzuto",
  description:
    "Scopri consigli, guide e articoli su spiagge, famiglie, gastronomia e prenotazione diretta a Capo Rizzuto. Villa Olimpia ti accompagna nella pianificazione della vacanza perfetta.",
  path: "/blog",
  keywords: [
    "blog Villa Olimpia",
    "guide capo rizzuto",
    "spiagge calabria",
    "vacanze famiglia capo rizzuto",
    "ristoranti capo rizzuto",
  ],
})

const ARTICLES = [
  {
    slug: "spiagge-piu-belle-capo-rizzuto",
    title: "Le 10 spiagge più belle vicino a Isola di Capo Rizzuto",
    description: "Scopri le 10 spiagge più belle dell'Isola di Capo Rizzuto e della Costa Ionica calabrese: sabbia dorata, acque cristalline e natura incontaminata nell'Area Marina Protetta.",
    category: "Territorio",
    icon: MapPin,
  },
  {
    slug: "vacanze-famiglia-capo-rizzuto-bambini",
    title: "Vacanze in famiglia a Capo Rizzuto: perché è il posto perfetto con i bambini",
    description: "Stai pianificando una vacanza in famiglia in Calabria? Scopri perché Capo Rizzuto è la destinazione ideale per famiglie con bambini: mare sicuro, natura protetta e tutto a portata di mano.",
    category: "Famiglie",
    icon: Users,
  },
  {
    slug: "castello-aragonese-le-castella-guida",
    title: "Castello Aragonese di Le Castella: guida completa per la visita",
    description: "Tutto quello che devi sapere per visitare il Castello Aragonese di Le Castella: storia, orari, prezzi e consigli pratici. A 5 minuti da Villa Olimpia.",
    category: "Territorio",
    icon: MapPin,
  },
  {
    slug: "prenotazione-diretta-villa-olimpia-vantaggi",
    title: "Prenotazione diretta vs Airbnb e Booking: perché conviene prenotare direttamente a Villa Olimpia",
    description: "Scopri tutti i vantaggi di prenotare direttamente invece di usare Airbnb o Booking.com. Prezzo migliore garantito e servizio personalizzato.",
    category: "Info & Consigli",
    icon: CreditCard,
  },
  {
    slug: "cucina-calabrese-capo-rizzuto-ristoranti",
    title: "Cucina calabrese a Capo Rizzuto: ristoranti, piatti tipici e i nostri posti del cuore",
    description: "Guida alla gastronomia calabrese di Capo Rizzuto: i migliori ristoranti di pesce, i piatti tipici da assaggiare e i consigli dello staff di Villa Olimpia.",
    category: "Gastronomia",
    icon: Utensils,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Blog Villa Olimpia
            </h1>
            <p className="text-xl text-muted-foreground">
              Consigli, guide e articoli per pianificare la tua vacanza a Capo Rizzuto.
              Spiagge, famiglie, gastronomia e tutto ciò che serve per un soggiorno indimenticabile.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
              Articoli in evidenza
            </h2>
            <div className="space-y-6">
              {ARTICLES.map((article) => {
                const IconComponent = article.icon
                return (
                  <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                            {article.category}
                          </span>
                          <CardTitle className="text-xl mt-1 mb-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {article.description}
                          </CardDescription>
                          <Button asChild variant="outline" size="sm" className="mt-4">
                            <Link href={`/blog/${article.slug}`}>
                              <BookOpen className="h-4 w-4 mr-2" />
                              Leggi l'articolo
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Pronto a prenotare la tua vacanza?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per scoprire Capo Rizzuto. Prenota in modo diretto, senza commissioni.
          </p>
          <Button variant="luxury" size="lg" asChild className="group">
            <Link href="/contatti?source=blog#prenota">
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
