import { ReviewsSection } from "@/components/reviews/reviews-section"
import { reviews, getAverageRating } from "@/data/reviews"
import { ReviewSchema } from "@/components/reviews/review-schema"

export const metadata = {
  title: "Recensioni - Villa Olimpia",
  description: `Leggi le recensioni dei nostri ospiti. Valutazione media ${getAverageRating()}/5 stelle basata su ${reviews.length} recensioni.`,
}

export default function RecensioniPage() {
  return (
    <>
      {/* Schema markup per tutte le recensioni */}
      {reviews.map((review) => (
        <ReviewSchema key={review.id} review={review} />
      ))}
      <div className="min-h-screen pt-20">
        <ReviewsSection />
      </div>
    </>
  )
}
