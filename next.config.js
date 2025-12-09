/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ottimizzazioni per Vercel
  reactStrictMode: true,
  
  // Configurazione immagini
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Next.js espone automaticamente le variabili NEXT_PUBLIC_* nel client
  // Non serve esplicitarle qui, ma le lasciamo per compatibilità
}

module.exports = nextConfig
