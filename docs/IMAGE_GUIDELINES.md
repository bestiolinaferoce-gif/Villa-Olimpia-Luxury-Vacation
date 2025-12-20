# 🖼️ IMAGE GUIDELINES - GUIDA IMMAGINI

**Versione:** 1.0  
**Data:** 2024-12-10

---

## 📐 DIMENSIONI OTTIMALI

### Per Tipo di Utilizzo

#### Featured Images (Hero, Large Cards)
- **Dimensioni:** 1920x1080px (16:9 aspect ratio)
- **Formato:** WebP (primary), JPG (fallback)
- **Qualità:** 85-90%
- **Peso target:** <500KB

#### Standard Cards
- **Dimensioni:** 1200x800px (3:2 aspect ratio)
- **Formato:** WebP (primary), JPG (fallback)
- **Qualità:** 85-90%
- **Peso target:** <300KB

#### Gallery Images
- **Dimensioni:** 1920x1080px o superiore
- **Formato:** WebP (primary), JPG (fallback)
- **Qualità:** 85-90%
- **Peso target:** <800KB

#### Thumbnails
- **Dimensioni:** 400x225px (16:9)
- **Formato:** WebP (primary), JPG (fallback)
- **Qualità:** 80%
- **Peso target:** <50KB

---

## 📁 FORMATI SUPPORTATI

### Primary Formats

1. **WebP** ⭐ (Preferito)
   - Compressione superiore a JPG
   - Supporto trasparenza
   - Next.js converte automaticamente

2. **AVIF** (Futuro)
   - Compressione ancora migliore
   - Supporto browser in crescita

3. **JPG/JPEG** (Fallback)
   - Compatibilità universale
   - Buono per foto

4. **PNG** (Solo quando necessario)
   - Trasparenza richiesta
   - Logo o grafiche

---

## 🏷️ NAMING CONVENTIONS

### Pattern Naming

**Format:** `[luogo]-[soggetto]-[descrittore].[ext]`

**Esempi:**
- `capo-rizzuto-spiaggia-tramonto.jpg`
- `le-castella-castello-aereo.jpg`
- `valli-cupe-cascata-primavera.jpg`
- `spiaggia-dei-gigli-bandiera-blu.jpg`

### Regole

- ✅ Tutto lowercase
- ✅ Spazi → hyphen (`-`)
- ✅ No caratteri speciali (`è` → `e`, `à` → `a`)
- ✅ No accenti
- ✅ Numeri OK (es: `capo-rizzuto-2.jpg`)
- ✅ Descrittore opzionale ma consigliato

### Esempi Corretti/Errati

**✅ CORRETTI:**
- `capo-rizzuto.jpg`
- `spiaggia-dei-gigli-tramonto.jpg`
- `le-castella-castello.jpg`
- `valli-cupe-cascata-1.jpg`

**❌ ERRATI:**
- `Capo Rizzuto.jpg` (spazi e maiuscole)
- `spiaggia_dei_gigli.jpg` (underscore)
- `le-castella-è-bella.jpg` (accenti)
- `foto (1).jpg` (parentesi e spazi)

---

## ⚙️ OTTIMIZZAZIONE PROCESS

### Step 1: Selezione Foto

**Criteri:**
- ✅ Risoluzione minima: 1920x1080px
- ✅ Luce naturale, colori vibranti
- ✅ Composizione professionale
- ✅ No watermark visibili
- ✅ Stile coerente (warm, mediterranean)

### Step 2: Editing Base

- [ ] Crop a aspect ratio corretto
- [ ] Correzione esposizione se necessario
- [ ] Saturazione lieve (max +10%)
- [ ] Rimozione elementi distraenti

### Step 3: Compressione

