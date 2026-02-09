import { ReviewsSection } from "@/components/reviews/reviews-section"
import { reviews } from "@/data/reviews-complete"
import { ReviewSchema } from "@/components/reviews/review-schema"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata = {
  title: "Recensioni - Villa Olimpia",
  description: "Leggi le recensioni dei nostri ospiti. Stiamo importando le recensioni pubbliche dalle principali OTA. Esperienze reali di chi ha soggiornato a Villa Olimpia, Capo Rizzuto.",
}

export default function RecensioniPage() {
  return (
    <>
      {/* Schema markup per tutte le recensioni */}
      {reviews && reviews.length > 0 && reviews.map((review) => (
        <ReviewSchema key={review.id} review={review} />
      ))}
      <div className="min-h-screen pt-20">
        <Breadcrumb items={[{ label: "Recensioni" }]} />
        <ReviewsSection />
      </div>
    </>
  )
}
