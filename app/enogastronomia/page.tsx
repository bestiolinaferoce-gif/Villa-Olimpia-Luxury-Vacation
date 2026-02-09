import type { Metadata } from 'next'
import Image from 'next/image'
import { Wine, UtensilsCrossed, ChefHat, Grape } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { generateMetadata as genMeta } from "@/lib/metadata"
import { EnogastronomiaRestaurantsGrid } from '@/components/enogastronomia-restaurants-grid'
import { AnimatedSection } from '@/components/enogastronomia-animated-section'
// import RestaurantsMapPremium from '@/components/restaurants-map-premium' // Temporaneamente disabilitato

export const metadata: Metadata = genMeta({
  title: "Enogastronomia Calabrese | Vini Cirò DOC e Sapori Locali | Villa Olimpia Capo Rizzuto",
  description: "Scopri l'enogastronomia calabrese da Villa Olimpia: vini Cirò DOC, olio DOP, 'nduja, pecorino, bergamotto. Ristoranti top recensiti, degustazioni e tour enogastronomici a Capo Rizzuto.",
  path: "/enogastronomia",
  keywords: [
    "vino cirò DOC",
    "enogastronomia calabria",
    "ristoranti capo rizzuto",
    "sapori calabresi",
    "degustazioni vino crotone",
    "nduja calabrese",
    "bergamotto reggio calabria",
    "pecorino crotonese DOP",
    "olio extravergine calabria DOP",
    "ristoranti le castella",
    "cucina tradizionale calabrese",
    "tour enogastronomici calabria"
  ],
  image: "/images/og/enogastronomia.jpg"
})

