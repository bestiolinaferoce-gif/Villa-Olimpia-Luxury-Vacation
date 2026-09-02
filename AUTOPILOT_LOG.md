# Autopilot log — Villa Olimpia

Memoria tra sessioni. La voce più recente sta in cima.
Da leggere in FASE 0 di `SUPER_PROMPT_AUTOPILOT.md` per non ripetere analisi già fatte
e non riproporre cose già scartate.

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
