import { ReviewsSection } from "@/components/reviews/reviews-section"
import { reviews } from "@/data/reviews-complete"
import { ReviewSchema } from "@/components/reviews/review-schema"
import { Breadcrumb } from "@/components/breadcrumb"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Recensioni Villa Olimpia Capo Rizzuto | Opinioni reali degli ospiti",
  description:
    "Leggi le recensioni verificate degli ospiti di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto. Opinioni reali su piscina, appartamenti e spiaggia a meno di 100 metri dal mare da Booking, Airbnb e prenotazioni dirette.",
  path: "/recensioni",
  keywords: [
    "recensioni Villa Olimpia",
    "opinioni Villa Olimpia Capo Rizzuto",
    "recensioni appartamenti Spiaggia dei Gigli",
    "feedback ospiti Calabria mare",
  ],
})

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
