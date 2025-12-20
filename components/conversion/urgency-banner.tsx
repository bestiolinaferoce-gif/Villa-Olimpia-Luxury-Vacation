"use client"

import { Clock, Users, Calendar } from "lucide-react"
import { motion } from "framer-motion"

// ✅ VALORI STATICI - nessun Math.random() per evitare hydration mismatch
const STATIC_URGENCY = {
  viewers: 7,
  recentBooking: "Geranio",
} as const

export function UrgencyBanner() {
  // ✅ Usa sempre valori statici - nessun calcolo dinamico
  const urgencyMessages = [
    { icon: Users, text: `${STATIC_URGENCY.viewers} persone stanno visualizzando questa pagina`, color: "text-amber-600" },
    { icon: Clock, text: "Ultima prenotazione: 2 ore fa", color: "text-green-600" },
    { icon: Calendar, text: "Solo 3 appartamenti disponibili per questa settimana", color: "text-red-600" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b-2 border-amber-200 py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
          {urgencyMessages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2"
            >
              <msg.icon className={`h-4 w-4 ${msg.color} animate-pulse`} />
              <span className={msg.color}>
                <strong>{msg.text}</strong>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

