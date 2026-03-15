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

  // Redirect 301 permanenti
  async redirects() {
    return [
      // FIX CRITICO: /privacy-policy non esiste come route — la route reale è /privacy
      // Rimosso redirect /privacy → /privacy-policy (causava loop 404)
      // /termini → /termini-condizioni (route .jsx esiste)
            { source: "/appartamenti/apartment-1", destination: "/appartamenti/frangipane", permanent: true },
      { source: "/appartamenti/apartment-2", destination: "/appartamenti/fiordaliso", permanent: true },
      { source: "/appartamenti/apartment-3", destination: "/appartamenti/orchidea", permanent: true },
      { source: "/appartamenti/apartment-4", destination: "/appartamenti/tulipano", permanent: true },
      { source: "/appartamenti/apartment-5", destination: "/appartamenti/giglio", permanent: true },
      { source: "/appartamenti/apartment-6", destination: "/appartamenti/lavanda", permanent: true },
      { source: "/appartamenti/apartment-7", destination: "/appartamenti/geranio", permanent: true },
      { source: "/appartamenti/apartment-8", destination: "/appartamenti/gardenia", permanent: true },
      { source: "/appartamenti/apartment-9", destination: "/appartamenti/azalea", permanent: true },
      { source: "/appartamenti/1", destination: "/appartamenti/frangipane", permanent: true },
      { source: "/appartamenti/2", destination: "/appartamenti/fiordaliso", permanent: true },
      { source: "/appartamenti/3", destination: "/appartamenti/orchidea", permanent: true },
      { source: "/appartamenti/4", destination: "/appartamenti/tulipano", permanent: true },
      { source: "/appartamenti/5", destination: "/appartamenti/giglio", permanent: true },
      { source: "/appartamenti/6", destination: "/appartamenti/lavanda", permanent: true },
      { source: "/appartamenti/7", destination: "/appartamenti/geranio", permanent: true },
      { source: "/appartamenti/8", destination: "/appartamenti/gardenia", permanent: true },
      { source: "/appartamenti/9", destination: "/appartamenti/azalea", permanent: true },
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
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-icons'],
  },
}

module.exports = withNextIntl(nextConfig)
