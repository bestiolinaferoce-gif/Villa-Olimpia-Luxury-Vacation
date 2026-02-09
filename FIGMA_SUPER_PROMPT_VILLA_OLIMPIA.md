# 🏛️ FIGMA SUPER PROMPT — VILLA OLIMPIA HOMEPAGE REDESIGN

## Design System Brief | Premium Luxury Hospitality

---

## 📋 PROJECT OVERVIEW

**Project:** Complete Homepage Redesign — Villa Olimpia
**Brand:** Villa Olimpia — Luxury Holiday Residences, Calabria, Italy
**Location:** Isola di Capo Rizzuto, Area Marina Protetta, Calabria
**Target:** Turisti premium internazionali (IT, EN, DE, FR, AR, RU)
**Framework Tech:** Next.js 14 + Tailwind CSS + Framer Motion
**Design Tool:** Figma — Auto Layout, Components, Variables, Prototyping

---

## 🎨 BRAND IDENTITY & DESIGN TOKENS

### Color Palette — Mediterranean Luxury

```
Primary Gold:        #C4956A  (Luxury warm gold — CTA principali, accenti)
Primary Dark:        #8B6914  (Deep gold — titoli, hover states)
Ocean Blue:          #0077B6  (Ionian Sea blue — accenti secondari)
Ocean Deep:          #023E8A  (Deep sea — header, footer, overlay)
Sand Light:          #FAF3E8  (Warm sand — background sections alterne)
Pearl White:         #FEFCF9  (Premium white — background principale)
Charcoal:            #1A1A2E  (Elegant dark — testi principali)
Soft Gray:           #6B7280  (Muted text — paragrafi, descrizioni)
Success Green:       #059669  (Disponibilità, trust badges)
Coral Accent:        #E07A5F  (Mediterranean warm — urgency, highlights)
Gradient Luxury:     linear-gradient(135deg, #C4956A 0%, #E07A5F 50%, #0077B6 100%)
Gradient Hero:       linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(26,26,46,0.8) 100%)
```

### Typography System

```
Display / Hero:      Playfair Display — Bold, 72-96px (desktop), 40-56px (mobile)
Headings H2:         Playfair Display — SemiBold, 48-56px
Headings H3:         Playfair Display — Medium, 32-40px
Subheadings:         Inter — SemiBold, 20-24px
Body:                Inter — Regular, 16-18px, line-height 1.7
Caption / Labels:    Inter — Medium, 12-14px, letter-spacing +0.05em, UPPERCASE
CTA Buttons:         Inter — Bold, 18-20px, letter-spacing +0.02em
```

### Spacing & Grid System

```
Container Max:       1440px (content area 1280px)
Grid:                12 columns, 24px gutter, 80px margin
Section Padding:     120px vertical (desktop), 64px (mobile)
Card Border Radius:  16px (cards), 24px (hero), 999px (pills/badges)
Elevation Levels:    shadow-sm → shadow-md → shadow-lg → shadow-2xl
```

---

## 🏗️ HOMEPAGE ARCHITECTURE — SEZIONI (Top to Bottom)

---

### SECTION 0 — SMART TOP BAR (Sticky, 40px height)

**Tipo:** Urgency/Trust Micro-Banner
**Background:** Gradient scuro `Ocean Deep → Charcoal` con shimmer animation
**Contenuto:**
- Icona animata: ⚡ pulse glow
- Testo: "🔥 Ultime 3 disponibilità per Agosto 2026 — Prenota ora con sconto Early Bird -15%"
- Badge animato: "OFFERTA LIMITATA" con bordo che pulsa in coral
- CTA micro: "Scopri →" con hover slide
- Pulsante close (X) minimal

**Animazione:** Testo che scorre da destra a sinistra (marquee) su mobile, statico su desktop con shimmer highlight che passa sul testo ogni 5 secondi.

---

### SECTION 1 — HERO IMMERSIVO (Full Viewport 100vh)

**Layout:** Full-screen con video/immagine di sfondo
**Background:** Video loop 10s della villa con vista mare al tramonto (fallback: immagine hero statica con parallax)
**Overlay:** Gradient Hero (dal nero semitrasparente al blu profondo)

**Elementi centrali (centrati verticalmente):**

