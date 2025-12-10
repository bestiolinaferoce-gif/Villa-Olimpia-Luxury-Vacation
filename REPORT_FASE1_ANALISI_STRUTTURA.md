# 📋 FASE 1: ANALISI STRUTTURA IMMAGINI ESISTENTE

**Data:** $(date)
**Progetto:** Villa Olimpia - Integrazione Foto Appartamenti

---

## 1.1 DIRECTORY IMMAGINI IDENTIFICATA

✅ **Path completo immagini appartamenti:**
```
/public/images/villa/appartamenti/
```

**Struttura sottocartelle per appartamento:**
- `/public/images/villa/appartamenti/azalea/`
- `/public/images/villa/appartamenti/fiordaliso/`
- `/public/images/villa/appartamenti/frangipane/`
- `/public/images/villa/appartamenti/gardenia/`
- `/public/images/villa/appartamenti/geranio/`
- `/public/images/villa/appartamenti/giglio/`
- `/public/images/villa/appartamenti/lavanda/`
- `/public/images/villa/appartamenti/orchidea/`
- `/public/images/villa/appartamenti/tulipano/`

---

## 1.2 NAMING CONVENTION ATTUALE

### Pattern identificato:
1. **Formato generale:** `[descrizione]-[numero].[estensione]` o `[descrizione].[estensione]`
2. **Lowercase:** La maggior parte usa lowercase (es: `bedroom.jpg`, `living-2.jpg`)
3. **Numerazione progressiva:** Per foto multiple della stessa categoria (es: `terrace-2.jpg`, `terrace-3.jpg`)

### Esempi reali esistenti:

#### Azalea:
- `terrace-2.jpg`, `terrace-3.jpg`, `terrace-4.jpg`, `terrace-5.jpg`
- `terrace-sunset.jpg`
- `bedroom.jpg`, `bedroom-2.jpg`
- `living.jpg`, `living-2.jpg`

#### Fiordaliso:
- `main.jpg`
- `living-1.jpg`, `living-2.jpg`

#### Frangipane:
- `main.jpg`
- `camera-matrimoniale-frangipane-1.jpg`
- `cucina-appartamento-frangipane-1.jpg`, `cucina-appartamento-frangipane-3.jpg`
- `bagno-frangipane.jpg`

#### Gardenia:
- `bedroom-1.jpg`, `bedroom-2.jpg`, `bedroom-3.jpg`, `bedroom-4.jpg`

#### Geranio:
- `kitchen.jpg`, `kitchen-2.jpg`
- `bedroom-1.jpg` (NON esiste, presente bedroom-4, bedroom-5, bedroom-6)

#### Giglio:
- `living.jpg`

#### Lavanda:
- `veranda.jpg`, `veranda-2.jpg`

#### Orchidea:
- `main.jpg`
- `camera-matrimoniale-gardenia-1.jpg` ⚠️ (nome confuso, ma appartiene a Orchidea)
- `terrazza-appartamento-azalea.jpg` ⚠️ (nome confuso, ma appartiene a Orchidea)
- `terrazza-azalea-3.jpg` ⚠️ (nome confuso, ma appartiene a Orchidea)

#### Tulipano:
- `living-1.jpg`, `living-2.jpg`

---

## 1.3 MAPPA FOTO PER APPARTAMENTO (STATO ATTUALE)

| Appartamento | Foto Attuali | Categorie Identificate |
|-------------|--------------|------------------------|
| **Azalea** | 9 foto | terrace, bedroom, living |
| **Fiordaliso** | 3 foto | main, living |
| **Frangipane** | 6 foto | main, camera, cucina, bagno, living |
| **Gardenia** | 4 foto | bedroom |
| **Geranio** | 8 foto | kitchen, bedroom |
| **Giglio** | 1 foto | living |
| **Lavanda** | 2 foto | veranda |
| **Orchidea** | 4 foto | main, camera, terrazza |
| **Tulipano** | 2 foto | living |

**TOTALE FOTO ESISTENTI:** 39 foto

---

## 1.4 RIFERIMENTI NEL CODICE

### File principale configurazione:
📄 **`/data/apartments.ts`**
- Ogni appartamento ha:
  - `image`: path foto principale (singola stringa)
  - `images`: array di path per gallery completa

### Componenti che usano le immagini:
1. **`components/apartment-card.tsx`**: Usa prop `image` per foto principale
2. **`components/apartment-gallery.tsx`**: Usa array `images` per gallery
3. **`app/appartamenti/[id]/page.tsx`**: Pagina dettaglio che carica da `apartments.ts`

### Tipo di caricamento:
- ✅ **Caricamento STATICO** via array in `apartments.ts`
- ✅ **NON** usa import dinamico o glob patterns
- ✅ **NECESSARIO AGGIORNARE** `apartments.ts` per nuove foto

---

## 1.5 PATTERN RILEVANTI

### Struttura directory:
- ✅ Usa **sottocartelle per appartamento** (non flat)
- ✅ Ogni appartamento ha la propria cartella con nome lowercase

### Convenzioni nome file:
- ✅ Lowercase per la maggior parte
- ✅ Uso di trattini per separare parole (`camera-matrimoniale`)
- ✅ Numerazione progressiva per serie (`living-1.jpg`, `living-2.jpg`)
- ⚠️ Alcuni file hanno nomi confusi (es: `camera-matrimoniale-gardenia-1.jpg` in cartella Orchidea)

---

## ⚠️ NOTE IMPORTANTI

1. **Alcune foto esistenti hanno nomi inconsistenti** (es: foto di Orchidea che menzionano "azalea" o "gardenia" nel nome)
2. **Geranio:** Manca `bedroom-1.jpg` ma esistono bedroom-4, 5, 6
3. **Sistema NON dinamico:** Le foto devono essere aggiunte manualmente all'array `images` in `apartments.ts`

---

## ✅ CONCLUSIONI FASE 1

- ✅ Struttura identificata: `/public/images/villa/appartamenti/[nome-appartamento]/`
- ✅ Pattern naming: `[descrizione]-[numero].jpg` (lowercase, trattini)
- ✅ Sistema: Array statico in `apartments.ts` (necessita aggiornamento)
- ✅ Organizzazione: Sottocartelle per appartamento

**PRONTO PER FASE 2: Analisi foto nuove**

