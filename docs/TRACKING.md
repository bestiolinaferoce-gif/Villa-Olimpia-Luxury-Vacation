# Tracking e analytics — Villa Olimpia

Documentazione operativa per GA4, GTM e Meta Pixel. **Non committare ID reali** nel codice: usare solo variabili d'ambiente.

## Stack attuale

| Strumento | Come è integrato | Variabile / default |
|-----------|-------------------|---------------------|
| **Google Tag Manager** | `components/analytics/analytics-unified.tsx` nel root `app/layout.tsx` | `NEXT_PUBLIC_GTM_ID` — se vuoto in build, fallback `GTM-K5NQGHBD` (allineato a quanto già usato sul progetto) |
| **Consent Mode (gtag)** | Script inline in `<head>` in `app/layout.tsx` (default negato fino a consenso) | — |
| **Google Analytics 4** | Opzionale via `NEXT_PUBLIC_GA_MEASUREMENT_ID` se usi `GoogleAnalytics` / gtag; spesso GA4 è caricato **da dentro GTM** | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| **Meta (Facebook) Pixel** | `components/analytics/meta-pixel.tsx` — **solo** se `NEXT_PUBLIC_META_PIXEL_ID` è impostato **e** l'utente accetta cookie **marketing** | `NEXT_PUBLIC_META_PIXEL_ID` (solo cifre, es. da Events Manager) |
| **Web Vitals** | Componente dedicato (es. layout localizzato) | — |

## Verifica locale

```bash
npm run verify:analytics
```

Opzionale con HTML deployato:

```bash
SITE_URL=https://villaolimpiacaporizzuto.com npm run verify:analytics
```

## Meta Pixel e GDPR

- Il pixel **non** viene caricato senza consenso **marketing** (banner cookie in `components/CookieConsent.jsx`).
- In caso di revoca del marketing viene tentato `fbq('consent', 'revoke')` se `fbq` è già presente.
- Per conversioni avanzate / CAPI serve configurazione lato server e Meta Events Manager (fuori scope di questo file).

## Checklist post-deploy

1. GTM: anteprima + tag GA4 / conversioni come da container.
2. GA4: report **Tempo reale** con una visita di prova.
3. Meta: Events Manager → **Test events** (con Pixel ID reale in `.env` / Vercel).
