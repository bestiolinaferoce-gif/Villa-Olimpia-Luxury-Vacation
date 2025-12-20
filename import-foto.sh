#!/bin/bash
# Script import foto definitivo - ZERO ERRORI

set -e

cd ~/Desktop/ViviCalabria.com

# 1. Trova cartella foto (gestisce variazioni nome)
FOTO_DIR=$(find ~/Desktop -maxdepth 1 -type d -iname "*foto*villa*olimpia*" | head -1)

if [ -z "$FOTO_DIR" ]; then
  echo "❌ ERRORE: Cartella 'Foto Villa Olimpia Sito' non trovata sul Desktop"
  echo "Cartelle presenti sul Desktop:"
  ls -1 ~/Desktop | grep -i foto
  exit 1
fi

echo "✅ Cartella trovata: $FOTO_DIR"

# 2. Conta foto disponibili
TOTAL=$(find "$FOTO_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" \) | wc -l | tr -d ' ')
echo "📊 Foto disponibili: $TOTAL"

# 3. Identifica foto NUOVE (non già presenti)
mkdir -p ~/Desktop/temp-import
NEW_COUNT=0

cd "$FOTO_DIR"
for file in *; do
  [ -f "$file" ] || continue
  
  # Controlla se file già esiste in public/images
  if ! find ~/Desktop/ViviCalabria.com/public/images -name "$file" -type f 2>/dev/null | grep -q .; then
    cp "$file" ~/Desktop/temp-import/ 2>/dev/null || true
    echo "  ✓ Nuova: $file"
    NEW_COUNT=$((NEW_COUNT + 1))
  fi
done

echo "📦 Nuove foto da importare: $NEW_COUNT"

if [ $NEW_COUNT -eq 0 ]; then
  echo "ℹ️ Tutte le foto sono già importate"
  rm -rf ~/Desktop/temp-import
  exit 0
fi

# 4. Crea cartelle se non esistono
mkdir -p ~/Desktop/ViviCalabria.com/public/images/gallery
mkdir -p ~/Desktop/ViviCalabria.com/public/images/appartamenti
mkdir -p ~/Desktop/ViviCalabria.com/public/images/amenities
mkdir -p ~/Desktop/ViviCalabria.com/public/images/hero

# 5. Copia a gallery
cd ~/Desktop/ViviCalabria.com
cp ~/Desktop/temp-import/* public/images/gallery/ 2>/dev/null || true

# 6. Organizza per appartamento
cd public/images/gallery

# Lista TUTTI gli appartamenti
for file in *; do
  [ -f "$file" ] || continue
  
  lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
  
  # Geranio
  if echo "$lower" | grep -qi "geranio"; then
    mkdir -p ../appartamenti/geranio
    mv "$file" ../appartamenti/geranio/ 2>/dev/null || true
    echo "  → geranio: $file"
    continue
  fi
  
  # Zeus
  if echo "$lower" | grep -qi "zeus"; then
    mkdir -p ../appartamenti/zeus
    mv "$file" ../appartamenti/zeus/ 2>/dev/null || true
    echo "  → zeus: $file"
    continue
  fi
  
  # Poseidon
  if echo "$lower" | grep -qi "poseidon"; then
    mkdir -p ../appartamenti/poseidon
    mv "$file" ../appartamenti/poseidon/ 2>/dev/null || true
    echo "  → poseidon: $file"
    continue
  fi
  
  # Apollo
  if echo "$lower" | grep -qi "apollo"; then
    mkdir -p ../appartamenti/apollo
    mv "$file" ../appartamenti/apollo/ 2>/dev/null || true
    echo "  → apollo: $file"
    continue
  fi
  
  # Afrodite
  if echo "$lower" | grep -qi "afrodite"; then
    mkdir -p ../appartamenti/afrodite
    mv "$file" ../appartamenti/afrodite/ 2>/dev/null || true
    echo "  → afrodite: $file"
    continue
  fi
  
  # Atena
  if echo "$lower" | grep -qi "atena"; then
    mkdir -p ../appartamenti/atena
    mv "$file" ../appartamenti/atena/ 2>/dev/null || true
    echo "  → atena: $file"
    continue
  fi
  
  # Era
  if echo "$lower" | grep -qi "era"; then
    mkdir -p ../appartamenti/era
    mv "$file" ../appartamenti/era/ 2>/dev/null || true
    echo "  → era: $file"
    continue
  fi
  
  # Artemide
  if echo "$lower" | grep -qi "artemide"; then
    mkdir -p ../appartamenti/artemide
    mv "$file" ../appartamenti/artemide/ 2>/dev/null || true
    echo "  → artemide: $file"
    continue
  fi
  
  # Dioniso
  if echo "$lower" | grep -qi "dioniso"; then
    mkdir -p ../appartamenti/dioniso
    mv "$file" ../appartamenti/dioniso/ 2>/dev/null || true
    echo "  → dioniso: $file"
    continue
  fi
  
  # Ermes
  if echo "$lower" | grep -qi "ermes"; then
    mkdir -p ../appartamenti/ermes
    mv "$file" ../appartamenti/ermes/ 2>/dev/null || true
    echo "  → ermes: $file"
    continue
  fi
  
  # Orchidea
  if echo "$lower" | grep -qi "orchidea"; then
    mkdir -p ../appartamenti/orchidea
    mv "$file" ../appartamenti/orchidea/ 2>/dev/null || true
    echo "  → orchidea: $file"
    continue
  fi
  
  # Azalea
  if echo "$lower" | grep -qi "azalea"; then
    mkdir -p ../appartamenti/azalea
    mv "$file" ../appartamenti/azalea/ 2>/dev/null || true
    echo "  → azalea: $file"
    continue
  fi
  
  # Piscina
  if echo "$lower" | grep -qiE "piscina|pool|acqua"; then
    mkdir -p ../amenities
    mv "$file" ../amenities/ 2>/dev/null || true
    echo "  → amenities/piscina: $file"
    continue
  fi
  
  # Esterni
  if echo "$lower" | grep -qiE "esterni|esterno|giardino|garden|villa|facciata"; then
    mkdir -p ../amenities
    mv "$file" ../amenities/ 2>/dev/null || true
    echo "  → amenities: $file"
    continue
  fi
  
  # Hero
  if echo "$lower" | grep -qiE "hero|main|panorama|vista"; then
    mkdir -p ../hero
    mv "$file" ../hero/ 2>/dev/null || true
    echo "  → hero: $file"
    continue
  fi
done

# 7. Report finale
cd ~/Desktop/ViviCalabria.com
echo ""
echo "✅ IMPORT COMPLETATO"
echo "━━━━━━━━━━━━━━━━━━━━"

for apt in geranio zeus poseidon apollo afrodite atena era artemide dioniso ermes orchidea azalea; do
  if [ -d "public/images/appartamenti/$apt" ]; then
    COUNT=$(ls -1 public/images/appartamenti/$apt 2>/dev/null | wc -l | tr -d ' ')
    [ $COUNT -gt 0 ] && echo "  $apt: $COUNT foto"
  fi
done

AMENITIES=$(ls -1 public/images/amenities 2>/dev/null | wc -l | tr -d ' ')
[ $AMENITIES -gt 0 ] && echo "  amenities: $AMENITIES foto"

# Pulisci
rm -rf ~/Desktop/temp-import

echo ""
echo "🎯 Prossimo step: npm run build"











