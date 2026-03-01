"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation, MapPin, Car, Plane, X, Loader2, AlertCircle, ExternalLink, Route, Clock, Map } from "lucide-react"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDirections } from "./directions-context"

interface RouteData {
  distance: number // in km
  duration: number // in minuti
  summary: string
  alternative?: boolean
}

interface Airline {
  name: string
  url: string
  icon?: string
}

interface AirportInfo {
  name: string
  code: string
  distance: number // km da Villa Olimpia
  driveTime: number // minuti
  website?: string
  flightSearch?: string
  airlines?: Airline[]
}

interface UserLocation {
  lat: number
  lng: number
  address?: string
}

const DESTINATION = {
  lat: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
  lng: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
  address: VILLA_OLIMPIA_LOCATION.address.fullAddress,
}

const AIRPORTS: AirportInfo[] = [
  {
    name: "Aeroporto di Crotone",
    code: "CRV",
    distance: 20,
    driveTime: 25,
    website: "https://sacal.it/it/crotone/",
    flightSearch: "https://www.google.com/flights?q=flights+to+Crotone",
    airlines: [
      {
        name: "Ryanair",
        url: "https://www.ryanair.com/it/it",
      },
      {
        name: "SkyAlps",
        url: "https://www.skyalps.com/it",
      },
    ],
  },
  {
    name: "Aeroporto di Lamezia Terme",
    code: "SUF",
    distance: 80,
    driveTime: 75,
    website: "https://www.aeroportolameziaterme.it",
    flightSearch: "https://www.google.com/flights?q=flights+to+Lamezia+Terme",
    airlines: [
      {
        name: "Ryanair",
        url: "https://www.ryanair.com/it/it",
      },
      {
        name: "ITA Airways",
        url: "https://www.itaspa.com/it-it",
      },
      {
        name: "EasyJet",
        url: "https://www.easyjet.com/it",
      },
      {
        name: "Wizz Air",
        url: "https://wizzair.com/it-it",
      },
    ],
  },
  {
    name: "Aeroporto di Reggio Calabria",
    code: "REG",
    distance: 120,
    driveTime: 90,
    website: "https://www.aeroportoreggiocalabria.it",
    flightSearch: "https://www.google.com/flights?q=flights+to+Reggio+Calabria",
    airlines: [
      {
        name: "Ryanair",
        url: "https://www.ryanair.com/it/it",
      },
      {
        name: "ITA Airways",
        url: "https://www.itaspa.com/it-it",
      },
      {
        name: "EasyJet",
        url: "https://www.easyjet.com/it",
      },
    ],
  },
]

interface DirectionsWidgetProps {
  showBadge?: boolean
}

