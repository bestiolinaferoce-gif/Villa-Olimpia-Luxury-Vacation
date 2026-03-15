# Release Report — Senior Release Engineer + SEO QA

**Data:** 2026-03-01 | **Commit:** ab9d049 | **Branch:** main

## Completato / Manuale / Non applicabile

| Attività | Stato |
|----------|--------|
| Git sync | ✅ |
| Housekeeping | ✅ _reports_local, .gitignore |
| BASE_URL canonical | ✅ non-www |
| Redirect vercel | ✅ Rimosso |
| Build + TS fix | ✅ |
| Lighthouse | ✅ P:81 A:96 BP:96 SEO:91 |
| GSC meta env | ✅ |
| Push | ✅ |
| GSC verifica/invio sitemap | ⏳ Manuale |

## Diff file toccati

.gitignore | +_reports_local, lighthouse-*.json
.env.example | +NEXT_PUBLIC_GSC_VERIFICATION
app/[locale]/layout.tsx | +GSC meta condizionale
components/map-component.tsx | -@ts-expect-error
components/restaurants-map-premium.tsx | -@ts-expect-error x2
i18n/request.ts | locale?: string
lib/metadata.ts | BASE_URL non-www
vercel.json | -redirects
GSC_SETUP.md | Nuovo

## Deploy: PRONTO

## Prossimi 3 passi
1. Imposta NEXT_PUBLIC_GSC_VERIFICATION su Vercel
2. Verifica GSC e invia sitemap
3. Lighthouse su produzione post-deploy
