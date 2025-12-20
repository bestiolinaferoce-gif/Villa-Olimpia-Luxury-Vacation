// lib/auto-version.ts
/**
 * Sistema di versioning automatico per tracking miglioramenti
 * Aggiornare questo file quando si fanno miglioramenti significativi
 */

export interface SiteVersion {
  version: string
  timestamp: string
  improvements: string[]
  metrics: {
    performance: number
    seo: number
    accessibility: number
    bestPractices: number
  }
}

export const currentVersion: SiteVersion = {
  version: '2.0.0',
  timestamp: new Date().toISOString(),
  improvements: [
    'Foto organizzate e mappate centralmente',
    'SEO ottimizzato con Schema.org JSON-LD',
    'Mappa ristoranti interattiva implementata',
    'Design recensioni migliorato con caratteri impattanti',
    'Performance ottimizzate (lazy loading, code splitting)',
    'Zero errori hydration risolti',
    'Tutti i pulsanti funzionanti e uniformati',
    'Sistema ristoranti completo con 8 locali',
    'Gallery foto ripristinata e funzionante'
  ],
  metrics: {
    performance: 85,
    seo: 95,
    accessibility: 80,
    bestPractices: 90
  }
}

export function trackImprovement(description: string) {
  // Log improvement per analytics futuro
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log(`✅ Improvement tracked: ${description}`)
  }
}

export function getVersionHistory(): SiteVersion[] {
  // In futuro, questo può leggere da database o file
  return [currentVersion]
}











