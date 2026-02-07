# 📸 METODOLOGIA COMPLETA - Caricamento Foto Appartamenti

## 🎯 OBIETTIVO
Metodologia standardizzata per caricare correttamente le foto degli appartamenti, una alla volta, evitando errori e duplicati.

---

## 📋 STRUTTURA CARTELLE

### Percorso Standard:
```
public/images/villa/appartamenti/[nome-appartamento]/
```

### Nomi Appartamenti (9 totali):
1. **frangipane** - Piano Terra
2. **fiordaliso** - Piano Terra
3. **orchidea** - Piano Terra
4. **tulipano** - Piano Terra
5. **giglio** - Piano Terra
6. **lavanda** - Piano Terra
7. **geranio** - Primo Piano (PREMIUM)
8. **gardenia** - Primo Piano
9. **azalea** - Primo Piano

---

## ✅ PROCEDURA PASSO-PASSO

### STEP 1: VERIFICA FOTO DISPONIBILI

1. **Apri Finder** e vai alla cartella con le foto originali:
   ```
   ~/Desktop/Foto Villa Olimpia Sito/
   ```
   Oppure:
   ```
   ~/Desktop/[Nome Cartella Foto]/
   ```

2. **Cerca foto** che contengono il nome dell'appartamento nel nome del file:
   - Esempio per Frangipane: cerca file con "Frangipane" nel nome
   - Esempio per Geranio: cerca file con "Geranio" nel nome

3. **Seleziona le foto migliori** (3-6 foto per appartamento):
   - 1 foto principale (main/copertina)
   - 1-2 foto camera da letto
   - 1 foto zona living
   - 1 foto cucina (se disponibile)
   - 1 foto bagno (se disponibile)
   - 1 foto terrazza/balcone (se disponibile)

---

### STEP 2: PREPARA I NOMI DEI FILE

**CONVENZIONE NOMI FILE** (tutto minuscolo, underscore invece di spazi):

#### Foto Principale:
- `main.jpg` oppure `[nome_appartamento]_main.jpg`
- Esempio: `frangipane_main.jpg`

#### Camera da Letto:
- `camera_matrimoniale_[nome].jpg`
- Esempio: `camera_matrimoniale_frangipane.jpg`
- Se più camere: `camera_1_[nome].jpg`, `camera_2_[nome].jpg`

#### Zona Living:
- `zona_living_[nome].jpg`
- Esempio: `zona_living_frangipane.jpg`

#### Cucina:
- `cucina_[nome].jpg`
- Esempio: `cucina_frangipane.jpg`

#### Bagno:
- `bagno_[nome].jpg`
- Esempio: `bagno_frangipane.jpg`
- Se più bagni: `bagno_1_[nome].jpg`, `bagno_2_[nome].jpg`

#### Terrazza/Balcone:
- `terrazza_[nome].jpg` oppure `veranda_[nome].jpg`
- Esempio: `terrazza_frangipane.jpg`

---

### STEP 3: COPIA LE FOTO

#### Metodo A - Manuale (Finder):

1. **Crea la cartella** se non esiste:
   ```
   public/images/villa/appartamenti/[nome-appartamento]/
   ```
   Esempio: `public/images/villa/appartamenti/frangipane/`

2. **Copia i file** dalla cartella sorgente alla cartella destinazione

3. **Rinomina i file** seguendo la convenzione sopra

#### Metodo B - Terminale (più veloce):

```bash
# Vai nella directory del progetto
cd ~/Desktop/ViviCalabria.com

# Crea la cartella se non esiste
mkdir -p public/images/villa/appartamenti/[nome-appartamento]

# Copia e rinomina le foto
cp "~/Desktop/Foto Villa Olimpia Sito/[Nome File Originale].jpg" \
   "public/images/villa/appartamenti/[nome-appartamento]/[nome_standardizzato].jpg"
```

**Esempio concreto per Frangipane:**
```bash
cd ~/Desktop/ViviCalabria.com
mkdir -p public/images/villa/appartamenti/frangipane

# Foto principale
cp "~/Desktop/Foto Villa Olimpia Sito/Camera Matrimoniale Appartamento Frangipane(2).jpg" \
   "public/images/villa/appartamenti/frangipane/camera_matrimoniale_frangipane.jpg"

# Zona living
cp "~/Desktop/Foto Villa Olimpia Sito/Zona Living Appartamento Frangipane.jpg" \
   "public/images/villa/appartamenti/frangipane/zona_living_frangipane.jpg"

# Veranda
cp "~/Desktop/Foto Villa Olimpia Sito/Veranda Frangipane 1.jpg" \
   "public/images/villa/appartamenti/frangipane/veranda_frangipane.jpg"

# Bagno
cp "~/Desktop/Foto Villa Olimpia Sito/Bagno Frangipane completo.jpg" \
   "public/images/villa/appartamenti/frangipane/bagno_frangipane_completo.jpg"
```

---

### STEP 4: AGGIORNA IL FILE `data/apartments.ts`

1. **Apri il file:**
   ```
   data/apartments.ts
   ```

2. **Trova l'appartamento** che stai aggiornando (cerca per `id` o `name`)

3. **Aggiorna il campo `image`** (foto principale):
   ```typescript
   image: "/images/villa/appartamenti/[nome-appartamento]/[nome-file].jpg",
   ```

