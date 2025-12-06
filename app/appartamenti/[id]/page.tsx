import { notFound } from "next/navigation"
import Image from "next/image"
import { getApartmentById } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Users, Bath, Maximize2, Wifi, Car, Waves, Utensils } from "lucide-react"
import Link from "next/link"
import { Gallery } from "@/components/gallery"
import { AvailabilityCalendar } from "@/components/availability-calendar"

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const apartment = getApartmentById(params.id)
  
  if (!apartment) {
    return {
      title: "Appartamento Non Trovato - Villa Olimpia",
    }
  }

  return {
    title: `${apartment.name} - Villa Olimpia`,
    description: apartment.description,
    openGraph: {
      title: `${apartment.name} - Villa Olimpia`,
      description: apartment.description,
      type: "website",
    },
  }
}

export default function ApartmentDetailPage({ params }: PageProps) {
  const apartment = getApartmentById(params.id)

  if (!apartment) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 flex items-center justify-center">
          <span className="text-9xl opacity-30">{apartment.image}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">
              {apartment.name}
            </h1>
            <p className="text-xl text-white/90">{apartment.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <Gallery images={apartment.images} />

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Descrizione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {apartment.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Caratteristiche</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {apartment.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Servizi Inclusi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {apartment.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Prenota</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    €{apartment.price}
                  </div>
                  <div className="text-sm text-muted-foreground">per notte</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ospiti</span>
                    <span className="font-medium">{apartment.guests}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Camere</span>
                    <span className="font-medium">{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Bagni</span>
                    <span className="font-medium">{apartment.bathrooms}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Superficie</span>
                    <span className="font-medium">{apartment.size}</span>
                  </div>
                </div>

                <AvailabilityCalendar />

                <Button variant="luxury" className="w-full" size="lg" asChild>
                  <Link href="/contatti">Richiedi Prenotazione</Link>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/393491234567" target="_blank" rel="noopener noreferrer">
                    Contatta su WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informazioni Rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">{apartment.guests} ospiti</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bed className="h-5 w-5 text-primary" />
                  <span className="text-sm">{apartment.bedrooms} camere da letto</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="h-5 w-5 text-primary" />
                  <span className="text-sm">{apartment.bathrooms} bagni</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

