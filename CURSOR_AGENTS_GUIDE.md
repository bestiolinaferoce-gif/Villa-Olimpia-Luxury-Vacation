# Cursor Agents Guide

## Obiettivo
Evitare incongruenze tra testi appartamenti, mappe, planimetria e dati SEO.

## Fonte Canonica
- `data/apartments.ts` e `data/apartment-content.ts`
- Non introdurre nomi/id appartamenti hardcoded in componenti senza allinearli ai file canonici.

## Workflow Obbligatorio Prima di Ogni Commit
1. Esegui `npm run check:apartments`
2. Esegui `npm run build`
3. Se anche solo uno dei due fallisce, NON fare commit.

## Regole di Editing
- Se modifichi `id`, `name`, `bathrooms` o descrizioni di un appartamento:
  - aggiorna sempre in parallelo:
    - `data/apartments.ts`
    - `data/apartment-content.ts`
    - `data/apartments-seo.ts`
- Se modifichi mappe/planimetrie:
  - verifica coerenza `id -> name` con `data/apartments.ts`

## Errori Storici da Non Reintrodurre
- `Orchidea`: deve restare con **2 bagni**.
- `Giglio`: non usare "2 camere matrimoniali comunicanti"; usare configurazione reale (matrimoniale + area letto a castello + divano letto).
