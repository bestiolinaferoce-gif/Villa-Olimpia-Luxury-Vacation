# Recovery richieste soggiorno - Villa Olimpia 2026

Obiettivo: riattivare richieste qualificate per giugno, luglio residuo e settembre/ottobre, senza aspettare solo Booking/Expedia.

## Diagnosi rapida

- Il sito live riceve correttamente lead in produzione: Resend, webhook, Telegram e persistenza risultano attivi.
- Il problema principale sembra quindi a monte: traffico qualificato insufficiente o canali OTA non ancora pienamente riaperti.
- La domanda Nord Europa ha un appiglio concreto: Oslo Gardermoen - Lamezia Terme e' operata da Norwegian ogni lunedi nel periodo maggio-ottobre 2026.
- Germania su Crotone e' piu debole: la rotta Dusseldorf/Weeze-Crotone mostra segnali instabili/cancellazioni. Meglio usare Lamezia come aeroporto di accesso.

## Priorita operative

1. Google Ads search, solo intenti caldi:
   - "villa capo rizzuto giugno"
   - "appartamenti capo rizzuto luglio"
   - "vacanze settembre calabria mare"
   - "calabria beach apartments september"
   - "oslo lamezia calabria holiday"
   - "norwegian oslo lamezia holiday"

2. Landing da usare nelle campagne:
   - Giugno: `/giugno-2026`
   - Luglio: `/luglio-2026`
   - Settembre: `/settembre-capo-rizzuto`
   - Norvegia: `/no/norway`
   - Oslo-Lamezia: `/no/oslo-til-lamezia-villa-olimpia`

3. Messaggio commerciale:
   - Giugno: settimane da riempire ora, proposta diretta e risposta rapida.
   - Luglio: solo verifica date, spingere flessibilita e risposta immediata.
   - Settembre: mare caldo, meno folla, ideale per coppie, famiglie e Nord Europa.
   - Norvegia: volo diretto Oslo-Lamezia ogni lunedi, soggiorno con auto/transfer verso Capo Rizzuto.

4. Canali immediati:
   - Airbnb: attivo, usare link verso sito ufficiale dove consentito e allineare copy giugno/settembre.
   - Booking/Expedia: riattivare, ma non aspettare: usare Google Ads e social per lead diretti.
   - WhatsApp broadcast: inviare messaggio a contatti storici e agenzie locali con link UTM.
   - Partner B2B: micro-agenzie, CRAL, gruppi sportivi/famiglie, italiani al Nord.

## Budget test 7 giorni

- Google Search Italia: 15-25 EUR/giorno.
- Google Search Norvegia/Scandinavia: 10-20 EUR/giorno.
- Meta retargeting leggero: 5-10 EUR/giorno solo su visitatori sito e interazioni social.

Stop immediato se:
- CTR sotto 3% su search dopo 300 impression.
- Nessun click WhatsApp/form dopo 80-100 click qualificati.
- Query troppo generiche tipo "calabria" senza "settembre", "capo rizzuto", "appartamenti", "lamezia".

## Link utili da generare

Eseguire:

```bash
npm run marketing:links -- recovery_summer_2026
```

Poi usare i link generati per Google Ads, social, WhatsApp e OTA.

## Fonti pubbliche verificate

- Norwegian Oslo-Lamezia calendario/rotta: https://info.flightmapper.net/route/Norwegian_DY_OSL_SUF
- Norwegian low fare calendar: https://www.norwegian.com/en/low-fare-calendar/OsloAllairports-LameziaTerme
- Expedia NO mostra voli Oslo-Lamezia disponibili: https://www.expedia.no/lp/fly/osl/suf/oslo-til-lamezia-terme
- Airbnb Isola di Capo Rizzuto: https://www.airbnb.com/isola-di-capo-rizzuto-italy/stays
