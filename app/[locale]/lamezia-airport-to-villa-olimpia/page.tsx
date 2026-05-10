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

  const canonical = `${BASE_URL}/en/lamezia-airport-to-villa-olimpia`
  return buildLocalizedPageMetadata({
    locale: "en",
    title: "Lamezia Airport to Villa Olimpia | Calabria Arrival Guide",
    description:
      "Flying to Lamezia Terme? Discover how to reach Villa Olimpia in Capo Rizzuto and why Lamezia is often the most flexible airport for Calabria holidays.",
    path: "/en/lamezia-airport-to-villa-olimpia",
    languages: {
      en: canonical,
      it: `${BASE_URL}/aeroporto-lamezia-villa-olimpia`,
      "x-default": canonical,
    },
  })
}

export default async function LameziaAirportToVillaOlimpiaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()

  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/en/lamezia-airport-to-villa-olimpia`}
      homeHref={`${BASE_URL}/en`}
      homeLabel="Home"
      breadcrumbLabel="Lamezia Airport to Villa Olimpia"
      badge="Flexible airport option for Calabria"
      title="From Lamezia Airport to Villa Olimpia: the flexible arrival route for Capo Rizzuto"
      intro="Lamezia Terme is often the most flexible airport for travellers heading to Villa Olimpia. It can be the best choice when you want more routing options and then continue to Capo Piccolo by car or transfer."
      primaryHref="/en/contact?source=lamezia_airport_en#prenota"
      primaryLabel="Check availability"
      secondaryHref="/en/oslo-to-lamezia-villa-olimpia"
      secondaryLabel="See the Oslo route guide"
      imageAlt="Villa Olimpia for travellers arriving from Lamezia Airport"
      travelHeading="Why Lamezia is important"
      travelCards={[
        {
          title: "More route flexibility",
          text: "Lamezia often works well when travellers need more airline choices or more connection combinations.",
        },
        {
          title: "Good for international traffic",
          text: "For SEO and paid traffic, Lamezia can connect better with broader international demand than narrower local airport searches.",
        },
        {
          title: "Balanced travel option",
          text: "It is a practical compromise between route availability and a manageable final transfer to Villa Olimpia.",
        },
      ]}
      airportHeading="Arrival overview"
      airportCards={[
        {
          title: "Lamezia as the flexible hub",
          text: "Guests flying from multiple European cities often find Lamezia easier because it offers a wider route logic than narrower local airport options.",
        },
        {
          title: "Transfer onward to Capo Piccolo",
          text: "After arrival, Villa Olimpia is reached by road and becomes a strong base for beach days, family stays and direct exploration of Capo Rizzuto.",
        },
      ]}
      airportNote="Always verify current airline schedules and car rental availability before confirming your trip."
      whyHeading="Why Villa Olimpia is worth the transfer"
      whyItems={[
        "9 apartments suitable for couples, families and small groups.",
        "Shared outdoor pool reserved for guests staying in the property.",
        "About 100 metres from the sandy Blue Flag beach of Spiaggia dei Gigli.",
        "Direct communication with the property for a faster quote and simpler booking.",
      ]}
      faqHeading="FAQ"
      faqItems={[
        {
          q: "Is Lamezia better than Crotone for all travellers?",
          a: "Not always. Crotone is closer, but Lamezia is often more flexible because it may offer more route options depending on the season.",
        },
        {
          q: "Should I rent a car from Lamezia?",
          a: "In most cases yes, because it gives you the easiest onward journey and freedom to explore the Capo Rizzuto area.",
        },
        {
          q: "How close is Villa Olimpia to the beach?",
          a: "The property is about 100 metres from Spiaggia dei Gigli, making beach access easy on foot.",
        },
      ]}
      bottomTitle="Flying into Lamezia for your Calabria break?"
      bottomText="Share your dates and guest count. We will reply with the most suitable apartment options and a direct quote."
      bottomPrimaryHref="/en/contact?source=lamezia_airport_bottom_en#prenota"
      bottomPrimaryLabel="Contact Villa Olimpia"
      bottomSecondaryHref="/en/capo-rizzuto-holiday-apartments"
      bottomSecondaryLabel="Read more about Capo Rizzuto"
    />
  )
}
