#!/bin/bash

# Script per copiare le foto reali di Villa Olimpia
# Esegui: chmod +x scripts/copy-photos.sh && ./scripts/copy-photos.sh

SOURCE_DIR="$HOME/Desktop/Foto Villa Olimpia Sito"
DEST_DIR="./public/images/villa"

echo "📸 Copia foto Villa Olimpia..."
echo ""

if [ ! -d "$SOURCE_DIR" ]; then
  echo "⚠️  Cartella sorgente non trovata: $SOURCE_DIR"
  echo "📁 Cerca le foto nella cartella 'Foto Villa Olimpia Sito' sul Desktop"
  exit 1
fi

# Crea cartelle
mkdir -p "$DEST_DIR/hero"
mkdir -p "$DEST_DIR/appartamenti"
mkdir -p "$DEST_DIR/piscina"
mkdir -p "$DEST_DIR/outdoor"
mkdir -p "$DEST_DIR/beach"

# Copia foto specifiche se esistono
if [ -f "$SOURCE_DIR/Facciata_esterna_Villa_Olimpia_Notte.jpg" ]; then
  cp "$SOURCE_DIR/Facciata_esterna_Villa_Olimpia_Notte.jpg" "$DEST_DIR/hero/villa-olimpia-hero.jpg"
  echo "✅ Hero copiato"
fi

if [ -f "$SOURCE_DIR/Camera_da_letto_appartamento_Geranio_1_2.jpg" ]; then
  cp "$SOURCE_DIR/Camera_da_letto_appartamento_Geranio_1_2.jpg" "$DEST_DIR/appartamenti/geranio.jpg"
  echo "✅ Geranio copiato"
fi

if [ -f "$SOURCE_DIR/Piscina_Villa_Olimpia___3_.jpg" ]; then
  cp "$SOURCE_DIR/Piscina_Villa_Olimpia___3_.jpg" "$DEST_DIR/piscina/piscina.jpg"
  echo "✅ Piscina copiata"
fi

if [ -f "$SOURCE_DIR/Gazebo_notte_Olimpia.jpg" ]; then
  cp "$SOURCE_DIR/Gazebo_notte_Olimpia.jpg" "$DEST_DIR/outdoor/gazebo.jpg"
  echo "✅ Gazebo copiato"
fi

if [ -f "$SOURCE_DIR/Spiaggia_dei_Gigli_notturna.jpg" ]; then
  cp "$SOURCE_DIR/Spiaggia_dei_Gigli_notturna.jpg" "$DEST_DIR/beach/spiaggia.jpg"
  echo "✅ Spiaggia copiata"
fi

if [ -f "$SOURCE_DIR/Terrazza_Appartamento_Azalea_.jpg" ]; then
  cp "$SOURCE_DIR/Terrazza_Appartamento_Azalea_.jpg" "$DEST_DIR/appartamenti/azalea.jpg"
  echo "✅ Azalea copiato"
fi

echo ""
echo "✅ Copia completata!"
echo "📁 Foto disponibili in: $DEST_DIR"
