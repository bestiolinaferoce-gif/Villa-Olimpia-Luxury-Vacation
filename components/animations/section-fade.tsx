"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SectionFadeProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function SectionFade({ children, delay = 0, className = "" }: SectionFadeProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}


