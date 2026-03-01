'use client'

import { useState } from 'react'
import { restaurants } from '@/lib/restaurants-data'
import { MapPin, Star, X, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'

export default function InteractiveRestaurantMap() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null)

  const selected = selectedRestaurant 
    ? restaurants.find(r => r.id === selectedRestaurant)
    : null

  // Google Maps embed URL (puoi creare una mappa personalizzata su Google My Maps)
  // Per ora usiamo una mappa generica di Capo Rizzuto
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4567890123!2d17.0754964!3d38.913856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU0JzQ5LjkiTiAxN8KwMDQnMzEuOCJF!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit"

  return (
    <div className="relative w-full h-[600px] bg-muted/30 rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl">
      {/* Mappa (iframe Google Maps) */}
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
        title="Mappa Ristoranti Capo Rizzuto"
      />

      {/* Overlay con lista ristoranti (sidebar) */}
      <div className="absolute left-4 top-4 bottom-4 w-80 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col z-10">
        <div className="p-4 bg-gradient-to-r from-primary to-ocean text-white">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5" />
            Ristoranti Consigliati
          </h3>
          <p className="text-sm opacity-90 mt-1">Clicca per dettagli</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {restaurants.map((restaurant) => (
            <button
              key={restaurant.id}
              onClick={() => setSelectedRestaurant(restaurant.id)}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                selectedRestaurant === restaurant.id
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-ocean/20 flex items-center justify-center">
                  <UtensilsCrossed className="w-8 h-8 text-primary/40" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 truncate">
                    {restaurant.name}
                  </h4>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span className="text-xs font-medium">{restaurant.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({restaurant.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal dettaglio ristorante (quando selezionato) */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRestaurant(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto z-30 shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Header con immagine */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-ocean/20 flex items-center justify-center">
                <UtensilsCrossed className="w-24 h-24 text-primary/30" />
                <button
                  onClick={() => setSelectedRestaurant(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4">{selected.name}</h3>
                
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                    <span className="font-semibold text-lg">{selected.rating}</span>
                    <span className="text-muted-foreground">
                      ({selected.reviewCount} recensioni)
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {selected.priceRange}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>{selected.location} • {selected.distance} da Villa Olimpia</span>
                  </div>

                  <p className="text-lg leading-relaxed">{selected.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Specialità:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selected.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a 
                      href={selected.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Indicazioni Stradali
                    </a>
                  </Button>
                  
                  {selected.phone && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={`tel:${selected.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Chiama
                      </a>
                    </Button>
                  )}
                  
                  {selected.website && (
                    <Button variant="outline" asChild>
                      <a 
                        href={selected.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}












