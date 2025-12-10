"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TopBannerProps {
  images: Array<{
    src: string
    alt: string
  }>
}

export function TopBanner({ images }: TopBannerProps) {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-r from-ocean via-ocean-dark to-primary mt-20">
      <div className="absolute inset-0">
        {/* Carousel di immagini scorrevoli */}
        <div className="flex animate-scroll-horizontal">
          {[...images, ...images].map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative flex-shrink-0 w-full h-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={85}
                sizes="100vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay con testo elegante */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-playfair font-bold mb-2"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            Benvenuti a Villa Olimpia
          </motion.h2>
          <motion.p
            className="text-sm md:text-lg text-white/95 font-light"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            Il tuo paradiso sulla costa calabrese
          </motion.p>
        </motion.div>
      </div>

      {/* Pattern decorativo sottile */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  )
}

