import type { Metadata } from "next"
import Link from "next/link"
import { BandieraBluBadge } from "@/components/BandieraBluBadge"
import { BASE_URL } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Bandiera Blu 2026 a Isola di Capo Rizzuto | Villa Olimpia a 100m dalla Spiaggia dei Gigli",
  description:
    "Villa Olimpia si trova in zona Bandiera Blu 2026 (Isola di Capo Rizzuto, FEE 14 maggio 2026). Calabria 2° in Italia con 27 spiagge premiate. 9 appartamenti con piscina a 100m dalla Spiaggia dei Gigli, nell'Area Marina Protetta.",
  alternates: {
    canonical: `${BASE_URL}/bandiera-blu-2026-isola-capo-rizzuto`,
  },
  openGraph: {
    title: "Bandiera Blu 2026 — Soggiorni a Villa Olimpia nel Comune premiato",
    description:
      "Isola di Capo Rizzuto Bandiera Blu 2026. Villa Olimpia: 9 appartamenti con piscina, Spiaggia dei Gigli a 100m, Area Marina Protetta.",
    url: `${BASE_URL}/bandiera-blu-2026-isola-capo-rizzuto`,
    type: "website",
    locale: "it_IT",
  },
  robots: { index: true, follow: true },
}

const calabrianBlueFlagMunicipalities = [
  "Tortora", "Praia a Mare", "San Nicola Arcella", "Santa Maria del Cedro",
  "Diamante", "Rocca Imperiale", "Roseto Capo Spulico", "Trebisacce",
  "Villapiana", "Corigliano Rossano", "Cariati", "Cirò Marina",
  "Melissa", "Isola di Capo Rizzuto", "Cropani", "Sellia Marina",
  "Catanzaro", "Soverato", "Falerna", "Locri", "Amendolara",
  "Montegiordano", "Parghelia", "Tropea", "Caulonia",
  "Roccella Jonica", "Siderno",
]

const faq = [
  {
    q: "Cosa significa che la mia spiaggia è Bandiera Blu?",
    a: "La Bandiera Blu è assegnata annualmente dalla Foundation for Environmental Education (FEE) ai Comuni che rispettano criteri rigorosi su qualità delle acque di balneazione, gestione ambientale, raccolta differenziata, servizi turistici e sicurezza in spiaggia. Il Comune di Isola di Capo Rizzuto è stato confermato Bandiera Blu 2026.",
  },
  {
    q: "Villa Olimpia è ufficialmente Bandiera Blu?",
    a: "No. La Bandiera Blu è assegnata ai Comuni e alle spiagge, non alle singole strutture ricettive. Villa Olimpia si trova all'interno del Comune di Isola di Capo Rizzuto (premiato Bandiera Blu 2026), in località Capo Piccolo, a 100 metri dalla Spiaggia dei Gigli — una delle spiagge dell'Area Marina Protetta.",
  },
  {
    q: "Quali sono le spiagge raggiungibili da Villa Olimpia?",
    a: "Spiaggia dei Gigli (100 m a piedi), Spiaggia di Capo Piccolo (5 min in auto), Spiagge Rosse dell'AMP (10 min), Spiaggia di Capo Rizzuto (12 min) e Spiaggia di Le Castella con la Fortezza Aragonese (20 min). Tutte all'interno o nelle immediate vicinanze dell'Area Marina Protetta.",
  },
  {
    q: "Quando conviene prenotare per la stagione 2026?",
    a: "Dopo l'annuncio FEE le ricerche per soggiorni in zone Bandiera Blu aumentano significativamente. Per i 9 appartamenti con piscina di Villa Olimpia, i periodi giugno e settembre 2026 hanno ancora disponibilità interessanti — luglio e agosto si esauriscono velocemente. Contattaci direttamente per disponibilità reale e miglior prezzo.",
  },
]

