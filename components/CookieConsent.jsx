"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Placeholder tracking functions
function enableTracking() {
  // Placeholder for analytics/marketing scripts
  // Google Analytics ID: G-XXXXXXXXXX
  // Meta Pixel ID: 000000000000000
  if (process.env.NODE_ENV === "development") {
    // console.log("Tracking enabled") // Rimosso per produzione
  }
}

function disableTracking() {
  // Remove scripts and prevent tracking
  if (process.env.NODE_ENV === "development") {
    // console.log("Tracking disabled") // Rimosso per produzione
  }
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Solo nel browser
    if (typeof window === 'undefined') return
    
    // Check if consent has been given
    try {
      const consent = localStorage.getItem("cookieConsent")
      if (!consent) {
        setShowBanner(true)
      } else {
        // Load saved preferences
        try {
          const savedPrefs = JSON.parse(consent)
          if (savedPrefs.preferences) {
            setCookiePreferences(savedPrefs.preferences)
            applyTrackingPreferences(savedPrefs.preferences)
          } else if (savedPrefs === "accepted") {
            // Legacy: all cookies accepted
            setCookiePreferences({ analytics: true, marketing: true, functional: true })
            enableTracking()
          }
        } catch (e) {
          // Invalid stored data, show banner again
          setShowBanner(true)
        }
      }
    } catch (e) {
      // localStorage non disponibile, mostra banner
      setShowBanner(true)
    }
  }, [])

  const applyTrackingPreferences = (prefs) => {
    if (prefs.analytics || prefs.marketing) {
      enableTracking()
    } else {
      disableTracking()
    }
  }

  const handleAccept = () => {
    const allAccepted = {
      analytics: true,
      marketing: true,
      functional: true,
    }
    setCookiePreferences(allAccepted)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem("cookieConsent", JSON.stringify({ preferences: allAccepted }))
      } catch (e) {
        // localStorage non disponibile
      }
    }
    setShowBanner(false)
    enableTracking()
  }

  const handleReject = () => {
    const allRejected = {
      analytics: false,
      marketing: false,
      functional: false,
    }
    setCookiePreferences(allRejected)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem("cookieConsent", JSON.stringify({ preferences: allRejected }))
      } catch (e) {
        // localStorage non disponibile
      }
    }
    setShowBanner(false)
    disableTracking()
  }

  const handleCustomize = () => {
    setShowModal(true)
  }

  const handleSavePreferences = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(
          "cookieConsent",
          JSON.stringify({ preferences: cookiePreferences })
        )
      } catch (e) {
        // localStorage non disponibile
      }
    }
    setShowBanner(false)
    setShowModal(false)
    applyTrackingPreferences(cookiePreferences)
  }

  const togglePreference = (type) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner - Ultra Minimal & Elegant Design */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-4 right-4 z-50 max-w-sm"
      >
        <motion.div
          className="bg-white/98 backdrop-blur-md rounded-xl shadow-xl border-2 border-primary/20 overflow-hidden"
          whileHover={{ borderColor: "hsl(var(--primary) / 0.4)", scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-3.5">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-600 leading-snug">
                  Utilizziamo cookie per migliorare la tua esperienza.{" "}
                  <a
                    href="/cookie-policy"
                    className="text-primary hover:underline font-medium text-[11px]"
                  >
                    Scopri di più
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReject}
                className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all border border-gray-200/50 flex-1"
              >
                Rifiuta
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCustomize}
                className="px-3 py-1.5 rounded-lg text-[11px] font-medium border border-primary/30 bg-white text-primary hover:bg-primary/5 transition-all flex-1"
              >
                Personalizza
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px hsl(var(--primary) / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="px-4 py-1.5 rounded-lg text-[11px] font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm flex-1"
              >
                Accetta
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Customize Modal - Ultra Minimal & Elegant Design */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-sm w-full border-2 border-primary/20"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-900">
                  Preferenze Cookie
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
                  aria-label="Chiudi"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-[11px] text-gray-500 mb-3">
                Scegli quali cookie accettare.
              </p>

              <div className="space-y-2 mb-3">
                {/* Functional Cookies */}
                <div className="border border-gray-200/60 rounded-lg p-2.5 bg-gray-50/30">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-2">
                      <h3 className="text-[11px] font-semibold text-gray-900 mb-0.5">
                        Funzionali
                      </h3>
                      <p className="text-[10px] text-gray-500">
                        Sempre attivi
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="relative inline-block w-8 h-4 bg-primary/40 rounded-full cursor-not-allowed">
                        <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200/60 rounded-lg p-2.5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-2">
                      <h3 className="text-[11px] font-semibold text-gray-900 mb-0.5">
                        Analitici
                      </h3>
                      <p className="text-[10px] text-gray-500">
                        Statistiche anonime
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => togglePreference("analytics")}
                        className={`relative inline-block w-8 h-4 rounded-full transition-colors duration-200 ${
                          cookiePreferences.analytics
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                        aria-label="Toggle Analytics Cookies"
                      >
                        <motion.div
                          animate={{
                            x: cookiePreferences.analytics ? 16 : 2,
                          }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"
                        ></motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200/60 rounded-lg p-2.5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-2">
                      <h3 className="text-[11px] font-semibold text-gray-900 mb-0.5">
                        Marketing
                      </h3>
                      <p className="text-[10px] text-gray-500">
                        Pubblicità personalizzata
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => togglePreference("marketing")}
                        className={`relative inline-block w-8 h-4 rounded-full transition-colors duration-200 ${
                          cookiePreferences.marketing
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                        aria-label="Toggle Marketing Cookies"
                      >
                        <motion.div
                          animate={{
                            x: cookiePreferences.marketing ? 16 : 2,
                          }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"
                        ></motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-3 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Annulla
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 4px 12px hsl(var(--primary) / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSavePreferences}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
                >
                  Salva
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

