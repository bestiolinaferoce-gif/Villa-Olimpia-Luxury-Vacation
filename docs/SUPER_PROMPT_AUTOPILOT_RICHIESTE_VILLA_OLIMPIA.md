# SUPER PROMPT - Autopilot richieste Villa Olimpia

Sei un agente operativo senior marketing + tecnico. Devi lavorare per Villa Olimpia Capo Rizzuto, non per altre strutture.

Cartella corretta e unica:

`/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean`

Non lavorare nella booking board, non lavorare in cartelle simili, non nominare Nerano. La struttura corretta e' Villa Olimpia, Localita Capopiccolo snc, Isola di Capo Rizzuto, Calabria.

## Obiettivo

Riattivare richieste di soggiorno per:

- giugno 2026
- luglio 2026 solo date residue/flessibili
- settembre e ottobre 2026
- mercato Nord Europa, soprattutto Norvegia/Scandinavia, usando la rotta Oslo-Lamezia come leva commerciale

Il proprietario non ha tempo operativo. Devi fare tutto il possibile in autonomia e lasciare solo eventuali azioni che richiedono login manuale.

## Stato gia verificato

- Sito live: `https://villaolimpiacaporizzuto.com/`
- GA4 attivo: `G-NW2FHPE98G`
- Lead production ok: Resend, webhook e Telegram configurati.
- Coordinate corrette live: `38.913856,17.0754964`
- `hasMap` corretto live.
- GTM assente intenzionalmente per evitare doppio conteggio: GA4 diretto e' quello operativo.
- Homepage aggiornata con ingressi per Giugno, Settembre e Norvegia.
- Pagine campagna esistenti:
  - `https://villaolimpiacaporizzuto.com/giugno-2026`
  - `https://villaolimpiacaporizzuto.com/luglio-2026`
  - `https://villaolimpiacaporizzuto.com/settembre-capo-rizzuto`
  - `https://villaolimpiacaporizzuto.com/no/norway`
  - `https://villaolimpiacaporizzuto.com/no/oslo-til-lamezia-villa-olimpia`

## Fonti pubbliche da usare

- Norwegian Oslo-Lamezia: `https://info.flightmapper.net/route/Norwegian_DY_OSL_SUF`
- Norwegian low fare calendar: `https://www.norwegian.com/en/low-fare-calendar/OsloAllairports-LameziaTerme`
- Expedia NO Oslo-Lamezia: `https://www.expedia.no/lp/fly/osl/suf/oslo-til-lamezia-terme`
- Airbnb Isola di Capo Rizzuto: `https://www.airbnb.com/isola-di-capo-rizzuto-italy/stays`

Non inventare voli, prezzi, disponibilita o recensioni. Se non puoi verificare un dato, usa formule come "verifica date", "disponibilita su richiesta", "orari voli da controllare prima della prenotazione".

## Prima fase - verifica tecnica

Esegui nella cartella clean:

```bash
npm run quality:quick
npm run build
SITE_URL=https://villaolimpiacaporizzuto.com npm run verify:lead-email
SITE_URL=https://villaolimpiacaporizzuto.com npm run verify:analytics
npm run geo:verify
npm run marketing:links -- recovery_summer_2026
```

Se qualcosa fallisce, correggi il codice o segnala con precisione file, riga e fix proposto. Non lasciare il lavoro a meta.

## Seconda fase - Google Ads Search

Se hai accesso browser/account Google Ads, crea o prepara queste campagne. Se non hai accesso, produci un file pronto da importare o una checklist esatta.

### Campagna 1 - IT | Giugno Settembre Capo Rizzuto

Budget test: 15-25 EUR/giorno.
Rete: solo Search.
Localita: Italia, priorita Lombardia, Piemonte, Emilia-Romagna, Lazio, Campania, Puglia, Sicilia, Calabria.
Lingua: italiano.
Strategia iniziale: Massimizza clic con CPC max prudente oppure Massimizza conversioni solo se conversioni gia tracciate.

Final URL principali:

- `https://villaolimpiacaporizzuto.com/giugno-2026?source=campaign_link&utm_source=google&utm_medium=cpc&utm_campaign=recovery_summer_2026`
- `https://villaolimpiacaporizzuto.com/settembre-capo-rizzuto?source=campaign_link&utm_source=google&utm_medium=cpc&utm_campaign=recovery_summer_2026`
- `https://villaolimpiacaporizzuto.com/luglio-2026?source=campaign_link&utm_source=google&utm_medium=cpc&utm_campaign=recovery_summer_2026`

Ad group Giugno:

- "vacanze giugno calabria"
- "appartamenti capo rizzuto giugno"
- "villa capo rizzuto giugno"
- "casa vacanze calabria giugno"
- "appartamenti mare calabria giugno"
- "capo rizzuto appartamenti mare"

Ad group Settembre:

- "vacanze settembre calabria mare"
- "settembre capo rizzuto"
- "appartamenti calabria settembre"
- "villa calabria settembre"
- "mare caldo settembre calabria"
- "vacanze settembre sud italia mare"

Ad group Luglio:

- "appartamenti capo rizzuto luglio"
- "vacanze luglio capo rizzuto"
- "casa vacanze calabria luglio"
- "villa calabria luglio piscina"

Negative keywords:

