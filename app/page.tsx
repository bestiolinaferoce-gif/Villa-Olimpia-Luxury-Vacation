"use client"

import { HeroSectionPremium } from "@/components/hero-section-premium"
import { ApartmentCard } from "@/components/apartment-card"
import { StatsSection } from "@/components/stats-section"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { SectionDivider } from "@/components/animations/section-divider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrustBadges } from "@/components/conversion/trust-badges"
import { SocialProof } from "@/components/conversion/social-proof"
import { JuneJulySection } from "@/components/conversion/june-july-section"
import { HomeMiniRibbon } from "@/components/home-mini-ribbon"
import Link from "next/link"
import { Star, Wifi, Car, Waves, Utensils, Shield, Umbrella, MapPin, Sparkles, ArrowRight, SunMedium, CalendarRange, Users } from "lucide-react"
import { getApartmentSlug, getFeaturedApartments } from "@/data/apartments"
import { SITE_CONFIG } from "@/lib/constants"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useI18n } from "@/components/i18n-provider"
import { buildWhatsAppUrlFromText } from "@/lib/booking-contact"
import { FlightsBanner } from "@/components/flights-banner"

// Lazy load componenti pesanti
const HomeGallery = dynamic(() => import("@/components/home-gallery").then(mod => ({ default: mod.HomeGallery })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
  ssr: false
})

const HowToReachUs = dynamic(() => import("@/components/how-to-reach-us").then(mod => ({ default: mod.HowToReachUs })), {
  loading: () => <div className="h-64 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
  ssr: false
})

