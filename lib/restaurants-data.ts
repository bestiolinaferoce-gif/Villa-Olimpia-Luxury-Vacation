// lib/restaurants-data.ts
// I ristoranti sulla mappa premium sono la fonte per telefono, sito, mappe e testi;
// gli altri sono solo sulla lista / mappa interattiva generica.

import {
  premiumRestaurants,
  type Restaurant as PremiumMapRestaurant,
} from '@/lib/restaurants-premium'

export interface Restaurant {
  id: string
  name: string
  location: string
  distance: string
  rating: number
  reviewCount: number
  priceRange: '€' | '€€' | '€€€'
  cuisine: string
  description: string
  specialties: string[]
  phone?: string
  website?: string
  googleMapsUrl: string
  image: string
  michelin?: string
  awards?: string
  ambience?: {
    dress?: string
    setting?: string
    music?: string
    lighting?: string
  }
  reservationRequired?: boolean
  wheelchairAccessible?: boolean
  parking?: string
  creditCards?: boolean
  tags?: string[]
  featured?: boolean
}

function premiumToGridRestaurant(p: PremiumMapRestaurant): Restaurant {
  const id = p.id === 'aragosta' ? 'l-aragosta' : p.id
  const row: Restaurant = {
    id,
    name: p.name,
    location: p.location,
    distance: p.distance,
    rating: p.rating,
    reviewCount: p.reviewCount,
    priceRange: p.priceRange,
    cuisine: p.cuisine,
    description: p.description,
    specialties: [...p.specialties],
    googleMapsUrl: p.googleMapsUrl,
    image: p.logo,
  }
  if (p.phone) row.phone = p.phone
  if (p.website) row.website = p.website
  if (p.id === 'ruris') {
    row.featured = true
    row.michelin = 'Segnalato Guida Michelin'
    row.reservationRequired = true
  } else {
    row.featured = false
  }
  return row
}

const restaurantsFromPremiumMap = premiumRestaurants.map(premiumToGridRestaurant)

const additionalRestaurants: Restaurant[] = [
  {
    id: 'da-roberto',
    name: 'Ristorante Da Roberto',
    location: 'Capo Rizzuto Marina',
    distance: '1.5km',
    rating: 4.4,
    reviewCount: 298,
    priceRange: '€€',
    cuisine: 'Pizzeria e Pesce',
    description:
      'Locale informale sulla marina con ampia terrazza fronte mare. Pizza napoletana cotta nel forno a legna e ottima scelta di antipasti di pesce. Perfetto per famiglie e cene informali.',
    specialties: [
      'Pizza Marinara',
      'Frittura mista di pesce',
      'Spaghetti alle vongole',
      'Insalata di polpo',
    ],
    phone: '+39 0962 792345',
    googleMapsUrl: 'https://www.google.com/maps/search/Ristorante+Da+Roberto+Capo+Rizzuto+Marina',
    image: '/images/ristoranti/da-roberto.jpg',
  },
  {
    id: 'il-gabbiano',
    name: 'Trattoria Il Gabbiano',
    location: 'Capo Rizzuto',
    distance: '10 minuti',
    rating: 4.3,
    reviewCount: 342,
    priceRange: '€',
    cuisine: 'Cucina Casalinga Calabrese',
    description:
      'Trattoria storica con cucina casalinga e porzioni generose. Gestione familiare dal 1985. Menù tradizionale con pasta fresca fatta in casa, carni grigliate e verdure dell\'orto. Prezzi molto contenuti.',
    specialties: [
      'Pasta fatta in casa',
      'Salsiccia locale alla griglia',
      'Peperoni ripieni',
      'Dolci tradizionali',
    ],
    phone: '+39 0962 791234',
    googleMapsUrl: 'https://www.google.com/maps/search/Trattoria+Il+Gabbiano+Capo+Rizzuto',
    image: '/images/ristoranti/il-gabbiano.jpg',
  },
  {
    id: 'da-ercole',
    name: 'Ristorante Da Ercole',
    location: 'Crotone Centro',
    distance: '20km',
    rating: 4.5,
    reviewCount: 423,
    priceRange: '€€€',
    cuisine: 'Fine Dining Mediterraneo',
    description:
      'Ristorante gourmet nel centro storico di Crotone. Cucina contemporanea con radici territoriali, impiattamenti curati, cantina fornitissima. Ideale per occasioni speciali e cene romantiche.',
    specialties: [
      'Tartare di tonno rosso',
      'Risotto ai frutti di mare',
      'Filetto di ricciola in crosta',
      'Tiramisù alla liquirizia DOP',
    ],
    phone: '+39 0962 902567',
    website: 'https://www.ristorantedaercole.it',
    googleMapsUrl: 'https://www.google.com/maps/search/Ristorante+Da+Ercole+Crotone',
    image: '/images/ristoranti/da-ercole.jpg',
  },
]

export const restaurants: Restaurant[] = [
  ...restaurantsFromPremiumMap,
  ...additionalRestaurants,
]

export function getPremiumRestaurants(): Restaurant[] {
  return restaurants.filter(r => r.rating >= 4.5)
}

export function getTopRatedRestaurants(limit?: number): Restaurant[] {
  const sorted = [...restaurants].sort((a, b) => b.rating - a.rating)
  return limit ? sorted.slice(0, limit) : sorted
}

function parseDistanceKm(distance: string): number {
  const m = distance.match(/[\d.]+/)
  return m ? parseFloat(m[0]) : Number.POSITIVE_INFINITY
}

export function getNearbyRestaurants(maxDistanceKm: number): Restaurant[] {
  return restaurants.filter(r => parseDistanceKm(r.distance) <= maxDistanceKm)
}

export function getRestaurantsByPrice(priceRange: '€' | '€€' | '€€€'): Restaurant[] {
  return restaurants.filter(r => r.priceRange === priceRange)
}
