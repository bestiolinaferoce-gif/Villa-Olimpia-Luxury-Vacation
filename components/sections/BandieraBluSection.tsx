"use client"

import { usePathname } from "next/navigation"
import { BandieraBluBadge } from "@/components/BandieraBluBadge"

/**
 * Sezione homepage Villa Olimpia per Bandiera Blu 2026.
 * Dato pubblico verificabile (annuncio FEE del 14 maggio 2026).
 * Villa Olimpia si trova a Capo Piccolo (frazione di Isola di Capo Rizzuto, Comune premiato),
 * a 100 metri dalla Spiaggia dei Gigli.
 */

type Copy = {
  eyebrow: string
  title: string
  intro: string
  statLabel1: string
  statLabel2: string
  statLabel3: string
  statVal1: string
  statVal2: string
  statVal3: string
  beachesTitle: string
  beach1: { name: string; distance: string }
  beach2: { name: string; distance: string }
  beach3: { name: string; distance: string }
  beach4: { name: string; distance: string }
  beach5: { name: string; distance: string }
  ctaPrimary: string
  ctaSecondary: string
  source: string
  landingPath: string
  contactPath: string
}

const COPY: Record<string, Copy> = {
  it: {
    eyebrow: "Riconoscimento FEE — 14 maggio 2026",
    title: "Soggiorni in zona Bandiera Blu 2026",
    intro:
      "Isola di Capo Rizzuto è stata confermata Bandiera Blu 2026 dalla Foundation for Environmental Education. La Calabria sale al 2° posto in Italia con 27 spiagge premiate, dietro la sola Liguria. Villa Olimpia si trova a Capo Piccolo, a 100 metri dalla Spiaggia dei Gigli, una delle spiagge dell'Area Marina Protetta nel Comune premiato.",
    statLabel1: "Spiagge Bandiera Blu in Calabria",
    statLabel2: "Posto nazionale (con la Puglia)",
    statLabel3: "Nuove bandiere calabresi 2026",
    statVal1: "27",
    statVal2: "2°",
    statVal3: "+4",
    beachesTitle: "Le spiagge raggiungibili da Villa Olimpia",
    beach1: { name: "Spiaggia dei Gigli", distance: "100 m a piedi" },
    beach2: { name: "Spiaggia di Capo Piccolo", distance: "5 min in auto" },
    beach3: { name: "Spiagge Rosse — AMP", distance: "10 min in auto" },
    beach4: { name: "Spiaggia di Capo Rizzuto", distance: "12 min in auto" },
    beach5: { name: "Spiaggia di Le Castella", distance: "20 min in auto" },
    ctaPrimary: "Verifica disponibilità",
    ctaSecondary: "Scopri gli appartamenti",
    source: "Fonte: FEE Italia · Bandiere Blu 2026, conferenza stampa 14 maggio 2026.",
    landingPath: "/bandiera-blu-2026-isola-capo-rizzuto",
    contactPath: "/contatti#prenota",
  },
  en: {
    eyebrow: "FEE recognition — 14 May 2026",
    title: "You'll stay in a Blue Flag 2026 area",
    intro:
      "Isola di Capo Rizzuto has been confirmed as a Blue Flag 2026 destination by the Foundation for Environmental Education. Calabria climbs to 2nd place in Italy with 27 awarded beaches, behind only Liguria. Villa Olimpia is in Capo Piccolo, 100 m from Spiaggia dei Gigli, one of the beaches inside the awarded Marine Protected Area.",
    statLabel1: "Blue Flag beaches in Calabria",
    statLabel2: "National ranking (tied with Apulia)",
    statLabel3: "New Calabrian Blue Flags 2026",
    statVal1: "27",
    statVal2: "2nd",
    statVal3: "+4",
    beachesTitle: "Beaches reachable from Villa Olimpia",
    beach1: { name: "Spiaggia dei Gigli", distance: "100 m on foot" },
    beach2: { name: "Capo Piccolo beach", distance: "5 min by car" },
    beach3: { name: "Spiagge Rosse — MPA", distance: "10 min by car" },
    beach4: { name: "Capo Rizzuto beach", distance: "12 min by car" },
    beach5: { name: "Le Castella beach", distance: "20 min by car" },
    ctaPrimary: "Check availability",
    ctaSecondary: "Discover the apartments",
    source: "Source: FEE Italy · Blue Flags 2026, press conference 14 May 2026.",
    landingPath: "/en/blue-flag-2026-isola-capo-rizzuto",
    contactPath: "/en/contact#prenota",
  },
  de: {
    eyebrow: "FEE-Auszeichnung — 14. Mai 2026",
    title: "Sie übernachten in einer Blaue Flagge 2026 Zone",
    intro:
      "Isola di Capo Rizzuto wurde von der Foundation for Environmental Education erneut mit der Blauen Flagge 2026 ausgezeichnet. Kalabrien steigt mit 27 prämierten Stränden auf Platz 2 in Italien auf, hinter Ligurien. Villa Olimpia liegt in Capo Piccolo, 100 m vom Strand der Lilien, einem der Strände im prämierten Meeresschutzgebiet.",
    statLabel1: "Blaue Flagge Strände in Kalabrien",
    statLabel2: "Nationaler Rang (mit Apulien)",
    statLabel3: "Neue kalabrische Auszeichnungen 2026",
    statVal1: "27",
    statVal2: "2.",
    statVal3: "+4",
    beachesTitle: "Erreichbare Strände von Villa Olimpia",
    beach1: { name: "Strand der Lilien", distance: "100 m zu Fuß" },
    beach2: { name: "Strand von Capo Piccolo", distance: "5 Min. mit dem Auto" },
    beach3: { name: "Spiagge Rosse — MPA", distance: "10 Min. mit dem Auto" },
    beach4: { name: "Strand von Capo Rizzuto", distance: "12 Min. mit dem Auto" },
    beach5: { name: "Strand von Le Castella", distance: "20 Min. mit dem Auto" },
    ctaPrimary: "Verfügbarkeit prüfen",
    ctaSecondary: "Apartments entdecken",
    source: "Quelle: FEE Italien · Blaue Flagge 2026, Pressekonferenz 14. Mai 2026.",
    landingPath: "/de/blue-flag-2026-isola-capo-rizzuto",
    contactPath: "/de/contatti#prenota",
  },
  fr: {
    eyebrow: "Reconnaissance FEE — 14 mai 2026",
    title: "Vous séjournez en zone Pavillon Bleu 2026",
    intro:
      "Isola di Capo Rizzuto est confirmée Pavillon Bleu 2026 par la Foundation for Environmental Education. La Calabre passe en 2e position en Italie avec 27 plages primées, derrière la Ligurie. Villa Olimpia se trouve à Capo Piccolo, à 100 m de la Spiaggia dei Gigli, une des plages de l'Aire Marine Protégée dans la commune primée.",
    statLabel1: "Plages Pavillon Bleu en Calabre",
    statLabel2: "Classement national (avec les Pouilles)",
    statLabel3: "Nouveaux Pavillons Bleus calabrais 2026",
    statVal1: "27",
    statVal2: "2e",
    statVal3: "+4",
    beachesTitle: "Plages accessibles depuis Villa Olimpia",
    beach1: { name: "Spiaggia dei Gigli", distance: "100 m à pied" },
    beach2: { name: "Plage de Capo Piccolo", distance: "5 min en voiture" },
    beach3: { name: "Spiagge Rosse — AMP", distance: "10 min en voiture" },
    beach4: { name: "Plage de Capo Rizzuto", distance: "12 min en voiture" },
    beach5: { name: "Plage de Le Castella", distance: "20 min en voiture" },
    ctaPrimary: "Vérifier la disponibilité",
    ctaSecondary: "Découvrir les appartements",
    source: "Source: FEE Italie · Pavillons Bleus 2026, conférence de presse 14 mai 2026.",
    landingPath: "/fr/blue-flag-2026-isola-capo-rizzuto",
    contactPath: "/fr/contatti#prenota",
  },
  nl: {
    eyebrow: "FEE-erkenning — 14 mei 2026",
    title: "U verblijft in een Blauwe Vlag 2026 zone",
    intro:
      "Isola di Capo Rizzuto is door de Foundation for Environmental Education bevestigd als Blauwe Vlag 2026 bestemming. Calabrië stijgt naar de 2e plaats in Italië met 27 bekroonde stranden, alleen achter Ligurië. Villa Olimpia ligt in Capo Piccolo, op 100 m van Spiaggia dei Gigli, een van de stranden van het bekroonde Marine Beschermd Gebied.",
    statLabel1: "Blauwe Vlag stranden in Calabrië",
    statLabel2: "Nationale ranglijst (met Apulië)",
    statLabel3: "Nieuwe Calabrische Blauwe Vlaggen 2026",
    statVal1: "27",
    statVal2: "2e",
    statVal3: "+4",
    beachesTitle: "Stranden bereikbaar vanaf Villa Olimpia",
    beach1: { name: "Spiaggia dei Gigli", distance: "100 m te voet" },
    beach2: { name: "Strand van Capo Piccolo", distance: "5 min met de auto" },
    beach3: { name: "Spiagge Rosse — MPA", distance: "10 min met de auto" },
    beach4: { name: "Strand van Capo Rizzuto", distance: "12 min met de auto" },
    beach5: { name: "Strand van Le Castella", distance: "20 min met de auto" },
    ctaPrimary: "Beschikbaarheid controleren",
    ctaSecondary: "Ontdek de appartementen",
    source: "Bron: FEE Italië · Blauwe Vlaggen 2026, persconferentie 14 mei 2026.",
    landingPath: "/nl/blue-flag-2026-isola-capo-rizzuto",
    contactPath: "/nl/contatti#prenota",
  },
  no: {
    eyebrow: "FEE-anerkjennelse — 14. mai 2026",
    title: "Du bor i en Blått Flagg 2026 sone",
    intro:
      "Isola di Capo Rizzuto er bekreftet som Blått Flagg 2026 destinasjon av Foundation for Environmental Education. Calabria klatrer til 2. plass i Italia med 27 premierte strender, kun bak Liguria. Villa Olimpia ligger i Capo Piccolo, 100 m fra Liljestranden, en av strendene i det premierte marine verneområdet.",
    statLabel1: "Blått Flagg strender i Calabria",
    statLabel2: "Nasjonal rangering (med Apulia)",
    statLabel3: "Nye kalabriske Blå Flagg 2026",
    statVal1: "27",
    statVal2: "2.",
    statVal3: "+4",
    beachesTitle: "Strender du kan nå fra Villa Olimpia",
    beach1: { name: "Spiaggia dei Gigli", distance: "100 m til fots" },
    beach2: { name: "Capo Piccolo strand", distance: "5 min med bil" },
    beach3: { name: "Spiagge Rosse — MPA", distance: "10 min med bil" },
    beach4: { name: "Capo Rizzuto strand", distance: "12 min med bil" },
    beach5: { name: "Le Castella strand", distance: "20 min med bil" },
    ctaPrimary: "Sjekk tilgjengelighet",
    ctaSecondary: "Oppdag leilighetene",
    source: "Kilde: FEE Italia · Blått Flagg 2026, pressekonferanse 14. mai 2026.",
    landingPath: "/no/blue-flag-2026-isola-capo-rizzuto",
    contactPath: "/no/contatti#prenota",
  },
  sv: {
    eyebrow: "FEE-erkännande — 14 maj 2026",
    title: "Du bor i ett Blå Flagg 2026 område",
    intro:
      "Isola di Capo Rizzuto har bekräftats som Blå Flagg 2026 destination av Foundation for Environmental Education. Kalabrien klättrar till 2:a plats i Italien med 27 prisbelönta stränder, bara bakom Ligurien. Villa Olimpia ligger i Capo Piccolo, 100 m från Liljestranden, en av stränderna i det prisbelönta marina skyddade området.",
    statLabel1: "Blå Flagg stränder i Kalabrien",
    statLabel2: "Nationell rankning (med Apulien)",
    statLabel3: "Nya kalabriska Blå Flagg 2026",
    statVal1: "27",
    statVal2: "2:a",
    statVal3: "+4",
    beachesTitle: "Stränder nåbara från Villa Olimpia",
    beach1: { name: "Spiaggia dei Gigli", distance: "100 m till fots" },
    beach2: { name: "Capo Piccolo strand", distance: "5 min med bil" },
    beach3: { name: "Spiagge Rosse — MPA", distance: "10 min med bil" },
    beach4: { name: "Capo Rizzuto strand", distance: "12 min med bil" },
    beach5: { name: "Le Castella strand", distance: "20 min med bil" },
    ctaPrimary: "Kontrollera tillgänglighet",
    ctaSecondary: "Upptäck lägenheterna",
    source: "Källa: FEE Italien · Blå Flagg 2026, presskonferens 14 maj 2026.",
    landingPath: "/sv/blue-flag-2026-isola-capo-rizzuto",
    contactPath: "/sv/contatti#prenota",
  },
}

