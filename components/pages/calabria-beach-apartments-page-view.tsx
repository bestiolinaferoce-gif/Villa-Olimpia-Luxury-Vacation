import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Umbrella, Waves, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CalabriaBeachApartmentsPageView() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
                Calabria beach apartments in Italy, 70m from sandy seaside
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Looking for Calabria beach apartments and seaside apartments in Italy? Villa Olimpia offers a premium
                stay with swimming pool, family-friendly atmosphere, and direct access to the sandy coast of Capo Rizzuto.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="luxury" size="lg" asChild>
                  <Link href="/en/prenota">
                    Check availability
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/en/contact">Contact us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-primary/10 shadow-xl">
              <Image
                src="/images/territory/spiaggia-capopiccolo-panorama.jpg"
                alt="Beach in Capo Rizzuto Calabria"
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
          <h2 className="text-center text-3xl font-playfair font-bold md:text-4xl">Why choose Calabria seaside</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Calabria combines clear sea, long summers, authentic food culture, and calmer beaches compared to many
            crowded Italian destinations.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold md:text-4xl">Why Villa Olimpia</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { icon: Waves, title: "70m to beach", text: "Quick walk to sandy seaside with shallow water." },
              { icon: Umbrella, title: "Pool and garden", text: "Private pool area and relaxing Mediterranean space." },
              { icon: Home, title: "Apartments with kitchen", text: "Flexible holiday lifestyle for families and couples." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className="h-5 w-5 text-primary" />
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-slate-700">{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold md:text-4xl">Apartments overview</h2>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-primary/10 bg-primary/5 p-8">
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Studios and multi-room apartments",
                "Kitchen and dining space in each unit",
                "Layouts ideal for couples and families",
                "Direct booking support from property team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/en/apartments">Explore all apartments</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold md:text-4xl">Sandy beach just 70 meters away</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            One of Villa Olimpia strongest advantages is proximity: your holiday apartment is only 70 meters from a
            sandy beach, ideal for children and for guests who want easy seaside access in Calabria, Italy.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-ocean via-primary to-ocean/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold md:text-4xl">Book your Calabria seaside holiday</h2>
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
