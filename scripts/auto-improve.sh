#!/bin/bash
# Script di auto-miglioramento perpetuo per Villa Olimpia
# Esegui: chmod +x scripts/auto-improve.sh && ./scripts/auto-improve.sh

echo "🔍 Auto-Improvement System - Villa Olimpia"
echo "=========================================="
echo ""

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verifica errori build
echo "📦 Checking build errors..."
if npm run build 2>&1 | tee build.log | grep -q "error\|Error\|failed\|Failed"; then
  echo -e "${RED}⚠️ Build errors found - Fix needed${NC}"
  grep -i "error\|failed" build.log | head -10
else
  echo -e "${GREEN}✅ Build successful${NC}"
fi
echo ""

# 2. Verifica foto mancanti nel codice
echo "📸 Checking image references..."
MISSING_IMAGES=0
find app components lib -type f \( -name "*.tsx" -o -name "*.ts" \) | while read file; do
  grep -oE '/images/[^"'\'' ]+' "$file" 2>/dev/null | while read img_path; do
    if [ ! -f "public$img_path" ] && [ ! -d "public$img_path" ]; then
      echo -e "${YELLOW}⚠️ Missing: $img_path (referenced in $file)${NC}"
      MISSING_IMAGES=$((MISSING_IMAGES + 1))
    fi
  done
done

if [ $MISSING_IMAGES -eq 0 ]; then
  echo -e "${GREEN}✅ All image references valid${NC}"
fi
echo ""

# 3. Verifica foto non utilizzate
echo "📂 Checking unused images..."
UNUSED_COUNT=0
find public/images -type f \( -name "*.jpg" -o -name "*.png" \) | while read img; do
  IMG_NAME=$(basename "$img")
  if ! grep -r "$IMG_NAME" app/ components/ lib/ data/ > /dev/null 2>&1; then
    echo -e "${YELLOW}ℹ️ Potentially unused: $img${NC}"
    UNUSED_COUNT=$((UNUSED_COUNT + 1))
  fi
done

if [ $UNUSED_COUNT -eq 0 ]; then
  echo -e "${GREEN}✅ All images are referenced${NC}"
fi
echo ""

# 4. Conta totale foto
echo "📊 Image statistics:"
TOTAL_IMAGES=$(find public/images -type f \( -name "*.jpg" -o -name "*.png" \) | wc -l | tr -d ' ')
echo "  Total images: $TOTAL_IMAGES"
echo ""

# 5. Verifica dipendenze
echo "📦 Checking dependencies..."
if npm audit --audit-level=moderate 2>&1 | grep -q "found"; then
  echo -e "${YELLOW}⚠️ Security vulnerabilities found${NC}"
  echo "  Run: npm audit fix"
else
  echo -e "${GREEN}✅ No critical vulnerabilities${NC}"
fi
echo ""

# 6. Type check
echo "🔍 Type checking..."
if npx tsc --noEmit 2>&1 | grep -q "error"; then
  echo -e "${RED}⚠️ TypeScript errors found${NC}"
else
  echo -e "${GREEN}✅ TypeScript check passed${NC}"
fi
echo ""

echo "=========================================="
echo -e "${GREEN}✅ Auto-check completed${NC}"
echo ""
echo "📋 Next steps:"
echo "  - Review any warnings above"
echo "  - Run 'npm run dev' to test locally"
echo "  - Check Lighthouse scores"
echo ""











