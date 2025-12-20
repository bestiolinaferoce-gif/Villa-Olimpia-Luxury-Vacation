"use client"

import { ApartmentCard } from "@/components/apartment-card"
import { apartments } from "@/data/apartments"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { VillaInteractiveMap } from "@/components/villa-interactive-map"
import { motion } from "framer-motion"
import { Sparkles, MapPin, Home } from "lucide-react"
import { SectionDivider } from "@/components/animations/section-divider"

export default function AppartamentiPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Premium */}
      <section className="relative bg-gradient-to-br from-primary/10 via-blue-50/50 to-ocean/10 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0077BE 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">9 Appartamenti Premium</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              9 Appartamenti con Piscina
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Scegli tra le nostre 9 unità lussuose, ognuna progettata per offrirti il massimo comfort 
              e una vista indimenticabile sul mare Ionio
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Capo Rizzuto</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <Home className="w-4 h-4 text-primary" />
                <span className="font-medium">100m dalla spiaggia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separatore elegante */}
      <SectionDivider />

      {/* Interactive Map */}
      <VillaInteractiveMap />

      {/* Separatore elegante */}
      <SectionDivider />

      {/* Apartments Grid Premium */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Home className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Tutti gli Appartamenti</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Tutti gli Appartamenti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esplora tutti i nostri appartamenti e trova quello perfetto per la tua vacanza
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment, index) => (
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
        </div>
      </section>
    </div>
  )
}
