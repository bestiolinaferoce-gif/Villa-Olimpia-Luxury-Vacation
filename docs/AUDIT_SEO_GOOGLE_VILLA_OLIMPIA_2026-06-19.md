# Audit SEO e Google - Villa Olimpia Capo Rizzuto

Data: 2026-06-19
Dominio: https://villaolimpiacaporizzuto.com

## Diagnosi sintetica

La base tecnica del sito e' sana: robots, sitemap, canonical, pagine chiave, GA4 e canali WhatsApp risultano coerenti nei controlli automatici. Il calo richieste non sembra causato da un blocco SEO tecnico generale.

Il problema principale era commerciale/operativo: il sito e l'automazione stagionale erano ancora centrati su giugno/luglio, mentre l'obiettivo reale e' intercettare settembre/ottobre e il mercato Nord Europa. Questo creava CTA, sitemap, autoresponder e messaggi non perfettamente allineati alla domanda che bisogna generare ora.

## Problemi trovati

1. Settembre e ottobre non erano mesi gestiti dal motore stagionale centrale.
2. Il form stagionale/API accettava solo maggio, giugno, luglio e other.
3. La pagina settembre era piu' informativa che convertente: mancavano griglia disponibilita', form diretto e FAQ operative dentro la pagina.
4. Non esisteva una landing ottobre indicizzabile e pronta per campagne.
5. La sitemap dava a settembre priorita' inferiore e frequenza weekly, non adeguata alla campagna attuale.
6. La suite qualita' segnalava una micro-incoerenza copy su Le Castella.
7. Il report lead locale mostra un solo lead test: per capire il buco reale servono dati GA4/GSC/GBP produzione e verifica env Vercel.

## Correzioni applicate nel codice

- Aggiunti `settembre` e `ottobre` in `lib/seasonalConfig.ts`.
- Aggiornata API lead e autoresponder per mantenere il mese stagionale corretto.
- Rafforzata `/settembre-capo-rizzuto` con griglia lodge, form diretto e FAQ.
- Creata `/ottobre-capo-rizzuto` con metadata SEO, schema, hero, disponibilita', form e FAQ.
- Aggiornata sitemap: settembre priorita' 0.97 daily, ottobre priorita' 0.94 daily.
- Aggiornati banner, exit-intent, link campagne e pagina prenota su settembre/ottobre.
- Sistemata coerenza copy su Le Castella.

## Verifiche eseguite

- `npm run check:seo`: OK
- `npm run verify:contact-channels`: OK
- `SITE_URL=https://villaolimpiacaporizzuto.com npm run verify:analytics`: OK
- `npm run quality:quick`: OK
- `npm run build`: OK

## Azioni Google prioritarie dopo deploy produzione

1. Search Console: richiedere indicizzazione in questo ordine:
   - `/settembre-capo-rizzuto`
   - `/ottobre-capo-rizzuto`
   - `/prenota`
   - `/contatti`
   - `/no/norway`
   - `/no/oslo-til-lamezia-villa-olimpia`
2. Google Business Profile:
   - pubblicare offerta settembre/ottobre con link UTM a `/settembre-capo-rizzuto`;
   - caricare 6 foto reali: piscina, mare, esterni, 2 lodge luminosi, terrazza/vista;
   - verificare telefono, sito, messaggi e categoria.
3. GA4:
   - controllare eventi `lead_submit_success`, `lead_submit_fallback`, `phone_click`, `whatsapp_click`;
   - creare confronto ultimi 28 giorni vs periodo precedente per capire se il problema e' traffico o conversione.
4. Vercel env:
   - verificare in produzione `RESEND_API_KEY`, `LEADS_TO_EMAIL`, eventuale Telegram e webhook.

## Piano commerciale concreto

Campagna Nord Europa settembre/ottobre:
- Landing principale: `/settembre-capo-rizzuto`
- Landing secondaria long stay: `/ottobre-capo-rizzuto`
- Angoli copy:
  - warm sea in September Calabria;
  - less crowded beaches;
  - direct booking, no OTA commissions;
  - family apartments with pool near the beach;
  - October long stay / quiet Calabria / workation.
- Canali:
  - Google Ads search piccolo budget 15-25 EUR/giorno;
  - Google Business Profile post settimanale;
  - WhatsApp broadcast su contatti caldi;
  - aggiornamento descrizioni Airbnb/OTA con rimando concettuale a settembre/ottobre.

## Nota critica

La produzione non e' stata deployata automaticamente perche' serve conferma esplicita per deploy production. Le modifiche sono pronte e verificate localmente.