function detectLocale(pathname: string): string {
  const seg = pathname.split("/")[1] ?? ""
  if (["en", "de", "fr", "nl", "no", "sv"].includes(seg)) return seg
  return "it"
}

export function BandieraBluSection() {
  const pathname = usePathname() || "/"
  const locale = detectLocale(pathname)
  const c = COPY[locale] ?? COPY.it
  const beaches = [c.beach1, c.beach2, c.beach3, c.beach4, c.beach5]

  return (
    <section
      aria-labelledby="bandiera-blu-2026-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#062a44] via-[#0a3d62] to-[#0e5a8a] py-16 text-white sm:py-20"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path d="M0,400 Q360,300 720,400 T1440,400 L1440,600 L0,600 Z" fill="#f4d27a" />
        <path d="M0,460 Q360,380 720,460 T1440,460 L1440,600 L0,600 Z" fill="#f4d27a" opacity="0.5" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <BandieraBluBadge variant="full" size={220} />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f4d27a]">
              {c.eyebrow}
            </p>
            <h2
              id="bandiera-blu-2026-title"
              className="font-playfair mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl"
            >
              {c.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {c.intro}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center backdrop-blur-sm sm:px-4">
                <dt className="text-[10px] font-medium uppercase tracking-wide text-white/70 sm:text-xs">
                  {c.statLabel1}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-[#f4d27a] sm:text-3xl">{c.statVal1}</dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center backdrop-blur-sm sm:px-4">
                <dt className="text-[10px] font-medium uppercase tracking-wide text-white/70 sm:text-xs">
                  {c.statLabel2}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-[#f4d27a] sm:text-3xl">{c.statVal2}</dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center backdrop-blur-sm sm:px-4">
                <dt className="text-[10px] font-medium uppercase tracking-wide text-white/70 sm:text-xs">
                  {c.statLabel3}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-[#f4d27a] sm:text-3xl">{c.statVal3}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-white sm:text-xl">
            {c.beachesTitle}
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {beaches.map((b, idx) => (
              <li
                key={idx}
                className="group rounded-xl border border-white/15 bg-white/5 p-4 text-center transition-colors hover:border-[#f4d27a]/40 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white">{b.name}</p>
                <p className="mt-1 text-xs text-[#f4d27a]">{b.distance}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={c.contactPath + "?source=bandiera_blu_section"}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#f7c53b] px-7 py-3.5 text-base font-bold text-slate-900 shadow-xl transition hover:brightness-105"
          >
            {c.ctaPrimary}
          </a>
          <a
            href={c.landingPath}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            {c.ctaSecondary}
          </a>
        </div>

        <p className="mt-8 text-center text-[11px] text-white/55">{c.source}</p>
      </div>
    </section>
  )
}

export default BandieraBluSection
