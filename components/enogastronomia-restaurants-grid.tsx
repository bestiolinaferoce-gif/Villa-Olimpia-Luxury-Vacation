'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { restaurants } from '@/lib/restaurants-data'

export function EnogastronomiaRestaurantsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.filter(r => r.rating >= 4.5).map((restaurant, index) => (
        <motion.div
          key={restaurant.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/30 group"
        >
          {/* Immagine con overlay */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={restaurant.image || '/images/ristoranti/placeholder.jpg'}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              alt={`${restaurant.name} - ${restaurant.cuisine}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold shadow-lg border-2 border-primary/30">
              {restaurant.priceRange}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-playfair font-bold text-white mb-1 drop-shadow-lg">
                {restaurant.name}
              </h3>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-white">{restaurant.rating}</span>
                <span className="text-white/80 text-sm">({restaurant.reviewCount} recensioni)</span>
              </div>
            </div>
          </div>

          {/* Contenuto */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">{restaurant.location}</span>
              <span className="text-gray-400">•</span>
              <span>{restaurant.distance}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {restaurant.description}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                {restaurant.cuisine}
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Indicazioni
                </a>
              </Button>
              {restaurant.phone && (
                <Button variant="ghost" size="sm" asChild className="flex-1 group/btn">
                  <a href={`tel:${restaurant.phone}`}>
                    <Phone className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Chiama
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}










