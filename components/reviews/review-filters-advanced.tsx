"use client"

import { Button } from "@/components/ui/button"
import { Star, Filter, Globe, Calendar, TrendingUp } from "lucide-react"
import { reviews } from "@/data/reviews-complete"

interface ReviewFiltersAdvancedProps {
  selectedRating: number | null
  selectedSource: string | null
  selectedLocale: string | null
  sortBy: "date" | "rating"
  onRatingChange: (rating: number | null) => void
  onSourceChange: (source: string | null) => void
  onLocaleChange: (locale: string | null) => void
  onSortChange: (sort: "date" | "rating") => void
}

export function ReviewFiltersAdvanced({
  selectedRating,
  selectedSource,
  selectedLocale,
  sortBy,
  onRatingChange,
  onSourceChange,
  onLocaleChange,
  onSortChange,
}: ReviewFiltersAdvancedProps) {
  // Ottieni conteggi per ogni filtro
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  }

  const sourceCounts = {
    Booking: reviews.filter(r => r.source === "Booking").length,
    Airbnb: reviews.filter(r => r.source === "Airbnb").length,
    Google: reviews.filter(r => r.source === "Google").length,
    Tripadvisor: reviews.filter(r => r.source === "Tripadvisor").length,
  }

  const localeCounts = {
    it: reviews.filter(r => r.locale === "it").length,
    en: reviews.filter(r => r.locale === "en").length,
    de: reviews.filter(r => r.locale === "de").length,
    fr: reviews.filter(r => r.locale === "fr").length,
    es: reviews.filter(r => r.locale === "es").length,
    nl: reviews.filter(r => r.locale === "nl").length,
  }

  const localeLabels = {
    it: "Italiano",
    en: "English",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
    nl: "Nederlands",
  }

  return (
    <div className="space-y-6 mb-8">
      {/* Rating Filters */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Star className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm uppercase tracking-wide">Filtra per Valutazione</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedRating === null ? "default" : "outline"}
            size="sm"
            onClick={() => onRatingChange(null)}
          >
            Tutte ({reviews.length})
          </Button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <Button
              key={rating}
              variant={selectedRating === rating ? "default" : "outline"}
              size="sm"
              onClick={() => onRatingChange(rating)}
              className="flex items-center gap-1"
            >
              <Star className="h-4 w-4" />
              {rating} ({ratingCounts[rating as keyof typeof ratingCounts]})
            </Button>
          ))}
        </div>
      </div>

      {/* Source Filters */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm uppercase tracking-wide">Filtra per Piattaforma</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedSource === null ? "default" : "outline"}
            size="sm"
            onClick={() => onSourceChange(null)}
          >
            Tutte le Piattaforme
          </Button>
          {Object.entries(sourceCounts).map(([source, count]) => (
            <Button
              key={source}
              variant={selectedSource === source ? "default" : "outline"}
              size="sm"
              onClick={() => onSourceChange(source)}
            >
              {source} ({count})
            </Button>
          ))}
        </div>
      </div>

      {/* Locale Filters */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm uppercase tracking-wide">Filtra per Lingua</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedLocale === null ? "default" : "outline"}
            size="sm"
            onClick={() => onLocaleChange(null)}
          >
            Tutte le Lingue
          </Button>
          {Object.entries(localeCounts).map(([locale, count]) => (
            <Button
              key={locale}
              variant={selectedLocale === locale ? "default" : "outline"}
              size="sm"
              onClick={() => onLocaleChange(locale)}
            >
              {localeLabels[locale as keyof typeof localeLabels]} ({count})
            </Button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm uppercase tracking-wide">Ordina per</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={sortBy === "date" ? "default" : "outline"}
            size="sm"
            onClick={() => onSortChange("date")}
            className="flex items-center gap-1"
          >
            <Calendar className="h-4 w-4" />
            Data (Più Recenti)
          </Button>
          <Button
            variant={sortBy === "rating" ? "default" : "outline"}
            size="sm"
            onClick={() => onSortChange("rating")}
            className="flex items-center gap-1"
          >
            <Star className="h-4 w-4" />
            Valutazione (Più Alta)
          </Button>
        </div>
      </div>
    </div>
  )
}


