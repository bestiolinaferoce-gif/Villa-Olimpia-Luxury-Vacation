"use client"

import { useState, useMemo } from "react"
import { reviews, Review } from "@/data/reviews-complete"
import { ReviewCard } from "./review-card"
import { ReviewStats } from "./review-stats"
import { ReviewFilters } from "./review-filters"
import { ReviewFiltersAdvanced } from "./review-filters-advanced"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const REVIEWS_PER_PAGE = 9

export function ReviewsSection() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [selectedSource, setSelectedSource] = useState<string | null>(null)
  const [selectedLocale, setSelectedLocale] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"date" | "rating">("date")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredReviews = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return []
    }
    
    let filtered = [...reviews]
    
    // Filtro per rating
    if (selectedRating !== null) {
      filtered = filtered.filter((review) => review.rating === selectedRating)
    }
    
    // Filtro per source
    if (selectedSource) {
      filtered = filtered.filter((review) => review.source === selectedSource)
    }
    
    // Filtro per locale
    if (selectedLocale) {
      filtered = filtered.filter((review) => review.locale === selectedLocale)
    }
    
    // Ordina
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        try {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        } catch {
          return 0
        }
      } else {
        // Ordina per rating (più alto prima), poi per data
        if (b.rating !== a.rating) {
          return b.rating - a.rating
        }
        try {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        } catch {
          return 0
        }
      }
    })
    
    return filtered
  }, [selectedRating, selectedSource, selectedLocale, sortBy])

  const paginatedReviews = useMemo(() => {
    const start = (currentPage - 1) * REVIEWS_PER_PAGE
    return filteredReviews.slice(start, start + REVIEWS_PER_PAGE)
  }, [filteredReviews, currentPage])

  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE)

  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating)
    setCurrentPage(1)
  }

  const handleSourceChange = (source: string | null) => {
    setSelectedSource(source)
    setCurrentPage(1)
  }

  const handleLocaleChange = (locale: string | null) => {
    setSelectedLocale(locale)
    setCurrentPage(1)
  }

  const handleSortChange = (sort: "date" | "rating") => {
    setSortBy(sort)
    setCurrentPage(1)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Recensioni Verificate</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary via-ocean to-primary bg-clip-text text-transparent">
            Cosa Dicono i Nostri Ospiti
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Esperienze reali di chi ha già soggiornato a Villa Olimpia
          </p>
          {reviews.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ Booking.com</span>
              <span>•</span>
              <span>✓ Airbnb</span>
              <span>•</span>
              <span>✓ Google</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <ReviewStats />

        {reviews.length > 0 ? (
          <ReviewFiltersAdvanced
            selectedRating={selectedRating}
            selectedSource={selectedSource}
            selectedLocale={selectedLocale}
            sortBy={sortBy}
            onRatingChange={handleRatingChange}
            onSourceChange={handleSourceChange}
            onLocaleChange={handleLocaleChange}
            onSortChange={handleSortChange}
          />
        ) : (
          <div className="text-center mb-10">
            <p className="text-muted-foreground">
              Stiamo importando le recensioni pubbliche dalle principali OTA (Booking, Airbnb, Google).
              Se vuoi verifiche immediate, contattaci e ti inviamo i link ufficiali.
            </p>
            <div className="mt-4">
              <Button variant="luxury" asChild>
                <a href="/contatti">Contattaci per le recensioni</a>
              </Button>
            </div>
          </div>
        )}

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
