#!/bin/bash

# Script per copiare TUTTE le foto automaticamente

DESKTOP="$HOME/Desktop"
DEST="/Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/appartamenti"

echo "📸 COPIA AUTOMATICA TUTTE LE FOTO"
echo "=================================="
echo ""

# Crea cartelle
mkdir -p "$DEST/frangipane"
mkdir -p "$DEST/fiordaliso"
mkdir -p "$DEST/orchidea"

# FRANGIPANE - Copia tutte le foto
echo "📸 FRANGIPANE:"
cp "$DESKTOP/Frangipane/Camera Matrimoniale Appartamento Frangipane(2).jpg" \
   "$DEST/frangipane/main.jpg" 2>/dev/null && echo "  ✅ main.jpg" || echo "  ⚠️  main.jpg non trovato"

cp "$DESKTOP/Frangipane/Camera Matrimoniale Frangipane (1).jpg" \
   "$DEST/frangipane/camera-matrimoniale-frangipane-1.jpg" 2>/dev/null && echo "  ✅ camera-matrimoniale-frangipane-1.jpg" || echo "  ⚠️  camera non trovata"

cp "$DESKTOP/Frangipane/Cucina Appartamento Frangipane 1.jpg" \
   "$DEST/frangipane/cucina-appartamento-frangipane-1.jpg" 2>/dev/null && echo "  ✅ cucina-appartamento-frangipane-1.jpg" || echo "  ⚠️  cucina-1 non trovata"

cp "$DESKTOP/Frangipane/Cucina appartamento Frangipane 3 .jpg" \
   "$DEST/frangipane/cucina-appartamento-frangipane-3.jpg" 2>/dev/null && echo "  ✅ cucina-appartamento-frangipane-3.jpg" || echo "  ⚠️  cucina-3 non trovata"

cp "$DESKTOP/Frangipane/Bagno Frangipane .jpg" \
   "$DEST/frangipane/bagno-frangipane.jpg" 2>/dev/null && echo "  ✅ bagno-frangipane.jpg" || echo "  ⚠️  bagno non trovato"

cp "$DESKTOP/Frangipane/Zona Living Appartamento Lavanda .jpg" \
   "$DEST/frangipane/zona-living-appartamento-lavanda.jpg" 2>/dev/null && echo "  ✅ zona-living-appartamento-lavanda.jpg" || echo "  ⚠️  living non trovato"

# FIORDALISO
echo ""
echo "📸 FIORDALISO:"
cp "$DESKTOP/Foto Villa Olimpia Sito/Living Room appartamento Azalea .jpg" \
   "$DEST/fiordaliso/main.jpg" 2>/dev/null && echo "  ✅ main.jpg" || echo "  ⚠️  main non trovato"

cp "$DESKTOP/Foto Villa Olimpia Sito/Zona Living Appartamento Tulipano ( 1).jpg" \
   "$DEST/fiordaliso/living-1.jpg" 2>/dev/null && echo "  ✅ living-1.jpg" || echo "  ⚠️  living-1 non trovato"

cp "$DESKTOP/Foto Villa Olimpia Sito/Zona Living Appartamento Tulipano ( 2).jpg" \
   "$DEST/fiordaliso/living-2.jpg" 2>/dev/null && echo "  ✅ living-2.jpg" || echo "  ⚠️  living-2 non trovato"

# ORCHIDEA
echo ""
echo "📸 ORCHIDEA:"
cp "$DESKTOP/Foto Villa Olimpia Sito/Camera Matrimoniale Appartamento Gardenia.jpg" \
   "$DEST/orchidea/main.jpg" 2>/dev/null && echo "  ✅ main.jpg" || echo "  ⚠️  main non trovato"

cp "$DESKTOP/Foto Villa Olimpia Sito/Camera Matrimoniale Appartamento Gardenia (1).jpg" \
   "$DEST/orchidea/camera-matrimoniale-gardenia-1.jpg" 2>/dev/null && echo "  ✅ camera-matrimoniale-gardenia-1.jpg" || echo "  ⚠️  camera non trovata"

cp "$DESKTOP/Foto Villa Olimpia Sito/Terrazza Appartamento Azalea .jpg" \
   "$DEST/orchidea/terrazza-appartamento-azalea.jpg" 2>/dev/null && echo "  ✅ terrazza-appartamento-azalea.jpg" || echo "  ⚠️  terrazza non trovata"

cp "$DESKTOP/Foto Villa Olimpia Sito/Terrazza Azalea 3.jpg" \
   "$DEST/orchidea/terrazza-azalea-3.jpg" 2>/dev/null && echo "  ✅ terrazza-azalea-3.jpg" || echo "  ⚠️  terrazza-3 non trovata"

echo ""
echo "✅ COPIA COMPLETATA!"
echo ""
echo "📊 RIEPILOGO:"
echo "  Frangipane: $(ls -1 "$DEST/frangipane"/*.jpg 2>/dev/null | wc -l | xargs) foto"
echo "  Fiordaliso: $(ls -1 "$DEST/fiordaliso"/*.jpg 2>/dev/null | wc -l | xargs) foto"
echo "  Orchidea: $(ls -1 "$DEST/orchidea"/*.jpg 2>/dev/null | wc -l | xargs) foto"


