export default function VirtualTour() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Tour Virtuale 360°</h2>
        <p className="text-xl mb-8 text-white/80">
          Esplora Villa Olimpia come se fossi già qui
        </p>
        <div className="aspect-video max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
          {/* Placeholder - sostituisci con vero tour 360° */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏊</div>
              <p className="text-2xl font-bold">Tour 360° Coming Soon</p>
              <p className="text-white/60">Momento360 integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}











