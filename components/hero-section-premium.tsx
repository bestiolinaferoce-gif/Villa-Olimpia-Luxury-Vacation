"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Calendar, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { CounterAnimation } from "@/components/animations/counter-animation"

export function HeroSectionPremium() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="relative w-full h-full">
          {/* Video Background Placeholder - Gradient Elegante */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean via-ocean-dark to-primary">
            {/* Pattern overlay per texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          {/* Overlay per leggibilità - più chiaro */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,119,190,0.7) 100%)"
            }}
          />
          {/* Effetto onde decorative */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean/30 to-transparent" />
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
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
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
            <span className="text-white text-sm font-medium">Area Marina Protetta Capo Rizzuto</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
          >
            Villa Olimpia
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white font-light max-w-3xl mx-auto"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
          >
            Esperienza di lusso nella splendida Spiaggia dei Gigli
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
              <div className="text-sm md:text-base text-white/80 mt-1">Appartamenti</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <CounterAnimation end={150} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-white/80 mt-1">Ospiti Felici</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                <CounterAnimation end={4} />
                <span className="text-yellow-400">.</span>
                <CounterAnimation end={9} />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 ml-1" />
              </div>
              <div className="text-sm md:text-base text-white/80 mt-1">Rating</div>
            </div>
          </motion.div>

          {/* Badge aggiuntivi */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 justify-center mt-6 flex-wrap"
          >
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">⭐ 9.5/10 su Google</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">🏖️ 1 km dalla spiaggia</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">🏊 Piscina Privata</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 group bg-[#FFC107] text-gray-900 hover:bg-[#FFD54F] shadow-lg font-semibold"
              asChild
            >
              <Link href="/appartamenti">
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Scopri gli Appartamenti
              </Link>
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white/30 group font-semibold"
              asChild
            >
              <Link href="/location">
                <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                La Location
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/80 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }}
        >
          <span className="text-sm font-medium">Scorri</span>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

