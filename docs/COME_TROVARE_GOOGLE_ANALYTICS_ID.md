# 🔍 Come Trovare il Google Analytics Measurement ID

## Metodo 1: Verifica se hai già Google Analytics

### Step 1: Accedi a Google Analytics
1. Vai su: https://analytics.google.com
2. Accedi con il tuo account Google (quello che usi per Gmail, Google Tag Manager, ecc.)

### Step 2: Controlla se hai proprietà esistenti
- Se vedi una lista di proprietà/siti, **hai già Google Analytics** ✅
- Se vedi una schermata vuota o "Crea proprietà", **non hai ancora Google Analytics** ❌

---

## Metodo 2: Trovare il Measurement ID (se hai già Google Analytics)

### Opzione A: Dalla Dashboard Principale

1. Vai su: https://analytics.google.com
2. Seleziona la proprietà del tuo sito (es. "Villa Olimpia" o il nome del tuo sito)
3. In basso a sinistra, vedrai un'icona con **⚙️ Admin** (Impostazioni)
4. Clicca su **Admin**
5. Nella colonna centrale, cerca **Data Streams** (Flussi di dati)
6. Clicca su **Data Streams**
7. Seleziona il flusso web del tuo sito
8. Nella parte superiore della pagina vedrai:
   - **Measurement ID**: `G-XXXXXXXXXX` ← **QUESTO È IL TUO ID!**

### Opzione B: Dalla Barra Superiore

1. Vai su: https://analytics.google.com
2. Seleziona la tua proprietà
3. Guarda in alto a destra, accanto al nome della proprietà
4. Dovresti vedere un codice tipo `G-XXXXXXXXXX` ← **QUESTO È IL TUO ID!**

### Opzione C: Dalle Impostazioni della Proprietà

1. Vai su: https://analytics.google.com
2. Admin → **Property Settings** (Impostazioni proprietà)
3. Cerca la sezione **Property ID** o **Measurement ID**
4. Dovresti vedere `G-XXXXXXXXXX`

---

## Metodo 3: Creare Google Analytics (se non ce l'hai)

### Step 1: Crea un Account
1. Vai su: https://analytics.google.com
2. Clicca su **Inizia a misurare** o **Start measuring**
3. Inserisci un nome per il tuo account (es. "Villa Olimpia")
4. Clicca **Avanti**

### Step 2: Crea una Proprietà
1. Inserisci un nome per la proprietà (es. "Villa Olimpia Website")
2. Seleziona il fuso orario (es. "Rome, Italy")
3. Seleziona la valuta (es. "Euro (€)")
4. Clicca **Avanti**

### Step 3: Configura il Flusso di Dati Web
1. Seleziona **Web** come tipo di flusso
2. Inserisci l'URL del tuo sito: `https://villaolimpiacaporizzuto.com`
3. Inserisci un nome per il flusso (es. "Villa Olimpia Website")
4. Clicca **Crea flusso**

### Step 4: Copia il Measurement ID
1. Dopo aver creato il flusso, vedrai una pagina con le informazioni
2. In alto vedrai: **Measurement ID**: `G-XXXXXXXXXX` ← **COPIA QUESTO!**
3. Questo è il codice che devi usare per configurare il sito

---

## Metodo 4: Verifica tramite Google Tag Manager

Se usi Google Tag Manager, puoi verificare se GA4 è già configurato:

1. Vai su: https://tagmanager.google.com
2. Seleziona il tuo container (GTM-K5NQGHBD)
3. Vai su **Tags** (Tag)
4. Cerca tag di tipo **Google Analytics: GA4 Configuration**
5. Se lo trovi, clicca e vedrai il **Measurement ID** nel tag

---

## 📋 Formato del Measurement ID

Il Measurement ID ha sempre questo formato:
- Inizia con `G-`
- Seguito da 10 caratteri alfanumerici
- Esempio: `G-ABC123XYZ4` o `G-1234567890`

**⚠️ ATTENZIONE:**
- Non confondere con il **Property ID** (solo numeri, tipo `123456789`)
- Non confondere con il **Tracking ID** di Universal Analytics (inizia con `UA-`, è deprecato)
- Il **Measurement ID** di GA4 inizia sempre con `G-`

---

## 🎯 Cosa Fare Dopo Aver Trovato l'ID

Una volta che hai il Measurement ID (es. `G-ABC123XYZ4`):

### Opzione 1: Configurazione Automatica (Consigliato)
Dimmi il tuo Measurement ID e lo configuro automaticamente su Vercel.

### Opzione 2: Configurazione Manuale
1. Vai su: https://vercel.com/dashboard
2. Seleziona il progetto: **villa-olimpia-luxury-vacation**
3. Vai su: **Settings** → **Environment Variables**
4. Aggiungi:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Il tuo Measurement ID (es. `G-ABC123XYZ4`)
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
5. Clicca **Save**
6. Fai un **Redeploy**

---

## ❓ Domande Frequenti

### "Non vedo nessuna proprietà in Google Analytics"
→ Significa che non hai ancora creato Google Analytics. Segui il **Metodo 3** per crearne uno.

### "Vedo più proprietà, quale devo usare?"
→ Usa quella che corrisponde al tuo sito web. Se non sei sicuro, creane una nuova seguendo il **Metodo 3**.

### "Ho trovato un codice che inizia con UA-"
→ Questo è Universal Analytics (deprecato). Devi creare una nuova proprietà GA4 seguendo il **Metodo 3**.

### "Il Measurement ID è già configurato in Google Tag Manager?"
→ Se hai già configurato GA4 in GTM, puoi usare quello stesso Measurement ID. Non serve configurarlo due volte, ma puoi farlo per avere tracking diretto oltre a quello tramite GTM.

---

## 🔗 Link Utili

- **Google Analytics**: https://analytics.google.com
- **Google Tag Manager**: https://tagmanager.google.com
- **Dashboard Vercel**: https://vercel.com/dashboard

---

**Hai trovato il tuo Measurement ID?** Incollalo qui e lo configuro automaticamente! 🚀
