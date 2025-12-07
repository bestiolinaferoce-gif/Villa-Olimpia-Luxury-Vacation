'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Foto disponibili dalla gallery e location
// AGGIUNTO: Tutte le foto importate, con priorità alla piscina
const galleryImages = [
  // PISCINA - Prima sezione (priorità)
  {
    src: '/images/villa/gallery/pool-2.jpg',
    alt: 'Piscina Villa Olimpia - Grande piscina condivisa con solarium e vista mare',
    category: 'Piscina'
  },
  {
    src: '/images/villa/gallery/pool-3.jpg',
    alt: 'Piscina Villa Olimpia - Vista panoramica della piscina',
    category: 'Piscina'
  },
  // RELAX - Gazebo e aree relax
  {
    src: '/images/villa/gallery/gazebo-2.jpg',
    alt: 'Gazebo Villa Olimpia',
    category: 'Relax'
  },
  {
    src: '/images/villa/gallery/gazebo-3.jpg',
    alt: 'Gazebo Villa Olimpia - Area relax',
    category: 'Relax'
  },
  {
    src: '/images/villa/gallery/gazebo-night.jpg',
    alt: 'Gazebo Villa Olimpia di notte',
    category: 'Relax'
  },
  // TERRITORIO - Spiaggia
  {
    src: '/images/villa/location/beach-2.jpg',
    alt: 'Spiaggia dei Gigli',
    category: 'Territorio'
  },
  {
    src: '/images/villa/location/beach-3.jpg',
    alt: 'Spiaggia dei Gigli',
    category: 'Territorio'
  },
  {
    src: '/images/villa/location/beach-4.jpg',
    alt: 'Spiaggia dei Gigli - Vista panoramica',
    category: 'Territorio'
  },
  {
    src: '/images/villa/location/beach-5.jpg',
    alt: 'Spiaggia dei Gigli - Costa calabrese',
    category: 'Territorio'
  },
  {
    src: '/images/villa/location/beach-night.jpg',
    alt: 'Spiaggia dei Gigli notturna',
    category: 'Territorio'
  },
  // VILLA - Esterni e facciate (solo foto esistenti)
  {
    src: '/images/villa/gallery/exterior-1.jpg',
    alt: 'Esterni Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/exterior-2.jpg',
    alt: 'Facciata Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/exterior-3.jpg',
    alt: 'Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/exterior-4.jpg',
    alt: 'Esterni Villa Olimpia - Vista panoramica',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/entrance.jpg',
    alt: 'Ingresso Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/entrance-2.jpg',
    alt: 'Ingresso Villa Olimpia - Vista frontale',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/night-1.jpg',
    alt: 'Villa Olimpia di notte',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/night-2.jpg',
    alt: 'Villa Olimpia di notte - Illuminazione',
    category: 'Villa'
  }
].filter(img => img.src) // Filtra solo immagini valide

export function HomeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  // Auto-scroll continuo
  useEffect(() => {
    if (galleryImages.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000) // Cambia immagine ogni 4 secondi

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index))
  }

  const validImages = galleryImages.filter((_, idx) => !imageErrors.has(idx))

  // AGGIUNTO: Se non ci sono immagini valide, usa tutte le immagini disponibili
  const imagesToShow = validImages.length > 0 ? validImages : galleryImages

  // AGGIUNTO: Debug - rimuovere in produzione
  useEffect(() => {
    console.log('🏊 HomeGallery renderizzato:', {
      totalImages: galleryImages.length,
      validImages: validImages.length,
      imagesToShow: imagesToShow.length,
      currentIndex
    })
  }, [validImages.length, imagesToShow.length, currentIndex])

  if (imagesToShow.length === 0) {
    console.warn('⚠️ HomeGallery: Nessuna immagine disponibile')
    return (
      <section id="gallery-home" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Scopri Villa Olimpia</h2>
          <p className="text-muted-foreground">Caricamento immagini...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery-home" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-900">
            🏊‍♂️ La Nostra Piscina
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un'oasi di relax immersa nel verde della Calabria. Piscina privata con solarium attrezzato, 
            perfetta per momenti di puro relax sotto il sole calabrese.
          </p>
        </div>

        {/* Carousel principale */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            {imagesToShow.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: idx === currentIndex ? 1 : 0,
                  scale: idx === currentIndex ? 1 : 1.1
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${idx === currentIndex ? 'z-10' : 'z-0'}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={idx === 0}
                  onError={() => handleImageError(idx)}
                />
                {/* Overlay con categoria */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                  <div className="text-white">
                    <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                    <p className="text-lg font-semibold mt-2">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation arrows */}
          {imagesToShow.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + imagesToShow.length) % imagesToShow.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-20 transition"
                aria-label="Immagine precedente"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % imagesToShow.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-20 transition"
                aria-label="Immagine successiva"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {imagesToShow.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {imagesToShow.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Vai all'immagine ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {imagesToShow.slice(0, 5).map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-24 md:h-32 rounded-lg overflow-hidden transition-all ${
                idx === currentIndex ? 'ring-2 ring-primary scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`Vedi ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </button>
          ))}
        </div>

        {/* Descrizione Piscina - AGGIUNTO: Testo completo */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700">
            Immergiti nelle acque cristalline della nostra splendida piscina privata, circondata da un&apos;area solarium 
            attrezzata con lettini e ombrelloni. Il luogo perfetto per momenti di puro relax sotto il sole della Calabria, 
            ideale per famiglie e per chi cerca tranquillità e comfort durante la propria vacanza.
          </p>
        </div>
      </div>
    </section>
  )
}

