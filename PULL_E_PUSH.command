#!/bin/bash
# Pull remoto + push — risolve il conflitto di versione con GitHub
cd "$(dirname "$0")"

echo "========================================"
echo "  Villa Olimpia — Pull & Push"
echo "========================================"
echo ""

# Rimuovi lock se esiste
rm -f .git/index.lock 2>/dev/null
echo "✓ Lock rimosso"

# Salva modifiche non committate temporaneamente
echo ""
echo "Salvataggio modifiche locali..."
git stash --include-untracked 2>&1

# Pull con rebase dal remoto
echo ""
echo "Pull da GitHub..."
git pull --rebase origin main 2>&1
PULL_EXIT=$?

if [ $PULL_EXIT -ne 0 ]; then
  echo ""
  echo "❌ Pull fallito — ripristino modifiche locali"
  git rebase --abort 2>/dev/null
  git stash pop 2>/dev/null
  echo ""
  read -p "Premi Invio per chiudere..."
  exit 1
fi

# Ripristina modifiche salvate
echo ""
echo "Ripristino modifiche locali..."
git stash pop 2>/dev/null

# Aggiungi i file modificati
echo ""
echo "Aggiunta file aggiornati..."
git add \
  components/booking-form.tsx \
  app/api/lead/route.ts \
  app/contatti/page.tsx \
  app/[locale]/layout.tsx \
  app/appartamenti/[id]/page.tsx \
  app/recensioni/layout.tsx \
  app/sitemap.ts \
  components/breadcrumb.tsx \
  lib/metadata.ts \
  app/layout.tsx 2>/dev/null

# Crea commit finale
echo ""
echo "Creazione commit..."
git commit -m "fix(email): EmailJS fallback + API route masking fix + react-calendar

- Aggiunge EmailJS come canale di consegna parallelo garantito lato client
- Corregge bug: webhookDelivery.ok non conta piu' come delivery valida
  (n8n restituisce 200 anche quando i Code nodes falliscono silenziosamente)
- Ora deliveredAny = resendDelivery.ok || telegramDelivery.ok (corretto)
- Pagina contatti rinnovata con hero bg-slate-900 pulito
- DateRangePicker con react-calendar inline (niente piu' mini-dropdown)" 2>&1

# Push finale
echo ""
echo "Push su GitHub..."
git push origin main 2>&1
PUSH_EXIT=$?

echo ""
if [ $PUSH_EXIT -eq 0 ]; then
  echo "========================================"
  echo "  ✅ FATTO! Deploy Vercel in corso..."
  echo "  Controlla: https://vercel.com/dashboard"
  echo "========================================"
else
  echo "❌ Push fallito — controlla l'output sopra"
fi

echo ""
read -p "Premi Invio per chiudere..."
