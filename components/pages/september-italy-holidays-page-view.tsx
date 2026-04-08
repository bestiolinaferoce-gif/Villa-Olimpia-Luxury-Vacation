import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SeptemberItalyHolidaysPageView() {
  const faqItems = [
    {
      q: "Why choose Calabria in September?",
      a: "You usually get warm weather, calmer beaches, and a more relaxed holiday pace.",
    },
    {
      q: "Is the beach still easy to access in September?",
      a: "Yes. Villa Olimpia remains about 100 meters from the sandy beach.",
    },
    {
      q: "Can we still use the pool?",
      a: "Yes, guests can use the outdoor shared swimming pool during the seasonal opening period.",
    },
    {
      q: "How do I request rates for September?",
      a: "Use the direct booking form or contact page and we reply quickly with available options.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <div className="min-h-screen pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="mx-auto max-w-4xl text-center text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
            September Italy holidays in Calabria by the seaside
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            September is one of the smartest times to enjoy Calabria: warm weather, calmer beaches, better rates, and
            a more relaxing atmosphere at Villa Olimpia seaside apartments in Italy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/en/prenota">Check availability for your dates</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/en/contact">Send us a quick request</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/en/prenota">Book your stay directly</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto h-80 max-w-5xl overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
            <Image
              src="/images/territory/tramonto-area-marina-protetta.jpg"
              alt="September sunset in Calabria seaside"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold md:text-4xl">Why September in Calabria</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weather in September Calabria</CardTitle>
                <CardDescription className="text-slate-700">
                  Sunny days and pleasant sea temperature make beach time comfortable throughout most of the month.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Less crowded beaches</CardTitle>
                <CardDescription className="text-slate-700">
                  More space on the sandy seaside, quieter roads, and a smoother travel experience.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Better prices</CardTitle>
                <CardDescription className="text-slate-700">
                  September often means stronger value compared to peak summer, with high quality still available.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Relaxing atmosphere</CardTitle>
                <CardDescription className="text-slate-700">
                  Ideal for couples and families who want premium comfort without high-season pressure.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">September travel FAQ</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <Card key={item.q} className="border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                  <CardDescription className="text-slate-700">{item.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold md:text-4xl">September booking CTA</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Ask for the best period and unit for your trip. Direct assistance from Villa Olimpia booking team.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/en/prenota">Check availability for your dates</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/en/contact">Contact us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/en/prenota">Book your stay directly</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/en/apartments">See apartments</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/en/family-holiday-calabria">Family holidays in Calabria</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
