import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogArticleJsonLd } from "@/components/seo/blog-article-json-ld"

export const metadata = generateMetadata({
  title: "Cucina calabrese a Capo Rizzuto: ristoranti, piatti tipici e i nostri posti del cuore",
  description: "Guida alla gastronomia calabrese di Capo Rizzuto: i migliori ristoranti di pesce, i piatti tipici da assaggiare e i consigli dello staff di Villa Olimpia.",
  path: "/blog/cucina-calabrese-capo-rizzuto-ristoranti",
  type: "article",
  keywords: ["ristoranti capo rizzuto", "cucina calabrese", "pesce fresco isola capo rizzuto", "cosa mangiare calabria"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogArticleJsonLd
        title="Cucina calabrese a Capo Rizzuto: ristoranti, piatti tipici e i nostri posti del cuore"
        description="Guida alla gastronomia calabrese di Capo Rizzuto: i migliori ristoranti di pesce, i piatti tipici da assaggiare e i consigli dello staff di Villa Olimpia."
        path="/blog/cucina-calabrese-capo-rizzuto-ristoranti"
        datePublished="2026-03-16"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Cucina calabrese" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Cucina calabrese a Capo Rizzuto: ristoranti, piatti tipici e i nostri posti del cuore
            </h1>
            <p className="text-xl text-muted-foreground">
              La Calabria non è solo mare. È anche una delle regioni italiane con la tradizione gastronomica più ricca e autentica. Chi soggiorna a Capo Rizzuto ha la fortuna di trovarsi dove il pesce fresco dell'Ionio incontra i sapori forti della cucina contadina calabrese.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">I piatti tipici da assaggiare</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-3">
                <li><strong>Pesce spada alla calabrese</strong> — marinatura con cipolla, pomodoro, olive, capperi e peperoncino.</li>
                <li><strong>Alici di Menaica</strong> — presidio Slow Food, pescate con tecnica tradizionale. Marinate, fritte o su crostini.</li>
                <li><strong>'Nduja di Spilinga</strong> — salsa di peperoncino e carne di maiale spalmabile. La versione locale è molto più intensa di quella industriale.</li>
                <li><strong>Spaghetti ai ricci di mare</strong> — i ricci dell'Area Marina Protetta sono tra i migliori d'Italia. Un piatto indimenticabile.</li>
                <li><strong>Fileja al ragù di capra</strong> — pasta tipica calabrese lavorata a mano, abbinata a ragù di capra con erbe aromatiche.</li>
                <li><strong>Pecorino crotonese DOP</strong> — stagionato, saporito, leggermente piccante. Da portare a casa come souvenir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">I ristoranti nella zona</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Villa Olimpia ha convenzioni con diversi ristoranti che permettono ai nostri ospiti condizioni preferenziali. Chiedete allo staff al check-in.
              </p>
              <p className="text-lg text-muted-foreground mb-2">
                <strong>Per il pesce fresco</strong> — sul lungomare di Le Castella, dove le materie prime arrivano dai pescherecci ogni mattina.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Per la cucina di terra</strong> — nelle masserie dell'entroterra: pasta fatta a mano, carni locali, verdure dell'orto.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Il mercato del pesce di Crotone</h2>
              <p className="text-lg text-muted-foreground">
                Apre di prima mattina al porto. Pesce freschissimo a prezzi inferiori ai ristoranti — perfetto per cucinare nel proprio lodge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Tour enogastronomici da Villa Olimpia</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Visita alle cantine di Cirò — il vino più famoso della Calabria, a 40 km da Capo Rizzuto</li>
                <li>Degustazione prodotti tipici — formaggi, salumi, oli extravergine artigianali</li>
                <li>Lezione di cucina calabrese — imparare a fare la fileja con i produttori locali</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                Per organizzare qualsiasi esperienza gastronomica, lo staff di Villa Olimpia è sempre a disposizione.
              </p>
            </div>

            <div className="pt-8 border-t flex flex-wrap gap-4">
              <Button asChild variant="default">
                <Link href="/appartamenti">Scopri i lodge disponibili</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contatti">Contattaci per la tua vacanza gastronomica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
