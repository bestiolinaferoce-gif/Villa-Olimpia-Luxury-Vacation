# Ops Context - Villa Olimpia

Ultimo aggiornamento: 2026-02-08

## Identita e contatti
- Dominio ufficiale: https://villaolimpiacaporizzuto.com
- Email ufficiale: villaolimpiacaporizzuto@gmail.com

## Repository
- Repo GitHub: https://github.com/bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation.git
- Branch principale: main
- Ultimo commit rilevante: 43c153a (fix domain/email, redirects, apartments page)

## Hosting / Deploy
- Hosting: Vercel
- URL progetto Vercel (da GitHub About): https://villa-olimpia-luxury-vacation.vercel.app
- Build command: npm run build
- Dev command: npm run dev (porta 3001)
- Framework: Next.js (App Router)

## Rotte chiave
- /appartamenti (pagina principale camere)
- /appartamenti/[id] (dettaglio appartamento)
- Redirect aggiunti: /camere, /rooms, /apartments, /home
- /sitemap.xml, /robots.txt

## Note operative
- Foto appartamenti aggiornate in public/images/villa/appartamenti/*
- Gallery e pool images allineate a file approvati (Esterni_*)
- apartment-content riallineato agli ID corretti (Orchidea/Giglio/Geranio/Azalea)
- JSON-LD: rimosse aggregateRating non verificabili
- Recensioni: file dati pulito, in attesa di import OTA con fonti reali

## Comandi rapidi
- Build: npm run build
- Dev: npm run dev
- Lint: npm run lint (da verificare, errore "no such directory: .../lint")

## Verifiche post-deploy
- Homepage
- /appartamenti
- /camere (redirect)
- /sitemap.xml
- /robots.txt


## Aggiornamenti 2026-02-08
- Planimetria importata: `/public/images/planimetria/piano-terra.png` e `/public/images/planimetria/primo-piano.png` (estratte da `planimetria Villa Olimpia(1).docx`).
- Audit fotografico OTA disponibile in `/Users/francesconigro/Desktop/🏠 Villa Olimpia/Villa_Olimpia_Audit_Fotografico_OTA.docx` (110 foto approvate, 59 scartate).
- Calendario disponibilita: struttura dati in `data/availability-aug-2026.ts`, UI in `components/availability-calendar.tsx` (da popolarsi con disponibilita reali).
