# 📸 Integrazione Foto Real - Villa Olimpia

## ✅ ERRORE RISOLTO

Il problema con il componente `ServiceIcon` è stato risolto:
- ✅ Rimosso il componente `ServiceIcon` non necessario
- ✅ Aggiunti controlli per evitare errori con componenti undefined
- ✅ Le icone vengono ora renderizzate direttamente

## 🚀 INTEGRAZIONE FOTO - ISTRUZIONI COMPLETE

### STEP 1: Trova la Cartella "Villa Olimpia 2026"

La cartella potrebbe essere in:
- `~/Desktop/Villa Olimpia 2026/`
- `~/Villa Olimpia 2026/`
- `~/Documents/Villa Olimpia 2026/`

**Cerca la cartella:**
```bash
find ~ -name "*Villa Olimpia 2026*" -type d 2>/dev/null
```

### STEP 2: Copia le Immagini (Automatico)

**Opzione A - Script Automatico:**
```bash
cd /Users/francesconigro/Desktop/VillaOlimpia
./scripts/copy-images.sh
```

**Opzione B - Manuale:**
```bash
cd /Users/francesconigro/Desktop/VillaOlimpia

# Crea le cartelle
mkdir -p public/images/villa/{hero,gallery,apartments,location,services}

# Copia le immagini (sostituisci il path)
cp -r ~/Desktop/Villa\ Olimpia\ 2026/* public/images/villa/gallery/
```

**Opzione C - Finder (Mac):**
1. Apri Finder
2. Vai a "Villa Olimpia 2026"
3. Seleziona tutte le immagini (Cmd+A)
4. Copia (Cmd+C)
5. Vai a: `VillaOlimpia/public/images/villa/gallery/`
6. Incolla (Cmd+V)

### STEP 3: Organizza le Immagini

Organizza le foto nelle cartelle appropriate:

```
public/images/villa/
├── hero/
│   ├── villa-olimpia-hero.jpg (immagine principale homepage)
│   └── villa-olimpia-hero-mobile.jpg (versione mobile)
├── gallery/
│   ├── vista-mare-1.jpg
│   ├── piscina.jpg
│   ├── terrazza.jpg
│   └── ... (foto generali)
├── apartments/
│   ├── olimpia-1/
│   │   ├── main.jpg
│   │   ├── sala.jpg
│   │   ├── camera.jpg
│   │   └── ...
│   ├── olimpia-2/
│   └── olimpia-3/
├── location/
│   ├── capopiccolo.jpg
│   ├── spiaggia.jpg
│   ├── le-castella.jpg
│   └── ...
└── services/
    ├── piscina.jpg
    ├── fitness.jpg
    └── ...
```

### STEP 4: Ottimizza le Immagini

**Prima di caricare, ottimizza:**

1. **Riduci dimensioni**: Max 2000px per lato (per performance)
2. **Comprimi**: 
   - [TinyPNG](https://tinypng.com) - compressione automatica
   - [Squoosh](https://squoosh.app) - controllo avanzato
3. **Formato**: 
   - JPG per foto (qualità 80-85%)
   - WebP se possibile (Next.js lo supporta automaticamente)

**Comando per ridimensionare (ImageMagick):**
```bash
# Installa ImageMagick: brew install imagemagick
cd public/images/villa/gallery
for img in *.jpg *.jpeg *.png; do
  convert "$img" -resize 2000x2000\> -quality 85 "$img"
done
```

### STEP 5: Aggiorna i Componenti

Dopo aver copiato le immagini, i componenti le useranno automaticamente:

**Componenti già pronti:**
- ✅ `components/gallery/image-gallery.tsx` - Gallery con lightbox
- ✅ `components/hero-section.tsx` - Hero section
- ✅ `app/gallery/page.tsx` - Pagina gallery
- ✅ `app/appartamenti/[id]/page.tsx` - Dettagli appartamento

**Esempio di utilizzo:**
```tsx
import Image from 'next/image'

<Image
  src="/images/villa/gallery/vista-mare-1.jpg"
  alt="Vista mare Villa Olimpia"
  width={1200}
  height={800}
  className="rounded-lg"
  placeholder="blur"
/>
```

### STEP 6: Verifica

1. **Avvia il server:**
```bash
npm run dev
```

2. **Controlla le immagini:**
   - Homepage: `/`
   - Gallery: `/gallery`
   - Appartamenti: `/appartamenti`
   - Servizi: `/servizi`

3. **Verifica performance:**
   - Apri DevTools (F12)
   - Tab Network
   - Controlla che le immagini si carichino correttamente
   - Verifica che next/image ottimizzi automaticamente

## 📋 Checklist

- [ ] Cartella "Villa Olimpia 2026" trovata
- [ ] Immagini copiate in `public/images/villa/`
- [ ] Immagini organizzate per categoria
- [ ] Immagini ottimizzate (dimensioni e compressione)
- [ ] Testato che le immagini si caricano correttamente
- [ ] Verificato performance (Lighthouse)

## 🎨 Consigli per Organizzazione

**Per Hero Section:**
- Scegli la foto più spettacolare con vista mare
- Formato: 1920x1080px o superiore
- Nome: `villa-olimpia-hero.jpg`

**Per Gallery:**
- Foto generali della villa, piscina, terrazze
- Varietà di angolazioni e momenti della giornata
- Nomi descrittivi: `vista-mare-1.jpg`, `piscina-sera.jpg`, etc.

**Per Appartamenti:**
- Crea una cartella per ogni appartamento
- Foto: sala, camera, cucina, bagno, terrazza
- Nome principale: `main.jpg` (per la card)

**Per Location:**
- Foto di Capopiccolo, spiagge, Le Castella
- Attrazioni locali
- Nomi: `capopiccolo-spiaggia.jpg`, `le-castella.jpg`

## 🆘 Problemi Comuni

**Le immagini non si caricano:**
- Verifica che siano in `public/images/villa/`
- Controlla i path (devono iniziare con `/images/`)
- Verifica che i nomi file non abbiano spazi (usa `-` o `_`)

**Le immagini sono troppo pesanti:**
- Usa TinyPNG per comprimere
- Riduci le dimensioni a max 2000px
- Considera formato WebP

**next/image non funziona:**
- Verifica che le immagini siano in `public/`
- Controlla che width e height siano specificati
- Verifica la console per errori

## ✅ Dopo l'Integrazione

Una volta completata l'integrazione:
1. Le immagini saranno automaticamente ottimizzate da Next.js
2. Il lazy loading è già implementato
3. I blur placeholder sono configurati
4. La gallery con lightbox è pronta

**Tutto è già configurato e pronto!** 🎉


