"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Navigation, 
  Plane, 
  Train, 
  Car, 
  MapPin, 
  X, 
  ExternalLink, 
  Route, 
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"

interface Airline {
  name: string
  url: string
}

interface Airport {
  name: string
  code: string
  distance: number
  driveTime: number
  website: string
  flightSearch: string
  airlines: Airline[]
}

interface TrainStation {
  name: string
  distance: number
  driveTime: number
  website?: string
}

const AIRPORTS: Airport[] = [
  {
    name: "Aeroporto di Crotone",
    code: "CRV",
    distance: 20,
    driveTime: 25,
    website: "https://sacal.it/it/crotone/",
    flightSearch: "https://www.google.com/flights?q=flights+to+Crotone",
    airlines: [
      { name: "Ryanair", url: "https://www.ryanair.com/it/it" },
      { name: "SkyAlps", url: "https://www.skyalps.com/it" },
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
      { name: "Ryanair", url: "https://www.ryanair.com/it/it" },
      { name: "ITA Airways", url: "https://www.itaspa.com/it-it" },
      { name: "EasyJet", url: "https://www.easyjet.com/it" },
      { name: "Wizz Air", url: "https://wizzair.com/it-it" },
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
      { name: "Ryanair", url: "https://www.ryanair.com/it/it" },
      { name: "ITA Airways", url: "https://www.itaspa.com/it-it" },
      { name: "EasyJet", url: "https://www.easyjet.com/it" },
    ],
  },
]

const TRAIN_STATIONS: TrainStation[] = [
  {
    name: "Stazione di Crotone",
    distance: 15,
    driveTime: 20,
    website: "https://www.trenitalia.com",
  },
]

const formatDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
}

export function HowToReachUs() {
  const [isOpen, setIsOpen] = useState(false)

  const openGoogleMaps = () => {
    if (typeof window !== 'undefined') {
      window.open(
        VILLA_OLIMPIA_LOCATION.coordinates.googleMaps,
        "_blank",
        "noopener,noreferrer"
      )
    }
  }

  const openDirections = () => {
    if (typeof window !== 'undefined') {
      window.open(
        VILLA_OLIMPIA_LOCATION.coordinates.directions,
        "_blank",
        "noopener,noreferrer"
      )
    }
  }

  return (
    <>
      {/* Pulsante Principale - Ultra Moderno e Colorato */}
      <div className="w-full">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full relative overflow-hidden group"
        >
          {/* Background Gradient Animato */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-ocean to-primary rounded-2xl animate-shimmer" />
          
          {/* Contenuto */}
          <div className="relative z-10 flex items-center justify-between p-6 md:p-8 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4 md:gap-6">
              {/* Icona Animata */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/40">
                  <Navigation className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </motion.div>
              
              {/* Testo */}
              <div className="text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-white mb-1 drop-shadow-lg">
                  Come Raggiungerci
                </h3>
                <p className="text-sm md:text-base text-white/90 drop-shadow-md">
                  Scopri tutti i modi per raggiungere Villa Olimpia
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs md:text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <Plane className="w-4 h-4" />
                    Aereo
                  </span>
                  <span className="flex items-center gap-1">
                    <Train className="w-4 h-4" />
                    Treno
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" />
                    Auto
                  </span>
                </div>
              </div>
            </div>
            
            {/* Freccia */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* Modal Ultra Moderno */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop con Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content - Posizionamento e Overflow Corretti */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-4 left-4 right-4 bottom-4 md:top-1/2 md:left-1/2 md:right-auto md:bottom-auto md:-translate-x-1/2 md:-translate-y-1/2 z-[110] md:max-w-5xl md:w-[90vw] md:max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Gradient */}
              <div className="sticky top-0 z-20 bg-gradient-to-r from-primary via-ocean to-primary p-6 md:p-8 rounded-t-3xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white">
                      Come Raggiungere Villa Olimpia
                    </h2>
                    <p className="text-sm md:text-base text-white/90 mt-1">
                      {VILLA_OLIMPIA_LOCATION.address.fullAddress}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content - Scrollabile con padding corretto */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {/* In Auto */}
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-ocean/10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <Car className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl md:text-2xl">In Auto</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground">
                      Villa Olimpia è facilmente raggiungibile in auto. Parcheggio gratuito incluso per tutti gli ospiti.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={openDirections}
                        className="flex-1 bg-primary hover:bg-primary/90 text-white"
                        size="lg"
                      >
                        <Route className="mr-2 h-5 w-5" />
                        Ottieni Indicazioni
                      </Button>
                      <Button
                        onClick={openGoogleMaps}
                        variant="outline"
                        className="flex-1"
                        size="lg"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Apri Google Maps
                      </Button>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <p className="text-sm font-semibold text-foreground mb-2">📍 Indirizzo Completo</p>
                      <p className="text-sm text-muted-foreground">{VILLA_OLIMPIA_LOCATION.address.fullAddress}</p>
                      <p className="text-xs text-muted-foreground mt-2 font-mono">
                        GPS: {VILLA_OLIMPIA_LOCATION.coordinates.latitude}, {VILLA_OLIMPIA_LOCATION.coordinates.longitude}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* In Aereo */}
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-ocean/10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-ocean rounded-xl flex items-center justify-center">
                        <Plane className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl md:text-2xl">In Aereo</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {AIRPORTS.map((airport, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-5 rounded-xl border-2 border-gray-200 hover:border-primary/40 bg-gradient-to-r from-white to-primary/5 transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3 className="text-lg md:text-xl font-bold text-foreground break-words">{airport.name}</h3>
                              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                {airport.code}
                              </span>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2 flex-wrap">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span className="break-words">{airport.distance} km da Villa Olimpia</span>
                              </p>
                              <p className="flex items-center gap-2 flex-wrap">
                                <Clock className="w-4 h-4 flex-shrink-0" />
                                <span className="break-words">{formatDuration(airport.driveTime)} in auto</span>
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 flex-shrink-0">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  window.open(airport.website, "_blank")
                                }
                              }}
                              className="text-xs whitespace-nowrap"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Sito Aeroporto
                            </Button>
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90 text-white text-xs whitespace-nowrap"
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  window.open(airport.flightSearch, "_blank")
                                }
                              }}
                            >
                              <Plane className="h-3 w-3 mr-1" />
                              Cerca Voli
                            </Button>
                          </div>
                        </div>
                        
                        {/* Compagnie Aeree */}
                        {airport.airlines && airport.airlines.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Compagnie Aeree Operanti:
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
                                  className="text-xs h-8 px-3 bg-white hover:bg-primary/5 hover:border-primary/30 whitespace-nowrap"
                                >
                                  <span className="truncate max-w-[120px]">{airline.name}</span>
                                  <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* In Treno */}
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-ocean/10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                        <Train className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl md:text-2xl">In Treno</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {TRAIN_STATIONS.map((station, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-5 rounded-xl border-2 border-gray-200 hover:border-primary/40 bg-gradient-to-r from-white to-primary/5 transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 break-words">{station.name}</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2 flex-wrap">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span className="break-words">{station.distance} km da Villa Olimpia</span>
                              </p>
                              <p className="flex items-center gap-2 flex-wrap">
                                <Clock className="w-4 h-4 flex-shrink-0" />
                                <span className="break-words">{formatDuration(station.driveTime)} in auto</span>
                              </p>
                            </div>
                          </div>
                          {station.website && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  window.open(station.website, "_blank")
                                }
                              }}
                              className="text-xs whitespace-nowrap flex-shrink-0"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Trenitalia
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    ))}
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