export default function EnogastronomiaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero con gradient rosso/viola */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            I Sapori della Calabria
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Vini pregiati, olio extravergine DOP e tradizioni culinarie millenarie
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La Calabria è una terra di sapori autentici e genuini, dove la tradizione enogastronomica 
            si tramanda di generazione in generazione. Da <Link href="/" className="text-primary hover:underline font-semibold">Villa Olimpia</Link>, a pochi chilometri dal territorio 
            di Cirò, culla del <strong>vino più antico d'Italia</strong>, potrete scoprire un patrimonio gastronomico 
            ricchissimo fatto di vini pregiati, oli extravergine DOP, formaggi artigianali e prodotti 
            della terra coltivati con passione. Scopri anche le <Link href="/territorio" className="text-primary hover:underline font-semibold">bellezze naturali del territorio calabrese</Link>.
          </p>
        </div>
      </section>

      {/* Vino Cirò */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-purple-900 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Wine className="w-32 h-32 text-white" />
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                DOC dal 1969
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Vino Cirò DOC
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il <strong>Cirò DOC</strong> è considerato il vino più antico d'Italia, celebrato 
                già nell'antica Grecia come "vino degli dei". Prodotto nei vigneti che si estendono 
                tra Cirò e Cirò Marina, a soli 30 km da Villa Olimpia, questo vino si distingue per 
                il suo carattere robusto e aromatico.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <div>
                    <strong>Cirò Rosso Classico</strong> (Gaglioppo 95%): corpo pieno, tannini morbidi
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div>
                    <strong>Cirò Bianco</strong> (Greco Bianco): fresco, minerale, ideale con pesce
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                  <div className="w-3 h-3 bg-pink-400 rounded-full" />
                  <div>
                    <strong>Cirò Rosato</strong>: elegante, versatile, perfetto per aperitivi
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">🍷 Tour Enogastronomico</h3>
                <p className="mb-4 opacity-90">
                  Organizziamo visite guidate alle cantine storiche di Cirò con degustazioni 
                  di vini DOC abbinati a prodotti tipici locali.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contatti">Prenota Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Olio DOP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                DOP Calabria
              </div>
              <Grape className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Olio Extravergine DOP</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L'<strong>Olio Extravergine di Oliva DOP Calabria</strong> è un'eccellenza riconosciuta
                in tutto il mondo. Prodotto dalle cultivar autoctone Carolea, Dolce di Rossano e
                Grossa di Gerace, si caratterizza per il suo gusto fruttato, leggermente piccante
                e dall'aroma intenso.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <span className="text-primary text-xl">✓</span>
                  <span>Spremitura a freddo entro 24h dalla raccolta</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <span className="text-primary text-xl">✓</span>
                  <span>Acidità &lt; 0.5% (extra qualità)</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <span className="text-primary text-xl">✓</span>
                  <span>Certificazione DOP Calabria</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-yellow-900 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Grape className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prodotti Tipici */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Prodotti Tipici Calabresi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I sapori autentici della nostra terra, prodotti DOP e IGP di eccellenza
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: '\'Nduja', desc: 'Salume spalmabile piccante a base di carne di maiale e peperoncino calabrese. Si spalma su pane, pasta o pizza. Spilimbergo di Spilinga è la patria storica.', zone: 'Vibo Valentia', icon: UtensilsCrossed, gradient: 'from-red-900 to-orange-900' },
              { name: 'Pecorino Crotonese DOP', desc: 'Formaggio di pecora stagionato, dal sapore intenso e leggermente piccante. Prodotto sull\'altopiano della Sila con latte di ovini allevati al pascolo.', zone: 'Altopiano Silano', icon: ChefHat, gradient: 'from-yellow-800 to-yellow-600' },
              { name: 'Bergamotto', desc: 'Agrume unico al mondo, coltivato esclusivamente nella fascia costiera reggina. Essenziale per profumi e per la cucina; la scorcia candita è una prelibatezza.', zone: 'Reggio Calabria', icon: Grape, gradient: 'from-green-700 to-green-500' },
              { name: 'Cipolla Rossa di Tropea IGP', desc: 'Dolce e croccante, ideale cruda in insalata o cotta per marmellate e conserve. Simbolo della Costa degli Dei e della cucina calabrese.', zone: 'Costa degli Dei', icon: UtensilsCrossed, gradient: 'from-purple-700 to-pink-600' },
              { name: 'Liquirizia', desc: 'La migliore liquirizia al mondo. Prodotta dalle radici di Glycyrrhiza glabra nella Piana di Sibari. Amarelli e Corrado sono tra i marchi storici.', zone: 'Piana di Sibari', icon: Grape, gradient: 'from-amber-900 to-amber-700' },
              { name: 'Soppressata Calabrese DOP', desc: 'Salume stagionato di carne di maiale magra e grasso, aromatizzato con pepe nero e peperoncino. Consumata a fette con pane e vino Cirò.', zone: 'Tutta la Calabria', icon: ChefHat, gradient: 'from-red-800 to-red-600' },
              { name: 'Caciocavallo Silano DOP', desc: 'Formaggio a pasta filata dalla forma a pera, stagionato in coppia. Sapore dolce e delicato quando giovane, più piccante se stagionato.', zone: 'Sila', icon: ChefHat, gradient: 'from-amber-700 to-amber-500' },
              { name: 'Fichi di Cosenza DOP', desc: 'Fichi secchi della varietà Dottato, spesso farciti con mandorle e aromatizzati. Tipici del Cosentino, perfetti a fine pasto o in dolci.', zone: 'Provincia di Cosenza', icon: Grape, gradient: 'from-violet-800 to-purple-600' },
              { name: 'Clementine di Calabria IGP', desc: 'Agrumi dolci e senza semi, raccolti da ottobre a febbraio. La Piana di Sibari e la Locride sono le zone di produzione principali.', zone: 'Piana di Sibari, Locride', icon: Grape, gradient: 'from-orange-600 to-yellow-500' },
              { name: 'Sardella', desc: 'Crema di neonata di pesce (sardine o alici) con peperoncino, finocchietto e olio. Si spalma su crostini o condisce la pasta; specialità della costa ionica.', zone: 'Crotone, Catanzaro', icon: UtensilsCrossed, gradient: 'from-slate-700 to-slate-500' },
              { name: 'Capocollo di Calabria DOP', desc: 'Salume ricavato dalla parte superiore della lonza di maiale, stagionato con peperoncino e spezie. Sapore dolce e aromatico.', zone: 'Tutta la Calabria', icon: ChefHat, gradient: 'from-rose-800 to-red-700' },
              { name: 'Pitta \'mpigliata', desc: 'Dolce natalizio a spirale di pasta fillo ripiena di noci, uva passa, cioccolato e spezie. Tipico della provincia di Reggio Calabria.', zone: 'Reggio Calabria', icon: UtensilsCrossed, gradient: 'from-amber-800 to-orange-600' },
            ].map((product, i) => {
              const IconComponent = product.icon
              return (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${product.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <p className="text-sm font-semibold text-primary">📍 {product.zone}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mappa Interattiva Ristoranti Premium - TEMPORANEAMENTE DISABILITATA */}
      {/* 
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Mappa Interattiva</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-900">
                I Migliori Ristoranti della Zona
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Esplora i ristoranti consigliati sulla mappa interattiva. Clicca per dettagli, indicazioni GPS e prenotazioni.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <RestaurantsMapPremium />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/20">
                <span className="text-lg">💡</span>
                <p className="text-gray-700 font-medium">
                  Possiamo prenotare per te e consigliarti il ristorante perfetto per ogni occasione
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      */}

      {/* Ristoranti Consigliati - Grid Cards */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-rose-50/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <UtensilsCrossed className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Selezione Premium</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-900">
                Ristoranti Consigliati
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I ristoranti più apprezzati tra Capo Rizzuto, Le Castella e Crotone, selezionati per qualità e vicinanza a Villa Olimpia
              </p>
            </div>
          </AnimatedSection>

          <EnogastronomiaRestaurantsGrid />
        </div>
      </section>

      {/* Spazio Sponsor (discreto, in fondo pagina) */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center border border-primary/10 rounded-2xl bg-white/70 backdrop-blur-sm p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Partner & Sponsor
            </p>
            <p className="text-sm text-gray-600">
              Spazio dedicato a partner selezionati — presto disponibile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vivi l'Esperienza Enogastronomica Calabrese
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Prenota il tuo soggiorno a Villa Olimpia e scopri i sapori autentici
            della Calabria tra vini pregiati, prodotti DOP e tradizioni culinarie millenarie.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contatti">Prenota Ora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
