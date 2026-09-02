# Autopilot log — Villa Olimpia

Memoria tra sessioni. La voce più recente sta in cima.
Da leggere in FASE 0 di `SUPER_PROMPT_AUTOPILOT.md` per non ripetere analisi già fatte
e non riproporre cose già scartate.

---

## 2026-09-02 (3) — seguito: corpo della landing localizzato

**Branch:** `claude/i18n-settembre-nord-europa` · commit `7a5ef79` · `main` non toccato

Chiude il limite lasciato aperto dalla voce precedente: il corpo della landing di settembre
non è più cablato in italiano.

- Nuovo `lib/seasonal-landing-copy.ts`: copy indicizzato per locale (it/en/de/fr/no/sv),
  con `getSeasonalLandingCopy()`.
- `SettembreCapoRizzutoPageView`, `SeasonalAvailabilityGrid`, `SeasonalUrgencyForm` e
  `SeasonalFAQ` accettano una prop opzionale `locale`, default `it`.
- **Percorso italiano invariato per costruzione:** con `locale === "it"` i componenti usano
  ancora `config.label`, `config.ctaLabel` e `FAQ_IT`. Le landing italiane giugno, luglio e
  ottobre, che montano gli stessi componenti, non cambiano.
- Tradotto anche lo **schema JSON-LD FAQPage**, che prima dichiarava domande italiane su
  pagine marcate `no`, `sv`, `de`, `fr`.
- Logica di invio del form, tracking, endpoint e numeri di contatto: non toccati.
- Traduzioni fedeli all'italiano: nessun prezzo, sconto, temperatura o claim nuovo.

**Verifica:** `tsc` e `lint` puliti, `quality:gate` verde (exit 0). In produzione h1 e FAQ
risultano tradotti su `no`/`sv`/`de`, lo schema FAQPage di `/no/settembre-capo-rizzuto` è in
norvegese, mentre `/settembre-capo-rizzuto` e `/giugno-2026` restano identici in italiano.

**Nota di stato:** la produzione è stata aggiornata via `vercel deploy --prod` da locale, su
richiesta esplicita di Francesco. Il sito pubblico gira quindi codice non ancora su `main`:
**il merge della PR resta necessario** per riallineare git e produzione, altrimenti il prossimo
deploy automatico da `main` riporterebbe indietro queste pagine.

---

## 2026-09-02 (2) — sessione autopilot

**Baseline:** `quality:quick` verde · HEAD `e87c0f3` · working tree sporco all'avvio, lasciato intatto
**Branch:** `claude/i18n-settembre-nord-europa` · 1 commit · `main` non toccato
**Backlog:** punto **10** — copertura `no`/`sv` di `/settembre-capo-rizzuto`

### Il gap esisteva

Sonda riproducibile su `localeHasRoute("/settembre-capo-rizzuto")` prima della modifica:
`it/en/de/fr => true`, **`no => false`, `sv => false`**. Di conseguenza l'hreflang generato da
`buildHreflangLanguages()` conteneva solo it/en/de/fr, il sitemap non esponeva nessuna URL
`no`/`sv` della landing, e `app/[locale]/settembre-capo-rizzuto/page.tsx` faceva `notFound()`
su quei due locali (`SUPPORTED_SETTEMBRE_LOCALES = ["en","de","fr"]`).

Il mercato dichiarato prioritario in `CLAUDE.md` (Nord Europa, volo diretto Oslo–Lamezia)
non aveva quindi la landing di settembre in nessuna delle sue due lingue.

### Implementato

