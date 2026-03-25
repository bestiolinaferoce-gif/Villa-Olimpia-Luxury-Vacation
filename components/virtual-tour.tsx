export default function VirtualTour() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Tour Virtuale 360°</h2>
        <p className="text-xl mb-8 text-white/80">
          Esplora Villa Olimpia come se fossi già qui
        </p>
        <div className="aspect-video max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
            <div className="max-w-lg px-6 text-center">
              <div className="mb-4 text-6xl" aria-hidden>
                🏊
              </div>
              <p className="text-2xl font-bold">Tour virtuale</p>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                Stiamo preparando un percorso immersivo della villa e degli spazi esterni. Per vedere
                foto e video aggiornati visita la{" "}
                <a href="/gallery" className="font-semibold text-amber-300 underline-offset-4 hover:underline">
                  galleria
                </a>{" "}
                o scrivici per una visita in videochiamata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}












