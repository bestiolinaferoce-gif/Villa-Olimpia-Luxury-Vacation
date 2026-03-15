'use client'

import { useState, useMemo } from 'react'
import { premiumRestaurants } from '@/lib/restaurants-premium'
import { MapPin, Star, Phone, Globe, X, UtensilsCrossed } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { VILLA_OLIMPIA_LOCATION } from '@/lib/location-data'

const mapContainerStyle = {
  width: '100%',
  height: '600px',
}

// Centro mappa: Villa Olimpia
const center = {
  lat: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
  lng: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
}

const mapOptions = {
  zoom: 13,
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
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

export default function RestaurantsMapPremium() {
  const [selected, setSelected] = useState<string | null>(null)
  const [mapError, setMapError] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)

  const selectedRestaurant = selected 
    ? premiumRestaurants.find(r => r.id === selected)
    : null

  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

  if (!GOOGLE_MAPS_API_KEY || mapError) {
    return (
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Mappa non disponibile</p>
          <p className="text-sm text-gray-500">Verifica la configurazione Google Maps API</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        onLoad={() => setMapLoaded(true)}
        onError={() => setMapError(true)}
      >
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
          {/* Google Map */}
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
            options={mapOptions}
          >
            {/* Marker Villa Olimpia */}
            <Marker
              position={center}
              icon={{
                url: 'data:image/svg+xml;base64,' + btoa(`
                  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#0077BE" stroke="white" stroke-width="2"/>
                    <text x="20" y="26" font-size="20" fill="white" text-anchor="middle">🏠</text>
                  </svg>
                `),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                scaledSize: new google.maps.Size(40, 40),
              }}
              title="Villa Olimpia"
            />

            {/* Markers Ristoranti */}
            {premiumRestaurants.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={restaurant.coordinates}
                onClick={() => setSelected(restaurant.id)}
                icon={{
                  url: 'data:image/svg+xml;base64,' + btoa(`
                    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="16" fill="#FF6B35" stroke="white" stroke-width="2"/>
                      <text x="18" y="24" font-size="16" fill="white" text-anchor="middle">🍴</text>
                    </svg>
                  `),
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  scaledSize: new google.maps.Size(36, 36),
                }}
                title={restaurant.name}
              >
                {selected === restaurant.id && (
                  <InfoWindow onCloseClick={() => setSelected(null)}>
                    <div className="p-2 min-w-[200px]">
                      <h3 className="font-bold text-sm mb-1">{restaurant.name}</h3>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold">{restaurant.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{restaurant.location}</p>
                      <Button
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => window.open(restaurant.googleMapsUrl, '_blank')}
                      >
                        Indicazioni
                      </Button>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>

          {/* Sidebar Ristoranti */}
          <div className="absolute left-4 top-4 bottom-4 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6">
              <div className="flex items-center gap-2 mb-2">
                <UtensilsCrossed className="w-5 h-5" />
                <h3 className="text-xl font-bold">Ristoranti Consigliati</h3>
              </div>
              <p className="text-sm opacity-90">
                {premiumRestaurants.length} ristoranti selezionati
              </p>
            </div>

            {/* Lista scrollabile */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {premiumRestaurants.map((restaurant) => (
                <motion.button
                  key={restaurant.id}
                  onClick={() => setSelected(restaurant.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selected === restaurant.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-gray-200 hover:border-primary/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex gap-3">
                    {/* Logo/Immagine Ristorante */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-blue-600/20 border-2 border-primary/30">
                      {restaurant.logo && restaurant.logo.startsWith('/') ? (
                        <Image
                          src={restaurant.logo}
                          fill
                          className="object-cover"
                          alt={`${restaurant.name} logo`}
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-primary text-2xl">🍴</div>'
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary text-2xl">
                          🍴
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm mb-1 truncate">
                        {restaurant.name}
                      </h4>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold">{restaurant.rating}</span>
                        <span className="text-xs text-gray-500">
                          ({restaurant.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{restaurant.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                          {restaurant.priceRange}
                        </span>
                        <span className="text-xs text-gray-500 truncate">{restaurant.cuisine}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </LoadScript>

      {/* Modal dettaglio ristorante */}
      <AnimatePresence>
        {selectedRestaurant && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-50"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary to-blue-600 text-white p-8">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-start gap-6">
                  {/* Logo grande */}
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0 border-2 border-white/30">
                    {selectedRestaurant.logo && selectedRestaurant.logo.startsWith('/') ? (
                      <Image
                        src={selectedRestaurant.logo}
                        fill
                        className="object-cover"
                        alt={`${selectedRestaurant.name} logo`}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-primary text-4xl bg-white">🍴</div>'
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary text-4xl bg-white">
                        🍴
                      </div>
                    )}
                  </div>

                  {/* Info base */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{selectedRestaurant.name}</h2>
                    <div className="flex items-center gap-4 mb-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-white" />
                        <span className="font-bold text-xl">{selectedRestaurant.rating}</span>
                        <span className="opacity-90">({selectedRestaurant.reviewCount} recensioni)</span>
                      </div>
                      <span className="px-3 py-1 bg-white/20 rounded-full font-semibold">
                        {selectedRestaurant.priceRange}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 opacity-90 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedRestaurant.location}</span>
                    </div>
                    <div className="text-sm opacity-90">
                      {selectedRestaurant.distance} • {selectedRestaurant.cuisine}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenuto */}
              <div className="p-8 space-y-6">
                {/* Descrizione */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Descrizione</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedRestaurant.description}
                  </p>
                </div>

                {/* Specialità */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Specialità della Casa</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedRestaurant.specialties.map((specialty, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200"
                      >
                        <span className="text-primary text-xl font-bold">✓</span>
                        <span className="font-medium text-gray-800">{specialty}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Azioni */}
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                  <Button 
                    asChild 
                    className="w-full"
                    size="lg"
                  >
                    <a
                      href={selectedRestaurant.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Indicazioni
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    asChild
                    className="w-full"
                    size="lg"
                  >
                    <a href={`tel:${selectedRestaurant.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Chiama
                    </a>
                  </Button>

                  {selectedRestaurant.website && (
                    <Button 
                      variant="outline" 
                      asChild
                      className="w-full"
                      size="lg"
                    >
                      <a
                        href={selectedRestaurant.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Sito Web
                      </a>
                    </Button>
                  )}
                </div>

                {/* Nota concierge */}
                <div className="bg-gradient-to-r from-blue-50 to-primary/10 p-6 rounded-xl border-2 border-primary/20">
                  <p className="text-sm text-gray-700">
                    <strong className="text-primary">💼 Servizio Concierge:</strong> Possiamo prenotare per te in questo ristorante e consigliarti i piatti migliori. <a href="/contatti" className="text-primary hover:underline font-semibold">Contattaci!</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
