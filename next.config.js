const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ottimizzazioni per Vercel
  reactStrictMode: true,

  // Configurazione immagini ottimizzata (Next.js 16+ compatibile)
  images: {
    // Remote patterns per immagini esterne
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 giorni cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compressione
  compress: true,

  // Note: swcMinify è sempre abilitato in Next.js 16+, non serve specificarlo

  // Headers di sicurezza e caching
  async headers() {
    return [
      // Security headers per tutte le route
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
      // Cache headers per immagini
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache headers per static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirect 301 permanenti
  async redirects() {
    return [
      // FIX CRITICO: /privacy-policy non esiste come route — la route reale è /privacy
      // Rimosso redirect /privacy → /privacy-policy (causava loop 404)
      // /termini → /termini-condizioni (route .jsx esiste)
      { source: "/termini", destination: "/termini-condizioni", permanent: true },
      // Route duplicate inglese → italiane (301 permanente per SEO)
      { source: "/apartments", destination: "/appartamenti", permanent: true },
      { source: "/apartments/:path*", destination: "/appartamenti/:path*", permanent: true },
      { source: "/rooms", destination: "/appartamenti", permanent: true },
      { source: "/camere", destination: "/appartamenti", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      // Protezione URL interni da crawling diretto
      { source: "/utm", destination: "/", permanent: false },
      { source: "/verifica-analytics", destination: "/", permanent: false },
      { source: "/preview-mappa", destination: "/", permanent: false },
    ];
  },

  // Ottimizzazioni bundle
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = withNextIntl(nextConfig)
