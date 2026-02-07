'use client'

import { useEffect } from 'react'

/**
 * Componente che monitora e ottimizza automaticamente il sito
 * Gestisce fallback immagini, monitora performance, e altro
 */
export function AutoOptimizer() {
  useEffect(() => {
    // 1. Monitora errori immagine e applica fallback automatico
    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement
      if (img && !img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = 'true'
        // Fallback a placeholder
        img.src = '/images/placeholder.jpg'
        img.onerror = null // Evita loop infiniti
      }
    }

    // Applica handler a tutte le immagini esistenti e future
    const imageObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const images = (node as Element).querySelectorAll('img')
            images.forEach((img) => {
              img.addEventListener('error', handleImageError)
            })
          }
        })
      })
    })

    imageObserver.observe(document.body, { childList: true, subtree: true })

    // Applica a immagini già presenti
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', handleImageError)
    })

    // 2. Monitora performance (LCP, CLS, etc.)
    if ('PerformanceObserver' in window) {
      try {
        const perfObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Log in development solo
            if (process.env.NODE_ENV === 'development') {
              if (entry.entryType === 'largest-contentful-paint') {
                const lcp = entry as PerformanceEntry & { startTime: number }
                if (lcp.startTime > 2500) {
                  console.warn(`⚠️ LCP slow: ${lcp.startTime.toFixed(0)}ms`)
                }
              }
            }
          })
        })
        
        perfObserver.observe({ 
          entryTypes: ['largest-contentful-paint', 'layout-shift'] 
        })
      } catch (e) {
        // PerformanceObserver non supportato o errore
      }
    }

    // 3. Preload risorse critiche
    const preloadCriticalResources = () => {
      const criticalLinks = [
        '/images/villa/gallery/night-1.jpg',
        '/images/villa/hero/facciata_villa_olimpia_.jpg'
      ]
      
      criticalLinks.forEach((href) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = href
        document.head.appendChild(link)
      })
    }

    preloadCriticalResources()

    // Cleanup
    return () => {
      imageObserver.disconnect()
      document.querySelectorAll('img').forEach((img) => {
        img.removeEventListener('error', handleImageError)
      })
    }
  }, [])

  return null // Componente invisibile
}