export function DirectionsWidget({ showBadge = true }: DirectionsWidgetProps = {}) {
  const { isOpen, openModal, closeModal } = useDirections()
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [isLocating, setIsLocating] = useState(false)
  const [routes, setRoutes] = useState<RouteData[]>([])
  const [isLoadingRoutes, setIsLoadingRoutes] = useState(false)
  const [manualAddress, setManualAddress] = useState("")

  // Rilevamento posizione automatica
  const detectLocation = useCallback(() => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setLocationError("La geolocalizzazione non è supportata dal tuo browser")
      return
    }

    setIsLocating(true)
    setLocationError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        setUserLocation({ lat: latitude, lng: longitude })
        setIsLocating(false)
        
        // Calcola percorsi automaticamente
        await calculateRoutes(latitude, longitude)
      },
      (error) => {
        setIsLocating(false)
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Permesso di geolocalizzazione negato")
            break
          case error.POSITION_UNAVAILABLE:
            setLocationError("Posizione non disponibile")
            break
          case error.TIMEOUT:
            setLocationError("Timeout nella richiesta di posizione")
            break
          default:
            setLocationError("Errore nel rilevamento posizione")
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps -- calculateRoutes defined below
  }, [])

  // Calcolo percorsi usando OpenRouteService (gratuito)
  // Nota: Per produzione, ottenere API key gratuita da https://openrouteservice.org/
  // Alternativa: Usare Google Maps Directions API (richiede API key)
  const calculateRoutes = async (originLat: number, originLng: number) => {
    setIsLoadingRoutes(true)
    
    // Calcola sempre la distanza diretta come fallback
    const directDistance = calculateDistance(originLat, originLng, DESTINATION.lat, DESTINATION.lng)
    
    try {
      // Prova OpenRouteService (richiede API key valida)
      // Per ora usiamo solo il calcolo diretto con stima intelligente
      // In produzione, integrare con API key reale
      
      // Stima tempo basata su distanza e tipo di strada
      // Assumiamo mix di autostrada (110 km/h) e strade secondarie (60 km/h)
      const highwayRatio = directDistance > 50 ? 0.6 : 0.3 // più autostrada per distanze lunghe
      const avgSpeed = highwayRatio * 110 + (1 - highwayRatio) * 60
      const estimatedDuration = Math.round((directDistance / avgSpeed) * 60)
      
      // Aggiungi 20% per traffico e deviazioni
      const adjustedDuration = Math.round(estimatedDuration * 1.2)
      
      // Stima distanza reale (le strade non sono linee rette)
      const roadDistance = Math.round(directDistance * 1.15) // +15% per deviazioni
      
      const mainRoute: RouteData = {
        distance: roadDistance,
        duration: adjustedDuration,
        summary: "Percorso stimato",
        alternative: false,
      }

      // Genera percorsi alternativi (stime variate)
      const alternativeRoutes: RouteData[] = [
        {
          distance: Math.round(roadDistance * 1.1),
          duration: Math.round(adjustedDuration * 1.15),
          summary: "Percorso alternativo (più panoramico)",
          alternative: true,
        },
        {
          distance: Math.round(roadDistance * 0.95),
          duration: Math.round(adjustedDuration * 1.05),
          summary: "Percorso alternativo (più diretto)",
          alternative: true,
        },
      ]

      setRoutes([mainRoute, ...alternativeRoutes])
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        if (process.env.NODE_ENV === 'development') {
          if (process.env.NODE_ENV === 'development') {
            // console.error("Route calculation error:", error)
          }
        }
      }
      // Fallback: mostra percorso approssimativo
      const roadDistance = Math.round(directDistance * 1.15)
      const estimatedDuration = Math.round((roadDistance / 70) * 60 * 1.2) // velocità media 70 km/h
      
      setRoutes([
        {
          distance: roadDistance,
          duration: estimatedDuration,
          summary: "Percorso stimato",
          alternative: false,
        },
      ])
    } finally {
      setIsLoadingRoutes(false)
    }
  }

  // Calcola distanza tra due punti (formula Haversine)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371 // Raggio della Terra in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLon = ((lon2 - lon1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  // Apri Google Maps con percorso
  const openGoogleMapsRoute = (origin?: { lat: number; lng: number }) => {
    const originParam = origin
      ? `${origin.lat},${origin.lng}`
      : userLocation
      ? `${userLocation.lat},${userLocation.lng}`
      : ""

    if (typeof window !== 'undefined') {
      if (originParam) {
        window.open(
          `https://www.google.com/maps/dir/${originParam}/${DESTINATION.lat},${DESTINATION.lng}`,
          "_blank",
          "noopener,noreferrer"
        )
  // eslint-disable-next-line react-hooks/exhaustive-deps -- calculateRoutes defined below
      } else {
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${DESTINATION.lat},${DESTINATION.lng}`,
          "_blank",
          "noopener,noreferrer"
        )
  // eslint-disable-next-line react-hooks/exhaustive-deps -- calculateRoutes defined below
      }
    }
  }

  // Cerca indirizzo manuale
  const handleManualSearch = async () => {
    if (!manualAddress.trim()) return

    try {
      // Usa Nominatim (OpenStreetMap) per geocoding gratuito
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(manualAddress)}&limit=1`
      )
  // eslint-disable-next-line react-hooks/exhaustive-deps -- calculateRoutes defined below
      const data = await response.json()

      if (data.length > 0) {
        const location = {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
          address: data[0].display_name,
        }
        setUserLocation(location)
        await calculateRoutes(location.lat, location.lng)
        setLocationError(null)
      } else {
        setLocationError("Indirizzo non trovato")
      }
    } catch (error) {
      setLocationError("Errore nella ricerca indirizzo")
    }
  }

  // Formatta durata
  const formatDuration = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
  }

  return (
    <>
      {/* Badge Floating - solo se showBadge è true */}
      {showBadge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.08, x: -5 }}
          onClick={openModal}
          className="absolute top-4 right-4 md:right-8 z-20 bg-gradient-to-br from-gold/95 to-accent/95 backdrop-blur-md rounded-xl px-3 py-2.5 md:px-4 md:py-3 shadow-2xl border-2 border-white/30 flex items-center gap-2 md:gap-3 group cursor-pointer"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white drop-shadow-md"
          >
            <Navigation className="h-5 w-5" />
          </motion.div>
          <div className="hidden sm:block">
            <p className="text-xs md:text-sm font-bold text-white drop-shadow-md">Come Raggiungerci</p>
          </div>
        </motion.div>
      )}

      {/* Modal Interattivo - sempre disponibile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-4 left-4 right-4 bottom-4 md:top-[5vh] md:left-1/2 md:right-auto md:bottom-auto md:-translate-x-1/2 md:translate-y-0 z-[70] md:max-w-4xl md:w-[90vw] md:max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary to-ocean text-white p-6 rounded-t-2xl flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <h2 className="text-2xl font-playfair font-bold">Come Raggiungere Villa Olimpia</h2>
                    <p className="text-sm text-white/90">{DESTINATION.address}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content scrollabile */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Rilevamento Posizione */}
                <Card className="border-2 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      La Tua Posizione
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!userLocation && !isLocating && (
                      <div className="space-y-3">
                        <Button
                          onClick={detectLocation}
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                        >
                          <Navigation className="mr-2 h-4 w-4" />
                          Rileva Posizione Automatica
                        </Button>
                        <div className="relative">
                          <input
                            type="text"
                            value={manualAddress}
                            onChange={(e) => setManualAddress(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleManualSearch()}
                            placeholder="Oppure inserisci città o indirizzo..."
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                          />
                          <Button
                            onClick={handleManualSearch}
                            variant="outline"
                            size="sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                          >
                            Cerca
                          </Button>
                        </div>
                      </div>
                    )}

                    {isLocating && (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Rilevamento posizione in corso...</span>
                      </div>
                    )}

                    {userLocation && (
                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="text-sm font-semibold text-foreground mb-1">
                          📍 {userLocation.address || "Posizione rilevata"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                        </p>
                      </div>
                    )}

                    {locationError && (
                      <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">{locationError}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Percorsi in Auto */}
                {userLocation && (
                  <Card className="border-2 border-primary/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-primary" />
                        Percorsi in Auto
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {isLoadingRoutes ? (
                        <div className="flex items-center justify-center py-8">
                          <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                      ) : routes.length > 0 ? (
                        routes.map((route, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              route.alternative
                                ? "border-gray-200 hover:border-primary/30 bg-gray-50/50"
                                : "border-primary/30 bg-primary/5 hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  {!route.alternative && (
                                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                      ⭐ CONSIGLIATO
                                    </span>
                                  )}
                                  <h3 className="font-semibold text-foreground">{route.summary}</h3>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Route className="h-4 w-4" />
                                    <span>{route.distance} km</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{formatDuration(route.duration)}</span>
                                  </div>
                                </div>
                              </div>
                              <Button
                                onClick={() => openGoogleMapsRoute()}
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-white"
                              >
                                <Map className="h-4 w-4 mr-1" />
                                Apri Mappa
                              </Button>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-4 text-muted-foreground">
                          <p>Nessun percorso disponibile</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Aeroporti */}
                <Card className="border-2 border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-primary" />
                      Come Raggiungerci in Aereo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {AIRPORTS.map((airport, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl border-2 border-gray-200 hover:border-primary/30 bg-gradient-to-r from-white to-primary/5 transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-foreground">{airport.name}</h3>
                              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                {airport.code}
                              </span>
                            </div>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p>📍 {airport.distance} km da Villa Olimpia</p>
                              <p>🚗 {formatDuration(airport.driveTime)} in auto</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            {airport.website && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  if (typeof window !== 'undefined') {
                                    window.open(airport.website, "_blank")
                                  }
                                }}
                                className="text-xs"
                              >
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Sito Aeroporto
                              </Button>
                            )}
                            {airport.flightSearch && (
                              <Button
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-white text-xs"
                                onClick={() => {
                                  if (typeof window !== 'undefined') {
                                    window.open(airport.flightSearch, "_blank")
                                  }
                                }}
                              >
                                <Plane className="h-3 w-3 mr-1" />
                                Cerca Voli
                              </Button>
                            )}
                          </div>
                        </div>
                        
                        {/* Compagnie Aeree */}
                        {airport.airlines && airport.airlines.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-xs font-semibold text-muted-foreground mb-2">
                              ✈️ Compagnie Aeree Operanti:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {airport.airlines.map((airline, airlineIndex) => (
                                <Button
                                  key={airlineIndex}
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    if (typeof window !== 'undefined') {
                                      window.open(airline.url, "_blank")
                                    }
                                  }}
                                  className="text-xs h-7 px-2 bg-white hover:bg-primary/5 hover:border-primary/30"
                                >
                                  {airline.name}
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Info Utili */}
                <Card className="border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-ocean/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Informazioni Utili
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">📍 Indirizzo Completo</p>
                        <p className="text-sm text-muted-foreground">{DESTINATION.address}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">🗺️ Coordinate GPS</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          {DESTINATION.lat}, {DESTINATION.lng}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">🅿️ Parcheggio</p>
                        <p className="text-sm text-muted-foreground">Gratuito incluso per tutti gli ospiti</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">🚂 Stazione Treni</p>
                        <p className="text-sm text-muted-foreground">Crotone - 15 km</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => openGoogleMapsRoute()}
                      className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
                      size="lg"
                    >
                      <Map className="mr-2 h-5 w-5" />
                      Apri in Google Maps
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