1. **Logo Villa Olimpia SVG Animato** (al centro, sopra al titolo)
   - Dimensione: 180x180px desktop, 120x120px mobile
   - Animazione ingresso: Il logo si "disegna" con stroke animation (SVG path draw) in 2.5 secondi
   - Colore stroke: Gold `#C4956A` che poi si riempie con fill gradient gold
   - Dopo il draw: leggero glow pulsante dorato (box-shadow animato)
   - Hover: rotazione 3D subtle (rotateY 15deg) con riflesso luminoso

2. **Headline Principale:**
   ```
   "La Tua Oasi di Lusso
    sul Mare della Calabria"
   ```
   - Font: Playfair Display Bold, 80px, colore bianco
   - Animazione: Fade-in dal basso, lettera per lettera (stagger 0.03s)
   - Text-shadow: `0 4px 30px rgba(0,0,0,0.5)`

3. **Subtitle:**
   ```
   "Residenze esclusive con vista Ionio · Isola di Capo Rizzuto"
   ```
   - Font: Inter Light, 22px, colore bianco 80% opacity
   - Animazione: Fade-in con delay 0.8s

4. **CTA Button Group (2 pulsanti affiancati):**

   **Pulsante Primario — "Prenota la Tua Vacanza"**
   - Stile: Filled, gradient `Gold → Coral`, bordo bianco 2px
   - Dimensione: padding 24px 48px, font 20px bold
   - Icona: freccia animata → che si muove avanti-indietro in loop
   - Hover: scale(1.08), glow dorato, shadow espanso
   - Click: ripple effect dorato

   **Pulsante Secondario — "Esplora le Residenze"**
   - Stile: Ghost/Outline, bordo bianco 2px, testo bianco
   - Hover: background si riempie bianco semitrasparente, testo diventa gold
   - Icona: binocolo o occhio con micro-animazione

5. **Indicatori Social Proof (sotto i CTA):**
   - "⭐ 4.9/5 — 847 Recensioni" con stelle animate (fill sequenziale)
   - "🏆 Superhost dal 2019"
   - "📍 Area Marina Protetta UNESCO"
   - Layout: 3 badge in riga con icone animate, sfondo glass-morphism

6. **Scroll Indicator (bottom center):**
   - Icona chevron-down animata con bounce infinito
   - Testo "Scopri di più" in Inter Light 14px
   - Opacity che aumenta dopo 3 secondi di inattività

**Effetti Avanzati:**
- Parallax sullo sfondo (velocità 0.3x rispetto allo scroll)
- Video ha un leggero zoom lento continuo (Ken Burns effect)
- Al scroll: l'overlay scurisce progressivamente, il contenuto fa fade-out verso l'alto

---

### SECTION 2 — TRUST & SOCIAL PROOF BAR (80px, Sticky opzionale)

**Layout:** Orizzontale, full-width, sfondo bianco con ombra subtle
**Grid:** 4-5 elementi equidistanti

**Elementi con icone animate:**
1. 🏆 **"Superhost 2019-2026"** — Icona trofeo con particelle dorate al hover
2. ⭐ **"4.9/5 Rating"** — Stelle che si riempiono in sequenza
3. 🛡️ **"Prenotazione Sicura"** — Icona scudo con checkmark che appare
4. 🌊 **"Vista Mare Garantita"** — Onda che si muove in loop
5. 📞 **"Assistenza 24/7"** — Icona telefono che vibra al hover

**Animazione:** Ogni icona ha una micro-animazione Lottie in loop (2-3s cycle). Al scroll-in: counter animato per i numeri (es. 4.9 conta da 0).

---

### SECTION 3 — APPARTAMENTI IN EVIDENZA

**Layout:** Titolo centrato + Grid 3 colonne (1 col su mobile)
**Sfondo:** Pearl White `#FEFCF9`
**Padding:** 120px top/bottom

**Header Sezione:**
- Badge: "✨ I PIÙ PRENOTATI" — pill animata con sparkle
- Titolo: "Le Nostre Residenze Esclusive" — Playfair 56px
- Sottotitolo: "Ogni appartamento è un'esperienza unica..." — Inter 18px, max-w 600px
- Animazione: scroll reveal dal basso con stagger

**Card Appartamento (×3):**
- Dimensione: ~400px width, auto height
- Border-radius: 20px
- Hover: translateY(-16px), shadow-2xl, border gradient gold
- Immagine: aspect-ratio 4:3, object-fit cover, hover zoom 1.08
- Badge posizionato: "PREMIUM ⭐" o "BEST SELLER 🔥" in overlay angolo top-left
- Badge disponibilità: "✅ Disponibile" verde animato o "🔴 Quasi Esaurito" con pulse

