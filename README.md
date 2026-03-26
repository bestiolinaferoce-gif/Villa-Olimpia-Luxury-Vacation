# Villa Olimpia - Luxury Vacation Rentals

Sito web professionale per Villa Olimpia, luxury vacation rentals in Calabria, Italia.

## 🚀 Tecnologie

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipizzazione statica strict mode
- **Tailwind CSS** - Styling utility-first
- **shadcn/ui** - Componenti UI accessibili
- **Framer Motion** - Animazioni fluide
- **React Hook Form** - Gestione form con validazione
- **Zod** - Validazione schema

## 📦 Installazione

```bash
npm install
```

## 🛠️ Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue il linter
- `npm run health-check` - Report rapido sullo stato del progetto
- `npm run quality:quick` - Controlli ferrei su repo, SEO, appartamenti e copy
- `npm run quality:gate` - Quality gate completo prima di ogni deploy

## 📁 Struttura del Progetto

```
.
├── app/                    # App Router di Next.js
│   ├── appartamenti/      # Pagine appartamenti
│   ├── location/          # Pagina location
│   ├── servizi/           # Pagina servizi
│   ├── contatti/          # Pagina contatti
│   ├── layout.tsx         # Layout principale
│   ├── page.tsx           # Homepage
│   ├── globals.css         # Stili globali
│   ├── sitemap.ts          # Sitemap automatica
│   └── robots.ts           # Robots.txt
├── components/            # Componenti React
│   ├── ui/                # Componenti shadcn/ui
│   ├── header.tsx         # Header con navigazione
│   ├── footer.tsx         # Footer
│   ├── hero-section.tsx   # Hero section homepage
│   ├── apartment-card.tsx # Card appartamento
│   ├── gallery.tsx        # Gallery immagini
│   ├── booking-form.tsx   # Form prenotazione
│   └── cookie-banner.tsx  # Cookie banner GDPR
├── lib/                   # Utility e data
│   ├── utils.ts           # Funzioni utility
│   └── data.ts            # Dati appartamenti
└── public/                # File statici
```

## 🎨 Design

- **Palette Colori**: Blu mare, bianco, oro/beige
- **Typography**: Inter + Playfair Display
- **Responsive**: Mobile-first approach
- **Dark Mode**: Supporto completo

## 🔍 SEO

- Meta tags dinamici per ogni pagina
- Sitemap.xml automatica
- Schema markup JSON-LD
- Robots.txt configurato
- Open Graph e Twitter Cards
- Canonical URLs

## ✨ Features

- ✅ Hero section immersiva con animazioni
- ✅ Grid 9 appartamenti con card interattive
- ✅ Pagine dettaglio per ogni appartamento
- ✅ Gallery immagini con lightbox
- ✅ Form prenotazione multi-step
- ✅ Mappa location (placeholder per integrazione)
- ✅ Calendario disponibilità (UI only)
- ✅ Cookie banner GDPR compliant
- ✅ Integrazione WhatsApp
- ✅ Design responsive e mobile-first
- ✅ Animazioni Framer Motion
- ✅ Performance ottimizzate

## 📝 Note

- Il calendario disponibilità è solo UI - integrare con sistema di booking
- La mappa è un placeholder - integrare con Google Maps o Mapbox
- Le immagini sono placeholder emoji - sostituire con immagini reali
- Configurare le variabili d'ambiente per produzione

## 🚀 Deploy

Il progetto è pronto per il deploy su Vercel, Netlify o qualsiasi piattaforma che supporta Next.js.

```bash
npm run build
```

## 📄 Licenza

Tutti i diritti riservati - Villa Olimpia

## 📈 Analytics e tracking

- Variabili: vedi `.env.example` (`NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_META_PIXEL_ID` opzionale).
- Documentazione: `docs/TRACKING.md`.
- Verifica: `npm run verify:analytics` (opzionale: `SITE_URL=...` per controllare l'HTML deployato).

## ✅ Workflow operativo consigliato

Prima di ogni commit importante o deploy:

```bash
npm run quality:quick
```

Prima di ogni deploy in produzione:

```bash
npm run quality:gate
```

Se `quality:gate` fallisce, il deploy va fermato finché il problema non è risolto.
