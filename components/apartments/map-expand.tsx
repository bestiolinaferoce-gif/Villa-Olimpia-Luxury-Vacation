"use client"

import { useState } from "react"
import VillaOlimpiaMap from "@/components/VillaOlimpiaMap"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { trackEvent } from "@/components/analytics/google-analytics"

interface MapExpandProps {
  language?: "it" | "en" | "de"
}

export function MapExpand({ language = "it" }: MapExpandProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">Mappa Interattiva</h2>
            <p className="text-muted-foreground">
              Esplora la disposizione reale degli appartamenti. La mappa si apre solo su richiesta.
            </p>
          </div>
          <Button
            variant="luxury"
            className="bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
            onClick={() => {
              setIsOpen((prev) => {
                const next = !prev
                trackEvent("map_toggle", "Engagement", next ? "open" : "close")
                return next
              })
            }}
          >
            <MapPin className="mr-2 h-4 w-4" />
            {isOpen ? "Chiudi mappa" : "Apri mappa"}
          </Button>
        </div>

        {isOpen && (
          <div className="rounded-3xl border border-primary/15 bg-white p-3 md:p-4 shadow-xl">
            <VillaOlimpiaMap language={language} />
          </div>
        )}
      </div>
    </section>
  )
}
