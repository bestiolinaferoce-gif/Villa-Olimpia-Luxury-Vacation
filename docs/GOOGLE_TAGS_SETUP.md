# 🎯 Configurazione Google Tags - Guida Completa

Questa guida ti aiuta a configurare correttamente Google Tag Manager e Google Analytics 4 per il sito Villa Olimpia.

## 📋 Prerequisiti

1. Account Google Analytics 4
2. Account Google Tag Manager (opzionale, ma consigliato)
3. Accesso alla dashboard Vercel

---

## 🔧 Configurazione su Vercel

### Step 1: Ottieni i tuoi ID

#### Google Analytics 4 (GA4)
1. Vai su [Google Analytics](https://analytics.google.com)
2. Seleziona la tua proprietà (o creane una nuova)
3. Vai su **Admin** → **Data Streams** → Seleziona il tuo stream web
4. Copia il **Measurement ID** (formato: `G-XXXXXXXXXX`)

#### Google Tag Manager (GTM)
1. Vai su [Google Tag Manager](https://tagmanager.google.com)
2. Seleziona il tuo container (o creane uno nuovo)
3. Copia il **Container ID** (formato: `GTM-XXXXXXX`)
   - Il container ID è visibile nell'angolo in alto a destra della dashboard GTM

### Step 2: Configura le variabili su Vercel

1. Vai su [Vercel Dashboard](https://vercel.com/dashboard)
2. Seleziona il progetto **villa-olimpia-luxury-vacation**
3. Vai su **Settings** → **Environment Variables**
4. Aggiungi le seguenti variabili:

| Nome | Valore | Ambiente |
|------|--------|----------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` (il tuo Measurement ID) | Production, Preview, Development |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` (il tuo Container ID) | Production, Preview, Development |

**⚠️ IMPORTANTE:**
- Seleziona **tutti e tre gli ambienti** (Production, Preview, Development) per ogni variabile
- Usa il valore reale, non il placeholder `G-XXXXXXXXXX` o `GTM-XXXXXXX`
- Dopo aver salvato, fai un **Redeploy** del progetto

### Step 3: Redeploy

Dopo aver aggiunto le variabili:
1. Vai su **Deployments**
2. Clicca sui tre puntini (...) dell'ultimo deploy
3. Seleziona **Redeploy**
4. Attendi il completamento del deploy

---

## ✅ Verifica della Configurazione

### Metodo 1: Google Tag Assistant (Consigliato)

1. Installa l'estensione [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) su Chrome
2. Vai sul tuo sito deployato (es. `https://villa-olimpia-luxury-vacation.vercel.app`)
3. Clicca sull'icona di Tag Assistant nella barra degli strumenti
4. Clicca su **Enable** e ricarica la pagina
5. Dovresti vedere:
   - ✅ Google Tag Manager: **1 tag trovato**
   - ✅ Google Analytics: **1 tag trovato** (se configurato)

### Metodo 2: Google Analytics Real-Time

1. Vai su [Google Analytics](https://analytics.google.com)
2. Seleziona la tua proprietà
3. Vai su **Reports** → **Real-time**
4. Visita il tuo sito
5. Dovresti vedere la tua visita in tempo reale

### Metodo 3: Console del Browser

1. Apri il tuo sito nel browser
2. Apri la **Console** (F12 → Console)
3. Digita: `window.dataLayer`
4. Dovresti vedere un array con oggetti GTM
5. Digita: `window.gtag`
6. Dovresti vedere la funzione `gtag` se GA4 è configurato

---

## 🐛 Risoluzione Problemi

### Problema: "0 Tag Google trovati" in Tag Assistant

**Possibili cause:**
1. Le variabili d'ambiente non sono configurate su Vercel
2. Il deploy non è stato fatto dopo aver aggiunto le variabili
3. Le variabili hanno valori placeholder (`G-XXXXXXXXXX`)

**Soluzione:**
1. Verifica che le variabili siano presenti su Vercel con valori reali
2. Fai un redeploy completo
3. Attendi 2-3 minuti dopo il deploy
4. Prova di nuovo con Tag Assistant

### Problema: Timeout nella connessione

**Possibili cause:**
1. Il sito non è ancora deployato correttamente
2. Problemi di rete temporanei
3. Il sito è bloccato da un ad blocker

**Soluzione:**
1. Verifica che il sito sia accessibile nel browser
2. Disabilita temporaneamente gli ad blocker
3. Prova da una finestra di navigazione in incognito

### Problema: Tag non rilevati dopo il deploy

**Soluzione:**
1. Verifica che i componenti siano inclusi nel layout:
   - `app/layout.tsx` deve includere `<GoogleTagManager />` e `<GoogleAnalytics />`
   - `app/[locale]/layout.tsx` deve includere `<GoogleTagManager />` e `<GoogleAnalytics />`
2. Controlla che non ci siano errori nella console del browser
3. Verifica che le variabili d'ambiente siano visibili nel codice sorgente (non dovrebbero essere visibili, ma i tag dovrebbero essere presenti)

---

## 📝 Configurazione Google Tag Manager (Opzionale)

Se vuoi gestire tutti i tag tramite GTM invece che direttamente:

1. Vai su [Google Tag Manager](https://tagmanager.google.com)
2. Seleziona il tuo container
3. Crea un nuovo tag:
   - Tipo: **Google Analytics: GA4 Configuration**
   - Measurement ID: Il tuo `G-XXXXXXXXXX`
   - Trigger: **All Pages**
4. Pubblica il container

**Nota:** Se configuri GA4 tramite GTM, puoi rimuovere `NEXT_PUBLIC_GA_MEASUREMENT_ID` e gestire tutto da GTM.

---

## 🔒 Privacy e GDPR

Il sito include già:
- ✅ Cookie Consent Banner (`components/CookieConsent.jsx`)
- ✅ Consent Mode per Google Analytics
- ✅ Privacy Policy (`app/privacy-policy/page.jsx`)
- ✅ Cookie Policy (`app/cookie-policy/page.jsx`)

I tag Google rispettano le preferenze dell'utente tramite Consent Mode.

---

## 📞 Supporto

Se hai problemi:
1. Verifica che tutte le variabili siano configurate correttamente
2. Controlla i log di deploy su Vercel
3. Usa Google Tag Assistant per diagnosticare problemi
4. Verifica la console del browser per errori JavaScript

---

## ✅ Checklist Finale

- [ ] Variabile `NEXT_PUBLIC_GA_MEASUREMENT_ID` configurata su Vercel
- [ ] Variabile `NEXT_PUBLIC_GTM_ID` configurata su Vercel (o usa default)
- [ ] Deploy completato dopo aver aggiunto le variabili
- [ ] Google Tag Assistant rileva i tag
- [ ] Google Analytics mostra dati in Real-Time
- [ ] Nessun errore nella console del browser

---

**Ultimo aggiornamento:** Febbraio 2025
