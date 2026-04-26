import Script from "next/script"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { BASE_URL, generateMetadata } from "@/lib/metadata"
import { AppartamentiIndexPageView } from "@/components/pages/appartamenti-index-page-view"

export const metadata = generateMetadata({
  title: "Appartamenti Capo Rizzuto con Piscina | 9 Lodge Villa Olimpia",
  description:
    "Scegli tra 9 lodge privati con piscina a Capo Piccolo. Dal bilocale al trilocale, tutti con cucina, aria condizionata e spazio esterno.",
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
