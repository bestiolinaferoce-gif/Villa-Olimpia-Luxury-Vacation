import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Enogastronomia Calabrese - Villa Olimpia',
  description: 'Scopri i sapori autentici della Calabria: vini DOC, prodotti tipici, ristoranti tradizionali vicino a Villa Olimpia.',
};

export default function EnogastronomiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Enogastronomia Calabrese</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Scopri i sapori autentici della nostra terra
          </p>
        </div>
      </section>

      {/* Cucina Calabrese */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Cucina Tradizionale</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-700">'Nduja di Spilinga</h3>
            <p className="text-lg mb-4">
              La regina della salumeria calabrese. Un salame spalmabile piccante, 
              fatto con carne di maiale, peperoncino calabrese e spezie. Perfetta 
              su bruschette o per insaporire primi piatti.
            </p>
            <p className="text-gray-600">
              Produzione artigianale a Spilinga (VV) - 50 minuti da Villa Olimpia
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-700">Pesce Spada alla Ghiotta</h3>
            <p className="text-lg mb-4">
              Piatto tipico dello Stretto di Messina. Pesce spada freschissimo 
              cucinato con pomodoro, olive, capperi e peperoncino. Da provare 
              nei ristoranti di Le Castella e Crotone.
            </p>
            <p className="text-gray-600">
              Disponibile nei ristoranti a 5-20 minuti da Villa Olimpia
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-700">Cipolla Rossa di Tropea IGP</h3>
            <p className="text-lg mb-4">
              Dolce e croccante, la cipolla rossa di Tropea è protagonista di 
              marmellate, insalate e contorni. Un prodotto unico protetto dal 
              marchio IGP europeo.
            </p>
            <p className="text-gray-600">
              Acquistabile nei mercati locali e negozi specializzati
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-700">Bergamotto di Reggio Calabria</h3>
            <p className="text-lg mb-4">
              L'"oro verde" della Calabria. Agrume raro coltivato solo nella 
              costa reggina. Usato per profumi, liquori e in cucina per piatti 
              raffinati.
            </p>
            <p className="text-gray-600">
              Prodotti al bergamotto disponibili in tutta la regione
            </p>
          </div>
        </div>
      </section>

      {/* Vini del Territorio */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Vini del Territorio</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-red-800">Cirò DOC Rosso</h3>
              <p className="mb-4">
                Il vino più celebre della Calabria. Prodotto con uve Gaglioppo 
                nella zona di Cirò, a 30 minuti da Villa Olimpia. Corposo e 
                strutturato, perfetto con carni rosse e formaggi stagionati.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Vitigno:</strong> Gaglioppo 100%</p>
                <p><strong>Grado:</strong> 13-14%</p>
                <p><strong>Prezzo:</strong> €8-20/bottiglia</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-yellow-700">Cirò DOC Bianco</h3>
              <p className="mb-4">
                Fresco e minerale, prodotto con uve Greco Bianco. Ideale con 
                pesce crudo, crostacei e piatti di mare. Da servire fresco 
                (8-10°C).
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Vitigno:</strong> Greco Bianco</p>
                <p><strong>Grado:</strong> 12-13%</p>
                <p><strong>Prezzo:</strong> €6-15/bottiglia</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-pink-700">Melissa DOC Rosato</h3>
              <p className="mb-4">
                Rosato delicato e profumato, perfetto per aperitivi estivi e 
                piatti di pesce. Prodotto nella zona di Melissa, vicino a Cirò.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Vitigno:</strong> Gaglioppo, Greco</p>
                <p><strong>Grado:</strong> 12%</p>
                <p><strong>Prezzo:</strong> €7-12/bottiglia</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Cantine da Visitare</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h4 className="font-bold text-xl mb-2">Librandi</h4>
                <p className="text-gray-700 mb-2">Una delle cantine più prestigiose della Calabria</p>
                <p className="text-sm text-gray-600">📍 Cirò Marina - 30 minuti da Villa Olimpia</p>
                <p className="text-sm text-gray-600">📞 Prenotazione obbligatoria</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-left">
                <h4 className="font-bold text-xl mb-2">Ippolito 1845</h4>
                <p className="text-gray-700 mb-2">Cantina storica con degustazioni guidate</p>
                <p className="text-sm text-gray-600">📍 Cirò Marina - 30 minuti da Villa Olimpia</p>
                <p className="text-sm text-gray-600">📞 Visite tutti i giorni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ristoranti Consigliati */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Ristoranti Consigliati</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50">
            <h3 className="text-2xl font-bold mb-2">Ristorante da Annibale</h3>
            <p className="text-gray-700 mb-2">
              Pesce freschissimo e tradizione calabrese. Vista sul Castello Aragonese di Le Castella.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 Le Castella - 8 minuti</span>
              <span>💰 €€ (30-50€ a persona)</span>
              <span>🐟 Specialità: Pesce crudo, spada alla ghiotta</span>
            </div>
          </div>

          <div className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50">
            <h3 className="text-2xl font-bold mb-2">Trattoria Il Gabbiano</h3>
            <p className="text-gray-700 mb-2">
              Cucina casalinga e porzioni abbondanti. Gestione familiare dal 1985.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 Capo Rizzuto - 10 minuti</span>
              <span>💰 € (20-35€ a persona)</span>
              <span>🍝 Specialità: Pasta fatta in casa, salsiccia locale</span>
            </div>
          </div>

          <div className="border-l-4 border-red-600 pl-6 py-4 bg-gray-50">
            <h3 className="text-2xl font-bold mb-2">Ristorante L'Approdo</h3>
            <p className="text-gray-700 mb-2">
              Eleganza e creatività. Piatti gourmet con prodotti del territorio.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 Crotone - 20 minuti</span>
              <span>💰 €€€ (50-80€ a persona)</span>
              <span>⭐ Specialità: Menu degustazione, pesce di mare</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prodotti Tipici */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Prodotti da Portare a Casa</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">🌶️</div>
              <h3 className="font-bold text-lg mb-2">Peperoncino</h3>
              <p className="text-sm text-gray-600">
                In tutte le varietà e formati: fresco, secco, polvere, olio
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🫒</div>
              <h3 className="font-bold text-lg mb-2">Olio EVO</h3>
              <p className="text-sm text-gray-600">
                Extravergine d'oliva prodotto in frantoi locali
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🧀</div>
              <h3 className="font-bold text-lg mb-2">Formaggi</h3>
              <p className="text-sm text-gray-600">
                Pecorino calabrese, caciocavallo silano DOP
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🍯</div>
              <h3 className="font-bold text-lg mb-2">Miele</h3>
              <p className="text-sm text-gray-600">
                Miele di eucalipto, castagno, agrumi delle montagne calabresi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 text-center bg-red-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Vivi l'Esperienza Gastronomica Calabrese</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Soggiorna a Villa Olimpia e scopri i sapori autentici della nostra terra
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" size="lg" asChild>
            <Link href="/appartamenti">
              Vedi Appartamenti
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="bg-white text-red-700 hover:bg-gray-100 border-white" asChild>
            <Link href="/contatti">
              Contattaci
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
