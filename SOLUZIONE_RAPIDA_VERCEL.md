# 🚀 SOLUZIONE RAPIDA - Variabili Ambiente Vercel

## ⚡ METODO AUTOMATICO (CLI)

Ho creato uno script che aggiunge le variabili automaticamente. Esegui questi comandi:

### Step 1: Login Vercel (una volta sola)

```bash
npx vercel login
```

Ti aprirà il browser per autorizzare. Dopo il login, torna qui.

### Step 2: Aggiungi Variabili Automaticamente

```bash
# EmailJS Service ID
echo "service_bbp2k8u" | npx vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
echo "service_bbp2k8u" | npx vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID preview
echo "service_bbp2k8u" | npx vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID development

# EmailJS Template ID
echo "template_2kw4d3d" | npx vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production
echo "template_2kw4d3d" | npx vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID preview
echo "template_2kw4d3d" | npx vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID development

# EmailJS Public Key
echo "JeiPqp4zNMlRw6ug9" | npx vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production
echo "JeiPqp4zNMlRw6ug9" | npx vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY preview
echo "JeiPqp4zNMlRw6ug9" | npx vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY development
```

### Step 3: Google Maps API Key

**Dimmi il tuo Google Maps API Key** e lo aggiungo automaticamente, oppure esegui:

```bash
echo "TUO_GOOGLE_MAPS_KEY" | npx vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY production
echo "TUO_GOOGLE_MAPS_KEY" | npx vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY preview
echo "TUO_GOOGLE_MAPS_KEY" | npx vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY development
```

---

## 📋 METODO ALTERNATIVO: File .env

Se la CLI non funziona, posso creare un file `.env` che puoi importare direttamente su Vercel.

**Dimmi quale metodo preferisci!**

