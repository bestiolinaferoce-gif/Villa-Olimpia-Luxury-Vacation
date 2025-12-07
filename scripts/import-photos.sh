#!/bin/bash

PHOTO_SOURCE="$HOME/Desktop/Foto Villa Olimpia Sito"
DEST="public/images/villa"

echo "📸 Importazione foto Villa Olimpia..."

# Verifica che la cartella sorgente esista
if [ ! -d "$PHOTO_SOURCE" ]; then
  echo "⚠️  Cartella sorgente non trovata: $PHOTO_SOURCE"
  echo "📁 Cercando alternative..."
  PHOTO_SOURCE="$HOME/Desktop/foto villa olimpia sito"
  if [ ! -d "$PHOTO_SOURCE" ]; then
    echo "❌ Cartella foto non trovata. Controlla il percorso."
    exit 1
  fi
fi

# Hero images
cp "$PHOTO_SOURCE/Facciata_esterna_Villa_Olimpia_Notte.jpg" "$DEST/hero/facade-night.jpg" 2>/dev/null && echo "✅ Hero: facade-night.jpg" || echo "⚠️  Facade night non trovata"

# Appartamenti - Geranio
cp "$PHOTO_SOURCE/Camera_da_letto_appartamento_Geranio_1_2.jpg" "$DEST/appartamenti/geranio/bedroom-1.jpg" 2>/dev/null && echo "✅ Geranio: bedroom-1.jpg" || echo "⚠️  Geranio bedroom non trovata"
cp "$PHOTO_SOURCE/Camera_da_letto_appartamento_Geranio_1_3.jpg" "$DEST/appartamenti/geranio/bedroom-2.jpg" 2>/dev/null && echo "✅ Geranio: bedroom-2.jpg" || echo "⚠️  Geranio bedroom 2 non trovata"
cp "$PHOTO_SOURCE/Camera_da_letto_appartamento_Geranio_1.jpg" "$DEST/appartamenti/geranio/bedroom-3.jpg" 2>/dev/null && echo "✅ Geranio: bedroom-3.jpg" || echo "⚠️  Geranio bedroom 3 non trovata"
cp "$PHOTO_SOURCE/Cucina Geranio .jpg" "$DEST/appartamenti/geranio/kitchen.jpg" 2>/dev/null && echo "✅ Geranio: kitchen.jpg" || echo "⚠️  Geranio kitchen non trovata"

# Appartamenti - Azalea
cp "$PHOTO_SOURCE/Terrazza_Appartamento_Azalea_.jpg" "$DEST/appartamenti/azalea/terrace-1.jpg" 2>/dev/null && echo "✅ Azalea: terrace-1.jpg" || echo "⚠️  Azalea terrace non trovata"
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Azalea .jpg" "$DEST/appartamenti/azalea/bedroom.jpg" 2>/dev/null && echo "✅ Azalea: bedroom.jpg" || echo "⚠️  Azalea bedroom non trovata"
cp "$PHOTO_SOURCE/Living Room appartamento Azalea .jpg" "$DEST/appartamenti/azalea/living.jpg" 2>/dev/null && echo "✅ Azalea: living.jpg" || echo "⚠️  Azalea living non trovata"
cp "$PHOTO_SOURCE/Terrazza Azalea .jpg" "$DEST/appartamenti/azalea/terrace-2.jpg" 2>/dev/null && echo "✅ Azalea: terrace-2.jpg" || echo "⚠️  Azalea terrace 2 non trovata"

# Appartamenti - Gardenia
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Gardenia (1).jpg" "$DEST/appartamenti/gardenia/bedroom-1.jpg" 2>/dev/null && echo "✅ Gardenia: bedroom-1.jpg" || echo "⚠️  Gardenia bedroom non trovata"
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Gardenia.jpg" "$DEST/appartamenti/gardenia/bedroom-2.jpg" 2>/dev/null && echo "✅ Gardenia: bedroom-2.jpg" || echo "⚠️  Gardenia bedroom 2 non trovata"

# Appartamenti - Frangipane
cp "$PHOTO_SOURCE/Camera Matrimoniale Appartamento Frangipane(2).jpg" "$DEST/appartamenti/frangipane/bedroom-1.jpg" 2>/dev/null && echo "✅ Frangipane: bedroom-1.jpg" || echo "⚠️  Frangipane bedroom non trovata"
cp "$PHOTO_SOURCE/Camera Matrimoniale Frangipane (1).jpg" "$DEST/appartamenti/frangipane/bedroom-2.jpg" 2>/dev/null && echo "✅ Frangipane: bedroom-2.jpg" || echo "⚠️  Frangipane bedroom 2 non trovata"
cp "$PHOTO_SOURCE/Cucina  Appartamento Frangipane .jpg" "$DEST/appartamenti/frangipane/kitchen.jpg" 2>/dev/null && echo "✅ Frangipane: kitchen.jpg" || echo "⚠️  Frangipane kitchen non trovata"
cp "$PHOTO_SOURCE/Bagno Frangipane .jpg" "$DEST/appartamenti/frangipane/bathroom.jpg" 2>/dev/null && echo "✅ Frangipane: bathroom.jpg" || echo "⚠️  Frangipane bathroom non trovata"

