"use client"

import { useEffect } from "react"

/**
 * Componente per pre-caricare risorse critiche
 * Migliora le performance del sito pre-caricando solo risorse essenziali
 */
export function PreloadResources() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Preload solo immagine hero (critica)
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/villa/gallery/Esterni_Piscina_Notte_01.jpg'
    link.fetchPriority = 'high'
    document.head.appendChild(link)

    // Preload font già gestiti da Next.js, non serve qui
  }, [])

  return null
}

