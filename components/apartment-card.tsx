"use client"

import { memo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
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

function ApartmentCardComponent({
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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.03,
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.25, 0, 1] }}
    >
      <Card className="group overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer border-2 border-transparent hover:border-primary/30 hover:ring-2 hover:ring-primary/10">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CardTitle className="text-xl font-playfair text-gray-900 group-hover:text-primary transition-colors">{name}</CardTitle>
          </motion.div>
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
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-blue-600 group-hover:text-primary transition-colors">
                €{price}
              </span>
              <span className="text-sm text-gray-600">/notte</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="sm" 
                className="bg-[#FFC107] text-gray-900 hover:bg-[#FFD54F] font-semibold group/btn"
                asChild
              >
                <Link href={`/appartamenti/${id}`}>
                  <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
                    Vedi Dettagli
                  </span>
                  <svg className="w-4 h-4 ml-1 inline-block group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

