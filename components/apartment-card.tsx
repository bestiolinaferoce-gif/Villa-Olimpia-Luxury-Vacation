"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Maximize2 } from "lucide-react"

interface ApartmentCardProps {
  id: string
  name: string
  description: string
  image: string
  guests: number
  bedrooms: number
  price: number
  featured?: boolean
}

export function ApartmentCard({
  id,
  name,
  description,
  image,
  guests,
  bedrooms,
  price,
  featured = false,
}: ApartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 flex items-center justify-center">
            <span className="text-6xl opacity-30">{image}</span>
          </div>
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="luxury"
              size="sm"
              asChild
              className="w-full"
            >
              <Link href={`/appartamenti/${id}`}>
                <Maximize2 className="mr-2 h-4 w-4" />
                Dettagli
              </Link>
            </Button>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-playfair">{name}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{guests} ospiti</span>
            </div>
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{bedrooms} camere</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <span className="text-2xl font-bold text-primary">
                €{price}
              </span>
              <span className="text-sm text-muted-foreground">/notte</span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/appartamenti/${id}`}>Vedi Dettagli</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

