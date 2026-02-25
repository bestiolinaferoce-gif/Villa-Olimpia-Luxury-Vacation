import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "../globals.css"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/CookieConsent"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PreloadResources } from "@/components/performance/preload-resources"
import { TouchOptimizer } from "@/components/mobile/touch-optimizer"
import { DirectionsProvider } from "@/components/directions-context"
import { ErrorBoundary } from "@/components/error-boundary"
import { defaultMetadata } from "@/lib/metadata"
import { AnalyticsUnified } from "@/components/analytics/analytics-unified"
import { AutoOptimizer } from "@/components/auto-optimizer"
import FloatingBooking from "@/components/floating-booking"
import NewsletterPopup from "@/components/newsletter-popup"
import { getAverageRating, reviews } from "@/data/reviews-complete"

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  ...defaultMetadata,
  alternates: {
    languages: {
      'it': 'https://villaolimpiacaporizzuto.com/it',
      'en': 'https://villaolimpiacaporizzuto.com/en',
      'de': 'https://villaolimpiacaporizzuto.com/de',
      'fr': 'https://villaolimpiacaporizzuto.com/fr',
      'nl': 'https://villaolimpiacaporizzuto.com/nl',
      'x-default': 'https://villaolimpiacaporizzuto.com',
    },
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // In Next.js 16, params è una Promise
  const { locale } = await params
  
  // Valida che il locale sia supportato
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Carica i messaggi per il locale corrente
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* Consent Mode v2 - PRIMO script, prima di GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'denied',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 500
      });
    `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href={`https://villaolimpiacaporizzuto.com/${locale}`} />
        
        {/* Performance - Preconnect */}
                <link rel="preload" as="image" href="/images/villa/gallery/Esterni_Piscina_Notte_01.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch per Analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Hreflang tags per multilingua */}
        <link rel="alternate" hrefLang="it" href="https://villaolimpiacaporizzuto.com/it" />
        <link rel="alternate" hrefLang="en" href="https://villaolimpiacaporizzuto.com/en" />
        <link rel="alternate" hrefLang="de" href="https://villaolimpiacaporizzuto.com/de" />
        <link rel="alternate" hrefLang="fr" href="https://villaolimpiacaporizzuto.com/fr" />
        <link rel="alternate" hrefLang="nl" href="https://villaolimpiacaporizzuto.com/nl" />
        <link rel="alternate" hrefLang="x-default" href="https://villaolimpiacaporizzuto.com" />
        
        {/* Meta tag posizione */}
        <meta property="business:contact_data:locality" content="Isola di Capo Rizzuto" />
        <meta property="business:contact_data:region" content="Calabria" />
        <meta property="business:contact_data:country_name" content={locale === 'en' ? 'Italy' : locale === 'de' ? 'Italien' : locale === 'fr' ? 'Italie' : locale === 'nl' ? 'Italië' : 'Italia'} />
        <meta property="place:location:latitude" content="38.913856" />
        <meta property="place:location:longitude" content="17.0754964" />
        {/* Meta tags Facebook/Meta */}
        <meta property="business:contact_data:street_address" content="Località Capopiccolo snc" />
        <meta property="business:contact_data:postal_code" content="88841" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LodgingBusiness", "VacationRental"],
              "@id": `https://villaolimpiacaporizzuto.com/${locale}#business`,
              name: "Villa Olimpia",
              description: locale === 'it' 
                ? "9 appartamenti di lusso con piscina privata a Capo Rizzuto, Calabria. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto."
                : locale === 'en'
                ? "9 luxury apartments with private pool in Capo Rizzuto, Calabria. 100 meters from Spiaggia dei Gigli, Capo Rizzuto Marine Protected Area."
                : "9 luxury apartments with private pool in Capo Rizzuto, Calabria.",
              url: `https://villaolimpiacaporizzuto.com/${locale}`,
              telephone: "+393335773390",
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
              hasMap: "https://www.google.com/maps/search/?api=1&query=38.913856,17.0754964",
              sameAs: [
                "https://www.facebook.com/villaolimpiacaporizzuto",
                "https://www.instagram.com/villaolimpiacaporizzuto"
              ],
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Isola di Capo Rizzuto"
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Le Castella"
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Calabria"
                }
              ],
              priceRange: "€€",
              image: "https://villaolimpiacaporizzuto.com/og-image.jpg",
              numberOfRooms: 9,
              ...(getAverageRating() > 0 && reviews.length > 0 ? {
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: Math.round(getAverageRating() * 10) / 10,
                  reviewCount: reviews.length,
                  bestRating: 5,
                  worstRating: 1
                }
              } : {}),
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Piscina privata" : locale === 'en' ? "Private pool" : "Pool",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Parcheggio gratuito" : locale === 'en' ? "Free parking" : "Parking",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Wi-Fi gratuito" : locale === 'en' ? "Free Wi-Fi" : "WiFi",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Aria condizionata" : locale === 'en' ? "Air conditioning" : "AC",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Cucina attrezzata" : locale === 'en' ? "Fully equipped kitchen" : "Kitchen",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Vista mare" : locale === 'en' ? "Sea view" : "Sea view",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Terrazza privata" : locale === 'en' ? "Private terrace" : "Terrace",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Spiaggia Bandiera Blu a 100m" : locale === 'en' ? "Blue Flag beach at 100m" : "Beach 100m",
                  value: true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: locale === 'it' ? "Area Marina Protetta nelle vicinanze" : locale === 'en' ? "Marine Protected Area nearby" : "Protected area",
                  value: true
                }
              ],
              nearbyAttraction: [
                {
                  "@type": "TouristAttraction",
                  name: "Spiaggia dei Gigli",
                  description: locale === 'it' ? "Spiaggia Bandiera Blu" : locale === 'en' ? "Blue Flag beach" : "Beach",
                  distance: locale === 'it' ? "100 metri" : "100 meters"
                },
                {
                  "@type": "TouristAttraction",
                  name: locale === 'it' ? "Area Marina Protetta Capo Rizzuto" : "Capo Rizzuto Marine Protected Area",
                  description: locale === 'it' ? "Riserva marina protetta" : "Marine protected reserve",
                  distance: "2 km"
                },
                {
                  "@type": "TouristAttraction",
                  name: "Le Castella",
                  description: locale === 'it' ? "Castello aragonese patrimonio storico" : "Aragonese castle historical heritage",
                  distance: "8 km"
                },
                {
                  "@type": "TouristAttraction",
                  name: "Valli Cupe",
                  description: locale === 'it' ? "Riserva naturale con cascate" : "Natural reserve with waterfalls",
                  distance: "65 km"
                },
                {
                  "@type": "TouristAttraction",
                  name: locale === 'it' ? "Spiagge Rosse Bandiera Blu" : "Red Beaches Blue Flag",
                  description: locale === 'it' ? "Spiagge con sabbia colorata" : "Beaches with colored sand",
                  distance: "12 km"
                }
              ],
              checkInTime: "15:00",
              checkOutTime: "10:00",
              petsAllowed: false
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnalyticsUnified />
        <ErrorBoundary>
          <NextIntlClientProvider messages={messages}>
            <AutoOptimizer />
            <FloatingBooking />
            <NewsletterPopup />
            <DirectionsProvider>
              <div className="bg-primary text-white text-xs sm:text-sm">
                <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span className="text-center sm:text-left">
                    Prenotazione diretta Villa Olimpia: nessuna commissione di portali e migliori tariffe sulle stesse date.
                  </span>
                  <Link
                    href="/contatti?source=topbar#prenota"
                    className="inline-flex items-center justify-center rounded-full bg-white text-primary px-4 py-1 text-xs sm:text-sm font-semibold hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                  >
                    Verifica disponibilità
                  </Link>
                </div>
              </div>
              <PreloadResources />
              <TouchOptimizer />
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <CookieConsent />
              <ScrollToTop />
              <WhatsAppButton />
            </DirectionsProvider>
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
