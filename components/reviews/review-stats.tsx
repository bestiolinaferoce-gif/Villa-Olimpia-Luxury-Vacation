"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { getAverageRating, getRatingDistribution, reviews } from "@/data/reviews-detailed"

export function ReviewStats() {
  const averageRating = getAverageRating()
  const distribution = getRatingDistribution()
  const totalReviews = reviews.length

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Average Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-playfair">Valutazione Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-4xl font-bold text-primary">{averageRating}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(averageRating)
                      ? "fill-gold text-gold"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Basato su {totalReviews} recensioni
          </p>
        </CardContent>
      </Card>

      {/* Total Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-playfair">Recensioni Totali</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary mb-2">{totalReviews}</div>
          <p className="text-sm text-muted-foreground">
            Recensioni verificate e generate
          </p>
        </CardContent>
      </Card>

      {/* Rating Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-playfair">Distribuzione</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = distribution[rating as keyof typeof distribution]
              const percentage = (count / totalReviews) * 100
              return (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm w-12">{rating} stelle</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8 text-right">
                    {count}
                  </span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

