"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface ReviewFiltersProps {
  selectedRating: number | null
  onRatingChange: (rating: number | null) => void
}

export function ReviewFilters({ selectedRating, onRatingChange }: ReviewFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedRating === null ? "default" : "outline"}
        size="sm"
        onClick={() => onRatingChange(null)}
      >
        Tutte
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
          {rating}
        </Button>
      ))}
    </div>
  )
}