**Contenuto Card:**
```
[Immagine Hero Appartamento]
[Badge: "PREMIUM" / "BEST SELLER"]
[Nome: "Suite Poseidone" — Playfair 24px Bold]
[Rating: ⭐⭐⭐⭐⭐ 4.9 (124 recensioni)]
[Features icons row: 👥 6 ospiti · 🛏️ 3 camere · 📐 85m²]
[Prezzo: "da €120/notte" — evidenziato, font 28px bold gold]
[CTA: "Scopri Dettagli →" — pulsante full-width, gradient gold]
```

**Animazione Cards:**
- Ingresso: stagger reveal 0.2s tra le card
- Hover immagine: leggero zoom + overlay gradient scuro dal basso
- Icone features: micro bounce al hover
- Prezzo: counter animation da 0 al valore

**CTA Finale Sezione:**
- "Vedi Tutti gli Appartamenti →" — Button luxury outline, centrato
- Hover: fill gold con arrow che scorre

---

### SECTION 4 — PERCHÉ SCEGLIERE VILLA OLIMPIA

**Layout:** Titolo centrato + Grid 3 colonne
**Sfondo:** Gradient sottile `Sand Light → Pearl White`
**Pattern:** Sottile pattern geometrico dorato a bassissima opacità (5%)

**3 Card Informative:**

1. **📍 Posizione Privilegiata**
   - Icona: Pin con onda animata
   - Illustrazione: Mini-mappa stilizzata con pin pulsante
   - Testo: "A 200m dalla spiaggia, nell'Area Marina Protetta"

2. **🏊 Piscina Privata**
   - Icona: Onda con riflesso che si muove
   - Illustrazione: Vista piscina con acqua animata (SVG)
   - Testo: "Piscina panoramica con vista sul Mar Ionio"

3. **✨ Comfort Premium**
   - Icona: Stella con sparkle particles
   - Illustrazione: Interior luxury con shimmer
   - Testo: "Arredi di design, cucina attrezzata, smart TV"

**Stile Card:**
- Sfondo bianco, border-radius 24px
- Icona centrale in cerchio 80px con gradient background
- Hover: card si alza (translateY -12px), bordo gradient gold appare
- Icona hover: scala 1.15 con leggera rotazione oscillante
- Transizione: spring animation (bounce leggero)

---

### SECTION 5 — GALLERY IMMERSIVA

**Layout:** Bento Grid / Masonry asimmetrica
**Sfondo:** Charcoal scuro `#1A1A2E`
**Contrasto:** Testi bianchi, accenti gold

**Header:**
- Titolo: "Scorci di Paradiso" — Playfair 56px, bianco
- Sottotitolo: "Ogni angolo racconta la bellezza della Calabria"

**Grid Layout (Desktop):**
```
┌──────────────┬────────┬────────┐
│              │   B    │   C    │
│     A        ├────────┤        │
│  (grande)    │   D    │        │
│              │        ├────────┤
├──────┬───────┤        │   F    │
│  E   │       │        │        │
│      │   G   ├────────┴────────┤
│      │       │       H         │
└──────┴───────┴─────────────────┘
```

**Effetti Immagini:**
- Hover: overlay scuro con icona "expand" al centro + titolo location
- Immagini: lazy loading con shimmer placeholder (gradient animato)
- Click: lightbox con gallery navigabile
- Scroll: leggero parallax differenziato per ogni immagine

**CTA:** "Esplora la Gallery Completa →" — button ghost bianco, hover gold fill

---

### SECTION 6 — SERVIZI & AMENITIES

**Layout:** Titolo + Grid 6 icone (3×2 desktop, 2×3 tablet, 1×6 mobile)
**Sfondo:** Pearl White

**6 Service Tiles con Icone Animate:**

Ogni tile è un quadrato/rettangolo arrotondato con:
- Icona SVG animata Lottie (40×40px) al centro-top
- Titolo sotto l'icona
- Breve descrizione (1 riga)
- Hover: background gradient subtile, icona si anima

```
1. 📶 Wi-Fi Ultra-Fast         — Icona: onde signal che si espandono
2. 🅿️ Parcheggio Privato       — Icona: auto che entra in garage
3. 🌊 Vista Mare               — Icona: onde che si muovono
4. 🍳 Cucina Attrezzata        — Icona: pentola con vapore animato
5. 🛡️ Sicurezza 24h            — Icona: scudo con pulse
6. ⭐ Servizio Premium          — Icona: stella con sparkles
```

