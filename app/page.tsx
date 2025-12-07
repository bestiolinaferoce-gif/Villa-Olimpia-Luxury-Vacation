"use client"

import { HeroSectionPremium } from "@/components/hero-section-premium"
import { ApartmentCard } from "@/components/apartment-card"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { HomeGallery } from "@/components/home-gallery"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, Wifi, Car, Waves, Utensils, Shield } from "lucide-react"
import { getFeaturedApartments } from "@/data/apartments"

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
  const featuredApartments = getFeaturedApartments()

  return (
    <>
      <HeroSectionPremium />

      {/* Featured Apartments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                I Nostri Appartamenti
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Scopri le nostre <Link href="/appartamenti" className="text-primary hover:underline font-semibold">9 unità lussuose</Link>, ognuna con caratteristiche
                uniche e <Link href="/location" className="text-primary hover:underline font-semibold">vista mozzafiato</Link> sul mare Ionio
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredApartments.map((apartment, index) => (
              <ScrollReveal key={apartment.id} delay={index * 0.1}>
                <ApartmentCard
                  id={`apartment-${apartment.id}`}
                  name={apartment.name}
                  description={apartment.description || apartment.fullDescription || ""}
                  image={apartment.image}
                  guests={apartment.guests}
                  bedrooms={apartment.bedrooms}
                  price={apartment.price || 0}
                  featured={apartment.premium}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/appartamenti">Vedi Tutti gli Appartamenti</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Perché Sceglierci */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12">
              Perché Scegliere Villa Olimpia
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏖️",
                title: "Posizione Privilegiata",
                text: "A 1 km dalla splendida Spiaggia dei Gigli, nell'Area Marina Protetta"
              },
              {
                icon: "🏊",
                title: "Piscina Privata",
                text: "Grande piscina condivisa con solarium e gazebo per il relax"
              },
              {
                icon: "🌟",
                title: "Comfort Premium",
                text: "9 appartamenti moderni con tutti i comfort per una vacanza perfetta"
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Servizi e Comfort
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tutto ciò di cui hai bisogno per un soggiorno indimenticabile
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Reviews Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Recensioni dei Nostri Ospiti
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Leggi cosa dicono i nostri ospiti su Villa Olimpia. Valutazione media 4.9/5 stelle basata su 35 recensioni.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link href="/recensioni">Vedi Tutte le Recensioni</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 🏊 SEZIONE PISCINA - PRIORITÀ MASSIMA */}
      <HomeGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">Domande Frequenti</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: "Quanto dista Villa Olimpia dalla spiaggia?",
                a: "Siamo a soli 1 km dalla splendida Spiaggia dei Gigli, raggiungibile in 2 minuti d'auto o 15 minuti a piedi."
              },
              {
                q: "È incluso il parcheggio?",
                a: "Sì, ogni appartamento ha un posto auto riservato gratuito all'interno della proprietà."
              },
              {
                q: "La piscina è condivisa?",
                a: "Sì, la grande piscina è condivisa tra tutti gli ospiti degli appartamenti, con ampio solarium e gazebo."
              },
              {
                q: "Come funziona il check-in?",
                a: "Il check-in è dalle 15:00 e il check-out entro le 10:00. Siamo flessibili per esigenze particolari, contattateci!"
              }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition">
                  <summary className="font-bold text-lg text-gray-900">{faq.q}</summary>
                  <p className="mt-4 text-gray-600">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/faq">Vedi tutte le FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Certificato da</p>
              <p className="text-2xl font-bold text-blue-600">Booking.com</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Partner</p>
              <p className="text-2xl font-bold text-blue-600">Airbnb</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">Area Protetta</p>
              <p className="text-2xl font-bold text-green-600">Capo Rizzuto</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal delay={0.2}>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

