"use client"

import { ReactNode, Suspense } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
  threshold?: number
}

export function LazySection({
  children,
  fallback,
  className = "",
  threshold = 0.1,
}: LazySectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  })

  const defaultFallback = (
    <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
  )

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  )
}


