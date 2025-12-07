'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryProps {
  images: string[]
  alt: string
}

export default function ApartmentGallery({ images, alt }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Filtra solo immagini che esistono (non placeholder vuoti)
  const validImages = images.filter(img => img && img !== '/images/villa/appartamenti/placeholder.jpg')

  if (validImages.length === 0) {
    return (
      <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <p className="text-blue-600 font-medium">Foto in arrivo</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Main image */}
      <div 
        className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <Image
          src={validImages[currentIndex]}
          alt={`${alt} - Immagine ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={currentIndex === 0}
        />
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <p className="text-white opacity-0 group-hover:opacity-100 text-lg font-medium">
            Clicca per ingrandire
          </p>
        </div>

        {/* Navigation arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1))
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1))
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Counter */}
        {validImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {validImages.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mt-4">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-20 rounded-lg overflow-hidden ${
                idx === currentIndex ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'
              } transition`}
              aria-label={`Vedi immagine ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${alt} - Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={validImages.map(img => ({ src: img }))}
        index={currentIndex}
        plugins={[Zoom]}
      />
    </>
  )
}


