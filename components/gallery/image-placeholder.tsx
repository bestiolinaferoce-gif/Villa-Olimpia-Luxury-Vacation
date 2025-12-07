"use client"

import { motion } from "framer-motion"

interface ImagePlaceholderProps {
  index: number
  className?: string
}

export function ImagePlaceholder({ index, className = "" }: ImagePlaceholderProps) {
  const colors = [
    "from-ocean/30 to-primary/30",
    "from-primary/30 to-gold/30",
    "from-ocean/20 to-ocean-dark/20",
    "from-gold/20 to-primary/20",
    "from-primary/20 to-ocean/20",
  ]
  
  const colorClass = colors[index % colors.length]
  
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${colorClass} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-white/40 text-xs">Immagine {index + 1}</p>
        </div>
      </div>
    </div>
  )
}


