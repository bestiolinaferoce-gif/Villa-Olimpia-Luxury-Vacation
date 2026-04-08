import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Waves, Users, CookingPot, MapPin, CheckCircle2 } from "lucide-react"

export function HomePageEnView() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow">
                <Waves className="h-4 w-4" />
                Premium seaside apartments in Calabria, Italy
              </p>
              <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
                Calabria seaside apartments with outdoor shared swimming pool, about 100 meters from the sandy beach
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Villa Olimpia is ideal for families and couples looking for an elegant holiday in southern Italy:
                fully equipped apartments with kitchen, Mediterranean garden, and direct access to one of the most
                loved sandy beaches in Capo Rizzuto.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button variant="luxury" size="lg" asChild>
                  <Link href="/en/prenota">
                    Check availability
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/en/contact">Contact us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/en/calabria-beach-apartments">Explore seaside guide</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-primary/10 shadow-xl lg:h-[430px]">
              <Image
                src="/images/territory/spiaggia-capopiccolo.jpg"
                alt="Sandy beach near Villa Olimpia in Calabria"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">Why choose us</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              "About 100 meters from the sandy beach",
              "Outdoor shared swimming pool, garden and quiet private setting",
              "Apartments with kitchen for flexible stays",
            ].map((item) => (
              <Card key={item} className="border border-primary/10 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Guest-first comfort
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">{item}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">Apartments preview</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Couples
                </CardTitle>
                <CardDescription className="text-slate-700">Smart studio and one-bedroom options for romantic seaside breaks.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CookingPot className="h-5 w-5 text-primary" />
                  Families
                </CardTitle>
                <CardDescription className="text-slate-700">Two-bedroom layouts with kitchen, outdoor areas, and easy beach access.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
                <CardDescription className="text-slate-700">Capopiccolo, close to Le Castella and the Capo Rizzuto marine reserve.</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="luxury" asChild>
              <Link href="/en/apartments">View apartments</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">Location advantages</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Stay by the sea without giving up comfort: you are about 100 meters from the sandy beach, and the outdoor
            shared swimming pool is inside the
            property, and the area is perfect for a calm premium stay in Calabria, Italy.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <Button variant="outline" asChild>
              <Link href="/en/calabria-beach-apartments">Calabria beach apartments</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/en/family-holiday-calabria">Family holiday Calabria</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/en/september-italy-holidays">September Italy holidays</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-ocean via-primary to-ocean/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold md:text-4xl">Ready for your Calabria seaside stay?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Direct contact with Villa Olimpia team. Fast answers, clear rates, and support before booking.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/en/prenota">Book your stay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/en/contact">Contact us</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/en/prenota">Check availability</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
