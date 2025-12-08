# 🗺️ Setup Google Maps - Guida Passo-Passo

## 📋 PREREQUISITI

- ✅ Account Google (Gmail)
- ✅ Componente Google Maps già configurato nel progetto
- ✅ Libreria `@react-google-maps/api` già installata

---

## 🎯 STEP 1: Crea Progetto Google Cloud

### 1.1 Vai su Google Cloud Console
1. Apri il browser e vai su: **https://console.cloud.google.com/**
2. Accedi con il tuo account Google (lo stesso di Gmail)

### 1.2 Crea Nuovo Progetto
1. In alto a sinistra, clicca sul **menu a tendina del progetto** (accanto a "Google Cloud")
2. Clicca su **"Nuovo Progetto"** (o "New Project")
3. Compila il form:
   - **Nome progetto:** `Villa Olimpia Website` (o qualsiasi nome)
   - **Organizzazione:** Lascia vuoto (se non hai un'organizzazione)
4. Clicca su **"Crea"** (o "Create")
5. **Attendi** che il progetto venga creato (10-30 secondi)

### 1.3 Seleziona il Progetto
1. Una volta creato, seleziona il progetto dal menu a tendina in alto
2. Verifica che il nome del progetto appaia in alto a sinistra

---

## 🎯 STEP 2: Abilita Maps JavaScript API

### 2.1 Vai alla Libreria API
1. Nel menu a sinistra, clicca su **"API e servizi"** (o "APIs & Services")
2. Clicca su **"Libreria"** (o "Library")

### 2.2 Cerca Maps JavaScript API
1. Nella barra di ricerca, digita: **"Maps JavaScript API"**
2. Clicca sul risultato **"Maps JavaScript API"**

### 2.3 Abilita l'API
1. Clicca sul pulsante **"ABILITA"** (o "ENABLE")
2. Attendi che l'API venga abilitata (10-20 secondi)
3. Dovresti vedere una schermata di conferma

---

## 🎯 STEP 3: Crea API Key

### 3.1 Vai alle Credenziali
1. Nel menu a sinistra, clicca su **"API e servizi"** → **"Credenziali"** (o "Credentials")
2. Oppure vai direttamente a: **https://console.cloud.google.com/apis/credentials**

### 3.2 Crea Nuova API Key
1. Clicca su **"+ CREA CREDENZIALI"** (o "+ CREATE CREDENTIALS")
2. Seleziona **"Chiave API"** (o "API key")
3. **Copia immediatamente la chiave API** che viene generata!
   - ⚠️ **IMPORTANTE:** Questa chiave sarà visibile solo una volta
   - La chiave sarà tipo: `AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567`

### 3.3 Salva la Chiave
- **Salva la chiave** in un posto sicuro (notepad, notes, etc.)
- Ti servirà per il prossimo step

---

## 🎯 STEP 4: Configura Restrizioni (Sicurezza)

### 4.1 Modifica la Chiave API
1. Nella pagina "Credenziali", clicca sulla **chiave API** che hai appena creato
2. Si aprirà una pagina di modifica

### 4.2 Restrizioni Applicazione (Application Restrictions)
1. Nella sezione **"Restrizioni applicazione"** (o "Application restrictions")
2. Seleziona **"Riferimenti HTTP (siti web)"** (o "HTTP referrers (web sites)")
3. Clicca su **"+ AGGIUNGI UN ELEMENTO"** (o "+ ADD AN ITEM")
4. Aggiungi questi riferimenti (uno alla volta):
   ```
   localhost:3001/*
   localhost:3000/*
   *.vercel.app/*
   *.netlify.app/*
   ```
   - Per ogni riferimento, clicca su **"Aggiungi elemento"** dopo averlo inserito
   - **Nota:** Se non conosci ancora il dominio di produzione, puoi aggiungerlo dopo

### 4.3 Restrizioni API (API Restrictions)
1. Nella sezione **"Restrizioni API"** (o "API restrictions")
2. Seleziona **"Limita chiave"** (o "Restrict key")
3. Nella lista, **deseleziona tutte le API** tranne:
   - ✅ **Maps JavaScript API** (deve essere selezionata)
4. Lascia deselezionate tutte le altre API

### 4.4 Salva
1. Scorri in basso e clicca su **"SALVA"** (o "SAVE")
2. Attendi la conferma

---

## 🎯 STEP 5: Aggiungi API Key al Progetto

### 5.1 Apri File .env.local
1. Nel progetto, apri il file `.env.local` nella root
2. Dovresti già vedere le variabili EmailJS

### 5.2 Aggiungi Google Maps API Key
Aggiungi questa riga al file `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567
```
**Sostituisci** `AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567` con la tua chiave API reale!

### 5.3 Salva il File
- Salva il file `.env.local`

---

## 🎯 STEP 6: Riavvia il Server

### 6.1 Ferma il Server
1. Nel terminale, premi **Ctrl+C** per fermare il server

### 6.2 Riavvia il Server
1. Esegui:
   ```bash
   npm run dev
   ```

### 6.3 Verifica
- Il server dovrebbe avviarsi senza errori
- Le variabili d'ambiente vengono caricate solo all'avvio!

---

## 🎯 STEP 7: Testa Google Maps

### 7.1 Vai alla Pagina Location
1. Apri il browser
2. Vai su: `http://localhost:3001/location`

### 7.2 Verifica la Mappa
- Dovresti vedere una **mappa interattiva** di Google Maps
- La mappa dovrebbe mostrare **Villa Olimpia** con un marker
- Puoi zoomare, spostarti, e vedere Street View

### 7.3 Se Vedi Errori
- Apri la console del browser (F12)
- Controlla eventuali errori
- Verifica che l'API Key sia corretta nel file `.env.local`

---

## ✅ CHECKLIST FINALE

- [ ] Progetto Google Cloud creato
- [ ] Maps JavaScript API abilitata
- [ ] API Key creata e copiata
- [ ] Restrizioni applicazione configurate
- [ ] Restrizioni API configurate (solo Maps JavaScript API)
- [ ] API Key aggiunta a `.env.local`
- [ ] Server riavviato
- [ ] Mappa funzionante su `/location`

---

## 🐛 TROUBLESHOOTING

### Errore: "This page can't load Google Maps correctly"
- ✅ Verifica che l'API Key sia corretta
- ✅ Controlla che "Maps JavaScript API" sia abilitata
- ✅ Verifica le restrizioni HTTP referrers (devono includere `localhost:3001/*`)

### Errore: "RefererNotAllowedMapError"
- ✅ Aggiungi `localhost:3001/*` alle restrizioni HTTP referrers
- ✅ Salva le modifiche e riavvia il server

### La mappa non si carica
- ✅ Controlla la console del browser (F12) per errori
- ✅ Verifica che il file `.env.local` contenga la chiave corretta
- ✅ Riavvia il server dopo aver modificato `.env.local`

### Errore: "API key not valid"
- ✅ Verifica che la chiave API sia corretta
- ✅ Controlla che la chiave non sia stata eliminata o disabilitata
- ✅ Verifica che "Maps JavaScript API" sia abilitata nel progetto

---

## 💰 COSTI

- **Gratuito:** $200 crediti/mese (circa 28,000 caricamenti mappa)
- **Dopo il limite:** $7 per 1000 caricamenti aggiuntivi

**Nota:** Per un sito come Villa Olimpia, il piano gratuito è più che sufficiente!

---

## 📝 NOTE IMPORTANTI

1. **Non committare `.env.local`** - È già nel `.gitignore`
2. **Per produzione**, aggiungi il dominio reale alle restrizioni HTTP referrers
3. **Backup della chiave API** - Salvala in un posto sicuro
4. **Sicurezza:** Le restrizioni sono importanti per evitare abusi della chiave

---

**Inizia con lo STEP 1 e procedi passo-passo!** 🚀

Quando hai l'API Key, incollala qui e la aggiungo al file `.env.local` automaticamente!

