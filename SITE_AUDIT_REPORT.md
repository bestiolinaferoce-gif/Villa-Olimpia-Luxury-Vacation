# Audit sito Villa Olimpia — report tecnico

**Progetto:** Next.js 16 (App Router), deploy tipico Vercel  
**Dominio di riferimento:** `https://villaolimpiacaporizzuto.com`  
**Data audit:** 25 marzo 2026  
**Ambito:** codice sorgente nel repository, asset in `public/`, configurazione SEO/redirect, API route, dipendenze (segnalazione `npm audit`).  
**Non incluso in questa passata:** misurazioni runtime su URL di produzione (Lighthouse field data, Search Console, log server), test E2E browser, revisione legale dei testi.

---

## Executive summary

Il sito è **strutturalmente solido** per un prodotto marketing + lead generation: metadata centralizzati (`lib/metadata.ts`), `robots.ts` e `sitemap.ts` curati, redirect 301 per URL legacy inglesi/numerici, schema.org su homepage, FAQ, blog e pagine strutturali. **ESLint** risulta pulito (`npm run lint`). **Build** di produzione completata con successo in sede di audit.

I rischi principali da gestire con priorità sono:

1. **Coerenza immagini:** cartella `public/images/villa/hero/` **assente** nel repo mentre il codice e la gallery la referenziano; alcune immagini ristoranti in `lib/restaurants-data.ts` puntano a file **inesistenti** in `public/images/ristoranti/`.
2. **Dati strutturati:** in `lib/seo-territory.ts` gli URL immagine nel JSON-LD usano **naming/path diversi** da quelli usati nei componenti (trattini vs underscore, path `/hero/`).
3. **Mappe:** embed “generico” con parametri **placeholder** in `components/interactive-restaurant-map.tsx` (componente non risulta usato nella pagina enogastronomia attuale, ma resta codice esposto a riuso); mappa premium dipende da `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
4. **Rate limiting API:** implementazione in-memory su `/api/lead` — su **ambienti serverless multi-istanza** l’efficacia è limitata.
5. **Dipendenze:** `npm audit` segnala vulnerabilità in catene transitive (aggiornamenti da pianificare, non necessariamente bloccanti per il frontend pubblico).

---

## Metodologia

| Area | Metodo |
|------|--------|
| Architettura route | Inventario `app/**/page.tsx` vs `app/sitemap.ts` e `next.config.js` redirects |
| SEO on-page | Lettura `lib/metadata.ts`, `defaultMetadata`, pagine chiave, presenza canonical/hreflang |
| Asset | Verifica esistenza file sotto `public/` per path citati in codice (campione + path critici) |
| Sicurezza API | Lettura route `app/api/**` (auth token, validazione Zod) |
| Qualità | `npm run lint`, `npm run build`, `npm audit` |
| Accessibilità | Revisione statica (nessun audit automatico axe/Lighthouse in questa sessione) |

---

## Valutazione per area

### 1. SEO tecnico

**Punti di forza**

- `Metadata` con Open Graph e Twitter Card; dimensioni OG per immagine default (`1200×630`).
- `robots.txt` generato: disallow su `/api/`, strumenti interni (`/utm/`, `/verifica-analytics/`, `/preview-mappa/`).
- Sitemap con priorità e `lastModified` ragionevoli; blog e appartamenti attivi inclusi.
- Redirect 301 da slug inglesi e ID numerici verso slug italiani (ottimo per continuità SEO).
- Presenza diffusa di **JSON-LD** (Organization/LodgingBusiness, articoli blog, FAQ, ecc.).

**Gap / rischi**

| ID | Gravità | Descrizione |
|----|---------|-------------|
| SEO-1 | ~~Alta~~ Risolto (2026-03-25) | Aggiunti file in `public/images/villa/hero/` (copie da gallery) e allineato JSON-LD in `lib/seo-territory.ts` a `facciata_esterna_villa_olimpia_notte.jpg`. |
| SEO-2 | ~~Media~~ Risolto (2026-03-25) | `app/privacy-policy` rimossa; redirect 301 `/privacy-policy` → `/privacy`; link interni aggiornati in cookie-policy e termini. |
| SEO-3 | Media | Localizzazione: `app/[locale]/layout.tsx` espone hreflang per `it/en/de/fr/nl`, ma **`sitemap.ts` non elenca** le URL localizzate (`/en`, `/de`, …). Se le lingue sono indicizzabili, il sitemap andrebbe esteso o le versioni non pronte andrebbero `noindex` fino a copy QA. |
| SEO-4 | Bassa | `defaultMetadata` in `lib/metadata.ts` menziona stagionalità (es. Giugno/Luglio 2026): va **aggiornato** a fine stagione per evitare snippet obsoleti. |

### 2. Media e performance percepita

**Stato `public/`**

- Presente un corpus ampio di immagini (`public/images/villa/gallery`, `appartamenti`, `territorio`, ecc.).
- **Mancano** nel repository:
  - intera cartella **`public/images/villa/hero/`** referenziata da `lib/image-loader.ts`, `components/home-gallery.tsx`, `app/appartamenti/page.tsx`, preload in layout;
  - **`/images/ristoranti/da-roberto.jpg`**, **`il-gabbiano.jpg`**, **`da-ercole.jpg`** (esistono `micomare.jpg` e `ruris-logo.jpg`).

**Effetti**

- Hero e sezioni che usano path `/images/villa/hero/...` → **404** finché i file non vengono aggiunti o i path non sono reindirizzati a file esistenti (es. gallery o amenities).
- Griglia ristoranti: fallback o immagini rotte per le tre voci senza file.

**Performance (codice)**

- Lazy load di sezioni pesanti sulla home (`dynamic` con `ssr: false` per gallery e “come raggiungerci”) — buona pratica.
- `next.config.js`: `compress`, `optimizePackageImports` per `lucide-react` / `framer-motion`, formati immagine AVIF/WebP.
- **Non verificato qui:** LCP reale, bundle size per rotta, TTFB su Vercel.

### 3. Funzionalità mappe

| Componente | Nota |
|------------|------|
| `components/restaurants-map-premium.tsx` | Richiede `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`; senza chiave mostra placeholder UX chiaro. |
| `components/interactive-restaurant-map.tsx` | URL embed con frammento **`4v1234567890123`** tipico di placeholder — da sostituire con embed ufficiale (My Maps o Maps Embed API). |
| `app/enogastronomia/page.tsx` | Sezione mappa premium è **commentata**; la pagina si appoggia alla grid testuale/card. |

### 4. API e sicurezza applicativa

**Osservazioni**

- `/api/public-request/inject`: protetto con header `x-request-token` vs `PUBLIC_REQUEST_TOKEN` — appropriato per endpoint sensibile.
- `/api/lead`: validazione **Zod**, limiti stringa, **rate limit** per IP in memoria (`Map`). Su Vercel ogni istanza ha memoria separata: un attaccante può distribuire richieste → **mitigazione debole** rispetto a Redis/Upstash o Vercel KV.
- Lead scritti su filesystem (`appendFile`) — su serverless persistent storage non è garantito allo stesso modo di un VPS; va confermato l’ambiente di deploy reale (es. solo invio email vs file locale).

**Header di sicurezza**

- Nessun blocco esplicito in `next.config.js` per `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options` a livello globale. Valutare `headers()` in Next o configurazione Vercel.

### 5. Internazionalizzazione e duplicati

- Due implementazioni home molto simili: `app/page.tsx` e `app/[locale]/page.tsx` (una con `useI18n`, l’altra con `next-intl`). Rischio di **drift** contenuti tra versioni; utile documentare quale è “source of truth”.
- Hreflang definiti nel layout localizzato; allineare policy di indicizzazione con il sitemap.

### 6. Accessibilità e UX (revisione statica)

- Uso diffuso di `next/image` con `alt` su molte immagini — positivo.
- Componenti UI Radix/shadcn — generalmente accessibili se usati come da linee guida.
- **Manca** in questa audit: scansione automatica (axe), verifica contrasti, focus order, lettori schermo su form prenotazione.

### 7. Dipendenze

- `npm audit` (marzo 2026) ha restituito **vulnerabilità** su pacchetti trasitivi (es. catene legate a tooling Vercel/eslint, `@isaacs/brace-expansion`, ecc.).  
- **Azione consigliata:** `npm audit fix` dove sicuro; per major upgrade (es. `eslint-config-next`, `vercel`) pianificare branch di test e CI.

---

## Matrice priorità (remediation)

| Priorità | ID | Azione |
|----------|-----|--------|
| P0 | Asset hero | Aggiungere file in `public/images/villa/hero/` **oppure** aggiornare tutti i riferimenti a path esistenti; allineare preload in `app/layout.tsx` / `app/[locale]/layout.tsx`. |
| P0 | SEO-1 | Allineare URL in JSON-LD (`seo-territory`, altri) ai file reali o aggiungere file con nomi attesi. |
| P1 | Ristoranti | Aggiungere JPG mancanti o puntare `image` a `micomare.jpg` / logo finché non si hanno foto. |
| P1 | SEO-2 | Risolvere duplicato privacy: una sola URL canonica + redirect 301 dall’altra. |
| P1 | Map embed | Sostituire URL placeholder in `interactive-restaurant-map.tsx` o rimuovere il componente se inutilizzato. |
| P2 | SEO-3 | Estendere sitemap per locale **o** `noindex` sulle lingue non pronte. |
| P2 | Rate limit | Spostare rate limiting su store condiviso (Edge middleware + KV, o Upstash). |
| P2 | Security headers | Definire policy minime su Vercel/Next. |
| P3 | Audit Lighthouse | Eseguire su `/`, `/appartamenti`, `/prenota`, `/enogastronomia` su produzione e registrare regressioni. |

---

## Inventario route (estratto)

**Pagine app principali (campione):** home, `appartamenti`, `appartamenti/[slug]`, `prenota`, landing stagionali, territorio, enogastronomia, blog (+ articoli), legali, contatti, recensioni, gallery, ecc.

**Redirect configurati (`next.config.js`):** `/apartments`, `/rooms`, `/camere`, `/home` → equivalenti italiani; `/termini` → `/termini-condizioni`; slug `apartment-N` e `/appartamenti/N` → slug nome; strumenti interni → `/` (302).

**Sitemap:** copre la maggior parte delle landing marketing; **non** include esplicitamente le URL `/it`, `/en`, … (vedi SEO-3).

---

## Chiusura

Questo documento è un **audit tecnico da repository**, utile per backlog prioritizzato. Per un audit “da agenzia” completo andrebbero aggiunti: **Lighthouse** (mobile + desktop) su URL live, **Google Search Console** (copertura, esperienza pagina), verifica **Analytics/consent mode**, e test manuale **form lead** end-to-end in produzione.

**Prossimo passo consigliato:** implementare le voci **P0** (hero + JSON-LD immagini), poi **P1** (privacy duplicate, ristoranti, embed mappa).

---

*Report generato nell’ambito dell’analisi del codice; aggiornare dopo ogni major release o migrazione asset.*
