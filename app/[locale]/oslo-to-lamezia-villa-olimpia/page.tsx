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

  const canonical = `${BASE_URL}/en/oslo-to-lamezia-villa-olimpia`
  return buildLocalizedPageMetadata({
    locale: "en",
    title: "Oslo to Lamezia Calabria Holidays | Villa Olimpia",
    description:
      "Travelling from Oslo to Calabria? Use our guide to reach Villa Olimpia via Lamezia Terme and stay near the beach in Capo Rizzuto.",
    path: "/en/oslo-to-lamezia-villa-olimpia",
    languages: {
      en: canonical,
      no: `${BASE_URL}/no/oslo-til-lamezia-villa-olimpia`,
      it: `${BASE_URL}/oslo-lamezia-villa-olimpia`,
      "x-default": canonical,
    },
  })
}

export default async function OsloToLameziaVillaOlimpiaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()

  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/en/oslo-to-lamezia-villa-olimpia`}
      homeHref={`${BASE_URL}/en`}
      homeLabel="Home"
      breadcrumbLabel="Oslo to Lamezia"
      badge="Direct summer route from Norway"
      title="From Oslo to Calabria: the easiest way to reach Villa Olimpia via Lamezia"
      intro="For Norwegian travellers, the Oslo–Lamezia route is the most natural gateway to Villa Olimpia. Once you land, Capo Piccolo and Spiaggia dei Gigli are within easy reach for a fly-and-drive holiday in Calabria."
      primaryHref="/en/contact?source=oslo_lamezia_en#prenota"
      primaryLabel="Check availability"
      secondaryHref="/no/oslo-til-lamezia-villa-olimpia"
      secondaryLabel="Read the Norwegian version"
      imageAlt="Villa Olimpia in Calabria for travellers arriving from Oslo via Lamezia"
      travelHeading="Why this route is worth targeting"
      travelCards={[
        {
          title: "Clear search intent",
          text: "People searching from Oslo often want a concrete airport answer, not a generic accommodation page.",
        },
        {
          title: "Good match for direct booking",
          text: "Once travel logistics are clear, the direct booking proposition becomes much stronger.",
        },
        {
          title: "Better conversion path",
          text: "Airport-first content helps connect informational searches with a real request for dates and guests.",
        },
      ]}
      airportHeading="Arrival logic for Villa Olimpia"
      airportCards={[
        {
          title: "Lamezia Terme as main arrival airport",
          text: "Lamezia is usually the best match for travellers from Oslo because it offers the cleanest route logic for reaching Capo Rizzuto and then continuing by rental car or transfer.",
        },
        {
          title: "Final transfer to Capo Piccolo",
          text: "After landing, Villa Olimpia is in Capo Piccolo, near Spiaggia dei Gigli and inside the Marine Protected Area of Capo Rizzuto.",
        },
      ]}
      airportNote="Always check the latest seasonal flight schedule before booking, as airline timetables may change."
      whyHeading="Why Villa Olimpia works well for this trip"
      whyItems={[
        "9 private apartments for couples, families and small groups.",
        "Shared outdoor pool reserved for guests staying at the property.",
        "About 100 metres from Spiaggia dei Gigli, a sandy Blue Flag beach.",
        "Direct contact with the property for a clear quote and faster decision making.",
      ]}
      faqHeading="FAQ"
      faqItems={[
        {
          q: "Is Lamezia the best airport for Villa Olimpia from Oslo?",
          a: "In most cases yes, because it is the most practical route structure for travellers coming from Oslo and then continuing to Capo Rizzuto.",
        },
        {
          q: "Do I need a car after landing?",
          a: "A rental car is usually the easiest option if you want freedom to move between beaches, Le Castella and inland villages.",
        },
        {
          q: "How close is Villa Olimpia to the sea?",
          a: "Villa Olimpia is about 100 metres from Spiaggia dei Gigli and works well for guests who want beach access on foot.",
        },
      ]}
      bottomTitle="Planning your Calabria stay from Norway?"
      bottomText="Send us your dates and group size. We will answer with the best apartment options and a direct quote for your trip."
      bottomPrimaryHref="/en/contact?source=oslo_lamezia_bottom_en#prenota"
      bottomPrimaryLabel="Contact Villa Olimpia"
      bottomSecondaryHref="/oslo-lamezia-villa-olimpia"
      bottomSecondaryLabel="See the Italian route page"
    />
  )
}
