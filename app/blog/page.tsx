import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import { BLOG_POSTS } from "@/data/blog-posts"
import { generateMetadata, BASE_URL } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Blog su Capo Rizzuto, Spiagge e Vacanze in Calabria | Villa Olimpia",
  description:
    "Guide su Capo Rizzuto, Spiaggia dei Gigli, Le Castella, vacanze in famiglia, enogastronomia e prenotazione diretta. Il blog di Villa Olimpia per organizzare al meglio il soggiorno in Calabria.",
  path: "/blog",
  keywords: [
    "blog Villa Olimpia",
    "guide capo rizzuto",
    "spiagge capo rizzuto",
    "vacanze famiglia capo rizzuto",
    "ristoranti capo rizzuto",
    "area marina protetta capo rizzuto",
  ],
})


export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Blog Villa Olimpia — guide e consigli Capo Rizzuto",
            description: "Articoli su spiagge, famiglie, territorio e prenotazione diretta a Villa Olimpia.",
            numberOfItems: BLOG_POSTS.length,
            itemListElement: BLOG_POSTS.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: article.title,
              url: `${BASE_URL}/blog/${article.slug}`,
            })),
          }),
        }}
      />
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Blog Villa Olimpia
            </h1>
            <p className="text-xl text-muted-foreground">
              Consigli, guide e articoli per pianificare la tua vacanza a Capo Rizzuto.
              Spiagge, famiglie, gastronomia e tutto ciò che serve per un soggiorno indimenticabile.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              In questa sezione raccogliamo guide utili per chi sta organizzando una vacanza a Capo Rizzuto e vuole
              capire meglio il territorio prima di prenotare. Troverai contenuti su spiagge, borghi, gastronomia,
              attività per famiglie e suggerimenti pratici per vivere al meglio Capopiccolo e l&apos;Area Marina Protetta.
            </p>
            <p>
              Ogni articolo è pensato per accompagnare l&apos;utente da una ricerca informativa a una scelta più consapevole
              del soggiorno. Se vuoi passare subito alla parte operativa, puoi esplorare gli{" "}
              <Link href="/appartamenti" className="text-primary underline-offset-2 hover:underline">
                appartamenti di Villa Olimpia
              </Link>{" "}
              oppure inviare una{" "}
              <Link href="/contatti?source=blog_intro#prenota" className="text-primary underline-offset-2 hover:underline">
                richiesta diretta di disponibilità
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
              Articoli in evidenza
            </h2>
            <div className="space-y-6">
              {BLOG_POSTS.map((article) => {
                const IconComponent = article.icon
                return (
                  <Card key={article.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                            {article.category}
                          </span>
                          <CardTitle className="text-xl mt-1 mb-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {article.description}
                          </CardDescription>
                          <Button asChild variant="outline" size="sm" className="mt-4">
                            <Link href={`/blog/${article.slug}`}>
                              <BookOpen className="h-4 w-4 mr-2" />
                              Leggi l&apos;articolo
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Pronto a prenotare la tua vacanza?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per scoprire Capo Rizzuto. Prenota in modo diretto, senza commissioni.
          </p>
          <Button variant="luxury" size="lg" asChild className="group">
            <Link href="/contatti?source=blog#prenota">
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                Verifica Disponibilità
              </span>
              <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
