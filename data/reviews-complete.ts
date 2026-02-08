// Recensioni pubbliche: in attesa di fonti OTA verificate
// Aggiornare questo file con recensioni reali e citabili.

export interface Review {
  id: number
  author: string
  rating: number
  date: string
  text: string
  verified: boolean
  source: "Airbnb" | "Google" | "Booking" | "Tripadvisor"
  locale: "it" | "en" | "de" | "nl" | "es" | "fr"
  apartment?: string
  avatar?: string
}

export const reviews: Review[] = []

export function getAverageRating(): number {
  return 0
}

export function getRatingDistribution() {
  return {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  }
}
