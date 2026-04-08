import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Waves, Trees, MapPinned } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FamilyHolidayCalabriaPageView() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mx-auto max-w-4xl text-center text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
            Family holiday in Calabria: safe seaside apartments in Italy
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            Villa Olimpia is designed for families who want summer comfort: shallow sandy beach, swimming pool, garden,
            and a quiet environment near Le Castella and Capo Rizzuto highlights.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/en/prenota">Check availability</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/en/contact">Contact us</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/en/prenota">Book your stay</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
              <Image
                src="/images/territory/spiaggia-capopiccolo-lato-interno.jpg"
                alt="Shallow sandy beach for families in Calabria"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
              <Image
                src="/images/villa/hero/facciata_esterna_villa_olimpia___3_.jpg"
                alt="Villa Olimpia apartments and pool area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold md:text-4xl">Why families choose Villa Olimpia</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                icon: Waves,
                title: "Shallow sandy beach",
                text: "Safe and practical for children, only a short walk from your apartment.",
              },
              {
                icon: Trees,
                title: "Pool and garden",
                text: "Relaxed open spaces where parents can unwind while kids enjoy vacation time.",
              },
              {
                icon: ShieldCheck,
                title: "Safe environment",
                text: "Quiet area and direct assistance from the Villa Olimpia team.",
              },
              {
                icon: MapPinned,
                title: "Near Le Castella",
                text: "Easy access to one of Calabria most iconic attractions for family day trips.",
              },
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

      <section className="bg-gradient-to-br from-ocean via-primary to-ocean/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold md:text-4xl">Plan your family summer in Calabria, Italy</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/en/prenota">Check availability</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/en/contact">Contact us</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/en/prenota">Book your stay</Link>
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/en/apartments">View apartments</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/en/calabria-beach-apartments">Seaside apartments guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
