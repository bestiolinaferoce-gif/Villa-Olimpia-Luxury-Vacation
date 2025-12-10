"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface KenBurnsCarouselProps {
  images: Array<{
    src: string
    alt: string
  }>
  interval?: number
  kenBurnsDuration?: number
  fadeDuration?: number
}

export function KenBurnsCarousel({
  images,
  interval = 6000,
  kenBurnsDuration = 20,
  fadeDuration = 1.5,
}: KenBurnsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, interval, isPaused, images.length])

  // Varianti per l'effetto Ken Burns (zoom e pan)
  const kenBurnsVariants = [
    {
      scale: [1, 1.15],
      x: [0, -20],
      y: [0, -15],
    },
    {
      scale: [1, 1.2],
      x: [0, 15],
      y: [0, -10],
    },
    {
      scale: [1, 1.1],
      x: [0, -10],
      y: [0, 20],
    },
    {
      scale: [1, 1.18],
      x: [0, 20],
      y: [0, 10],
    },
  ]

  const currentVariant = kenBurnsVariants[currentIndex % kenBurnsVariants.length]

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration }}
          className="absolute inset-0"
        >
          <motion.div
            animate={currentVariant}
            transition={{
              duration: kenBurnsDuration,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Indicatori di posizione */}
      {images.length > 1 && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="focus:outline-none"
              aria-label={`Vai all'immagine ${index + 1}`}
            >
              <motion.div
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

