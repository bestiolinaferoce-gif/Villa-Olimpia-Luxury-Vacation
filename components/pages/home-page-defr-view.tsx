import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Waves, CheckCircle2, ArrowRight } from "lucide-react"

type DeFrLocale = "de" | "fr"

const copy: Record<
  DeFrLocale,
  {
    badge: string
    h1: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
    why: { heading: string; items: string[] }
    faq: { q: string; a: string }[]
    ctaBottom: string
    ctaBottomSub: string
  }
> = {
  de: {
    badge: "Ferienwohnungen im Meeresschutzgebiet Capo Rizzuto, Kalabrien",
    h1: "Ferienwohnungen mit Gemeinschafts-Außenpool, ca. 100 m vom Sandstrand",
    body: "Villa Olimpia liegt in Capopiccolo im Meeresschutzgebiet Capo Rizzuto: 9 vollausgestattete Apartments mit Gemeinschafts-Außenpool, mediterranem Garten und ruhiger Lage – ca. 100 m vom Sandstrand entfernt. Ideal für Familien und Paare, die das echte Süditalien erleben möchten.",
    ctaPrimary: "Verfügbarkeit anfragen",
    ctaSecondary: "Alle Apartments ansehen",
    why: {
      heading: "Warum Villa Olimpia?",
      items: [
        "Ca. 100 m vom Sandstrand Spiaggia dei Gigli im Meeresschutzgebiet",
        "Gemeinschafts-Außenpool mit Solarium und ruhiger, privater Lage",
        "Vollausgestattete Apartments mit Küche",
      ],
    },
    faq: [
      { q: "Wie weit ist es zum Strand?", a: "Etwa 100 Meter zu Fuß zum Sandstrand Spiaggia dei Gigli im Meeresschutzgebiet Capo Rizzuto." },
      { q: "Gibt es einen Pool?", a: "Ja, ein Gemeinschafts-Außenpool steht allen Gästen zur Verfügung." },
      {
        q: "Wie kann man direkt buchen?",
        a: "Schreiben Sie uns über das Kontaktformular — wir antworten innerhalb von 24 Stunden mit einem klaren Angebot.",
      },
      {
        q: "Wann ist die beste Reisezeit?",
        a: "Juni und September bieten weniger Betrieb, schönes Meer und angenehme Temperaturen. Juli ist Hochsaison – frühzeitig buchen empfohlen.",
      },
    ],
    ctaBottom: "Bereit für Ihren Urlaub in Kalabrien?",
    ctaBottomSub: "Direktkontakt mit Villa Olimpia. Schnelle Antwort, transparente Preise, kein Vermittler.",
  },
  fr: {
    badge: "Appartements en bord de mer — Aire Marine Protégée de Capo Rizzuto, Calabre",
    h1: "Appartements avec piscine extérieure partagée, à environ 100 m de la plage",
    body: "Villa Olimpia à Capopiccolo est situé dans l'Aire Marine Protégée de Capo Rizzuto : 9 appartements entièrement équipés avec piscine extérieure partagée, jardin méditerranéen et cadre calme, à environ 100 m de la plage. L'Italie authentique, loin des foules.",
    ctaPrimary: "Demander la disponibilité",
    ctaSecondary: "Voir tous les appartements",
    why: {
      heading: "Pourquoi choisir Villa Olimpia ?",
      items: [
        "À environ 100 m de la plage Spiaggia dei Gigli, Aire Marine Protégée",
        "Piscine extérieure partagée et cadre calme et privé",
        "Appartements entièrement équipés avec cuisine",
      ],
    },
    faq: [
      { q: "À quelle distance se trouve la plage ?", a: "À environ 100 mètres à pied de la plage Spiaggia dei Gigli, dans l'Aire Marine Protégée de Capo Rizzuto." },
      {
        q: "Y a-t-il une piscine ?",
        a: "Oui, une piscine extérieure partagée est disponible pour tous les clients.",
      },
      {
        q: "Comment réserver directement ?",
        a: "Écrivez-nous via le formulaire de contact — nous répondons sous 24 heures avec un devis clair.",
      },
      {
        q: "Quelle est la meilleure période ?",
        a: "Juin et septembre offrent une mer magnifique et moins de monde. Juillet est la haute saison — réservez tôt.",
      },
    ],
    ctaBottom: "Prêt pour votre séjour en Calabre ?",
    ctaBottomSub: "Contact direct avec Villa Olimpia. Réponse rapide, tarifs transparents, sans intermédiaire.",
  },
}

export function HomePageDeFrView({ locale }: { locale: DeFrLocale }) {
  const c = copy[locale]
  const contactHref = `/${locale}/contatti`
  const capoHref = `/appartamenti`

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow">
                <Waves className="h-4 w-4" />
                {c.badge}
              </p>
              <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
                {c.h1}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{c.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="luxury" size="lg" asChild>
                  <Link href={contactHref}>
                    {c.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={capoHref}>{c.ctaSecondary}</Link>
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

      {/* Why section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            {c.why.heading}
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {c.why.items.map((item) => (
              <Card key={item} className="border border-primary/10 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-base font-medium">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            {c.faq.map((item) => (
              <Card key={item.q} className="border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                  <CardDescription className="text-slate-700">{item.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-ocean via-primary to-ocean/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold md:text-4xl">{c.ctaBottom}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">{c.ctaBottomSub}</p>
          <div className="mt-8 flex justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href={contactHref}>{c.ctaPrimary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
