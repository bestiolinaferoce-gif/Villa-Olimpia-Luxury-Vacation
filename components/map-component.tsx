"use client"

/**
 * @deprecated Non usato nella pagina Location (posizione esatta rimossa).
 * La pagina Location usa ora LocationMapModern (mappa digitale senza coordinate esatte).
 * Mantenuto per eventuale riuso in altre pagine o rollback.
 */
import { useState, useCallback, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Route, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
}

const center = {
  lat: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
  lng: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
}

const mapOptions = {
  zoom: 15,
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: false,
  fullscreenControl: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
}

// Variabile globale per tracciare se Google Maps è già stato caricato
declare global {
  interface Window {
    googleMapsLoaded?: boolean;
  }
}

export function MapComponent() {
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [showInfoPanel, setShowInfoPanel] = useState(false)
  const [mapError, setMapError] = useState(false)
  const [apiKey, setApiKey] = useState<string>('')
  const [isClient, setIsClient] = useState(false)
  
  // Leggi API key solo lato client per evitare problemi SSR
  useEffect(() => {
    setIsClient(true)
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    setApiKey(key)
    
    // Se non c'è API key, mostra errore dopo un breve delay
    if (!key || key.trim() === '') {
      setTimeout(() => {
        setMapError(true)
      }, 1000)
    }
  }, [])

  const handleOpenMaps = () => {
    if (typeof window !== 'undefined') {
      window.open(
        VILLA_OLIMPIA_LOCATION.coordinates.googleMaps,
        "_blank",
        "noopener,noreferrer"
      )
    }
  }

  const handleGetDirections = () => {
    if (typeof window !== 'undefined') {
      window.open(
        VILLA_OLIMPIA_LOCATION.coordinates.directions,
        "_blank",
        "noopener,noreferrer"
      )
    }
  }

  const onLoad = useCallback((map: google.maps.Map) => {
    setIsMapLoaded(true)
    setMapError(false)
    if (typeof window !== 'undefined') {
      window.googleMapsLoaded = true
    }
  }, [])

  const onError = useCallback((error: Error) => {
    // Ignora errore "already loaded" - è normale se lo script è già presente
    if (error.message && error.message.includes('already')) {
      setIsMapLoaded(true)
      setMapError(false)
      if (typeof window !== 'undefined') {
        window.googleMapsLoaded = true
      }
      return
    }
    // Log solo altri errori in sviluppo
    if (process.env.NODE_ENV === 'development') {
      console.error('Google Maps LoadScript Error:', error)
    }
    setMapError(true)
    setIsMapLoaded(false)
  }, [])

  const handleScriptLoad = useCallback(() => {
    setIsMapLoaded(true)
    setMapError(false)
    if (typeof window !== 'undefined') {
      window.googleMapsLoaded = true
    }
  }, [])
  

  // Se non c'è API key o c'è un errore, mostra placeholder con link
  const hasValidApiKey = Boolean(
    isClient &&
    apiKey && 
    apiKey.trim() !== '' &&
    apiKey !== 'your_google_maps_api_key_here' && 
    apiKey !== 'INSERISCI_QUI_IL_TUO_GOOGLE_MAPS_API_KEY' &&
    apiKey.length > 10
  )

  // Mostra placeholder durante SSR o se non c'è API key
  if (!isClient || !hasValidApiKey || mapError) {
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
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-primary/50" />
            </div>
            <div className="relative z-10 text-center p-4">
              <p className="text-muted-foreground mb-2">
                Mappa interattiva
              </p>
              <p className="text-sm text-muted-foreground">
                {!hasValidApiKey 
                  ? "Configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY su Vercel → Settings → Environment Variables e fai un Redeploy"
                  : "Errore nel caricamento della mappa. Contatta il supporto se il problema persiste."}
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

  // Mappa interattiva con Google Maps
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
        <div className="relative">
          {isClient && hasValidApiKey && !mapError ? (
            <LoadScript 
              googleMapsApiKey={apiKey}
              onError={onError}
              onLoad={handleScriptLoad}
              preventGoogleFontsLoading={true}
              loadingElement={
                <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Caricamento mappa...</p>
                  </div>
                </div>
              }
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                options={mapOptions}
                onLoad={onLoad}
              >
                <Marker
                  position={center}
                  title="Villa Olimpia"
                  onClick={() => setShowInfoPanel(true)}
                />
              </GoogleMap>
            </LoadScript>
          ) : (
            <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Caricamento mappa...</p>
              </div>
            </div>
          )}
          
          {/* Pannello laterale con informazioni */}
          {showInfoPanel && (
            <div className="absolute top-4 right-4 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-10 animate-in slide-in-from-right duration-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-sm mb-1">Villa Olimpia</h3>
                  <p className="text-xs text-muted-foreground">
                    {VILLA_OLIMPIA_LOCATION.address.fullAddress}
                  </p>
                </div>
                <button
                  onClick={() => setShowInfoPanel(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors ml-2"
                  aria-label="Chiudi"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-2">
                <Button
                  size="sm"
                  variant="luxury"
                  className="w-full text-xs"
                  onClick={handleGetDirections}
                >
                  <Route className="mr-1 h-3 w-3" />
                  Ottieni Indicazioni
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs"
                  onClick={handleOpenMaps}
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Apri in Google Maps
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-4 space-y-3">
          <Button
            variant="luxury"
            className="w-full"
            onClick={handleGetDirections}
          >
            <Route className="mr-2 h-4 w-4" />
            Ottieni Indicazioni Stradali
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={handleOpenMaps}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Apri in Google Maps
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

