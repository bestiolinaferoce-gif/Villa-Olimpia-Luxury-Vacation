import type { Apartment } from "@/data/apartments"
import { getApartmentSlug } from "@/data/apartments"
import { getAverageRating, reviews } from "@/data/reviews-complete"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { BASE_URL } from "@/lib/metadata"

type Props = {
  apartment: Apartment
}

export function VacationRentalSchema({ apartment }: Props) {
  const slug = getApartmentSlug(apartment)
  const url = `${BASE_URL}/appartamenti/${slug}`

  const images = (apartment.images && apartment.images.length > 0
    ? apartment.images
    : [apartment.image]
  ).map((src) => (src.startsWith("http") ? src : `${BASE_URL}${src}`))

  const amenityFeature = apartment.features.map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  }))

  const avg = getAverageRating()
  const aggregateRating =
    avg > 0 && reviews.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Math.round(avg * 10) / 10,
            reviewCount: reviews.length,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}

  const data = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": `${url}#vacation-rental`,
    name: `${apartment.name} - Villa Olimpia Capo Rizzuto`,
    identifier: slug,
    url,
    description: apartment.fullDescription || apartment.description,
    image: images,
    brand: {
      "@type": "Brand",
      name: "Villa Olimpia",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: VILLA_OLIMPIA_LOCATION.address.street,
      addressLocality: VILLA_OLIMPIA_LOCATION.address.city,
      addressRegion: VILLA_OLIMPIA_LOCATION.address.region,
      postalCode: VILLA_OLIMPIA_LOCATION.address.postalCode,
      addressCountry: "IT",
    },
    latitude: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
    longitude: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
    geo: {
      "@type": "GeoCoordinates",
      latitude: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
      longitude: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
    },
    numberOfRooms: apartment.bedrooms,
    numberOfBathroomsTotal: apartment.bathrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: apartment.guests,
      unitCode: "C62",
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: parseInt(apartment.size, 10) || undefined,
      unitCode: "MTK",
    },
    checkinTime: "15:00",
    checkoutTime: "10:00",
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature,
    containsPlace: {
      "@type": "Accommodation",
      name: "Villa Olimpia",
      url: `${BASE_URL}/appartamenti`,
    },
    ...(apartment.price
      ? {
          offers: {
            "@type": "Offer",
            url,
            priceCurrency: "EUR",
            price: apartment.price.toString(),
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
    ...aggregateRating,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
