"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageSkeletonProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
}

export function ImageSkeleton({ 
  src, 
  alt, 
  className = "", 
  fill = false, 
  width = 800, 
  height = 600,
  sizes 
}: ImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  if (fill) {
    return (
      <div className="relative">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          sizes={sizes}
        />
      </div>
    )
  }

  return (
    <div className="relative" style={{ width, height }}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        sizes={sizes}
      />
    </div>
  )
}

