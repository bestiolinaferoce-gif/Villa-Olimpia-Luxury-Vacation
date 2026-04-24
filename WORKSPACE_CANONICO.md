# Workspace canonico

Questo progetto ha una sola working copy autorizzata.

## Repo canonica unica

Usare sempre e solo:

- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean`

## Regola assoluta

Ogni audit, fix, commit, handoff, review, deploy check e analisi SEO deve partire da questa cartella.

Se ti trovi in un'altra copia locale del progetto:

1. fermati
2. non modificare file
3. non fare commit
4. torna alla cartella canonica sopra

## Dominio canonico

- `https://villaolimpiacaporizzuto.com`

## Controlli obbligatori a inizio sessione

Eseguire sempre:

```bash
pwd
git remote -v
git rev-parse --short HEAD
```

Oppure usare lo script:

```bash
./scripts/check-canonical-workspace.sh
```

## Prompt standard da usare con agenti e cowork

```text
Repo canonica unica: /Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean
Ignorare qualsiasi altra copia locale del progetto.
Non usare archivi, backup o workspace secondari.
```

## Nota operativa

Se Vercel o un altro workspace risultano collegati a una copia diversa, quella situazione va considerata da correggere. La fonte operativa unica resta comunque questa cartella.
