import { Review } from "@/data/reviews-complete"
import { BASE_URL } from "@/lib/metadata"

export function ReviewSchema({ review }: { review: Review }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@id": `${BASE_URL}/#business`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
