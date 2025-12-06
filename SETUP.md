# 🏗️ Setup Guide - Villa Olimpia

## 📋 Prerequisiti

- Node.js 18+ installato
- npm o yarn
- Git (opzionale)

## 🚀 Installazione Rapida

```bash
# 1. Naviga nella directory del progetto
cd /Users/francesconigro/Desktop/VillaOlimpia

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

## 📦 Dipendenze Principali

- **Next.js 14** - Framework React
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Styling
- **shadcn/ui** - Componenti UI
- **Framer Motion** - Animazioni
- **React Hook Form** - Gestione form
- **Zod** - Validazione

## 🔧 Configurazione

### Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=+393491234567
NEXT_PUBLIC_EMAIL=info@villaolimpia.com
NEXT_PUBLIC_WHATSAPP=393491234567
```

### Personalizzazione

1. **Immagini**: Sostituisci i placeholder emoji in `lib/data.ts` con immagini reali
2. **Colori**: Modifica la palette in `tailwind.config.ts` e `app/globals.css`
3. **Contenuti**: Aggiorna i testi in `lib/data.ts` e nelle pagine
4. **Contatti**: Aggiorna numeri e email in `lib/constants.ts`

## 🗺️ Integrazione Mappa

Per integrare Google Maps:

1. Ottieni una API key da [Google Cloud Console](https://console.cloud.google.com/)
2. Aggiungi al `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
   ```
3. Installa il pacchetto:
   ```bash
   npm install @react-google-maps/api
   ```
4. Aggiorna `components/map-component.tsx` con il componente reale

## 📅 Sistema di Prenotazione

Il calendario è attualmente solo UI. Per integrare un sistema di booking:

**Opzioni:**
1. **Calendly** - Integrazione semplice
2. **Booking.com API** - Se hai un account
3. **Custom Backend** - Con database per gestire prenotazioni
4. **Stripe** - Per pagamenti online

## 📧 Form di Contatto

Il form attualmente logga i dati in console. Per inviare email:

**Opzioni:**
1. **Resend** - Servizio email moderno
2. **SendGrid** - Soluzione enterprise
3. **Nodemailer** - Con SMTP
4. **API Route** - Crea `/app/api/contact/route.ts`

Esempio con Resend:
```bash
npm install resend
```

## 🎨 Personalizzazione Design

### Colori
Modifica in `tailwind.config.ts`:
```typescript
ocean: {
  DEFAULT: "hsl(200, 100%, 40%)",
  // ...
}
```

### Font
I font sono configurati in `app/layout.tsx`. Per cambiarli:
1. Scegli un font da [Google Fonts](https://fonts.google.com/)
2. Importa in `layout.tsx`
3. Aggiorna le variabili CSS

## 🚀 Deploy

### Vercel (Consigliato)

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy la cartella .next
```

### Altri Provider

Il progetto è compatibile con qualsiasi provider che supporta Next.js:
- AWS Amplify
- Railway
- DigitalOcean
- Self-hosted

## 📊 Performance

### Ottimizzazioni Implementate

- ✅ Image optimization con next/image
- ✅ Code splitting automatico
- ✅ Font optimization
- ✅ Lazy loading
- ✅ Static generation dove possibile

### Lighthouse Score

Per migliorare ulteriormente:
1. Aggiungi immagini reali ottimizzate
2. Implementa Service Worker per PWA
3. Aggiungi caching strategico
4. Minimizza JavaScript bundle

## 🔍 SEO

### Già Implementato

- ✅ Meta tags dinamici
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Schema markup
- ✅ Open Graph
- ✅ Canonical URLs

### Da Fare

1. Aggiungi Google Search Console
2. Configura Google Analytics
3. Crea contenuti blog (opzionale)
4. Aggiungi structured data per recensioni

## 🐛 Troubleshooting

### Errori Comuni

**"Module not found"**
```bash
npm install
```

**"Port already in use"**
```bash
# Cambia porta
npm run dev -- -p 3001
```

**"TypeScript errors"**
```bash
# Verifica tsconfig.json
npm run build
```

## 📚 Risorse Utili

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

## ✅ Checklist Pre-Produzione

- [ ] Sostituire immagini placeholder
- [ ] Configurare variabili d'ambiente
- [ ] Integrare sistema di booking
- [ ] Configurare email service
- [ ] Aggiungere Google Analytics
- [ ] Testare su dispositivi mobili
- [ ] Verificare tutti i link
- [ ] Testare form di contatto
- [ ] Ottimizzare immagini
- [ ] Configurare dominio
- [ ] Setup SSL certificate
- [ ] Backup strategy

## 🆘 Supporto

Per domande o problemi, consulta:
- README.md per overview generale
- Documentazione Next.js
- Issues su GitHub (se pubblico)

---

**Buon lavoro! 🎉**

