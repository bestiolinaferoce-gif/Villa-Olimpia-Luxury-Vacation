"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Fullscreen, ZoomIn } from "lucide-react"
import { motion } from "framer-motion"

interface PhotoswipeGalleryProps {
  images: string[]
  title?: string
}

export function PhotoswipeGallery({ images, title }: PhotoswipeGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // Converti immagini in formato per Lightbox
  const slides = images.map((src) => ({
    src: src.startsWith("/") ? src : `/images/villa/${src}`,
    alt: title || "Gallery image",
    width: 1920,
    height: 1080,
  }))

  if (images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Nessuna immagine disponibile</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((image, idx) => {
          const imageSrc = image.startsWith("/") ? image : `/images/villa/${image}`
          
          return (
            <motion.div
              key={idx}
              className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer group ${
                idx === 0 ? "col-span-2 md:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => {
                setIndex(idx)
                setOpen(true)
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {image.startsWith("/") || image.startsWith("http") ? (
                <Image
                  src={imageSrc}
                  alt={`${title || "Gallery"} image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  loading={idx < 4 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjBmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTBlMGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 flex items-center justify-center">
                  <span className="text-4xl opacity-30">{image}</span>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white">
                  <ZoomIn className="h-5 w-5" />
                  <span className="text-sm font-medium">Clicca per ingrandire</span>
                </div>
              </div>
              
              {/* Badge per prima immagine */}
              {idx === 0 && (
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                  <Fullscreen className="h-3 w-3 inline mr-1" />
                  {images.length} foto
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  )
}