# Appartamenti - Altri
cp "$PHOTO_SOURCE/Zona living Appartamento Giglio .jpg" "$DEST/appartamenti/giglio/living.jpg" 2>/dev/null && echo "✅ Giglio: living.jpg" || echo "⚠️  Giglio living non trovata"
cp "$PHOTO_SOURCE/Zona Living Appartamento Tulipano .jpg" "$DEST/appartamenti/tulipano/living-1.jpg" 2>/dev/null && echo "✅ Tulipano: living-1.jpg" || echo "⚠️  Tulipano living non trovata"
cp "$PHOTO_SOURCE/Zona Living Appartamento Tulipano ( 1).jpg" "$DEST/appartamenti/tulipano/living-2.jpg" 2>/dev/null && echo "✅ Tulipano: living-2.jpg" || echo "⚠️  Tulipano living 2 non trovata"
cp "$PHOTO_SOURCE/Zona Living Appartamento Lavanda .jpg" "$DEST/appartamenti/lavanda/living.jpg" 2>/dev/null && echo "✅ Lavanda: living.jpg" || echo "⚠️  Lavanda living non trovata"
cp "$PHOTO_SOURCE/Veranda Lavanda.jpg" "$DEST/appartamenti/lavanda/veranda.jpg" 2>/dev/null && echo "✅ Lavanda: veranda.jpg" || echo "⚠️  Lavanda veranda non trovata"

# Gallery generale
cp "$PHOTO_SOURCE/Piscina_Villa_Olimpia___3_.jpg" "$DEST/gallery/pool-1.jpg" 2>/dev/null && echo "✅ Gallery: pool-1.jpg" || echo "⚠️  Pool non trovata"
cp "$PHOTO_SOURCE/Piscina_Villa_Olimpia .jpg" "$DEST/gallery/pool-2.jpg" 2>/dev/null && echo "✅ Gallery: pool-2.jpg" || echo "⚠️  Pool 2 non trovata"
cp "$PHOTO_SOURCE/Piscina.jpg" "$DEST/gallery/pool-3.jpg" 2>/dev/null && echo "✅ Gallery: pool-3.jpg" || echo "⚠️  Pool 3 non trovata"
cp "$PHOTO_SOURCE/Gazebo_notte_Olimpia.jpg" "$DEST/gallery/gazebo-1.jpg" 2>/dev/null && echo "✅ Gallery: gazebo-1.jpg" || echo "⚠️  Gazebo non trovata"
cp "$PHOTO_SOURCE/Gazebo Olimpia 2.jpg" "$DEST/gallery/gazebo-2.jpg" 2>/dev/null && echo "✅ Gallery: gazebo-2.jpg" || echo "⚠️  Gazebo 2 non trovata"

# Esterni
cp "$PHOTO_SOURCE/Esterni Villa Olimpia.jpg" "$DEST/gallery/exterior-1.jpg" 2>/dev/null && echo "✅ Gallery: exterior-1.jpg" || echo "⚠️  Exterior non trovata"
cp "$PHOTO_SOURCE/Facciata esterna Villa Olimpia ( 3).jpg" "$DEST/gallery/exterior-2.jpg" 2>/dev/null && echo "✅ Gallery: exterior-2.jpg" || echo "⚠️  Exterior 2 non trovata"
cp "$PHOTO_SOURCE/Facciata Villa Olimpia .jpg" "$DEST/gallery/exterior-3.jpg" 2>/dev/null && echo "✅ Gallery: exterior-3.jpg" || echo "⚠️  Exterior 3 non trovata"
cp "$PHOTO_SOURCE/Ingresso Villa Olimpia.jpg" "$DEST/gallery/entrance.jpg" 2>/dev/null && echo "✅ Gallery: entrance.jpg" || echo "⚠️  Entrance non trovata"
cp "$PHOTO_SOURCE/Villa Olimpia Notte ( 2).jpg" "$DEST/gallery/night-1.jpg" 2>/dev/null && echo "✅ Gallery: night-1.jpg" || echo "⚠️  Night non trovata"

# Location
cp "$PHOTO_SOURCE/Spiaggia_dei_Gigli_notturna.jpg" "$DEST/location/beach-1.jpg" 2>/dev/null && echo "✅ Location: beach-1.jpg" || echo "⚠️  Beach non trovata"
cp "$PHOTO_SOURCE/Spiaggia dei Gigli .jpg" "$DEST/location/beach-2.jpg" 2>/dev/null && echo "✅ Location: beach-2.jpg" || echo "⚠️  Beach 2 non trovata"
cp "$PHOTO_SOURCE/Spiaggia dei Gigli 2.jpg" "$DEST/location/beach-3.jpg" 2>/dev/null && echo "✅ Location: beach-3.jpg" || echo "⚠️  Beach 3 non trovata"

echo ""
echo "✅ Importazione completata!"
echo "📁 Le foto sono in: $DEST"
echo "📊 Controlla le cartelle per vedere le foto importate"