**Animazione ingresso:** Stagger reveal con fade + translateY, 0.15s delay tra ogni tile.

---

### SECTION 7 — TERRITORIO & ESPERIENZE

**Layout:** Split screen — Testo a sinistra (40%) + Mappa/Immagine a destra (60%)
**Sfondo:** Gradient `Sand Light → Ocean Blue 5%`

**Lato Sinistro:**
- Badge: "🗺️ SCOPRI IL TERRITORIO"
- Titolo: "Un Paradiso da Esplorare" — Playfair 48px
- Lista esperienze con icone animate:
  ```
  🏛️ Le Castella — Fortezza Aragonese (5 min)
  🤿 Immersioni nell'AMP (10 min)
  🍷 Tour Enogastronomico Cirò Wine
  🏖️ Spiagge Bandiera Blu (2 min)
  🐠 Snorkeling & Kayak
  ```
- Ogni item: icona sinistra + testo + distanza a destra
- Hover su item: l'icona si anima + evidenziazione gold

**Lato Destro:**
- Mappa interattiva stilizzata con pin animati
- Oppure: collage immagini del territorio con hover caption
- Animazione: pin che pulsano, linee che collegano i punti

---

### SECTION 8 — RECENSIONI & TESTIMONIALS

**Layout:** Titolo centrato + Carousel orizzontale
**Sfondo:** Gradient `Ocean Deep 5% → Pearl White`

**Header:**
- Badge: "💬 DICONO DI NOI"
- Titolo: "Esperienze dei Nostri Ospiti"
- Sotto-badge: "⭐ 4.9/5 su 847 recensioni — Fonte: Booking.com & Google"

**Card Recensione (Carousel auto-play 5s, draggable):**
```
┌─────────────────────────────┐
│ ⭐⭐⭐⭐⭐                     │
│                             │
│ "Esperienza fantastica!     │
│  La vista dal balcone è     │
│  mozzafiato..."             │
│                             │
│ 👤 Marco R. — Italia 🇮🇹    │
│ 📅 Agosto 2025              │
│ 🏠 Suite Poseidone          │
└─────────────────────────────┘
```

**Stile Card:**
- Sfondo bianco, border-radius 20px, shadow-lg
- Virgolette decorative giganti in gold (font 120px, opacity 10%)
- Avatar placeholder con iniziali colorate
- Flag emoji per nazionalità
- Hover: leggero lift + border gold

**Navigazione Carousel:**
- Dots indicator sotto (dot attivo = gold, inattivi = grigio)
- Frecce laterali con hover animation
- Auto-scroll con pausa al hover

---

### SECTION 9 — CTA FINALE / BOOKING CONVERSION

**Layout:** Full-width, centrato
**Sfondo:** Immagine sfocata della villa al tramonto con overlay gradient gold-to-blue

**Contenuto:**
- Titolo: "Pronto per la Vacanza dei Tuoi Sogni?" — Playfair 56px, bianco
- Sottotitolo: "Prenota ora e risparmia fino al 15% con l'offerta Early Bird"
-

**2 CTA Buttons grandi:**
1. **"Prenota Ora — Miglior Prezzo Garantito"**
   - Stile: Grande, gradient Gold→Coral, glow pulsante
   - Icona: calendario animato
   - Size: padding 28px 56px, font 22px

2. **"Contattaci su WhatsApp"**
   - Stile: Verde WhatsApp, icona WA animata
   - Hover: bounce + scale

**Trust elements sotto i CTA:**
- "🔒 Pagamento sicuro" | "↩️ Cancellazione gratuita 48h" | "💰 Miglior prezzo garantito"
- Layout: 3 elementi in riga con icone small

---

### SECTION 10 — FOOTER PREMIUM

**Layout:** Multi-colonna su sfondo scuro
**Sfondo:** Charcoal `#1A1A2E` con pattern geometrico subtle gold

**Colonne:**
1. **Logo + Brand** — Logo SVG animato (versione compatta), tagline, certificazioni
2. **Navigazione** — Link principali con hover underline animation gold
3. **Contatti** — Telefono, email, indirizzo con icone
4. **Social** — Icone social animate (Instagram, Facebook, TikTok, YouTube)
5. **Newsletter** — Input email + button "Iscriviti" con success animation

**Bottom Bar:**
- Copyright 2026 Villa Olimpia
- Links: Privacy Policy | Cookie Policy | Termini
- Metodi di pagamento: icone Visa, Mastercard, PayPal, Apple Pay

