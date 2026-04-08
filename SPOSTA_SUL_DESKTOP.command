#!/bin/bash
# Script: Sposta Villa_Olimpia_Presentazione sul Desktop

SOURCE="$(dirname "$0")/Villa_Olimpia_Presentazione"
DEST="$HOME/Desktop/Villa_Olimpia_Presentazione"

if [ -d "$DEST" ]; then
  DEST="$HOME/Desktop/Villa_Olimpia_Presentazione_v2"
  echo "⚠️  Cartella già presente sul Desktop → creo versione _v2"
fi

cp -R "$SOURCE" "$DEST"

if [ $? -eq 0 ]; then
  echo "✅ Cartella copiata sul Desktop con successo!"
  echo "📁 Percorso: $DEST"
  open "$DEST"
else
  echo "❌ Errore durante la copia. Riprova manualmente."
fi

read -p "Premi Invio per chiudere..."
