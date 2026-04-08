# Villa Olimpia – Audit Completo & Piano d'Azione
_Generato: 2026-04-04 | Aggiornato: 2026-04-05_

---

## Sintesi Esecutiva

Il sito è **tecnicamente online e corretto**, ma in 90 giorni ha ricevuto meno di 20 visite reali e **zero richieste di preventivo** tramite form. Le cause sono tre:

1. **Il sito non viene trovato** (traffico organico quasi zero)
2. **Il pipeline n8n → WhatsApp è rotto** (workflow non creato su n8n)
3. **La pagina Airbnb non è ottimizzata** per agosto

---

## Stato Aggiornato — 2026-04-05

### ✅ COMPLETATO (questa settimana via Cursor + Claude)

| # | Cosa | Commit / Note |
|---|---|---|
| 1 | **FAQ JSON-LD schema** (10 Q&A Google rich snippets) | `66d5e6da` in prod |
| 2 | **Keywords Estate 2026** + title/description ottimizzati | `66d5e6da` in prod |
| 3 | **buildContactMetadata** export (fix build error) | `66d5e6da` in prod |
| 4 | **La Caletta** rimossa da tutta la codebase | `66d5e6da` in prod |
| 5 | **Vercel env vars** aggiunte: `LEADS_WEBHOOK_URL`, `LEADS_WEBHOOK_TOKEN`, `LEADS_AUTOREPLY_ENABLED` | Dashboard Vercel |
| 6 | **og-image + favicon** reali (foto Villa Olimpia, non AI) | `154e4be` in prod |
| 7 | **301 redirect** per URL con prefisso lingua `/en/`, `/nl/` | `8581224` in prod |
| 8 | **Build** pulita: 64 pagine statiche, TypeScript OK | Deploy `dpl_HS29QKSv3n8mcfG7fiQ5W2ZHnhbR` READY |
| 9 | **Lead route** (`app/api/lead/route.ts`): Resend + webhook + Telegram + WhatsApp | Già in prod |

---

## Task Rimanenti (da fare manualmente)

### 🔴 CRITICO – git index.lock bloccato su questa macchina

Il file `.git/index.lock` esiste sul volume APFS montato e blocca tutte le operazioni git locali. Non è un problema per il sito (GitHub è aggiornato), ma impedisce di lavorare sul repo da questo Mac.

**Fix — apri Terminal e lancia:**
```bash
cd ~/Downloads/Villa-Olimpia-Luxury-Vacation   # o dove hai il repo
rm .git/index.lock
git pull origin main
```

---

### 🔴 CRITICO – Workflow n8n non creato

Il server n8n su `http://72.60.20.32:62925` risponde ma non ha workflow attivi. Il codice è pronto (`LEADS_WEBHOOK_URL` è impostato), ma finché il workflow non esiste, i lead arrivano solo via email Resend (già funzionante).

**Come creare il workflow n8n:**
1. Apri `http://72.60.20.32:62925` nel browser
2. Clicca **"New Workflow"**
3. Aggiungi nodo **Webhook** → configura:
   - HTTP Method: `POST`
   - Path: `lead-intake`
   - Authentication: `Header Auth` → Header Name: `Authorization` → Value: `Bearer 6e940a38c400726cd3a28840d9eb0412`
4. Aggiungi nodo **Telegram** (o Email) per notifica
5. Attiva il workflow (toggle verde in alto a destra)
6. Testa: invia richiesta dal form di `villaolimpiacaporizzuto.com/contatti`

**Schema workflow minimale:**
```
Webhook (POST /webhook/lead-intake)
  → Send Telegram Message (chat_id tuo, testo da body.lead.name ecc.)
  → (opzionale) Send Email
```

---

### 🟠 ALTO – Google Search Console

