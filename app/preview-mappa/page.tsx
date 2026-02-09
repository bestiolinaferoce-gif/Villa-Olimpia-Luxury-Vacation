import VillaOlimpiaMap from "@/components/VillaOlimpiaMap"

export const metadata = {
  title: "Anteprima Mappa - Villa Olimpia",
  robots: { index: false, follow: false },
}

export default function PreviewMappaPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white">
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-slate-900 mb-4">
          Anteprima Mappa Interattiva
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Pagina di anteprima locale. Non pubblicare finche non approvata.
        </p>
        <VillaOlimpiaMap language="it" />
      </section>
    </div>
  )
}
