# 📋 CONTENUTO DA INCOLLARE SU CLAUDE PER ANALISI

Copia tutto questo testo e incollalo in una nuova conversazione con Claude.

---

# ANALISI SITO VILLA OLIMPIA - NEXT.JS PROJECT

## 📍 INFORMAZIONI PROGETTO

**Percorso progetto sul Mac:**
```
/Users/francesconigro/Desktop/ViviCalabria.com
```

**Tipo progetto:**
- Next.js 16+ con App Router
- TypeScript
- Tailwind CSS
- React Server Components

**URL produzione (se deployato):**
```
(Fornisci URL Vercel/Netlify se disponibile)
```

---

## 🎯 RICHIESTA ANALISI

Per favore, analizza questo progetto Next.js e forniscimi:

1. **Analisi SEO completa:**
   - Verifica meta tags, Open Graph, Twitter Cards
   - Controlla structured data (Schema.org)
   - Analizza title tags e meta descriptions
   - Verifica canonical URLs
   - Controlla alt text immagini

2. **Analisi Performance:**
   - Verifica ottimizzazioni immagini
   - Controlla lazy loading
   - Analizza bundle size
   - Verifica code splitting

3. **Analisi Code Quality:**
   - Verifica TypeScript errors
   - Controlla best practices
   - Analizza struttura componenti
   - Verifica accessibility (ARIA, semantic HTML)

4. **Analisi Security:**
   - Verifica security headers
   - Controlla input sanitization
   - Analizza CORS e CSP

5. **Identifica problemi e bug:**
   - Errori di build
   - Warning in console
   - Problemi di rendering
   - Broken links o immagini mancanti

6. **Raccomandazioni di miglioramento:**
   - Ottimizzazioni prioritarie
   - Best practices mancanti
   - Feature da implementare

---

## 📁 STRUTTURA PROGETTO CHIAVE

**File principali da analizzare:**

### Configurazione:
- `next.config.js` - Configurazione Next.js
- `package.json` - Dipendenze
- `tsconfig.json` - Config TypeScript
- `tailwind.config.ts` - Config Tailwind

### App Router:
- `app/layout.tsx` - Root layout con metadata
- `app/page.tsx` - Homepage
- `app/appartamenti/page.tsx` - Pagina appartamenti
- `app/appartamenti/[id]/page.tsx` - Dettaglio appartamento
- `app/location/page.tsx` - Pagina location
- `app/recensioni/page.tsx` - Pagina recensioni
- `app/contatti/page.tsx` - Pagina contatti
- `app/error.tsx` - Error page
- `app/not-found.tsx` - 404 page

### Metadata & SEO:
- `lib/metadata.ts` - Funzioni per generare metadata

### Componenti chiave:
- `components/hero-section-premium.tsx` - Hero section
- `components/apartment-card.tsx` - Card appartamento
- `components/reviews/` - Componenti recensioni
- `components/analytics/` - Google Analytics

---

## 📊 FILE DA LEGGERE PER ANALISI

Puoi leggere questi file per l'analisi:

1. **Configurazione:**
   - `/Users/francesconigro/Desktop/ViviCalabria.com/next.config.js`
   - `/Users/francesconigro/Desktop/ViviCalabria.com/package.json`

2. **Homepage:**
   - `/Users/francesconigro/Desktop/ViviCalabria.com/app/page.tsx`
   - `/Users/francesconigro/Desktop/ViviCalabria.com/app/layout.tsx`

3. **SEO & Metadata:**
   - `/Users/francesconigro/Desktop/ViviCalabria.com/lib/metadata.ts`

4. **Componenti chiave:**
   - `/Users/francesconigro/Desktop/ViviCalabria.com/components/hero-section-premium.tsx`

---

## 🔍 COME PROCEDERE

1. **Leggi i file chiave** usando il percorso assoluto
2. **Analizza il codice** per problemi e ottimizzazioni
3. **Fornisci un report dettagliato** con:
   - Problemi trovati (priorità alta/media/bassa)
   - Ottimizzazioni suggerite
   - Codice da modificare (se necessario)
   - Metriche e score (SEO, Performance, etc.)

---

## ⚠️ NOTE IMPORTANTI

- Il sito è un **sito Next.js in sviluppo locale**
- Non è ancora deployato (o forse sì, forniscilo se disponibile)
- Target: **Luxury vacation rental** in Calabria, Italia
- Lingua principale: **Italiano**
- Mercato target: **Turisti internazionali** (DE, UK, NL, IT)

---

## 📝 OUTPUT ATTESO

Fornisci:

1. **Report completo** in formato markdown
2. **Lista problemi** prioritizzata
3. **Codice suggerito** per fix
4. **Metriche** (SEO score, Performance score, etc.)
5. **Checklist** di cosa fare prima del deploy

---

**Grazie per l'analisi!** 🚀

---

*Nota: Se il sito è deployato, puoi anche analizzarlo navigando l'URL pubblico fornito sopra.*












