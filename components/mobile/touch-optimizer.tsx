"use client"

import { useEffect } from "react"

/**
 * Componente per ottimizzazioni touch e mobile
 * - Previene zoom su double-tap
 * - Ottimizza scroll su iOS
 * - Gestisce viewport height su mobile
 */
export function TouchOptimizer() {
  useEffect(() => {
    // Solo nel browser
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    // Previeni zoom su double-tap (solo su mobile)
    let lastTouchEnd = 0
    const preventZoom = (e: TouchEvent) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }

    // Aggiungi listener solo su mobile
    if (window.innerWidth <= 768) {
      document.addEventListener("touchend", preventZoom, { passive: false })
    }

    // Fix per viewport height su mobile (evita problemi con browser bar)
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    
    setVH()
    window.addEventListener("resize", setVH)
    window.addEventListener("orientationchange", setVH)

    // Smooth scroll behavior
    if (typeof CSS !== 'undefined' && CSS.supports("scroll-behavior", "smooth")) {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    return () => {
      document.removeEventListener("touchend", preventZoom)
      window.removeEventListener("resize", setVH)
      window.removeEventListener("orientationchange", setVH)
    }
  }, [])

  return null
}


