# CLAUDE.md — Villa Olimpia (sito pubblico)

Memoria di progetto per Claude Code. Leggila per intero a ogni avvio di sessione.
Se un'informazione qui contrasta con un altro file `.md` della repo, **vince questo file**.

---

## 1. Workspace canonico

| Cosa | Valore |
|---|---|
| Working copy autorizzata | `~/Projects/villa-olimpia-luxury-vacation` |
| Remote | `https://github.com/bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation` |
| Branch di produzione | `main` (protetto: nessun push diretto) |
| Dominio canonico | `https://villaolimpiacaporizzuto.com` |
| Hosting | Vercel — deploy automatico al merge su `main` |
| Email ufficiale | `villaolimpiacaporizzuto@gmail.com` (mai `info@villaolimpia.it`) |

**Copia obsoleta da NON usare:** `~/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean`
È ferma a `749cab5` (19 giugno 2026), 4 commit dietro `origin/main`. `WORKSPACE_CANONICO.md`
la indica ancora come canonica: **quel file è sbagliato e va corretto, non seguito.**

Verifica obbligatoria a inizio sessione:

```bash
pwd && git remote -v && git rev-parse --short HEAD && git status -sb
```

Se `pwd` non è la working copy autorizzata: **fermati e segnalalo. Non modificare nulla.**

---

## 2. Stack reale

- Next.js **16** (App Router) + React 18 + TypeScript
- `next-intl` per le traduzioni — **non c'è `middleware.ts`**: nessuna negoziazione automatica di lingua, è una scelta voluta
- Tailwind + Radix UI + framer-motion + GSAP
- `@vercel/kv` per lo storage persistente (cache iCal, lead, booking board)
- Node 22, npm 10

Attenzione: diversi `.md` in repo dicono "Next.js 15". È **16**. Non fidarti dei doc, fidati di `package.json`.

---

## 3. Architettura i18n (non romperla)

Fonte unica: `lib/i18n-config.ts`.

- Italiano alla **radice**: `app/prenota`, `app/contatti`, `app/settembre-capo-rizzuto`…
- Altre lingue sotto prefisso: `app/[locale]/prenota` → `/en/prenota`, `/no/prenota`…
- Locali: `it` (default), `en`, `de`, `fr`, `nl`, `no`, `sv`
- Copertura **selettiva**: `CORE_TRANSLATED_ROUTES` (full EN) vs `PARTIAL_ROUTES_FOR_DE_FR`
- hreflang generato da `buildHreflangLanguages()` in `lib/metadata.ts`
- Il sitemap (`app/sitemap.ts`) filtra con `localeHasRoute()`

Una rotta esistente sia in `app/x` sia in `app/[locale]/x` **non è un duplicato**: è il pattern corretto.
Non "deduplicare" mai queste coppie.

Aggiungere una lingua a una rotta = aggiornare `lib/i18n-config.ts` + creare la pagina + verificare sitemap e hreflang. Mai solo uno dei tre.

---

## 4. Comandi

```bash
npm run dev                 # dev server
npm run build               # build produzione
npm run quality:quick       # repo hygiene + SEO + appartamenti + copy + trust (veloce, offline)
npm run quality:gate        # quality:quick + analytics + build — GATE OBBLIGATORIO PRE-MERGE
npm run verify:live-seo     # controlla il dominio pubblico (serve rete)
npm run verify:analytics    # GA4 / tag
npm run verify:lead-email   # consegna email dei lead
npm run verify:contact-channels
npm run ops:daily           # quality:quick + health-check + verify:live-seo
npm run leads:report        # report lead
```

Stato al 2026-09-02: `quality:quick` passa su tutti e 5 i controlli. Se fallisce, l'hai rotto tu.

---

## 5. Verità di business (non inventare mai)

Villa Olimpia, Capo Piccolo — Isola di Capo Rizzuto. Gestita come **complesso di case private** (CIN/CIR), non struttura ricettiva. Brand ViviCalabria.

**9 lodge** — dati da fiche ufficiali:

| Lodge | Piano | m² | Camere | Bagni |
|---|---|---|---|---|
| Frangipane | PT | 45 | 2 | 1 |
| Fiordaliso | PT | 50 | 1 | 1 |
| Orchidea | PT | 48 | 1 | **2** |
| Tulipano | PT | 47 | 1 | 1 |
| Giglio | PT | 46 | 2 | 1 |
| Lavanda | PT | 45 | 1 | 1 |
| Geranio | 1° | 65 | 2 | **2** |
| Gardenia | 1° | 52 | 1 | 1 |
| Azalea | 1° | 50 | 1 | 1 |

