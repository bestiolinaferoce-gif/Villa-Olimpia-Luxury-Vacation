import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Plane, Car, Waves } from "lucide-react"

interface CardItem {
  title: string
  text: string
}

interface FaqItem {
  q: string
  a: string
}

interface FlightRouteLandingPageProps {
  canonical: string
  homeHref: string
  homeLabel: string
  breadcrumbLabel: string
  badge: string
  title: string
  intro: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
  imageAlt: string
  travelHeading: string
  travelCards: CardItem[]
  airportHeading: string
  airportCards: CardItem[]
  airportNote?: string
  whyHeading: string
  whyItems: string[]
  faqHeading: string
  faqItems: FaqItem[]
  bottomTitle: string
  bottomText: string
  bottomPrimaryHref: string
  bottomPrimaryLabel: string
  bottomSecondaryHref: string
  bottomSecondaryLabel: string
}

export function FlightRouteLandingPage({
  canonical,
  homeHref,
  homeLabel,
  breadcrumbLabel,
  badge,
  title,
  intro,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageAlt,
  travelHeading,
  travelCards,
  airportHeading,
  airportCards,
  airportNote,
  whyHeading,
  whyItems,
  faqHeading,
  faqItems,
  bottomTitle,
  bottomText,
  bottomPrimaryHref,
  bottomPrimaryLabel,
  bottomSecondaryHref,
  bottomSecondaryLabel,
}: FlightRouteLandingPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: homeHref },
      { "@type": "ListItem", position: 2, name: breadcrumbLabel, item: canonical },
    ],
  }

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Plane className="h-4 w-4" />
                {badge}
              </p>
              <h1 className="mt-6 text-4xl font-playfair font-bold md:text-5xl">{title}</h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-100">{intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50"
                >
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white transition hover:bg-white/20"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl lg:h-[430px]">
              <Image
                src="/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg"
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            {travelHeading}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {travelCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Plane className="h-6 w-6 text-sky-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            {airportHeading}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {airportCards.map((item, index) => (
              <div key={`${item.title}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  {index === 0 ? (
                    <MapPin className="h-5 w-5 text-sky-700" />
                  ) : (
                    <Car className="h-5 w-5 text-sky-700" />
                  )}
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          {airportNote ? <p className="mt-6 text-center text-sm text-slate-500">{airportNote}</p> : null}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            {whyHeading}
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            {faqHeading}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-slate-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Waves className="mx-auto h-8 w-8 text-blue-200" />
          <h2 className="mt-4 text-3xl font-playfair font-bold md:text-4xl">{bottomTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">{bottomText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={bottomPrimaryHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50"
            >
              {bottomPrimaryLabel}
            </Link>
            <Link
              href={bottomSecondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              {bottomSecondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
