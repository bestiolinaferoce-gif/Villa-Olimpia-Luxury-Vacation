# ISTRUZIONI CURSOR AI - Villa Olimpia Map Component (v2.0)

## OBIETTIVO
Componente React/SVG interattivo che mostra la mappa degli appartamenti di Villa Olimpia con posizioni esatte dalla planimetria, colori unici per appartamento, e visualizzazione a due piani.

---

## DATI CORRETTI (9 APPARTAMENTI)

### Piano Terra (6 appartamenti)
| Nome | mq | Ospiti | Camere | Bagni | Posizione | Colore |
|------|-----|--------|--------|-------|-----------|--------|
| Fiordaliso | 50 | 4 | 1 | 1 | Alto sinistra | #4A8FE7 |
| Orchidea | 48 | 4 | 1 | 1 | Alto destra | #9B6AB8 |
| Tulipano | 47 | 4 | 1 | 1 | Centro destra | #E06060 |
| Frangipane | 45 | 6 | 2 | 1 | Basso sinistra | #D9A030 |
| Giglio | 46 | 6 | 2 | 1 | Basso centro | #E07BA0 |
| Lavanda | 45 | 4 | 1 | 1 | Basso destra | #8B7EC0 |

### Primo Piano (3 appartamenti)
| Nome | mq | Ospiti | Camere | Bagni | Posizione | Colore |
|------|-----|--------|--------|-------|-----------|--------|
| Geranio | 65 | 6 | 2 | 2 | Sinistra (Premium) | #D44D4D |
| Gardenia | 52 | 4 | 1 | 1 | Centro | #4BAA82 |
| Azalea | 50 | 4 | 1 | 1 | Destra | #E06899 |

**Piscina Condivisa**: #38BDF8 (posizione: centro-sinistra, Piano Terra)
**Capacita Totale**: 42 ospiti (28 Piano Terra + 14 Primo Piano)

---

## FILE GIA IMPLEMENTATO

Il componente e' gia stato creato in:
```
components/VillaOlimpiaMap.tsx
```

### Caratteristiche implementate:
- SVG responsive con viewBox (1000x600 Piano Terra, 1000x300 Primo Piano)
- Tab per cambiare piano (Piano Terra / Primo Piano)
- 9 colori unici basati sui fiori (fiordaliso=blu, orchidea=viola, ecc.)
- Piscina con effetto onde acqua
- Indicatore scale al centro
- Legenda interattiva laterale
- Selezione appartamenti con glow dorato
- Badge "Premium" per Geranio
- Multilingua (IT/EN/DE)
- Hover effects con transizioni smooth
- Accessibilita (aria-labels, keyboard navigation)
- Proporzioni calibrate dalla planimetria ufficiale

### Exports disponibili:
```tsx
// Default: componente con callback
import VillaOlimpiaMap from '@/components/VillaOlimpiaMap';
<VillaOlimpiaMap language="it" onApartmentClick={(id) => console.log(id)} />

// Con navigazione automatica a /appartamenti/[id]
import { VillaOlimpiaMapWithRouter } from '@/components/VillaOlimpiaMap';
<VillaOlimpiaMapWithRouter language="it" />

// Config data per uso esterno
import { MAP_CONFIG } from '@/components/VillaOlimpiaMap';
```

---

## NOTE IMPORTANTI

1. **NON modificare** le coordinate SVG - sono calibrate dalla planimetria
2. **NON modificare** le capienze - verificate dal proprietario
3. **NON cambiare** i colori senza approvazione - associati ai nomi dei fiori
4. **MANTIENI** il supporto multilingua (it/en/de)
5. **MANTIENI** l'accessibilita (aria-labels, keyboard nav)

---

## INTEGRAZIONE

### In pagina esistente:
```tsx
import VillaOlimpiaMap from '@/components/VillaOlimpiaMap';

export default function LocationPage() {
  return (
    <main>
      <VillaOlimpiaMap language="it" />
    </main>
  );
}
```

### Con navigazione al click:
```tsx
import { VillaOlimpiaMapWithRouter } from '@/components/VillaOlimpiaMap';

export default function LocationPage() {
  return (
    <main>
      <VillaOlimpiaMapWithRouter language="it" />
    </main>
  );
}
```

---

**Versione**: 2.0.0
**Data**: 8 Febbraio 2026
**Framework**: Next.js 14+ / React / SVG / Tailwind CSS
