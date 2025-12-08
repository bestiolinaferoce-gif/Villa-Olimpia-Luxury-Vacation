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
import { motion } from "framer-motion"

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
              <ScrollReveal key={apartment.id} delay={index * 0.15}>
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

          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="luxury" size="lg" asChild className="group">
                  <Link href="/appartamenti">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Vedi Tutti gli Appartamenti
                    </span>
                    <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
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
                <motion.div
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    className="text-6xl mb-4 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </motion.div>
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
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                      <CardHeader>
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                          className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        >
                          <IconComponent className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                        </motion.div>
                        <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </ScrollReveal>
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
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-playfair font-bold mb-4"
              >
                Recensioni dei Nostri Ospiti
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              >
                Leggi cosa dicono i nostri ospiti su Villa Olimpia. Valutazione media{" "}
                <span className="font-bold text-primary text-xl">4.9/5</span> stelle basata su{" "}
                <span className="font-bold text-primary text-xl">35</span> recensioni.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="luxury" size="lg" asChild className="group">
                  <Link href="/recensioni">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Vedi Tutte le Recensioni
                    </span>
                    <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
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
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.details
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 group"
                >
                  <summary className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{faq.q}</span>
                    <motion.svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </summary>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 text-gray-600"
                  >
                    {faq.a}
                  </motion.p>
                </motion.details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="luxury" size="lg" asChild className="group">
                  <Link href="/faq">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Vedi tutte le FAQ
                    </span>
                    <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {[
                { label: "Certificato da", name: "Booking.com", color: "text-blue-600" },
                { label: "Partner", name: "Airbnb", color: "text-blue-600" },
                { label: "Area Protetta", name: "Capo Rizzuto", color: "text-green-600" }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center cursor-pointer"
                >
                  <p className="text-sm font-medium text-gray-600">{badge.label}</p>
                  <p className={`text-2xl font-bold ${badge.color}`}>{badge.name}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean to-primary text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
          style={{ left: "20%", top: "20%" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
          style={{ right: "20%", bottom: "20%" }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={0.2}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            >
              Pronto per la Tua Vacanza?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
            >
              Prenota il tuo appartamento e vivi un&apos;esperienza indimenticabile
              nella splendida Calabria
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="luxury"
                  size="lg"
                  className="text-lg px-8 py-6 group shadow-xl"
                  asChild
                >
                  <Link href="/contatti">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Prenota Ora
                    </span>
                    <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 group backdrop-blur-sm"
                  asChild
                >
                  <Link href="/location">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Scopri la Location
                    </span>
                    <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

