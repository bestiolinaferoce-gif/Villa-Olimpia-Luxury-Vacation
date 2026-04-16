"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Waves, Users, CookingPot, MapPin, CheckCircle2 } from "lucide-react"
import { trackEvent } from "@/components/analytics/google-analytics"

export function HomePageEnView() {
  const faqItems = [
    {
      q: "How far is Villa Olimpia from the beach?",
      a: "Villa Olimpia is about 100 meters from the sandy beach, reachable with a short walk.",
    },
    {
      q: "Is the swimming pool private?",
      a: "The property has an outdoor shared swimming pool for apartment guests.",
    },
    {
      q: "Are apartments suitable for families and couples?",
      a: "Yes. Apartments with kitchen and different layouts make stays practical for both families and couples.",
    },
    {
      q: "How can we book directly?",
      a: "Use the availability form or contact us directly to receive a clear quote and quick assistance.",
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow">
                <Waves className="h-4 w-4" />
                Seaside apartments — Capo Rizzuto Marine Protected Area, Calabria
              </p>
              <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
                9 Seaside Apartments in Calabria with Outdoor Pool — About 100 Metres from the Sandy Beach
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Villa Olimpia offers 9 independent apartments with private outdoor spaces, fully equipped kitchens,
                and a shared outdoor pool — set in a quiet Mediterranean garden inside the Capo Rizzuto Marine
                Protected Area. Good availability for June and July 2026 — contact us directly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button variant="luxury" size="lg" asChild onClick={() => trackEvent("cta_click", "Conversion", "en_hero_check_availability")}>
                  <Link href="/en/prenota">
                    Check availability for your dates
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild onClick={() => trackEvent("cta_click", "Conversion", "en_hero_contact")}>
                  <Link href="/en/contact">Send us a quick request</Link>
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
              { title: "Steps from the Beach", text: "About 100 metres from the sandy beach of Spiaggia dei Gigli, in the Capo Rizzuto Marine Protected Area" },
              { title: "Outdoor Shared Pool", text: "Outdoor shared swimming pool with solarium and gazebo, in a quiet private garden setting" },
              { title: "Flexible Self-Catering", text: "Fully equipped kitchens in every apartment — ideal for families, couples, and longer stays" },
            ].map((item) => (
              <Card key={item.title} className="border border-primary/10 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">{item.text}</CardDescription>
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
                  Independent units
                </CardTitle>
                <CardDescription className="text-slate-700">Each apartment is self-contained with its own private outdoor space — balcony or terrace — and a fully equipped kitchen.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CookingPot className="h-5 w-5 text-primary" />
                  Families and couples
                </CardTitle>
                <CardDescription className="text-slate-700">Studio, one-bedroom, and two-bedroom layouts. All include kitchen — ideal for flexible self-catering stays of 1–3 weeks.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Capopiccolo, Capo Rizzuto
                </CardTitle>
                <CardDescription className="text-slate-700">Inside the Marine Protected Area, close to Le Castella fortress and Isola di Capo Rizzuto. Quiet road, 100 m from the beach.</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="luxury" asChild>
              <Link href="/en/apartments">View apartments and layouts</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">When to visit Capo Rizzuto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            June, July and September are the three best months to stay at Villa Olimpia. Each has its own character.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card className="border border-primary/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">June</CardTitle>
                <CardDescription className="text-slate-700">
                  Warm sea, quieter beaches, good availability. An excellent choice for an early-summer holiday in Calabria without the peak-season crowds.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-primary/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">July</CardTitle>
                <CardDescription className="text-slate-700">
                  Peak summer at the Capo Rizzuto Marine Protected Area. The sea is at its best and the area is at its most vibrant. Book early — July fills quickly.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-primary/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">September</CardTitle>
                <CardDescription className="text-slate-700">
                  The sea reaches its warmest in September. Beaches are calmer, restaurants quieter, and the light is beautiful. A favourite month for European visitors.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="luxury" asChild>
              <Link href="/en/contact">Check availability for your dates</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">Quick answers before booking</h2>
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
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">Location advantages</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Stay by the sea without giving up comfort: about 100 metres from the sandy beach, outdoor shared pool
            within the property, quiet Mediterranean garden, and the full Capo Rizzuto Marine Protected Area on
            your doorstep. A calm, independent base for Calabria.
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <Button variant="outline" asChild>
              <Link href="/en/apartments">Browse all 9 apartments</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/en/family-holiday-calabria">Family holiday in Calabria</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/en/september-italy-holidays">September in southern Italy</Link>
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
            <Button variant="luxury" size="lg" asChild onClick={() => trackEvent("cta_click", "Conversion", "en_bottom_book")}>
              <Link href="/en/prenota">Book your stay directly</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild onClick={() => trackEvent("cta_click", "Conversion", "en_bottom_contact")}>
              <Link href="/en/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
