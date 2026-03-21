# Handoff per revisione codice (Claude Code / reviewer)

**Progetto:** Villa Olimpia — Next.js 16 App Router (`villaolimpiacaporizzuto.com`)  
**Repo:** `Villa-Olimpia-Luxury-Vacation`  
**Data handoff:** 2026-02-14  

---

## 1. Contesto

È stato eseguito un intervento **mirato** dopo un audit statico: i path `/images/placeholder*.jpg` referenziati nel codice **non esistevano** sotto `public/`, con rischio di **404** su fallback.

**Obiettivo del commit:** centralizzare fallback immagini su file **realmente presenti** nel repo.

---

## 2. Modifiche implementate (da revisionare)

| File | Cosa è cambiato |
|------|------------------|
| `lib/public-image-fallbacks.ts` | **NUOVO** — costanti `PUBLIC_IMAGE_FALLBACK_*` puntano a asset verificati: villa gallery + `ristoranti/micomare.jpg`. |
| `components/optimized-image.tsx` | Fallback on error → `PUBLIC_IMAGE_FALLBACK_APARTMENT`. Ordine corretto `'use client'` + imports. |
| `components/auto-optimizer.tsx` | Fallback globale `<img>` on error → `PUBLIC_IMAGE_FALLBACK_GENERIC`. |
| `components/enogastronomia-restaurants-grid.tsx` | Default immagine ristorante → `PUBLIC_IMAGE_FALLBACK_RESTAURANT`. |
| `components/apartment-gallery.tsx` | Sentinel legacy → `LEGACY_APARTMENT_PLACEHOLDER_PATH` (stesso path stringa, solo DRY). |

**Nessuna modifica** a contenuti marketing, SEO testuali, API lead, o env.

---

## 3. Checklist revisione (priorità)

1. **TypeScript / build:** `npm run build` deve completare senza errori (già verificato in sessione).
2. **Lint:** `npm run lint` ha **errori storici** su blog (`react/no-unescaped-entities`) e mappe — **non** introdotti da questo intervento.
3. **Coerenza UX:** fallback villa per “appartamento” è **generico** (piscina notturna). Accettabile come rete di sicurezza; per produzione si può valere un JPG più neutro dedicato.
4. **Ristoranti:** default `micomare.jpg` è un file reale in `public/images/ristoranti/` — verificare che sia **brand-safe** come generic fallback (o sostituire con logo/neutral).
5. **SEO immagini:** nessun cambio a `og-image` o metadata in questo commit.

---

## 4. Aree NON toccate (backlog consigliato)

- **Google Search Console:** canonical `/` vs `/it`, query, coverage.
- **OG per pagina** ad alto valore (`/prenota`, stagionali, top lodge).
- **Cron iCal** Vercel Hobby = 1×/giorno — valutare Pro o cron esterno se serve sync frequente.
- **Pulizia ESLint** blog/map (task separato).

---

## 5. Comandi utili

```bash
npm run build
npm run lint   # atteso: errori pre-esistenti fuori scope
```

---

## 6. Domande per il product owner (se emergono in review)

- Va bene un’unica **foto villa** come fallback “appartamento” o preferite un asset **dedicato** (file nuovo in `public/`)?
- Per ristoranti senza foto, `micomare.jpg` è il default accettabile o meglio un’immagine **generica Calabria**?

---

*Fine handoff — incollare questo file o la sezione 2–3 nel prompt del reviewer.*
