import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
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
import { defaultMetadata, BASE_URL } from "@/lib/metadata"
import { AnalyticsUnified } from "@/components/analytics/analytics-unified"
import { MetaPixelOptional } from "@/components/analytics/meta-pixel"
import { AutoOptimizer } from "@/components/auto-optimizer"
import { SeasonalRootOverlays } from "@/components/seasonal/SeasonalRootOverlays"
import FloatingBooking from "@/components/floating-booking"
import NewsletterPopup from "@/components/newsletter-popup"
import { I18nProvider } from "@/components/i18n-provider"
import { getAverageRating, reviews } from "@/data/reviews-complete"
import { apartments } from "@/data/apartments"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

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
        {/* viewport gestito tramite export const viewport (Next.js App Router) */}
        <link rel="icon" href="/favicon-neutral.svg" type="image/svg+xml" />

        {/* Performance - Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />

        {/* DNS Prefetch per Analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Hreflang tags - solo italiano (multilingua non ancora attivo) */}
        <link rel="alternate" hrefLang="it" href={BASE_URL} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        {/* Meta tag posizione e contatti Facebook / Open Graph */}
        <meta property="place:location:latitude" content="38.9136" />
        <meta property="place:location:longitude" content="17.0836" />
        <meta property="business:contact_data:street_address" content="Località Capo Piccolo" />
        <meta property="business:contact_data:locality" content="Isola di Capo Rizzuto" />
        <meta property="business:contact_data:region" content="KR" />
        <meta property="business:contact_data:postal_code" content="88841" />
        <meta property="business:contact_data:country_name" content="IT" />
        <meta property="og:latitude" content="38.9136" />
        <meta property="og:longitude" content="17.0836" />
        <meta property="og:street-address" content="Località Capo Piccolo" />
        <meta property="og:locality" content="Isola di Capo Rizzuto" />
        <meta property="og:region" content="KR" />
        <meta property="og:postal-code" content="88841" />
        <meta property="og:country-name" content="IT" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LodgingBusiness", "VacationRental"],
              "@id": `${BASE_URL}/#business`,
              name: "Villa Olimpia",
              description:
                "9 appartamenti di lusso con piscina privata a Capopiccolo, nel cuore dell'Area Marina Protetta di Capo Rizzuto. A 100 metri dalla Spiaggia dei Gigli (Bandiera Blu), con terrazza, aria condizionata e cucina attrezzata.",
              url: BASE_URL,
              telephone: "+393335773390",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Località Capo Piccolo",
                addressLocality: "Isola di Capo Rizzuto",
                addressRegion: "KR",
                postalCode: "88841",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.9136,
                longitude: 17.0836,
              },
              hasMap: "https://www.google.com/maps/search/?api=1&query=38.9136,17.0836",
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
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
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
                url: `${BASE_URL}/appartamenti/${apartment.name.toLowerCase()}`
              })),
              availableAtOrFrom: {
                "@type": "Offer",
                name: "Prenotazione diretta Villa Olimpia",
                description: "Richiedi disponibilità diretta per appartamenti con piscina a Capopiccolo, vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto.",
                priceCurrency: "EUR",
                availability: "https://schema.org/LimitedAvailability"
              }
            }),
          }}
        />
        {/* FAQ Schema – rich snippets Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quanto distano le spiagge da Villa Olimpia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Spiaggia dei Gigli (Bandiera Blu) e la Spiaggia della Caletta distano meno di 100 metri a piedi da Villa Olimpia. Si esce dal cancello e si è già in spiaggia, senza auto né parcheggio."
                  }
                },
                {
                  "@type": "Question",
                  name: "C'è la piscina a Villa Olimpia Capo Rizzuto?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì. Villa Olimpia dispone di una piscina privata inclusa nel soggiorno, accessibile a tutti gli ospiti del residence. La piscina affaccia sul mare ed è disponibile durante tutta la stagione estiva."
                  }
                },
                {
                  "@type": "Question",
                  name: "Come si prenota un appartamento a Villa Olimpia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puoi prenotare direttamente tramite il modulo sul sito villaolimpiacaporizzuto.com, oppure contattarci su WhatsApp al +39 333 577 3390. La prenotazione diretta garantisce il miglior prezzo senza commissioni di intermediari."
                  }
                },
                {
                  "@type": "Question",
                  name: "Quante persone ospita Villa Olimpia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Villa Olimpia dispone di 9 appartamenti indipendenti che ospitano da 2 a 6 persone ciascuno. Ogni appartamento è completamente arredato con cucina attrezzata, aria condizionata, terrazza privata e Wi-Fi gratuito."
                  }
                },
                {
                  "@type": "Question",
                  name: "Quali sono gli orari di check-in e check-out?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Il check-in è disponibile dalle ore 15:00. Il check-out è entro le ore 10:00. Per orari diversi contattare la struttura in anticipo."
                  }
                },
                {
                  "@type": "Question",
                  name: "Villa Olimpia è adatta alle famiglie con bambini?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, Villa Olimpia è ideale per le famiglie con bambini. La spiaggia è a pochi passi, la piscina è sicura, e gli appartamenti sono spaziosi con cucina attrezzata. Il mare di Capopiccolo è basso e cristallino, perfetto per i più piccoli."
                  }
                },
                {
                  "@type": "Question",
                  name: "Quanto costano gli appartamenti per l'estate 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I prezzi variano in base all'appartamento e al periodo. Per l'estate 2026 (luglio e agosto) i prezzi partono da circa 120€ a notte. Contattaci tramite il sito o WhatsApp per un preventivo personalizzato senza impegno."
                  }
                },
                {
                  "@type": "Question",
                  name: "C'è il parcheggio a Villa Olimpia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, Villa Olimpia dispone di parcheggio privato gratuito all'interno della struttura, incluso nel soggiorno."
                  }
                },
                {
                  "@type": "Question",
                  name: "Dove si trova Villa Olimpia rispetto a Le Castella?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Villa Olimpia si trova a Capopiccolo, nella Riserva Marina di Capo Rizzuto, a circa 8 km dal Castello Aragonese di Le Castella. La struttura è nella zona più esclusiva del litorale ionico calabrese."
                  }
                },
                {
                  "@type": "Question",
                  name: "È disponibile il Wi-Fi gratuito a Villa Olimpia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, il Wi-Fi ad alta velocità è gratuito in tutti gli appartamenti e nelle aree comuni di Villa Olimpia."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnalyticsUnified />
        <MetaPixelOptional />
        <ErrorBoundary>
          {/* FIX HYDRATION: I18nProvider gestisce correttamente SSR/client mismatch */}
          <I18nProvider>
            <AutoOptimizer />
            <SeasonalRootOverlays />
            <FloatingBooking />
            <NewsletterPopup />
            <DirectionsProvider>
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
