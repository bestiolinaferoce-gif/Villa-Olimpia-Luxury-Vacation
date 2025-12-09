"use client"

import { HeroSectionPremium } from "@/components/hero-section-premium"
import { ApartmentCard } from "@/components/apartment-card"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { SectionDivider } from "@/components/animations/section-divider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WeatherWidget } from "@/components/weather-widget"
import Link from "next/link"
import { Star, Wifi, Car, Waves, Utensils, Shield, Umbrella, MapPin, Sparkles } from "lucide-react"
import { getFeaturedApartments } from "@/data/apartments"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Lazy load componenti pesanti
const HomeGallery = dynamic(() => import("@/components/home-gallery").then(mod => ({ default: mod.HomeGallery })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
  ssr: false
})

const HowToReachUs = dynamic(() => import("@/components/how-to-reach-us").then(mod => ({ default: mod.HowToReachUs })), {
  loading: () => <div className="h-64 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
  ssr: false
})

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

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="luxury"
          size="lg"
          className="text-lg px-8 py-6 group shadow-xl !border-2 !border-white"
          style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'white' }}
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
      {/* Weather Widget nella sezione CTA */}
      <WeatherWidget position="cta" />
    </motion.div>
  )
}

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
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Più Prenotati</span>
              </div>
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

      {/* Separatore elegante */}
      <SectionDivider />

      {/* Perché Sceglierci */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-ocean/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">
              Perché Scegliere Villa Olimpia
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Scopri cosa ci rende la scelta perfetta per la tua vacanza
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Umbrella,
                title: "Posizione Privilegiata",
                text: "A meno di 100 metri dalla splendida Spiaggia dei Gigli, nell'Area Marina Protetta"
              },
              {
                icon: Waves,
                title: "Piscina Privata",
                text: "Grande piscina condivisa con solarium e gazebo per il relax"
              },
              {
                icon: Sparkles,
                title: "Comfort Premium",
                text: "9 appartamenti moderni con tutti i comfort per una vacanza perfetta"
              }
            ].map((item, i) => {
              const IconComponent = item.icon
              return (
                <ScrollReveal key={i} delay={i * 0.2}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    whileHover={{ 
                      y: -12,
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary/20"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                      className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-ocean/10 group-hover:from-primary/20 group-hover:to-ocean/20 transition-all duration-300"
                    >
                      <IconComponent className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <h3 className="text-xl font-playfair font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </motion.div>
                </ScrollReveal>
              )
            })}
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
                Tutto ciò di cui hai bisogno per un soggiorno indimenticabile.{" "}
                <Link href="/servizi" className="text-primary hover:underline font-semibold">Scopri tutti i servizi inclusi</Link>{" "}
                e{" "}
                <Link href="/location" className="text-primary hover:underline font-semibold">la nostra location privilegiata</Link>.
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
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6"
              >
                Leggi cosa dicono i nostri ospiti su Villa Olimpia. Valutazione media{" "}
                <span className="font-bold text-primary text-xl">4.9/5</span> stelle basata su{" "}
                <span className="font-bold text-primary text-xl">150+</span> recensioni.{" "}
                <Link href="/recensioni" className="text-primary hover:underline font-semibold">Leggi tutte le recensioni</Link>{" "}
                o{" "}
                <Link href="/contatti" className="text-primary hover:underline font-semibold">contattaci per prenotare</Link>.
              </motion.p>
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-6 py-3 rounded-full border border-yellow-400/30 mb-6">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-bold text-gray-900">4.9/5 su Google</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm font-semibold text-gray-700">150+ Recensioni</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="luxury" size="lg" asChild className="group">
                  <Link href="/recensioni">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Leggi tutte le 150+ Recensioni
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

      {/* Separatore elegante */}
      <SectionDivider />

      {/* Come Raggiungerci - Sezione Ultra Moderna */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 via-ocean/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-playfair font-bold mb-4"
              >
                Come Raggiungerci
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Scopri tutti i modi per raggiungere Villa Olimpia. Informazioni complete su aeroporti, treni e percorsi in auto.
              </motion.p>
            </div>
          </ScrollReveal>
          
          <HowToReachUs />
        </div>
      </section>

      {/* Separatore elegante */}
      <SectionDivider />

      {/* FAQ Section Premium */}
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Domande Frequenti</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trova rapidamente le risposte alle domande più comuni
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: "Quanto dista Villa Olimpia dalla spiaggia?",
                a: "Siamo a meno di 100 metri dalla splendida Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi."
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="group border-2 border-transparent hover:border-primary/30 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <motion.details
                      className="cursor-pointer"
                    >
                      <CardHeader className="pb-4">
                        <summary className="font-playfair font-bold text-lg text-foreground group-hover:text-primary transition-colors flex items-center justify-between list-none">
                          <span className="flex-1 pr-4">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <motion.svg
                              className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </motion.div>
                        </summary>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {faq.a}
                        </motion.p>
                      </CardContent>
                    </motion.details>
                  </Card>
                </motion.div>
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

      {/* Trust Badges Premium */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                Certificazioni e Partner
              </h3>
              <p className="text-muted-foreground">
                Prenota con fiducia sulle piattaforme più sicure
              </p>
            </div>
            <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
              {[
                { label: "Certificato da", name: "Booking.com", color: "text-primary", icon: "🏆" },
                { label: "Superhost", name: "Airbnb", color: "text-primary", icon: "⭐" },
                { label: "Area Protetta", name: "Capo Rizzuto", color: "text-turquoise", icon: "🌊" }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="text-center cursor-pointer p-6 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{badge.label}</p>
                  <p className={`text-3xl font-playfair font-bold ${badge.color}`}>{badge.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="/contatti">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Prenota su Booking.com
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

      {/* Separatore elegante */}
      <SectionDivider variant="accent" />

      {/* CTA Section Premium */}
      <section className="py-24 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={0.2}>
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">✅ Certificato Booking.com</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">🏆 Superhost Airbnb</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">🔒 Prenotazione Sicura</span>
              </div>
            </div>

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
              className="text-xl mb-6 max-w-2xl mx-auto text-white/90"
            >
              Prenota il tuo appartamento e vivi un&apos;esperienza indimenticabile
              nella splendida Calabria
            </motion.p>
            
            {/* Badge Prenota Direttamente */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-6 py-3 rounded-full border border-green-300/50 shadow-lg">
                <span className="text-white text-base font-bold">💰 Prenota Direttamente e Risparmia fino al 15%</span>
              </div>
            </motion.div>

            <CTAButtons />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