| Livello | Cosa |
|---|---|
| 🟢 | `lib/i18n-config.ts`: nuovo set `NORDIC_ROUTES` + `isNordicRoute()`; `localeHasRoute()` serve `/settembre-capo-rizzuto` anche a `no` e `sv`. `nl` resta invariato (solo `/`) |
| 🟢 | `app/[locale]/settembre-capo-rizzuto/page.tsx`: metadata `no`/`sv`, locali aggiunti a `SUPPORTED_SETTEMBRE_LOCALES`, `path` derivato da `getLocalizedPathForCanonical` invece della catena di ternari, `homeHref` → `/no/norway` per `no` (la homepage `/no` reindirizza di proposito) |
| 🟡 | `next.config.js`: la regola `"/:locale(nl\|no\|sv)/settembre-capo-rizzuto" → "/settembre-capo-rizzuto"` 301-reindirizzava esattamente le URL che stavamo aggiungendo a sitemap e hreflang. Ristretta a `nl` |

Sitemap e hreflang **non sono stati modificati a mano**: derivano già entrambi da
`localeHasRoute()`, quindi si sono allineati da soli. Verificato, non assunto.

### Verifica

- `npx tsc --noEmit` pulito · `npm run quality:gate` verde (exit 0), build di produzione inclusa
- sonda post-fix: `no => true`, `sv => true`; hreflang ora 7 voci (it/en/de/fr/no/sv/x-default)
- `app/sitemap.ts` renderizzato: **71 URL** (erano 69), esattamente `+2`, nessuna rotta persa.
  `/no/settembre-capo-rizzuto` e `/sv/settembre-capo-rizzuto` a `priority 0.96 / daily / lastmod 2026-08-28`
- dev server: `/no/...` e `/sv/...` rispondono **200** con canonical self-referenziale e title
  localizzato; `/nl/...` continua a reindirizzare (invariato); `/en/...` e `/de/...` invariati
- destinazioni dei link della pagina verificate 200: `/no/contatti`, `/contatti`, `/appartamenti`, `/no/norway`

### Limite noto di questa modifica (non un bug introdotto)

`SettembreCapoRizzutoPageView` ha il **body copy cablato in italiano**: la pagina `no`/`sv` esce
con navigazione, `<title>` e description localizzati, ma testo del corpo in italiano —
**esattamente come già oggi per `de` e `fr`**. Non è una regressione, è il pattern esistente.
Localizzare davvero il corpo significa parametrizzare la view e i tre componenti stagionali
(`SeasonalAvailabilityGrid`, `SeasonalUrgencyForm`, `SeasonalFAQ`): diff grande, tocca il form di
conversione, fuori dal perimetro di un commit reversibile. Va deciso a parte.

### Rilevato ma non implementato

- **`/no/contatti` risponde 200** pur non essendo dichiarato in `localeHasRoute`: è una "soft 200"
  fuori da sitemap e hreflang, lo stesso caso che il commento in `next.config.js` dice di voler
  evitare. Preesistente, fuori perimetro.
- **CTA verso `/contatti` italiano.** Per `no`/`sv` `getLocalizedPathForCanonical("/contatti", L)`
  ricade sulla versione italiana (200, ma non localizzata). Estendere `/contatti` a `no`/`sv`
  sarebbe il passo successivo naturale.
- Tutto quanto già elencato nella sessione precedente (split-brain, cron iCal, repo pesante,
  documentazione contraddittoria) resta aperto e invariato.

### Serve una decisione da Francesco

1. Se localizzare davvero il corpo della landing settembre per `no`/`sv` (e a quel punto anche
   `de`/`fr`), o se il livello "chrome + metadata localizzati" è considerato sufficiente.
2. Se estendere `/contatti` ai locali `no`/`sv`, così che la CTA della landing resti in lingua.

---

## 2026-09-02 — sessione autopilot

**Baseline:** `quality:quick` verde · HEAD `7a7849c` · working tree sporco all'avvio (vedi sotto)
**Branch:** `claude/autopilot-settembre-2026` · 5 commit · `main` non toccato

### Implementato

| Commit | Livello | Cosa |
|---|---|---|
| `782814f` | 🟢 | `SeasonalOfferPanel.tsx` compila: dizionario tipizzato `Record<Exclude<SeasonalMonth,"other">, PanelCopy>`, aggiunte voci settembre e ottobre |
| `8ec03d3` | 🟢 | Autopilota SEO: mese target derivato dalla data, non più `/giugno-2026` cablato |
| `24774d1` | 🟢 | Sitemap: `DATE_AUG_UPDATE` sulle 10 rotte toccate ad agosto + declassamento automatico delle landing stagionali passate |
| `7201f89` | 🟢 | `WORKSPACE_CANONICO.md` corretto + `CLAUDE.md` e `SUPER_PROMPT_AUTOPILOT.md` versionati |

