# 🚀 GUIDA MIGRAZIONE NETLIFY → VERCEL

## 📋 CHECKLIST COMPLETA

### ✅ STEP 1: Preparazione Account Vercel
- [ ] Vai su https://vercel.com
- [ ] Clicca "Sign Up" (in alto a destra)
- [ ] Scegli "Continue with GitHub"
- [ ] Autorizza Vercel ad accedere al tuo GitHub

### ✅ STEP 2: Importa Repository
- [ ] Clicca "Add New..." → "Project"
- [ ] Seleziona il repository "Villa-Olimpia-Luxury-Vacation"
- [ ] Vercel rileverà automaticamente Next.js

### ✅ STEP 3: Configurazione Progetto
- [ ] **Framework Preset**: Next.js (dovrebbe essere già selezionato)
- [ ] **Root Directory**: `./` (lasciare vuoto)
- [ ] **Build Command**: `npm run build` (dovrebbe essere già impostato)
- [ ] **Output Directory**: `.next` (dovrebbe essere già impostato)
- [ ] **Install Command**: `npm install` (dovrebbe essere già impostato)

### ✅ STEP 4: Variabili Ambiente
Aggiungi queste 4 variabili ambiente:

1. **NEXT_PUBLIC_EMAILJS_SERVICE_ID**
   - Valore: `service_bbp2k8u`

2. **NEXT_PUBLIC_EMAILJS_TEMPLATE_ID**
   - Valore: `template_2kw4d3d`

3. **NEXT_PUBLIC_EMAILJS_PUBLIC_KEY**
   - Valore: `JeiPqp4zNMlRw6ug9`

4. **NEXT_PUBLIC_GOOGLE_MAPS_API_KEY**
   - Valore: (il tuo Google Maps API key)

### ✅ STEP 5: Deploy
- [ ] Clicca "Deploy"
- [ ] Attendi il completamento del build (2-3 minuti)
- [ ] Verifica che il deploy sia completato con successo

### ✅ STEP 6: Verifica
- [ ] Apri il sito su Vercel (URL tipo: `villa-olimpia-luxury-vacation.vercel.app`)
- [ ] Verifica che il sito funzioni correttamente
- [ ] Testa il form di contatto (EmailJS)
- [ ] Testa la mappa (Google Maps)
- [ ] Verifica che non ci siano errori nella console

### ✅ STEP 7: Dominio Personalizzato (Opzionale)
- [ ] Vai su "Settings" → "Domains"
- [ ] Aggiungi il tuo dominio personalizzato (se lo hai)
- [ ] Segui le istruzioni per configurare DNS

---

## 🔧 CONFIGURAZIONE AUTOMATICA

Vercel rileva automaticamente Next.js, quindi la maggior parte della configurazione è già pronta!

---

## 📝 NOTE IMPORTANTI

### Variabili Ambiente
- ✅ Le variabili devono iniziare con `NEXT_PUBLIC_` per essere accessibili nel browser
- ✅ Dopo aver aggiunto le variabili, Vercel farà un nuovo deploy automaticamente

### Build
- ✅ Vercel ottimizza automaticamente i build Next.js
- ✅ I build sono generalmente più veloci su Vercel rispetto a Netlify

### Deploy Automatici
- ✅ Ogni push su `main` triggera automaticamente un nuovo deploy
- ✅ Vercel crea anche preview deployments per ogni PR

---

## 🆘 TROUBLESHOOTING

### Build Fallisce
- Verifica che tutte le variabili ambiente siano configurate
- Controlla i log di build su Vercel dashboard

### Variabili Non Funzionano
- Assicurati che inizino con `NEXT_PUBLIC_`
- Verifica che siano state aggiunte correttamente
- Riavvia il deploy dopo aver aggiunto le variabili

### Sito Non Funziona
- Verifica i log su Vercel dashboard
- Controlla la console del browser per errori
- Verifica che le API keys siano corrette

---

## ✅ VANTAGGI VERCEL

- ✅ **Gratuito** per progetti come il tuo
- ✅ **Build più veloci** (ottimizzato per Next.js)
- ✅ **Deploy automatici** da GitHub
- ✅ **Preview deployments** per ogni PR
- ✅ **Analytics incluse**
- ✅ **Edge Functions** incluse
- ✅ **CDN globale** per performance ottimali

---

## 🎯 PROSSIMI PASSI DOPO MIGRAZIONE

1. ✅ Verifica funzionamento completo
2. ✅ Testa tutte le funzionalità
3. ✅ Configura dominio personalizzato (se necessario)
4. ✅ Rimuovi deploy da Netlify (opzionale, per evitare confusione)

---

**Pronto per iniziare? Segui gli step sopra!** 🚀