export default function BandieraBlu2026Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062a44] via-[#0a3d62] to-[#0e5a8a] py-20 text-white">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <div className="flex justify-center lg:justify-start">
              <BandieraBluBadge variant="full" size={220} />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f4d27a]">
                Riconoscimento FEE Italia — 14 maggio 2026
              </p>
              <h1 className="font-playfair mt-3 text-3xl font-bold leading-tight sm:text-5xl">
                Bandiera Blu 2026 a Isola di Capo Rizzuto
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Villa Olimpia si trova a Capo Piccolo, frazione del Comune premiato, a soli 100 metri dalla Spiaggia dei Gigli — una delle spiagge dell&apos;Area Marina Protetta di Capo Rizzuto. Calabria 2° in Italia con 27 spiagge Bandiera Blu nel 2026.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4 lg:items-center">
                <Link
                  href="/contatti?source=bandiera_blu_landing#prenota"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#f7c53b] px-7 py-3.5 font-bold text-slate-900 shadow-xl transition hover:brightness-105"
                >
                  Verifica disponibilità
                </Link>
                <Link
                  href="/appartamenti"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Scopri i 9 appartamenti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché qui */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-2xl font-bold text-slate-900 sm:text-3xl">
          Perché soggiornare a Villa Olimpia in zona Bandiera Blu
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Villa Olimpia è un complesso di 9 appartamenti indipendenti con piscina condominiale, immerso in un giardino mediterraneo di circa 3.000 mq a Capo Piccolo, all&apos;interno del Comune di Isola di Capo Rizzuto. Da casa raggiungi la Spiaggia dei Gigli a piedi in pochi minuti, una delle spiagge più suggestive dell&apos;Area Marina Protetta — sabbia dorata, dune con gigli selvatici, mare cristallino. Il riconoscimento Bandiera Blu 2026 certifica qualità delle acque, gestione ambientale, servizi turistici e sicurezza in spiaggia per l&apos;intero Comune.
        </p>
      </section>

      {/* Spiagge raggiungibili */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl font-bold text-slate-900 sm:text-3xl">
            Spiagge raggiungibili da Villa Olimpia
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Spiaggia dei Gigli", distance: "100 m a piedi", note: "La nostra spiaggia, all'interno dell'Area Marina Protetta. Sabbia dorata, dune con gigli selvatici, mare piatto." },
              { name: "Spiaggia di Capo Piccolo", distance: "5 min in auto · 1,5 km", note: "Baia immersa nella macchia mediterranea. Fuori stagione si avvistano tartarughe marine." },
              { name: "Spiagge Rosse — AMP", distance: "10 min in auto · ~5 km", note: "Sabbia rosso cannella e fondali trasparenti. Una delle spiagge più fotografate dell'AMP." },
              { name: "Spiaggia di Capo Rizzuto", distance: "12 min in auto · ~8 km", note: "Spiaggia principale del borgo di Capo Rizzuto, sabbia bianca e acqua turchese." },
              { name: "Spiaggia di Le Castella", distance: "20 min in auto · ~15 km", note: "Sabbia ferrosa e vista sulla Fortezza Aragonese del XV secolo." },
              { name: "Spiagge di Sovereto/Le Cannelle", distance: "8 min in auto · ~4 km", note: "Calette intime e dune di macchia mediterranea." },
            ].map((b) => (
              <li key={b.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-lg font-semibold text-slate-900">{b.name}</p>
                <p className="mt-1 text-sm font-medium text-[#0a3d62]">{b.distance}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lista 27 comuni */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-2xl font-bold text-slate-900 sm:text-3xl">
          Tutti i 27 Comuni calabresi Bandiera Blu 2026
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          La Calabria sale al 2° posto in Italia, a pari merito con la Puglia, dietro la sola Liguria.
        </p>
        <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {calabrianBlueFlagMunicipalities.map((m) => (
            <li key={m} className="flex items-center gap-2">
              <span className="text-[#0a3d62]" aria-hidden>★</span>
              <span className={m === "Isola di Capo Rizzuto" ? "font-bold text-[#0a3d62]" : "text-slate-700"}>
                {m}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl font-bold text-slate-900 sm:text-3xl">
            Domande frequenti
          </h2>
          <div className="mt-8 space-y-4">
            {faq.map((qa, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  <span className="mr-2 text-[#0a3d62]">+</span>
                  {qa.q}
                </summary>
                <p className="mt-3 leading-relaxed text-slate-700">{qa.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-[#062a44] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl font-bold sm:text-3xl">
            Prenota un soggiorno in zona Bandiera Blu 2026
          </h2>
          <p className="mt-3 text-white/75">
            Contattaci direttamente per disponibilità reale, prezzo finale e suggerimenti su quale dei 9 appartamenti scegliere per il tuo viaggio.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contatti?source=bandiera_blu_cta_finale#prenota"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#f7c53b] px-7 py-3.5 font-bold text-slate-900 shadow-xl"
            >
              Verifica disponibilità
            </Link>
            <a
              href="https://wa.me/393335773390?text=Richiesta%20disponibilita%20Villa%20Olimpia%20Bandiera%20Blu%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white"
            >
              Scrivici su WhatsApp
            </a>
          </div>
          <p className="mt-8 text-xs text-white/55">
            Fonte: FEE Italia · Bandiere Blu 2026, conferenza stampa del 14 maggio 2026.
          </p>
        </div>
      </section>
    </>
  )
}
