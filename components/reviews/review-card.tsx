"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle } from "lucide-react"
import { Review } from "@/data/reviews-complete"

interface ReviewCardProps {
  review: Review
  index: number
}

const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-violet-100 text-violet-700",
  "bg-teal-100 text-teal-700",
]

function InitialsAvatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(/[\s&+]+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("")
  const colorClass = AVATAR_COLORS[index % AVATAR_COLORS.length]
  return (
    <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-semibold text-base ${colorClass}`}>
      {initials}
    </div>
  )
}

export function ReviewCard({ review, index }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <InitialsAvatar name={review.author} index={index} />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{review.author}</p>
                  {review.verified && (
                    <div title="Ospite Verificato">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatDate(review.date)}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-semibold">
                {review.source === "Booking" && "🏨"}
                {review.source === "Airbnb" && "🏡"}
                {review.source === "Google" && "🔍"}
                {review.source === "Tripadvisor" && "⭐"}
                {" "}
                {review.source}
              </span>
              {review.verified && (
                <span className="text-[10px] text-green-600 font-medium">✓ Verificata</span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? "fill-amber-500 text-amber-500"
                    : "fill-muted text-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-base leading-relaxed text-foreground font-light">
            &quot;{review.text}&quot;
          </p>

          {/* Apartment if specified */}
          {review.apartment && (
            <p className="text-xs text-primary mt-3 font-medium">
              Appartamento: {review.apartment}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
