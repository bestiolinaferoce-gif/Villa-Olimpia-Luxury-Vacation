import { ImageGallery } from "@/components/gallery/image-gallery"
import { villaImages } from "@/lib/image-loader"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata = {
  title: "Gallery - Villa Olimpia",
  description: "Scopri Villa Olimpia attraverso le nostre foto. Appartamenti, piscina, terrazze, spiaggia e viste mozzafiato sulla Spiaggia dei Gigli, Capo Rizzuto.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: "Gallery" }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              Scopri Villa Olimpia attraverso foto reali di appartamenti, piscina, spazi esterni e territorio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-playfair font-bold text-slate-900">Cosa trovi in questa gallery</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Una panoramica visiva della struttura: appartamenti, piscina condivisa, terrazze, giardino e scorci del mare di Capopiccolo.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-playfair font-bold text-slate-900">Perche può esserti utile</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Se sei arrivato da Google su questa pagina, qui puoi verificare subito stile della struttura, qualità degli spazi esterni e vicinanza al contesto naturale.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-playfair font-bold text-slate-900">Dopo la gallery</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Passa alle schede degli appartamenti o alla pagina contatti per ricevere disponibilità e preventivo diretto senza passaggi su portali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ImageGallery
            images={[...villaImages.gallery]}
            title="Villa Olimpia - Immagini"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
            <h2 className="text-2xl font-playfair font-bold text-slate-900 md:text-3xl">
              Vuoi capire quale appartamento è più adatto?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Dopo questa panoramica puoi confrontare gli appartamenti, verificare la posizione rispetto alla Spiaggia dei Gigli e richiedere un preventivo diretto.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/appartamenti"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Vedi gli appartamenti
              </a>
              <a
                href="/location"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Guarda la posizione
              </a>
              <a
                href="/contatti#prenota"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Richiedi disponibilità
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
