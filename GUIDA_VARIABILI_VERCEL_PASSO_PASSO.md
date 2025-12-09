# 🚀 GUIDA PASSO-PASSO: Aggiungi le 3 Variabili su Vercel

## ⚡ VELOCE (2 minuti)

### VARIABILE 1: Template ID

1. **Nella sezione "Add New Environment Variable"** (quella che vedi nella schermata):
   - Nel campo **"Key"**: incolla `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - Nel campo **"Value"**: incolla `template_2kw4d3d`
   - Nel dropdown **"Environments"**: seleziona **"All Environments"** (o clicca e seleziona Production, Preview, Development)
   - Clicca **"Save"** (pulsante grigio in basso a destra)

### VARIABILE 2: Public Key

1. Dopo aver salvato la prima variabile, vedrai di nuovo i campi vuoti
2. Nel campo **"Key"**: incolla `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Nel campo **"Value"**: incolla `JeiPqp4zNMlRw6ug9`
4. Nel dropdown **"Environments"**: seleziona **"All Environments"**
5. Clicca **"Save"**

### VARIABILE 3: Google Maps API Key

1. Dopo aver salvato la seconda variabile, vedrai di nuovo i campi vuoti
2. Nel campo **"Key"**: incolla `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
3. Nel campo **"Value"**: incolla `AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`
4. Nel dropdown **"Environments"**: seleziona **"All Environments"**
5. Clicca **"Save"**

---

## ✅ VERIFICA

Dopo aver aggiunto tutte e 3 le variabili, nella lista "Existing Environment Variables" dovresti vedere:

1. ✅ `NEXT_PUBLIC_EMAILJS_SERVICE_ID` (già presente)
2. ✅ `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (appena aggiunta)
3. ✅ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (appena aggiunta)
4. ✅ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (appena aggiunta)

---

## 🔄 REDEPLOY (IMPORTANTE!)

**Le variabili vengono incluse solo nei nuovi deploy!**

1. Vai su **"Deployments"** (menu in alto)
2. Trova l'ultimo deploy
3. Clicca i **3 puntini** (⋮) a destra del deploy
4. Clicca **"Redeploy"**
5. Seleziona **"Production"** (o lascia il default)
6. Clicca **"Redeploy"**
7. Attendi 2-3 minuti

---

## 🎯 RISULTATO

Dopo il redeploy:
- ✅ Mappa Google Maps funzionerà
- ✅ Form contatti funzionerà
- ✅ Nessun errore nella console

---

## 🆘 SE NON FUNZIONA

1. Verifica che tutte e 4 le variabili siano presenti nella lista
2. Verifica che abbiano tutte "All Environments" selezionato
3. Verifica che i valori siano esatti (copia-incolla, senza spazi extra)
4. **Fai un Redeploy** (le variabili vengono incluse solo nei nuovi deploy!)
5. Attendi che il deploy sia completato (stato "Ready")
6. Testa in modalità incognito (per evitare cache)

---

## 📋 VALORI DA COPIARE

**Variabile 1:**
```
Key: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: template_2kw4d3d
```

**Variabile 2:**
```
Key: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: JeiPqp4zNMlRw6ug9
```

**Variabile 3:**
```
Key: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
Value: AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
```

