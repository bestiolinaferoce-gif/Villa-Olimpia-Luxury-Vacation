import Script from "next/script"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { BASE_URL, generateMetadata } from "@/lib/metadata"
import { AppartamentiIndexPageView } from "@/components/pages/appartamenti-index-page-view"

export const metadata = generateMetadata({
  title: "Appartamenti a Capo Rizzuto con Piscina | Villa Olimpia Capopiccolo",
  description:
    "Scopri gli appartamenti di Villa Olimpia a Capopiccolo, Capo Rizzuto: soluzioni per coppie, famiglie e piccoli gruppi con piscina, giardino e Spiaggia dei Gigli a pochi passi.",
  path: "/appartamenti",
  keywords: [
    "appartamenti Villa Olimpia",
    "appartamenti Capo Rizzuto piscina",
    "case vacanze Spiaggia dei Gigli",
    "appartamenti Capopiccolo Isola di Capo Rizzuto",
    "alloggi famiglia Calabria mare",
  ],
})

export default function AppartamentiPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Appartamenti Villa Olimpia",
    url: `${BASE_URL}/appartamenti`,
    numberOfItems: apartments.filter((apartment) => apartment.active !== false).length,
    itemListElement: apartments
      .filter((apartment) => apartment.active !== false)
      .map((apartment, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/appartamenti/${getApartmentSlug(apartment)}`,
        name: `Appartamento ${apartment.name}`,
      })),
  }

  return (
    <>
      <Script
        id="apartments-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <AppartamentiIndexPageView mapLanguage="it" />
    </>
  )
}
