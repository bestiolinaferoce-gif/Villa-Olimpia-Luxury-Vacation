"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Sun,
  Waves,
  Users,
  Calendar,
  Shield,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const juneReasons = [
  {
    icon: Sun,
    title: "Clima ideale, spiagge tranquille",
    text: "Temperature perfette (25-30°C), mare cristallino e nessun affollamento. Giugno è il segreto meglio custodito della Calabria.",
  },
  {
    icon: Waves,
    title: "Mare al suo meglio",
    text: "L'acqua della Spiaggia dei Gigli è più limpida che mai. Ideale per snorkeling nell'Area Marina Protetta di Capo Rizzuto.",
  },
  {
    icon: Users,
    title: "Perfetto per famiglie e coppie",
    text: "Ritmi rilassati, spazi liberi in piscina e spiaggia, ristoranti senza code. La vacanza come dovrebbe essere.",
  },
]

const julyReasons = [
  {
    icon: Calendar,
    title: "L'estate nel pieno",
    text: "Luglio è energia pura: serate estive lunghe, sagre locali, aperitivi al tramonto e il profumo del gelsomino nell'aria.",
  },
  {
    icon: Heart,
    title: "Esperienze uniche",
    text: "Tour enogastronomici, escursioni a Le Castella, degustazioni di Cirò DOC e serate in barca nell'Area Marina Protetta.",
  },
  {
    icon: Shield,
    title: "Ancora buona disponibilità",
    text: "A differenza di Agosto, in Luglio puoi ancora scegliere il tuo appartamento preferito. Ma non aspettare troppo.",
  },
]

const guarantees = [
  "Cancellazione gratuita fino a 14 giorni prima",
  "Nessuna commissione di portale — prezzo diretto",
  "Risposta garantita entro 24 ore",
  "Preventivo personalizzato senza impegno",
  "Soggiorni 7+ notti: tariffa agevolata dedicata",
]

export function JuneJulySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-blue-50/50 to-background" id="giugno-luglio">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            <Sun className="h-4 w-4" />
            Disponibilità limitata
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
            Perché Giugno e Luglio sono i mesi perfetti
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Prenota ora la tua vacanza a Villa Olimpia nei mesi più belli della Calabria.
            Tariffe pre-stagione, clima perfetto e disponibilità ancora aperta.
          </p>
        </motion.div>

        {/* Two-column: June + July */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* June */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-3 left-6 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                Solo 4 appartamenti
              </div>
              <Card className="border-2 border-amber-200 bg-white/90 backdrop-blur-sm shadow-lg pt-4">
                <CardContent className="p-6 pt-6">
                  <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Sun className="h-7 w-7 text-amber-500" />
                    Giugno 2026
                  </h3>
                  <div className="space-y-5">
                    {juneReasons.map((reason, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                          <reason.icon className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">{reason.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{reason.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="luxury" className="w-full mt-6 group" asChild>
                    <Link href="/contatti?source=june_section&checkIn=2026-06-01#prenota">
                      Prenota Giugno
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* July */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute -top-3 left-6 bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                Solo 3 appartamenti
              </div>
              <Card className="border-2 border-sky-200 bg-white/90 backdrop-blur-sm shadow-lg pt-4">
                <CardContent className="p-6 pt-6">
                  <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Waves className="h-7 w-7 text-sky-500" />
                    Luglio 2026
                  </h3>
                  <div className="space-y-5">
                    {julyReasons.map((reason, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                          <reason.icon className="h-5 w-5 text-sky-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">{reason.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{reason.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="default" className="w-full mt-6 group" asChild>
                    <Link href="/contatti?source=july_section&checkIn=2026-07-01#prenota">
                      Prenota Luglio
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Guarantees strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 shadow-md p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-playfair font-bold text-slate-900">
              Prenota senza pensieri
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Tutte le garanzie per prenotare in serenità
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/60"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">{guarantee}</span>
              </motion.div>
            ))}
          </div>

          {/* Long stay CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-5 py-2.5 rounded-full text-sm font-bold mb-4">
              <Clock className="h-4 w-4" />
              Soggiorni di 7+ notti: chiedi la tariffa agevolata
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="luxury" size="lg" className="group" asChild>
                <Link href="/contatti?source=june_july_guarantees#prenota">
                  Richiedi preventivo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/393335773390?text=Ciao!%20Vorrei%20un%20preventivo%20per%20Giugno/Luglio%20a%20Villa%20Olimpia" target="_blank" rel="noopener noreferrer">
                  WhatsApp diretto
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
