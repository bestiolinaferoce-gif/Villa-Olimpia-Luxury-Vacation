"use client"

import { motion } from "framer-motion"
import { Users, Star, Calendar, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Ospiti Soddisfatti",
    description: "Ospiti da tutto il mondo",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Valutazione Media",
    description: "Su 5 stelle",
  },
  {
    icon: Calendar,
    value: "95%",
    label: "Tasso di Occupazione",
    description: "Durante l'alta stagione",
  },
  {
    icon: Award,
    value: "9",
    label: "Appartamenti",
    description: "Tutti con vista mare",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-ocean text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-white/80">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


