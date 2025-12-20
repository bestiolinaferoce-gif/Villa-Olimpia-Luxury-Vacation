"use client"

import { CheckCircle2, Shield, Award, Heart, Star } from "lucide-react"
import { motion } from "framer-motion"

const badges = [
  {
    icon: Shield,
    title: "Prenotazione Sicura",
    description: "SSL e pagamento protetto",
    color: "text-blue-600",
  },
  {
    icon: Award,
    title: "4.9/5 Stelle",
    description: "62+ recensioni verificate",
    color: "text-amber-600",
  },
  {
    icon: CheckCircle2,
    title: "Cancellazione Gratuita",
    description: "Fino a 7 giorni prima",
    color: "text-green-600",
  },
  {
    icon: Heart,
    title: "Superhost",
    description: "Airbnb & Booking.com",
    color: "text-red-600",
  },
  {
    icon: Star,
    title: "Best Value",
    description: "Prezzo/Qualità ottimale",
    color: "text-purple-600",
  },
]

export function TrustBadges() {
  return (
    <div className="py-8 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all"
            >
              <badge.icon className={`h-8 w-8 mx-auto mb-2 ${badge.color}`} />
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}











