"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax - Gradient Elegante */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="relative w-full h-full">
          {/* Gradient elegante mediterraneo */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean via-ocean-dark to-primary">
            {/* Pattern overlay per texture */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          {/* Overlay per leggibilità */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
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
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold leading-tight"
          >
            Villa Olimpia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Luxury Vacation Rentals in the Heart of Calabria
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mx-auto"
          >
            Experience the Mediterranean lifestyle in our stunning apartments
            with breathtaking sea views in Capopiccolo, Isola di Capo Rizzuto
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              variant="luxury"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link href="/contatti">
                <Calendar className="mr-2 h-5 w-5" />
                Prenota Ora
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/appartamenti">Scopri gli Appartamenti</Link>
            </Button>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-2 pt-8"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-white/80">Capopiccolo, Isola di Capo Rizzuto, Calabria</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-6 w-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

