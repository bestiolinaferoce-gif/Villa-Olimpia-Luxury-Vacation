import { reviews as detailedReviews, type Review as DetailedReview } from "./reviews-detailed"

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

type VerifiedOtaReview = DetailedReview & { source: Exclude<DetailedReview["source"], "Generated"> }

const isVerifiedOtaReview = (review: DetailedReview): review is VerifiedOtaReview => {
  return review.verified && review.source !== "Generated"
}

// Fallback automatico: usa sempre recensioni verificate da fonti OTA.
export const reviews: Review[] = detailedReviews.filter(isVerifiedOtaReview)

export function getAverageRating(): number {
  if (reviews.length === 0) {
    return 0
  }

  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}

export function getRatingDistribution() {
  const distribution = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  }

  reviews.forEach((review) => {
    distribution[review.rating as keyof typeof distribution]++
  })

  return distribution
}
