"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Calendar, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { CounterAnimation } from "@/components/animations/counter-animation"
import { WeatherWidget } from "@/components/weather-widget"
import Image from "next/image"
import { poolImages } from "@/lib/pool-images"
import { useI18n } from "@/components/i18n-provider"

export function HeroSectionPremium() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elegante con gradiente mediterraneo */}
      <motion.div
        style={shouldReduceMotion ? undefined : { y, scale, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="relative w-full h-full">
          {/* Overlay elegante per migliorare leggibilità */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(0,119,190,0.4) 0%, rgba(0,80,150,0.5) 50%, rgba(0,50,100,0.6) 100%)"
            }}
          />
          
          {/* Immagine di sfondo - Ripristinata foto precedente */}
          <div className="absolute inset-0">
            <Image
              src="/images/villa/gallery/night-1.jpg"
              alt="Villa Olimpia - Piscina di notte"
              fill
              priority
              fetchPriority="high"
              quality={75}
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDA1MGZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA3N2ZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="
            />
          </div>
          
          {/* Overlay elegante per profondità - rimosso radial-gradient che creava ombra centrale */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)"
            }}
          />
          
          {/* Effetto onde decorative molto sottile */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean/10 to-transparent" />
        </div>
      </motion.div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Badge Area Marina Protetta con animazione floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={shouldReduceMotion ? { delay: 0.2, duration: 0.5 } : { 
              delay: 0.2, 
              duration: 0.5,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white text-sm font-medium">{t.home.hero.protectedArea}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
          >
            {t.home.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white font-light max-w-3xl mx-auto"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
          >
            {t.home.hero.subtitle}
          </motion.p>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <CounterAnimation end={9} />
              </div>
              <div className="text-sm md:text-base text-white/80 mt-1">{t.home.hero.apartments}</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <CounterAnimation end={150} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-white/80 mt-1">{t.home.hero.happyGuests}</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                <CounterAnimation end={4} />
                <span className="text-yellow-400">.</span>
                <CounterAnimation end={9} />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 ml-1" />
              </div>
              <div className="text-sm md:text-base text-white/80 mt-1">{t.home.hero.rating}</div>
            </div>
          </motion.div>

          {/* Badge aggiuntivi con Weather Widget integrato */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 justify-center mt-6 flex-wrap"
          >
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-white text-sm font-semibold">⭐ {t.home.hero.ratingValue}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-white text-sm font-semibold">🏖️ {t.home.hero.beachDistance}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-white text-sm font-semibold">🏊 {t.home.hero.privatePool}</span>
            </div>
            <div className="bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300/50 shadow-lg animate-float-soft">
              <span className="text-gray-900 text-sm font-bold">✅ {t.home.hero.bookedBy}</span>
            </div>
            {/* Weather Widget integrato nei badge - visibile solo su desktop */}
            <div className="hidden lg:block">
              <WeatherWidget position="hero" />
            </div>
          </motion.div>

          {/* Badge Prenota Direttamente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-4"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-green-300/50 shadow-lg">
              <span className="text-white text-sm font-bold">💰 {t.home.hero.bookDirectly}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6 z-10 relative"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 group bg-[#FFC107] text-gray-900 hover:bg-[#FFD54F] shadow-xl font-semibold !border-2 !border-white hover:scale-105 transition-transform z-10 relative"
              style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'white' }}
              asChild
            >
              <Link href="/contatti#prenota">
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.home.hero.bookStay}
              </Link>
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm text-white !border-2 !border-white hover:bg-white/30 group font-semibold hover:scale-105 transition-transform z-10 relative"
              style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'white' }}
              asChild
            >
              <Link href="/appartamenti">
                <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.home.hero.discoverApartments}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/80 cursor-pointer"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          }}
        >
          <span className="text-sm font-medium">{t.home.hero.scroll}</span>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
