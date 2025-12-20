#!/bin/bash
# Script: copy-foto-definitivo.sh
# Import intelligente foto da qualsiasi struttura cartella

set -e  # Exit on error

echo "🔍 DIAGNOSI CARTELLA FOTO"
echo "=========================="
echo ""

# 1. TROVA CARTELLA (gestisce spazi e maiuscole/minuscole)
cd ~/Desktop

echo "Cercando cartella foto sul Desktop..."
POSSIBILI_NOMI=(
  "Foto Villa Olimpia Sito"
  "foto villa olimpia sito"
  "Foto-Villa-Olimpia-Sito"
  "FotoVillaOlimpiaSito"
  "Foto Villa Olimpia"
  "foto_villa_olimpia_sito"
  "Foto_Villa_Olimpia_processed"
)

CARTELLA_TROVATA=""
for nome in "${POSSIBILI_NOMI[@]}"; do
  if [ -d "$nome" ]; then
    CARTELLA_TROVATA="$nome"
    echo "✅ Trovata: $nome"
    break
  fi
done

# Se non trovata con nomi predefiniti, cerca pattern
if [ -z "$CARTELLA_TROVATA" ]; then
  echo "Cercando con pattern..."
  CARTELLA_TROVATA=$(find . -maxdepth 1 -type d \( -iname "*foto*villa*" -o -iname "*villa*olimpia*" \) 2>/dev/null | head -1 | sed 's|^\./||')
  [ -n "$CARTELLA_TROVATA" ] && echo "✅ Trovata con pattern: $CARTELLA_TROVATA"
fi

if [ -z "$CARTELLA_TROVATA" ]; then
  echo "❌ ERRORE: Cartella foto NON trovata sul Desktop"
  echo ""
  echo "Cartelle presenti sul Desktop:"
  ls -1 ~/Desktop | grep -iE "(foto|villa|olimpia)" || ls -1 ~/Desktop
  echo ""
  echo "SOLUZIONE: Verifica il nome esatto della cartella"
  exit 1
fi

FOTO_DIR=~/Desktop/"$CARTELLA_TROVATA"
echo "📁 Cartella foto: $FOTO_DIR"
echo ""

# 2. VERIFICA PERMESSI
if [ ! -r "$FOTO_DIR" ]; then
  echo "❌ ERRORE: Cartella non leggibile"
  echo "SOLUZIONE: Esegui questo comando:"
  echo "chmod -R 755 ~/Desktop/\"$CARTELLA_TROVATA\""
  exit 1
fi

