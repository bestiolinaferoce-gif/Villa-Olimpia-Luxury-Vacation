# 📍 LOCATION SYSTEM - GUIDA COMPLETA

**Versione:** 1.0  
**Data:** 2024-12-10

---

## 🏗️ OVERVIEW ARCHITETTURA

Il sistema Location gestisce la visualizzazione e navigazione delle attrazioni turistiche, luoghi di interesse e esperienze enogastronomiche della zona di Capo Rizzuto, Calabria.

### Struttura File

```
app/
├── location/
│   ├── page.tsx              # Pagina principale Location
│   └── layout.tsx            # Layout con metadata
│
components/
├── location-links-section.tsx   # Sezione link interni
├── territory-section.tsx        # Sezione territorio (homepage)
├── how-to-reach-us.tsx          # Modal "Come Raggiungerci"
├── map-component.tsx            # Componente mappa Google Maps
└── directions-widget.tsx        # Widget direzioni
│
lib/
├── location-data.ts             # Dati Villa Olimpia location
└── seo-territory.ts             # Config SEO territorio
│
public/images/villa/location/    # Immagini location
```

---

## 📊 DATABASE LUOGHI (FUTURO)

**Nota:** Database completo da implementare in FASE 1.

### Struttura Attesa

```json
{
  "naturalPlaces": [
    {
      "id": "capo-rizzuto",
      "name": "Capo Rizzuto",
      "category": "natura",
      "coordinates": { "lat": 38.913, "lng": 17.075 },
      "distance": "2 km",
      "driveTime": "5 minuti",
      "description": "Descrizione SEO 300-500 parole",
      "shortDescription": "Descrizione breve 80-100 parole",
      "photos": [
        {
          "url": "/images/locations/capo-rizzuto-1.jpg",
          "alt": "Vista panoramica Capo Rizzuto",
          "credit": "Photographer"
        }
      ],
      "keywords": ["capo rizzuto", "promontorio", "riserva marina"],
      "seoTitle": "Capo Rizzuto: Promontorio e Riserva Marina | Villa Olimpia",
      "seoDescription": "Meta description 150-160 caratteri",
      "links": [
        { "type": "official", "url": "...", "label": "Sito ufficiale" }
      ],
      "featured": true
    }
  ],
  "wineries": [...],
  "restaurants": [...],
  "experiences": [...]
}
```

---

## 🔧 COME AGGIUNGERE NUOVI LUOGHI

### Metodo 1: Aggiungere a `territory-section.tsx` (Temporaneo)

Fino a quando il database completo non sarà implementato:

1. Apri `components/territory-section.tsx`
2. Trova array `destinations`
3. Aggiungi nuovo oggetto:

```typescript
{
  name: "Nome Luogo",
  category: "spiaggia" | "storico" | "natura" | "cultura",
  distance: "X km",
  driveTime: "X minuti",
  description: "Descrizione SEO completa...",
  image: "/images/villa/location/nome-foto.jpg",
  imageAlt: "Alt text SEO-optimized",
  highlights: ["Highlight 1", "Highlight 2"],
  bestTime: "Maggio - Ottobre",
  badges: ["bandiera-blu", "4k"], // Opzionale
  featured: true, // Se vuoi featured card
  link: "/location" // O link specifico se pagina dettaglio esiste
}
```

### Metodo 2: Database JSON (Futuro)

1. Crea file `data/locations.json`
2. Aggiungi luogo nella categoria appropriata
3. Aggiorna componenti per leggere da JSON

---

## ✏️ COME MODIFICARE LUOGHI ESISTENTI

### Modificare Informazioni Base

1. Trova il luogo in `components/territory-section.tsx`
2. Modifica i campi necessari:
   - `name`: Nome del luogo
   - `description`: Descrizione completa
   - `distance`: Distanza aggiornata
   - `highlights`: Punti di interesse

### Modificare Foto

1. Aggiungi nuova foto in `/public/images/villa/location/`
2. Aggiorna campo `image` nel database
3. Aggiorna `imageAlt` per SEO

### Aggiornare SEO

1. Modifica `seoTitle`
2. Modifica `seoDescription`
3. Aggiorna `keywords` array
4. Aggiorna Structured Data se necessario

---

## 🎨 COMPONENTI PRINCIPALI

### `TerritorySection`

**File:** `components/territory-section.tsx`

**Utilizzo:**
- Sezione territorio in homepage
- Visualizza 10 destinazioni principali
- 4 featured (large cards) + 6 standard (smaller cards)

**Props:** Nessuna

**Personalizzazione:**
- Modifica array `destinations` per aggiungere/rimuovere luoghi
- Modifica `categoryColors` per cambiare colori badge
- Modifica `categoryIcons` per cambiare icone

