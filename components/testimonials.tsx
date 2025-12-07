"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { reviews } from "@/data/reviews"

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
  // Prendi le prime 6 recensioni per il carousel
  const featuredReviews = reviews.slice(0, 6)

  return (
    <section className="py-20 bg-blue-600 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Cosa Dicono i Nostri Ospiti
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Le recensioni dei nostri ospiti parlano da sole
          </p>
        </div>

        {/* Carousel animato per mobile */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, -300 * featuredReviews.length]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-6"
          >
            {/* Duplica le recensioni per loop infinito */}
            {[...featuredReviews, ...featuredReviews].map((review, index) => (
              <div 
                key={`${review.id}-${index}`}
                className="min-w-[300px] bg-white/10 backdrop-blur-sm p-6 rounded-xl flex-shrink-0"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">&quot;{review.text}&quot;</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold">{review.author}</p>
                  <p className="text-sm text-white/80">{review.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid statica per desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/80">
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

