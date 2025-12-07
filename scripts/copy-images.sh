#!/bin/bash

# Script per copiare le immagini da "Villa Olimpia 2026" al progetto

set -e

PROJECT_DIR="/Users/francesconigro/Desktop/VillaOlimpia"
SOURCE_DIRS=(
  "$HOME/Desktop/Villa Olimpia 2026"
  "$HOME/Villa Olimpia 2026"
  "$HOME/Documents/Villa Olimpia 2026"
  "/Users/francesconigro/Desktop/Villa Olimpia 2026"
)

TARGET_DIR="$PROJECT_DIR/public/images/villa"

# Trova la cartella sorgente
SOURCE_DIR=""
for dir in "${SOURCE_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    SOURCE_DIR="$dir"
    echo "✅ Cartella trovata: $SOURCE_DIR"
    break
  fi
done

if [ -z "$SOURCE_DIR" ]; then
  echo "❌ Cartella 'Villa Olimpia 2026' non trovata!"
  echo "Cercata in:"
  for dir in "${SOURCE_DIRS[@]}"; do
    echo "  - $dir"
  done
  echo ""
  echo "Esegui questo comando per cercarla:"
  echo "  find ~ -name '*Villa Olimpia 2026*' -type d 2>/dev/null"
  exit 1
fi

# Crea le cartelle di destinazione
echo "📁 Creazione cartelle..."
mkdir -p "$TARGET_DIR"/{hero,gallery,apartments,location,services}

# Conta le immagini
IMAGE_COUNT=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')

if [ "$IMAGE_COUNT" -eq 0 ]; then
  echo "⚠️  Nessuna immagine trovata in $SOURCE_DIR"
  exit 1
fi

echo "📸 Trovate $IMAGE_COUNT immagini"

# Copia le immagini nella cartella gallery (temporaneamente)
echo "📋 Copia immagini in corso..."
find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -exec cp {} "$TARGET_DIR/gallery/" \;

COPIED_COUNT=$(ls -1 "$TARGET_DIR/gallery" 2>/dev/null | wc -l | tr -d ' ')

echo "✅ Copiate $COPIED_COUNT immagini in $TARGET_DIR/gallery/"
echo ""
echo "📝 Prossimi passi:"
echo "1. Organizza manualmente le immagini nelle cartelle appropriate:"
echo "   - hero/ (immagine principale per homepage)"
echo "   - gallery/ (foto generali)"
echo "   - apartments/ (foto degli appartamenti)"
echo "   - location/ (foto della location)"
echo "   - services/ (foto dei servizi)"
echo ""
echo "2. Ottimizza le immagini con TinyPNG o Squoosh"
echo "3. Le immagini saranno automaticamente ottimizzate da next/image"


