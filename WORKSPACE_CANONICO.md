# Workspace canonico

Questo progetto ha una sola working copy autorizzata.

## Repo canonica unica

Usare sempre e solo:

- `~/Projects/villa-olimpia-luxury-vacation`

Remote: `https://github.com/bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation` · branch di produzione `main`.

## Copia obsoleta — non usare

- `~/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean`

Verificata il 2026-09-02: ferma al commit `749cab5` del 19 giugno 2026, **4 commit dietro `origin/main`**,
senza commit propri. Va considerata archivio storico.

⚠️ Da quella copia l'autopilota SEO ha continuato a girare fino al 2026-09-02
(`reports/seo-google-autopilot/` arriva a oggi, mentre nella copia buona si ferma al 2026-06-13).
Se lo scheduler che la esegue e' ancora attivo, sta analizzando codice di giugno e i suoi output
non tornano mai in produzione. Va spento o ripuntato su `~/Projects`.

Nota: entrambe le copie hanno lo stesso `.vercel/project.json`
(`prj_PZp0zXbRrX03j3Akc7K0At9gjuAY`). Su Vercel non esiste alcun doppione: il progetto
`villa-olimpia-luxury-vacation` e' uno solo ed e' quello che serve il dominio pubblico.

## Regola assoluta

Ogni audit, fix, commit, handoff, review, deploy check e analisi SEO parte dalla cartella canonica.

Se ti trovi in un'altra copia locale del progetto:

1. fermati
2. non modificare file
3. non fare commit
4. torna alla cartella canonica sopra

## Dominio canonico

- `https://villaolimpiacaporizzuto.com`

## Controlli obbligatori a inizio sessione

```bash
pwd
git remote -v
git rev-parse --short HEAD
git status -sb
```

## Prompt standard da usare con agenti e cowork

```text
Repo canonica unica: ~/Projects/villa-olimpia-luxury-vacation
Ignorare qualsiasi altra copia locale del progetto, inclusa
~/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean (obsoleta).
Non usare archivi, backup o workspace secondari.
```

## Documenti di riferimento

- `CLAUDE.md` — memoria di progetto: stack reale, architettura i18n, dati veri delle strutture, guardrail
- `SUPER_PROMPT_AUTOPILOT.md` — protocollo operativo per gli agenti: rilevamento, qualificazione, livelli di autonomia, consegna in PR

In caso di contrasto con un altro `.md` di questa repo, valgono questi due.
