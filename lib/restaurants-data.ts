// lib/restaurants-data.ts

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

// Helper per filtrare solo ristoranti premium (rating >= 4.5)
export function getPremiumRestaurants(): Restaurant[] {
  return restaurants.filter(r => r.rating >= 4.5)
}

export const restaurants: Restaurant[] = [
  {
    id: 'da-annibale',
    name: 'Ristorante Da Annibale',
    location: 'Le Castella',
    distance: '8 minuti',
    rating: 4.7,
    reviewCount: 487,
    priceRange: '€€',
    featured: true,
    cuisine: 'Pesce e Cucina Tradizionale Calabrese',
    description: 'Ristorante di pesce con vista mozzafiato sul Castello Aragonese di Le Castella. Cucina tradizionale calabrese con pesce fresco del giorno. Gestione familiare dal 1985, ambiente accogliente e informale.',
    specialties: [
      'Pesce crudo misto',
      'Pesce spada alla ghiotta',
      'Frittura di paranza',
      'Pasta con le vongole'
    ],
    phone: '+39 0962 795123',
    googleMapsUrl: 'https://goo.gl/maps/lecastella-annibale',
    image: '/images/ristoranti/da-annibale.jpg'
  },
  {
    id: 'micomare',
    name: 'Ristorante Micomare',
    location: 'Capo Rizzuto',
    distance: '2km',
    rating: 4.6,
    reviewCount: 387,
    priceRange: '€€',
    cuisine: 'Pesce e Frutti di Mare',
    description: 'Ristorante vista mare specializzato in pesce fresco del giorno. Ambiente elegante con terrazza panoramica affacciata sulla Riserva Marina. Carta vini selezionata con etichette calabresi DOC.',
    specialties: [
      'Crudo di pesce misto',
      'Linguine all\'astice',
      'Frittura di paranza',
      'Tonno alla ghiotta'
    ],
    phone: '+39 0962 795456',
    website: 'https://www.micomare.it',
    googleMapsUrl: 'https://goo.gl/maps/micomare-caporizzuto',
    image: '/images/ristoranti/micomare.jpg'
  },
  {
    id: 'da-mimmo',
    name: 'Ristorante Da Mimmo',
    location: 'Le Castella',
    distance: '3km',
    rating: 4.5,
    reviewCount: 512,
    priceRange: '€€',
    cuisine: 'Cucina Tradizionale Calabrese',
    description: 'Trattoria familiare a gestione diretta con vista castello aragonese. Cucina casereccia con prodotti dell\'orto e pesce fresco. Porzioni abbondanti, prezzi onesti. Perfetto per cene in famiglia.',
    specialties: [
      'Pasta fatta in casa con \'nduja',
      'Pesce spada alla ghiotta',
      'Parmigiana di melanzane',
      'Dolci della casa'
    ],
    phone: '+39 0962 795789',
    googleMapsUrl: 'https://goo.gl/maps/damimmo-lecastella',
    image: '/images/ristoranti/da-mimmo.jpg'
  },
  {
    id: 'da-roberto',
    name: 'Ristorante Da Roberto',
    location: 'Capo Rizzuto Marina',
    distance: '1.5km',
    rating: 4.4,
    reviewCount: 298,
    priceRange: '€€',
    cuisine: 'Pizzeria e Pesce',
    description: 'Locale informale sulla marina con ampia terrazza fronte mare. Pizza napoletana cotta nel forno a legna e ottima scelta di antipasti di pesce. Perfetto per famiglie e cene informali.',
    specialties: [
      'Pizza Marinara',
      'Frittura mista di pesce',
      'Spaghetti alle vongole',
      'Insalata di polpo'
    ],
    phone: '+39 0962 792345',
    googleMapsUrl: 'https://goo.gl/maps/daroberto-caporizzuto',
    image: '/images/ristoranti/da-roberto.jpg'
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
    description: 'Trattoria storica con cucina casalinga e porzioni generose. Gestione familiare dal 1985. Menù tradizionale con pasta fresca fatta in casa, carni grigliate e verdure dell\'orto. Prezzi molto contenuti.',
    specialties: [
      'Pasta fatta in casa',
      'Salsiccia locale alla griglia',
      'Peperoni ripieni',
      'Dolci tradizionali'
    ],
    phone: '+39 0962 791234',
    googleMapsUrl: 'https://goo.gl/maps/ilgabbiano-caporizzuto',
    image: '/images/ristoranti/il-gabbiano.jpg'
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
    description: 'Ristorante gourmet nel centro storico di Crotone. Cucina contemporanea con radici territoriali, impiattamenti curati, cantina fornitissima. Ideale per occasioni speciali e cene romantiche.',
    specialties: [
      'Tartare di tonno rosso',
      'Risotto ai frutti di mare',
      'Filetto di ricciola in crosta',
      'Tiramisù alla liquirizia DOP'
    ],
    phone: '+39 0962 902567',
    website: 'https://www.ristorantedaercole.it',
    googleMapsUrl: 'https://goo.gl/maps/daercole-crotone',
    image: '/images/ristoranti/da-ercole.jpg'
  },
  {
    id: 'l-aragosta',
    name: 'L\'Aragosta',
    location: 'Le Castella',
    distance: '3km',
    rating: 4.5,
    reviewCount: 412,
    priceRange: '€€€',
    cuisine: 'Pesce Premium',
    description: 'Ristorante di pesce con vista castello. Ambiente elegante e raffinato. Specializzato in crudi di pesce, piatti gourmet con pesce fresco e vini pregiati. Prenotazione consigliata.',
    specialties: [
      'Crudo di pesce vista castello',
      'Linguine astice',
      'Frittura mista premium',
      'Grigliata di pesce'
    ],
    phone: '+39 0962 795890',
    googleMapsUrl: 'https://goo.gl/maps/laragosta-lecastella',
    image: '/images/ristoranti/laragosta.jpg'
  },
  {
    id: 'lido-bahama',
    name: 'Ristorante Lido Bahama',
    location: 'Capo Rizzuto',
    distance: '2km',
    rating: 4.4,
    reviewCount: 365,
    priceRange: '€€',
    cuisine: 'Pesce e Pizza',
    description: 'Sulla spiaggia, piedi nella sabbia. Pesce freschissimo, pizza napoletana, aperitivi al tramonto. Ambiente informale e familiare. Ideale per pranzi in spiaggia e cene romantiche al chiaro di luna.',
    specialties: [
      'Pesce fresco del giorno',
      'Pizza napoletana',
      'Aperitivi al tramonto',
      'Frittura mista'
    ],
    phone: '+39 0962 793456',
    googleMapsUrl: 'https://goo.gl/maps/lidobahama-caporizzuto',
    image: '/images/ristoranti/lido-bahama.jpg'
  },
]

// Helper function per ordinare per rating
export function getTopRatedRestaurants(limit?: number): Restaurant[] {
  const sorted = [...restaurants].sort((a, b) => b.rating - a.rating)
  return limit ? sorted.slice(0, limit) : sorted
}

// Helper per filtrare per distanza
export function getNearbyRestaurants(maxDistanceKm: number): Restaurant[] {
  return restaurants.filter(r => {
    const distance = parseFloat(r.distance)
    return distance <= maxDistanceKm
  })
}

// Helper per filtrare per fascia prezzo
export function getRestaurantsByPrice(priceRange: '€' | '€€' | '€€€'): Restaurant[] {
  return restaurants.filter(r => r.priceRange === priceRange)
}

