#!/bin/bash

# Script per sostituire tutte le foto di Villa Olimpia
# Backup automatico e sostituzione completa

set -e

PROJECT_DIR="/Users/francesconigro/Desktop/ViviCalabria.com"
SOURCE_DIR="/Users/francesconigro/Desktop/Foto Villa Olimpia Sito"
IMAGES_DIR="$PROJECT_DIR/public/images"

echo "🚀 SOSTITUZIONE FOTO VILLA OLIMPIA"
echo "=================================="
echo ""

# Step 1: Backup
echo "📦 Step 1: Backup foto esistenti..."
BACKUP_DIR="$PROJECT_DIR/backup_images_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r "$IMAGES_DIR" "$BACKUP_DIR/" 2>/dev/null || true
echo "✅ Backup salvato in: $BACKUP_DIR"
echo ""

# Step 2: Elimina vecchie foto
echo "🗑️  Step 2: Eliminazione foto vecchie..."
rm -rf "$IMAGES_DIR/villa/appartamenti"
rm -rf "$IMAGES_DIR/villa/gallery"
rm -rf "$IMAGES_DIR/villa/hero"
# Manteniamo location per ora (potrebbe essere utile)
echo "✅ Vecchie foto eliminate"
echo ""

# Step 3: Crea struttura cartelle
echo "📁 Step 3: Creazione struttura cartelle..."
APARTMENTS=("frangipane" "fiordaliso" "orchidea" "tulipano" "giglio" "gardenia" "geranio" "azalea" "lavanda")

mkdir -p "$IMAGES_DIR/villa/appartamenti"
mkdir -p "$IMAGES_DIR/villa/gallery"
mkdir -p "$IMAGES_DIR/villa/hero"

for apt in "${APARTMENTS[@]}"; do
  mkdir -p "$IMAGES_DIR/villa/appartamenti/$apt"
done

echo "✅ Struttura cartelle creata"
echo ""

# Step 4: Mappa e copia foto per appartamento
echo "📸 Step 4: Copia e organizzazione foto..."
cd "$SOURCE_DIR"

# Contatori
copied=0
skipped=0

# Funzione per normalizzare nome file
normalize_name() {
  local name=$(echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/_/g')
  echo "$name"
}

# Processa ogni foto
for file in *.jpg *.JPG; do
  if [ ! -f "$file" ]; then continue; fi
  
  filename=$(basename "$file")
  name_lower=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
  
  # Mappa foto per appartamento
  assigned=false
  
  for apt in "${APARTMENTS[@]}"; do
    if [[ "$name_lower" == *"$apt"* ]]; then
      # Normalizza nome file (rimuove spazi, caratteri speciali)
      clean_name=$(echo "$filename" | sed "s/[^a-zA-Z0-9._-]/_/g" | tr '[:upper:]' '[:lower:]')
      
      cp "$file" "$IMAGES_DIR/villa/appartamenti/$apt/$clean_name"
      echo "  ✅ $filename → appartamenti/$apt/"
      copied=$((copied + 1))
      assigned=true
      break
    fi
  done
  
  # Foto generiche (esterni, piscina, etc.)
  if [ "$assigned" = false ]; then
    if [[ "$name_lower" == *"esterni"* ]] || [[ "$name_lower" == *"facciata"* ]] || \
       [[ "$name_lower" == *"ingresso"* ]] || [[ "$name_lower" == *"gazebo"* ]] || \
       [[ "$name_lower" == *"piscina"* ]] || [[ "$name_lower" == *"barbecue"* ]] || \
       [[ "$name_lower" == *"villa"* ]]; then
      
      clean_name=$(echo "$filename" | sed "s/[^a-zA-Z0-9._-]/_/g" | tr '[:upper:]' '[:lower:]')
      
      # Se contiene "hero" o "facciata" va in hero, altrimenti gallery
      if [[ "$name_lower" == *"hero"* ]] || [[ "$name_lower" == *"facciata"* ]] || [[ "$name_lower" == *"ingresso"* ]]; then
        cp "$file" "$IMAGES_DIR/villa/hero/$clean_name"
        echo "  ✅ $filename → gallery/hero/"
      else
        cp "$file" "$IMAGES_DIR/villa/gallery/$clean_name"
        echo "  ✅ $filename → gallery/"
      fi
      
      copied=$((copied + 1))
      assigned=true
    fi
  fi
  
  # Spiagge vanno in location
  if [ "$assigned" = false ]; then
    if [[ "$name_lower" == *"spiaggia"* ]]; then
      mkdir -p "$IMAGES_DIR/villa/location"
      clean_name=$(echo "$filename" | sed "s/[^a-zA-Z0-9._-]/_/g" | tr '[:upper:]' '[:lower:]')
      cp "$file" "$IMAGES_DIR/villa/location/$clean_name"
      echo "  ✅ $filename → location/"
      copied=$((copied + 1))
      assigned=true
    fi
  fi
  
  if [ "$assigned" = false ]; then
    echo "  ⚠️  $filename → NON ASSEGNATA (verificare manualmente)"
    skipped=$((skipped + 1))
  fi
done

echo ""
echo "📊 RIEPILOGO:"
echo "  ✅ Foto copiate: $copied"
echo "  ⚠️  Foto non assegnate: $skipped"
echo ""
echo "✅ SOSTITUZIONE COMPLETATA!"
echo ""
echo "⚠️  PROSSIMO STEP: Aggiornare data/apartments.ts con i nuovi path"











