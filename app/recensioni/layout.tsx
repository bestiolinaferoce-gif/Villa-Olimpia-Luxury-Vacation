import { reviews, getAverageRating } from "@/data/reviews-detailed"

export default function RecensioniLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const averageRating = getAverageRating()
  const totalReviews = reviews.length

  // Schema markup per AggregateRating
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: averageRating,
    reviewCount: totalReviews,
    bestRating: 5,
    worstRating: 1,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      {children}
    </>
  )
}


