#!/bin/bash
# Script per committare e pushare le modifiche al sito Villa Olimpia
# Doppio click per eseguire

cd "$(dirname "$0")"

echo "========================================"
echo "  Villa Olimpia — Git Commit & Push"
echo "========================================"
echo ""

# Rimuovi il file di lock se esiste
if [ -f ".git/index.lock" ]; then
  echo "Rimozione file di lock git..."
  rm -f .git/index.lock
fi

echo "Aggiunta file modificati..."
git add \
  components/booking-form.tsx \
  app/contatti/page.tsx \
  app/[locale]/layout.tsx \
  app/appartamenti/[id]/page.tsx \
  app/recensioni/layout.tsx \
  app/sitemap.ts \
  components/breadcrumb.tsx \
  lib/metadata.ts \
  app/layout.tsx

echo ""
echo "Stato attuale:"
git status --short

echo ""
echo "Creazione commit..."
git commit -m "fix(contact): calendario react-calendar + pagina contatti rinnovata

- Sostituisce input date nativi con DateRangePicker basato su react-calendar
- Calendario grande, inline, con selezione range check-in/check-out
- Pagina contatti semplificata: hero bg-slate-900, layout 7/12+5/12
- 3 card informative (rimossa card B2B), rimosso ShareKit
- Identici schema validation Zod, UTM tracking e fallback WhatsApp"

echo ""
echo "Push su GitHub..."
git push origin main

echo ""
echo "========================================"
echo "  FATTO! Deploy Vercel in corso..."
echo "  Controlla: https://vercel.com/dashboard"
echo "========================================"
echo ""
read -p "Premi Invio per chiudere..."
