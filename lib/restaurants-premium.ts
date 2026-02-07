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
    location: 'Capo Rizzuto',
    distance: '2km da Villa Olimpia',
    rating: 4.6,
    reviewCount: 387,
    priceRange: '€€€',
    cuisine: 'Pesce Fine Dining',
    description: 'Ristorante elegante vista mare, cucina contemporanea di pesce. Carta vini 300+ etichette, servizio impeccabile. Prenotazione consigliata.',
    specialties: [
      'Crudo di mare selezione chef',
      'Risotto mantecato alla pescatrice',
      'Filetto di ricciola in crosta pistacchi',
      'Millefoglie al limone'
    ],
    phone: '+39 0962 795333',
    website: 'https://www.ristorantemicomare.it',
    googleMapsUrl: 'https://maps.app.goo.gl/xYz123',
    logo: '/images/ristoranti/micomare-logo.jpg',
    coordinates: { lat: 38.9632, lng: 17.0955 }
  },
  
  {
    id: 'da-mimmo',
    name: 'Ristorante Da Mimmo',
    location: 'Le Castella',
    distance: '3km da Villa Olimpia',
    rating: 4.7,
    reviewCount: 512,
    priceRange: '€€',
    cuisine: 'Cucina Calabrese Tradizionale',
    description: 'Trattoria con vista castello aragonese. Pasta fresca fatta in casa, pesce fresco dai pescatori locali. Ambiente familiare e accogliente.',
    specialties: [
      'Pasta \'nduja e stracciatella',
      'Pesce spada alla ghiotta',
      'Parmigiana di melanzane',
      'Dolci della casa'
    ],
    phone: '+39 0962 795123',
    googleMapsUrl: 'https://maps.app.goo.gl/aBC456',
    logo: '/images/ristoranti/da-mimmo-logo.jpg',
    coordinates: { lat: 38.9012, lng: 17.0234 }
  },

  {
    id: 'aragosta',
    name: 'L\'Aragosta',
    location: 'Le Castella',
    distance: '3km da Villa Olimpia',
    rating: 4.5,
    reviewCount: 289,
    priceRange: '€€€',
    cuisine: 'Specialità Pesce e Crudo',
    description: 'Ristorante di pesce vista mare con terrazza panoramica. Specialità crudo e linguine all\'astice. Cantina vini selezionata.',
    specialties: [
      'Crudo di pesce misto',
      'Linguine all\'astice',
      'Frittura di paranza',
      'Spaghetti ricci di mare'
    ],
    phone: '+39 0962 795456',
    website: 'https://www.ristorantearagosta.it',
    googleMapsUrl: 'https://maps.app.goo.gl/dEF789',
    logo: '/images/ristoranti/aragosta-logo.jpg',
    coordinates: { lat: 38.9045, lng: 17.0267 }
  },

  {
    id: 'da-annibale',
    name: 'Ristorante Da Annibale',
    location: 'Capopiccolo',
    distance: '500m da Villa Olimpia',
    rating: 4.4,
    reviewCount: 198,
    priceRange: '€€',
    cuisine: 'Cucina Casalinga',
    description: 'Trattoria familiare a pochi passi da Villa Olimpia. Cucina casereccia, prodotti dell\'orto, porzioni abbondanti. Prezzi onesti.',
    specialties: [
      'Pasta fresca al ragù',
      'Grigliata mista carne',
      'Verdure grigliate dell\'orto',
      'Tiramisù fatto in casa'
    ],
    phone: '+39 0962 794XXX',
    googleMapsUrl: 'https://maps.app.goo.gl/gHI012',
    logo: '/images/ristoranti/da-annibale-logo.jpg',
    coordinates: { lat: 38.9678, lng: 17.0989 }
  },

  {
    id: 'lido-bahama',
    name: 'Lido Bahama Restaurant',
    location: 'Capo Rizzuto Marina',
    distance: '2km da Villa Olimpia',
    rating: 4.4,
    reviewCount: 456,
    priceRange: '€€',
    cuisine: 'Pesce & Pizza Napoletana',
    description: 'Sulla spiaggia, piedi nella sabbia. Pesce fresco, pizza napoletana, aperitivi al tramonto. Perfetto per famiglie con bambini.',
    specialties: [
      'Pizza Napoletana DOC',
      'Frittura mista di pesce',
      'Spaghetti vongole veraci',
      'Insalata di mare'
    ],
    phone: '+39 0962 796XXX',
    googleMapsUrl: 'https://maps.app.goo.gl/jKL345',
    logo: '/images/ristoranti/lido-bahama-logo.jpg',
    coordinates: { lat: 38.9555, lng: 17.0822 }
  }
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












