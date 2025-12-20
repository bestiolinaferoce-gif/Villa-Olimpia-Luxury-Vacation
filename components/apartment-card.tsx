"use client"

import { memo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Maximize2, Home, Star, ArrowRight } from "lucide-react"

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

const ApartmentCardComponent = ({
  id,
  name,
  description,
  image,
  guests,
  bedrooms,
  price,
  featured = false,
}: ApartmentCardProps) => {
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
      className="h-full"
    >
      <Card className="group overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer border-2 border-transparent hover:border-primary/40 hover:ring-4 hover:ring-primary/10 relative">
        {/* Badge Premium */}
        {featured && (
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
            >
              <Star className="w-3 h-3 fill-current" />
              Premium
            </motion.div>
          </div>
        )}

        {/* Immagine */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-ocean/20 to-primary/20">
          {!showPlaceholder && image.startsWith('/') ? (
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Home className="w-20 h-20 text-blue-400 mx-auto mb-3 opacity-50" />
                <p className="text-blue-600 font-medium">Foto in arrivo</p>
              </div>
            </div>
          )}
          
          {/* Overlay hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* CTA Button on Hover */}
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="default"
              size="sm"
              asChild
              className="w-full bg-white text-primary hover:bg-primary hover:text-white font-semibold shadow-xl"
            >
              <Link href={`/appartamenti/${id}`}>
                <Maximize2 className="mr-2 h-4 w-4" />
                Vedi Dettagli Completi
              </Link>
            </Button>
          </div>
        </div>

        {/* Contenuto */}
        <CardHeader className="p-6 pb-4">
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CardTitle className="text-2xl font-playfair text-gray-900 group-hover:text-primary transition-colors mb-2">
              {name}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-gray-600 text-sm leading-relaxed">
              {description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
          {/* Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-semibold">{guests} ospiti</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg">
              <Bed className="h-4 w-4 text-primary" />
              <span className="font-semibold">{bedrooms} camere</span>
            </div>
          </div>

          {/* Prezzo e CTA */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 mb-1">A partire da</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-baseline gap-1"
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  €{price}
                </span>
                <span className="text-sm text-gray-600 font-medium">/notte</span>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary font-semibold shadow-lg group/btn"
                asChild
              >
                <Link href={`/appartamenti/${id}`}>
                  <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
                    Vedi Dettagli
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const ApartmentCard = memo(ApartmentCardComponent)
ApartmentCard.displayName = 'ApartmentCard'
