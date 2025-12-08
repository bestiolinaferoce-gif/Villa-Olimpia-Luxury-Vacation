"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Phone, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
    }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const message = encodeURIComponent("Ciao! Vorrei informazioni su Villa Olimpia")

  const whatsappNumbers = [
    {
      number: "393335773390",
      display: "+39 333 577 3390",
      label: "Numero Principale"
    },
    {
      number: "393290479193",
      display: "+39 329 047 9193",
      label: "Numero Secondario"
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-24 right-6 z-50"
          ref={menuRef}
        >
          {/* Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden min-w-[200px]"
              >
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                    Scegli Numero
                  </div>
                  {whatsappNumbers.map((item, index) => (
                    <motion.a
                      key={item.number}
                      href={`https://wa.me/${item.number}?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ backgroundColor: "#f0f9ff" }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:text-green-600 transition-colors cursor-pointer group"
                    >
                      <Phone className="w-4 h-4 text-green-500" />
                      <div className="flex-1">
                        <div className="font-medium">{item.display}</div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulsante Principale */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isMenuOpen ? "bg-green-600" : ""
            }`}
            aria-label="Contattaci su WhatsApp"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

