#!/bin/bash

# Script per importare tutte le foto dalla cartella Desktop
# AGGIUNTO: Importazione completa foto Villa Olimpia

PHOTO_SOURCE="$HOME/Desktop/Foto Villa Olimpia Sito"
DEST="public/images/villa"

echo "📸 Importazione completa foto Villa Olimpia..."
echo "📁 Sorgente: $PHOTO_SOURCE"
echo "📁 Destinazione: $DEST"
echo ""

# Crea le directory se non esistono
mkdir -p "$DEST/hero"
mkdir -p "$DEST/gallery"
mkdir -p "$DEST/location"
mkdir -p "$DEST/appartamenti/azalea"
mkdir -p "$DEST/appartamenti/gardenia"
mkdir -p "$DEST/appartamenti/geranio"
mkdir -p "$DEST/appartamenti/lavanda"
mkdir -p "$DEST/appartamenti/tulipano"
mkdir -p "$DEST/appartamenti/giglio"
mkdir -p "$DEST/appartamenti/frangipane"
mkdir -p "$DEST/appartamenti/fiordaliso"
mkdir -p "$DEST/appartamenti/orchidea"

# Contatori
imported=0
skipped=0

# PISCINA - Importa tutte le foto della piscina
echo "🏊 Importazione foto PISCINA..."
for file in "$PHOTO_SOURCE"/Piscina*.jpg "$PHOTO_SOURCE"/Piscina.jpg; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    # Crea nome univoco
    pool_num=$(ls "$DEST/gallery"/pool-*.jpg 2>/dev/null | wc -l | tr -d ' ')
    pool_num=$((pool_num + 1))
    dest_file="$DEST/gallery/pool-$pool_num.jpg"
    if [ ! -f "$dest_file" ]; then
      cp "$file" "$dest_file" && echo "  ✅ $filename → pool-$pool_num.jpg" && ((imported++))
    else
      echo "  ⏭️  pool-$pool_num.jpg già esistente"
      ((skipped++))
    fi
  fi
done

# HERO - Facciate e esterni
echo ""
echo "🏠 Importazione foto HERO/ESTERNI..."
cp "$PHOTO_SOURCE/Facciata esterna Villa Olimpia Notte.jpg" "$DEST/hero/facade-night.jpg" 2>/dev/null && echo "  ✅ Facciata notte" && ((imported++)) || echo "  ⚠️  Facciata notte non trovata"
cp "$PHOTO_SOURCE/Facciata Villa Olimpia .jpg" "$DEST/hero/facade-day.jpg" 2>/dev/null && echo "  ✅ Facciata giorno" && ((imported++)) || echo "  ⚠️  Facciata giorno non trovata"
cp "$PHOTO_SOURCE/Facciata esterna Villa Olimpia ( 3).jpg" "$DEST/hero/facade-3.jpg" 2>/dev/null && echo "  ✅ Facciata 3" && ((imported++)) || echo "  ⚠️  Facciata 3 non trovata"

# GALLERY - Esterni e gazebo
echo ""
echo "🌴 Importazione foto GALLERY..."
cp "$PHOTO_SOURCE/Esterni Villa Olimpia.jpg" "$DEST/gallery/exterior-4.jpg" 2>/dev/null && echo "  ✅ Esterni" && ((imported++)) || echo "  ⚠️  Esterni non trovata"
cp "$PHOTO_SOURCE/Ingresso Villa Olimpia.jpg" "$DEST/gallery/entrance-2.jpg" 2>/dev/null && echo "  ✅ Ingresso 2" && ((imported++)) || echo "  ⚠️  Ingresso 2 non trovata"
cp "$PHOTO_SOURCE/Gazebo Olimpia 2.jpg" "$DEST/gallery/gazebo-3.jpg" 2>/dev/null && echo "  ✅ Gazebo 3" && ((imported++)) || echo "  ⚠️  Gazebo 3 non trovata"
cp "$PHOTO_SOURCE/Gazebo notte Olimpia.jpg" "$DEST/gallery/gazebo-night.jpg" 2>/dev/null && echo "  ✅ Gazebo notte" && ((imported++)) || echo "  ⚠️  Gazebo notte non trovata"
cp "$PHOTO_SOURCE/Villa Olimpia Notte ( 2).jpg" "$DEST/gallery/night-2.jpg" 2>/dev/null && echo "  ✅ Notte 2" && ((imported++)) || echo "  ⚠️  Notte 2 non trovata"

# LOCATION - Spiaggia
echo ""
echo "🏖️ Importazione foto SPIAGGIA..."
cp "$PHOTO_SOURCE/Spiaggia dei Gigli .jpg" "$DEST/location/beach-4.jpg" 2>/dev/null && echo "  ✅ Spiaggia 4" && ((imported++)) || echo "  ⚠️  Spiaggia 4 non trovata"
cp "$PHOTO_SOURCE/Spiaggia dei Gigli 2.jpg" "$DEST/location/beach-5.jpg" 2>/dev/null && echo "  ✅ Spiaggia 5" && ((imported++)) || echo "  ⚠️  Spiaggia 5 non trovata"
cp "$PHOTO_SOURCE/Spiaggia dei Gigli notturna.jpg" "$DEST/location/beach-night.jpg" 2>/dev/null && echo "  ✅ Spiaggia notturna" && ((imported++)) || echo "  ⚠️  Spiaggia notturna non trovata"

