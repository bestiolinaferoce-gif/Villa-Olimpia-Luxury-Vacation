"use client"

import { useState, useMemo } from "react"
import { reviews, Review } from "@/data/reviews-detailed"
import { ReviewCard } from "./review-card"
import { ReviewStats } from "./review-stats"
import { ReviewFilters } from "./review-filters"
import { Button } from "@/components/ui/button"

const REVIEWS_PER_PAGE = 9

export function ReviewsSection() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredReviews = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return []
    }
    
    let filtered = [...reviews]
    
    if (selectedRating !== null) {
      filtered = filtered.filter((review) => review.rating === selectedRating)
    }
    
    // Ordina per data (più recenti prima)
    filtered.sort((a, b) => {
      try {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } catch {
        return 0
      }
    })
    
    return filtered
  }, [selectedRating])

  const paginatedReviews = useMemo(() => {
    const start = (currentPage - 1) * REVIEWS_PER_PAGE
    return filteredReviews.slice(start, start + REVIEWS_PER_PAGE)
  }, [filteredReviews, currentPage])

  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE)

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating)
    setCurrentPage(1) // Reset alla prima pagina
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Cosa Dicono i Nostri Ospiti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leggi le recensioni di chi ha già soggiornato a Villa Olimpia
          </p>
        </div>

        {/* Stats */}
        <ReviewStats />

        {/* Filters */}
        <ReviewFilters
          selectedRating={selectedRating}
          onRatingChange={handleRatingChange}
        />

        {/* Reviews Grid */}
        {paginatedReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedReviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nessuna recensione trovata per i filtri selezionati.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Precedente
            </Button>
            <span className="text-sm text-muted-foreground">
              Pagina {currentPage} di {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Successiva
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Mostrando {paginatedReviews.length} di {filteredReviews.length} recensioni
          </p>
        </div>
      </div>
    </section>
  )
}

