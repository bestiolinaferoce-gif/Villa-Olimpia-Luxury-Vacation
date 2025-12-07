"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ImageReveal({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
  priority = false,
}: ImageRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"
        initial={{ x: "-100%" }}
        animate={inView && loaded ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        priority={priority}
        quality={85}
      />
    </motion.div>
  )
}


