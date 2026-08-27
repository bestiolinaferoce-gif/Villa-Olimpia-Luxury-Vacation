import type { Metadata, Viewport } from "next"
import { headers } from "next/headers"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { BandieraBluTopBanner } from "@/components/BandieraBluTopBanner"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/CookieConsent"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TouchOptimizer } from "@/components/mobile/touch-optimizer"
import { DirectionsProvider } from "@/components/directions-context"
import { ErrorBoundary } from "@/components/error-boundary"
import { defaultMetadata, BASE_URL } from "@/lib/metadata"
import { AnalyticsUnified } from "@/components/analytics/analytics-unified"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { MetaPixelOptional } from "@/components/analytics/meta-pixel"
import { Analytics } from "@vercel/analytics/next"
import { SeasonalRootOverlays } from "@/components/seasonal/SeasonalRootOverlays"
import { I18nProvider } from "@/components/i18n-provider"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"

import { apartments, getApartmentSlug } from "@/data/apartments"
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

const villaLatitude = String(VILLA_OLIMPIA_LOCATION.coordinates.latitude)
const villaLongitude = String(VILLA_OLIMPIA_LOCATION.coordinates.longitude)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const locale = requestHeaders.get("x-next-intl-locale") ?? "it"

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
        {/* viewport gestito tramite export const viewport (Next.js App Router) */}
        <link rel="icon" href="/favicon-neutral.svg" type="image/svg+xml" />

        {/* Meta tag posizione e contatti Facebook / Open Graph */}
        <meta property="place:location:latitude" content={villaLatitude} />
        <meta property="place:location:longitude" content={villaLongitude} />
        <meta property="business:contact_data:street_address" content={VILLA_OLIMPIA_LOCATION.address.fullAddress} />
        <meta property="business:contact_data:locality" content="Isola di Capo Rizzuto" />
        <meta property="business:contact_data:region" content="KR" />
        <meta property="business:contact_data:postal_code" content="88841" />
        <meta property="business:contact_data:country_name" content="IT" />
        <meta property="og:latitude" content={villaLatitude} />
        <meta property="og:longitude" content={villaLongitude} />
        <meta property="og:street-address" content={VILLA_OLIMPIA_LOCATION.address.fullAddress} />
        <meta property="og:locality" content="Isola di Capo Rizzuto" />
        <meta property="og:region" content="KR" />
        <meta property="og:postal-code" content="88841" />
        <meta property="og:country-name" content="IT" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "@id": `${BASE_URL}/#business`,
              name: "Villa Olimpia",
              description:
                "9 appartamenti con piscina esterna condivisa a Capopiccolo, nel cuore dell'Area Marina Protetta di Capo Rizzuto. A 100 metri dalla Spiaggia dei Gigli (Bandiera Blu), con terrazza, aria condizionata e cucina attrezzata.",
              url: BASE_URL,
              telephone: "+393335773390",
              address: {
                "@type": "PostalAddress",
                streetAddress: `${VILLA_OLIMPIA_LOCATION.address.street} ${VILLA_OLIMPIA_LOCATION.address.number}`,
                addressLocality: VILLA_OLIMPIA_LOCATION.address.city,
                addressRegion: VILLA_OLIMPIA_LOCATION.address.province,
                postalCode: VILLA_OLIMPIA_LOCATION.address.postalCode,
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
                longitude: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
              },
              hasMap: VILLA_OLIMPIA_LOCATION.coordinates.googleMaps,
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
              image: [
                `${BASE_URL}/og-image.jpg`,
                `${BASE_URL}/images/villa/gallery/Esterni_Piscina_Notte_01.jpg`,
              ],
              numberOfRooms: 9,
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Piscina esterna condivisa", value: true },
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
                { "@type": "TouristAttraction", name: "Area Marina Protetta Capo Rizzuto", description: "Costa protetta e snorkeling", distance: "nelle vicinanze" },
                { "@type": "TouristAttraction", name: "Le Castella", description: "Castello aragonese patrimonio storico", distance: "8 km" },
                { "@type": "TouristAttraction", name: "Valli Cupe", description: "Riserva naturale con cascate", distance: "65 km" },
                { "@type": "TouristAttraction", name: "Santa Severina", description: "Borgo storico con castello", distance: "45 km" }
              ],
              checkInTime: "15:00",
              checkOutTime: "10:00",
              petsAllowed: false,
              identifier: {
                "@type": "PropertyValue",
                name: "ID struttura",
                value: "villa-olimpia-capo-rizzuto"
              },
              containsPlace: apartments.map((apartment) => ({
                "@type": "Accommodation",
                name: `Appartamento ${apartment.name}`,
                url: `${BASE_URL}/appartamenti/${getApartmentSlug(apartment)}`
              })),
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnalyticsUnified />
        <GoogleAnalytics />
        <MetaPixelOptional />
        <Analytics />
        <ErrorBoundary>
          <I18nProvider>
            <SeasonalRootOverlays />
            <DirectionsProvider>
              <TouchOptimizer />
              <BandieraBluTopBanner />
              <Header />
              <main className="site-shell min-h-screen">{children}</main>
              <Footer />
              <CookieConsent />
              <ScrollToTop />
            </DirectionsProvider>
          </I18nProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
