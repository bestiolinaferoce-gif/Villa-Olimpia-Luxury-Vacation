"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Heart, Clock, Shield, Sparkles, Users, Waves, Car } from "lucide-react"

// AGGIUNTO: Contenuti aggiornati con testi specifici richiesti
const features = [
  {
    icon: Waves,
    title: "Posizione Privilegiata",
    description: "A soli 100 metri dalla splendida Spiaggia dei Gigli, una delle più belle della Calabria. Mare cristallino e sabbia fine a pochi passi da casa.",
  },
  {
    icon: Waves,
    title: "Piscina Privata",
    description: "Piscina esclusiva per i nostri ospiti, immersa nel verde con area solarium attrezzata. Relax totale in un ambiente curato e riservato.",
  },
  {
    icon: Award,
    title: "Appartamenti Moderni",
    description: "9 unità lussuose con aria condizionata, Wi-Fi gratuito, cucina attrezzata. Ogni dettaglio pensato per il tuo comfort e benessere.",
  },
  {
    icon: Car,
    title: "Parcheggio Gratuito",
    description: "Ampio parcheggio privato custodito incluso. La tua auto al sicuro per tutta la durata del soggiorno, senza costi aggiuntivi.",
  },
  {
    icon: Sparkles,
    title: "Giardino Curato",
    description: "Ampio giardino mediterraneo con zone relax e giochi per bambini. Spazi verdi perfetti per momenti di tranquillità all'aria aperta.",
  },
  {
    icon: Clock,
    title: "Assistenza H24",
    description: "Il nostro staff è sempre disponibile per qualsiasi necessità. Assistenza telefonica e presenza in loco per garantirti un soggiorno perfetto.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Perché Scegliere Villa Olimpia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scopri cosa ci rende la scelta perfetta per la tua vacanza in Calabria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

