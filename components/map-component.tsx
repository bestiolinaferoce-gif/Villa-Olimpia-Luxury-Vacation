"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Route } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"

export function MapComponent() {
  // Placeholder per integrazione Google Maps o Mapbox
  // In produzione, sostituire con componente reale
  
  const handleOpenMaps = () => {
    // Apri Google Maps con ricerca Villa Olimpia Capopiccolo
    window.open(
      VILLA_OLIMPIA_LOCATION.coordinates.googleMaps,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const handleGetDirections = () => {
    // Apri Google Maps con direzioni
    window.open(
      VILLA_OLIMPIA_LOCATION.coordinates.directions,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Posizione
        </CardTitle>
        <CardDescription>
          {VILLA_OLIMPIA_LOCATION.address.fullAddress}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gradient-to-br from-ocean/20 to-primary/20 rounded-lg flex flex-col items-center justify-center mb-4 relative overflow-hidden">
          {/* Placeholder per mappa */}
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="h-16 w-16 text-primary/50" />
          </div>
          <div className="relative z-10 text-center p-4">
            <p className="text-muted-foreground mb-2">
              Mappa interattiva
            </p>
            <p className="text-sm text-muted-foreground">
              Integrare con Google Maps o Mapbox
            </p>
          </div>
        </div>
        
        <Button
          variant="outline"
          className="w-full"
          onClick={handleOpenMaps}
        >
          <Navigation className="mr-2 h-4 w-4" />
          Apri in Google Maps
        </Button>
        
        <div className="mt-4 space-y-3">
          <Button
            variant="luxury"
            className="w-full"
            onClick={handleGetDirections}
          >
            <Route className="mr-2 h-4 w-4" />
            Ottieni Indicazioni
          </Button>
          
          <div className="p-4 bg-secondary/50 rounded-lg">
            <p className="text-sm font-semibold mb-2">Indirizzo Completo:</p>
            <p className="text-sm text-muted-foreground">
              {VILLA_OLIMPIA_LOCATION.address.fullAddress}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Coordinate: {VILLA_OLIMPIA_LOCATION.coordinates.latitude}, {VILLA_OLIMPIA_LOCATION.coordinates.longitude}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

