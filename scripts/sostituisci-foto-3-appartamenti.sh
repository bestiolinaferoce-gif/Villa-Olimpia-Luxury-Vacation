#!/bin/bash

# Script per sostituire le foto dei 3 appartamenti mancanti
# GUIDA PASSO-PASSO

PHOTO_SOURCE="$HOME/Desktop/Foto Villa Olimpia Sito"
DEST_BASE="public/images/villa/appartamenti"

echo "📸 GUIDA SOSTITUZIONE FOTO - 3 APPARTAMENTI"
echo "=========================================="
echo ""

# Crea le cartelle se non esistono
mkdir -p "$DEST_BASE/frangipane"
mkdir -p "$DEST_BASE/fiordaliso"
mkdir -p "$DEST_BASE/orchidea"

echo "✅ Cartelle create/verificate"
echo ""

echo "📋 STEP 1: VERIFICA FOTO DISPONIBILI"
echo "-----------------------------------"
echo ""
echo "Cercando foto nella cartella: $PHOTO_SOURCE"
echo ""

# Lista tutte le foto disponibili
echo "📸 FOTO DISPONIBILI:"
ls -1 "$PHOTO_SOURCE"/*.jpg 2>/dev/null | head -30
echo ""

echo "🔍 Cercando foto specifiche per appartamenti..."
echo ""

# Cerca foto per Frangipane
echo "FRANGIPANE:"
ls -1 "$PHOTO_SOURCE"/*.jpg 2>/dev/null | grep -i frangipane || echo "  ⚠️  Nessuna foto specifica trovata"
echo ""

# Cerca foto per Fiordaliso
echo "FIORDALISO:"
ls -1 "$PHOTO_SOURCE"/*.jpg 2>/dev/null | grep -i fiordaliso || echo "  ⚠️  Nessuna foto specifica trovata"
echo ""

# Cerca foto per Orchidea
echo "ORCHIDEA:"
ls -1 "$PHOTO_SOURCE"/*.jpg 2>/dev/null | grep -i orchidea || echo "  ⚠️  Nessuna foto specifica trovata"
echo ""

echo "📋 STEP 2: ISTRUZIONI"
echo "-------------------"
echo ""
echo "OPZIONE A - Se hai foto specifiche:"
echo "  Dimmi il nome esatto del file e lo copio automaticamente"
echo ""
echo "OPZIONE B - Se NON hai foto specifiche:"
echo "  Possiamo usare foto generiche (living, camera, terrazza)"
echo "  Dimmi quale foto vuoi usare per ogni appartamento"
echo ""
echo "OPZIONE C - Usa foto esistenti di altri appartamenti:"
echo "  Possiamo riutilizzare foto di Tulipano, Giglio, ecc."
echo ""

echo "📋 STEP 3: DOPO LA COPIA"
echo "----------------------"
echo "Aggiornerò automaticamente i percorsi in data/apartments.ts"
echo ""

echo "✅ Script pronto. Dimmi quali foto vuoi usare!"


