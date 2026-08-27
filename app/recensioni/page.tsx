import { ReviewsSection } from "@/components/reviews/reviews-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Recensioni Villa Olimpia Capo Rizzuto | Opinioni reali degli ospiti",
  description:
    "Recensioni Villa Olimpia a Capopiccolo: opinioni degli ospiti su appartamenti, piscina e Spiaggia dei Gigli a circa 100 metri.",
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
      <div className="min-h-screen pt-20">
        <Breadcrumb items={[{ label: "Recensioni" }]} />
        <ReviewsSection />
      </div>
    </>
  )
}