Totale: 448 m², 12 camere, 11 bagni.

Punti veri e usabili in copy:
- Piscina privata, giardino ~3.000 m²
- Spiaggia dei Gigli a ~70–100 m
- Geranio: attico, soluzione premium
- Orchidea: 1 camera + 2 bagni (raro, è un punto di forza)
- Gardenia: doppio balcone · Azalea: terrazzo semipanoramico
- Biancheria fornita su tutti e 9 i lodge

**Falsi da non scrivere mai:**
- Orchidea **non** ha terrazza panoramica; ha TV LED, **non** Smart TV
- Nessun `aggregateRating` o recensione senza fonte reale verificabile (già rimossi una volta dal JSON-LD: non reintrodurli)
- Nessuna "disponibilità limitata / ultimi posti" non verificata contro dati reali (`check:trust` esiste per questo)

**Posti letto: dato in conflitto.** La tabella pubblicata dice 42 totali, la planimetria a mano ne dà 43 (Fiordaliso 6 vs 4, Giglio 5 vs 6). Finché Francesco non conferma: **non toccare i numeri di posti letto in nessun file.**

**Prezzi: non stanno in questo repo.** Questa repository è pubblica, quindi tariffe, IBAN e dati
fiscali non vanno scritti in nessun file. Se una modifica richiede un prezzo, chiedilo a Francesco
e usalo solo nel file di destinazione se quel file non finisce su GitHub.
**I prezzi non si modificano mai in autonomia.**

---

## 6. Obiettivo commerciale corrente (settembre 2026)

Riempire i vuoti di settembre. Il divieto di balneazione a Capo Piccolo (luglio–agosto 2026) **è stato revocato**: il mare è balneabile e Spiaggia dei Gigli è di nuovo spendibile in copy.

Canali: Airbnb + Vrbo attivi, prenotazione diretta è il canale a margine più alto. Mercato estero prioritario: **Nord Europa** (volo diretto Oslo–Lamezia il lunedì, maggio–ottobre) → locali `no` e `sv` valgono più di `de`/`fr`.

Ogni modifica al sito si giudica su una sola domanda: **aumenta le richieste dirette?**

---

## 7. Tono

Professionale ma caldo lato ospite. Diretto lato operativo. Mai freddo, mai robotico, mai gonfio di aggettivi.
Zero claim non verificabili. Se manca un dato: **chiedi, non inventare.**

---

## 8. Guardrail

**Mai fare senza istruzione esplicita:**
- push diretto su `main`
- modificare prezzi, posti letto, IBAN, dati fiscali, contatti
- toccare `lib/integrations/ical/parser.ts` e `app/api/public-request/inject/route.ts`
- committare `.env*`, chiavi, token, credenziali
- riscrivere in blocco file di dati reali (lead, booking, recensioni)
- refactor "di pulizia" non richiesti

**Sempre:**
- `npm run quality:gate` verde prima di aprire una PR
- un commit = una modifica logica, reversibile da sola
- lavorare su branch `claude/<slug>`
- se il working tree è sporco all'avvio: segnalalo prima, non ci committare sopra

---

## 9. Debito noto (stato 2026-09-02)

- **`node_modules` fuori sincrono**: `@vercel/analytics` è in `package.json` e nel lock ma non installato → `tsc` e `build` falliscono in locale. Fix: `npm install`. Produzione non a rischio (Vercel usa `npm ci`).
- **`SeasonalOfferPanel.tsx` non compila**: manca la chiave `settembre` nel dizionario interno (TS7053) + parametro `any` (TS7006)
- `gh` CLI non installato: per aprire le PR serve `brew install gh` oppure il link `compare/` di GitHub
- Working tree sporco: 8 immagini cancellate non committate + 2 `.md` untracked
- `components/seasonal/SeasonalOfferPanel.tsx` esiste ma **non è importato da nessuna parte** e non è tracciato
- Cron iCal in `vercel.json` gira 1 volta al giorno (`0 6 * * *`); Airbnb aggiorna il feed in 30–60 min
- `app/sitemap.ts` usa date `lastmod` hardcoded, la più recente è 2026-06-19
- `scripts/seo-google-recovery-autopilot.js` ha `/giugno-2026` hardcoded come landing prioritaria
- Pack git 151 MB, 271 immagini tracciate, due cartelle `backup_images_*` dentro git
- Oggetti garbage in `.git/objects/*/tmp_obj_*` → serve `git gc --prune=now`
- ~23 `.md` di audit alla radice, molti di aprile-giugno 2026, in parte contraddittori

Per il protocollo operativo completo vedi `SUPER_PROMPT_AUTOPILOT.md`.
