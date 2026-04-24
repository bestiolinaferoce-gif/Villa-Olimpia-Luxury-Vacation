# Handoff cowork SEO urgente

Data: 20 aprile 2026

## Repo giusto da usare

Usare solo questa cartella canonica:

- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean`

Questa e' la copia stabile e autorizzata del progetto.
Ignorare qualsiasi altra copia locale anche se punta allo stesso repository GitHub.

Non analizzare o usare queste categorie di cartelle:

- `/Users/francesconigro/Documents/New project/_ARCHIVIO_NON_USARE/`
- `/Users/francesconigro/Documents/New project/_ARCHIVIO_NON_USARE/Villa-Olimpia-Luxury-Vacation-safe`
- `/Users/francesconigro/Documents/New project/_ARCHIVIO_NON_USARE/tmp_villa_site`
- qualsiasi file/report storico fuori dalla cartella `Villa-Olimpia-Luxury-Vacation-clean`
- qualsiasi workspace secondario che contenga una copia dello stesso repo

Dominio canonico corretto:

- `https://villaolimpiacaporizzuto.com`

Versioni da considerare non canoniche:

- `https://villaolimpiacaporizzuto.com`
- vecchi riferimenti Netlify
- URL legacy come `/appartamenti/apartment-7`, `/apartments`, `/rooms`, `/camere`, `/home`, `/it/...`

## Obiettivo del lavoro

Audit e fix SEO tecnico immediato lato Google, con priorita' su:

1. errori di reindirizzamento
2. pagine con redirect non necessari
3. pagine scansionate ma non indicizzate
4. coerenza tra canonical, hreflang, sitemap, robots e routing i18n

Non partire da ipotesi marketing. Prima va chiusa l'emergenza tecnica di indicizzazione.

## Guardrail iniziale obbligatorio

Prima di leggere il codice o proporre fix:

```bash
pwd
git remote -v
git rev-parse --short HEAD
```

Se il path non e' quello della repo canonica, fermarsi.

## Stato verificato oggi

Da Google Search Console il 20/04/2026:

- `Pagina con reindirizzamento`: 5
- `Errore di reindirizzamento`: 2
- `Pagina scansionata, ma attualmente non indicizzata`: 7

Dettaglio confermato da screenshot utente:

- notifica Search Console per `Errore di reindirizzamento`
- validazione non riuscita per `Pagina scansionata, ma attualmente non indicizzata`
- validazione partita il `16/04/2026`
- operazione fallita il `18/04/2026`

## Ipotesi principale gia' verificata nel codice

Il problema piu' probabile non e' robots/sitemap da soli, ma la strategia URL i18n con pagine localizzate generate e poi reindirizzate verso l'italiano.

Questo pattern compare qui:

- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/[locale]/contatti/page.tsx`
- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/[locale]/prenota/page.tsx`
- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/[locale]/le-castella/page.tsx`
- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/[locale]/settembre-capo-rizzuto/page.tsx`
- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/[locale]/capo-rizzuto/page.tsx`

In piu' esistono molti redirect legacy in:

- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/next.config.js`

E una normalizzazione host/path in:

- `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/proxy.ts`

La combinazione di questi livelli puo' generare segnali Google sporchi:

- URL localizzati che non devono esistere
- redirect multipli o poco chiari
- canonical/hreflang non perfettamente allineati alle route realmente servite

## File critici da leggere per primi

Ordine consigliato:

1. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/proxy.ts`
2. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/next.config.js`
3. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/lib/metadata.ts`
4. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/sitemap.ts`
5. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/robots.ts`
6. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/lib/i18n-config.ts`
7. `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/lib/i18n-routing.ts`
8. tutte le route sotto `/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean/app/[locale]/`

## Segnali live esterni gia' osservati

Google vede ancora:

- dominio canonico `villaolimpiacaporizzuto.com`
- anche la variante `www`
- URL legacy come `/appartamenti/apartment-7`

URL osservati:

- `https://villaolimpiacaporizzuto.com/`
- `https://villaolimpiacaporizzuto.com/`
- `https://villaolimpiacaporizzuto.com/en`
- `https://villaolimpiacaporizzuto.com/en/capo-rizzuto`
- `https://villaolimpiacaporizzuto.com/appartamenti/apartment-7`

## Cosa NON fare

- non usare cartelle archiviate
- non partire da report storici come fonte primaria
- non cambiare copy o contenuti commerciali prima di chiudere il routing SEO
- non moltiplicare redirect se una route non deve esistere
- non lasciare in sitemap URL che poi reindirizzano
- non lasciare hreflang verso URL che non servono contenuto 200 reale

## Deliverable atteso dal cowork

Serve una risposta molto concreta con:

1. lista URL che devono restare indicizzabili con status 200
2. lista URL che devono fare redirect 301
3. lista URL che non devono proprio essere generate
4. elenco mismatch tra sitemap, hreflang, canonical e routing
5. proposta di fix minima e sicura
6. verifica finale su dominio canonico, `www`, `/it`, pagine EN e URL legacy

## Vincoli operativi

- evitare analisi su versioni sbagliate del progetto
- lavorare solo sul repo indicato sopra
- tenere i fix stretti e reversibili
- prima chiudere i redirect errati, poi richiedere nuova validazione in Search Console

## Nota importante

Questo e' un problema tecnico SEO serio, ma non promettere recupero immediato delle richieste in giornata solo da Google organico. Il target realistico oggi e':

- fermare l'emorragia tecnica
- ripulire i segnali a Google
- rimettere il sito in condizione di essere rivalutato correttamente