**Cosa fare:**
1. Vai su [search.google.com/search-console](https://search.google.com/search-console/)
2. Verifica che `villaolimpiacaporizzuto.com` sia verificato
3. Clicca **"Controlla URL"** → inserisci `https://villaolimpiacaporizzuto.com` → "Richiedi indicizzazione"
4. Ripeti per `/appartamenti`, `/contatti`, `/prenota`
5. Vai su **Sitemap** → inserisci `https://villaolimpiacaporizzuto.com/sitemap.xml` → Invia

---

### 🟠 ALTO – Google Business Profile

È **gratuito e fondamentale** per "appartamenti Capo Rizzuto" su Google Maps.

1. Vai su [business.google.com](https://business.google.com)
2. Crea scheda con nome **"Villa Olimpia Capo Rizzuto"**
3. Categoria: **"Appartamenti vacanze"**
4. Indirizzo: Capopiccolo, 88841 Isola di Capo Rizzuto KR
5. Aggiungi almeno 10 foto (piscina, appartamenti, terrazza, mare)
6. Inserisci link sito: `https://villaolimpiacaporizzuto.com`

---

### 🟡 MEDIO – Resend domain verification (email non spam)

`LEADS_FROM_EMAIL` è impostato a `Villa Olimpia <noreply@villaolimpiacaporizzuto.com>` su Vercel. Ma per spedire da questo dominio, Resend deve verificarlo via DNS.

**Come verificare il dominio su Resend:**
1. Vai su [resend.com](https://resend.com) → Login
2. Dashboard → **Domains** → Add Domain → `villaolimpiacaporizzuto.com`
3. Resend ti fornirà 3 record DNS (TXT + MX + DKIM) da aggiungere al tuo provider DNS
4. Una volta verificato, le email arrivano da `noreply@villaolimpiacaporizzuto.com` (non finiscono in spam)

---

### 🟡 BASSO – Telegram bot (notifiche istantanee)

Già supportato nel codice. Basta impostare due env var su Vercel:

1. Crea bot: apri Telegram → scrivi a @BotFather → `/newbot` → segui istruzioni → copia il token
2. Ottieni chat_id: aggiungi il bot a un gruppo o scriviti in privato, poi vai su `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Su Vercel → Settings → Environment Variables aggiungi:
   - `LEADS_TELEGRAM_BOT_TOKEN` = il token del bot
   - `LEADS_TELEGRAM_CHAT_ID` = il tuo chat_id (numero intero)
4. Redeploy

---

## Stato Canali di Notifica Lead

| Canale | Stato | Note |
|---|---|---|
| Email Resend → proprietario | ✅ Funziona | RESEND_API_KEY configurata |
| Email auto-reply → cliente | ⚠️ Parziale | Funziona ma dominio non verificato su Resend (rischio spam) |
| n8n Webhook | ❌ Workflow da creare | `LEADS_WEBHOOK_URL` impostato, ma workflow n8n vuoto |
| WhatsApp API → cliente | ❌ Non configurato | `WHATSAPP_ACCESS_TOKEN` e `WHATSAPP_PHONE_NUMBER_ID` mancanti |
| Telegram alert | ❌ Non configurato | `LEADS_TELEGRAM_BOT_TOKEN` e `LEADS_TELEGRAM_CHAT_ID` mancanti |
| File persistence | ⚠️ Filesystem effimero | Su Vercel il filesystem è effimero → solo per dev locale |

**Conclusione attuale**: Un lead compilando il form arriva via **email a villaolimpiacaporizzuto@gmail.com**. Verifica subito la casella Gmail — potrebbero esserci richieste non lette.

---

## Piano d'Azione Questa Settimana

| # | Azione | Tempo | Impatto |
|---|---|---|---|
| 1 | `rm .git/index.lock && git pull` sul Mac | 2 min | Fix locale |
| 2 | **Google Search Console** → richiedi indicizzazione + sitemap | 10 min | 🔴 Critico |
| 3 | **Google Business Profile** → crea scheda | 30 min | 🔴 Critico |
| 4 | **n8n workflow** → crea e attiva | 20 min | 🟠 Alto |
| 5 | **Resend domain verification** | 15 min | 🟠 Alto |
| 6 | **Telegram bot** (backup notifiche) | 10 min | 🟡 Facoltativo |

---

## Piano Medio Termine (prossime 2-4 settimane)

Per aumentare le prenotazioni di **agosto** occorre generare visibilità NOW (i turisti prenotano con 2-6 settimane di anticipo):

1. **Google Ads** → campagna localizzata "appartamenti capo rizzuto agosto 2026" (budget 5-10€/giorno)
2. **Booking.com / Expedia** → aggiungi Villa Olimpia se non ancora presente
3. **Instagram** → 3-5 post/settimana (piscina, appartamenti, tramonto, mare) con hashtag `#caporizutto #vacanzecalabria #villaolimp`
4. **Backlink locali** → contatta blog di viaggi, guide Crotone/Calabria
5. **WhatsApp Business API** → attiva template `lead_confirmation` per notificare automaticamente il cliente

---

_Fine audit – Villa Olimpia Capo Rizzuto_
