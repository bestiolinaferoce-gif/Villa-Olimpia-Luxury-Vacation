'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FloatingBookingWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostra dopo 500px di scroll
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {!isExpanded ? (
            <Button
              size="lg"
              onClick={() => setIsExpanded(true)}
              className="rounded-full shadow-2xl h-16 px-8 text-lg"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Verifica Disponibilità
            </Button>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-96 max-w-[calc(100vw-4rem)]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Prenota Soggiorno</h3>
                <button onClick={() => setIsExpanded(false)} className="hover:opacity-70">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check-out</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ospiti</label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>2 ospiti</option>
                    <option>3 ospiti</option>
                    <option>4 ospiti</option>
                    <option>5 ospiti</option>
                    <option>6+ ospiti</option>
                  </select>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/contatti#prenota">Richiedi Disponibilità</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}











