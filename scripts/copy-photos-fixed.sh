#!/bin/bash

# Script per copiare le foto da "Foto Villa Olimpia Sito" al progetto

set -e

PROJECT_DIR="/Users/francesconigro/Desktop/VillaOlimpia"
SOURCE_DIR="$HOME/Desktop/Foto Villa Olimpia Sito"
TARGET_DIR="$PROJECT_DIR/public/images/villa"

echo "📸 Integrazione Foto Villa Olimpia"
echo "=================================="
echo ""

# Verifica che la cartella sorgente esista
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Cartella non trovata: $SOURCE_DIR"
  echo ""
  echo "Cerca la cartella con:"
  echo "  find ~/Desktop -name '*Foto Villa Olimpia*' -type d"
  exit 1
fi

echo "✅ Cartella trovata: $SOURCE_DIR"
echo ""

# Crea le cartelle di destinazione
echo "📁 Creazione struttura cartelle..."
mkdir -p "$TARGET_DIR"/{hero,rooms,pool,outdoor,beach,amenities,gallery}

# Conta le immagini
IMAGE_COUNT=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')

if [ "$IMAGE_COUNT" -eq 0 ]; then
  echo "⚠️  Nessuna immagine trovata in $SOURCE_DIR"
  exit 1
fi

echo "📸 Trovate $IMAGE_COUNT immagini"
echo ""

# Copia tutte le immagini nella cartella gallery (temporaneamente)
echo "📋 Copia immagini in corso..."
find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -exec cp {} "$TARGET_DIR/gallery/" \;

COPIED_COUNT=$(ls -1 "$TARGET_DIR/gallery" 2>/dev/null | wc -l | tr -d ' ')

echo "✅ Copiate $COPIED_COUNT immagini in $TARGET_DIR/gallery/"
echo ""

# Organizza automaticamente le foto per nome
echo "🗂️  Organizzazione automatica immagini..."

# Hero images (facciata, esterna, notte)
find "$TARGET_DIR/gallery" -iname "*facciata*" -o -iname "*esterna*" -o -iname "*notte*" | head -5 | while read img; do
  [ -f "$img" ] && mv "$img" "$TARGET_DIR/hero/" 2>/dev/null || true
done

# Pool images
find "$TARGET_DIR/gallery" -iname "*piscina*" -o -iname "*pool*" | while read img; do
  [ -f "$img" ] && mv "$img" "$TARGET_DIR/pool/" 2>/dev/null || true
done

# Rooms images
find "$TARGET_DIR/gallery" -iname "*camera*" -o -iname "*appartamento*" -o -iname "*sala*" -o -iname "*cucina*" -o -iname "*terrazza*" | while read img; do
  [ -f "$img" ] && mv "$img" "$TARGET_DIR/rooms/" 2>/dev/null || true
done

# Outdoor images
find "$TARGET_DIR/gallery" -iname "*gazebo*" -o -iname "*giardino*" | while read img; do
  [ -f "$img" ] && mv "$img" "$TARGET_DIR/outdoor/" 2>/dev/null || true
done

# Beach images
find "$TARGET_DIR/gallery" -iname "*spiaggia*" -o -iname "*beach*" -o -iname "*mare*" | while read img; do
  [ -f "$img" ] && mv "$img" "$TARGET_DIR/beach/" 2>/dev/null || true
done

echo "✅ Organizzazione completata!"
echo ""
echo "📝 Prossimi passi:"
echo "1. Verifica le immagini nelle cartelle:"
echo "   - hero/ (per homepage)"
echo "   - rooms/ (appartamenti)"
echo "   - pool/ (piscina)"
echo "   - outdoor/ (terrazze, gazebo)"
echo "   - beach/ (spiagge)"
echo "   - gallery/ (foto generali)"
echo ""
echo "2. Ottimizza le immagini con TinyPNG o Squoosh"
echo "3. Le immagini saranno automaticamente ottimizzate da next/image"


