import { MapComponent } from "@/components/map-component"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Plane, Train, Ship } from "lucide-react"

export const metadata = {
  title: "La Location - Villa Olimpia",
  description: "Scopri Tropea, la perla della Calabria. Informazioni su come raggiungerci e le attrazioni della zona.",
}

const attractions = [
  {
    name: "Centro Storico di Tropea",
    description: "Il caratteristico borgo medievale con le sue chiese e vicoli",
    distance: "2 km",
  },
  {
    name: "Spiaggia di Tropea",
    description: "Una delle spiagge più belle d'Italia con sabbia bianca e acque cristalline",
    distance: "1.5 km",
  },
  {
    name: "Santuario di Santa Maria dell'Isola",
    description: "Il simbolo di Tropea, un santuario su uno scoglio panoramico",
    distance: "2.5 km",
  },
  {
    name: "Capo Vaticano",
    description: "Promontorio con vista mozzafiato e spiagge da sogno",
    distance: "8 km",
  },
  {
    name: "Pizzo",
    description: "Famosa per il tartufo e il castello aragonese",
    distance: "15 km",
  },
  {
    name: "Scilla",
    description: "Il borgo dei pescatori con Chianalea e il castello",
    distance: "45 km",
  },
]

const transportOptions = [
  {
    icon: Plane,
    title: "Aereo",
    description: "Aeroporto Lamezia Terme (SUF) - 60 km",
  },
  {
    icon: Train,
    title: "Treno",
    description: "Stazione di Tropea - 3 km",
  },
  {
    icon: Car,
    title: "Auto",
    description: "Autostrada A3, uscita Pizzo - 15 km",
  },
  {
    icon: Ship,
    title: "Nave",
    description: "Porto di Vibo Marina - 20 km",
  },
]

export default function LocationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              La Location
            </h1>
            <p className="text-xl text-muted-foreground">
              Scopri Tropea, la perla della Costa degli Dei, e tutte le
              meraviglie che la circondano
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MapComponent />
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Come Raggiungerci</CardTitle>
                  <CardDescription>
                    Villa Olimpia si trova a Tropea, nel cuore della Costa degli Dei
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <div className="grid grid-cols-1 gap-4">
                {transportOptions.map((option, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <option.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Attrazioni della Zona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scopri le meraviglie che ti aspettano nei dintorni di Villa Olimpia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                    <span className="text-sm text-primary font-semibold">
                      {attraction.distance}
                    </span>
                  </div>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

