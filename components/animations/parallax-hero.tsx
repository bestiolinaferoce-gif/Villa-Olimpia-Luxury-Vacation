"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

interface ParallaxHeroProps {
  image: string
  alt: string
  children?: React.ReactNode
}

export function ParallaxHero({ image, alt, children }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}