4. **Aggiorna l'array `images`** (tutte le foto):
   ```typescript
   images: [
     "/images/villa/appartamenti/[nome-appartamento]/[foto-1].jpg",
     "/images/villa/appartamenti/[nome-appartamento]/[foto-2].jpg",
     "/images/villa/appartamenti/[nome-appartamento]/[foto-3].jpg",
     // ... altre foto
   ],
   ```

**Esempio concreto per Frangipane:**
```typescript
{
  id: 1,
  name: "Frangipane",
  // ... altri campi ...
  image: "/images/villa/appartamenti/frangipane/camera_matrimoniale_frangipane.jpg",
  images: [
    "/images/villa/appartamenti/frangipane/camera_matrimoniale_frangipane.jpg",
    "/images/villa/appartamenti/frangipane/zona_living_frangipane.jpg",
    "/images/villa/appartamenti/frangipane/veranda_frangipane.jpg",
    "/images/villa/appartamenti/frangipane/bagno_frangipane_completo.jpg",
  ],
}
```

---

### STEP 5: VERIFICA

1. **Controlla che i file esistano:**
   ```bash
   ls -la public/images/villa/appartamenti/[nome-appartamento]/
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Visita la pagina dell'appartamento:**
   ```
   http://localhost:3001/appartamenti/apartment-[id]
   ```
   Esempio: `http://localhost:3001/appartamenti/apartment-1`

4. **Verifica che le foto si carichino correttamente**

---

## 🔍 CHECKLIST PER OGNI APPARTAMENTO

- [ ] Foto copiate nella cartella corretta
- [ ] File rinominati seguendo la convenzione
- [ ] Percorsi aggiornati in `data/apartments.ts`
- [ ] Foto principale (`image`) impostata
- [ ] Array `images` aggiornato con tutte le foto
- [ ] Verifica visiva nel browser
- [ ] Nessun errore 404 nella console

---

## ⚠️ REGOLE IMPORTANTI

### ✅ DA FARE:
- ✅ Usare sempre nomi file minuscoli
- ✅ Usare underscore `_` invece di spazi
- ✅ Usare solo lettere, numeri e underscore
- ✅ Mantenere l'estensione `.jpg` o `.png`
- ✅ Verificare sempre i percorsi prima di salvare
- ✅ Testare nel browser dopo ogni modifica

### ❌ DA EVITARE:
- ❌ Spazi nei nomi file
- ❌ Caratteri speciali (`!`, `@`, `#`, `$`, ecc.)
- ❌ Maiuscole nei nomi file (usa sempre minuscolo)
- ❌ Percorsi assoluti (usa sempre percorsi relativi da `/images/...`)
- ❌ Duplicati nella stessa cartella
- ❌ File con nomi troppo lunghi

---

## 📊 STATO ATTUALE FOTO

### ✅ COMPLETATI:
- [x] **Frangipane** - Foto principali copiate
- [x] **Fiordaliso** - Foto bagno presente
- [x] **Orchidea** - Foto camera presente
- [x] **Tulipano** - Foto presenti
- [x] **Giglio** - Foto presenti
- [x] **Lavanda** - Foto presenti
- [x] **Geranio** - Foto presenti
- [x] **Gardenia** - Foto presenti
- [x] **Azalea** - Foto presenti

### ⚠️ DA COMPLETARE:
- [ ] Verificare che tutte le foto siano nella cartella corretta
- [ ] Aggiungere foto mancanti per ogni appartamento
- [ ] Verificare che i percorsi in `data/apartments.ts` siano corretti

---

## 🆘 RISOLUZIONE PROBLEMI

### Problema: Foto non si carica (404)
**Soluzione:**
1. Verifica che il file esista nella cartella corretta
2. Verifica che il percorso in `data/apartments.ts` sia corretto
3. Verifica che non ci siano spazi o caratteri speciali nel nome
4. Ricarica la pagina con `Cmd+Shift+R` (hard refresh)

### Problema: Foto duplicata
**Soluzione:**
1. Verifica nella cartella se ci sono file duplicati
2. Elimina i duplicati mantenendo solo quello con nome corretto
3. Aggiorna `data/apartments.ts` per rimuovere il percorso duplicato

### Problema: Nome file troppo lungo
**Soluzione:**
1. Usa abbreviazioni: `camera_matrimoniale` → `camera_mat`
2. Mantieni comunque il nome descrittivo
3. Massimo 50 caratteri consigliati

---

## 📝 TEMPLATE PER NUOVO APPARTAMENTO

```typescript
{
  id: [numero],
  name: "[Nome Appartamento]",
  floor: "[Piano Terra | Primo Piano]",
  position: "[Posizione]",
  size: "[X] mq",
  guests: [numero],
  bedrooms: [numero],
  bathrooms: [numero],
  features: [...],
  image: "/images/villa/appartamenti/[nome]/main.jpg",
  images: [
    "/images/villa/appartamenti/[nome]/main.jpg",
    "/images/villa/appartamenti/[nome]/camera_matrimoniale_[nome].jpg",
    "/images/villa/appartamenti/[nome]/zona_living_[nome].jpg",
    // ... altre foto
  ],
  description: "...",
  fullDescription: "...",
  price: [numero],
}
```

---

## 🎯 PROSSIMI PASSI

1. **Completa le foto mancanti** seguendo questa metodologia
2. **Verifica tutti i percorsi** in `data/apartments.ts`
3. **Testa ogni appartamento** nel browser
4. **Elimina eventuali duplicati** dalla gallery

---

**Ultimo aggiornamento:** Dicembre 2024
**Versione:** 1.0











