"use client"

import { motion } from "framer-motion"
import { Wine } from "lucide-react"

export type CiroTimelineEvent = {
  year: string
  title: string
  desc: string
}

export function CiroWineTourTimeline({ events }: { events: readonly CiroTimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-0.5 bg-amber-200 md:left-1/2" />
      <div className="space-y-12">
        {events.map((event, i) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-amber-500 shadow-lg md:left-1/2">
              <Wine className="h-5 w-5 text-white" />
            </div>
            <div
              className={`ml-20 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
            >
              <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-1 text-sm font-bold text-amber-600">{event.year}</div>
                <h3 className="mb-2 font-playfair text-xl font-bold">{event.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{event.desc}</p>
              </div>
            </div>
            <div className="hidden md:block md:w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
