'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/images/villa/gallery/Esterni_Piscina_Notte_01.jpg"
          fill
          className="object-cover"
          alt="Villa Olimpia - Piscina privata 12x6m a Capo Rizzuto"
          priority
          sizes="100vw"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-black/30" />
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex items-center justify-center h-full text-center text-white px-4"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Villa Olimpia Capo Rizzuto
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            A 70 Metri dal Mare • Piscina Privata 12x6m
          </p>
          <p className="text-xl mb-8">
            9 Appartamenti Luxury in Calabria
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/appartamenti">Scopri Appartamenti</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
              <Link href="/contatti">Prenota Ora</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}