### Riparazioni d'ambiente (non versionate)

- `npm install --include=dev`. npm su questa macchina ha `omit=dev` in configurazione utente:
  **TypeScript, ESLint, Tailwind, PostCSS e autoprefixer non erano installati**, quindi
  `next build` non poteva funzionare in locale. Non è un problema di produzione — Vercel e la CI
  usano `npm ci`. Ma finché quella config resta, ogni `npm install` in questo repo va fatto con
  `--include=dev`.
- Rimosso un `.git/index.lock` orfano che bloccava i commit.
- `git gc --prune=now` sugli oggetti garbage in `.git/objects/*/tmp_obj_*`.

### Verifica

- `tsc --noEmit` pulito
- `npm run quality:gate` verde, build di produzione inclusa
- `npm run ops:recovery` eseguito: il report di oggi ora apre su `/settembre-capo-rizzuto`,
  4 controlli live verdi
- Sitemap generato ispezionato: 69 URL, nessuna rotta persa. `/giugno-2026` e `/luglio-2026`
  a `priority 0.5 / monthly`, `/settembre-capo-rizzuto` a `0.97 / daily` con `lastmod 2026-08-28`

### Rilevato ma non implementato

- **🔴 Split-brain.** `~/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean` è 4 commit
  indietro ma l'autopilota SEO gira ancora da lì (report fino al 2026-09-02, mentre in
  `~/Projects` si fermavano al 2026-06-13). Serve la decisione di Francesco su come spegnere o
  ripuntare quello scheduler. Livello rosso: nessuna cancellazione in autonomia.
- **🟡 Cron iCal a `0 6 * * *`.** Airbnb aggiorna il feed in 30–60 minuti, il sito può mostrare
  disponibilità sbagliata per quasi 24 ore. Portarlo a orario richiede di verificare il TTL della
  cache KV: fuori perimetro di questa sessione.
- **🟢 Working tree sporco all'avvio, lasciato intatto.** 8 immagini cancellate in
  `backup_images_*` e 2 `.md` untracked (`AIRBNB_AUDIT_GIUGNO_LUGLIO_2026.md`,
  `AIRBNB_OTTIMIZZAZIONE_COMPLETA.md`). Non erano mie: da protocollo non ci si committa sopra.
- **🟢 Repo pesante.** Pack ~151 MB, 271 immagini tracciate, due cartelle `backup_images_*` in git.
- **🟢 Documentazione contraddittoria.** `OPS_CONTEXT.md` fermo al 2026-02-08;
  `SUPER_PROMPT_CLAUDE_CODE_AVAILABILITY_SYNC.md` dice Next.js 15 ma è la 16.
- **🟡 Copertura `no`/`sv` di `/settembre-capo-rizzuto` da verificare.** È l'asset per il mercato
  Nord Europa (volo diretto Oslo–Lamezia). Non verificato in questa sessione.
- **Componenti orfani.** L'euristica della Sonda 3 dà ~49 candidati su ~120. Confermati a mano
  solo `components/whatsapp-button.tsx` e `components/analytics/google-tag-manager.tsx`.
  Nessuna cancellazione fatta: serve conferma su tutti e tre i fronti prima di rimuovere.

### Serve una decisione da Francesco

1. Come spegnere o ripuntare l'autopilota che gira dalla copia obsoleta in Documents.
2. Se montare `SeasonalOfferPanel` su `/settembre-capo-rizzuto`: ora compila ed è pronto, ma
   cambia il layout di conversione della landing, quindi vuole il tuo occhio prima.
3. Se correggere `omit=dev` nella configurazione npm della macchina o continuare a passare
   `--include=dev` a mano.
