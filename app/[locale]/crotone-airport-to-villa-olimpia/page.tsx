import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BASE_URL, buildLocalizedPageMetadata } from "@/lib/metadata"
import { FlightRouteLandingPage } from "@/components/pages/flight-route-landing-page"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") notFound()

  const canonical = `${BASE_URL}/en/crotone-airport-to-villa-olimpia`
  return buildLocalizedPageMetadata({
    locale: "en",
    title: "Crotone Airport to Villa Olimpia | Capo Rizzuto Guide",
    description:
      "Landing at Crotone Airport? See how to reach Villa Olimpia in Capo Piccolo and why Crotone is the closest airport for your Calabria stay.",
    path: "/en/crotone-airport-to-villa-olimpia",
    languages: {
      en: canonical,
      it: `${BASE_URL}/aeroporto-crotone-villa-olimpia`,
      "x-default": canonical,
    },
  })
}

export default async function CrotoneAirportToVillaOlimpiaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()

  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/en/crotone-airport-to-villa-olimpia`}
      homeHref={`${BASE_URL}/en`}
      homeLabel="Home"
      breadcrumbLabel="Crotone Airport to Villa Olimpia"
      badge="Closest airport to the property"
      title="From Crotone Airport to Villa Olimpia: the shortest arrival route for Capo Piccolo"
      intro="If you land at Crotone Airport, Villa Olimpia becomes even easier to reach. This is the closest airport to the property and an excellent fit for guests who want the fastest transfer to Capo Rizzuto."
      primaryHref="/en/contact?source=crotone_airport_en#prenota"
      primaryLabel="Check availability"
      secondaryHref="/en/dusseldorf-to-crotone-calabria"
      secondaryLabel="See the Dusseldorf route guide"
      imageAlt="Villa Olimpia close to Crotone Airport in Calabria"
      travelHeading="Why Crotone matters"
      travelCards={[
        {
          title: "Closest airport",
          text: "Crotone is the most direct airport choice for guests who want to minimise transfer time after landing.",
        },
        {
          title: "Useful for high-intent queries",
          text: "Searches about airport transfers often come from travellers who are already close to booking.",
        },
        {
          title: "Strong for short stays",
          text: "The shorter the airport transfer, the stronger the value proposition for long weekends and compact summer breaks.",
        },
      ]}
      airportHeading="Arrival overview"
      airportCards={[
        {
          title: "Shorter final transfer",
          text: "Compared with other airport options, Crotone gives the shortest drive to Villa Olimpia and works especially well for guests focused on beach time in Capo Piccolo.",
        },
        {
          title: "Easy onward travel",
          text: "Once you leave the airport, Villa Olimpia is a practical base for Spiaggia dei Gigli, Le Castella and the Marine Protected Area.",
        },
      ]}
      whyHeading="Why guests like this option"
      whyItems={[
        "Less travel fatigue after arrival thanks to the shorter final route.",
        "Shared outdoor pool and independent apartments for a flexible stay.",
        "About 100 metres from the sandy beach at Spiaggia dei Gigli.",
        "Direct booking support from the property team.",
      ]}
      faqHeading="FAQ"
      faqItems={[
        {
          q: "Is Crotone Airport the closest airport to Villa Olimpia?",
          a: "Yes. Crotone is the nearest airport and is often the most convenient option when the route matches your departure city.",
        },
        {
          q: "Does this route work for family holidays?",
          a: "Yes. Shorter transfer time can make a real difference for families travelling with children and luggage.",
        },
        {
          q: "How close is the beach?",
          a: "Villa Olimpia is about 100 metres from Spiaggia dei Gigli, which is easy to reach on foot.",
        },
      ]}
      bottomTitle="Landing in Crotone for your Calabria holiday?"
      bottomText="Tell us your travel dates and how many guests are coming. We will guide you to the best apartment for your stay."
      bottomPrimaryHref="/en/contact?source=crotone_airport_bottom_en#prenota"
      bottomPrimaryLabel="Contact Villa Olimpia"
      bottomSecondaryHref="/en/apartments"
      bottomSecondaryLabel="See the apartments"
    />
  )
}
