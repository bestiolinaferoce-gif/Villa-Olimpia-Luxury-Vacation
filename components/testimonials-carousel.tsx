'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  country: string
  rating: number
  text: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    name: "Julia Schmidt",
    country: "Deutschland",
    rating: 5,
    text: "Wunderschöne Villa, nur 70m vom kristallklaren Meer entfernt. Der Pool ist fantastisch und die Apartments sind sehr sauber und modern. Perfekt für Familien!",
    date: "Agosto 2024"
  },
  {
    name: "Marco Rossi",
    country: "Italia",
    rating: 5,
    text: "Esperienza fantastica! La posizione è perfetta, a due passi dalla spiaggia. Piscina meravigliosa e appartamenti curati nei minimi dettagli. Torneremo sicuramente!",
    date: "Luglio 2024"
  },
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    rating: 5,
    text: "Absolutely stunning! The villa exceeded all our expectations. Beautiful pool, spacious apartments, and the location is unbeatable. The owner Francesco was incredibly helpful.",
    date: "Settembre 2024"
  },
  {
    name: "Hans Müller",
    country: "Deutschland",
    rating: 5,
    text: "Perfekter Urlaub! Die Villa ist wunderschön gelegen, die Ausstattung ist hochwertig und der Service war außergewöhnlich. Wir können es nur empfehlen!",
    date: "Giugno 2024"
  },
  {
    name: "Sophie Dubois",
    country: "France",
    rating: 5,
    text: "Magnifique! La villa est parfaite pour des vacances en famille. La piscine est superbe et les appartements sont très confortables. La plage à quelques mètres est un vrai plus!",
    date: "Agosto 2024"
  }
]

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Cosa Dicono i Nostri Ospiti
        </h2>
        
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-14"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} className="!w-80 md:!w-96">
              <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}












