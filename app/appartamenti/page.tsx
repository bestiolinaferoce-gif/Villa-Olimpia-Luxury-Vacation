import Script from "next/script"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { BASE_URL, buildApartmentsListingMetadata } from "@/lib/metadata"
import { AppartamentiIndexPageView } from "@/components/pages/appartamenti-index-page-view"

export const metadata = buildApartmentsListingMetadata("it", "/appartamenti")

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
