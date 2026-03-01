import { BASE_URL } from "@/lib/metadata"

export const metadata = {
  title: "Privacy Policy | Villa Olimpia",
  description: "Informativa Privacy GDPR di Villa Olimpia.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Informativa Privacy GDPR di Villa Olimpia
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

              <h2>1. TITOLARE DEL TRATTAMENTO</h2>
              <p>
                <strong>Villa Olimpia</strong><br />
                Titolare: Francesco Nigro<br />
                Indirizzo: Capo Piccolo, 88841 Isola di Capo Rizzuto (KR), Italia<br />
                Email: villaolimpiacaporizzuto@gmail.com<br />
                Telefono: +39 333 577 3390<br />
                CIN: IT101013C22FCE8T7Y
              </p>

              <h2>2. TIPOLOGIE DI DATI RACCOLTI</h2>
              <p>
                Villa Olimpia raccoglie e tratta le seguenti categorie di dati personali:
              </p>

              <h3>2.1 DATI FORNITI VOLONTARIAMENTE DALL&apos;UTENTE:</h3>
              <p>
                <strong>Dati di contatto e prenotazione:</strong>
              </p>
              <ul>
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Indirizzo di residenza</li>
                <li>Data di nascita</li>
                <li>Numero di ospiti</li>
                <li>Date di soggiorno</li>
                <li>Preferenze di alloggio</li>
                <li>Richieste speciali</li>
              </ul>
              <p>
                <strong>Dati di pagamento:</strong>
              </p>
              <ul>
                <li>Informazioni di fatturazione</li>
                <li>Dati necessari per l&apos;elaborazione del pagamento (tramite gateway di pagamento sicuri - i dati della carta di credito non vengono memorizzati da Villa Olimpia)</li>
              </ul>
              <p>
                <strong>Comunicazioni:</strong>
              </p>
              <ul>
                <li>Contenuto della corrispondenza email</li>
                <li>Messaggi tramite form di contatto</li>
                <li>Conversazioni WhatsApp Business</li>
              </ul>

              <h3>2.2 DATI RACCOLTI AUTOMATICAMENTE:</h3>
              <p>
                <strong>Dati di navigazione:</strong>
              </p>
              <ul>
                <li>Indirizzo IP</li>
                <li>Tipo di browser e dispositivo</li>
                <li>Sistema operativo</li>
                <li>Pagine visitate sul sito</li>
                <li>Tempo di permanenza</li>
                <li>Sorgente di traffico (es. Google, social media)</li>
                <li>Cookie e tecnologie simili (vedi Cookie Policy)</li>
              </ul>
              <p>
                <strong>Dati analitici (tramite Google Analytics):</strong>
              </p>
              <ul>
                <li>Comportamento di navigazione anonimizzato</li>
                <li>Dati demografici aggregati</li>
                <li>Interessi (in forma anonima)</li>
              </ul>

              <h2>3. FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO</h2>
              <p>
                Villa Olimpia tratta i dati personali per le seguenti finalità:
              </p>

              <h3>3.1 FINALITÀ CONTRATTUALI (Art. 6.1.b GDPR):</h3>
              <p>
                <strong>Gestione prenotazioni:</strong>
              </p>
              <ul>
                <li>Elaborazione e conferma prenotazioni</li>
                <li>Gestione check-in e check-out</li>
                <li>Comunicazioni pre-soggiorno (istruzioni arrivo, informazioni utili)</li>
                <li>Comunicazioni durante il soggiorno</li>
                <li>Gestione richieste e reclami</li>
              </ul>
              <p>
                <strong>Adempimenti amministrativi:</strong>
              </p>
              <ul>
                <li>Emissione documenti fiscali</li>
                <li>Gestione pagamenti e rimborsi</li>
                <li>Adempimenti contabili</li>
              </ul>
              <p>
                <strong>Base giuridica:</strong> Esecuzione del contratto di locazione turistica
              </p>

              <h3>3.2 FINALITÀ LEGALI (Art. 6.1.c GDPR):</h3>
              <p>
                <strong>Obblighi di legge:</strong>
              </p>
              <ul>
                <li>Comunicazione dati ospiti alle autorità competenti (Questura - Alloggiati Web)</li>
                <li>Adempimenti fiscali e tributari</li>
                <li>Gestione tassa di soggiorno</li>
                <li>Conservazione documenti contabili</li>
              </ul>
              <p>
                <strong>Base giuridica:</strong> Adempimento di obblighi di legge
              </p>

              <h3>3.3 FINALITÀ LEGITTIME (Art. 6.1.f GDPR):</h3>
              <p>
                <strong>Miglioramento servizi:</strong>
              </p>
              <ul>
                <li>Analisi della customer experience</li>
                <li>Statistiche di occupazione</li>
                <li>Ottimizzazione del sito web</li>
              </ul>
              <p>
                <strong>Sicurezza:</strong>
              </p>
              <ul>
                <li>Prevenzione frodi</li>
                <li>Protezione dei sistemi informatici</li>
                <li>Gestione controversie</li>
              </ul>
              <p>
                <strong>Base giuridica:</strong> Legittimo interesse del Titolare
              </p>

              <h3>3.4 FINALITÀ CON CONSENSO (Art. 6.1.a GDPR):</h3>
              <p>
                <strong>Marketing diretto</strong> (solo con consenso esplicito):
              </p>
              <ul>
                <li>Invio newsletter con offerte speciali</li>
                <li>Comunicazioni promozionali via email</li>
                <li>Sondaggi di soddisfazione</li>
                <li>Richiesta recensioni</li>
              </ul>
              <p>
                <strong>Profilazione</strong> (solo con consenso esplicito):
              </p>
              <ul>
                <li>Invio di offerte personalizzate in base alle preferenze</li>
                <li>Analisi comportamentale per marketing mirato</li>
              </ul>
              <p>
                <strong>Base giuridica:</strong> Consenso esplicito dell&apos;interessato (revocabile in qualsiasi momento)
              </p>

              <h2>4. MODALITÀ DI TRATTAMENTO</h2>
              <p>
                I dati personali sono trattati con strumenti automatizzati e manuali, con logiche strettamente correlate alle finalità indicate, e comunque in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p>
                <strong>Misure di sicurezza adottate:</strong>
              </p>
              <ul>
                <li>Crittografia delle comunicazioni (SSL/TLS)</li>
                <li>Accesso ai dati limitato al personale autorizzato</li>
                <li>Password protette e aggiornate regolarmente</li>
                <li>Backup periodici dei dati</li>
                <li>Protezione contro accessi non autorizzati</li>
                <li>Formazione del personale sulla privacy</li>
              </ul>

              <h2>5. PERIODO DI CONSERVAZIONE</h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario agli scopi per cui sono stati raccolti:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Tipologia Dati</th>
                      <th>Periodo di Conservazione</th>
                      <th>Motivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Dati prenotazione</strong></td>
                      <td>10 anni dalla data soggiorno</td>
                      <td>Obblighi fiscali e contabili</td>
                    </tr>
                    <tr>
                      <td><strong>Dati comunicazioni Questura</strong></td>
                      <td>Secondo normativa vigente</td>
                      <td>Obbligo legale (D.Lgs 286/98)</td>
                    </tr>
                    <tr>
                      <td><strong>Dati marketing (consenso)</strong></td>
                      <td>Fino a revoca consenso o 2 anni inattività</td>
                      <td>Consenso revocabile</td>
                    </tr>
                    <tr>
                      <td><strong>Dati navigazione (cookie)</strong></td>
                      <td>Secondo Cookie Policy</td>
                      <td>Variabile per tipo cookie</td>
                    </tr>
                    <tr>
                      <td><strong>Backup sicurezza</strong></td>
                      <td>12 mesi</td>
                      <td>Protezione dati e disaster recovery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Decorsi i termini previsti, i dati saranno cancellati o resi anonimi in modo irreversibile.
              </p>

              <h2>6. DESTINATARI DEI DATI</h2>
              <p>
                I dati personali possono essere comunicati a:
              </p>

              <h3>6.1 SOGGETTI OBBLIGATORI PER LEGGE:</h3>
              <ul>
                <li><strong>Questura / Forze dell&apos;Ordine</strong> - Comunicazione alloggiati (obbligo legale)</li>
                <li><strong>Agenzia delle Entrate</strong> - Adempimenti fiscali</li>
                <li><strong>Comune di Isola di Capo Rizzuto</strong> - Tassa di soggiorno</li>
              </ul>

              <h3>6.2 FORNITORI DI SERVIZI (Responsabili del trattamento):</h3>
              <ul>
                <li><strong>Hosting e server:</strong> Netlify (USA - Privacy Shield compliant)</li>
                <li><strong>Email:</strong> Google Workspace / Gmail (USA - Privacy Shield compliant)</li>
                <li><strong>Pagamenti:</strong> Stripe / PayPal (gateway di pagamento certificati PCI-DSS)</li>
                <li><strong>Analytics:</strong> Google Analytics (USA - IP anonimizzato)</li>
                <li><strong>Comunicazioni:</strong> WhatsApp Business (Meta - Ireland)</li>
                <li><strong>Email marketing:</strong> Mailchimp (USA - Privacy Shield compliant) [se utilizzato]</li>
              </ul>

              <h3>6.3 PARTNER COMMERCIALI (solo con consenso):</h3>
              <ul>
                <li><strong>OTA (Online Travel Agencies):</strong> Booking.com, Airbnb, Expedia [se applicabile]</li>
                <li><strong>Partner locali:</strong> Fornitori di servizi turistici convenzionati (solo su richiesta ospite)</li>
              </ul>

              <h3>6.4 PROFESSIONISTI:</h3>
              <ul>
                <li>Commercialista</li>
                <li>Consulenti legali (in caso di controversie)</li>
              </ul>
              <p>
                Tutti i destinatari sono tenuti a trattare i dati nel rispetto della normativa privacy e secondo istruzioni specifiche del Titolare.
              </p>

              <h2>7. TRASFERIMENTO DATI EXTRA-UE</h2>
              <p>
                Alcuni fornitori di servizi (es. Google, Netlify) hanno sede negli Stati Uniti o in altri Paesi extra-UE.
              </p>
              <p>
                <strong>Garanzie adottate:</strong>
              </p>
              <ul>
                <li>Clausole contrattuali standard approvate dalla Commissione Europea</li>
                <li>Privacy Shield (dove applicabile)</li>
                <li>Certificazioni di adeguatezza</li>
                <li>Misure tecniche e organizzative supplementari</li>
              </ul>
              <p>
                L&apos;elenco aggiornato dei fornitori extra-UE è disponibile su richiesta.
              </p>

              <h2>8. DIRITTI DELL&apos;INTERESSATO</h2>
              <p>
                Ai sensi degli articoli 15-22 del GDPR, l&apos;utente ha diritto di:
              </p>

              <h3>8.1 DIRITTO DI ACCESSO (Art. 15):</h3>
              <p>
                Ottenere conferma che sia in corso un trattamento di dati personali e, in tal caso, accesso ai dati e alle informazioni sul trattamento.
              </p>

              <h3>8.2 DIRITTO DI RETTIFICA (Art. 16):</h3>
              <p>
                Ottenere la rettifica dei dati personali inesatti o l&apos;integrazione di quelli incompleti.
              </p>

              <h3>8.3 DIRITTO DI CANCELLAZIONE / &quot;Diritto all&apos;oblio&quot; (Art. 17):</h3>
              <p>
                Ottenere la cancellazione dei dati personali, salvo che ricorrano le eccezioni previste dalla legge (es. obblighi di conservazione fiscale).
              </p>

              <h3>8.4 DIRITTO DI LIMITAZIONE (Art. 18):</h3>
              <p>
                Ottenere la limitazione del trattamento quando ricorre una delle ipotesi previste dalla normativa.
              </p>

              <h3>8.5 DIRITTO DI PORTABILITÀ (Art. 20):</h3>
              <p>
                Ricevere i dati personali in formato strutturato, di uso comune e leggibile da dispositivo automatico, e trasmetterli ad altro titolare.
              </p>

              <h3>8.6 DIRITTO DI OPPOSIZIONE (Art. 21):</h3>
              <p>
                Opporsi al trattamento dei dati personali per motivi connessi alla propria situazione particolare.
              </p>

              <h3>8.7 DIRITTO DI REVOCA DEL CONSENSO (Art. 7):</h3>
              <p>
                Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.
              </p>

              <h3>8.8 DIRITTO DI RECLAMO:</h3>
              <p>
                Proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).
              </p>

              <h2>9. COME ESERCITARE I DIRITTI</h2>
              <p>
                Per esercitare i diritti sopra elencati, l&apos;interessato può contattare il Titolare:
              </p>
              <p>
                <strong>Email GDPR:</strong> francesconigro.kr@gmail.com<br />
                <strong>Email generale:</strong> villaolimpiacaporizzuto@gmail.com<br />
                <strong>Telefono:</strong> +39 333 577 3390<br />
                <strong>Posta:</strong> Villa Olimpia, Capo Piccolo, 88841 Isola di Capo Rizzuto (KR)
              </p>
              <p>
                <strong>Tempi di risposta:</strong> 30 giorni dalla richiesta (prorogabili di ulteriori 60 giorni in casi complessi, con motivazione).
              </p>
              <p>
                <strong>Modalità richiesta:</strong>
              </p>
              <ul>
                <li>Email con oggetto: &quot;GDPR - Richiesta esercizio diritti&quot;</li>
                <li>Specificare il diritto che si intende esercitare</li>
                <li>Allegare documento di identità per verifica identità</li>
              </ul>

              <h2>10. MINORI</h2>
              <p>
                Il sito web di Villa Olimpia non è destinato a minori di 16 anni. Non raccogliamo consapevolmente dati di minori senza il consenso dei genitori o tutori.
              </p>
              <p>
                Per le prenotazioni che includono minori, i dati sono forniti dai genitori o tutori legali che ne assumono la responsabilità.
              </p>

              <h2>11. MODIFICHE ALL&apos;INFORMATIVA</h2>
              <p>
                La presente informativa può essere modificata nel tempo per adeguarla a evoluzioni normative o organizzative.
              </p>
              <p>
                Gli utenti saranno informati delle modifiche tramite:
              </p>
              <ul>
                <li>Pubblicazione della versione aggiornata sul sito web</li>
                <li>Indicazione della data di ultimo aggiornamento</li>
                <li>Notifica via email (per modifiche sostanziali)</li>
              </ul>
              <p>
                Si consiglia di consultare periodicamente questa pagina.
              </p>

              <h2>12. COOKIE E TECNOLOGIE DI TRACCIAMENTO</h2>
              <p>
                Per informazioni dettagliate sull&apos;uso di cookie e tecnologie simili, consultare la <a href="/cookie-policy">Cookie Policy</a>.
              </p>

              <h2>13. LINK A SITI TERZI</h2>
              <p>
                Il sito web di Villa Olimpia può contenere link a siti web di terze parti (es. partner, fornitori di servizi, attrazioni turistiche).
              </p>
              <p>
                Villa Olimpia non è responsabile delle pratiche di privacy di tali siti. Si consiglia di leggere le informative privacy dei siti terzi prima di fornire dati personali.
              </p>

              <h2>14. CONTATTI</h2>
              <p>
                Per qualsiasi domanda o chiarimento sulla presente informativa o sul trattamento dei dati personali:
              </p>
              <p>
                <strong>Villa Olimpia</strong><br />
                Francesco Nigro<br />
                Capo Piccolo, 88841 Isola di Capo Rizzuto (KR)<br />
                Email: villaolimpiacaporizzuto@gmail.com<br />
                Email GDPR: francesconigro.kr@gmail.com<br />
                Telefono: +39 333 577 3390<br />
                CIN: IT101013C22FCE8T7Y
              </p>

              <p>
                <strong>Data ultima revisione:</strong> 7 Dicembre 2024
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

