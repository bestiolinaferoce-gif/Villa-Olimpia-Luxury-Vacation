# Villa Olimpia — Audit Completo Lead Pipeline & Pagina Contatti
**Data:** 2026-04-06 | **Scope:** CRO, UX, Email Delivery, Backend, Persistenza Lead

---

## 1. Executive Summary

Il sito è funzionante a livello di UI, ma il cuore del business — la pipeline di acquisizione lead — ha **tre punti di rottura reali** che, in combinazione, hanno causato le email mancanti degli ultimi giorni.

**La causa più probabile del problema attuale:** la variabile `LEADS_FROM_EMAIL` su Vercel è stata impostata a `Villa Olimpia <noreply@villaolimpiacaporizzuto.com>` — un dominio non verificato su Resend. Quando Resend rifiuta la richiesta, il sistema non ha un fallback robusto sul canale email: finisce nel 503 o silenziosamente nel persist-to-/tmp (dati che spariscono al cold start).

**Secondo problema strutturale:** la persistenza su filesystem `/tmp` di Vercel è **effimera per definizione** — ogni cold start è una slate pulita. Non esiste un modo attuale per recuperare richieste "salvate" che non sono mai state recapitate per email.

**Terzo problema:** il routing email è costruito su un'assunzione fragile: Resend manda a `bestiolinaferoce@gmail.com` (hardcoded nel codice sorgente), che poi dovrebbe essere inoltrato a `villaolimpiacaporizzuto@gmail.com` via Gmail forwarding. Se il forwarding si rompe, i lead spariscono senza nessun segnale d'errore.

**Produzione da bloccare?** No — il sito non va offline. Ma il flusso email va ripristinato **entro 2 ore** prima di qualsiasi altra attività.

---

## 2. Findings Prioritizzati

---

### [P0] FROM email non verificata su Resend → delivery failure totale

