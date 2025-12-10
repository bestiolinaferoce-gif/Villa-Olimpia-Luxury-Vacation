/**
 * Performance Configuration
 * Ottimizzazioni per Page Speed (STEP 6.5)
 */

export const PERFORMANCE_CONFIG = {
  // Preconnect a domini esterni
  preconnectDomains: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google.com',
    'https://maps.googleapis.com',
  ],

  // Preload risorse critiche
  preloadResources: [
    {
      href: '/fonts/playfair-display.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      href: '/fonts/inter.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  ],

  // DNS Prefetch
  dnsPrefetch: [
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://vercel.live',
  ],

  // Font loading strategy
  fontDisplay: 'swap', // swap, optional, block, fallback, auto

  // Image optimization
  imageOptimization: {
    formats: ['image/avif', 'image/webp'],
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    quality: 85,
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 giorni
  },

  // Critical CSS
  criticalCSS: [
    // CSS critico da inlineare (da generare)
    // '@import "tailwindcss/base";',
    // '@import "tailwindcss/components";',
  ],

  // Lazy load components
  lazyLoadComponents: [
    'GoogleMap',
    'MapComponent',
    'DirectionsWidget',
    'HomeGallery',
    'WeatherWidget',
  ],
}

/**
 * Genera configurazione per meta tags performance
 * Nota: I meta tags sono già implementati direttamente in app/layout.tsx
 */
export function getPerformanceConfig() {
  return PERFORMANCE_CONFIG
}

