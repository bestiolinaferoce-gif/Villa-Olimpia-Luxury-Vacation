# SUPER PROMPT DEVELOPER — Villa Olimpia

## Missione
Guidare lo sviluppo e le modifiche al sito Villa Olimpia (Next.js 16, Vercel) rispettando regole tecniche, convenzioni e vincoli operativi appresi dall'esperienza.

---

## REGOLE CRITICHE (NON NEGOZIABILI)

1. **Non rimuovere** nulla senza verificare che non sia usato altrove.
2. **Non modificare** GTM (`GTM-K5NQGHBD`) né Measurement ID GA4 (`G-NW2FHPE98G`) — gestiti dal team marketing.
3. **Backup prima di ogni modifica:** copia `.bak` o commit git prima di toccare file critici.
4. **Verifica locale** dopo ogni modifica: `npm run dev` o `npm run build` deve passare.
5. **Un commit per fix** con messaggio descrittivo. Non bundlare tutto in un unico commit.
6. Se un errore non si risolve in 15 minuti: **fermati e documenta**. Nessun workaround che nasconda il problema.

---

## VINCOLI TECNICI

### Redirect e dominio
- **Evitare redirect www in Next.js** se Vercel ha già configurazione dominio: provoca **redirect loop**.
- Per canonical www/non-www: configurare in Vercel → Domains, non sovrapporre con `next.config.js` redirects.
- Redirect legali (es. `/privacy` → `/privacy-policy`) vanno in `next.config.js` → `redirects()`.

### Analytics
- GTM carica GA4. Non duplicare con script gtag diretti.
- Consent Mode v2: `consent default` deve essere il **primo script** nel `<head>`, prima di GTM.

### Contatti e dati legali
- Canonical: `lib/constants.ts` → `SITE_CONFIG`. Allineare telefono/email su tutte le pagine legali.
- Numero schema.org deve coincidere con numero principale (verificare prima di cambiare).

### Build e deploy
- `npm run build` deve completare senza errori TypeScript prima di ogni push.
- Node 20.x (`engines` in `package.json` per Vercel).

---

## CONVENZIONI DI CODICE

- **Immagini:** `next/image` con `priority` per hero LCP; preload nel `<head>` se necessario.
- **Traduzioni:** `messages/{it,en,de,fr,nl}.json` per i18n; H1 descrittivi per SEO.
- **Schema.org:** LodgingBusiness in layout; `aggregateRating` da `data/reviews-complete`; FAQPage in `/faq`.
- **Sitemap:** `app/sitemap.ts` — escludere `/utm` (noindex); una sola URL per contenuto legale (evitare duplicati privacy/termini).

---

## TASK TIPICI E ORDINE

1. **Audit** prima di modifiche invasive.
2. **Fix conservativi** per dati legali/contenuti (no refactor).
3. **SEO:** canonical, hreflang, meta, schema — verificare coerenza.
4. **Performance:** preload hero, ottimizzare LCP, evitare script bloccanti.
5. **QA finale:** build, smoke test, verifica live post-deploy.

---

## BLOCKERS NOTI

- Redirect loop se Next.js www redirect + Vercel domain redirect confliggono.
- GA4 duplicato se gtag caricato sia da GTM sia da script inline.
- Telefono placeholder (`+39 349 123 4567`) — usare numeri da `SITE_CONFIG`.

---

## OUTPUT RICHIESTO

Per ogni sessione di modifiche:
1. Elenco file toccati.
2. Diff sintetico delle modifiche.
3. Build status (`npm run build`).
4. Eventuali blocchi o dubbi documentati.
