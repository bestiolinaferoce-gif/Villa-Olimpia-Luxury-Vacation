import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Villa Olimpia - Luxury Vacation Rentals in Calabria, Italy",
    template: "%s | Villa Olimpia",
  },
  description: "Experience luxury vacation rentals in Calabria, Italy. Stunning apartments with sea views in Tropea. Book your perfect Mediterranean getaway.",
  keywords: ["villa calabria", "vacation rental tropea", "luxury apartments calabria", "italy vacation rental", "calabria luxury villa", "tropea apartments", "calabria beach rental"],
  authors: [{ name: "Villa Olimpia" }],
  creator: "Villa Olimpia",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://villaolimpia.com",
    siteName: "Villa Olimpia",
    title: "Villa Olimpia - Luxury Vacation Rentals in Calabria",
    description: "Experience luxury vacation rentals in Calabria, Italy. Stunning apartments with sea views in Tropea.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa Olimpia - Luxury Vacation Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Olimpia - Luxury Vacation Rentals in Calabria",
    description: "Experience luxury vacation rentals in Calabria, Italy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://villaolimpia.com",
  },
}

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
              description: "Luxury vacation rentals in Calabria, Italy",
              url: "https://villaolimpia.com",
              telephone: "+393491234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via della Costa",
                addressLocality: "Tropea",
                addressRegion: "Calabria",
                postalCode: "89861",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.6775,
                longitude: 15.8969,
              },
              priceRange: "€€€",
              image: "https://villaolimpia.com/og-image.jpg",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  )
}
