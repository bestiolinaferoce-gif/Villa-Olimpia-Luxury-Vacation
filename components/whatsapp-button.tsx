"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const message = encodeURIComponent("Ciao! Vorrei informazioni su Villa Olimpia")

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
        >
          {/* Numero principale */}
          <motion.a
            href={`https://wa.me/393335773390?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300"
            aria-label="Contattaci su WhatsApp - 333 577 3390"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden group-hover:inline-block whitespace-nowrap text-sm">
              WhatsApp 1
            </span>
          </motion.a>

          {/* Numero secondario */}
          <motion.a
            href={`https://wa.me/393290479193?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 hover:bg-green-500 text-white p-3 rounded-full shadow-xl flex items-center gap-2 group transition-all duration-300"
            aria-label="Contattaci su WhatsApp - 329 047 9193"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden group-hover:inline-block whitespace-nowrap text-sm">
              WhatsApp 2
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

