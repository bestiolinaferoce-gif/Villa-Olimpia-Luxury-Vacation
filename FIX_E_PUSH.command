#!/bin/bash
# FIX_E_PUSH.command — Push del fix TypeScript già committato
# Doppio click su questo file dal Mac

cd "$(dirname "$0")"

echo "========================================"
echo "  Villa Olimpia — Push Fix TypeScript"
echo "========================================"
echo ""

# Rimuovi lock se esiste
rm -f .git/index.lock 2>/dev/null && echo "✓ Lock rimosso" || true

echo ""
echo "Commit locale pronto da pushare:"
git log --oneline origin/main..HEAD 2>/dev/null || git log --oneline HEAD~2..HEAD

echo ""
echo "Pushing su GitHub..."
git push origin main

PUSH_EXIT=$?
echo ""
if [ $PUSH_EXIT -eq 0 ]; then
  echo "========================================"
  echo "  ✅ FATTO! Deploy Vercel partito."
  echo "  https://vercel.com/bestiolinaferoces-projects/villa-olimpia-luxury-vacation"
  echo "========================================"
else
  echo "❌ Push fallito (exit $PUSH_EXIT)"
  echo ""
  echo "Tentativo con pull --rebase + push..."
  git pull --rebase origin main && git push origin main
fi

echo ""
read -p "Premi INVIO per chiudere..."