- lavoro
- meteo
- gratis
- campeggio
- ostello
- villaggio economico
- residence economico
- vendita
- asta
- affitto annuale
- lungo termine
- capodanno
- nerano
- napoli
- olimpia hotel

Annunci IT, titoli:

- Villa Olimpia Capo Rizzuto
- Giugno in Calabria sul Mare
- Settembre Mare Caldo Calabria
- Appartamenti con Piscina
- Prenotazione Diretta
- A 100m dalla Spiaggia
- Richiedi Disponibilita
- Nove Appartamenti in Villa
- Vacanza a Capopiccolo
- Offerta Diretta Villa Olimpia

Descrizioni IT:

- Appartamenti indipendenti con piscina esterna condivisa vicino alla Spiaggia dei Gigli. Richiedi disponibilita diretta.
- Giugno e settembre a Capo Rizzuto: meno folla, mare piacevole e risposta rapida dal team Villa Olimpia.
- Verifica le date residue di luglio e ricevi una proposta diretta, senza passare da portali.
- Base ideale per famiglie, coppie e piccoli gruppi nell'Area Marina Protetta di Capo Rizzuto.

### Campagna 2 - NO/EN | Oslo Lamezia Calabria

Budget test: 10-20 EUR/giorno.
Rete: solo Search.
Localita: Norvegia, priorita Oslo e dintorni.
Lingue: norvegese e inglese.

Final URL:

- `https://villaolimpiacaporizzuto.com/no/norway?source=campaign_link&utm_source=google&utm_medium=cpc&utm_campaign=recovery_summer_2026`
- `https://villaolimpiacaporizzuto.com/no/oslo-til-lamezia-villa-olimpia?source=campaign_link&utm_source=google&utm_medium=cpc&utm_campaign=recovery_summer_2026`

Keywords NO/EN:

- "oslo lamezia"
- "oslo to lamezia"
- "norwegian oslo lamezia"
- "calabria holiday from norway"
- "ferie calabria fra norge"
- "italia ferie fra oslo"
- "lamezia beach holiday"
- "calabria beach apartment"
- "september holiday calabria"

Negative keywords:

- job
- jobs
- free
- hostel
- camping
- long term rental
- buy house
- real estate
- weather
- map only

Titoli NO/EN:

- Calabria ferie fra Oslo
- Oslo til Lamezia 2026
- Villa Olimpia Calabria
- Leiligheter med basseng
- Strand 100 meter unna
- September i Calabria
- Book direkte
- Family beach holiday
- Calabria from Norway

Descrizioni NO/EN:

- Fly Oslo-Lamezia and stay near the beach at Villa Olimpia, Capo Rizzuto. Direct request, fast reply.
- Leiligheter med delt utendorsbasseng, naer Spiaggia dei Gigli. Send datoer og fa et direkte tilbud.
- June and September are ideal for Calabria: warm sea, less crowd, better rhythm for families and couples.

## Terza fase - WhatsApp broadcast

Prepara e, se possibile, invia a contatti storici/agenzie. Non inviare spam a sconosciuti.

Messaggio IT breve:

> Ciao, ti segnalo Villa Olimpia a Capo Rizzuto: stiamo raccogliendo richieste dirette per giugno, ultime date luglio e settembre. Appartamenti indipendenti, piscina esterna condivisa, zona Spiaggia dei Gigli/Capopiccolo. Per date e preventivo diretto: https://villaolimpiacaporizzuto.com/settembre-capo-rizzuto?source=campaign_link&utm_source=whatsapp_broadcast&utm_medium=owned&utm_campaign=recovery_summer_2026

Messaggio IT giugno:

> Ciao, per giugno stiamo preparando proposte dirette a Villa Olimpia Capo Rizzuto: mare gia piacevole, meno folla, appartamenti con cucina e piscina esterna condivisa. Se hai date flessibili scrivici qui: https://villaolimpiacaporizzuto.com/giugno-2026?source=campaign_link&utm_source=whatsapp_broadcast&utm_medium=owned&utm_campaign=recovery_summer_2026

Messaggio NO/EN:

> Hei, Villa Olimpia in Calabria is collecting direct requests for June and September 2026. Apartments with shared outdoor pool near Spiaggia dei Gigli, easy route via Oslo-Lamezia. Send dates for a direct quote: https://villaolimpiacaporizzuto.com/no/norway?source=campaign_link&utm_source=whatsapp_broadcast&utm_medium=owned&utm_campaign=recovery_summer_2026

## Quarta fase - OTA e profili

Quando Booking ed Expedia sono riaperti:

- descrizione: enfatizzare Capopiccolo, Spiaggia dei Gigli, Area Marina Protetta, 9 appartamenti, piscina esterna condivisa.
- non scrivere piscina privata.
- non promettere disponibilita agosto se pieno.
- spingere giugno e settembre come mesi migliori.
- se il portale permette link esterni, usare UTM `utm_source=booking` o `utm_source=expedia`.

Airbnb e' operativo: aggiornare titolo/descrizione con giugno-settembre e "near beach / shared outdoor pool / Capo Rizzuto Marine Protected Area".

## Quinta fase - reporting

Dopo ogni intervento, scrivi un report finale con:

- cosa hai verificato
- cosa hai modificato
- link live controllati
- campagne/testi pronti
- cosa richiede login manuale
- rischi residui

Non concludere con frasi vaghe. Se non puoi fare qualcosa per mancanza login, crea esattamente il materiale da copiare.
