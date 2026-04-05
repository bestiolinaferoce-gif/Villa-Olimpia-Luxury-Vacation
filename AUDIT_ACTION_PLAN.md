# Villa Olimpia – Audit Completo & Piano d'Azione
_Generato: 2026-04-04_

---

## Sintesi Esecutiva

Il sito è **tecnicamente online e corretto**, ma in 90 giorni ha ricevuto meno di 20 visite reali e **zero richieste di preventivo** tramite form. Le cause sono tre:

1. **Il sito non viene trovato** (traffico organico quasi zero)
2. **Il pipeline n8n → WhatsApp è rotto** (env var sbagliate)
3. **La pagina Airbnb non è ottimizzata** per agosto

---

## Problemi Trovati (per priorità)

### 🔴 CRITICO – Nessun traffico organico

**Causa**: Il dominio `villaolimpiacaporizzuto.com` è recente e ha pochi/zero backlink. Google non lo sta indicizzando bene.

**Evidenza**: I log Vercel mostrano solo ~16 richieste in 90 giorni, tutte di oggi (me che facevo l'audit). **Zero visitatori reali** nel periodo.

**Cosa fare subito:**
- Vai su [Google Search Console](https://search.google.com/search-console/) → verifica che il dominio sia verificato
- Fai clic su **"Richiedi indicizzazione"** sulla homepage e su `/appartamenti`, `/contatti`, `/prenota`
- Invia la sitemap: `https://villaolimpiacaporizzuto.com/sitemap.xml`
- Crea/ottimizza la scheda **Google Business Profile** (gratuita, fondamentale per "appartamenti Capo Rizzuto")

---

### 🔴 CRITICO – Pipeline n8n → WhatsApp completamente rotto

**Causa**: Il codice in `app/api/lead/route.ts` legge le variabili d'ambiente `LEADS_WEBHOOK_URL` e `LEADS_WEBHOOK_TOKEN`, ma su Vercel sono impostate come `N8N_WEBHOOK_URL` e `N8N_WEBHOOK_SECRET` — **i nomi non corrispondono**, quindi n8n non viene mai chiamato.

**Evidenza**: `grep` conferma il mismatch. Il webhook n8n restituisce anche 403 (workflow inattivo sul server `72.60.20.32`).

**Fix applicato**: Ho già aggiunto le variabili corrette in `.env.local` per lo sviluppo locale.

**Cosa fare su Vercel (manuale — 5 minuti):**
1. Vai su [vercel.com/bestiolinaferoces-projects/villa-olimpia-luxury-vacation/settings/environment-variables](https://vercel.com)
2. Aggiungi queste 4 variabili (in tutti gli ambienti: Production, Preview, Development):

```
LEADS_WEBHOOK_URL     = http://72.60.20.32:62925/webhook/lead-intake
LEADS_WEBHOOK_TOKEN   = 6e940a38c400726cd3a28840d9eb0412
LEADS_FROM_EMAIL      = Villa Olimpia <noreply@villaolimpiacaporizzuto.com>
LEADS_AUTOREPLY_ENABLED = true
```

3. Fai **Redeploy** del progetto

---

### 🔴 CRITICO – Workflow n8n non attivo

**Causa**: Il server n8n su `72.60.20.32:62925` risponde 403 al webhook. Questo significa che il workflow esiste ma è **inattivo (off)** oppure non esiste.

**Cosa fare:**
1. Accedi al pannello n8n: `http://72.60.20.32:62925`
2. Verifica che esista il workflow `lead-intake`
3. Se non esiste → ricrea il workflow (schema sotto)
4. Assicurati che il workflow sia **attivo (toggle verde)**

**Schema workflow n8n minimale (Lead → WhatsApp):**
```
Webhook (POST /webhook/lead-intake)
  → HTTP Request: invia messaggio WhatsApp tramite Meta API
  → (opzionale) Email di notifica a villaolimpiacaporizzuto@gmail.com
```

---

### 🟠 ALTO – WhatsApp API guest notification non configurata

**Causa**: `WHATSAPP_ACCESS_TOKEN` e `WHATSAPP_PHONE_NUMBER_ID` non impostati → il sistema non manda WhatsApp automatico al cliente dopo la richiesta.

**Cosa fare**: Se vuoi attivare questa funzione, vai su [business.facebook.com](https://business.facebook.com) → WhatsApp Business API → prendi il token e il Phone Number ID e aggiungili su Vercel.

---

### 🟠 ALTO – Telegram alert non configurato

**Causa**: `LEADS_TELEGRAM_BOT_TOKEN` e `LEADS_TELEGRAM_CHAT_ID` non impostati → nessuna notifica Telegram per nuovi lead.

**Cosa fare** (opzionale ma consigliato come backup):
1. Crea un bot Telegram con @BotFather
2. Aggiungi `LEADS_TELEGRAM_BOT_TOKEN` e `LEADS_TELEGRAM_CHAT_ID` su Vercel

---

### 🟡 MEDIO – Email auto-reply usa indirizzo `onboarding@resend.dev`

**Causa**: `LEADS_FROM_EMAIL` non impostato → le email di conferma al cliente arrivano da `onboarding@resend.dev` (indirizzo generico Resend che **finisce nello spam**).

**Fix**: Già incluso nelle variabili Vercel sopra (`LEADS_FROM_EMAIL = Villa Olimpia <noreply@villaolimpiacaporizzuto.com>`). Però occorre anche verificare il dominio su Resend.dev:
1. Vai su [resend.com](https://resend.com) → Domains → aggiungi `villaolimpiacaporizzuto.com`
2. Segui la verifica DNS (aggiunta record TXT/MX)

---

### ✅ RISOLTO – "La Caletta" property rimossa (2026-04-04)

**Stato**: La proprietà "Residence La Caletta" non esiste più. Tutti i riferimenti alla property sono stati rimossi.

**Nota**: I riferimenti a "Spiaggia della Caletta" presenti nei blog (`spiagge-piu-belle-capo-rizzuto` e `vacanze-famiglia-capo-rizzuto-bambini`) sono **corretti e vanno mantenuti** — si tratta di una vera spiaggia nelle vicinanze di Villa Olimpia, utile per il SEO locale.

**Per Airbnb/OTA**: Creare listing con nome "Villa Olimpia Capo Rizzuto" (non La Caletta). Titolo suggerito: `"Villa Olimpia – 9 App. piscina privata | Area Marina Capo Rizzuto"`

---

### 🟢 BASSO – Sito tecnicamente ok

- Deployment Vercel: **READY** (ultimo deploy 2026-03-31)
- Sitemap: corretta, include tutti gli appartamenti e le pagine blog
- Robots.txt: corretto
- JSON-LD structured data: presente e dettagliato
- Form `/contatti`: funziona correttamente (validazione, honeypot anti-spam)
- Resend API key: configurata ✓
- Google Analytics / GTM: configurati ✓

---

## Piano d'Azione Immediato (questa settimana)

| Priorità | Azione | Tempo | Impatto |
|---|---|---|---|
| 1 | **Vercel env vars** (4 righe sopra) | 5 min | 🔴 Critico |
| 2 | **Verifica + riattiva workflow n8n** su `72.60.20.32` | 15 min | 🔴 Critico |
| 3 | **Google Search Console** → richiedi indicizzazione + sitemap | 10 min | 🔴 Alto |
| 4 | **Google Business Profile** → crea/aggiorna scheda | 30 min | 🔴 Alto |
| 5 | **Airbnb** → verifica calendario agosto + aggiorna testi/foto | 1 ora | 🟠 Alto |
| 6 | **Resend domain verification** (email non spam) | 20 min | 🟠 Medio |
| 7 | Telegram bot (backup notifiche) | 20 min | 🟡 Facoltativo |

---

## Piano Medio Termine (prossime 2-4 settimane)

Per aumentare le prenotazioni di **agosto** occorre generare visibilità NOW perché i turisti prenotano con 2-6 settimane di anticipo:

1. **Google Ads** → campagna localizzata "appartamenti capo rizzuto agosto 2026" (budget minimo 5-10€/giorno, ROI molto alto per un singolo lead convertito)
2. **Booking.com / Expedia** → aggiungi Villa Olimpia se non presente
3. **Instagram** → 3-5 post di foto della piscina e degli appartamenti con hashtag locali (#caporizutto #vacanzecalabria #villaolimp)
4. **Backlink locali** → contatta i siti di turismo calabrese, blog di viaggi, guide Crotone
5. **FAQ page** → espandi con domande specifiche su agosto, costi, disponibilità

---

## Stato Canali di Notifica Lead

| Canale | Stato | Note |
|---|---|---|
| Email Resend → proprietario | ✅ Funziona | Ma mittente è @resend.dev (spam risk) |
| Email auto-reply → cliente | ⚠️ Parziale | Funziona ma da indirizzo generico |
| n8n Webhook | ❌ Rotto | Env var errate + workflow inattivo |
| WhatsApp API → cliente | ❌ Non configurato | Token mancanti |
| Telegram alert | ❌ Non configurato | Token mancanti |
| File persistence | ✅ Funziona (locale) | Su Vercel il filesystem è effimero → 0 lead salvati |

**Conclusione**: Attualmente solo Resend funziona. Un lead compilando il form arriva via **email a villaolimpiacaporizzuto@gmail.com**. Verifica subito la casella Gmail — potrebbero esserci richieste in spam.

---

_Fine audit – Villa Olimpia Capo Rizzuto_
