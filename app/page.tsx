"use client"

import { HeroSectionPremium } from "@/components/hero-section-premium"
import { ApartmentCard } from "@/components/apartment-card"
import { StatsSection } from "@/components/stats-section"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { SectionDivider } from "@/components/animations/section-divider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UrgencyBanner } from "@/components/conversion/urgency-banner"
import { TrustBadges } from "@/components/conversion/trust-badges"
import { SocialProof } from "@/components/conversion/social-proof"
import { JuneJulySection } from "@/components/conversion/june-july-section"
import Link from "next/link"
import { Star, Wifi, Car, Waves, Utensils, Shield, Umbrella, MapPin, Sparkles, ArrowRight } from "lucide-react"
import { getFeaturedApartments } from "@/data/apartments"
import { SITE_CONFIG } from "@/lib/constants"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useI18n } from "@/components/i18n-provider"

// Lazy load componenti pesanti
const HomeGallery = dynamic(() => import("@/components/home-gallery").then(mod => ({ default: mod.HomeGallery })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
  ssr: false
})

const HowToReachUs = dynamic(() => import("@/components/how-to-reach-us").then(mod => ({ default: mod.HowToReachUs })), {
  loading: () => <div className="h-64 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
  ssr: false
})

function CTAButtons() {
  const { t } = useI18n()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="luxury"
          size="lg"
          className="text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 group shadow-2xl !border-2 !border-white font-semibold"
          style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'white' }}
          asChild
        >
          <Link href="/contatti?source=home_main_cta#prenota">
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              {t.home.cta.bookVacation}
            </span>
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="text-base px-6 py-5 bg-white/20 backdrop-blur-sm text-white !border-2 !border-white hover:bg-white/30 font-semibold"
          style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'white' }}
          asChild
        >
          <a href="https://wa.me/393335773390?text=Ciao!%20Vorrei%20informazioni%20su%20Villa%20Olimpia%20per%20Giugno/Luglio" target="_blank" rel="noopener noreferrer">
            WhatsApp diretto
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  const { t } = useI18n()
  const featuredApartments = getFeaturedApartments()

  const services = [
    {
      icon: Wifi,
      title: t.home.services.items.wifi.title,
      description: t.home.services.items.wifi.description,
    },
    {
      icon: Car,
      title: t.home.services.items.parking.title,
      description: t.home.services.items.parking.description,
    },
    {
      icon: Waves,
      title: t.home.services.items.seaView.title,
      description: t.home.services.items.seaView.description,
    },
    {
      icon: Utensils,
      title: t.home.services.items.kitchen.title,
      description: t.home.services.items.kitchen.description,
    },
    {
      icon: Shield,
      title: t.home.services.items.security.title,
      description: t.home.services.items.security.description,
    },
    {
      icon: Star,
      title: t.home.services.items.premium.title,
      description: t.home.services.items.premium.description,
    },
  ]

  const faqs = [
    { q: t.home.faq.items.pool.q, a: t.home.faq.items.pool.a },
    { q: t.home.faq.items.beachDistance.q, a: t.home.faq.items.beachDistance.a },
    { q: t.home.faq.items.parking.q, a: t.home.faq.items.parking.a },
  ]

  return (
    <>
      <UrgencyBanner />
      <HeroSectionPremium />
      <TrustBadges />

      {/* === JUNE/JULY CONVERSION ENGINE — Primary conversion section === */}
      <JuneJulySection />

      {/* Featured Apartments */}
      <section className="py-20 bg-background cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{t.home.featured.mostBooked}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                {t.home.featured.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.home.featured.description}
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
                      {t.home.featured.viewAll}
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
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
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-ocean/5 cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">
              {t.home.whyChoose.title}
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              {t.home.whyChoose.subtitle}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Umbrella,
                title: t.home.whyChoose.items.privilegedLocation.title,
                text: t.home.whyChoose.items.privilegedLocation.text
              },
              {
                icon: Waves,
                title: t.home.whyChoose.items.privatePool.title,
                text: t.home.whyChoose.items.privatePool.text
              },
              {
                icon: Sparkles,
                title: t.home.whyChoose.items.premiumComfort.title,
                text: t.home.whyChoose.items.premiumComfort.text
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
      <section className="py-20 bg-secondary/30 cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                {t.home.services.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.home.services.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-ocean/10 group-hover:from-primary/20 group-hover:to-ocean/20 transition-all flex items-center justify-center mb-3">
                          <IconComponent className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pool Gallery Lazy */}
      <HomeGallery />

      {/* Social Proof */}
      <SocialProof />

      {/* Separatore elegante */}
      <SectionDivider />

      {/* How to Reach Us */}
      <HowToReachUs />

      {/* FAQ preview */}
      <section className="py-20 bg-background cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                {t.home.faq.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.home.faq.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/10">
                    <motion.details className="group">
                      <CardHeader className="cursor-pointer select-none">
                        <summary className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between list-none">
                          <span className="flex-1 pr-4">{faq.q}</span>
                          <motion.svg
                            className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </summary>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </motion.details>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center mt-8">
              <Button variant="luxury" size="lg" asChild className="group">
                <Link href="/faq">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {t.home.faq.viewAll}
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-ocean/10 cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{t.home.googleWidget.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-foreground mb-3">
                  {t.home.googleWidget.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t.home.googleWidget.subtitle}
                </p>
                <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs sm:text-sm text-muted-foreground">{t.home.googleWidget.ratingNote}</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-ocean/20 blur-2xl" />
                <Card className="relative border-2 border-primary/20 bg-white/80 backdrop-blur-xl shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair">{t.home.googleWidget.cardTitle}</CardTitle>
                    <CardDescription>{t.home.googleWidget.cardSubtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="luxury" size="lg" asChild className="w-full">
                      <Link href={SITE_CONFIG.social.googleReviews} target="_blank" rel="noopener noreferrer">
                        {t.home.googleWidget.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Badges Premium */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-primary/5 cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                {t.home.trustBadges.title}
              </h3>
              <p className="text-muted-foreground">
                {t.home.trustBadges.subtitle}
              </p>
            </div>
            <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
              {[
                { label: t.home.trustBadges.items.booking.label, name: t.home.trustBadges.items.booking.name, color: "text-primary", icon: "🏆" },
                { label: t.home.trustBadges.items.airbnb.label, name: t.home.trustBadges.items.airbnb.name, color: "text-primary", icon: "⭐" },
                { label: t.home.trustBadges.items.protected.label, name: t.home.trustBadges.items.protected.name, color: "text-turquoise", icon: "🌊" }
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
          </ScrollReveal>
        </div>
      </section>

      {/* Separatore elegante */}
      <SectionDivider variant="accent" />

      {/* CTA Section Premium — June/July focused */}
      <section className="py-24 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white relative overflow-hidden cv-auto">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={0.2}>
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">✅ {t.home.trustBadges.badges.certified}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">🏆 {t.home.trustBadges.badges.superhost}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">🔒 {t.home.trustBadges.badges.secure}</span>
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            >
              {t.home.cta.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl mb-4 max-w-2xl mx-auto text-white/90"
            >
              {t.home.cta.description}
            </motion.p>

            {/* June/July specific CTA line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base mb-6 text-white/80"
            >
              Giugno e Luglio a tariffe vantaggiose — disponibilità limitata, prenota ora.
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
                <span className="text-white text-base font-bold">💰 {t.home.cta.saveUpTo}</span>
              </div>
            </motion.div>

            <CTAButtons />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
