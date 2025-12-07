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
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Utilizziamo i cookie
                </h3>
                <p className="text-sm text-muted-foreground">
                  Utilizziamo cookie per migliorare la tua esperienza, analizzare il
                  traffico e personalizzare i contenuti. Puoi accettare tutti i cookie,
                  rifiutarli o personalizzare le tue preferenze.
                </p>
                <a
                  href="/cookie-policy"
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  Scopri di più nella nostra Cookie Policy
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors whitespace-nowrap"
                >
                  Rifiuta
                </button>
                <button
                  onClick={handleCustomize}
                  className="px-4 py-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
                >
                  Personalizza
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Accetta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customize Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Personalizza i Cookie
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
                  aria-label="Chiudi"
                >
                  <svg
                    className="w-6 h-6"
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

              <p className="text-muted-foreground mb-6">
                Scegli quali tipi di cookie vuoi accettare. Puoi modificare queste
                preferenze in qualsiasi momento.
              </p>

              <div className="space-y-6 mb-8">
                {/* Functional Cookies */}
                <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Cookie Funzionali
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Necessari per il funzionamento del sito. Non possono essere
                        disabilitati.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="relative inline-block w-12 h-6 bg-primary rounded-full opacity-50 cursor-not-allowed">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Cookie Analitici
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Ci aiutano a capire come i visitatori interagiscono con il sito
                        web raccogliendo informazioni in forma anonima.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                          cookiePreferences.analytics
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                        aria-label="Toggle Analytics Cookies"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            cookiePreferences.analytics
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Cookie di Marketing
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Utilizzati per tracciare i visitatori attraverso i siti web per
                        mostrare annunci pertinenti e coinvolgenti.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                          cookiePreferences.marketing
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                        aria-label="Toggle Marketing Cookies"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            cookiePreferences.marketing
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Annulla
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
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

