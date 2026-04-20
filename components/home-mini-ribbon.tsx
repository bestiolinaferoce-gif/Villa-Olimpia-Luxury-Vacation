"use client"

import Image from "next/image"
import Link from "next/link"

type RibbonItem = {
  label: string
  src: string
  alt: string
  href: string
}

const ribbonItems: RibbonItem[] = [
  {
    label: "Piscina sunset",
    src: "/images/amenities/Piscina Sunset Villa Olimpia.jpg",
    alt: "Piscina al tramonto di Villa Olimpia",
    href: "/appartamenti",
  },
  {
    label: "Piscina notte",
    src: "/images/villa/gallery/Esterni_Piscina_Notte_01.jpg",
    alt: "Piscina notturna a Villa Olimpia",
    href: "/appartamenti",
  },
  {
    label: "Piscina giorno",
    src: "/images/villa/gallery/Esterni_Piscina_Diurna_01.jpg",
    alt: "Piscina diurna di Villa Olimpia",
    href: "/appartamenti",
  },
  {
    label: "Facciata giorno",
    src: "/images/villa/gallery/Esterni_Facciata_Giorno_01.jpg",
    alt: "Facciata di Villa Olimpia",
    href: "/appartamenti",
  },
  {
    label: "Gazebo",
    src: "/images/villa/gallery/Esterni_Gazebo_01.jpg",
    alt: "Gazebo esterno Villa Olimpia",
    href: "/appartamenti",
  },
  {
    label: "Giardino overview",
    src: "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
    alt: "Panoramica del giardino Villa Olimpia",
    href: "/appartamenti",
  },
  {
    label: "Capopiccolo",
    src: "/images/territory/spiaggia-capopiccolo-panorama.jpg",
    alt: "Panorama spiaggia di Capopiccolo",
    href: "/spiagge-capo-rizzuto",
  },
  {
    label: "Spiaggia Grande",
    src: "/images/territory/spiaggia-grande-capo-rizzuto-01.jpg",
    alt: "Spiaggia Grande lungo la costa ionica di Capo Rizzuto",
    href: "/spiagge-capo-rizzuto",
  },
  {
    label: "Area Marina Protetta",
    src: "/images/territory/area-marina-protetta-capo-rizzuto.jpg",
    alt: "Area Marina Protetta di Capo Rizzuto",
    href: "/area-marina-protetta",
  },
  {
    label: "Tramonto Le Castella",
    src: "/images/territory/tramonto-castello-aragonese-le-castella.jpg",
    alt: "Tramonto sul Castello Aragonese di Le Castella",
    href: "/le-castella",
  },
  {
    label: "Santa Severina",
    src: "/images/territory/santa-severina-panorama.jpg",
    alt: "Borgo di Santa Severina",
    href: "/territorio",
  },
  {
    label: "Valli Cupe",
    src: "/images/territory/valli-cupe-canyon.jpg",
    alt: "Natura e canyon nelle Valli Cupe",
    href: "/territorio",
  },
]


export function HomeMiniRibbon() {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-background to-primary/5 cv-auto">
      <div className="container mx-auto px-4">
        <div className="mb-5 md:mb-6 text-center">
          <p className="text-sm md:text-base text-muted-foreground font-medium">Mare, piscina, borghi e natura</p>
          <h2 className="text-xl md:text-2xl font-playfair font-bold text-foreground">Villa Olimpia e il suo territorio</h2>
        </div>

        <div className="-mx-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          <div className="flex gap-3 md:gap-4 w-max pb-2">
            {ribbonItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative snap-start w-[166px] sm:w-[186px] md:w-[206px] overflow-hidden rounded-xl border border-primary/15 bg-white/95 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                <div className="relative h-[106px] sm:h-[116px] md:h-[126px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 170px, (max-width: 768px) 190px, 210px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
