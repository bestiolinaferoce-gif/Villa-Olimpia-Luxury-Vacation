"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Route, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"

/**
 * Mappa digitale moderna per la pagina Location.
 * Non mostra la posizione esatta della villa; rappresenta la zona (Capo Rizzuto / Costa)
 * in modo chiaro e professionale, senza finestre sovrapposte.
 * Un solo CTA per le indicazioni.
 */
export function LocationMapModern() {
  const openMaps = () => {
    if (typeof window !== "undefined") {
      window.open(VILLA_OLIMPIA_LOCATION.coordinates.googleMaps, "_blank", "noopener,noreferrer")
    }
  }

  const openDirections = () => {
    if (typeof window !== "undefined") {
      window.open(VILLA_OLIMPIA_LOCATION.coordinates.directions, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <MapPin className="h-5 w-5 text-primary" aria-hidden />
          Dove siamo
        </CardTitle>
        <CardDescription>
          Capo Rizzuto · Spiaggia dei Gigli · Area Marina Protetta
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {/* Area mappa stilizzata: zona costiera, nessun pin esatto — design colorato e professionale */}
        <div className="relative w-full aspect-[16/10] min-h-[280px] overflow-hidden rounded-b-none">
          {/* Sfondo mare e cielo (gradient colorato) */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-[#0ea5e9] to-[#0284c7]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-transparent to-transparent opacity-80" />
          {/* Pattern onde leggero */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="waves-modern" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10 Q10 5 20 10 T40 10" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves-modern)" />
            </svg>
          </div>
          {/* Costa stilizzata (verde/terra) */}
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="coast-modern" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#15803d" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,140 Q100,100 200,120 T400,100 L400,200 L0,200 Z"
              fill="url(#coast-modern)"
            />
          </svg>
          {/* Testo zona (chiaro, senza coordinate) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center px-4">
              <p className="text-white font-semibold text-xl drop-shadow-lg">
                Isola di Capo Rizzuto
              </p>
              <p className="text-white/90 text-sm mt-1">
                Costa ionica · Area Marina Protetta
              </p>
            </div>
          </div>
          {/* CTA in basso (un solo pulsante in evidenza) */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-auto">
            <Button
              size="sm"
              className="bg-white text-primary hover:bg-white/95 shadow-xl font-semibold"
              onClick={openDirections}
            >
              <Route className="mr-2 h-4 w-4" />
              Ottieni indicazioni
            </Button>
          </div>
        </div>

        {/* Blocco indirizzo e CTA: tutto in flusso, nessun popup */}
        <div className="p-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-sm font-semibold text-slate-700 mb-1">Indirizzo</p>
            <p className="text-slate-600 text-sm">
              {VILLA_OLIMPIA_LOCATION.address.fullAddress}
            </p>
            <ul className="mt-2 space-y-0.5 text-xs text-slate-500">
              <li>· Spiaggia dei Gigli: {VILLA_OLIMPIA_LOCATION.distances.spiaggia}</li>
              <li>· Le Castella: {VILLA_OLIMPIA_LOCATION.distances.leCastella}</li>
              <li>· Centro: {VILLA_OLIMPIA_LOCATION.distances.centroStorico}</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={openDirections}
            >
              <Route className="mr-2 h-4 w-4" />
              Indicazioni stradali
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={openMaps}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Apri in Google Maps
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
