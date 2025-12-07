"use client"

import { useState, useCallback } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { MapPin } from "lucide-react"

const containerStyle = {
  width: "100%",
  height: "500px",
}

const center = {
  lat: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
  lng: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
}

// Stile mappa personalizzato (toni blu/oro)
const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0077BE" }],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
}

// Punti di interesse
const pointsOfInterest = [
  {
    id: 1,
    name: "Villa Olimpia",
    position: { lat: 38.913856, lng: 17.0754964 },
    type: "villa",
  },
  {
    id: 2,
    name: "Spiaggia Capo Rizzuto",
    position: { lat: 38.915, lng: 17.078 },
    type: "beach",
  },
  {
    id: 3,
    name: "Riserva Marina Capo Rizzuto",
    position: { lat: 38.920, lng: 17.080 },
    type: "attraction",
  },
  {
    id: 4,
    name: "Le Castella",
    position: { lat: 38.905, lng: 17.030 },
    type: "attraction",
  },
]

export function GoogleMapComponent() {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null)
  const [mapError, setMapError] = useState(false)

  // API Key - IMPORTANTE: Sostituisci con la tua chiave Google Maps API
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

  if (!GOOGLE_MAPS_API_KEY || mapError) {
    return (
      <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center rounded-lg">
        <div className="text-center p-8">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Mappa non disponibile</p>
          <p className="text-sm text-gray-500 mb-4">
            {!GOOGLE_MAPS_API_KEY
              ? "Configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY nelle variabili d'ambiente"
              : "Errore nel caricamento della mappa"}
          </p>
          <a
            href={VILLA_OLIMPIA_LOCATION.coordinates.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary hover:underline"
          >
            Apri su Google Maps →
          </a>
        </div>
      </div>
    )
  }

  try {
    return (
      <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        onError={() => setMapError(true)}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={mapOptions}
        >
          {pointsOfInterest.map((point) => (
            <Marker
              key={point.id}
              position={point.position}
              onClick={() => setSelectedMarker(point.id)}
            >
              {selectedMarker === point.id && (
                <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
                  <div className="p-2">
                    <h3 className="font-bold text-sm mb-1">{point.name}</h3>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${point.position.lat},${point.position.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-xs hover:underline"
                    >
                      Ottieni indicazioni →
                    </a>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    )
  } catch (error) {
    setMapError(true)
    return (
      <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center rounded-lg">
        <div className="text-center p-8">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Errore nel caricamento della mappa</p>
          <a
            href={VILLA_OLIMPIA_LOCATION.coordinates.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary hover:underline"
          >
            Apri su Google Maps →
          </a>
        </div>
      </div>
    )
  }
}

