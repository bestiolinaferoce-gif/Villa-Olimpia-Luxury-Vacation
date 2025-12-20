# 🔧 FIX MAPPA NETLIFY - Variabile Ambiente Mancante

## 🔍 PROBLEMA IDENTIFICATO

La mappa non si carica in produzione perché la variabile ambiente `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` non è configurata su Netlify.

**Sintomo:** Vedi il placeholder "Configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local"

---

## ✅ SOLUZIONE (2 MINUTI)

### Step 1: Vai su Netlify Dashboard
1. Vai su: https://app.netlify.com
2. Accedi con il tuo account
3. Trova il progetto "Villa-Olimpia-Luxury-Vacation" (o il nome del tuo progetto)

### Step 2: Aggiungi Variabile Ambiente
1. Clicca sul progetto
2. Vai su **"Site configuration"** (o "Site settings")
3. Clicca su **"Environment variables"** (nel menu laterale)
4. Clicca **"Add a variable"**

5. **Aggiungi questa variabile:**
   - **Key:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - **Value:** `AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`
   - **Scopes:** Seleziona tutte le opzioni:
     - ✅ Production
     - ✅ Deploy previews
     - ✅ Branch deploys
   - Clicca **"Save"**

### Step 3: Redeploy
1. Vai su **"Deploys"** (nel menu laterale)
2. Clicca sui **3 puntini (...)** dell'ultimo deploy
3. Seleziona **"Trigger deploy"** → **"Clear cache and deploy site"**
4. Attendi 2-3 minuti per il deploy

### Step 4: Configura Restrizioni Google Maps
1. Vai su: https://console.cloud.google.com/apis/credentials
2. Clicca sulla tua API Key (`AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`)
3. **Restrizioni Applicazione:**
   - Sezione "Riferimenti HTTP (siti web)"
   - Clicca "Aggiungi elemento"
   - Aggiungi: `*.netlify.app/*`
   - Se hai un dominio personalizzato, aggiungi anche: `tuodominio.com/*`
   - Clicca "Salva"

---

## ✅ DOPO IL REDEPLOY

1. Ricarica la pagina `/location`
2. La mappa dovrebbe caricarsi correttamente
3. Dovresti vedere:
   - ✅ Mappa interattiva Google Maps
   - ✅ Marker su Villa Olimpia
   - ✅ Pannello laterale quando clicchi sul marker

---

## 📋 VARIABILE DA AGGIUNGERE

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
```

---

## 🐛 SE ANCORA NON FUNZIONA

### Errore: "This page can't load Google Maps correctly"
**Soluzione:**
1. Verifica che la variabile ambiente sia configurata correttamente
2. Verifica che `*.netlify.app/*` sia nelle restrizioni HTTP referrers
3. Redeploy dopo aver modificato le restrizioni

### La mappa mostra ancora il placeholder
**Soluzione:**
1. Verifica che il redeploy sia completato
2. Pulisci la cache del browser (Ctrl+Shift+R o Cmd+Shift+R)
3. Controlla la console del browser (F12) per errori

---

## ⚠️ IMPORTANTE

- **Aggiungi la variabile ambiente PRIMA del redeploy**
- **Redeploy DOPO aver aggiunto la variabile**
- **Aggiorna le restrizioni Google Maps con il dominio Netlify**

---

**Aggiungi la variabile ambiente su Netlify e fai un redeploy!** 🚀















