"use client"

import { ApartmentCard } from "@/components/apartment-card"
import { apartments } from "@/data/apartments"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function AppartamentiPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              9 Appartamenti con Piscina a Capo Rizzuto - Villa Olimpia
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
            {apartments.map((apartment, index) => (
              <ScrollReveal key={apartment.id} delay={index * 0.1}>
                <ApartmentCard
                  id={`apartment-${apartment.id}`}
                  name={apartment.name}
                  description={apartment.description || apartment.fullDescription || ""}
                  image={apartment.image}
                  guests={apartment.guests}
                  bedrooms={apartment.bedrooms}
                  price={apartment.price || 0}
                  featured={apartment.premium}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

