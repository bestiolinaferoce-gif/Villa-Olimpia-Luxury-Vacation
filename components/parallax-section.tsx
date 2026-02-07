'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ParallaxSectionProps {
  image: string
  alt: string
  children?: React.ReactNode
  className?: string
}

export default function ParallaxSection({ 
  image, 
  alt, 
  children,
  className = "h-screen"
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={ref} className={`relative ${className} overflow-hidden`}>
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={alt}
          priority
          quality={90}
        />
      </motion.div>
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        {children}
      </motion.div>
    </section>
  )
}












