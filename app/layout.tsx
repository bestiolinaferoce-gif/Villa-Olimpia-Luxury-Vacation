import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import Link from "next/link"
import "./globals.css"
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
import { I18nProvider } from "@/components/i18n-provider"
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

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
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
        <link rel="canonical" href="https://villaolimpiacaporizzuto.com" />

        {/* Performance - Preconnect */}
                <link rel="preload" as="image" href="/images/villa/gallery/Esterni_Piscina_Notte_01.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />

        {/* DNS Prefetch per Analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Hreflang tags - tutte le lingue */}
        <link rel="alternate" hrefLang="it" href="https://villaolimpiacaporizzuto.com" />
        <link rel="alternate" hrefLang="en" href="https://villaolimpiacaporizzuto.com/en" />
        <link rel="alternate" hrefLang="de" href="https://villaolimpiacaporizzuto.com/de" />
        <link rel="alternate" hrefLang="fr" href="https://villaolimpiacaporizzuto.com/fr" />
        <link rel="alternate" hrefLang="nl" href="https://villaolimpiacaporizzuto.com/nl" />
        <link rel="alternate" hrefLang="x-default" href="https://villaolimpiacaporizzuto.com" />
        {/* Meta tags Airbnb */}
        <meta property="og:type" content="lodging" />
        <meta property="business:contact_data:locality" content="Isola di Capo Rizzuto" />
        <meta property="business:contact_data:region" content="Calabria" />
        <meta property="business:contact_data:country_name" content="Italia" />
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
              "@type": "LodgingBusiness",
              name: "Villa Olimpia",
              description: "9 appartamenti di lusso con piscina privata a Capo Rizzuto, Calabria. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Disponibilità Giugno e Luglio 2026.",
              url: "https://villaolimpiacaporizzuto.com",
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
                { "@type": "AdministrativeArea", name: "Isola di Capo Rizzuto" },
                { "@type": "AdministrativeArea", name: "Le Castella" },
                { "@type": "AdministrativeArea", name: "Calabria" }
              ],
              priceRange: "€€",
              image: "https://villaolimpiacaporizzuto.com/og-image.jpg",
              numberOfRooms: 9,
              ...(getAverageRating() > 0 && reviews.length > 0 ? {
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: String(getAverageRating()),
                  reviewCount: reviews.length,
                  bestRating: 5,
                  worstRating: 1
                }
              } : {}),
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Piscina privata", value: true },
                { "@type": "LocationFeatureSpecification", name: "Parcheggio gratuito", value: true },
                { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
                { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
                { "@type": "LocationFeatureSpecification", name: "Cucina attrezzata", value: true },
                { "@type": "LocationFeatureSpecification", name: "Vista mare", value: true },
                { "@type": "LocationFeatureSpecification", name: "Terrazza privata", value: true },
                { "@type": "LocationFeatureSpecification", name: "Spiaggia Bandiera Blu a 100m", value: true },
                { "@type": "LocationFeatureSpecification", name: "Area Marina Protetta nelle vicinanze", value: true }
              ],
              nearbyAttraction: [
                { "@type": "TouristAttraction", name: "Spiaggia dei Gigli", description: "Spiaggia Bandiera Blu", distance: "100 metri" },
                { "@type": "TouristAttraction", name: "Area Marina Protetta Capo Rizzuto", description: "Riserva marina protetta", distance: "2 km" },
                { "@type": "TouristAttraction", name: "Le Castella", description: "Castello aragonese patrimonio storico", distance: "8 km" },
                { "@type": "TouristAttraction", name: "Valli Cupe", description: "Riserva naturale con cascate", distance: "65 km" },
                { "@type": "TouristAttraction", name: "Spiagge Rosse Bandiera Blu", description: "Spiagge con sabbia colorata", distance: "12 km" }
              ],
              checkInTime: "15:00",
              checkOutTime: "10:00",
              petsAllowed: false,
              availableAtOrFrom: {
                "@type": "Offer",
                name: "Giugno e Luglio 2026 — Tariffe vantaggiose",
                description: "Prenota direttamente per Giugno e Luglio 2026. Tariffe migliori rispetto ai portali.",
                priceCurrency: "EUR",
                availability: "https://schema.org/LimitedAvailability"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnalyticsUnified />
        <ErrorBoundary>
          {/* FIX HYDRATION: I18nProvider gestisce correttamente SSR/client mismatch */}
          <I18nProvider>
            <AutoOptimizer />
            <FloatingBooking />
            <NewsletterPopup />
            <DirectionsProvider>
              {/* Barra globale prenotazione diretta — June/July focused */}
              <div className="bg-primary text-white text-xs sm:text-sm" role="banner">
                <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span className="text-center sm:text-left">
                    <strong>Giugno e Luglio 2026:</strong> prenota direttamente — nessuna commissione, miglior tariffa garantita.
                  </span>
                  <Link
                    href="/contatti?source=topbar#prenota"
                    className="inline-flex items-center justify-center rounded-full bg-white text-primary px-4 py-1 text-xs sm:text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    Verifica disponibilità
                  </Link>
                </div>
              </div>
              <PreloadResources />
              <TouchOptimizer />
              <Header />
              <main className="site-shell min-h-screen">{children}</main>
              <Footer />
              <CookieConsent />
              <ScrollToTop />
              <WhatsAppButton />
            </DirectionsProvider>
          </I18nProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
