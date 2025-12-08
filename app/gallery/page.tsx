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
              Scopri Villa Olimpia attraverso le nostre foto
            </p>
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
    </div>
  )
}

