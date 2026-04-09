// lib/restaurants-premium.ts
// Database ristoranti premium con logo e coordinate

export interface Restaurant {
  id: string
  name: string
  location: string
  distance: string
  rating: number
  reviewCount: number
  priceRange: '€€' | '€€€'
  cuisine: string
  description: string
  specialties: string[]
  phone: string
  website?: string
  googleMapsUrl: string
  logo: string  // URL logo
  coordinates: { lat: number; lng: number }
}

export const premiumRestaurants: Restaurant[] = [
  {
    id: 'micomare',
    name: 'Ristorante Micomare',
    location: 'Le Castella',
    distance: 'circa 4km da Villa Olimpia',
    rating: 4.6,
    reviewCount: 387,
    priceRange: '€€€',
    cuisine: 'Pesce Fine Dining',
    description: 'Ristorante di pesce a Le Castella con menu contemporaneo, crudi di mare e una posizione comoda per una cena più curata vicino al borgo.',
    specialties: [
      'Crudo di mare selezione chef',
      'Risotto mantecato alla pescatrice',
      'Filetto di ricciola in crosta pistacchi',
      'Millefoglie al limone'
    ],
    phone: '+39 0962 795082',
    website: 'https://www.ristorantemicomare.com',
    googleMapsUrl: 'https://www.google.com/maps/search/Ristorante+Micomare+Capo+Rizzuto',
    logo: '/images/ristoranti/micomare.jpg',
    coordinates: { lat: 38.9007, lng: 17.0253 }
  },

  {
    id: 'ruris',
    name: 'Ruris Ristorante',
    location: 'Isola di Capo Rizzuto',
    distance: '8km da Villa Olimpia',
    rating: 4.8,
    reviewCount: 312,
    priceRange: '€€€',
    cuisine: 'Fine Dining - Guida Michelin',
    description:
      "L'unico ristorante Michelin nell'area di Capo Rizzuto. Chef Natale Pallone propone pesce dello Jonio in chiave contemporanea. Cantina con 200+ etichette, terrazza panoramica.",
    specialties: [
      'Crudo di gamberi rossi dello Jonio',
      "Risotto all'astice con burrata",
      'Filetto di dentice in crosta di pistacchi',
      'Dessert al limone e basilico',
    ],
    phone: '+39 0962 791460',
    website: 'https://www.ruris.it',
    googleMapsUrl: 'https://www.google.com/maps/search/Ruris+Ristorante+Isola+di+Capo+Rizzuto',
    logo: '/images/ristoranti/ruris-logo.jpg',
    coordinates: { lat: 38.9321, lng: 17.0856 },
  },
]

// Helper functions
export function getRestaurantById(id: string): Restaurant | undefined {
  return premiumRestaurants.find(r => r.id === id)
}

export function getTopRatedRestaurants(limit: number = 3): Restaurant[] {
  return [...premiumRestaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}

export function getNearbyRestaurants(maxKm: number = 5): Restaurant[] {
  return premiumRestaurants.filter(r => {
    const km = parseFloat(r.distance)
    return km <= maxKm
  })
}











