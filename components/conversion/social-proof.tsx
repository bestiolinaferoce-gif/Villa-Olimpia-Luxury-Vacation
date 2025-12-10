"use client"

import { Star, TrendingUp, Users } from "lucide-react"
import { reviews } from "@/data/reviews-detailed"
import { motion } from "framer-motion"

export function SocialProof() {
  const verifiedCount = reviews.filter(r => r.verified).length
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  
  const stats = [
    {
      icon: Users,
      value: `${verifiedCount}+`,
      label: "Prenotazioni Verificate",
      color: "text-blue-600",
    },
    {
      icon: Star,
      value: averageRating.toFixed(1),
      label: "Media Recensioni",
      color: "text-amber-600",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Tasso di Soddisfazione",
      color: "text-green-600",
    },
  ]

  return (
    <div className="py-12 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-playfair font-bold mb-2">
            Cosa Dicono i Nostri Ospiti
          </h3>
          <p className="text-muted-foreground">
            Migliaia di ospiti soddisfatti in tutta Europa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-primary/10"
            >
              <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-center text-sm">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
            <span className="font-semibold">Certificato Airbnb Superhost</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-blue-500 fill-blue-500" />
            <span className="font-semibold">Partner Booking.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-green-500 fill-green-500" />
            <span className="font-semibold">Verificato Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}

