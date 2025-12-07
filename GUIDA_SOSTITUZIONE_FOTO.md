# 📸 GUIDA PASSO-PASSO - Sostituzione Foto 3 Appartamenti

## 🎯 OBIETTIVO
Sostituire le foto temporanee di **Frangipane, Fiordaliso e Orchidea** con foto reali.

---

## 📋 STEP 1: VERIFICA FOTO DISPONIBILI

### Controlla la cartella Desktop
Apri la cartella: `~/Desktop/Foto Villa Olimpia Sito`

### Cerca foto che contengono questi nomi:
- **Frangipane**: cerca file con "Frangipane" nel nome
- **Fiordaliso**: cerca file con "Fiordaliso" nel nome  
- **Orchidea**: cerca file con "Orchidea" nel nome

### Se non trovi foto specifiche:
Puoi usare foto generiche di appartamenti (living, camera, cucina, bagno) e assegnarle agli appartamenti mancanti.

---

## 📋 STEP 2: PREPARA LE CARTELLE

Le cartelle esistono già ma sono vuote. Verifica:

```bash
# Cartelle esistenti:
public/images/villa/appartamenti/frangipane/
public/images/villa/appartamenti/fiordaliso/
public/images/villa/appartamenti/orchidea/
```

---

## 📋 STEP 3: COPIA LE FOTO

### Opzione A - Se hai foto specifiche per ogni appartamento:

**Per FRANGIPANE:**
```bash
# Copia la foto principale (es. living o camera)
cp ~/Desktop/"Foto Villa Olimpia Sito"/[nome-file-frangipane].jpg \
   /Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti/frangipane/main.jpg
```

**Per FIORDALISO:**
```bash
cp ~/Desktop/"Foto Villa Olimpia Sito"/[nome-file-fiordaliso].jpg \
   /Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti/fiordaliso/main.jpg
```

**Per ORCHIDEA:**
```bash
cp ~/Desktop/"Foto Villa Olimpia Sito"/[nome-file-orchidea].jpg \
   /Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti/orchidea/main.jpg
```

### Opzione B - Se NON hai foto specifiche (usa foto generiche):

Puoi usare foto di altri appartamenti o foto generiche della villa.

**Esempio con foto generiche:**
```bash
# Usa una foto living generica per Frangipane
cp ~/Desktop/"Foto Villa Olimpia Sito"/[qualche-foto-living].jpg \
   /Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti/frangipane/main.jpg

# Usa una foto camera per Fiordaliso
cp ~/Desktop/"Foto Villa Olimpia Sito"/[qualche-foto-camera].jpg \
   /Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti/fiordaliso/main.jpg

# Usa una foto terrazza per Orchidea
cp ~/Desktop/"Foto Villa Olimpia Sito"/[qualche-foto-terrazza].jpg \
   /Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti/orchidea/main.jpg
```

---

## 📋 STEP 4: AGGIORNA I PERCORSI NEL CODICE

Dopo aver copiato le foto, aggiorna `data/apartments.ts`:

### FRANGIPANE (id: 1):
```typescript
image: "/images/villa/appartamenti/frangipane/main.jpg",
images: [
  "/images/villa/appartamenti/frangipane/main.jpg",
  // Aggiungi altre foto se disponibili
],
```

### FIORDALISO (id: 2):
```typescript
image: "/images/villa/appartamenti/fiordaliso/main.jpg",
images: [
  "/images/villa/appartamenti/fiordaliso/main.jpg",
  // Aggiungi altre foto se disponibili
],
```

### ORCHIDEA (id: 3):
```typescript
image: "/images/villa/appartamenti/orchidea/main.jpg",
images: [
  "/images/villa/appartamenti/orchidea/main.jpg",
  // Aggiungi altre foto se disponibili
],
```

---

## 📋 STEP 5: VERIFICA

1. Controlla che i file esistano:
```bash
ls -la public/images/villa/appartamenti/frangipane/main.jpg
ls -la public/images/villa/appartamenti/fiordaliso/main.jpg
ls -la public/images/villa/appartamenti/orchidea/main.jpg
```

2. Aggiorna la pagina nel browser (Cmd+Shift+R)

3. Verifica che le card mostrino le nuove foto

---

## 🎯 PROCEDURA RAPIDA (se hai le foto pronte)

Dimmi quali foto vuoi usare e io:
1. ✅ Le copio nelle cartelle corrette
2. ✅ Aggiorno i percorsi in `data/apartments.ts`
3. ✅ Verifico che tutto funzioni

**Basta che mi indichi:**
- Quale foto usare per Frangipane
- Quale foto usare per Fiordaliso
- Quale foto usare per Orchidea

E procedo automaticamente! 🚀


