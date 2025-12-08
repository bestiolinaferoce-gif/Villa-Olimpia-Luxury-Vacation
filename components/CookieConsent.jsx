"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Placeholder tracking functions
function enableTracking() {
  // Placeholder for analytics/marketing scripts
  // Google Analytics ID: G-XXXXXXXXXX
  // Meta Pixel ID: 000000000000000
  if (process.env.NODE_ENV === "development") {
    console.log("Tracking enabled")
  }
}

function disableTracking() {
  // Remove scripts and prevent tracking
  if (process.env.NODE_ENV === "development") {
    console.log("Tracking disabled")
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
      {/* Cookie Banner - Minimal Elegant Design */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 overflow-hidden"
          >
            <div className="p-3 md:p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Utilizziamo i cookie per migliorare la tua esperienza.{" "}
                    <a
                      href="/cookie-policy"
                      className="text-primary hover:underline font-medium"
                    >
                      Cookie Policy
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto sm:ml-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleReject}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Rifiuta
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCustomize}
                    className="px-3 py-1.5 rounded-md text-xs font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
                  >
                    Personalizza
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAccept}
                    className="px-4 py-1.5 rounded-md text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-colors whitespace-nowrap shadow-sm"
                  >
                    Accetta
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Customize Modal - Minimal Elegant Design */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full border border-gray-200"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
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

              <p className="text-xs text-gray-600 mb-4">
                Scegli quali tipi di cookie accettare.
              </p>

              <div className="space-y-3 mb-4">
                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-md p-3 bg-gray-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <h3 className="text-xs font-semibold text-gray-900 mb-0.5">
                        Cookie Funzionali
                      </h3>
                      <p className="text-xs text-gray-600">
                        Necessari per il funzionamento.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="relative inline-block w-9 h-5 bg-primary rounded-full opacity-60 cursor-not-allowed">
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <h3 className="text-xs font-semibold text-gray-900 mb-0.5">
                        Cookie Analitici
                      </h3>
                      <p className="text-xs text-gray-600">
                        Analisi anonima del traffico.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`relative inline-block w-9 h-5 rounded-full transition-colors duration-200 ${
                          cookiePreferences.analytics
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                        aria-label="Toggle Analytics Cookies"
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                            cookiePreferences.analytics
                              ? "translate-x-4"
                              : "translate-x-0.5"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <h3 className="text-xs font-semibold text-gray-900 mb-0.5">
                        Cookie di Marketing
                      </h3>
                      <p className="text-xs text-gray-600">
                        Pubblicità personalizzata.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`relative inline-block w-9 h-5 rounded-full transition-colors duration-200 ${
                          cookiePreferences.marketing
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                        aria-label="Toggle Marketing Cookies"
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                            cookiePreferences.marketing
                              ? "translate-x-4"
                              : "translate-x-0.5"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-3 border-t border-gray-100">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1.5 rounded-md text-xs font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Annulla
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Salva
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

