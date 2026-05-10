import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BASE_URL, buildLocalizedPageMetadata } from "@/lib/metadata"
import { FlightRouteLandingPage } from "@/components/pages/flight-route-landing-page"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "no" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "no") notFound()

  const canonical = `${BASE_URL}/no/oslo-til-lamezia-villa-olimpia`
  return buildLocalizedPageMetadata({
    locale: "no",
    title: "Oslo til Lamezia og Villa Olimpia | Ferie i Calabria",
    description:
      "Reis fra Oslo til Calabria via Lamezia og bo på Villa Olimpia nær stranden i Capo Rizzuto. Praktisk guide for norske gjester.",
    path: "/no/oslo-til-lamezia-villa-olimpia",
    languages: {
      no: canonical,
      en: `${BASE_URL}/en/oslo-to-lamezia-villa-olimpia`,
      it: `${BASE_URL}/oslo-lamezia-villa-olimpia`,
      "x-default": `${BASE_URL}/en/oslo-to-lamezia-villa-olimpia`,
    },
  })
}

export default async function OsloTilLameziaVillaOlimpiaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "no") notFound()

  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/no/oslo-til-lamezia-villa-olimpia`}
      homeHref={`${BASE_URL}/no/norway`}
      homeLabel="Norge"
      breadcrumbLabel="Oslo til Lamezia"
      badge="Praktisk reiseguide for norske gjester"
      title="Fra Oslo til Calabria: slik kommer du enkelt til Villa Olimpia via Lamezia"
      intro="For norske gjester er Oslo–Lamezia den mest naturlige flyruten til Villa Olimpia. Når du lander i Sør-Italia, er veien videre til Capo Piccolo enkel for en ferie med strand, basseng og frihet til å utforske Calabria."
      primaryHref="/no/contatti?source=oslo_lamezia_no#prenota"
      primaryLabel="Sjekk tilgjengelighet"
      secondaryHref="/en/oslo-to-lamezia-villa-olimpia"
      secondaryLabel="Read in English"
      imageAlt="Villa Olimpia i Calabria for reisende fra Oslo via Lamezia"
      travelHeading="Hvorfor denne ruten er viktig"
      travelCards={[
        {
          title: "Riktig søkeintensjon",
          text: "Gjester som søker fra Oslo vil ofte vite hvilken flyplass som faktisk passer best for ferien.",
        },
        {
          title: "Bedre vei til bestilling",
          text: "Når reiseruten er tydelig, er det lettere å gå videre til datoer, leilighet og direkte forespørsel.",
        },
        {
          title: "Passer fly-og-bil-ferie",
          text: "Denne typen reise passer godt for gjester som vil kombinere strandliv med fleksible dagsturer i Calabria.",
        },
      ]}
      airportHeading="Ankomst til Villa Olimpia"
      airportCards={[
        {
          title: "Lamezia Terme som hovedflyplass",
          text: "For mange norske gjester er Lamezia den mest praktiske flyplassen fordi den gir den enkleste reisestrukturen videre mot Capo Rizzuto.",
        },
        {
          title: "Videre til Capo Piccolo",
          text: "Etter landing kommer du videre til Villa Olimpia i Capo Piccolo, nær Spiaggia dei Gigli og det marine verneområdet i Capo Rizzuto.",
        },
      ]}
      airportNote="Kontroller alltid den oppdaterte sommerruten før du bestiller, siden flytidene kan endres."
      whyHeading="Hvorfor Villa Olimpia passer denne reisen"
      whyItems={[
        "9 private leiligheter for par, familier og små grupper.",
        "Delt utendørsbasseng reservert for gjester i strukturen.",
        "Ca. 100 meter fra Spiaggia dei Gigli, en sandstrand med Blått Flagg.",
        "Direkte kontakt med eiendommen gir raskere svar og tydeligere tilbud.",
      ]}
      faqHeading="Vanlige spørsmål"
      faqItems={[
        {
          q: "Er Lamezia den beste flyplassen fra Oslo?",
          a: "I de fleste tilfeller ja, fordi ruten videre til Capo Rizzuto vanligvis blir enklere og mer forutsigbar.",
        },
        {
          q: "Trenger jeg leiebil?",
          a: "Leiebil er ofte den enkleste løsningen hvis du vil besøke strender, Le Castella og små landsbyer i området.",
        },
        {
          q: "Hvor nær stranden ligger Villa Olimpia?",
          a: "Villa Olimpia ligger ca. 100 meter fra Spiaggia dei Gigli og passer godt for gjester som vil gå til stranden.",
        },
      ]}
      bottomTitle="Planlegger du Calabria-ferie fra Norge?"
      bottomText="Send datoer og antall gjester. Vi svarer med de mest passende leilighetene og et tydelig tilbud direkte fra Villa Olimpia."
      bottomPrimaryHref="/no/contatti?source=oslo_lamezia_bottom_no#prenota"
      bottomPrimaryLabel="Kontakt Villa Olimpia"
      bottomSecondaryHref="/oslo-lamezia-villa-olimpia"
      bottomSecondaryLabel="Se italiensk versjon"
    />
  )
}
