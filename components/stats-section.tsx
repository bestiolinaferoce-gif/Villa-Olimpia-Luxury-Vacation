"use client"

import { motion } from "framer-motion"
import { Building2, Waves, ShieldCheck, MessageCircle } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "9",
    label: "Appartamenti",
    description: "Unità indipendenti",
  },
  {
    icon: Waves,
    value: "~100 m",
    label: "Dalla spiaggia",
    description: "Spiaggia dei Gigli",
  },
  {
    icon: ShieldCheck,
    value: "1",
    label: "Piscina condivisa",
    description: "Riservata agli ospiti",
  },
  {
    icon: MessageCircle,
    value: "Diretto",
    label: "Contatto struttura",
    description: "Senza call center",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary via-ocean to-primary/90 text-white relative overflow-hidden">
      {/* Animated background gradient overlay */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 opacity-50"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="text-center cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5
                }}
                className="flex justify-center mb-4"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0.2)",
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 0px rgba(255,255,255,0.2)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30"
                >
                  <stat.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-base sm:text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-xs sm:text-sm text-white/80">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
