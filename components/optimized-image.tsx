'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  aspectRatio?: '16/9' | '4/3' | '1/1'
  fill?: boolean
  width?: number
  height?: number
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio = '16/9',
  fill = true,
  width,
  height
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Placeholder se l'immagine non esiste
  const placeholderSrc = '/images/placeholder-apartment.jpg'

  const imageSrc = error ? placeholderSrc : src

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={fill ? { aspectRatio } : { width, height }}
    >
      {/* Loading skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {fill ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          priority={priority}
          quality={85}
        />
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          priority={priority}
          quality={85}
        />
      )}

      {/* Overlay se placeholder */}
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🏠</div>
            <p className="text-blue-600 font-medium">Foto in arrivo</p>
          </div>
        </div>
      )}
    </div>
  )
}


