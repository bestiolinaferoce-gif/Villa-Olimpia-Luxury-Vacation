import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarRange, ShieldCheck, Waves, Users } from "lucide-react"
import HomePageClient from "@/components/pages/home-page-client"

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/villa/gallery/Esterni_Piscina_Notte_01.jpg"
            alt="Villa Olimpia con piscina a Capo Rizzuto"
            fill
            priority
            quality={72}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,33,0.28)_0%,rgba(5,18,33,0.48)_45%,rgba(5,18,33,0.76)_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <ShieldCheck className="h-4 w-4" />
              Area Marina Protetta di Capo Rizzuto
            </div>

            <h1 className="font-playfair text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              Villa Olimpia
            </h1>
            <p className="mt-4 text-xl font-semibold text-white/95 md:text-3xl">
              9 appartamenti con piscina a 100 metri dalla Spiaggia dei Gigli
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-xl">
              Prenotazione diretta, risposta rapida e soggiorni su misura per coppie, famiglie e piccoli gruppi tra
              mare, relax e Calabria autentica.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contatti?source=hero_server_cta#prenota"
                className="inline-flex items-center justify-center rounded-full bg-[#f7c53b] px-7 py-4 text-base font-bold text-slate-900 shadow-xl transition hover:brightness-105"
              >
                Verifica disponibilita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/393335773390?text=Richiesta%20disponibilita%20Villa%20Olimpia%20-%20fonte%20sito%20ufficiale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                WhatsApp diretto
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">9</div>
                <div className="mt-1 text-sm text-white/85">Appartamenti nella stessa struttura</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                  <Waves className="h-5 w-5" />
                  100 m
                </div>
                <div className="mt-1 text-sm text-white/85">Dalla Spiaggia dei Gigli</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                  <Users className="h-5 w-5" />
                  Diretto
                </div>
                <div className="mt-1 text-sm text-white/85">Preventivo personalizzato senza portali</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link
              href="/contatti?source=promo_giugno_home#prenota"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-gradient-to-r from-amber-50 via-white to-amber-100 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow-md md:text-base"
            >
              <CalendarRange className="h-4 w-4 text-amber-700" />
              Promo giugno: 1 settimana a 750,00 EUR
              <ArrowRight className="h-4 w-4 text-amber-700" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Guide utili prima della prenotazione
                </p>
                <h2 className="mt-3 font-playfair text-3xl font-bold text-slate-900 md:text-4xl">
                  Scopri meglio Capo Rizzuto prima di prenotare
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Se vuoi capire com&apos;egrave; davvero la zona, qui trovi le pagine piu utili su spiagge, dintorni,
                  posizione della struttura e cose da fare durante il soggiorno.
                </p>
              </div>

              <Link
                href="/contatti?source=home_internal_hub#prenota"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Richiedi disponibilita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              <Link
                href="/location"
                className="rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-sky-300 hover:bg-sky-50/50"
              >
                <p className="text-sm font-semibold text-slate-900">Dove si trova Villa Olimpia</p>
                <p className="mt-2 text-sm text-slate-600">Distanze reali, mare raggiungibile a piedi e logistica.</p>
              </Link>
              <Link
                href="/spiagge-capo-rizzuto"
                className="rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-sky-300 hover:bg-sky-50/50"
              >
                <p className="text-sm font-semibold text-slate-900">Le spiagge piu belle</p>
                <p className="mt-2 text-sm text-slate-600">Spiaggia dei Gigli, Capopiccolo e altre calette vicine.</p>
              </Link>
              <Link
                href="/le-castella"
                className="rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-sky-300 hover:bg-sky-50/50"
              >
                <p className="text-sm font-semibold text-slate-900">Le Castella</p>
                <p className="mt-2 text-sm text-slate-600">Castello Aragonese, passeggiata serale e gite in zona.</p>
              </Link>
              <Link
                href="/cosa-fare-capo-rizzuto"
                className="rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-sky-300 hover:bg-sky-50/50"
              >
                <p className="text-sm font-semibold text-slate-900">Cosa fare nei dintorni</p>
                <p className="mt-2 text-sm text-slate-600">Borghi, natura, mare e idee concrete per il soggiorno.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomePageClient skipAboveTheFold />
    </>
  )
}
