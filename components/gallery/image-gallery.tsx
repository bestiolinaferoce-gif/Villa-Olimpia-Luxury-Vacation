"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ImagePlaceholder } from "./image-placeholder"

interface ImageGalleryProps {
  images: string[]
  title?: string
}

interface GalleryItemProps {
  image: string
  index: number
  onClick: () => void
  isFirst: boolean
}

function GalleryItem({ image, index, onClick, isFirst }: GalleryItemProps) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.div
      className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer group ${
        isFirst ? "col-span-2 md:col-span-2" : ""
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {imageError ? (
        <ImagePlaceholder index={index} />
      ) : (
        <>
          <Image
            src={image}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">
              Clicca per ingrandire
            </span>
          </div>
        </>
      )}
    </motion.div>
  )
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      {title && (
        <h3 className="text-2xl font-playfair font-bold mb-6">{title}</h3>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            index={index}
            onClick={() => openLightbox(index)}
            isFirst={index === 0}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-[80vh] flex items-center justify-center">
                {images[selectedIndex] ? (
                  <Image
                    src={images[selectedIndex]}
                    alt={`Gallery image ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                ) : (
                  <ImagePlaceholder index={selectedIndex} className="w-full h-full" />
                )}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded">
                    {selectedIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

