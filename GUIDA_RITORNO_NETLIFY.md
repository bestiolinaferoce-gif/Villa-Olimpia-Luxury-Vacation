# 🔄 GUIDA RITORNO A NETLIFY (Se Necessario)

## ⚠️ NOTA IMPORTANTE

**Il codice è stato pulito e ottimizzato per Vercel. Prima di tornare a Netlify, prova a configurare le variabili ambiente su Vercel seguendo `VERCEL_SETUP.md`.**

Se dopo aver configurato le variabili su Vercel il sito non funziona ancora, questa guida ti aiuterà a tornare a Netlify.

---

## 📋 VANTAGGI/SVANTAGGI NETLIFY vs VERCEL

### Netlify
**Vantaggi:**
- ✅ Già conosci la piattaforma
- ✅ Potresti avere già le variabili configurate
- ✅ Più controllo su build settings

**Svantaggi:**
- ❌ Limiti free tier più restrittivi (build minutes, bandwidth)
- ❌ Potrebbe essere stato sospeso per superamento limiti
- ❌ Meno ottimizzato per Next.js rispetto a Vercel

### Vercel
**Vantaggi:**
- ✅ Creato dagli stessi sviluppatori di Next.js (ottimizzazione perfetta)
- ✅ Free tier più generoso
- ✅ Deploy più veloci
- ✅ Migliore integrazione GitHub

**Svantaggi:**
- ❌ Devi riconfigurare le variabili ambiente
- ❌ Nuova piattaforma da imparare

---

## 🔄 PROCEDURA RITORNO A NETLIFY

### STEP 1: Verifica Account Netlify

1. Vai su: **https://app.netlify.com/**
2. Login con le tue credenziali
3. Verifica che il sito sia ancora presente o crea un nuovo sito

### STEP 2: Connetti Repository GitHub

1. Netlify Dashboard → **"Add new site"** → **"Import an existing project"**
2. Seleziona **GitHub**
3. Autorizza Netlify ad accedere al repository
4. Seleziona: **`Villa-Olimpia-Luxury-Vacation`**
5. Clicca **"Import"**

### STEP 3: Configura Build Settings

**Build command:**
```
npm run build
```

**Publish directory:**
```
.next
```

**Node version:**
```
20
```

### STEP 4: Configura Variabili Ambiente

Netlify Dashboard → **Site Settings** → **Build & Deploy** → **Environment**

Aggiungi queste variabili:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bbp2k8u
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_2kw4d3d
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JeiPqp4zNMlRw6ug9
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
```

### STEP 5: Crea File `netlify.toml`

Crea un file `netlify.toml` nella root del progetto:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### STEP 6: Deploy

1. Netlify rileverà automaticamente il push su GitHub
2. Oppure vai su **Deploys** → **Trigger deploy** → **Deploy site**

---

## 💰 COSTI NETLIFY

### Free Tier
- ✅ 300 build minutes/mese
- ✅ 100 GB bandwidth/mese
- ✅ 1 sito

### Pro Plan ($19/mese)
- ✅ 1000 build minutes/mese
- ✅ 1 TB bandwidth/mese
- ✅ Siti illimitati
- ✅ Form handling avanzato

---

## ⚠️ SE NETLIFY TI HA SOSPESO

**Possibili cause:**
1. Superamento build minutes mensili
2. Superamento bandwidth mensile
3. Violazione termini di servizio

**Soluzioni:**
1. **Upgrade a Pro** ($19/mese)
2. **Ottimizza build** (riduci frequenza deploy)
3. **Usa Vercel** (free tier più generoso)

---

## 🎯 RACCOMANDAZIONE

**Prima di tornare a Netlify:**

1. ✅ Prova a configurare le variabili su Vercel (vedi `VERCEL_SETUP.md`)
2. ✅ Fai un redeploy su Vercel
3. ✅ Testa form e mappa
4. ✅ Se funziona → Resta su Vercel (migliore per Next.js)
5. ✅ Se non funziona → Segui questa guida per tornare a Netlify

---

## 📞 SUPPORTO

Se hai bisogno di aiuto per:
- Configurare variabili su Vercel → Vedi `VERCEL_SETUP.md`
- Tornare a Netlify → Segui questa guida
- Altri problemi → Contattami con screenshot

---

**✅ Il codice è pulito e funzionante su entrambe le piattaforme!**