# APPARTAMENTI - Azalea
echo ""
echo "🏡 Importazione foto APPARTAMENTI - Azalea..."
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Azalea .jpg" "$DEST/appartamenti/azalea/bedroom-2.jpg" 2>/dev/null && echo "  ✅ Azalea bedroom 2" && ((imported++)) || echo "  ⚠️  Azalea bedroom 2 non trovata"
cp "$PHOTO_SOURCE/Living Room appartamento Azalea .jpg" "$DEST/appartamenti/azalea/living-2.jpg" 2>/dev/null && echo "  ✅ Azalea living 2" && ((imported++)) || echo "  ⚠️  Azalea living 2 non trovata"
cp "$PHOTO_SOURCE/Terrazza Appartamento Azalea .jpg" "$DEST/appartamenti/azalea/terrace-3.jpg" 2>/dev/null && echo "  ✅ Azalea terrace 3" && ((imported++)) || echo "  ⚠️  Azalea terrace 3 non trovata"
cp "$PHOTO_SOURCE/Terrazza Azalea .jpg" "$DEST/appartamenti/azalea/terrace-4.jpg" 2>/dev/null && echo "  ✅ Azalea terrace 4" && ((imported++)) || echo "  ⚠️  Azalea terrace 4 non trovata"
cp "$PHOTO_SOURCE/Terrazza Azalea 3.jpg" "$DEST/appartamenti/azalea/terrace-5.jpg" 2>/dev/null && echo "  ✅ Azalea terrace 5" && ((imported++)) || echo "  ⚠️  Azalea terrace 5 non trovata"
cp "$PHOTO_SOURCE/Terrazza Azalea Sunset.jpg" "$DEST/appartamenti/azalea/terrace-sunset.jpg" 2>/dev/null && echo "  ✅ Azalea terrace sunset" && ((imported++)) || echo "  ⚠️  Azalea terrace sunset non trovata"

# APPARTAMENTI - Gardenia
echo ""
echo "🏡 Importazione foto APPARTAMENTI - Gardenia..."
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Gardenia (1).jpg" "$DEST/appartamenti/gardenia/bedroom-3.jpg" 2>/dev/null && echo "  ✅ Gardenia bedroom 3" && ((imported++)) || echo "  ⚠️  Gardenia bedroom 3 non trovata"
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Gardenia.jpg" "$DEST/appartamenti/gardenia/bedroom-4.jpg" 2>/dev/null && echo "  ✅ Gardenia bedroom 4" && ((imported++)) || echo "  ⚠️  Gardenia bedroom 4 non trovata"

# APPARTAMENTI - Geranio
echo ""
echo "🏡 Importazione foto APPARTAMENTI - Geranio..."
cp "$PHOTO_SOURCE/Camera da letto appartamento Geranio 1 2.jpg" "$DEST/appartamenti/geranio/bedroom-4.jpg" 2>/dev/null && echo "  ✅ Geranio bedroom 4" && ((imported++)) || echo "  ⚠️  Geranio bedroom 4 non trovata"
cp "$PHOTO_SOURCE/Camera da letto appartamento Geranio 1 3.jpg" "$DEST/appartamenti/geranio/bedroom-5.jpg" 2>/dev/null && echo "  ✅ Geranio bedroom 5" && ((imported++)) || echo "  ⚠️  Geranio bedroom 5 non trovata"
cp "$PHOTO_SOURCE/Camera da letto appartamento Geranio 1.jpg" "$DEST/appartamenti/geranio/bedroom-6.jpg" 2>/dev/null && echo "  ✅ Geranio bedroom 6" && ((imported++)) || echo "  ⚠️  Geranio bedroom 6 non trovata"
cp "$PHOTO_SOURCE/Cucina Geranio .jpg" "$DEST/appartamenti/geranio/kitchen-2.jpg" 2>/dev/null && echo "  ✅ Geranio kitchen 2" && ((imported++)) || echo "  ⚠️  Geranio kitchen 2 non trovata"

# APPARTAMENTI - Lavanda
echo ""
echo "🏡 Importazione foto APPARTAMENTI - Lavanda..."
cp "$PHOTO_SOURCE/Veranda Lavanda.jpg" "$DEST/appartamenti/lavanda/veranda-2.jpg" 2>/dev/null && echo "  ✅ Lavanda veranda 2" && ((imported++)) || echo "  ⚠️  Lavanda veranda 2 non trovata"

echo ""
echo "✅ Importazione completata!"
echo "📊 Statistiche:"
echo "   - Foto importate: $imported"
echo "   - Foto saltate (già presenti): $skipped"
echo "📁 Le foto sono in: $DEST"
echo ""
echo "🏊 Foto piscina disponibili:"
ls -1 "$DEST/gallery"/pool-*.jpg 2>/dev/null | wc -l | xargs echo "   - Totale:"
ls -1 "$DEST/gallery"/pool-*.jpg 2>/dev/null | sed 's|.*/|     |' || echo "   - Nessuna foto piscina trovata"