---

## 🎬 SPECIFICHE ANIMAZIONI GLOBALI

### Logo SVG Animato — Dettagli Tecnici

```svg
<!-- Struttura consigliata -->
<svg viewBox="0 0 200 200">
  <!-- Elemento architettonico (villa stilizzata) -->
  <path class="logo-building" stroke-dasharray="1000" stroke-dashoffset="1000">
    <!-- Path della struttura della villa con colonne -->
  </path>

  <!-- Elemento ondulato (mare) -->
  <path class="logo-wave" stroke-dasharray="500" stroke-dashoffset="500">
    <!-- Path onda stilizzata sotto la villa -->
  </path>

  <!-- Testo "VILLA OLIMPIA" -->
  <text class="logo-text" opacity="0">
    VILLA OLIMPIA
  </text>

  <!-- Stella/corona decorativa sopra -->
  <path class="logo-star" scale="0">
    <!-- Elemento decorativo premium -->
  </path>
</svg>
```

**Sequenza Animazione Logo:**
1. `0s → 1.2s`: Stroke draw della villa (dall'alto verso il basso)
2. `1.0s → 1.8s`: Stroke draw dell'onda (da sinistra a destra)
3. `1.5s → 2.2s`: Fill gradient gold che appare (opacity 0→1)
4. `2.0s → 2.5s`: Testo "VILLA OLIMPIA" fade-in + tracking expansion
5. `2.3s → 2.8s`: Stella decorativa scale-in con bounce
6. `3.0s → ∞`: Glow dorato pulsante subtle (loop infinito)

### Micro-Animazioni Icone (Lottie/CSS)

| Icona | Animazione | Durata | Trigger |
|-------|-----------|---------|---------|
| Wi-Fi | Onde signal expand + fade | 2s loop | Viewport |
| Parcheggio | Auto slide-in da sinistra | 1.5s | Viewport |
| Mare/Onde | Onda sinusoidale continua | 3s loop | Always |
| Cucina | Vapore che sale con fade | 2.5s loop | Viewport |
| Scudo | Pulse glow + checkmark draw | 2s | Viewport |
| Stella | Sparkle particles rotate | 2s loop | Viewport |
| Telefono | Vibrazione + ring | 1s | Hover |
| Freccia CTA | Slide destra loop | 1.5s loop | Always |
| Cuore | Battito (scale pulse) | 1s loop | Hover |
| Pin Mappa | Bounce + pulse ring | 2s loop | Always |

### Scroll Animations (Framer Motion / GSAP)

```
ScrollReveal (default):
  - Initial: opacity 0, translateY 40px
  - Animate: opacity 1, translateY 0
  - Duration: 0.8s
  - Easing: cubic-bezier(0.16, 1, 0.3, 1)
  - Viewport threshold: 0.2

Parallax Layers:
  - Background images: speed 0.3x
  - Decorative elements: speed 0.5x
  - Content: speed 1x (normal)

Counter Animation:
  - Numeri che contano da 0 al valore finale
  - Duration: 2s
  - Easing: ease-out
  - Trigger: viewport entry

Stagger Children:
  - Delay between items: 0.15s
  - Cards: 0.2s
  - List items: 0.1s
```

---

## 🖱️ PULSANTI — DESIGN SYSTEM

### Button Primary (Luxury Gold)

```
Default:
  background: linear-gradient(135deg, #C4956A, #E07A5F)
  color: white
  padding: 16px 40px
  border-radius: 12px
  font: Inter Bold 18px
  border: 2px solid rgba(255,255,255,0.3)
  box-shadow: 0 8px 32px rgba(196,149,106,0.3)

Hover:
  transform: translateY(-3px) scale(1.05)
  box-shadow: 0 12px 40px rgba(196,149,106,0.5)
  border-color: white

Active:
  transform: scale(0.98)
  box-shadow: 0 4px 16px rgba(196,149,106,0.3)

Focus:
  outline: 3px solid #C4956A offset 3px
```

### Button Secondary (Ghost/Outline)

```
Default:
  background: transparent
  color: #C4956A
  border: 2px solid #C4956A
  padding: 14px 36px
  border-radius: 12px

Hover:
  background: rgba(196,149,106,0.1)
  transform: translateY(-2px)
  border-color: #E07A5F
```

### Button WhatsApp (Verde)

```
Default:
  background: #25D366
  color: white
  border-radius: 999px (pill)
  padding: 16px 32px
  icon: WhatsApp SVG animato

Hover:
  background: #128C7E
  transform: scale(1.05)
  icon: bounce
```

### Button CTA Hero (Extra Large)

```
Default:
  background: linear-gradient(135deg, #C4956A 0%, #E07A5F 100%)
  color: white
  padding: 24px 56px
  font: Inter Bold 22px
  border: 2px solid white
  border-radius: 16px
  box-shadow: 0 12px 48px rgba(196,149,106,0.4)

  /* Glow animation continuo */
  animation: glow-pulse 3s ease-in-out infinite

Hover:
  transform: translateY(-4px) scale(1.08)
  box-shadow: 0 20px 60px rgba(196,149,106,0.6)
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Desktop XL:   1440px+    — Full layout, 3-col grids, large hero
Desktop:      1024-1439px — Scaled layout, 3-col grids
Tablet:       768-1023px  — 2-col grids, stacked hero, hamburger nav
Mobile:       320-767px   — 1-col, bottom nav, compact cards, swipe carousel
```

**Mobile-Specific:**
- Navigation: hamburger menu → full-screen overlay con blur background
- Hero: altezza 85vh, testo ridotto, 1 solo CTA button
- Cards: swipeable horizontal scroll
- Gallery: 2×2 grid compatto
- CTA flottante: sticky bottom bar con "Prenota Ora" sempre visibile
- Logo: versione compatta 60px

---

## ⚡ PERFORMANCE & TECH NOTES

### Ottimizzazioni Richieste:
- **Immagini:** WebP/AVIF con lazy loading + shimmer placeholder
- **Video Hero:** Autoplay muted, poster frame, max 5MB compresso
- **Font:** Subsetting per Playfair Display (solo caratteri usati)
- **Animazioni:** `will-change: transform` solo dove necessario, `prefers-reduced-motion` rispettato
- **SVG Logo:** Inline per animazione CSS, dimensione < 5KB
- **Icone:** SVG sprite sheet o Lucide React (tree-shakeable)
- **Lottie:** Files < 50KB ciascuno, lazy loaded

### Accessibilità (WCAG 2.1 AA):
- Contrasto minimo 4.5:1 per testo normale, 3:1 per testo grande
- Focus visible su tutti gli interattivi
- `aria-label` su icone e elementi decorativi
- `prefers-reduced-motion: reduce` → disabilita animazioni
- Alt text su tutte le immagini
- Semantic HTML (header, main, section, footer, nav)

---

## 🔧 FIGMA SETUP — ISTRUZIONI OPERATIVE

### Come usare questo prompt in Figma:

1. **Crea un nuovo file** Figma: "Villa Olimpia — Homepage Redesign 2026"
2. **Setup Frames:**
   - Desktop: 1440×Auto
   - Tablet: 768×Auto
   - Mobile: 375×Auto
3. **Variables:** Importa i color tokens come Figma Variables
4. **Typography Styles:** Crea text styles per ogni livello tipografico
5. **Components:** Crea componenti per Button, Card, Badge, Icon Tile
6. **Auto Layout:** Usa Auto Layout per ogni sezione
7. **Prototyping:** Collega le sezioni con Smart Animate per le transizioni scroll

### Plugin Figma Consigliati:
- **LottieFiles** — Per importare animazioni Lottie
- **Iconify** — Per icone Lucide/Heroicons
- **Content Reel** — Per placeholder realistici
- **Autoflow** — Per user flow
- **Figma Tokens** — Per gestire design tokens

---

## 📐 DESIGN CHECKLIST

- [ ] Logo SVG animato progettato e funzionante
- [ ] Hero section con video/parallax
- [ ] Trust bar con icone animate
- [ ] Card appartamenti con hover states
- [ ] Perché sceglierci con 3 card animate
- [ ] Gallery bento grid
- [ ] Servizi con 6 icone animate
- [ ] Sezione territorio con mappa
- [ ] Carousel recensioni
- [ ] CTA finale conversion
- [ ] Footer premium multi-colonna
- [ ] Tutti i button states (default, hover, active, focus, disabled)
- [ ] Responsive: desktop, tablet, mobile
- [ ] Dark mode variant (opzionale)
- [ ] Prototipo interattivo con transizioni
- [ ] Handoff dev-ready con inspect mode

---

*Prompt creato per Villa Olimpia — ViviCalabria.com*
*Design System Version 2.0 — Febbraio 2026*
*Framework: Next.js 14 · Tailwind CSS · Framer Motion · TypeScript*