- **Area:** Email / Backend
- **Evidenza concreta:** `LEADS_FROM_EMAIL=Villa Olimpia <noreply@villaolimpiacaporizzuto.com>` nel `.env.local`. Il report operativo del 29 marzo mostra "8 email da `onboarding@resend.dev`" — non da `villaolimpiacaporizzuto.com`. Questo significa che la variabile è stata aggiornata DOPO quel report funzionante, cambiando il sender da default `onboarding@resend.dev` a un dominio personalizzato non ancora verificato su Resend. Il codice ha un fallback solo se l'env var è **assente** (`|| "Villa Olimpia <onboarding@resend.dev>"`), ma se è presente e contiene un dominio non verificato, Resend risponde con un errore 4xx e il fallback non scatta mai.
- **Impatto business:** Ogni richiesta di preventivo inviata dal form negli ultimi giorni ha con alta probabilità fallito la delivery email. L'utente vede il successo lato frontend (se Telegram era attivo), oppure un errore con redirect a WhatsApp (se anche Telegram era assente).
- **Root cause:** Aggiornamento env var con dominio non verificato su Resend dashboard. L'errore è silenzioso perché `sendWithResend` logga l'errore ma non impatta la risposta HTTP finale se Telegram è attivo.
- **Fix raccomandato (immediato, < 30 min):**
  - **Opzione A (veloce):** Rimuovi `LEADS_FROM_EMAIL` da Vercel → Environment Variables. Il codice fallback usa automaticamente `onboarding@resend.dev` che funzionava in precedenza.
  - **Opzione B (definitiva):** Verifica il dominio `villaolimpiacaporizzuto.com` su [resend.com/domains](https://resend.com/domains) aggiungendo i record DNS richiesti (SPF, DKIM, MX opzionale). Poi reimposta la var con il dominio verificato.

---

### [P0] File persistence su Vercel /tmp è effimera → lead irrecuperabili

- **Area:** Backend / Email
- **Evidenza concreta:** In `lib/data-path.ts`: `process.env.VERCEL === "1" ? path.join("/tmp", "villa-olimpia-data") : path.join(process.cwd(), "data")`. Su Vercel, ogni invocazione serverless in un'istanza "fredda" (cold start) inizia con /tmp vuoto. I lead "persistiti" via `persistLeadToFile()` e le richieste di `public-request` via `requestStore.ts` (writeFile su JSON) vengono persi tra un cold start e il successivo. Anche i lead della stessa istanza calda sopravvivono solo finché quella istanza è viva.
- **Impatto business:** Qualsiasi lead che è stato "saved" con `persisted: true` nella risposta del server ma non consegnato via email o Telegram non è recuperabile. Non esiste un posto sicuro dove andare a cercarli. Il commento nel codice dice esplicitamente: "NOTA: dati in /tmp sono effimeri (persi tra cold start)."
- **Root cause:** Scelta consapevole ma non supportata da un'alternativa reale. La nota nel codice documenta il rischio senza risolverlo.
- **Fix raccomandato:** Implementare persistenza duratura. La soluzione più rapida è **Vercel KV** (Redis, gratuito nel tier Hobby) o **Turso** (SQLite edge). A brevissimo termine, come patch di emergenza: usare Resend come audit trail aggiungendo `bcc` a una mailbox dedicata su ogni email inviata agli owner.

---

### [P0] PRIMARY_LEADS_INBOX hardcoded nel sorgente → routing fragile e non operabile

- **Area:** Backend / Email
- **Evidenza concreta:** In `lib/lead-inbox.ts`: `export const PRIMARY_LEADS_INBOX = "bestiolinaferoce@gmail.com"`. Questa è l'email dell'account Resend registrato (piano free). Ogni lead va **prima** a questa inbox personale. `LEADS_TO_EMAIL=villaolimpiacaporizzuto@gmail.com` viene aggiunto solo come secondo destinatario CC. Il commento nel codice spiega la logica (Resend free plan → solo all'email registrata), ma crea una chain: lead → bestiolinaferoce@gmail.com → (Gmail forwarding?) → villaolimpiacaporizzuto@gmail.com.
- **Impatto business:** Se Gmail forwarding è disabilitato, mal configurato o arriva in spam, le richieste vanno in una inbox personale non monitorata per il business. Non c'è alert di fallback. Il titolare vede le email nella inbox personale ma Villa Olimpia non le presidia.
- **Root cause:** Vincolo tecnico del piano free Resend + decisione di non aggiornare il piano o verificare il dominio proprio.
- **Fix raccomandato:**
  - **A breve:** Controlla che il forwarding Gmail da `bestiolinaferoce@gmail.com` a `villaolimpiacaporizzuto@gmail.com` sia attivo.
  - **Definitivo:** Verifica dominio `villaolimpiacaporizzuto.com` su Resend e aggiungi un piano a pagamento (min $20/mese) per inviare direttamente a `villaolimpiacaporizzuto@gmail.com` come unico recipient. Oppure, sposta il `PRIMARY_LEADS_INBOX` a una env var controllabile senza deploy.

---

### [P1] N8N webhook su HTTP + IP nudo → canale inaffidabile

- **Area:** Backend
- **Evidenza concreta:** `LEADS_WEBHOOK_URL=http://72.60.20.32:62925/webhook/lead-intake` — HTTP senza TLS, indirizzo IP senza hostname, porta non standard. Il AUDIT_ACTION_PLAN.md conferma che il workflow n8n non è stato ancora creato ("risponde ma non ha workflow attivi").
- **Impatto business:** Il webhook fallisce silenziosamente per ogni richiesta (nessun workflow attivo). Questo è considerato accettabile perché il codice esclude correttamente il webhook da `deliveredAny`. Ma è un canale di notifica atteso che non funziona. Se il server n8n va offline o l'IP cambia (no DNS), la var va aggiornata manualmente.
- **Root cause:** Server n8n non configurato con workflow reale. Nessun DNS/HTTPS sul server.
- **Fix raccomandato:** O crei il workflow n8n con i passi documentati nel AUDIT_ACTION_PLAN.md, o disabiliti il webhook (`LEADS_WEBHOOK_DISABLED=true`) fino a che non è pronto. Non lasciare un canale che fallisce sempre senza disabilitarlo esplicitamente.

---

### [P1] EmailJS: fire-and-forget senza await → backup channel inaffidabile

- **Area:** Backend / Email
- **Evidenza concreta:** Nel `booking-form.tsx`: `sendLeadViaEmailJS(payload, t.messageTemplate.noPreference)` — chiamata senza `await`. La funzione cattura internamente tutti gli errori (`catch { // silent }`). Non c'è modo di sapere se EmailJS ha funzionato o meno.
- **Impatto business:** EmailJS come canale di backup è teoricamente valido ma praticamente non verificabile. Se Resend fallisce e anche EmailJS fallisce silenziosamente, il lead è perso senza traccia. I log di EmailJS (dashboard EmailJS) non vengono mai consultati.
- **Root cause:** Scelta deliberata di fire-and-forget. Non sbagliata concettualmente, ma la mancanza di logging rende impossibile il debug.
- **Fix raccomandato:** Aggiungi un logging minimo (`console.log("[EmailJS] sent ok")` / `console.error("[EmailJS] failed:", err)`) o consulta il dashboard EmailJS oggi per verificare quante email sono passate di recente.

---

### [P1] Error UX: mostra errore + apre WhatsApp popup simultaneamente

- **Area:** UX / CRO
- **Evidenza concreta:** Nel blocco `catch` e nel caso `!response.ok` di `booking-form.tsx`: `setSubmitError(...)` viene chiamato, poi viene tentato `window.open(buildWhatsAppUrl(...))`. L'utente vede un messaggio di errore nell'UI **e** si apre un popup WhatsApp. Se il popup è bloccato dal browser, viene eseguito `window.location.href = buildMailto(...)` che naviga via dalla pagina, perdendo il form compilato.
- **Impatto business:** L'utente che vede questo flusso è confuso: l'errore suggerisce che qualcosa è andato storto, il popup lo porta su WhatsApp, e se il popup è bloccato sparisce dalla pagina. Nessuno dei tre comportamenti è rassicurante. Il lead potrebbe abbandonare.
- **Root cause:** Il fallback è ben concepito ma implementato in modo che genera due azioni simultanee conflittuali.
- **Fix raccomandato:** Separare il comportamento. In caso di errore API: mostra un messaggio amichevole con due CTA esplicite ("Scrivi su WhatsApp" e "Invia email"). Non aprire popup in automatico. Non reindirizzare via dalla pagina.

---

### [P1] Rate limiter in-memory → reset a ogni cold start, falsa protezione

- **Area:** Backend
- **Evidenza concreta:** `const rateLimitStore = new Map<string, ...>()` a livello di modulo in `app/api/lead/route.ts`. Su Vercel, ogni istanza serverless ha il suo spazio di memoria. Il rate limit non è condiviso tra istanze e viene azzerato a ogni cold start.
- **Impatto business:** Il rate limiter non protegge realmente da spam distribuito. Un bot che aspetta un cold start o usa IPs diversi bypassa completamente la protezione. Al contrario, può falsamente bloccare un utente legittimo che prova più volte perché il suo primo tentativo è andato in errore.
- **Root cause:** Implementazione locale corretta per sviluppo, non appropriata per Vercel serverless.
- **Fix raccomandato:** Usa Vercel KV (Redis) per il rate limit store condiviso, oppure aggiungi Cloudflare WAF con rate limiting (soluzione zero-code).

---

### [P2] Pagina /contatti: funnel spezzato in 3 percorsi distinti

- **Area:** UX / CRO
- **Evidenza concreta:** Nella sezione "Richieste più frequenti" ci sono tre card con CTA diverse:
  1. "Soggiorno famiglia" → `href="#prenota"` (anchor sul form in pagina)
  2. "Soggiorno 7+ notti" → `href="/prenota"` (pagina separata — split del traffico!)
  3. "Intera villa / più appartamenti" → `href="/intera-villa-calabria"` (pagina separata)
  In più, la sidebar ha una card "WhatsApp immediato" e una card "Sei un'agenzia?" che portano altrove. L'utente arriva con l'intenzione di fare un preventivo e ha 5 destinazioni possibili.
- **Impatto business:** Dispersione del traffico conversion. Ogni utente che clicca su /prenota o /intera-villa-calabria esce dal contesto tracciato dal form principale. Se le pagine di destinazione non hanno lo stesso tracking, i lead si perdono nei report.
- **Root cause:** Crescita organica della pagina con aggiunte successive, senza revisione dell'architettura CRO.
- **Fix raccomandato:** Consolida. Il form principale in pagina deve essere **l'unica azione primaria**. Le card "Soggiorno 7+ notti" e "Intera villa" devono puntare al form interno (#prenota), non a pagine esterne. Le pagine /prenota e /intera-villa-calabria possono esistere come landing per traffico diretto, non come destinazione da /contatti.

---

### [P2] Hero /contatti: 7 badge chip sovraccaricano e diluiscono il messaggio

- **Area:** UX / CRO
- **Evidenza concreta:** Dopo l'H1 ci sono 7 badge pill separati: "Risposta entro 24h", "A 100m dal mare", "Perfetto per famiglie", "Cancellazione flessibile", "Sconto soggiorni 7+ notti", "Settembre: mare elegante", "Gruppi e più appartamenti". Sono 7 messaggi di valore distribuiti in egual peso visivo.
- **Impatto business:** Nessun messaggio emerge come principale. L'utente non sa qual è la ragione #1 per scegliere Villa Olimpia. La promessa si diluisce.
- **Fix raccomandato:** Max 3 badge. Scegli i 3 più rilevanti per il segmento primario (es: "Risposta entro 24h", "Prenotazione diretta, nessuna commissione", "Piscina + mare a 100m"). Il resto va nel corpo del testo o sparisce.

---

### [P2] ShareKit nella sidebar della pagina Contatti → distrazione attiva

- **Area:** UX / CRO
- **Evidenza concreta:** Il componente `ShareKit` ("Condividi e fai girare il passaparola") compare nella sidebar della pagina /contatti, sopra i contatti diretti. L'utente che è arrivato per prenotare viene invitato a condividere il link su WhatsApp con altri — uscendo dal funnel prima di compilare il form.
- **Impatto business:** La sidebar è uno spazio premium in una pagina di conversione. Ogni elemento che non spinge verso il form abbassa il tasso di conversione. Il referral va incentivato altrove (post-prenotazione, email di conferma).
- **Fix raccomandato:** Rimuovi ShareKit dalla pagina /contatti. Spostalo nel footer globale o nella pagina di conferma post-submit.

---

### [P2] Campo "Agenzia" in posizione primaria nel form → spreco di spazio B2C

- **Area:** UX / CRO
- **Evidenza concreta:** Il campo `agency` è il quarto campo del form, affiancato ai dati di contatto principali (nome, email, telefono). Per il 90%+ degli utenti (clienti diretti) questo campo è irrilevante e crea friczione ("Sono un'agenzia? No, quindi cosa inserisco?").
- **Impatto business:** Ogni campo non necessario aumenta l'abandon rate. Il campo agenzia confonde i clienti diretti e riduce il completion rate del form.
- **Fix raccomandato:** Sposta "Agenzia" all'ultimo posto nel form, dopo il messaggio libero, o nascondilo in un accordion "Sei un'agenzia di viaggi? (opzionale)". Ancora meglio: gestisci il segmento B2B con un form separato raggiungibile dalla card agenzia nella sidebar.

---

### [P2] "Risposta entro 24h" nella hero vs orari di disponibilità reali

- **Area:** UX / Content
- **Evidenza concreta:** La hero mostra il badge "Risposta entro 24h". La card "Orari di disponibilità" mostra: Lun-Ven 9-20, Sabato 9-18, Domenica 10-16. Se un utente scrive alle 22 di domenica, la risposta arriverà teoricamente tra 12-18 ore, ma l'aspettativa "24h" è un impegno generico che non si allinea con la realtà di una struttura gestita direttamente.
- **Impatto business:** Se l'utente aspetta 24h e non riceve risposta (per il problema email), abbandona e prenota altrove. La promessa aumenta le aspettative senza strumento per mantenerle.
- **Fix raccomandato:** Sii più preciso: "Rispondiamo entro la giornata lavorativa" oppure "Risposta in giornata (lun-sab 9-20)". Oppure, configura un autoresponder email chiaro che dica esattamente quando aspettarsi risposta.

---

### [P2] Duplicazione contatti nella sidebar: confusione su numeri e canali

- **Area:** UX / CRO
- **Evidenza concreta:** Nella sidebar ci sono due numeri di telefono nella card "Contatti diretti" (+39 333 577 3390 e +39 329 047 9193). La card "WhatsApp immediato" mostra solo il primo numero (333 577 3390). Non è chiaro chi risponde su quale numero, quale è WhatsApp e quale no, e perché ce ne sono due.
- **Impatto business:** L'utente non sa quale numero chiamare. Può provare entrambi senza risposta e abbandonare.
- **Fix raccomandato:** Indica chiaramente il ruolo di ogni numero: "WhatsApp & prenotazioni: 333 577 3390 — Emergenze struttura: 329 047 9193". Oppure consolida a un unico numero pubblico se gestibile.

---

## 3. Focus Pagina Contatti

### Gerarchia visiva
La pagina inizia forte con una hero chiara (titolo H1 buono, copy orientato ai casi d'uso), ma decade immediatamente dopo. La sezione "Richieste più frequenti" con le tre card crea un momento di scelta prima che l'utente abbia ancora visto il form. È un pattern di auto-segmentazione che funziona solo se tutte e tre le destinazioni hanno conversione equivalente — qui non è così.

### Chiarezza del messaggio
L'H1 ("Richieste su misura: famiglie, gruppi e soggiorni più lunghi") è specifico e orientato ai benefit, ma il sottotitolo riepiloga troppe cose (date indicative, 7 notti, settembre, maggio/giugno, più appartamenti, piscina, Area Marina). Il messaggio è corretto ma denso. Un utente mobile lo scansiona e non trattiene nulla.

### Allineamento headline ↔ promessa ↔ CTA
L'H1 parla di richieste su misura. Il form si chiama "Richiedi un preventivo". La CTA primaria del form è generica (nessuna copia specifica per il segmento citato nell'headline). Il filo narrativo è corretto ma non viene guidato fino alla CTA.

### Attriti nel form
- Campo agenzia in posizione primaria (vedi P2 sopra)
- Il date picker a calendario richiede interazione complessa su mobile (doppio tap, selezione range)
- Nessun indicatore di progresso o stima di completamento
- Il messaggio libero ha 5 righe ma nessun placeholder orientativo (cosa scrivere?)

### Elementi distraenti
- ShareKit (vedi P2)
- Card "Sei un'agenzia?" con button B2B è nella sidebar accanto al form principale, attira click B2C su un percorso sbagliato
- Link "Apri su Google Maps" apre un tab esterno — l'utente esce dalla pagina
- Sezione "Orari di disponibilità" è informativa ma posizionata in basso, lontana dal form dove avrebbe senso

### Canali multipli che generano confusione
La pagina offre contemporaneamente: form web, email diretta (link mailto in sidebar), WhatsApp (card dedicata), telefono (2 numeri), Google Maps, link /prenota, link /intera-villa-calabria. Sono 7+ touchpoint. L'utente prende il percorso di minima resistenza — che spesso è WhatsApp o email diretta, entrambi non tracciati sistematicamente.

### Mismatch "24h" vs realtà operativa
Vedi P2 sopra. Il rischio aggiuntivo: se la delivery email è rotta, l'owner non riceve il lead e non risponde. L'utente che ha fatto la richiesta aspetta 24h, poi 48h, poi prenota altrove. Non sa che il suo messaggio non è mai arrivato.

### Funnel verso azioni non tracciate
I link mailto diretti nella sidebar (`villaolimpiacaporizzuto@gmail.com`) e il link WhatsApp diretto portano l'utente fuori dal tracking. Non c'è GA4 event tracking su questi click nella pagina /contatti. Il `TrackContactSource` componente traccia solo la sorgente della visita, non le azioni sul canale.

---

## 4. Focus Lead Pipeline

### Endpoint lead
`/api/lead` (POST) — ben strutturato. Validazione Zod robusta, honeypot company field, date validation, rate limiting (vedi P1). Il problema non è nell'endpoint ma nella configurazione dei canali.

### Delivery channels e stato attuale
| Canale | Configurato | Funzionante | Incluso in deliveredAny |
|--------|-------------|-------------|------------------------|
| Resend email | Sì (API key ok) | **Probabile NO** (FROM domain non verificato) | Sì |
| Auto-reply guest | Sì | Stesso problema Resend | No |
| WhatsApp guest template | Solo se WHATSAPP_ACCESS_TOKEN presente | Sconosciuto | No |
| Webhook n8n | Sì (URL impostato) | **NO** (workflow non creato) | No (escluso intenzionalmente) |
| Telegram | Solo se LEADS_TELEGRAM_BOT_TOKEN presente | Sconosciuto dalla documentazione disponibile | Sì |
| File persist | Sì | Sì ma **effimero** su Vercel | No |
| EmailJS (client) | Sì (chiavi pubbliche presenti) | Non verificabile — silent | No |

**Conclusione delivery:** se Resend fallisce (FROM non verificato) E Telegram non è configurato, ogni submit ritorna 503 e il lead entra nel flusso di fallback (WhatsApp popup → mailto redirect). Il lead arriva o su WhatsApp personale dell'owner o in una bozza email non inviata del browser dell'utente.

### Fallback
Il fallback frontend (WhatsApp popup + mailto) è implementato correttamente nel codice ma crea un'esperienza utente confusa (vedi P1). Il canale EmailJS è un backup silenzioso.

### Auto reply
Implementato e funzionante a livello di codice. Dipende dallo stesso Resend con lo stesso problema FROM domain. Se Resend fallisce, nessun auto-reply viene inviato al guest — che rimane senza conferma.

### Webhook n8n
URL configurato, workflow non creato. Vedi P1.

### Telegram / WhatsApp
Entrambi dipendono da env vars non verificate in questo audit. Il piano di recovery include verificarle.

### Persistenza lead
**Su Vercel: nulla di duratura.** Il file-based persist in /tmp è documentato come effimero nello stesso codice. Il database SQLite (`dev.db`) è locale, non in produzione. Non esiste una tabella o storage cloud dove i lead vengono salvati durevolmente prima di essere consegnati.

### Rischio di richieste salvate ma non recapitate
**Alto.** Il flow è: submit → persist (ok, ma in /tmp effimero) → email (se ok → fine, se no → 503). Se la persist avviene e Resend fallisce, la riga NDJSON in /tmp sopravvive solo finché l'istanza serverless è calda (pochi minuti/ore). Al cold start successivo, è persa.

### Dove controllare per recuperare richieste esistenti
1. **Dashboard Resend** → logs → filtra per errori. Se ci sono errori 422/400 con "domain not verified" li vedi lì.
2. **Dashboard EmailJS** → sent log → verifica se le email di backup sono arrivate.
3. **Telegram bot** → se configurato, i messaggi sono nel channel.
4. **Log Vercel** → Functions → `/api/lead` → vedi le response (200 vs 503) con timestamp.
5. **Gmail `bestiolinaferoce@gmail.com`** → cerca email da Resend/noreply negli ultimi 7 giorni. Se non ci sono = conferma che Resend stava fallendo.
6. `/tmp` su Vercel → non accessibile direttamente. Irreversibilmente perso.

---

## 5. Piano Definitivo 24h

### ⚡ Quick wins entro 2 ore (BLOCCANTE)

**Step 1 — Verifica/Fix LEADS_FROM_EMAIL su Vercel (20 min)**
1. Vai su Vercel Dashboard → progetto `villa-olimpia-luxury-vacation` → Settings → Environment Variables
2. Trova `LEADS_FROM_EMAIL`
3. **Opzione A (sicura e immediata):** Cancella la variabile completamente. Il codice usa il fallback `onboarding@resend.dev` che funzionava il 29 marzo.
4. **Opzione B (definitiva ma più lenta):** Vai su resend.com → Domains → "Add domain" → inserisci `villaolimpiacaporizzuto.com` → aggiungi i record DNS forniti → aspetta la verifica (5-30 min) → aggiorna la variabile con il dominio verificato.
5. Dopo la modifica: Vercel fa deploy automatico in ~2 min.

**Step 2 — Test live end-to-end (15 min)**
1. Vai su `https://villaolimpiacaporizzuto.com/contatti`
2. Compila il form con un'email reale (usa un indirizzo diverso dall'inbox business)
3. Submit
4. Verifica in Vercel Logs → Functions → `/api/lead` → risposta: deve essere `200` con `channels.resend: true`
5. Controlla `bestiolinaferoce@gmail.com` → deve arrivare l'email del lead entro 1-2 min
6. Controlla `villaolimpiacaporizzuto@gmail.com` → deve arrivare come CC/forwarding

**Step 3 — Verifica Dashboard Resend (10 min)**
1. Vai su resend.com → Emails → filtra per errori negli ultimi 7 giorni
2. Documenta quante email hanno fallito e con quale errore (422 "domain not verified" è il sospettato)
3. Questo conferma definitivamente la root cause

---

### 🔧 Fix entro oggi

**Fix 4 — Abilita/verifica Telegram come canale secondario**
- Verifica che `LEADS_TELEGRAM_BOT_TOKEN` e `LEADS_TELEGRAM_CHAT_ID` siano impostati su Vercel in production
- Se non presenti: crea un bot Telegram via @BotFather, ottieni il token, avvia una conversazione, ottieni il chat_id, aggiungi entrambe le variabili su Vercel
- Obiettivo: avere almeno 2 canali owner-facing attivi (Resend + Telegram) per ridondanza reale

**Fix 5 — Error UX del form**
- Modifica il blocco catch/errore in `booking-form.tsx`: non aprire il popup WhatsApp automaticamente
- Mostra invece un messaggio amichevole con due CTA esplicite: pulsante WhatsApp e pulsante Email
- L'utente sceglie autonomamente il canale di fallback

**Fix 6 — Controlla Gmail forwarding**
- Apri Gmail `bestiolinaferoce@gmail.com` → Settings → Forwarding and POP/IMAP
- Verifica che il forwarding a `villaolimpiacaporizzuto@gmail.com` sia attivo e abilitato
- Verifica che le email in arrivo non vadano in spam sulla destinazione

---

### 🏗️ Fix strutturale definitivo (entro questa settimana)

**Fix 7 — Persistenza duratura dei lead**
Sostituire il file-persist in /tmp con storage reale. Ordine di preferenza per costo/velocità:
1. **Resend BCC audit trail** (immediato, zero code): aggiungi `bcc: "audit@dominio.com"` nel body di `sendWithResend`. Ogni email ha una copia in una inbox dedicata come audit trail.
2. **Vercel KV** (Redis managed, free tier): 10 righe di codice. Ogni lead scritto in KV prima della delivery. Leggibile via API.
3. **Turso** (SQLite edge, free tier): Schema semplice, driver JS disponibile. Richiede ~1h di setup.
4. **Supabase** (PostgreSQL, free tier): Più potente ma più setup.

**Fix 8 — Spostare PRIMARY_LEADS_INBOX a env var**
```typescript
// lib/lead-inbox.ts — PRIMA
export const PRIMARY_LEADS_INBOX = "bestiolinaferoce@gmail.com"

// lib/lead-inbox.ts — DOPO
export const PRIMARY_LEADS_INBOX =
  process.env.LEADS_PRIMARY_INBOX || "bestiolinaferoce@gmail.com"
```
Poi aggiungi `LEADS_PRIMARY_INBOX=villaolimpiacaporizzuto@gmail.com` su Vercel. Questo fa sì che il recipient primario sia la casella business, non quella personale.

**Fix 9 — Cleanup pagina /contatti (CRO)**
- Rimuovi ShareKit dalla sidebar
- Cambia le CTA delle card "Soggiorno 7+ notti" e "Intera villa" per puntare a `#prenota`
- Sposta campo agenzia dopo il textarea message
- Riduci i badge hero da 7 a 3
- Aggiungi un messaggio di errore amichevole separato dalla redirect WhatsApp

---

### 📋 Ordine esatto di esecuzione

```
OGGI:
1. [20 min] Vercel: cancella/correggi LEADS_FROM_EMAIL → rideploy automatico
2. [15 min] Test live form → verifica email in inbox
3. [10 min] Controlla Resend dashboard → documenta errori storici
4. [10 min] Controlla Gmail forwarding bestiolinaferoce → villaolimpiacaporizzuto
5. [20 min] Vercel: aggiungi LEADS_TELEGRAM_BOT_TOKEN + LEADS_TELEGRAM_CHAT_ID se assenti
6. [30 min] Fix UX errore form (booking-form.tsx)

QUESTA SETTIMANA:
7. Implementa BCC audit trail su Resend (30 min)
8. Spostare PRIMARY_LEADS_INBOX a env var (15 min + deploy)
9. Cleanup pagina /contatti (2-3 ore design+code)
10. Verifica dominio su Resend se non fatto al passo 1
```

---

## 6. Patch Consigliate

### Patch A — Fix LEADS_FROM_EMAIL (immediata)

**Su Vercel Dashboard:**
```
LEADS_FROM_EMAIL → (rimuovi o cambia a):
Villa Olimpia <onboarding@resend.dev>
```
oppure, dopo verifica dominio:
```
Villa Olimpia <noreply@villaolimpiacaporizzuto.com>
```

---

### Patch B — PRIMARY_LEADS_INBOX da hardcode a env var

**File: `lib/lead-inbox.ts`**
```typescript
// PRIMA
export const PRIMARY_LEADS_INBOX = "bestiolinaferoce@gmail.com"

// DOPO
export const PRIMARY_LEADS_INBOX =
  process.env.LEADS_PRIMARY_INBOX?.trim() || "bestiolinaferoce@gmail.com"
```

**Su Vercel:**
```
LEADS_PRIMARY_INBOX=villaolimpiacaporizzuto@gmail.com
```

---

### Patch C — BCC audit trail in Resend

**File: `app/api/lead/route.ts` — funzione `sendWithResend`**
```typescript
// Aggiungi questo parametro al body JSON di Resend:
body: JSON.stringify({
  from,
  to,
  reply_to: lead.email,
  subject,
  text,
  bcc: process.env.LEADS_AUDIT_BCC || undefined,  // <-- AGGIUNTA
}),
```

**Su Vercel:**
```
LEADS_AUDIT_BCC=audit@villaolimpiacaporizzuto.com  (o qualsiasi inbox dedicata)
```

---

### Patch D — Fix UX errore form (booking-form.tsx)

**PRIMA (comportamento attuale):**
```tsx
setSubmitError(t.status.submitUnavailable)
const popup = window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer")
if (!popup) {
  window.location.href = buildMailto(payload)  // naviga via dalla pagina!
}
```

**DOPO:**
```tsx
setSubmitError(null)
setShowFallbackOptions(true)  // nuovo stato boolean
// L'UI mostra una card con due button: WhatsApp e Email
// L'utente sceglie — nessun redirect automatico
```

```tsx
{showFallbackOptions && (
  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 space-y-3">
    <p className="text-sm text-amber-800 font-medium">
      Il servizio è temporaneamente non disponibile. Contattaci direttamente:
    </p>
    <Button asChild variant="default" className="w-full">
      <a href={buildWhatsAppUrl(payload)} target="_blank" rel="noopener noreferrer">
        Scrivi su WhatsApp
      </a>
    </Button>
    <Button asChild variant="outline" className="w-full">
      <a href={buildMailto(payload)}>
        Invia email
      </a>
    </Button>
  </div>
)}
```

---

### Patch E — Semplificazione pagina /contatti (UX)

**RIMUOVERE:**
- `<ShareKit />` dalla sidebar
- 4 dei 7 badge hero (tenere: "Risposta entro 24h", "Prenotazione diretta", "Cancellazione flessibile")
- Il link `/prenota` dalla card "Soggiorno 7+ notti" → sostituire con `href="#prenota"`
- Il link `/intera-villa-calabria` dalla card "Intera villa" → o tenere (ha senso come landing separata) o aggiungere anche `href="#prenota"` come alternativa

**SEMPLIFICARE:**
- Card "Contatti diretti": riduci a un unico numero WhatsApp primario, sposta il secondo numero con etichetta esplicita ("per urgenze struttura")
- Textarea message: aggiungi `placeholder="Es: Cerco un appartamento per 6 persone a luglio, preferibilmente con vista mare..."`
- Campo agency: sposta dopo textarea, aggiungi label `(opzionale, solo se sei un'agenzia di viaggi)`

**RENDERE PRIMARIO:**
- Il form deve essere visibile above-the-fold su desktop senza scroll
- Il titolo del form card "Richiedi un preventivo" deve essere più descrittivo: "Richiedi il tuo preventivo personalizzato — risposta entro 24h"

**RENDERE IL FUNNEL PIÙ ROBUSTO:**
- Aggiungi tracking GA4 event sui click email e WhatsApp in sidebar (`onClick={() => trackEvent('contact_click', 'CRO', 'whatsapp_sidebar')}`)
- Aggiungi un timestamp "Ultimo aggiornamento: oggi" alla promessa 24h per aumentare credibilità

---

*Fine audit — 2026-04-06*
*Generato da analisi diretta del codice sorgente: app/api/lead/route.ts, components/booking-form.tsx, lib/lead-inbox.ts, lib/data-path.ts, app/contatti/page.tsx, .env.local*
