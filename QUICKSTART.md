# 🚀 QUICKSTART - Villa Olimpia Website

## ⚡ Setup in 30 Secondi

### 1. Installa Dipendenze

```bash
npm install
```

### 2. Configura Variabili Ambiente

Crea `.env.local` con:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### 3. Avvia Development Server

```bash
npm run dev
```

Apri [http://localhost:3001](http://localhost:3001)

## 📦 Struttura Progetto

```
ViviCalabria.com/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── appartamenti/      # Pagine appartamenti
│   ├── location/          # Pagina location
│   └── ...
├── components/             # Componenti React
├── data/                   # Dati appartamenti
├── lib/                    # Utilities
└── public/                 # File statici
```

## 🎯 Comandi Principali

```bash
# Development
npm run dev              # Avvia server dev (porta 3001)
npm run dev:clean        # Kill processi e avvia dev

# Build
npm run build            # Build produzione
npm start                # Avvia server produzione

# Linting
npm run lint             # Verifica codice
```

## 📝 Integrazione Contenuti

### Importa Contenuti Appartamenti

```bash
node scripts/read-and-integrate-content.js
```

Legge da: `~/Desktop/villa_olimpia_final/`

## 🔧 Configurazione

### EmailJS Setup

Vedi: `SETUP_EMAILJS_GOOGLEMAPS.md`

### Google Maps Setup

Vedi: `SETUP_GOOGLE_MAPS_STEP_BY_STEP.md`

## 📚 Documentazione

- **Guida Completa**: `README.md`
- **Integrazione Contenuti**: `INTEGRAZIONE_CONTENUTI.md`
- **Roadmap**: `ROADMAP_OPERATIVA.md`
- **Analisi Progetto**: `ANALISI_PROGETTO.md`

## 🐛 Troubleshooting

### Porta già in uso

```bash
npm run dev:clean
```

### Errori Build

```bash
npm run build
```

### Contenuti non aggiornati

```bash
node scripts/read-and-integrate-content.js
```

## 🚀 Deploy

### Netlify

```bash
# Push su GitHub
git push origin main

# Netlify deploy automatico
```

Vedi: `DEPLOY_AUTOMATICO_NETLIFY.md`

## ✅ Checklist Setup

- [ ] Dipendenze installate
- [ ] `.env.local` configurato
- [ ] Server dev funzionante
- [ ] Contenuti importati
- [ ] Build senza errori

---

**Pronto!** Inizia a sviluppare 🎉

