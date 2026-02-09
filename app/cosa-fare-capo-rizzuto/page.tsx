import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateMetadata } from "@/lib/metadata"
import { Camera, Clock, MapPin, Mountain, Utensils, Waves } from "lucide-react"

export const metadata: Metadata = generateMetadata({
  title: "Cosa Fare a Capo Rizzuto | Attrazioni e Attività | Villa Olimpia",
  description:
    "Cosa fare a Capo Rizzuto: spiagge, Le Castella, Area Marina Protetta, enogastronomia, escursioni. Guida completa alle attività e attrazioni.",
  path: "/cosa-fare-capo-rizzuto",
})

const highlights = [
  {
    icon: Waves,
    title: "Mare e Spiagge",
    image: "/images/villa/gallery/Esterni_Spiaggia_Estiva_01.jpg",
    text: "Spiaggia dei Gigli a meno di 100 metri, snorkeling a Capopiccolo e tramonti su Le Castella.",
  },
  {
    icon: Camera,
    title: "Borghi e Cultura",
    image: "/images/villa/gallery/Esterni_LeCastella_01.jpg",
    text: "Castello Aragonese, borgo marinaro e centro storico di Isola di Capo Rizzuto.",
  },
  {
    icon: Utensils,
    title: "Food Locale",
    image: "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
    text: "Pesce fresco, sapori calabresi e cene con vista tra costa e borghi.",
  },
  {
    icon: Mountain,
    title: "Natura Attiva",
    image: "/images/villa/gallery/Esterni_Piscina_Giardino_01.jpg",
    text: "Escursioni tra costa, riserva marina e percorsi nell'entroterra calabrese.",
  },
]

const gallery = [
  "/images/villa/gallery/Esterni_Spiaggia_01.jpg",
  "/images/villa/gallery/Esterni_Spiaggia_Tramonto_01.jpg",
  "/images/villa/gallery/Esterni_LeCastella_01.jpg",
  "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
]

export default function CosaFareCapoRizzutoPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#f6fbff]">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/villa/gallery/Esterni_Spiaggia_Estiva_01.jpg"
            alt="Esperienze a Capo Rizzuto"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031422]/80 via-[#031422]/60 to-[#031422]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.35),_transparent_55%)]" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Cosa Fare a Capo Rizzuto</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Attività vere, luoghi iconici e itinerari facili da vivere partendo da Villa Olimpia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#f6fbff] to-[#e7f6ff]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <Card key={item.title} className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur">
                <div className="relative h-44">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <item.icon className="h-5 w-5" />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </div>
                <CardContent className="pt-5">
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#062035] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">Galleria Esperienze</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <div key={src} className="relative h-56 rounded-2xl overflow-hidden border border-white/20">
                  <Image src={src} alt={`Attività Capo Rizzuto ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#fff7e6] to-[#ffecc7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center text-[#4b2f00]">Itinerari Rapidi</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Mare",
                icon: Clock,
                text: "Mattina in spiaggia, pomeriggio in piscina, cena a Le Castella.",
              },
              {
                title: "Storia",
                icon: MapPin,
                text: "Castello Aragonese, centro di Isola di Capo Rizzuto e passeggiata serale.",
              },
              {
                title: "Natura",
                icon: Mountain,
                text: "Snorkeling nell'area marina e percorsi panoramici sulla costa ionica.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-[#f3d6a0] bg-white/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#4b2f00]">
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6a4f26]">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-ocean via-primary to-ocean/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Trasforma la Vacanza in Prenotazione</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contattaci ora per disponibilità e preventivo personalizzato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/contatti">Richiedi Preventivo</Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/appartamenti">Scopri gli Appartamenti</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
