/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ottimizzazioni per Vercel
  reactStrictMode: true,
  
  // Configurazione immagini
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Variabili ambiente pubbliche
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
}

module.exports = nextConfig
