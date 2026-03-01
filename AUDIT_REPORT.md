# Villa Olimpia — Audit Tecnico Completo

**Data:** 2026-03-01  
**Commit analizzato:** 6db3cf72471579bcdbc04f5ebc15bec8da042672  
**Deploy Vercel:** https://villaolimpiacaporizzuto.com

---

## ✅ PUNTI DI FORZA

- **TypeScript:** 0 errori. Strict mode attivo.
- **Build:** Compilazione OK. 71 pagine generate (SSG + dynamic).
- **SEO Metadata:** generateMetadata/defaultMetadata su tutte le pagine. metadataBase, openGraph, twitter, alternates configurati.
- **BASE_URL unica:** lib/metadata.ts esporta BASE_URL www. Importata in robots.ts e sitemap.ts.
- **Structured Data:** JSON-LD LodgingBusiness/VacationRental completo (PostalAddress, GeoCoordinates, AggregateRating).
- **Sitemap:** Pagine attive, filtro active su appartamenti, lastMod per categorie, hreflang.
- **Robots:** Googlebot/Bingbot, disallow /api/, /_next/, ecc.
- **Security headers:** CSP, X-Frame-Options, X-Content-Type-Options, HSTS, Permissions-Policy.
- **Immagini:** next/image, avif/webp, priority su hero.
- **i18n:** 0 chiavi mancanti EN.
- **ESLint:** 0 errori.
- **DATA_DIR:** /tmp su Vercel per ical-sync e public-request.

---

## ⚠️ PUNTI CRITICI (da valutare)

### 1. Canonical www vs non-www
BASE_URL = www nel codice, ma dominio live redirige www→non-www. Allineare scelta canonical.

### 2. API Lead — path su Vercel
app/api/lead/route.ts usa process.cwd()/data se LEADS_STORE_DIR assente. Su Vercel: impostare LEADS_STORE_DIR=/tmp/... o usare DATA_DIR.

### 3. Crons Vercel
Crons funzionano solo su Pro plan. Se Hobby: rimuovere crons o usare trigger esterno.

---

## 💡 OTTIMIZZAZIONI CONSIGLIATE

- BreadcrumbList JSON-LD su pagine interne
- Rate limiting su /api/lead e /api/public-request

---

## 📊 METRICHE BUILD

| Metrica | Valore | Status |
|---------|--------|--------|
| Errori TS | 0 | ✅ |
| Warning ESLint | 0 | ✅ |
| Build | OK | ✅ |

---

## 🚀 AZIONI ESEGUITE

Nessuna modifica al codice. Audit in sola lettura.

---
*Audit Villa Olimpia Capo Rizzuto — Marzo 2026*

---

## LIGHTHOUSE PERFORMANCE — Fix applicati (Marzo 2026)

### Stato PRIMA (produzione www.villaolimpiacaporizzuto.com)
| Categoria | Score | LCP | CLS | FCP | TBT |
|-----------|-------|-----|-----|-----|-----|
| Performance | 66 | 8.6s | 0 | 2.0s | 160ms |
| Accessibility | 91 | — | — | — | — |
| Best Practices | 92 | — | — | — | — |
| SEO | 100 | — | — | — | — |

### Fix applicati
1. **parallax-hero.tsx**: `sizes="100vw"`, alt descrittivo
2. **next.config.js**: `compiler.removeConsole` (prod), `optimizePackageImports` + @radix-ui
3. **WebVitalsReporter**: Core Web Vitals (LCP, CLS, INP, FCP, TTFB) → dataLayer per GTM/GA4
4. **Dynamic import** FloatingBooking/NewsletterPopup: annullato (Server Component non supporta ssr:false)

### Stato DOPO (localhost)
| Categoria | Score |
|-----------|-------|
| Performance | 75 |
| Accessibility | 89 |
| Best Practices | 96 |
| SEO | 100 |

*Nota: Confronto produzione vs localhost — risultati variabili. Dopo deploy su Vercel, rieseguire Lighthouse su https://www.villaolimpiacaporizzuto.com*