**Tool Consigliati:**
- [TinyPNG](https://tinypng.com) - Compressione online
- [Squoosh](https://squoosh.app) - Google tool avanzato
- [ImageOptim](https://imageoptim.com) - Desktop tool

**Processo:**
1. Comprimi JPG originale (TinyPNG)
2. Converti a WebP (Squoosh)
3. Verifica qualità visiva
4. Controlla peso file

### Step 4: Multi-Format

**Genera versioni:**
- WebP (primary)
- JPG (fallback)
- AVIF (optional, per futuro)

Next.js Image component gestisce automaticamente la scelta.

---

## 📝 ALT TEXT BEST PRACTICES

### Template Alt Text

**Pattern:** `[Soggetto] - [Contesto] - [Keyword] - [Qualità Tecnica]`

**Struttura:**
1. **Soggetto principale** (cosa è nell'immagine)
2. **Contesto** (dove, quando)
3. **Keyword SEO** (integrate naturalmente)
4. **Qualità tecnica** (opzionale: "4K", "aereo", "panoramica")

### Esempi

**Cattivo:**
- ❌ "Foto spiaggia"
- ❌ "Immagine di Capo Rizzuto"
- ❌ "foto.jpg"

**Buono:**
- ✅ "Spiaggia dei Gigli Bandiera Blu Capo Rizzuto - Acque cristalline e sabbia dorata"
- ✅ "Castello Aragonese Le Castella Calabria - Vista panoramica mare Ionio patrimonio storico"
- ✅ "Area Marina Protetta Capo Rizzuto - Immersioni snorkeling biodiversità marina 4K"

### Regole

- ✅ Descrive accuratamente l'immagine
- ✅ Include keyword principale naturalmente
- ✅ Max 125 caratteri (consigliato)
- ✅ Non inizia con "Immagine di..." (redundante)
- ✅ Specifico ma non troppo lungo
- ✅ Include location quando rilevante

---

## 📂 STRUTTURA CARTELLE

### Organizzazione

```
public/images/villa/
├── location/
│   ├── capo-rizzuto-spiaggia.jpg
│   ├── le-castella-castello.jpg
│   ├── valli-cupe-cascata.jpg
│   └── ...
├── enogastronomia/
│   ├── cantine/
│   │   ├── librandi-cantina.jpg
│   │   └── ...
│   ├── ristoranti/
│   │   ├── ristorante-pesce.jpg
│   │   └── ...
│   └── prodotti/
│       ├── nduja-spilinga.jpg
│       └── ...
└── gallery/
    └── ...
```

### Naming per Categoria

**Location:**
- `[nome-luogo]-[soggetto].[ext]`

**Enogastronomia:**
- Cantine: `[nome-cantina]-[tipo].jpg` (es: `librandi-degustazione.jpg`)
- Ristoranti: `[nome-ristorante]-[tipo].jpg` (es: `pescatore-interno.jpg`)
- Prodotti: `[nome-prodotto]-[tipo].jpg` (es: `nduja-spilinga.jpg`)

---

## 🔧 OTTIMIZZAZIONE TECNICA

### Next.js Image Component

**Utilizzo:**
```tsx
<Image
  src="/images/villa/location/capo-rizzuto.jpg"
  alt="Alt text SEO-optimized"
  width={1920}
  height={1080}
  quality={85}
  priority={false} // true solo per above-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

**Best Practices:**
- ✅ Usa sempre `Image` invece di `<img>`
- ✅ Specifica `width` e `height` per evitare layout shift
- ✅ Usa `priority={true}` solo per hero images
- ✅ Configura `sizes` per responsive
- ✅ Lazy loading automatico per below-fold

### Responsive Images

**Sizes Attribute:**
- Mobile: `100vw` (full width)
- Tablet: `50vw` (half width)
- Desktop: `33vw` (one third width)

**Esempio:**
```tsx
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

---

## 📊 METRICHE QUALITÀ

### Performance Target

- **LCP:** <2.5s
- **CLS:** <0.1 (no layout shift)
- **Image load time:** <1s

### File Size Target

- **Hero images:** <500KB
- **Card images:** <300KB
- **Gallery images:** <800KB
- **Thumbnails:** <50KB

### Compression Quality

- **WebP:** 85-90% quality
- **JPG:** 80-85% quality
- **PNG:** Usa solo se trasparenza necessaria

---

## ✅ CHECKLIST PRIMA DI CARICARE

- [ ] Dimensioni corrette (1920x1080 per featured)
- [ ] Formato ottimizzato (WebP + JPG fallback)
- [ ] Peso file < target
- [ ] Nome file segue convention
- [ ] Alt text SEO-optimized preparato
- [ ] Qualità visiva verificata
- [ ] No watermark
- [ ] Aspect ratio corretto
- [ ] Metadati EXIF puliti (se sensibili)

---

## 🛠️ TOOLS CONSIGLIATI

### Compressione
- [TinyPNG](https://tinypng.com) - Online, facile
- [Squoosh](https://squoosh.app) - Google, avanzato
- [ImageOptim](https://imageoptim.com) - Desktop, batch

### Editing
- [Canva](https://canva.com) - Online editing
- [Figma](https://figma.com) - Professional design
- Photoshop/GIMP - Advanced editing

### WebP Conversion
- [CloudConvert](https://cloudconvert.com)
- Squoosh (ha conversione WebP)
- Next.js automatic conversion

---

**Ultimo Aggiornamento:** 2024-12-10











