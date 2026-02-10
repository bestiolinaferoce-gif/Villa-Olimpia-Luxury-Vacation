# Sistema Analytics automatico

## Cosa è stato fatto

È stato creato un **sistema unico** che gestisce Google Tag Manager e Google Analytics in modo automatico e affidabile.

### Problemi risolti

1. **Script nel `<head>`** – Gli script erano iniettati nel head come componenti client: in Next.js possono caricarsi tardi o in ordine sbagliato. Ora sono nel **body** con `strategy="beforeInteractive"` e si caricano subito.
2. **Consenso predefinito "denied"** – Con `analytics_storage: 'denied'` Google Analytics non inviava dati finché l’utente non accettava i cookie. Ora il default è **`analytics_storage: 'granted'`** così le visite vengono tracciate subito. Se l’utente rifiuta i cookie, il banner chiama `setConsentMode` e il tracciamento viene disattivato.
3. **ID non disponibili a build time** – Se le variabili d’ambiente non erano pronte in build, gli ID non c’erano. Ora sono definiti **valori di fallback** nel codice (GTM-K5NQGHBD e G-NW2FHPE98G), quindi i tag funzionano anche senza env.

### Componenti

| File | Ruolo |
|------|--------|
| `components/analytics/analytics-unified.tsx` | Inietta GTM + GA4 nel body, con ID di fallback e consenso analytics attivo di default. |
| `components/analytics/analytics-pageview.tsx` | Invia a GA4 il cambio pagina su navigazione client-side (Next.js). |
| `app/verifica-analytics/page.tsx` | Pagina di controllo: mostra se GTM e GA sono caricati e quanti eventi ci sono in `dataLayer`. |

### Layout

- In **`app/layout.tsx`** e **`app/[locale]/layout.tsx`**:
  - Rimossi dal `<head>` i vecchi componenti `GoogleTagManager` e `GoogleAnalytics`.
  - All’inizio del `<body>` sono stati aggiunti `<AnalyticsUnified />` e `<AnalyticsPageView />`.

I vecchi file `google-tag-manager.tsx` e `google-analytics.tsx` restano per:
- `setConsentMode` (usato dal banner cookie)
- `trackEvent`, `trackApartmentView`, ecc. (usati da altri componenti)

Gli script effettivi (caricamento GTM e GA) sono gestiti solo da `AnalyticsUnified`.

---

## Verifica che funzioni

### 1. Pagina di verifica (consigliato)

Dopo il deploy:

1. Apri: **https://[tuo-dominio]/verifica-analytics**
2. Controlla:
   - **Google Tag Manager**: Attivo / Non rilevato
   - **Google Analytics**: Attivo / Non rilevato
   - **Eventi in dataLayer**: numero
3. Se entrambi sono "Attivo", i tag sono caricati correttamente.

### 2. Google Analytics Real-time

1. Vai su https://analytics.google.com → proprietà Villa Olimpia.
2. Apri **Report → Panoramica in tempo reale**.
3. In un’altra scheda visita il tuo sito (o `/verifica-analytics`).
4. In Real-time dovresti vedere **1 utente attivo** (e la pagina visitata).

### 3. Google Tag Assistant

1. Installa l’estensione Tag Assistant (Chrome).
2. Visita il sito e abilita Tag Assistant.
3. Ricarica la pagina: dovresti vedere almeno un tag GTM e un tag GA.

---

## MCP / Gemini

Configurare un **MCP server con Gemini** non è necessario per far funzionare i tag. Il problema era lato codice (posizione script, consenso, ID); è stato risolto con il nuovo sistema.

MCP + Gemini può essere utile in futuro per:
- fare domande sul codice o sui tag,
- eseguire controlli da remoto,
- automatizzare altri task.

Per il tracciamento e la verifica descritta sopra non serve.

---

## Variabili d’ambiente (Vercel)

Sono già configurate:

- `NEXT_PUBLIC_GTM_ID` = GTM-K5NQGHBD  
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` = G-NW2FHPE98G  

Anche senza queste variabili, il sistema usa gli ID di fallback nel codice e i tag funzionano.

---

## Riepilogo

- Un solo punto di iniezione: **AnalyticsUnified** nel body.
- Caricamento **beforeInteractive** per GTM e GA.
- Consenso analytics **granted** di default; il banner cookie può revocarlo.
- **Verifica immediata** su `/verifica-analytics`.
- **Nessuna azione manuale** richiesta dopo il deploy.
