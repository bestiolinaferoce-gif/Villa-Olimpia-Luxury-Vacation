import Link from "next/link"
import { UtmBuilder } from "@/components/marketing/utm-builder"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "UTM Builder - Villa Olimpia",
  description: "Genera link tracciati per campagne marketing a costo zero.",
}

export default function UtmPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Marketing a costo zero
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-playfair font-bold text-slate-900">Link tracciati pronti</h1>
          <p className="mt-3 text-lg text-slate-600">
            Crea in 30 secondi un link tracciato e condividilo su Instagram, Facebook o WhatsApp.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/contatti">Vai ai contatti</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/appartamenti">Vedi appartamenti</Link>
            </Button>
          </div>
        </div>

        <UtmBuilder />
      </section>
    </div>
  )
}
