// Utility per ottimizzazione immagini

export function getOptimizedImageUrl(
  src: string,
  width?: number,
  quality: number = 85
): string {
  // Se è un'immagine locale, usa next/image automaticamente
  if (src.startsWith('/')) {
    return src
  }
  
  // Per immagini remote, potresti usare un servizio di ottimizzazione
  // Esempio: Cloudinary, Imgix, etc.
  return src
}

export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  // Genera un placeholder blur SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad">
          <stop offset="0%" stop-color="#f0f0f0" />
          <stop offset="100%" stop-color="#e0e0e0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `.trim()
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

// Dimensioni responsive per immagini
export const imageSizes = {
  thumbnail: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  hero: '100vw',
  gallery: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}


