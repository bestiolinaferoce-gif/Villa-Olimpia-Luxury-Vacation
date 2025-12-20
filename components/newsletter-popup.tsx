'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NewsletterPopup() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !localStorage.getItem('newsletter-seen')) {
        setShow(true)
      }
    }, 30000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setShow(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('newsletter-seen', 'true')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      localStorage.setItem('newsletter-seen', 'true')
    }
    setShow(false)
    alert('Grazie! Riceverai le nostre offerte esclusive.')
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 hover:opacity-70">
              <X className="w-6 h-6" />
            </button>
            <Mail className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Sconto Esclusivo 15%</h3>
            <p className="text-muted-foreground mb-6">
              Iscriviti alla newsletter e ricevi 15% di sconto sul primo soggiorno
            </p>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="La tua email" 
                required
                className="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full" size="lg" type="submit">Ricevi lo Sconto</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              No spam. Cancellazione in 1 click.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
