# 📸 GUIDA FOTO APPARTAMENTI - Parametri e Ottimizzazione

## 🎯 PARAMETRI CONSIGLIATI PER LE FOTO

### **Opzione 1: Tu prepari le foto ottimizzate (CONSIGLIATO)**

#### Dimensioni e Formato
- **Formato:** JPG (JPEG) - compatibilità universale
- **Risoluzione:** 
  - **Hero/Main:** 1920x1080px (16:9) o 1920x1280px (3:2)
  - **Gallery/Detail:** 1200x800px (3:2) o 1200x900px (4:3)
  - **Thumbnail:** 400x300px (4:3)
- **Qualità:** 85-90% (bilanciamento qualità/dimensione)
- **Peso massimo:** 
  - Hero: max 500KB
  - Gallery: max 300KB
  - Thumbnail: max 100KB

#### Naming Convention
```
/appartamenti/[nome-appartamento]/
  - main.jpg (foto principale)
  - camera-1.jpg
  - camera-2.jpg
  - cucina.jpg
  - bagno.jpg
  - terrazza-1.jpg
  - terrazza-2.jpg
  - living.jpg
  - esterno.jpg
```

**Esempio per Frangipane:**
```
/appartamenti/frangipane/
  - main.jpg
  - camera-matrimoniale-1.jpg
  - camera-matrimoniale-2.jpg
  - cucina.jpg
  - bagno.jpg
  - veranda.jpg
  - living.jpg
```

### **Opzione 2: Io ottimizzo dopo il caricamento**

Se preferisci caricare le foto originali, posso creare uno script automatico che:
- ✅ Ridimensiona automaticamente
- ✅ Comprime mantenendo qualità
- ✅ Converte in WebP (formato moderno, più leggero)
- ✅ Genera thumbnails automaticamente
- ✅ Organizza per cartella

**Parametri per foto originali:**
- **Formato:** Qualsiasi (JPG, PNG, HEIC)
- **Risoluzione:** Fino a 4000px (ottimizzerò io)
- **Peso:** Fino a 10MB per foto (ridurrò io)

---

## 📁 STRUTTURA CARTELLE

### Organizzazione Attuale
```
public/images/villa/appartamenti/
├── frangipane/
│   ├── main.jpg
│   ├── camera-matrimoniale-frangipane-1.jpg
│   ├── cucina-appartamento-frangipane-1.jpg
│   └── ...
├── fiordaliso/
├── orchidea/
├── tulipano/
├── giglio/
├── lavanda/
├── geranio/
├── gardenia/
└── azalea/
```

### Foto Minime Richieste per Appartamento

**MINIMO 5 foto per appartamento:**
1. **main.jpg** - Foto principale (esterno o interno più rappresentativo)
2. **camera-1.jpg** - Camera da letto principale
3. **cucina.jpg** - Cucina/area cucina
4. **bagno.jpg** - Bagno
5. **esterno.jpg** - Terrazza/balcone/veranda/gazebo

**IDEALE 8-10 foto per appartamento:**
- 2-3 foto camere
- 1-2 foto cucina
- 1-2 foto bagno
- 2-3 foto esterni (terrazza, balcone, gazebo)
- 1 foto living/zona giorno (se presente)

---

## 🔧 OTTIMIZZAZIONE AUTOMATICA

### Script che Creerò

Se scegli l'opzione 2, creerò uno script che:

```bash
# Script: scripts/optimize-apartment-images.js
# Funzionalità:
- Legge tutte le foto dalla cartella sorgente
- Ridimensiona a dimensioni ottimali
- Comprime mantenendo qualità visiva
- Converte in WebP (con fallback JPG)
- Genera thumbnails 400x300px
- Organizza per appartamento
```

**Vantaggi:**
- ✅ Processo automatico
- ✅ Qualità ottimizzata
- ✅ Formati moderni (WebP)
- ✅ Dimensioni file ridotte
- ✅ Caricamento più veloce

---

## 📊 TABELLA RIEPILOGATIVA

| Tipo Foto | Dimensioni | Formato | Qualità | Peso Max |
|-----------|------------|---------|---------|----------|
| **Hero/Main** | 1920x1080px | JPG | 90% | 500KB |
| **Gallery** | 1200x800px | JPG | 85% | 300KB |
| **Thumbnail** | 400x300px | JPG | 80% | 100KB |
| **Originale** | Fino a 4000px | Qualsiasi | - | 10MB |

---

## ✅ RACCOMANDAZIONE FINALE

**CONSIGLIO: Opzione 1 (Tu prepari le foto)**

**Motivi:**
1. Controllo totale sulla qualità
2. Risparmio tempo (no script necessario)
3. Risultato immediato
4. Dimensioni file ottimali

**Parametri da usare:**
- **Risoluzione:** 1920x1080px per main, 1200x800px per gallery
- **Formato:** JPG
- **Qualità:** 85-90%
- **Peso:** Max 500KB per main, 300KB per gallery

**Se preferisci Opzione 2:**
- Carica le foto originali
- Io creerò lo script di ottimizzazione
- Processo automatico completo

---

## 🚀 PROSSIMI PASSI

1. **Tu prepari le foto** con i parametri sopra
2. **Carica in:** `public/images/villa/appartamenti/[nome-appartamento]/`
3. **Aggiorno i riferimenti** nel file `data/apartments.ts`
4. **Testo visualizzazione** su tutte le pagine

**Oppure:**

1. **Carica foto originali** (qualsiasi formato/dimensione)
2. **Io creo script ottimizzazione**
3. **Eseguo ottimizzazione automatica**
4. **Aggiorno riferimenti**

---

**Dimmi quale opzione preferisci e procedo!** 🎯















