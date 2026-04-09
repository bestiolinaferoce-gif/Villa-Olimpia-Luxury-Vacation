'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { poolImages } from '@/lib/pool-images'

// Foto disponibili dalla gallery e location
// AGGIUNTO: Tutte le foto importate, con priorità alla piscina
const galleryImages = [
  // PISCINA - Prima sezione (priorità) - usando mapping centralizzato
  ...poolImages.all.map((src, idx) => ({
    src,
    alt: `Piscina Villa Olimpia - Piscina privata 12x6m con solarium e vista mare${idx > 0 ? ` - Vista ${idx + 1}` : ''}`,
    category: 'Piscina'
  })),
  // RELAX - Gazebo e aree relax
  {
    src: '/images/villa/gallery/Esterni_Gazebo_01.jpg',
    alt: 'Gazebo Villa Olimpia - Area relax',
    category: 'Relax'
  },
  {
    src: '/images/villa/gallery/Esterni_Portico_Giardino_01.jpg',
    alt: 'Portico e giardino Villa Olimpia',
    category: 'Relax'
  },
  // TERRITORIO - Spiaggia
  {
    src: '/images/territory/spiaggia-capopiccolo.jpg',
    alt: 'Spiaggia di Capopiccolo nell Area Marina Protetta di Capo Rizzuto',
    category: 'Territorio'
  },
  {
    src: '/images/territory/spiaggia-capopiccolo-lato-interno.jpg',
    alt: 'Cala di Capopiccolo con mare cristallino vicino Villa Olimpia',
    category: 'Territorio'
  },
  {
    src: '/images/territory/spiaggia-capopiccolo-panorama.jpg',
    alt: 'Panorama di Capopiccolo a Isola di Capo Rizzuto',
    category: 'Territorio'
  },
  {
    src: '/images/territory/area-marina-protetta-capo-rizzuto.jpg',
    alt: 'Area Marina Protetta di Capo Rizzuto con acque cristalline',
    category: 'Territorio'
  },
  {
    src: '/images/territory/tramonto-area-marina-protetta.jpg',
    alt: 'Tramonto sull Area Marina Protetta di Capo Rizzuto',
    category: 'Territorio'
  },
  {
    src: '/images/territory/castello-aragonese-le-castella.jpg',
    alt: 'Castello Aragonese di Le Castella visto dalla spiaggia',
    category: 'Territorio'
  },
  {
    src: '/images/territory/castello-aragonese-le-castella-2.jpg',
    alt: 'Vista del Castello Aragonese di Le Castella dalla costa',
    category: 'Territorio'
  },
  {
    src: '/images/territory/tramonto-castello-aragonese-le-castella.jpg',
    alt: 'Castello Aragonese di Le Castella al tramonto',
    category: 'Territorio'
  },
  {
    src: '/images/territory/santa-severina-panorama.jpg',
    alt: 'Santa Severina con castello e panorama sulla valle del Neto',
    category: 'Territorio'
  },
  {
    src: '/images/territory/santa-severina-castello.jpg',
    alt: 'Castello normanno di Santa Severina durante una gita culturale dalla costa ionica',
    category: 'Territorio'
  },
  {
    src: '/images/territory/valli-cupe-canyon.jpg',
    alt: 'Valli Cupe tra canyon, gole e sentieri nell entroterra calabrese',
    category: 'Territorio'
  },
  {
    src: '/images/territory/valli-cupe-cascata.jpg',
    alt: 'Valli Cupe con pareti rocciose e acqua lungo i percorsi naturalistici',
    category: 'Territorio'
  },
  // VILLA - Esterni e facciate (solo foto esistenti)
  {
    src: '/images/villa/gallery/Esterni_Facciata_Giorno_01.jpg',
    alt: 'Esterni Villa Olimpia - Facciata di giorno',
    category: 'Villa'
  },
  {
    src: '/images/villa/hero/facciata_villa_olimpia_.jpg',
    alt: 'Facciata Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/hero/facciata_esterna_villa_olimpia___3_.jpg',
    alt: 'Facciata esterna Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/Esterni_Facciata_Notte_01.jpg',
    alt: 'Villa Olimpia di notte',
    category: 'Villa'
  },
  {
    src: '/images/villa/gallery/Esterni_Facciata_Notte_02.jpg',
    alt: 'Villa Olimpia di notte - Illuminazione',
    category: 'Villa'
  },
  {
    src: '/images/villa/hero/ingresso_villa_olimpia.jpg',
    alt: 'Ingresso Villa Olimpia',
    category: 'Villa'
  },
  {
    src: '/images/villa/hero/facciata_esterna_villa_olimpia_notte.jpg',
    alt: 'Facciata esterna Villa Olimpia di notte',
    category: 'Villa'
  }
].filter(img => img.src) // Filtra solo immagini valide

export function HomeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  const shouldReduceMotion = useReducedMotion()

  // Auto-scroll continuo
  useEffect(() => {
    if (galleryImages.length === 0) return
    if (shouldReduceMotion) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000) // Cambia immagine ogni 4 secondi

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index))
  }

  const validImages = galleryImages.filter((_, idx) => !imageErrors.has(idx))

  // AGGIUNTO: Se non ci sono immagini valide, usa tutte le immagini disponibili
  const imagesToShow = validImages.length > 0 ? validImages : galleryImages

  useEffect(() => {
    if (imagesToShow.length === 0) return
    setCurrentIndex((i) => (i >= imagesToShow.length ? 0 : i))
  }, [imagesToShow.length])

  if (imagesToShow.length === 0) {
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
    <section id="gallery-home" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-900">
            🏊‍♂️ Piscina E Territorio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dalla piscina privata alle spiagge di Capopiccolo, fino a Le Castella e all&apos;Area Marina Protetta:
            scopri in un colpo d&apos;occhio i motivi per cui Villa Olimpia e la sua posizione fanno davvero la differenza.
          </p>
        </div>

        {/* Carousel principale */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            {(() => {
              const image = imagesToShow[currentIndex]
              return (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.45 }}
                  className="absolute inset-0 z-10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={currentIndex === 0}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZTBlMGUwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjVmNWY1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg=="
                    onError={() => handleImageError(currentIndex)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
                    <div className="text-white">
                      <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {image.category}
                      </span>
                      <p className="text-lg font-semibold mt-2">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })()}
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
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Descrizione Piscina - AGGIUNTO: Testo completo */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700">
            Villa Olimpia unisce il comfort degli appartamenti e della piscina a una posizione privilegiata:
            a pochi passi dal mare di Capopiccolo e a pochi minuti da Le Castella, una base ideale per vivere il meglio della costa ionica calabrese.
          </p>
        </div>
      </div>
    </section>
  )
}
