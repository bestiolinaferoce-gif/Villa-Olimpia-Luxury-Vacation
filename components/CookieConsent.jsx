"use client"

import { useState, useEffect } from "react"

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
      {/* Cookie Banner - Elegant Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-sm">
        <div className="max-w-[900px] mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-sm md:text-base text-gray-700 flex-1 text-center sm:text-left">
              Questo sito usa cookie per migliorare l&apos;esperienza.{" "}
              <a
                href="/cookie-policy"
                className="text-[#1e3a8a] hover:underline font-medium"
              >
                Cookie Policy
              </a>
            </p>
            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              <button
                onClick={handleCustomize}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 whitespace-nowrap"
              >
                Preferenze
              </button>
              <button
                onClick={handleReject}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 whitespace-nowrap"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-[#1e3a8a] text-white hover:bg-[#1e40af] transition-all duration-200 whitespace-nowrap"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </div>

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

