"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, UtensilsCrossed, Camera, Compass } from "lucide-react"
import { motion } from "framer-motion"

interface LocationLinksSectionProps {
  variant?: "compact" | "full"
}

export function LocationLinksSection({ variant = "full" }: LocationLinksSectionProps) {
  if (variant === "compact") {
    return (
      <div className="py-8 bg-gradient-to-r from-primary/5 to-ocean/5 rounded-xl border-2 border-primary/10">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-playfair font-bold">
            Scopri il Territorio
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Esplora le meraviglie della Calabria durante il tuo soggiorno
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/location">
                <MapPin className="mr-2 h-4 w-4" />
                Cosa Vedere nei Dintorni
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/location">
                <UtensilsCrossed className="mr-2 h-4 w-4" />
                Dove Mangiare e Cosa Assaggiare
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-ocean/5 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Esplora il Territorio durante il Tuo Soggiorno
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Durante la tua vacanza a Villa Olimpia, scopri le meraviglie della Calabria: 
            dalle spiagge Bandiera Blu alle cantine storiche, dai borghi antichi alle esperienze enogastronomiche autentiche.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Cosa Vedere nei Dintorni</CardTitle>
                <CardDescription>
                  Scopri le attrazioni, le spiagge e i luoghi da non perdere vicino a Villa Olimpia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• <strong className="text-foreground">Spiaggia dei Gigli</strong> - Bandiera Blu a 100 metri</li>
                  <li>• <strong className="text-foreground">Area Marina Protetta</strong> - Snorkeling e immersioni</li>
                  <li>• <strong className="text-foreground">Le Castella</strong> - Castello aragonese patrimonio storico</li>
                  <li>• <strong className="text-foreground">Valli Cupe</strong> - Riserva naturale con cascate</li>
                  <li>• <strong className="text-foreground">Crotone</strong> - Città storica Magna Grecia</li>
                </ul>
                <Button variant="luxury" className="w-full" asChild>
                  <Link href="/location">
                    <Compass className="mr-2 h-4 w-4" />
                    Esplora tutte le Attrazioni
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center mb-4">
                  <UtensilsCrossed className="h-6 w-6 text-ocean" />
                </div>
                <CardTitle className="text-2xl">Dove Mangiare e Cosa Assaggiare</CardTitle>
                <CardDescription>
                  Ristoranti eccellenza, cantine storiche, agriturismi e prodotti tipici calabresi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• <strong className="text-foreground">Cantine Cirò DOC</strong> - Degustazioni vini storici</li>
                  <li>• <strong className="text-foreground">Ristoranti pesce fresco</strong> - Cucina calabrese autentica</li>
                  <li>• <strong className="text-foreground">Agriturismi km zero</strong> - Sapori genuini del territorio</li>
                  <li>• <strong className="text-foreground">Prodotti tipici</strong> - &apos;Nduja, cipolla rossa, bergamotto</li>
                  <li>• <strong className="text-foreground">Olio extravergine</strong> - Frantoi tradizionali</li>
                </ul>
                <Button variant="luxury" className="w-full" asChild>
                  <Link href="/location">
                    <Camera className="mr-2 h-4 w-4" />
                    Scopri i Sapori del Territorio
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}












