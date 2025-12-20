'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import { motion } from 'framer-motion'

interface PremiumGalleryProps {
  images: string[]
  alt?: string
  columns?: 2 | 3 | 4
}

export default function PremiumGallery({ 
  images, 
  alt = "Gallery",
  columns = 4 
}: PremiumGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }[columns]

  return (
    <>
      <div className={`grid ${gridCols} gap-4`}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={() => { setIndex(idx); setOpen(true) }}
          >
            <Image 
              src={img} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
              alt={`${alt} ${idx + 1}`}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map(img => ({ src: img }))}
        plugins={[Zoom, Fullscreen]}
      />
    </>
  )
}











