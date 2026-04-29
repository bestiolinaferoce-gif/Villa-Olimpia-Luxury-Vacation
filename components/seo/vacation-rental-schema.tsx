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

  const bedroomPlaces = Array.from({ length: apartment.bedrooms }, (_, i) => ({
    "@type": "Accommodation",
    name:
      apartment.bedrooms === 1
        ? "Camera da letto"
        : `Camera da letto ${i + 1}`,
    numberOfRooms: 1,
  }))

  const containsPlace = [
    ...bedroomPlaces,
    {
      "@type": "Accommodation",
      name: "Zona giorno",
      numberOfRooms: 1,
    },
  ]

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
    identifier: {
      "@type": "PropertyValue",
      name: "vacation-rental-id",
      value: slug,
    },
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
      longitude: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
    },
    numberOfBedrooms: apartment.bedrooms,
    numberOfRooms: apartment.bedrooms + apartment.bathrooms + 1, // bedrooms + bathrooms + living area
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
    checkinTime: "T15:00:00",
    checkoutTime: "T10:00:00",
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature,
    containsPlace,
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
