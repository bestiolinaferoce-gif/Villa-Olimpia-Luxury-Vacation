"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapComponent() {
  // Placeholder per integrazione Google Maps o Mapbox
  // In produzione, sostituire con componente reale
  
  const handleOpenMaps = () => {
    // Apri Google Maps con le coordinate
    const lat = 38.6775
    const lng = 15.8969
    window.open(
      `https://www.google.com/maps?q=${lat},${lng}`,
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
          Villa Olimpia, Via della Costa, Tropea, Calabria
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
        
        <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
          <p className="text-sm font-semibold mb-2">Indirizzo:</p>
          <p className="text-sm text-muted-foreground">
            Via della Costa
            <br />
            89861 Tropea (VV)
            <br />
            Calabria, Italia
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

