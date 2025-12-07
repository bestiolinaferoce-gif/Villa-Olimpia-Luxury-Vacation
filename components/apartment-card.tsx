"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Maximize2, Home } from "lucide-react"

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
  const [imageError, setImageError] = useState(false)
  const isPlaceholder = image.includes('placeholder') || !image.startsWith('/')
  const showPlaceholder = isPlaceholder || imageError

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        y: -10
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col cursor-pointer">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-ocean/20 to-primary/20">
          {!showPlaceholder && image.startsWith('/') ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={image}
                alt={`Appartamento ${name} Villa Olimpia Capo Rizzuto - ${description.substring(0, 50)}...`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjBmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTBlMGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="
                onError={() => setImageError(true)}
              />
            </motion.div>
          ) : null}
          {showPlaceholder && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <Home className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-600 font-medium">Foto in arrivo</p>
              </div>
            </div>
          )}
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                Premium
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
          <CardTitle className="text-xl font-playfair text-gray-900">{name}</CardTitle>
          <CardDescription className="line-clamp-2 text-gray-600">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
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
              <span className="text-2xl font-bold text-blue-600">
                €{price}
              </span>
              <span className="text-sm text-gray-600">/notte</span>
            </div>
            <Button 
              size="sm" 
              className="bg-[#FFC107] text-gray-900 hover:bg-[#FFD54F] font-semibold"
              asChild
            >
              <Link href={`/appartamenti/${id}`}>Vedi Dettagli</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

