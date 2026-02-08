import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Termini e Condizioni - Villa Olimpia",
  description: "Termini e condizioni di utilizzo e prenotazione di Villa Olimpia.",
}

export default function TerminiPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-br from-ocean/10 to-primary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Termini e Condizioni
          </h1>
          <p className="text-xl text-muted-foreground">
            Ultimo aggiornamento: Dicembre 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Accettazione dei Termini</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Utilizzando il sito web di Villa Olimpia e prenotando i nostri
                  appartamenti, accetti questi termini e condizioni. Se non sei
                  d&apos;accordo, ti preghiamo di non utilizzare i nostri servizi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Prenotazioni</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>2.1 Conferma Prenotazione</strong>
                </p>
                <p>
                  La prenotazione è confermata solo dopo il pagamento della caparra
                  o dell&apos;importo totale, a seconda della politica di
                  prenotazione selezionata.
                </p>
                <p>
                  <strong>2.2 Modifiche</strong>
                </p>
                <p>
                  Le modifiche alle prenotazioni sono soggette a disponibilità e
                  possono comportare costi aggiuntivi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cancellazioni e Rimborsi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>3.1 Cancellazione da parte dell&apos;ospite</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Più di 30 giorni prima:</strong> Rimborso completo
                    meno costi amministrativi (10%)
                  </li>
                  <li>
                    <strong>15-30 giorni prima:</strong> Rimborso del 50%
                  </li>
                  <li>
                    <strong>Meno di 15 giorni prima:</strong> Nessun rimborso
                  </li>
                </ul>
                <p>
                  <strong>3.2 Cancellazione da parte nostra</strong>
                </p>
                <p>
                  In caso di cancellazione da parte nostra per cause di forza
                  maggiore, offriremo un rimborso completo o la possibilità di
                  riprogrammare il soggiorno.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Check-in e Check-out</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Check-in:</strong> Dalle 15:00 alle 20:00. Check-in
                    tardivi devono essere concordati in anticipo.
                  </li>
                  <li>
                    <strong>Check-out:</strong> Entro le 11:00. Check-out tardivi
                    possono essere disponibili su richiesta e soggetti a
                    disponibilità.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Responsabilità dell&apos;Ospite</CardTitle>
              </CardHeader>
              <CardContent>
                <p>L&apos;ospite è responsabile di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mantenere l&apos;appartamento in buone condizioni</li>
                  <li>
                    Segnalare immediatamente eventuali danni o problemi
                  </li>
                  <li>Rispettare le regole della struttura</li>
                  <li>
                    Pagare eventuali danni causati durante il soggiorno
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitazione di Responsabilità</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Villa Olimpia non è responsabile per danni, perdite o lesioni
                  che si verificano durante il soggiorno, salvo nei casi di
                  negligenza grave o dolo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Legge Applicabile</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Questi termini sono governati dalla legge italiana. Qualsiasi
                  controversia sarà risolta dai tribunali competenti di Vibo
                  Valentia, Italia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contatti</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Per domande su questi termini, contattaci:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:villaolimpiacaporizzuto@gmail.com"
                    className="text-primary hover:underline"
                  >
                    villaolimpiacaporizzuto@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Telefono:</strong>{" "}
                  <a
                    href="tel:+393491234567"
                    className="text-primary hover:underline"
                  >
                    +39 349 123 4567
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


