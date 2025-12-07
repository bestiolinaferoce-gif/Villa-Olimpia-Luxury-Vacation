# 📸 GUIDA COMPLETA - Sostituzione Foto 3 Appartamenti

## ✅ STATO ATTUALE

**Percorsi nel codice già aggiornati!** ✅
- `data/apartments.ts` è stato modificato con i nuovi percorsi
- Ora devi solo copiare le foto fisicamente nelle cartelle

---

## 📋 STEP 1: FRANGIPANE (Foto Reali Specifiche!)

### Foto Disponibili nella Cartella Desktop:
Ho trovato la cartella `~/Desktop/Frangipane/` con foto specifiche!

### Operazione da Fare:

1. **Apri Finder** e vai a:
   ```
   ~/Desktop/Frangipane/
   ```

2. **Copia questi 4 file** nella cartella del progetto:
   ```
   Destinazione: ~/Desktop/VillaOlimpia/public/images/villa/appartamenti/frangipane/
   ```

3. **Rinomina i file** come segue:
   - `Camera Matrimoniale Appartamento Frangipane(2).jpg` → **`main.jpg`**
   - `Camera Matrimoniale Frangipane (1).jpg` → **`bedroom.jpg`**
   - `Cucina Appartamento Frangipane 1.jpg` → **`kitchen.jpg`**
   - `Bagno Frangipane .jpg` → **`bathroom.jpg`**

### Risultato Atteso:
```
public/images/villa/appartamenti/frangipane/
  ├── main.jpg
  ├── bedroom.jpg
  ├── kitchen.jpg
  └── bathroom.jpg
```

---

## 📋 STEP 2: FIORDALISO (Placeholder Temporaneo)

### Foto da Usare:
**Living Room appartamento Azalea** (come placeholder temporaneo)

### Operazione da Fare:

1. **Apri Finder** e vai a:
   ```
   ~/Desktop/Foto Villa Olimpia Sito/
   ```

2. **Cerca il file:**
   ```
   Living Room appartamento Azalea .jpg
   ```

3. **Copia il file** nella cartella:
   ```
   Destinazione: ~/Desktop/VillaOlimpia/public/images/villa/appartamenti/fiordaliso/
   ```

4. **Rinomina come:**
   ```
   Living Room appartamento Azalea .jpg → main.jpg
   ```

### Risultato Atteso:
```
public/images/villa/appartamenti/fiordaliso/
  └── main.jpg
```

### ⚠️ Nota:
Se hai una foto specifica di Fiordaliso, usala al posto di questa!

---

## 📋 STEP 3: ORCHIDEA (Placeholder Temporaneo)

### Foto da Usare:
**Camera Matrimoniale Appartamento Gardenia** (come placeholder temporaneo)

### Operazione da Fare:

1. **Apri Finder** e vai a:
   ```
   ~/Desktop/Foto Villa Olimpia Sito/
   ```

2. **Cerca il file:**
   ```
   Camera Matrimoniale Appartamento Gardenia.jpg
   ```

3. **Copia il file** nella cartella:
   ```
   Destinazione: ~/Desktop/VillaOlimpia/public/images/villa/appartamenti/orchidea/
   ```

4. **Rinomina come:**
   ```
   Camera Matrimoniale Appartamento Gardenia.jpg → main.jpg
   ```

### Risultato Atteso:
```
public/images/villa/appartamenti/orchidea/
  └── main.jpg
```

### ⚠️ Nota:
Se hai una foto specifica di Orchidea, usala al posto di questa!

---

## 🚀 PROCEDURA RAPIDA (Terminale)

Se preferisci usare il terminale, esegui questo comando:

```bash
cd ~/Desktop/VillaOlimpia

# FRANGIPANE
cp ~/Desktop/Frangipane/"Camera Matrimoniale Appartamento Frangipane(2).jpg" \
   public/images/villa/appartamenti/frangipane/main.jpg

cp ~/Desktop/Frangipane/"Camera Matrimoniale Frangipane (1).jpg" \
   public/images/villa/appartamenti/frangipane/bedroom.jpg

cp ~/Desktop/Frangipane/"Cucina Appartamento Frangipane 1.jpg" \
   public/images/villa/appartamenti/frangipane/kitchen.jpg

cp ~/Desktop/Frangipane/"Bagno Frangipane .jpg" \
   public/images/villa/appartamenti/frangipane/bathroom.jpg

# FIORDALISO
cp ~/Desktop/"Foto Villa Olimpia Sito"/"Living Room appartamento Azalea .jpg" \
   public/images/villa/appartamenti/fiordaliso/main.jpg

# ORCHIDEA
cp ~/Desktop/"Foto Villa Olimpia Sito"/"Camera Matrimoniale Appartamento Gardenia.jpg" \
   public/images/villa/appartamenti/orchidea/main.jpg
```

---

## ✅ VERIFICA FINALE

Dopo aver copiato tutte le foto:

1. **Verifica che i file esistano:**
   ```bash
   ls -la ~/Desktop/VillaOlimpia/public/images/villa/appartamenti/frangipane/
   ls -la ~/Desktop/VillaOlimpia/public/images/villa/appartamenti/fiordaliso/
   ls -la ~/Desktop/VillaOlimpia/public/images/villa/appartamenti/orchidea/
   ```

2. **Ricarica la pagina** nel browser:
   - Premi `Cmd + Shift + R` (Mac) o `Ctrl + Shift + R` (Windows)
   - Questo forza il refresh delle immagini

3. **Controlla le card** degli appartamenti nella homepage

4. **Apri le pagine dettaglio** di ogni appartamento per vedere le gallery

---

## 📊 RIEPILOGO

### ✅ Completato:
- [x] Percorsi aggiornati in `data/apartments.ts`
- [x] Cartelle create
- [x] Guida completa creata

### ⏳ Da Fare (Tuo):
- [ ] Copiare foto Frangipane (4 file)
- [ ] Copiare foto Fiordaliso (1 file)
- [ ] Copiare foto Orchidea (1 file)
- [ ] Verificare nel browser

---

## 💡 SUGGERIMENTI

- **Frangipane**: Hai foto reali specifiche! Usale tutte e 4.
- **Fiordaliso e Orchidea**: Usa i placeholder per ora, poi sostituisci quando hai foto specifiche.
- **Se una foto non esiste**: Il componente mostrerà automaticamente un placeholder elegante.
- **Dopo la copia**: Ricarica sempre la pagina con `Cmd+Shift+R` per vedere le nuove foto.

---

## 🎯 RISULTATO FINALE

Dopo aver completato tutti gli step:
- ✅ Frangipane avrà 4 foto reali
- ✅ Fiordaliso avrà 1 foto placeholder
- ✅ Orchidea avrà 1 foto placeholder
- ✅ Tutte le card mostreranno foto (non più placeholder generici)
- ✅ Le pagine dettaglio avranno gallery funzionanti

**Buon lavoro! 🚀**


