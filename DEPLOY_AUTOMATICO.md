# 🚀 DEPLOY AUTOMATICO - Istruzioni Rapide

## ✅ CODICE PUSHATO SU GITHUB

✅ **Completato!**
- Repository: `Villa-Olimpia-Luxury-Vacation`
- Branch: `main`
- Commit: "feat: Integrazione EmailJS e Google Maps"

---

## 🎯 DEPLOY SU VERCEL (5 MINUTI)

### Metodo 1: Dashboard Vercel (Consigliato - Più Semplice)

1. **Vai su:** https://vercel.com/new
2. **Accedi con GitHub** (stesso account del repository)
3. **Importa Progetto:**
   - Clicca "Import" accanto a `Villa-Olimpia-Luxury-Vacation`
   - Oppure cerca il repository e clicca "Import"

4. **Configurazione (IMPORTANTE - PRIMA DI DEPLOY):**
   - Clicca su "Environment Variables"
   - Aggiungi queste 4 variabili:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_bbp2k8u
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_2kw4d3d
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = JeiPqp4zNMlRw6ug9
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
   ```

   **Per ogni variabile:**
   - Clicca "Add"
   - Nome: (es. `NEXT_PUBLIC_EMAILJS_SERVICE_ID`)
   - Valore: (es. `service_bbp2k8u`)
   - Seleziona: ✅ Production, ✅ Preview, ✅ Development
   - Clicca "Save"

5. **Deploy:**
   - Clicca "Deploy"
   - Attendi 2-3 minuti
   - ✅ Il sito sarà live!

---

## 🗺️ CONFIGURARE GOOGLE MAPS (DOPO DEPLOY)

1. **Vai su:** https://console.cloud.google.com/apis/credentials
2. **Clicca sulla tua API Key** (`AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`)
3. **Restrizioni Applicazione:**
   - Sezione "Riferimenti HTTP (siti web)"
   - Clicca "Aggiungi elemento"
   - Aggiungi: `*.vercel.app/*`
   - Se hai un dominio personalizzato, aggiungi anche: `tuodominio.com/*`
   - Clicca "Salva"

---

## ✅ TEST FINALE

Dopo il deploy, testa:

1. **Form Contatti:**
   - Vai su: `https://tuosito.vercel.app/contatti`
   - Compila e invia
   - Verifica email in `Villaolimpiacaporizzuto@gmail.com`

2. **Google Maps:**
   - Vai su: `https://tuosito.vercel.app/location`
   - Verifica mappa interattiva
   - Clicca marker → pannello laterale

---

## 📋 VARIABILI AMBIENTE (Copia e Incolla)

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bbp2k8u
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_2kw4d3d
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JeiPqp4zNMlRw6ug9
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
```

---

**Tutto pronto! Vai su Vercel e fai il deploy!** 🚀