# 3. TROVA TUTTE LE FOTO (anche in sottocartelle)
echo "🔎 Cercando foto..."
FOTO_TROVATE=$(find "$FOTO_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) 2>/dev/null)
NUMERO_FOTO=$(echo "$FOTO_TROVATE" | grep -v "^$" | wc -l | tr -d ' ')

if [ "$NUMERO_FOTO" -eq 0 ]; then
  echo "❌ ERRORE: Nessuna foto trovata!"
  echo ""
  echo "Contenuto cartella:"
  ls -la "$FOTO_DIR" | head -20
  echo ""
  echo "VERIFICA: Le foto hanno estensione .jpg, .jpeg o .png?"
  exit 1
fi

echo "✅ Trovate $NUMERO_FOTO foto"
echo ""

# 4. MOSTRA STRUTTURA
echo "📊 Struttura foto (prime 10):"
echo "$FOTO_TROVATE" | head -10 | sed 's|.*/||'
if [ "$NUMERO_FOTO" -gt 10 ]; then
  echo "... e altre $((NUMERO_FOTO - 10)) foto"
fi
echo ""

# 5. PREPARA DESTINAZIONE
PROGETTO=~/Desktop/ViviCalabria.com

if [ ! -d "$PROGETTO" ]; then
  echo "❌ ERRORE: Progetto non trovato in $PROGETTO"
  exit 1
fi

cd "$PROGETTO"

# Backup foto esistenti
BACKUP_DIR=~/Desktop/backup-foto-$(date +%Y%m%d-%H%M%S)
echo "💾 Backup foto esistenti in: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
if [ -d "public/images" ]; then
  cp -r public/images "$BACKUP_DIR/" 2>/dev/null || true
fi

# Crea struttura cartelle
echo "📁 Creazione struttura cartelle..."
mkdir -p public/images/{appartamenti,amenities,hero,gallery,territorio,ristoranti}

# Lista appartamenti
APPARTAMENTI=(
  geranio zeus poseidon apollo afrodite atena era artemide dioniso ermes
  orchidea azalea frangipane fiordaliso giglio rosa tulipano margherita
)

for apt in "${APPARTAMENTI[@]}"; do
  mkdir -p "public/images/appartamenti/$apt"
done

# 6. COPIA INTELLIGENTE
echo ""
echo "📸 COPIA FOTO IN CORSO..."
echo "========================"

COPIATE=0
ERRORI=0

# Copia TUTTE le foto a gallery temporanea
echo "Step 1: Copia in gallery temporanea..."
while IFS= read -r foto; do
  if [ -f "$foto" ]; then
    NOME_FILE=$(basename "$foto")
    # Evita duplicati
    if [ ! -f "public/images/gallery/$NOME_FILE" ]; then
      cp "$foto" "public/images/gallery/$NOME_FILE" 2>/dev/null && COPIATE=$((COPIATE + 1)) || ERRORI=$((ERRORI + 1))
    fi
  fi
done <<< "$FOTO_TROVATE"

echo "  ✓ Copiate: $COPIATE foto"
if [ $ERRORI -gt 0 ]; then
  echo "  ⚠️ Errori: $ERRORI foto"
fi
echo ""

# 7. ORGANIZZA PER CATEGORIA
echo "Step 2: Organizzazione per categoria..."
cd public/images/gallery

ORGANIZZATE=0

for file in *; do
  [ -f "$file" ] || continue
  
  lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
  SPOSTATA=false
  
  # Prova ogni appartamento
  for apt in "${APPARTAMENTI[@]}"; do
    if echo "$lower" | grep -qi "$apt"; then
      mv "$file" "../appartamenti/$apt/" 2>/dev/null && ORGANIZZATE=$((ORGANIZZATE + 1))
      SPOSTATA=true
      break
    fi
  done
  
  [ "$SPOSTATA" = true ] && continue
  
  # Piscina/amenities
  if echo "$lower" | grep -qiE "piscina|pool|acqua|swimming|nuoto|esterni|esterno|giardino|garden|villa|facciata|facade|barbecue"; then
    mv "$file" "../amenities/" 2>/dev/null && ORGANIZZATE=$((ORGANIZZATE + 1))
    continue
  fi
  
  # Hero
  if echo "$lower" | grep -qiE "hero|main|panorama|vista|cover"; then
    mv "$file" "../hero/" 2>/dev/null && ORGANIZZATE=$((ORGANIZZATE + 1))
    continue
  fi
done

echo "  ✓ Organizzate: $ORGANIZZATE foto"
echo ""

# 8. REPORT FINALE
cd "$PROGETTO"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ OPERAZIONE COMPLETATA"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 RIEPILOGO:"
echo "  Foto trovate: $NUMERO_FOTO"
echo "  Foto copiate: $COPIATE"
echo "  Foto organizzate: $ORGANIZZATE"
echo ""
echo "📁 Foto per appartamento:"

for apt in "${APPARTAMENTI[@]}"; do
  if [ -d "public/images/appartamenti/$apt" ]; then
    COUNT=$(find "public/images/appartamenti/$apt" -type f 2>/dev/null | wc -l | tr -d ' ')
    [ $COUNT -gt 0 ] && echo "  $apt: $COUNT foto"
  fi
done

echo ""
AMENITIES=$(find public/images/amenities -type f 2>/dev/null | wc -l | tr -d ' ')
HERO=$(find public/images/hero -type f 2>/dev/null | wc -l | tr -d ' ')
GALLERY=$(find public/images/gallery -type f 2>/dev/null | wc -l | tr -d ' ')

echo "  amenities: $AMENITIES foto"
echo "  hero: $HERO foto"
echo "  gallery (non categorizzate): $GALLERY foto"
echo ""

TOTALE=$(find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.JPG" -o -name "*.JPEG" -o -name "*.PNG" \) 2>/dev/null | wc -l | tr -d ' ')
echo "📈 TOTALE FOTO NEL SITO: $TOTALE"
echo ""
echo "💾 Backup salvato in: $BACKUP_DIR"
echo ""
echo "🎯 PROSSIMO STEP: npm run build"











