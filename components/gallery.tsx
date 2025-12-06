"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryProps {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
              index === 0 ? "col-span-2 md:col-span-2" : ""
            }`}
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 flex items-center justify-center">
              <span className="text-6xl opacity-50">{image}</span>
            </div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 hover:opacity-100 transition-opacity">
                Clicca per ingrandire
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
            <DialogContent className="max-w-6xl w-full p-0 bg-black/95">
              <div className="relative">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="relative h-[80vh] flex items-center justify-center">
                  <div className="text-9xl opacity-50">
                    {images[selectedIndex]}
                  </div>
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                  {selectedIndex + 1} / {images.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

