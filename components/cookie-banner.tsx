"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro
                sito. Continuando a navigare, accetti il nostro utilizzo dei
                cookie.{" "}
                <a
                  href="/cookie"
                  className="text-primary hover:underline"
                >
                  Maggiori informazioni
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
              >
                Rifiuta
              </Button>
              <Button variant="default" size="sm" onClick={handleAccept}>
                Accetta
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}


