"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

const VillaInteractiveMap = dynamic(
  () => import("@/components/villa-interactive-map").then((m) => ({ default: m.VillaInteractiveMap })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-3xl border border-primary/10 bg-white p-8 text-center shadow-lg">
        <p className="text-muted-foreground">Caricamento mappa interattiva…</p>
      </div>
    ),
  }
)

export function MapReveal() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">Mappa Interattiva</h2>
            <p className="text-muted-foreground">Mostra la posizione degli appartamenti nella villa.</p>
          </div>
          <Button variant="luxury" onClick={() => setOpen((v) => !v)}>
            {open ? "Nascondi mappa" : "Mostra mappa"}
          </Button>
        </div>
        {open ? <VillaInteractiveMap /> : (
          <div className="rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-lg">
            <p className="text-muted-foreground">Clicca su “Mostra mappa” per aprire la planimetria interattiva.</p>
          </div>
        )}
      </div>
    </section>
  )
}
