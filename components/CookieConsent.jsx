"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Placeholder tracking functions
function enableTracking() {
  // Placeholder for analytics/marketing scripts
  // Google Analytics ID: G-XXXXXXXXXX
  // Meta Pixel ID: 000000000000000
  console.log("Tracking enabled")
}

function disableTracking() {
  // Remove scripts and prevent tracking
  console.log("Tracking disabled")
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
    // Check if consent has been given
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
    localStorage.setItem("cookieConsent", JSON.stringify({ preferences: allAccepted }))
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
    localStorage.setItem("cookieConsent", JSON.stringify({ preferences: allRejected }))
    setShowBanner(false)
    disableTracking()
  }

  const handleCustomize = () => {
    setShowModal(true)
  }

  const handleSavePreferences = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ preferences: cookiePreferences })
    )
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
      {/* Cookie Banner - Interactive Premium Design */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-2xl border-2 border-primary/20 backdrop-blur-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary/10 via-ocean/5 to-primary/10 p-4 md:p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-sm md:text-base font-medium text-gray-900 mb-1">
                        Utilizziamo i cookie per migliorare la tua esperienza
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Continuando a navigare, accetti la nostra{" "}
                        <a
                          href="/cookie-policy"
                          className="text-primary hover:underline font-medium"
                        >
                          Cookie Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReject}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
                  >
                    Rifiuta
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCustomize}
                    className="px-4 py-2 rounded-xl text-sm font-semibold border-2 border-primary/30 bg-white text-gray-700 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
                  >
                    Personalizza
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,119,190,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAccept}
                    className="px-5 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-primary to-ocean text-white hover:from-primary/90 hover:to-ocean/90 transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg"
                  >
                    Accetta
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Customize Modal - Elegant Minimal Design */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-gray-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  Preferenze Cookie
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
                  aria-label="Chiudi"
                >
                  <svg
                    className="w-5 h-5"
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

              <p className="text-sm text-gray-600 mb-6">
                Scegli quali tipi di cookie accettare. Puoi modificare queste preferenze in qualsiasi momento.
              </p>

              <div className="space-y-4 mb-6">
                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Cookie Funzionali
                      </h3>
                      <p className="text-xs text-gray-600">
                        Necessari per il funzionamento del sito.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="relative inline-block w-10 h-5 bg-[#1e3a8a] rounded-full opacity-60 cursor-not-allowed">
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Cookie Analitici
                      </h3>
                      <p className="text-xs text-gray-600">
                        Analisi anonima del traffico e comportamento utenti.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`relative inline-block w-10 h-5 rounded-full transition-colors duration-200 ${
                          cookiePreferences.analytics
                            ? "bg-[#1e3a8a]"
                            : "bg-gray-300"
                        }`}
                        aria-label="Toggle Analytics Cookies"
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                            cookiePreferences.analytics
                              ? "translate-x-5"
                              : "translate-x-0.5"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Cookie di Marketing
                      </h3>
                      <p className="text-xs text-gray-600">
                        Pubblicità personalizzata e tracciamento conversioni.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`relative inline-block w-10 h-5 rounded-full transition-colors duration-200 ${
                          cookiePreferences.marketing
                            ? "bg-[#1e3a8a]"
                            : "bg-gray-300"
                        }`}
                        aria-label="Toggle Marketing Cookies"
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                            cookiePreferences.marketing
                              ? "translate-x-5"
                              : "translate-x-0.5"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Annulla
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-[#1e3a8a] text-white hover:bg-[#1e40af] transition-colors"
                >
                  Salva Preferenze
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

