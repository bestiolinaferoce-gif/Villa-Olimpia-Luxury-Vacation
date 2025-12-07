"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Wifi, Car, Waves, Utensils, Shield, Star, 
  Droplets, Wind, Tv, Coffee, Dumbbell, UserCircle,
  Clock, CheckCircle, XCircle, MapPin, Sparkles
} from "lucide-react"

// Servizi inclusi
const includedServices = [
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
    description: "Tutti gli appartamenti offrono una vista mozzafiato sul mare",
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
    icon: UserCircle,
    title: "Concierge",
    description: "Servizio concierge per prenotazioni, consigli e assistenza",
  },
]

// Servizi opzionali
const optionalServices = [
  {
    title: "Transfer Aeroporto",
    description: "Servizio navetta da/per aeroporto Lamezia Terme",
    price: "Su richiesta",
  },
  {
    title: "Pulizia Extra",
    description: "Servizio di pulizia aggiuntiva durante il soggiorno",
    price: "€50",
  },
  {
    title: "Baby-sitting",
    description: "Servizio di baby-sitting su prenotazione",
    price: "Su richiesta",
  },
  {
    title: "Escursioni Guidate",
    description: "Tour organizzati alle attrazioni della zona",
    price: "Su richiesta",
  },
]

// Regole della casa
const houseRules = [
  { rule: "Check-in: dalle 15:00 alle 20:00", icon: Clock, allowed: true },
  { rule: "Check-out: entro le 11:00", icon: Clock, allowed: true },
  { rule: "Divieto di fumo negli appartamenti", icon: XCircle, allowed: false },
  { rule: "Animali domestici consentiti (su richiesta)", icon: CheckCircle, allowed: true },
  { rule: "Feste e eventi: consentiti previo accordo", icon: CheckCircle, allowed: true },
  { rule: "Silenzio dalle 22:00 alle 8:00", icon: XCircle, allowed: false },
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

      {/* Services Grid - Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Servizi Inclusi
            </h2>
            <p className="text-lg text-muted-foreground">
              Tutti questi servizi sono inclusi nel prezzo del soggiorno
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, index) => {
              const IconComponent = service.icon
              if (!IconComponent) return null
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Optional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Servizi Opzionali
            </h2>
            <p className="text-lg text-muted-foreground">
              Servizi aggiuntivi disponibili su richiesta
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {optionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Regole della Casa
              </h2>
              <p className="text-lg text-muted-foreground">
                Per garantire un soggiorno piacevole per tutti
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {houseRules.map((rule, index) => {
                const IconComponent = rule.icon
                if (!IconComponent) return null
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Card>
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className={`flex-shrink-0 ${rule.allowed ? 'text-green-600' : 'text-red-600'}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <p className="text-sm">{rule.rule}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Check-in/Check-out Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Informazioni Check-in e Check-out
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle>Check-in</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Orario:</strong> Dalle 15:00 alle 20:00</p>
                  <p className="text-sm"><strong>Check-in anticipato:</strong> Su richiesta e disponibilità</p>
                  <p className="text-sm"><strong>Check-in tardivo:</strong> Contattaci per accordi</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle>Check-out</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Orario:</strong> Entro le 11:00</p>
                  <p className="text-sm"><strong>Check-out tardivo:</strong> Su richiesta e disponibilità</p>
                  <p className="text-sm"><strong>Bagagli:</strong> Possibilità di lasciare bagagli</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
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
