import { HeroSection } from "@/components/hero-section"
import { ApartmentCard } from "@/components/apartment-card"
import { Testimonials } from "@/components/testimonials"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, Wifi, Car, Waves, Utensils, Shield } from "lucide-react"

export const metadata = {
  title: "Villa Olimpia - Luxury Vacation Rentals in Calabria, Italy",
  description: "Experience luxury vacation rentals in Calabria, Italy. Stunning apartments with sea views in Tropea. Book your perfect Mediterranean getaway.",
  openGraph: {
    title: "Villa Olimpia - Luxury Vacation Rentals in Calabria",
    description: "Experience luxury vacation rentals in Calabria, Italy. Stunning apartments with sea views in Tropea.",
    type: "website",
  },
}

// Sample apartments data
const featuredApartments = [
  {
    id: "olimpia-1",
    name: "Appartamento Vista Mare",
    description: "Spazioso appartamento con vista panoramica sul mare e terrazza privata",
    image: "🏖️",
    guests: 4,
    bedrooms: 2,
    price: 150,
    featured: true,
  },
  {
    id: "olimpia-2",
    name: "Suite Deluxe",
    description: "Lussuosa suite con design moderno e accesso diretto alla piscina",
    image: "🏊",
    guests: 2,
    bedrooms: 1,
    price: 200,
    featured: true,
  },
  {
    id: "olimpia-3",
    name: "Penthouse Panoramico",
    description: "Esclusivo penthouse con vista a 360° e terrazza attrezzata",
    image: "🌅",
    guests: 6,
    bedrooms: 3,
    price: 300,
    featured: true,
  },
]

const services = [
  {
    icon: Wifi,
    title: "WiFi Gratuito",
    description: "Connessione internet ad alta velocità in tutti gli appartamenti",
  },
  {
    icon: Car,
    title: "Parcheggio",
    description: "Parcheggio privato disponibile per tutti gli ospiti",
  },
  {
    icon: Waves,
    title: "Vista Mare",
    description: "Tutti gli appartamenti offrono una vista mozzafiato sul mare",
  },
  {
    icon: Utensils,
    title: "Cucina Attrezzata",
    description: "Cucine completamente attrezzate per preparare i tuoi pasti",
  },
  {
    icon: Shield,
    title: "Sicurezza",
    description: "Sistema di sicurezza 24/7 e cassaforte in ogni appartamento",
  },
  {
    icon: Star,
    title: "Servizio Premium",
    description: "Assistenza dedicata per rendere il tuo soggiorno indimenticabile",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured Apartments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              I Nostri Appartamenti
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri le nostre 9 unità lussuose, ognuna con caratteristiche
              uniche e vista mozzafiato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/appartamenti">Vedi Tutti gli Appartamenti</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Servizi e Comfort
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tutto ciò di cui hai bisogno per un soggiorno indimenticabile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Pronto per la Tua Vacanza?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Prenota il tuo appartamento e vivi un&apos;esperienza indimenticabile
            nella splendida Calabria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="luxury"
              size="lg"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link href="/contatti">Prenota Ora</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/location">Scopri la Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

