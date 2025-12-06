import { ApartmentCard } from "@/components/apartment-card"
import { apartments } from "@/lib/data"

export const metadata = {
  title: "Gli Appartamenti - Villa Olimpia",
  description: "Scopri i nostri 9 appartamenti lussuosi a Tropea, Calabria. Ogni unità offre comfort, vista mare e servizi premium.",
}

export default function AppartamentiPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              I Nostri Appartamenti
            </h1>
            <p className="text-xl text-muted-foreground">
              Scegli tra le nostre 9 unità lussuose, ognuna progettata per
              offrirti il massimo comfort e una vista indimenticabile
            </p>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

