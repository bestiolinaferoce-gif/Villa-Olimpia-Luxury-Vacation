/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TEMPLATE SEO — Pagina Appartamento
 *
 * Copia questo file in:
 *   src/app/appartamenti/[nome-appartamento]/page.tsx
 *
 * Sostituisci tutti i valori tra << >> con i dati reali dell'appartamento.
 * Poi aggiungi la voce corrispondente in src/app/sitemap.ts
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { Metadata } from "next";

// ── Dati specifici per questo appartamento ───────────────────────────────────
const APPARTAMENTO = {
  slug: "bilocale-vista-mare",          // << slug URL (deve coincidere con la cartella)
  nome: "Bilocale Vista Mare",           // << nome dell'appartamento
  descrizione:
    "Appartamento bilocale con terrazza panoramica vista mare a Villa Olimpia, " +
    "Caporizzuto. A 200 m dalla spiaggia, vicino alla Riserva Marina di Le Castella.",
  // 150-160 caratteri ↑ — controlla con: https://charactercounter.com/
};

const BASE_URL = "https://www.villaolimpiacaporizzuto.com";
const CANONICAL = `${BASE_URL}/appartamenti/${APPARTAMENTO.slug}`;

// ── Metadata SEO ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: APPARTAMENTO.nome, // Il template in layout.tsx aggiunge " | Villa Olimpia Caporizzuto"
  description: APPARTAMENTO.descrizione,
  alternates: {
    canonical: CANONICAL, // DEVE puntare esattamente all'URL di questa pagina
  },
  openGraph: {
    title: `${APPARTAMENTO.nome} | Villa Olimpia Caporizzuto`,
    description: APPARTAMENTO.descrizione,
    url: CANONICAL,
    type: "website",
    // images: [{ url: `${BASE_URL}/images/${APPARTAMENTO.slug}/cover.jpg`, width: 1200, height: 630 }],
  },
};
// ─────────────────────────────────────────────────────────────────────────────

export default function AppartamentoPage() {
  return (
    <main>
      <h1>{APPARTAMENTO.nome}</h1>
      {/*
        ATTENZIONE — Contenuto thin:
        Assicurati che questa pagina contenga ALMENO 300 parole di contenuto
        descrittivo unico. Pagine con meno testo vengono spesso ignorate da Google
        (GSC: "Pagina scansionata ma non indicizzata").

        Includi:
        - Descrizione dettagliata dell'appartamento (dimensioni, comfort, vista)
        - Dotazioni (cucina, bagno, aria condizionata, WiFi, posto auto…)
        - Posti letto e numero ospiti massimo
        - Distanze da spiaggia, centro, Le Castella, Crotone
        - Regolamento / check-in / check-out
        - Galleria foto (alt text descrittivi!)
        - Call-to-action prenota / contatto
      */}
    </main>
  );
}
