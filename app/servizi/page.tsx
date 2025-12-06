import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Wifi, Car, Waves, Utensils, Shield, Star, 
  Droplets, Wind, Tv, Coffee, Dumbbell, Concierge 
} from "lucide-react"

export const metadata = {
  title: "Servizi e Comfort - Villa Olimpia",
  description: "Scopri tutti i servizi e comfort disponibili a Villa Olimpia per il tuo soggiorno indimenticabile.",
}

const services = [
  {
    icon: Wifi,
    title: "WiFi Gratuito",
    description: "Connessione internet ad alta velocità in tutti gli appartamenti e nelle aree comuni",
  },
  {
    icon: Car,
    title: "Parcheggio Privato",
    description: "Parcheggio riservato e sicuro per tutti gli ospiti",
  },
  {
    icon: Waves,
    title: "Vista Mare",
    description: "Tutti gli appartamenti offrono una vista mozzafiato sul mare Tirreno",
  },
  {
    icon: Utensils,
    title: "Cucine Attrezzate",
    description: "Cucine completamente attrezzate con elettrodomestici moderni",
  },
  {
    icon: Shield,
    title: "Sicurezza 24/7",
    description: "Sistema di sicurezza avanzato e cassaforte in ogni appartamento",
  },
  {
    icon: Star,
    title: "Servizio Premium",
    description: "Assistenza dedicata e servizio concierge per rendere il tuo soggiorno perfetto",
  },
  {
    icon: Droplets,
    title: "Aria Condizionata",
    description: "Climatizzazione in tutti gli ambienti per il massimo comfort",
  },
  {
    icon: Wind,
    title: "Riscaldamento",
    description: "Sistema di riscaldamento efficiente per i mesi invernali",
  },
  {
    icon: Tv,
    title: "TV Smart",
    description: "Televisori Smart TV con accesso a streaming e canali internazionali",
  },
  {
    icon: Coffee,
    title: "Caffè e Tè",
    description: "Macchina del caffè e tè disponibili in ogni appartamento",
  },
  {
    icon: Dumbbell,
    title: "Area Fitness",
    description: "Palestra attrezzata per mantenerti in forma durante il soggiorno",
  },
  {
    icon: Concierge,
    title: "Concierge",
    description: "Servizio concierge per prenotazioni, consigli e assistenza",
  },
]

export default function ServiziPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Servizi e Comfort
            </h1>
            <p className="text-xl text-muted-foreground">
              Tutto ciò di cui hai bisogno per un soggiorno indimenticabile nel
              cuore della Calabria
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Il Nostro Impegno
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ci impegniamo ogni giorno per offrirti un&apos;esperienza
              straordinaria. La tua soddisfazione è la nostra priorità.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">9</CardTitle>
                  <CardDescription>Appartamenti</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">100%</CardTitle>
                  <CardDescription>Soddisfazione</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">24/7</CardTitle>
                  <CardDescription>Assistenza</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

