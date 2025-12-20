'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FloatingBooking() {
  const [show, setShow] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return
    
    const handleScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {!expanded ? (
            <Button size="lg" onClick={() => setExpanded(true)} className="rounded-full shadow-2xl px-8 h-16">
              <Calendar className="w-6 h-6 mr-2" />
              Prenota Ora
            </Button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-80"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Verifica Disponibilità</h3>
                <button onClick={() => setExpanded(false)} className="hover:opacity-70">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-3">
                <input type="date" className="w-full px-4 py-2 border rounded-lg" placeholder="Check-in" />
                <input type="date" className="w-full px-4 py-2 border rounded-lg" placeholder="Check-out" />
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>2 ospiti</option>
                  <option>4 ospiti</option>
                  <option>6 ospiti</option>
                </select>
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


