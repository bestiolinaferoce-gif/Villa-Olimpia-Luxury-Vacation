import Link from "next/link"

export interface FlightsBannerTranslations {
  title: string
  description: string
  cta: string
}

interface FlightsBannerProps {
  translations: FlightsBannerTranslations
  locale?: string
}

export function FlightsBanner({ translations, locale }: FlightsBannerProps) {
  if (!translations.title) return null

  const contactPath = locale && locale !== "it"
    ? `/${locale}/contatti?source=flights_banner`
    : "/contatti?source=flights_banner"

  return (
    <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">✈️</span>
            <div>
              <p className="font-semibold text-sm sm:text-base leading-tight">
                {translations.title}
              </p>
              <p className="text-blue-200 text-xs sm:text-sm mt-0.5 leading-snug">
                {translations.description}
              </p>
            </div>
          </div>
          <Link
            href={contactPath}
            className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white text-blue-900 px-4 py-2 text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            {translations.cta}
          </Link>
        </div>
      </div>
    </div>
  )
}