const TerritorySection = dynamic(() => import("@/components/territory-section").then(mod => ({ default: mod.TerritorySection })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-ocean/10 to-primary/10 animate-pulse rounded-lg" />,
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
          <a
            href={buildWhatsAppUrlFromText(
              "Richiesta disponibilità Villa Olimpia:\nDate: \nOspiti: \nAppartamento: \nFonte: sito ufficiale (home CTA)"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp rapido
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
      <HeroSectionPremium />
      <FlightsBanner translations={t.flights} />
      <TrustBadges />

      {/* === JUNE/JULY CONVERSION ENGINE — Primary conversion section === */}
      <JuneJulySection />


      <section className="py-6 bg-background cv-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link
              href="/prenota?source=promo_giugno_home"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-gradient-to-r from-amber-50 via-white to-amber-100 px-4 py-2.5 text-sm md:text-base text-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" aria-hidden />
              <span className="font-semibold tracking-wide">Promo giugno</span>
              <span className="text-slate-600">1 settimana a 750,00 €</span>
              <ArrowRight className="h-4 w-4 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <HomeMiniRibbon />

      {/* Maggio, Giugno, Settembre — mesi ideali, famiglie, Nord Europa */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-background to-ocean/5 cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-ocean/10 px-4 py-2 rounded-full mb-4">
                <CalendarRange className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Maggio · Giugno · Settembre</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
                I mesi più eleganti per vivere Capo Rizzuto iniziano prima di agosto
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Maggio, giugno e settembre sono spesso i mesi ideali per godersi il mare con meno folla, luce splendida
                e un ritmo più rilassato. Piscina, Area Marina Protetta e Spiaggia dei Gigli restano il tuo salotto
                privato a due passi dall&apos;acqua — perfetto per famiglie, piccoli gruppi e ospiti dal Nord Europa.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
            {[
              {
                icon: SunMedium,
                title: "Maggio e giugno",
                text: "Clima piacevole, giornate lunghe e spiagge ancora molto vivibili: il mare di Capo Rizzuto si gusta con calma, tra una nuotata e la piscina di Villa Olimpia.",
              },
              {
                icon: Waves,
                title: "Settembre",
                text: "Il mese più elegante per il mare: acqua spesso ancora calda, atmosfera distesa e luminosità speciale — ideale per coppie e famiglie che cercano qualità senza ressa.",
              },
              {
                icon: Users,
                title: "Famiglie e piccoli gruppi",
                text: "Nove appartamenti nello stesso complesso: comodo per nuclei diversi che viaggiano insieme, bambini che giocano in sicurezza e logistica semplice per tutti.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 0.12}>
                  <Card className="h-full border-2 border-primary/10 bg-white/90 shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-playfair">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{item.text}</CardDescription>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              <Button variant="luxury" size="lg" asChild>
                <Link href="/settembre-capo-rizzuto">
                  Settembre a Capo Rizzuto
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30" asChild>
                <Link href="/intera-villa-calabria">
                  Gruppi e intera struttura
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30" asChild>
                <Link href="/contatti?source=home_shoulder_season#prenota">
                  Richiesta personalizzata
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
                  slug={getApartmentSlug(apartment)}
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

      {/* Territorio e attrazioni */}
      <TerritorySection />

      {/* Internal link hub */}
      <section className="py-16 bg-white cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Scopri meglio Capo Rizzuto prima di prenotare
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                Se vuoi organizzare bene il soggiorno, esplora le pagine dedicate al territorio, alle spiagge, alle
                attività e ai nostri appartamenti. Ti aiutano a capire perché Villa Olimpia è una base così comoda tra
                Capopiccolo, Spiaggia dei Gigli e Area Marina Protetta.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Appartamenti a Capo Rizzuto",
                text: "Scopri tutte le soluzioni disponibili per coppie, famiglie e piccoli gruppi.",
                href: "/appartamenti",
              },
              {
                title: "Spiagge di Capo Rizzuto",
                text: "Una guida utile tra Spiaggia dei Gigli, calette e mare dell'Area Marina Protetta.",
                href: "/spiagge-capo-rizzuto",
              },
              {
                title: "Cosa fare nei dintorni",
                text: "Itinerari, escursioni e attività da vivere partendo da Villa Olimpia.",
                href: "/cosa-fare-capo-rizzuto",
              },
              {
                title: "Le Castella e il castello",
                text: "Una delle visite più iconiche della zona, facile da raggiungere da Capopiccolo.",
                href: "/le-castella",
              },
              {
                title: "Blog e guide locali",
                text: "Articoli su territorio, vacanze in famiglia, prenotazione diretta ed esperienze locali.",
                href: "/blog",
              },
              {
                title: "Settembre a Capo Rizzuto",
                text: "Mare, luce e tranquillità: perché settembre è un mese premium a Villa Olimpia.",
                href: "/settembre-capo-rizzuto",
              },
              {
                title: "Gruppi e intera struttura",
                text: "Richieste per più appartamenti o soluzioni su misura per famiglie allargate e piccoli gruppi.",
                href: "/intera-villa-calabria",
              },
              {
                title: "Prenotazione diretta",
                text: "Contattaci per disponibilità, proposta personalizzata e assistenza veloce.",
                href: "/prenota",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.href} delay={index * 0.08}>
                <Card className="h-full border border-primary/10 bg-background/90 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-xl font-playfair">{item.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{item.text}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={item.href}>
                        Vai alla pagina
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prenotazione diretta — soggiorni lunghi e più appartamenti */}
      <section className="py-14 bg-gradient-to-r from-primary/8 via-ocean/10 to-primary/8 border-y border-primary/15 cv-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3">
                Prenotazione diretta per soggiorni più lunghi e richieste su misura
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Scrivici per date flessibili, più appartamenti nello stesso complesso o esigenze di gruppo: ti rispondiamo dal canale ufficiale Villa Olimpia, senza intermediari.
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-2 text-sm text-slate-700 mb-8">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Risposta rapida e chiara sulle disponibilità</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Proposta personalizzata in base a ospiti e periodo</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Soluzioni per più appartamenti o intera struttura (da concordare)</li>
              </ul>
              <Button variant="luxury" size="lg" asChild>
                <Link href="/prenota">
                  Vai alla prenotazione diretta
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
