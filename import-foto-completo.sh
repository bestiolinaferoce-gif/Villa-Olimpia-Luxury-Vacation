#!/bin/bash
# Script: import-foto-completo.sh
# Import completo foto con TUTTI gli appartamenti incluso frangipane e fiordaliso

set -e

cd ~/Desktop/ViviCalabria.com

# Trova cartella foto
FOTO_DIR=$(find ~/Desktop -maxdepth 1 -type d \( -iname "*foto*villa*olimpia*" -o -iname "*foto*olimpia*" \) | head -1)

if [ -z "$FOTO_DIR" ]; then
  echo "❌ Cartella foto non trovata"
  echo "Cartelle disponibili:"
  ls -1 ~/Desktop | grep -i foto
  exit 1
fi

echo "✅ Cartella: $FOTO_DIR"
echo ""

# LISTA COMPLETA APPARTAMENTI (inclusi frangipane e fiordaliso)
APPARTAMENTI=(
  "geranio"
  "zeus"
  "poseidon"
  "apollo"
  "afrodite"
  "atena"
  "era"
  "artemide"
  "dioniso"
  "ermes"
  "orchidea"
  "azalea"
  "frangipane"
  "fiordaliso"
  "giglio"
  "rosa"
  "tulipano"
  "margherita"
  "iris"
  "dalia"
)

# Backup esistenti
BACKUP_DIR=~/Desktop/backup-foto-$(date +%Y%m%d-%H%M%S)
echo "📦 Backup foto esistenti a $BACKUP_DIR..."
mkdir -p "$BACKUP_DIR"
[ -d "public/images" ] && cp -r public/images "$BACKUP_DIR/" 2>/dev/null || true

# Crea cartelle appartamenti
echo "📁 Creazione cartelle appartamenti..."
for apt in "${APPARTAMENTI[@]}"; do
  mkdir -p "public/images/appartamenti/$apt"
done

mkdir -p public/images/amenities
mkdir -p public/images/hero
mkdir -p public/images/gallery

# Copia TUTTE le foto a gallery prima
echo "📸 Copia foto a gallery temporanea..."
cp "$FOTO_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG} public/images/gallery/ 2>/dev/null || true

# Conta foto copiate
TOTAL=$(find public/images/gallery -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Foto copiate a gallery: $TOTAL"
echo ""

# Organizza per appartamento
echo "🗂️ Organizzazione foto per appartamento..."
cd public/images/gallery

for apt in "${APPARTAMENTI[@]}"; do
  moved=0
  
  for file in *; do
    [ -f "$file" ] || continue
    
    # Converti nome file in lowercase per matching
    lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    # Match appartamento (case-insensitive)
    if echo "$lower" | grep -qi "$apt"; then
      mv "$file" "../appartamenti/$apt/" 2>/dev/null && moved=$((moved + 1))
    fi
  done
  
  if [ $moved -gt 0 ]; then
    echo "  ✓ $apt: $moved foto"
  fi
done

echo ""

# Organizza foto speciali
echo "🏊 Organizzazione foto piscina/amenities..."
moved_amenities=0
for pattern in piscina pool acqua swimming water nuoto esterni esterno giardino garden villa facciata facade building; do
  for file in *; do
    [ -f "$file" ] || continue
    lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lower" | grep -qi "$pattern"; then
      mv "$file" "../amenities/" 2>/dev/null && moved_amenities=$((moved_amenities + 1))
    fi
  done
done
[ $moved_amenities -gt 0 ] && echo "  ✓ amenities: $moved_amenities foto"

# Organizza foto hero
moved_hero=0
for pattern in hero main panorama vista cover principale; do
  for file in *; do
    [ -f "$file" ] || continue
    lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lower" | grep -qi "$pattern"; then
      mv "$file" "../hero/" 2>/dev/null && moved_hero=$((moved_hero + 1))
    fi
  done
done
[ $moved_hero -gt 0 ] && echo "  ✓ hero: $moved_hero foto"

# Report finale
cd ~/Desktop/ViviCalabria.com
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ IMPORT COMPLETATO"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Foto per appartamento:"

for apt in "${APPARTAMENTI[@]}"; do
  COUNT=$(find "public/images/appartamenti/$apt" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
  if [ $COUNT -gt 0 ]; then
    echo "  $apt: $COUNT foto"
  fi
done

echo ""
AMENITIES=$(find public/images/amenities -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
HERO=$(find public/images/hero -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
GALLERY=$(find public/images/gallery -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')

echo "  amenities: $AMENITIES foto"
echo "  hero: $HERO foto"
echo "  gallery (non categorizzate): $GALLERY foto"
echo ""

TOTAL_FINAL=$(find public/images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | wc -l | tr -d ' ')
echo "📈 TOTALE FOTO NEL SITO: $TOTAL_FINAL"
echo ""
echo "🎯 Prossimo step: npm run build"











