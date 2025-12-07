"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CounterAnimation({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}


