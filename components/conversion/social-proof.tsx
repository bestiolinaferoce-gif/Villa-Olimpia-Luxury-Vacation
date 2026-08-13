"use client"

import { Building2, Car, MessageCircle, Waves } from "lucide-react"
import { motion } from "framer-motion"

const FACTS = [
  {
    icon: Building2,
    value: "9",
    label: "Appartamenti indipendenti",
    color: "text-blue-700",
  },
  {
    icon: Waves,
    value: "~100 m",
    label: "Dalla Spiaggia dei Gigli",
    color: "text-cyan-700",
  },
  {
    icon: MessageCircle,
    value: "Diretto",
    label: "Preventivo dalla struttura",
    color: "text-emerald-700",
  },
] as const

export function SocialProof() {
  return (
    <section className="bg-gradient-to-r from-primary/5 via-background to-primary/5 py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="mb-2 font-playfair text-xl font-bold sm:text-2xl">
            Informazioni chiare prima di prenotare
          </h3>
          <p className="text-sm text-muted-foreground sm:text-base">
            I dati essenziali della struttura, senza promesse difficili da verificare.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FACTS.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-primary/10 bg-white/80 p-5 text-center backdrop-blur-sm sm:p-6"
            >
              <fact.icon className={`mx-auto mb-3 h-10 w-10 ${fact.color}`} />
              <div className={`mb-2 text-3xl font-bold sm:text-4xl ${fact.color}`}>
                {fact.value}
              </div>
              <div className="text-xs text-muted-foreground sm:text-sm">{fact.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2 font-semibold">
            <Waves className="h-5 w-5 text-cyan-700" /> Piscina condivisa riservata agli ospiti
          </span>
          <span className="inline-flex items-center gap-2 font-semibold">
            <Car className="h-5 w-5 text-blue-700" /> Parcheggio gratuito
          </span>
          <span className="inline-flex items-center gap-2 font-semibold">
            <MessageCircle className="h-5 w-5 text-emerald-700" /> Contatto diretto
          </span>
        </div>
      </div>
    </section>
  )
}
