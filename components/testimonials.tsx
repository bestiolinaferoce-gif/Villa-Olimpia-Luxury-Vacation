"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Rossi",
    location: "Milano, Italia",
    rating: 5,
    text: "Esperienza fantastica! L'appartamento era perfetto, pulito e con una vista mozzafiato. Il personale è stato molto disponibile. Torneremo sicuramente!",
    date: "Agosto 2024",
  },
  {
    name: "John Smith",
    location: "Londra, UK",
    rating: 5,
    text: "Villa Olimpia è un vero gioiello. La posizione è incredibile, a pochi passi dal mare. L'appartamento era lussuoso e ben attrezzato. Consigliatissimo!",
    date: "Luglio 2024",
  },
  {
    name: "Sophie Martin",
    location: "Parigi, Francia",
    rating: 5,
    text: "Vacanza perfetta! La terrazza con vista mare è stata il punto forte. Servizio impeccabile e location da sogno. Grazie per tutto!",
    date: "Settembre 2024",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Cosa Dicono i Nostri Ospiti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le recensioni dei nostri ospiti parlano da sole
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

