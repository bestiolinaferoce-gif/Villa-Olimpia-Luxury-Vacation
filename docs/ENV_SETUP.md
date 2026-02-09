# Setup variabili d'ambiente

Configurazione automatica delle variabili per sviluppo e produzione.

## 1. Sviluppo locale

```bash
cp .env.example .env.local
```

Apri `.env.local` e compila i valori (almeno Google Maps e, se usi il form lead, Resend).

## 2. Produzione (Vercel)

1. **Dashboard Vercel** → Progetto → **Settings** → **Environment Variables**
2. Aggiungi le variabili elencate in `.env.example` (stesso nome, valore di produzione)
3. **Obbligatorie per funzionalità:**
   - **Mappe:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - **Analytics:** `NEXT_PUBLIC_GA_MEASUREMENT_ID` (es. `G-XXXXXXXXXX`)
   - **Lead (form preventivi):** `RESEND_API_KEY`, `LEADS_TO_EMAIL`, `LEADS_FROM_EMAIL`
4. **Opzionali:** EmailJS (form contatti), webhook lead, Telegram, `LEADS_STORE_DIR`
5. **Redeploy** dopo aver salvato le variabili

## 3. Script automatico (EmailJS su Vercel)

Se usi EmailJS e hai Vercel CLI:

```bash
node add-vercel-env.js
```

Aggiunge le variabili EmailJS già configurate nello script. Per Google Maps e GA le aggiungi a mano dalla dashboard.

## Riepilogo variabili

| Variabile | Uso | Obbligatoria |
|-----------|-----|----------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics | Consigliata |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Mappe e indicazioni | Sì (mappe) |
| `NEXT_PUBLIC_EMAILJS_*` | Form contatti (EmailJS) | Se usi form contatti |
| `RESEND_API_KEY` | Invio email lead | Se usi /api/lead |
| `LEADS_TO_EMAIL` | Destinatario lead | Default: villaolimpiacaporizzuto@gmail.com |
| `LEADS_FROM_EMAIL` | Mittente (dominio verificato Resend) | Consigliata |
| `LEADS_WEBHOOK_URL` | Webhook per lead | Opzionale |
| `LEADS_TELEGRAM_*` | Alert Telegram | Opzionale |
