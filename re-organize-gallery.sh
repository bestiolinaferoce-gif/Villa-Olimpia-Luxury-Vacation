#!/bin/bash
# Script: re-organize-gallery.sh
# Ri-organizza foto dalla gallery alle cartelle appartamenti

cd ~/Desktop/ViviCalabria.com/public/images/gallery

APPARTAMENTI=(
  geranio zeus poseidon apollo afrodite atena era artemide dioniso ermes
  orchidea azalea frangipane fiordaliso giglio rosa tulipano margherita
)

ORGANIZZATE=0

echo "🔄 Ri-organizzazione foto da gallery..."
echo ""

for file in *; do
  [ -f "$file" ] || continue
  
  lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
  SPOSTATA=false
  
  # Prova ogni appartamento
  for apt in "${APPARTAMENTI[@]}"; do
    if echo "$lower" | grep -qi "$apt"; then
      mv "$file" "../appartamenti/$apt/" 2>/dev/null && {
        echo "  ✓ $file → appartamenti/$apt/"
        ORGANIZZATE=$((ORGANIZZATE + 1))
        SPOSTATA=true
      }
      break
    fi
  done
  
  [ "$SPOSTATA" = true ] && continue
  
  # Piscina/amenities
  if echo "$lower" | grep -qiE "piscina|pool|acqua|swimming|nuoto|esterni|esterno|giardino|garden|villa|facciata|facade|barbecue|gazebo"; then
    mv "$file" "../amenities/" 2>/dev/null && {
      echo "  ✓ $file → amenities/"
      ORGANIZZATE=$((ORGANIZZATE + 1))
    }
    continue
  fi
  
  # Hero
  if echo "$lower" | grep -qiE "hero|main|panorama|vista|cover|notte|night"; then
    mv "$file" "../hero/" 2>/dev/null && {
      echo "  ✓ $file → hero/"
      ORGANIZZATE=$((ORGANIZZATE + 1))
    }
    continue
  fi
done

echo ""
echo "✅ Ri-organizzate: $ORGANIZZATE foto"
echo ""
echo "📊 File rimanenti in gallery:"
REMAINING=$(ls -1 | wc -l | tr -d ' ')
echo "   $REMAINING file non categorizzati"
