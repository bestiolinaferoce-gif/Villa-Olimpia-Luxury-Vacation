# 🔧 Setup EmailJS e Google Maps

## 📧 CONFIGURAZIONE EMAILJS

### Step 1: Crea Account EmailJS
1. Vai su https://www.emailjs.com/
2. Crea un account gratuito (200 email/mese)
3. Verifica la tua email

### Step 2: Crea Email Service
1. Vai su **Email Services** → **Add New Service**
2. Scegli il provider (Gmail, Outlook, etc.)
3. Connetti il tuo account email
4. **Copia il Service ID** (es: `service_xxxxxxxxx`)

### Step 3: Crea Email Template
1. Vai su **Email Templates** → **Create New Template**
2. Usa questo template:

```
Oggetto: Nuova Richiesta Prenotazione - {{from_name}}

Ciao,

Hai ricevuto una nuova richiesta di prenotazione da Villa Olimpia:

📋 Dettagli Richiesta:
- Nome: {{from_name}}
- Email: {{from_email}}
- Telefono: {{phone}}
- Check-in: {{check_in}}
- Check-out: {{check_out}}
- Ospiti: {{guests}}
- Appartamento: {{apartment}}
- Messaggio: {{message}}

Rispondi entro 24 ore per confermare la disponibilità.

---
Villa Olimpia - Capo Rizzuto
```

3. **Copia il Template ID** (es: `template_xxxxxxxxx`)

### Step 4: Ottieni Public Key
1. Vai su **Account** → **General**
2. **Copia la Public Key** (es: `xxxxxxxxxxxxxxxxxxxxx`)

### Step 5: Configura Variabili d'Ambiente
Crea file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxx
```

### Step 6: Test
1. Riavvia il server: `npm run dev`
2. Vai su `/contatti`
3. Compila e invia il form
4. Controlla la tua email!

---

## 🗺️ CONFIGURAZIONE GOOGLE MAPS

### Step 1: Crea Progetto Google Cloud
1. Vai su https://console.cloud.google.com/
2. Crea un nuovo progetto (o usa uno esistente)
3. Nome progetto: "Villa Olimpia Website"

### Step 2: Abilita Google Maps JavaScript API
1. Vai su **APIs & Services** → **Library**
2. Cerca "Maps JavaScript API"
3. Clicca **Enable**

### Step 3: Crea API Key
1. Vai su **APIs & Services** → **Credentials**
2. Clicca **Create Credentials** → **API Key**
3. **Copia l'API Key**

### Step 4: Restringi API Key (Sicurezza)
1. Clicca sull'API Key appena creata
2. **Application restrictions**: 
   - Scegli "HTTP referrers (web sites)"
   - Aggiungi: `localhost:3001/*` (per sviluppo)
   - Aggiungi: `villaolimpia.com/*` (per produzione)
3. **API restrictions**:
   - Scegli "Restrict key"
   - Seleziona solo "Maps JavaScript API"
4. Salva

### Step 5: Configura Variabile d'Ambiente
Aggiungi al file `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### Step 6: Test
1. Riavvia il server: `npm run dev`
2. Vai su `/location`
3. Dovresti vedere la mappa interattiva!

---

## 💰 COSTI

### EmailJS
- **Gratuito:** 200 email/mese
- **Piano a pagamento:** Da $15/mese per 1000 email

### Google Maps
- **Gratuito:** $200 crediti/mese (circa 28,000 caricamenti mappa)
- **Dopo il limite:** $7 per 1000 caricamenti aggiuntivi

**Nota:** Per un sito come Villa Olimpia, il piano gratuito è più che sufficiente!

---

## ✅ VERIFICA CONFIGURAZIONE

### EmailJS
```bash
# Controlla che le variabili siano caricate
echo $NEXT_PUBLIC_EMAILJS_SERVICE_ID
```

### Google Maps
```bash
# Controlla che la variabile sia caricata
echo $NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

---

## 🐛 TROUBLESHOOTING

### EmailJS non invia email
- ✅ Verifica che le variabili d'ambiente siano corrette
- ✅ Controlla che il Service ID sia collegato correttamente
- ✅ Verifica che il template abbia tutti i parametri corretti
- ✅ Controlla la console del browser per errori

### Google Maps non carica
- ✅ Verifica che l'API Key sia corretta
- ✅ Controlla che "Maps JavaScript API" sia abilitata
- ✅ Verifica le restrizioni dell'API Key
- ✅ Controlla la console del browser per errori
- ✅ Se vedi "This page can't load Google Maps correctly", controlla le restrizioni

---

## 📝 NOTE IMPORTANTI

1. **Non committare `.env.local`** - È già nel `.gitignore`
2. **Per produzione**, configura le variabili d'ambiente sulla piattaforma di hosting (Vercel, Netlify, etc.)
3. **EmailJS** funziona anche senza backend - perfetto per questo progetto!
4. **Google Maps** richiede HTTPS in produzione (Vercel/Netlify lo forniscono automaticamente)

---

**Tutto pronto!** 🎉
















