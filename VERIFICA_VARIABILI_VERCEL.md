# 🔍 VERIFICA VARIABILI AMBIENTE SU VERCEL

## ✅ HAI GIÀ AGGIUNTO LE VARIABILI?

Se hai già aggiunto le variabili ambiente su Vercel ma la mappa non funziona ancora, segui questa checklist:

---

## 📋 CHECKLIST VERIFICA

### 1. **Verifica che le variabili siano presenti**

Vai su Vercel → Settings → Environment Variables e verifica che ci siano **TUTTE E 4** queste variabili:

- ✅ `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_bbp2k8u`
- ✅ `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_2kw4d3d`
- ✅ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `JeiPqp4zNMlRw6ug9`
- ✅ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = `AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`

### 2. **Verifica che abbiano "All Environments" selezionato**

Ogni variabile deve avere:
- ✅ Production
- ✅ Preview  
- ✅ Development

(O semplicemente "All Environments")

### 3. **HAI FATTO UN REDEPLOY?**

**IMPORTANTE:** Le variabili ambiente vengono incluse **SOLO nei nuovi deploy!**

Se hai aggiunto le variabili DOPO l'ultimo deploy, devi fare un **Redeploy**:

1. Vai su **Deployments**
2. Clicca i **3 puntini** (⋮) sull'ultimo deploy
3. Clicca **"Redeploy"**
4. Attendi 2-3 minuti

### 4. **Verifica il deploy**

Dopo il redeploy:
1. Controlla che il deploy sia completato (stato "Ready")
2. Apri il sito in **modalità incognito** (per evitare cache)
3. Vai sulla pagina `/location`
4. Controlla se vedi il componente di debug in basso a destra

---

## 🐛 DEBUG COMPONENT

Ho aggiunto un componente di debug temporaneo che mostra:
- Se l'API key è presente
- La lunghezza dell'API key
- Lo stato della configurazione

**Dove trovarlo:**
- Vai su `/location` (pagina della mappa)
- Guarda in basso a destra: vedrai un box nero con le info di debug

**Cosa significa:**
- ✅ **Verde** = Tutto OK, l'API key è presente
- ❌ **Rosso** = L'API key non è presente o non è valida

---

## 🔧 POSSIBILI PROBLEMI

### Problema 1: "API Key NON TROVATA" nel debug

**Causa:** La variabile non è stata aggiunta correttamente o non è stato fatto un redeploy.

**Soluzione:**
1. Verifica che la variabile esista su Vercel
2. Verifica che abbia "All Environments" selezionato
3. **Fai un Redeploy**
4. Attendi che il deploy sia completato
5. Ricarica la pagina in incognito

### Problema 2: "API Key presente" ma la mappa non si carica

**Possibili cause:**
1. **API Key non valida o scaduta**
   - Verifica su Google Cloud Console che l'API key sia attiva
   - Verifica che le API necessarie siano abilitate (Maps JavaScript API)

2. **Restrizioni API Key**
   - Verifica che il dominio Vercel sia autorizzato
   - Vai su Google Cloud Console → Credentials → La tua API key
   - Verifica "Application restrictions" e "API restrictions"

3. **Problemi di rete**
   - Apri la console del browser (F12)
   - Cerca errori nella tab "Console" o "Network"

**Soluzione:**
1. Apri la console del browser (F12)
2. Vai su tab "Console"
3. Cerca errori che iniziano con "Google Maps" o "LoadScript"
4. Copia l'errore e inviamelo

### Problema 3: La mappa si carica ma è vuota/grigia

**Causa:** Problema con le API di Google Maps o restrizioni.

**Soluzione:**
1. Verifica su Google Cloud Console che "Maps JavaScript API" sia abilitata
2. Verifica che non ci siano restrizioni IP troppo restrittive
3. Controlla la console del browser per errori specifici

---

## 📝 VERIFICA RAPIDA

### Test 1: Verifica variabili su Vercel
```
✅ Vai su Vercel → Settings → Environment Variables
✅ Conta quante variabili ci sono (devono essere 4)
✅ Verifica che tutte abbiano "All Environments"
```

### Test 2: Verifica deploy
```
✅ Vai su Deployments
✅ Controlla l'ultimo deploy: quando è stato fatto?
✅ Se hai aggiunto le variabili DOPO l'ultimo deploy → Fai Redeploy
```

### Test 3: Verifica sul sito
```
✅ Apri il sito in incognito
✅ Vai su /location
✅ Guarda in basso a destra: vedi il box di debug?
✅ Cosa dice? Verde o Rosso?
```

---

## 🆘 SE NULLA FUNZIONA

Se dopo aver seguito tutti i passaggi nulla funziona:

1. **Screenshot del debug component** (se visibile)
2. **Screenshot delle variabili ambiente su Vercel**
3. **Screenshot degli errori nella console del browser** (F12 → Console)
4. **URL del sito Vercel**

Con queste informazioni posso aiutarti a risolvere il problema specifico.

---

## 💡 NOTA IMPORTANTE

**Le variabili ambiente vengono incluse SOLO nei nuovi deploy!**

Se aggiungi o modifichi una variabile ambiente su Vercel, devi SEMPRE fare un **Redeploy** per applicare le modifiche.

