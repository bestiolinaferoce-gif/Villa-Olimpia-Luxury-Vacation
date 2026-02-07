#!/bin/bash
# Script: auto-import-photos.sh
# Identifica automaticamente nuove foto e le organizza

set -e

PROJECT_DIR="$HOME/Desktop/ViviCalabria.com"
SOURCE_DIR="$HOME/Desktop/Foto Villa Olimpia Sito"
IMAGES_DIR="$PROJECT_DIR/public/images"

echo "🔍 Scansione cartella foto..."

# Verifica cartella sorgente esiste
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Cartella '$SOURCE_DIR' non trovata"
  echo "Possibili alternative:"
  find ~/Desktop -maxdepth 2 -type d -iname "*foto*villa*" 2>/dev/null
  exit 1
fi

# Conta foto in sorgente
TOTAL_SOURCE=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) | wc -l | tr -d ' ')
echo "📊 Foto trovate in sorgente: $TOTAL_SOURCE"

# Conta foto già presenti
EXISTING=$(find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
echo "📊 Foto già presenti nel sito: $EXISTING"

# Crea cartella temporanea per nuove foto
TEMP_DIR="$HOME/Desktop/temp-new-photos-$(date +%s)"
mkdir -p "$TEMP_DIR"

echo "🔎 Identificazione nuove foto..."

# Per ogni foto in sorgente, verifica se già esiste
NEW_COUNT=0
cd "$SOURCE_DIR"
for photo in *; do
  [ -f "$photo" ] || continue
  
  # Normalizza nome file (lowercase, rimuovi spazi strani)
  normalized=$(echo "$photo" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9._-]/_/g' | sed 's/__*/_/g' | sed 's/^_//' | sed 's/_$//')
  
  # Verifica se foto già esiste nel progetto (con qualsiasi variazione)
  found=false
  if find "$IMAGES_DIR" -type f \( -iname "*$(basename "$photo" .jpg | tr '[:upper:]' '[:lower:]')*" -o -iname "*$(basename "$photo" .png | tr '[:upper:]' '[:lower:]')*" \) 2>/dev/null | grep -q .; then
    found=true
  fi
  
  if [ "$found" = false ]; then
    echo "  ✓ Nuova: $photo"
    cp "$photo" "$TEMP_DIR/$normalized"
    NEW_COUNT=$((NEW_COUNT + 1))
  fi
done

echo "✅ Nuove foto identificate: $NEW_COUNT"

if [ $NEW_COUNT -eq 0 ]; then
  echo "⚠️ Nessuna nuova foto da importare"
  rm -rf "$TEMP_DIR"
  exit 0
fi

# Crea cartelle se non esistono
mkdir -p "$IMAGES_DIR/villa/gallery"
mkdir -p "$IMAGES_DIR/villa/hero"
mkdir -p "$IMAGES_DIR/appartamenti"
mkdir -p "$IMAGES_DIR/amenities"
mkdir -p "$IMAGES_DIR/villa/location"

# Copia nuove foto a gallery
echo "📦 Copia foto a gallery..."
cp "$TEMP_DIR"/* "$IMAGES_DIR/villa/gallery/" 2>/dev/null || true

# Organizzazione automatica per appartamento
echo "🗂️ Organizzazione automatica..."

cd "$IMAGES_DIR/villa/gallery"

# Array appartamenti (case-insensitive matching)
APPARTAMENTI=(
  "geranio" "zeus" "poseidon" "apollo" "afrodite" 
  "atena" "era" "artemide" "dioniso" "ermes" 
  "orchidea" "azalea" "giglio" "rosa" "tulipano" "fiordaliso" "frangipane"
)

for apt in "${APPARTAMENTI[@]}"; do
  mkdir -p "../../appartamenti/$apt"
  
  # Trova foto con nome appartamento (case-insensitive)
  for file in *; do
    [ -f "$file" ] || continue
    lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lowercase_file" | grep -qi "$apt"; then
      echo "  → $file → appartamenti/$apt/"
      mv "$file" "../../appartamenti/$apt/" 2>/dev/null || true
    fi
  done
done

# Organizza foto piscina
echo "🏊 Organizzazione foto piscina..."
for pattern in piscina pool acqua swimming water nuoto; do
  for file in *; do
    [ -f "$file" ] || continue
    lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lowercase_file" | grep -qi "$pattern"; then
      mkdir -p "../../amenities"
      echo "  → $file → amenities/"
      mv "$file" "../../amenities/" 2>/dev/null || true
    fi
  done
done

# Organizza foto esterni/giardino
echo "🏡 Organizzazione foto esterni..."
for pattern in esterni esterno giardino garden villa facciata facade building notte night; do
  for file in *; do
    [ -f "$file" ] || continue
    lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lowercase_file" | grep -qi "$pattern"; then
      mkdir -p "../hero"
      mv "$file" "../hero/" 2>/dev/null || true
      echo "  → $file → hero/"
      break
    fi
  done
done

# Foto hero/panoramiche
echo "📸 Organizzazione foto hero..."
for pattern in hero panorama vista main cover principale spiaggia beach mare sea location territorio; do
  for file in *; do
    [ -f "$file" ] || continue
    lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lowercase_file" | grep -qi "$pattern"; then
      if echo "$lowercase_file" | grep -qi "spiaggia\|beach\|mare\|sea\|location\|territorio"; then
        mkdir -p "../location"
        mv "$file" "../location/" 2>/dev/null || true
        echo "  → $file → location/"
      else
        mkdir -p "../hero"
        mv "$file" "../hero/" 2>/dev/null || true
        echo "  → $file → hero/"
      fi
      break
    fi
  done
done

# Standardizza naming piscina
echo "🔄 Standardizzazione nomi piscina..."
cd "$IMAGES_DIR/amenities"
counter=1
for file in *piscina* *pool* *Piscina* *Pool* *PISCINA* *POOL* 2>/dev/null; do
  [ -f "$file" ] || continue
  ext="${file##*.}"
  new_name="piscina-$(printf "%02d" $counter).$ext"
  if [ "$file" != "$new_name" ]; then
    mv "$file" "$new_name" 2>/dev/null || true
    echo "  ✓ Rinominato: $file → $new_name"
  fi
  counter=$((counter + 1))
done

# Report finale
echo ""
echo "✅ IMPORT COMPLETATO"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cd "$PROJECT_DIR"
echo "📊 Foto per categoria:"
for dir in "villa/gallery" "villa/hero" "villa/location" "appartamenti" "amenities"; do
  if [ -d "$IMAGES_DIR/$dir" ]; then
    COUNT=$(find "$IMAGES_DIR/$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
    echo "  $dir: $COUNT foto"
  fi
done

TOTAL_AFTER=$(find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
echo ""
echo "📈 Totale foto sito: $EXISTING → $TOTAL_AFTER (+$NEW_COUNT)"

# Pulisci temp
rm -rf "$TEMP_DIR"

echo ""
echo "🎯 Prossimo step: npm run build"