### `LocationLinksSection`

**File:** `components/location-links-section.tsx`

**Utilizzo:**
- Sezione link interni per cross-linking
- Utilizzata in pagine appartamenti

**Props:**
- `variant?: "compact" | "full"` - Layout compatto o completo

### `HowToReachUs`

**File:** `components/how-to-reach-us.tsx`

**Utilizzo:**
- Bottone "Come Raggiungerci" con modal
- Info aeroporti, treni, auto

**Personalizzazione:**
- Modifica array `AIRPORTS` per aggiungere aeroporti
- Modifica array `TRAIN_STATIONS` per stazioni

### `MapComponent`

**File:** `components/map-component.tsx`

**Utilizzo:**
- Mappa Google Maps interattiva
- Marker Villa Olimpia
- Directions integration

**Configurazione:**
- Richiede `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in env vars
- Coordinate da `lib/location-data.ts`

---

## 📝 NAMING CONVENTIONS

### File Immagini

**Pattern:** `[luogo]-[soggetto]-[descrittore].[ext]`

**Esempi:**
- `capo-rizzuto-spiaggia-tramonto.jpg`
- `le-castella-castello-aereo.jpg`
- `valli-cupe-cascata-primavera.jpg`

**Regole:**
- Tutto lowercase
- Spazi → hyphen (`-`)
- No caratteri speciali
- Estensione: `.jpg`, `.webp`, o `.avif`

### ID Luoghi

**Pattern:** `[nome-luogo]-[tipo]` o solo `[nome-luogo]`

**Esempi:**
- `capo-rizzuto`
- `spiaggia-dei-gigli`
- `librandi-cantine`

### Categorie

**Valori permessi:**
- `"spiaggia"`
- `"storico"`
- `"natura"`
- `"cultura"`
- `"gastronomia"`
- `"unesco"`

---

## 🔗 ROUTING

### Route Esistenti

- `/location` - Pagina principale Location
- `/location/[slug]` - Pagina dettaglio luogo (da implementare)

### Route Future

- `/enogastronomia` - Hub enogastronomia
- `/enogastronomia/cantine` - Lista cantine
- `/enogastronomia/ristoranti` - Lista ristoranti
- `/enogastronomia/[slug]` - Dettaglio cantina/ristorante

### Generazione Route Dinamiche

Quando database JSON sarà pronto:

```typescript
// app/location/[slug]/page.tsx
export async function generateStaticParams() {
  const locations = await import('@/data/locations.json')
  return locations.naturalPlaces.map(loc => ({
    slug: loc.id
  }))
}
```

---

## 🎯 SEO BEST PRACTICES

### Meta Tags per Ogni Luogo

```typescript
{
  title: "Nome Luogo: Descrizione | Villa Olimpia",
  description: "Meta description 150-160 caratteri con keyword primaria",
  keywords: ["keyword1", "keyword2", "long-tail keyword"]
}
```

### Structured Data

Ogni luogo dovrebbe avere Schema.org markup:

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Nome Luogo",
  "description": "...",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "...",
    "longitude": "..."
  }
}
```

### Internal Linking

- Link da homepage → location
- Link da appartamenti → location
- Link tra luoghi correlati
- Anchor text keyword-rich

---

## 🖼️ GESTIONE IMMAGINI

### Dimensioni Consigliate

- **Featured Card:** 1920x1080px (16:9)
- **Standard Card:** 1200x800px (3:2)
- **Gallery:** 1920x1080px o superiore

### Formato

- **Primary:** WebP
- **Fallback:** JPG
- **Qualità:** 85-90%

### Ottimizzazione

Tutte le immagini usano Next.js `Image` component con:
- Lazy loading automatico
- Responsive sizes
- WebP/AVIF conversion automatica

---

## 🔄 AGGIORNAMENTI E MANUTENZIONE

### Aggiornamenti Stagionali

- [ ] Verificare orari apertura
- [ ] Aggiornare periodi migliori visita
- [ ] Refresh foto se necessario
- [ ] Aggiornare prezzi (se presenti)

### Verifica Links Esterni

- [ ] Mensile: verifica links a siti esterni
- [ ] Controlla che siti web ristoranti/cantine siano attivi
- [ ] Aggiorna telefoni/email se cambiati

### Controllo Qualità

- [ ] Verificare che foto carichino correttamente
- [ ] Testare link interni non siano broken
- [ ] Verificare coordinate GPS accurate
- [ ] Controllare distanze da Villa Olimpia

---

## 📚 RISORSE E REFERENZE

### Documentazione Next.js
- [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)

### SEO Resources
- [Schema.org TouristAttraction](https://schema.org/TouristAttraction)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Image Optimization
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)

---

**Ultimo Aggiornamento:** 2024-12-10











