import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/CookieConsent"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PreloadResources } from "@/components/performance/preload-resources"
import { TouchOptimizer } from "@/components/mobile/touch-optimizer"
import { defaultMetadata } from "@/lib/metadata"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://villaolimpia.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Villa Olimpia",
              description: "9 appartamenti di lusso con piscina privata a Capo Rizzuto, Calabria. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto.",
              url: "https://villaolimpia.com",
              telephone: "+393290479193",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Località Capopiccolo snc",
                addressLocality: "Isola di Capo Rizzuto",
                addressRegion: "Calabria",
                postalCode: "88841",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.913856,
                longitude: 17.0754964,
              },
              priceRange: "€€",
              image: "https://villaolimpia.com/og-image.jpg",
              numberOfRooms: 9,
              starRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1"
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Piscina privata",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parcheggio gratuito",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Wi-Fi gratuito",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Aria condizionata",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Cucina attrezzata",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Vista mare",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Terrazza privata",
                  value: true
                }
              ],
              checkInTime: "15:00",
              checkOutTime: "10:00",
              petsAllowed: false
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <PreloadResources />
        <TouchOptimizer />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
}
