import { BASE_URL } from "@/lib/metadata"

export const metadata = {
  title: "Termini e Condizioni | Villa Olimpia",
  description: "Condizioni di utilizzo, regole della struttura, policy di prenotazione e responsabilità di Villa Olimpia.",
  alternates: {
    canonical: `${BASE_URL}/termini-condizioni`,
  },
}

export default function TerminiCondizioniPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Termini e Condizioni
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Condizioni di utilizzo, regole della struttura, policy di prenotazione e responsabilità di Villa Olimpia
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-6 text-foreground">
              <p>
                <strong>Villa Olimpia - Capo Piccolo, Isola di Capo Rizzuto</strong>
              </p>
              <p>
                <strong>Ultimo aggiornamento:</strong> 7 Dicembre 2024<br />
                <strong>Versione:</strong> 1.0
              </p>

              <h2>1. INFORMAZIONI GENERALI</h2>
              <p>
                <strong>Denominazione:</strong> Villa Olimpia<br />
                <strong>Titolare:</strong> Francesco Nigro<br />
                <strong>Indirizzo:</strong> Capo Piccolo, 88841 Isola di Capo Rizzuto (KR), Italia<br />
                <strong>CIN (Codice Identificativo Nazionale):</strong> IT101013C22FCE8T7Y<br />
                <strong>Email:</strong> villaolimpiacaporizzuto@gmail.com<br />
                <strong>Telefono:</strong> +39 333 577 3390
              </p>

              <h2>2. OGGETTO DEL CONTRATTO</h2>
              <p>
                I presenti Termini e Condizioni disciplinano il rapporto contrattuale tra Villa Olimpia (di seguito &quot;Struttura&quot;) e il Cliente (di seguito &quot;Ospite&quot; o &quot;Prenotante&quot;) per la locazione turistica di appartamenti situati a Capo Piccolo, Isola di Capo Rizzuto (KR).
              </p>
              <p>
                <strong>Tipologia alloggi:</strong> 9 appartamenti indipendenti con accesso a piscina condivisa e servizi comuni.
              </p>
              <p>
                <strong>Ambito di applicazione:</strong> Questi termini si applicano a tutte le prenotazioni effettuate tramite:
              </p>
              <ul>
                <li>Sito web ufficiale villaolimpia.it</li>
                <li>Email o telefono diretto</li>
                <li>Piattaforme OTA (Booking.com, Airbnb) - integrate con termini specifici della piattaforma</li>
              </ul>

              <h2>3. MODALITÀ DI PRENOTAZIONE</h2>

              <h3>3.1 RICHIESTA E CONFERMA</h3>
              <p>
                <strong>Procedura:</strong>
              </p>
              <ol>
                <li>
                  L&apos;Ospite invia richiesta di prenotazione tramite:
                  <ul>
                    <li>Form online sul sito</li>
                    <li>Email a villaolimpiacaporizzuto@gmail.com</li>
                    <li>WhatsApp al +39 333 577 3390</li>
                    <li>Telefono</li>
                  </ul>
                </li>
                <li>
                  La Struttura verifica disponibilità e invia:
                  <ul>
                    <li>Conferma disponibilità</li>
                    <li>Preventivo dettagliato</li>
                    <li>Richiesta dati per prenotazione</li>
                  </ul>
                </li>
                <li>
                  L&apos;Ospite conferma accettazione e fornisce:
                  <ul>
                    <li>Dati personali (nome, cognome, email, telefono)</li>
                    <li>Date soggiorno</li>
                    <li>Numero ospiti</li>
                    <li>Richieste speciali (se presenti)</li>
                  </ul>
                </li>
                <li>
                  La Struttura invia:
                  <ul>
                    <li><strong>Conferma prenotazione</strong> scritta via email</li>
                    <li>Istruzioni per pagamento acconto</li>
                    <li>Riepilogo condizioni</li>
                  </ul>
                </li>
              </ol>
              <p>
                <strong>La prenotazione è confermata SOLO dopo:</strong>
              </p>
              <ul>
                <li>Ricezione conferma scritta da Villa Olimpia</li>
                <li>Pagamento dell&apos;acconto richiesto</li>
              </ul>

              <h3>3.2 DISPONIBILITÀ</h3>
              <ul>
                <li>Le disponibilità indicate sono aggiornate in tempo reale ma non vincolanti fino a conferma scritta</li>
                <li>In caso di indisponibilità sopravvenuta, la Struttura propone date alternative o rimborso integrale</li>
                <li>Le prenotazioni sono soggette a disponibilità effettiva al momento della conferma</li>
              </ul>

              <h2>4. PREZZI E PAGAMENTI</h2>

              <h3>4.1 TARIFFE</h3>
              <p>
                <strong>I prezzi includono:</strong>
              </p>
              <ul>
                <li>Locazione appartamento per periodo concordato</li>
                <li>Utenze (acqua, luce, gas)</li>
                <li>Biancheria da letto e da bagno (cambio settimanale)</li>
                <li>Pulizia finale</li>
                <li>Accesso piscina condivisa</li>
                <li>Parcheggio</li>
                <li>WiFi</li>
                <li>Aria condizionata</li>
              </ul>
              <p>
                <strong>I prezzi NON includono:</strong>
              </p>
              <ul>
                <li>Tassa di soggiorno (pagata separatamente al check-in)</li>
                <li>Servizi extra opzionali (pulizie intermedie, biancheria aggiuntiva, etc.)</li>
                <li>Consumi eccezionali di utenze (valutati caso per caso)</li>
              </ul>
              <p>
                <strong>Variazioni prezzo:</strong>
              </p>
              <p>
                I prezzi possono variare in base a:
              </p>
              <ul>
                <li>Periodo (alta/bassa stagione)</li>
                <li>Durata soggiorno</li>
                <li>Numero ospiti</li>
                <li>Anticipo prenotazione (early booking discount)</li>
                <li>Offerte speciali</li>
              </ul>
              <p>
                <strong>Prezzi bloccati:</strong> Una volta confermata la prenotazione con acconto, il prezzo è bloccato e non soggetto a variazioni.
              </p>

              <h3>4.2 MODALITÀ DI PAGAMENTO</h3>
              <p>
                <strong>ACCONTO:</strong>
              </p>
              <ul>
                <li><strong>Importo:</strong> 30% del totale soggiorno</li>
                <li><strong>Scadenza:</strong> Entro 7 giorni dalla conferma prenotazione</li>
                <li>
                  <strong>Modalità:</strong>
                  <ul>
                    <li>Bonifico bancario (IBAN comunicato in fase di conferma)</li>
                    <li>PayPal / Stripe (se disponibile)</li>
                    <li>Carta di credito (se disponibile)</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>SALDO:</strong>
              </p>
              <ul>
                <li><strong>Importo:</strong> 70% rimanente</li>
                <li><strong>Scadenza:</strong> Contestualmente al check-in</li>
                <li>
                  <strong>Modalità:</strong>
                  <ul>
                    <li>Contanti</li>
                    <li>Bonifico bancario (anticipato)</li>
                    <li>POS (carte di credito/debito) [se disponibile]</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>Deposito cauzionale:</strong>
              </p>
              <ul>
                <li><strong>Importo:</strong> Da concordare in base all&apos;appartamento (generalmente €100-300)</li>
                <li><strong>Modalità:</strong> Contanti, carta di credito (pre-autorizzazione) o bonifico</li>
                <li><strong>Restituzione:</strong> Entro 3-5 giorni dal check-out, verificata assenza danni</li>
                <li><strong>Trattenute:</strong> In caso di danni, pulizie straordinarie, consumi eccezionali</li>
              </ul>

              <h3>4.3 FATTURAZIONE</h3>
              <ul>
                <li>Emissione fattura/ricevuta fiscale su richiesta</li>
                <li>Fornire dati fiscali al momento della prenotazione</li>
                <li>Fattura inviata via email dopo il pagamento</li>
              </ul>

              <h2>5. MODIFICHE E CANCELLAZIONI</h2>

              <h3>5.1 MODIFICHE PRENOTAZIONE</h3>
              <p>
                <strong>Richieste modifica date:</strong>
              </p>
              <ul>
                <li>Ammesse fino a <strong>30 giorni prima</strong> del check-in</li>
                <li>Soggette a disponibilità</li>
                <li>Nessun costo aggiuntivo se accettate</li>
                <li>Differenze di prezzo saranno conguagliate</li>
              </ul>
              <p>
                <strong>Modifiche numero ospiti:</strong>
              </p>
              <ul>
                <li>Comunicare sempre con anticipo</li>
                <li>Aumento ospiti: soggetto a disponibilità e supplemento</li>
                <li>Diminuzione ospiti: nessun rimborso</li>
              </ul>
              <p>
                <strong>Modifiche appartamento:</strong>
              </p>
              <ul>
                <li>Possibili su disponibilità</li>
                <li>Differenza prezzo da conguagliare</li>
              </ul>

              <h3>5.2 CANCELLAZIONE DA PARTE DELL&apos;OSPITE</h3>
              <p>
                <strong>POLICY STANDARD:</strong>
              </p>
              <p>
                <strong>Cancellazione gratuita:</strong>
              </p>
              <ul>
                <li>Fino a <strong>30 giorni prima</strong> del check-in</li>
                <li>Rimborso: 100% importo versato (acconto)</li>
                <li>Modalità: Stessa forma di pagamento ricevuta</li>
              </ul>
              <p>
                <strong>Cancellazione da 29 a 15 giorni prima:</strong>
              </p>
              <ul>
                <li>Penale: 50% acconto versato</li>
                <li>Rimborso: 50% acconto versato</li>
              </ul>
              <p>
                <strong>Cancellazione da 14 giorni prima a check-in:</strong>
              </p>
              <ul>
                <li>Penale: 100% acconto versato</li>
                <li>Rimborso: 0%</li>
              </ul>
              <p>
                <strong>No-show (mancata presentazione):</strong>
              </p>
              <ul>
                <li>Penale: 100% importo totale prenotazione</li>
                <li>Nessun rimborso</li>
              </ul>
              <p>
                <strong>Partenza anticipata:</strong>
              </p>
              <ul>
                <li>Nessun rimborso per notti non usufruite</li>
                <li>Saldo dovuto comunque per intero</li>
              </ul>
              <p>
                <strong>POLICY SPECIALE (Periodi festivi / alta stagione):</strong>
              </p>
              <ul>
                <li>Cancellazione gratuita: Fino a 60 giorni prima</li>
                <li>Cancellazione da 59 a 30 giorni: Penale 50%</li>
                <li>Cancellazione da 29 giorni a check-in: Penale 100%</li>
              </ul>
              <p>
                <em>La policy applicata è specificata nella conferma di prenotazione.</em>
              </p>

              <h3>5.3 CANCELLAZIONE DA PARTE DELLA STRUTTURA</h3>
              <p>
                <strong>Cause di cancellazione:</strong>
              </p>
              <ul>
                <li>Cause di forza maggiore (calamità naturali, emergenze sanitarie, etc.)</li>
                <li>Manutenzione straordinaria imprevista e urgente</li>
                <li>Indisponibilità sopravvenuta per motivi non imputabili alla Struttura</li>
              </ul>
              <p>
                <strong>In caso di cancellazione da parte della Struttura:</strong>
              </p>
              <ul>
                <li>Notifica immediata all&apos;Ospite</li>
                <li>Rimborso integrale di quanto versato (100%)</li>
                <li>Proposta di sistemazione alternativa equivalente (se disponibile)</li>
                <li>Nessun ulteriore risarcimento dovuto</li>
              </ul>

              <h3>5.4 ASSICURAZIONE ANNULLAMENTO VIAGGIO</h3>
              <p>
                Villa Olimpia consiglia la stipula di una polizza assicurativa annullamento viaggio che copra:
              </p>
              <ul>
                <li>Cancellazioni per motivi di salute</li>
                <li>Emergenze familiari</li>
                <li>Cause di forza maggiore</li>
              </ul>
              <p>
                <strong>La Struttura non è responsabile</strong> per cancellazioni dovute a circostanze personali dell&apos;Ospite non coperte dalla policy standard.
              </p>

              <h2>6. CHECK-IN E CHECK-OUT</h2>

              <h3>6.1 CHECK-IN</h3>
              <p>
                <strong>Orario:</strong> 15:00 - 22:00
              </p>
              <p>
                <strong>Modalità:</strong>
              </p>
              <ul>
                <li>Accoglienza in loco da parte dello staff</li>
                <li>Consegna chiavi e istruzioni</li>
                <li>Verifica stato appartamento (firma verbale check-in)</li>
                <li>Consegna deposito cauzionale</li>
              </ul>
              <p>
                <strong>Check-in anticipato:</strong>
              </p>
              <ul>
                <li>Richiesta da inviare con almeno 3 giorni di anticipo</li>
                <li>Soggetto a disponibilità (pulizie completate)</li>
                <li>Eventuale supplemento: €30-50 (a discrezione)</li>
              </ul>
              <p>
                <strong>Check-in tardivo (dopo le 22:00):</strong>
              </p>
              <ul>
                <li>Comunicare con almeno 24 ore di anticipo</li>
                <li>Supplemento: €30 (22:00-24:00), €50 (dopo 00:00)</li>
                <li>Istruzioni per self check-in comunicate via email/WhatsApp</li>
              </ul>
              <p>
                <strong>Mancata presentazione:</strong>
              </p>
              <ul>
                <li>Comunicare sempre eventuali ritardi</li>
                <li>No-show oltre 24 ore senza comunicazione: prenotazione cancellata, nessun rimborso</li>
              </ul>

              <h3>6.2 CHECK-OUT</h3>
              <p>
                <strong>Orario:</strong> Entro le 10:30
              </p>
              <p>
                <strong>Modalità:</strong>
              </p>
              <ul>
                <li>Consegna chiavi</li>
                <li>Verifica stato appartamento</li>
                <li>Restituzione deposito cauzionale (se non trattenuto)</li>
              </ul>
              <p>
                <strong>Check-out posticipato:</strong>
              </p>
              <ul>
                <li>Richiesta da inviare con almeno 3 giorni di anticipo</li>
                <li>Soggetto a disponibilità (arrivi successivi)</li>
                <li>Eventuale supplemento: €30-50 (fino alle 14:00)</li>
                <li>Oltre le 14:00: costo di una notte aggiuntiva</li>
              </ul>
              <p>
                <strong>Condizioni appartamento al check-out:</strong>
              </p>
              <ul>
                <li>Appartamento lasciato in condizioni dignitose</li>
                <li>Stoviglie lavate e riposte</li>
                <li>Rifiuti conferiti negli appositi contenitori (differenziata)</li>
                <li>Danni segnalati immediatamente</li>
              </ul>
              <p>
                <strong>Pulizie finali:</strong>
              </p>
              <ul>
                <li>Incluse nel prezzo</li>
                <li>Se appartamento lasciato in condizioni particolarmente precarie: addebito pulizie straordinarie (€50-150)</li>
              </ul>

              <h3>6.3 DOCUMENTI RICHIESTI</h3>
              <p>
                <strong>Al check-in è obbligatorio presentare:</strong>
              </p>
              <ul>
                <li>Documento d&apos;identità valido di TUTTI gli ospiti (compresi minori)</li>
                <li>Codice fiscale (per comunicazione alloggiati)</li>
              </ul>
              <p>
                <strong>Normativa:</strong> D.Lgs. 286/98 - Obbligo comunicazione presenze all&apos;Autorità di Pubblica Sicurezza
              </p>
              <p>
                <strong>Privacy:</strong> I dati sono trattati nel rispetto del GDPR (vedi Privacy Policy)
              </p>

              <h2>7. TASSA DI SOGGIORNO</h2>
              <p>
                <strong>Applicabilità:</strong> Come da normativa Comune di Isola di Capo Rizzuto<br />
                <strong>Importo:</strong> [Verificare con Comune - tipicamente €0.50-2.00 per persona/notte]<br />
                <strong>Esenzioni:</strong> Minori di 12 anni, residenti nel Comune<br />
                <strong>Pagamento:</strong> Contestuale al check-in, in contanti<br />
                <strong>Ricevuta:</strong> Rilasciata dalla Struttura per conto del Comune
              </p>

              <h2>8. NORME DI UTILIZZO APPARTAMENTI E PISCINA</h2>

              <h3>8.1 CAPIENZA MASSIMA</h3>
              <p>
                <strong>Numero ospiti:</strong>
              </p>
              <ul>
                <li>Indicato nella descrizione di ogni appartamento</li>
                <li>Vietato superare il numero massimo (motivi di sicurezza e assicurativi)</li>
                <li>Ospiti aggiuntivi non dichiarati: penale €50/persona/notte + allontanamento</li>
              </ul>
              <p>
                <strong>Visitatori esterni:</strong>
              </p>
              <ul>
                <li>Ammessi solo con preventiva autorizzazione scritta</li>
                <li>Orari diurni (10:00-20:00)</li>
                <li>Non possono utilizzare piscina o servizi</li>
                <li>Eventuale supplemento giornaliero</li>
              </ul>

              <h3>8.2 UTILIZZO PISCINA</h3>
              <p>
                <strong>Orari:</strong> 8:00 - 20:00 (silenzio 13:00-15:00)
              </p>
              <p>
                <strong>Regole:</strong>
              </p>
              <ul>
                <li>Doccia obbligatoria prima dell&apos;ingresso</li>
                <li>Vietato correre a bordo vasca</li>
                <li>Bambini sotto 12 anni: sorveglianza adulta obbligatoria</li>
                <li>Vietato cibo/bevande in vetro</li>
                <li>Lettini e ombrelloni: utilizzo condiviso rispettoso</li>
                <li>Musica a volume moderato</li>
                <li>Vietato spostare sdraio/arredi senza autorizzazione</li>
              </ul>
              <p>
                <strong>Sicurezza:</strong>
              </p>
              <ul>
                <li>Salvagente disponibile</li>
                <li>Uso piscina sotto propria responsabilità</li>
                <li>La Struttura non assume responsabilità per incidenti da comportamento imprudente</li>
              </ul>
              <p>
                <strong>Manutenzione:</strong> Possibili chiusure temporanee per manutenzione (preavviso quando possibile)
              </p>

              <h3>8.3 ORARI DI SILENZIO</h3>
              <p>
                <strong>Orari silenzio obbligatori:</strong>
              </p>
              <ul>
                <li>13:00 - 15:00 (riposo pomeridiano)</li>
                <li>23:00 - 8:00 (riposo notturno)</li>
              </ul>
              <p>
                <strong>Durante questi orari:</strong>
              </p>
              <ul>
                <li>Volume TV/musica al minimo</li>
                <li>Nessuna attività rumorosa</li>
                <li>Rispetto ospiti altri appartamenti</li>
              </ul>
              <p>
                <strong>Violazioni:</strong> Richiami formali → Allontanamento senza rimborso (recidiva)
              </p>

              <h3>8.4 ANIMALI DOMESTICI</h3>
              <p>
                <strong>Policy:</strong> [Da definire in base a preferenze]
              </p>
              <p>
                <strong>Opzione A - AMMESSI:</strong>
              </p>
              <ul>
                <li>Animali di piccola taglia: Ammessi con supplemento €10/giorno</li>
                <li>Comunicazione obbligatoria in fase di prenotazione</li>
                <li>Libretto sanitario in regola</li>
                <li>Responsabilità danni: a carico ospite</li>
                <li>Divieto accesso piscina</li>
                <li>Pulizie accurata obbligatoria</li>
              </ul>
              <p>
                <strong>Opzione B - NON AMMESSI:</strong>
              </p>
              <ul>
                <li>Vietato introdurre animali domestici</li>
                <li>Violazione: penale €100 + allontanamento</li>
              </ul>
              <p>
                <em>Specificare la policy scelta nella conferma di prenotazione.</em>
              </p>

              <h3>8.5 FUMO</h3>
              <p>
                <strong>Divieto assoluto di fumare</strong> all&apos;interno degli appartamenti.
              </p>
              <p>
                <strong>Consentito:</strong>
              </p>
              <ul>
                <li>Terrazzi e balconi privati</li>
                <li>Aree esterne comuni (usare posacenere)</li>
              </ul>
              <p>
                <strong>Violazione:</strong> Penale €150 + costo pulizie straordinarie (sanificazione)
              </p>

              <h3>8.6 FESTE ED EVENTI</h3>
              <p>
                <strong>Vietato:</strong>
              </p>
              <ul>
                <li>Organizzare feste o eventi senza autorizzazione</li>
                <li>Raduni con persone esterne</li>
                <li>Utilizzo commerciale dell&apos;appartamento</li>
              </ul>
              <p>
                <strong>Eccezioni:</strong> Eventi privati piccoli (max 10 persone totali) previa autorizzazione scritta e supplemento
              </p>
              <p>
                <strong>Violazione:</strong> Allontanamento immediato senza rimborso
              </p>

              <h2>9. RESPONSABILITÀ E DANNI</h2>

              <h3>9.1 RESPONSABILITÀ DELL&apos;OSPITE</h3>
              <p>
                L&apos;Ospite è responsabile per:
              </p>
              <ul>
                <li>Danni causati a mobili, arredi, elettrodomestici, impianti</li>
                <li>Perdita o danneggiamento chiavi/telecomandi/attrezzature</li>
                <li>Consumi eccessivi di utenze (se anomali)</li>
                <li>Comportamenti che arrecano disturbo ad altri ospiti</li>
                <li>Violazione delle norme di utilizzo</li>
              </ul>
              <p>
                <strong>Obbligo di segnalazione:</strong> Qualsiasi danno accidentale va comunicato immediatamente alla Struttura.
              </p>
              <p>
                <strong>Valutazione danni:</strong>
              </p>
              <ul>
                <li>Check-out: verifica congiunta stato appartamento</li>
                <li>Danni rilevati: documentazione fotografica</li>
                <li>Trattenuta da deposito cauzionale</li>
                <li>Se superiore al deposito: richiesta pagamento integrativo</li>
              </ul>

              <h3>9.2 RESPONSABILITÀ DELLA STRUTTURA</h3>
              <p>
                La Struttura è responsabile per:
              </p>
              <ul>
                <li>Fornitura appartamento conforme a descrizione</li>
                <li>Manutenzione ordinaria e pulizia</li>
                <li>Funzionamento impianti e servizi essenziali</li>
              </ul>
              <p>
                <strong>Limitazioni responsabilità:</strong>
              </p>
              <p>
                La Struttura NON risponde per:
              </p>
              <ul>
                <li>Furto o smarrimento oggetti personali ospiti</li>
                <li>Danni a veicoli parcheggiati (area non custodita)</li>
                <li>Interruzioni temporanee servizi per cause di forza maggiore (black-out, guasti rete idrica)</li>
                <li>Infortuni derivanti da uso improprio attrezzature/piscina</li>
              </ul>
              <p>
                <strong>Assicurazione:</strong> Gli ospiti sono invitati a stipulare polizza viaggio/bagagli.
              </p>

              <h3>9.3 RECLAMI E SEGNALAZIONI</h3>
              <p>
                <strong>Problemi durante il soggiorno:</strong>
              </p>
              <ul>
                <li>Comunicare IMMEDIATAMENTE alla Struttura (telefono/WhatsApp)</li>
                <li>La Struttura interviene tempestivamente per risolvere</li>
                <li>Segnalazioni fatte DOPO il check-out: non considerate</li>
              </ul>
              <p>
                <strong>Procedura:</strong>
              </p>
              <ol>
                <li>Segnalazione immediata (scritta: email/WhatsApp)</li>
                <li>Intervento Struttura entro 24h (se possibile prima)</li>
                <li>Documentazione problema (foto)</li>
                <li>Soluzione concordata</li>
              </ol>
              <p>
                <strong>Compensazioni:</strong> Valutate caso per caso solo se:
              </p>
              <ul>
                <li>Problema segnalato tempestivamente</li>
                <li>Problema non risolto dalla Struttura</li>
                <li>Impatto significativo sul soggiorno</li>
              </ul>

              <h2>10. FORZA MAGGIORE</h2>
              <p>
                In caso di eventi di forza maggiore che impediscono l&apos;esecuzione del contratto:
              </p>
              <ul>
                <li>Calamità naturali (terremoti, alluvioni)</li>
                <li>Emergenze sanitarie (pandemie)</li>
                <li>Conflitti, disordini, terrorismo</li>
                <li>Provvedimenti autorità pubbliche</li>
              </ul>
              <p>
                <strong>Conseguenze:</strong>
              </p>
              <ul>
                <li>Cancellazione senza penali per entrambe le parti</li>
                <li>Rimborso acconto versato</li>
                <li>Nessun ulteriore risarcimento dovuto</li>
              </ul>

              <h2>11. PRIVACY E TRATTAMENTO DATI</h2>
              <p>
                I dati personali degli ospiti sono trattati nel rispetto del GDPR (Regolamento UE 2016/679).
              </p>
              <p>
                <strong>Finalità:</strong>
              </p>
              <ul>
                <li>Gestione prenotazione</li>
                <li>Adempimenti fiscali e di legge (comunicazione alloggiati)</li>
                <li>Comunicazioni relative al soggiorno</li>
              </ul>
              <p>
                <strong>Informativa completa:</strong> <a href="/privacy-policy">Privacy Policy</a>
              </p>
              <p>
                <strong>Diritti:</strong> Accesso, rettifica, cancellazione, limitazione - francesconigro.kr@gmail.com
              </p>

              <h2>12. COMUNICAZIONI</h2>
              <p>
                <strong>Canali ufficiali:</strong>
              </p>
              <ul>
                <li>Email: villaolimpiacaporizzuto@gmail.com</li>
                <li>Telefono/WhatsApp: +39 333 577 3390</li>
              </ul>
              <p>
                <strong>Le comunicazioni si intendono ricevute:</strong>
              </p>
              <ul>
                <li>Email: entro 24 ore dall&apos;invio</li>
                <li>WhatsApp/SMS: immediatamente</li>
                <li>Telefono: al momento della chiamata</li>
              </ul>
              <p>
                <strong>Lingua:</strong> Italiano (EN disponibile)
              </p>

              <h2>13. LEGGE APPLICABILE E FORO COMPETENTE</h2>
              <p>
                <strong>Legge applicabile:</strong> Legge italiana
              </p>
              <p>
                <strong>Foro competente:</strong> In caso di controversie:
              </p>
              <ul>
                <li>Consumatori: Foro di residenza del consumatore (Codice del Consumo D.Lgs. 206/2005)</li>
                <li>Professionisti/Imprese: Foro di Crotone</li>
              </ul>
              <p>
                <strong>Risoluzione alternativa controversie:</strong>
              </p>
              <p>
                Prima di adire il giudice, le parti si impegnano a tentare una conciliazione bonaria.
              </p>
              <p>
                <strong>Mediazione:</strong> Possibile ricorso a organismo di mediazione riconosciuto.
              </p>

              <h2>14. DISPOSIZIONI FINALI</h2>

              <h3>14.1 VALIDITÀ</h3>
              <p>
                Se una o più clausole dei presenti Termini fossero invalide o inefficaci, le restanti clausole rimangono valide ed efficaci.
              </p>

              <h3>14.2 MODIFICHE</h3>
              <p>
                Villa Olimpia si riserva il diritto di modificare i presenti Termini in qualsiasi momento.
              </p>
              <p>
                <strong>Applicabilità:</strong> Le modifiche si applicano alle prenotazioni effettuate DOPO la pubblicazione della nuova versione.
              </p>
              <p>
                <strong>Versione applicabile:</strong> Quella vigente al momento della conferma prenotazione.
              </p>

              <h3>14.3 ACCETTAZIONE</h3>
              <p>
                <strong>Effettuando la prenotazione, l&apos;Ospite dichiara di:</strong>
              </p>
              <ul>
                <li>Aver letto e compreso i presenti Termini e Condizioni</li>
                <li>Accettarli integralmente senza riserve</li>
                <li>Impegnarsi a rispettarli durante il soggiorno</li>
              </ul>
              <p>
                <strong>Conferma accettazione:</strong>
              </p>
              <ul>
                <li>Firma digitale/checkbox (prenotazione online)</li>
                <li>Email di conferma accettazione</li>
                <li>Firma al check-in</li>
              </ul>

              <h2>15. CONTATTI</h2>
              <p>
                Per qualsiasi informazione o chiarimento:
              </p>
              <p>
                <strong>Villa Olimpia</strong><br />
                Francesco Nigro<br />
                Capo Piccolo, 88841 Isola di Capo Rizzuto (KR), Italia
              </p>
              <p>
                <strong>Email:</strong> villaolimpiacaporizzuto@gmail.com<br />
                <strong>Telefono/WhatsApp:</strong> +39 333 577 3390<br />
                <strong>CIN:</strong> IT101013C22FCE8T7Y
              </p>
              <p>
                <strong>Orari assistenza:</strong><br />
                Lun-Dom: 9:00-13:00 / 15:00-19:00<br />
                Emergenze ospiti in loco: H24
              </p>

              <p>
                <strong>Data ultima revisione:</strong> 7 Dicembre 2024<br />
                <strong>Versione:</strong> 1.0
              </p>
              <p>
                © 2024 Villa Olimpia - Tutti i diritti riservati
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

