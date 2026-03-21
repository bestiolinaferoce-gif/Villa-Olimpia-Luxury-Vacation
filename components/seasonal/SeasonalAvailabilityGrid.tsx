"use client"

import Image from "next/image"
import Link from "next/link"
import { apartments } from "@/data/apartments"
import type { MonthConfig } from "@/lib/seasonalConfig"
import { SEASONAL_LODGE_UI, type SeasonalMonth } from "@/lib/seasonalConfig"
import { cn } from "@/lib/utils"

export interface SeasonalAvailabilityGridProps {
  config: MonthConfig
  monthKey: Exclude<SeasonalMonth, "other">
}

export function SeasonalAvailabilityGrid({ config, monthKey }: SeasonalAvailabilityGridProps) {
  const map = SEASONAL_LODGE_UI[monthKey]

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-playfair text-3xl font-bold text-slate-900">
        Lodge · {config.label}
      </h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Stato aggiornato manualmente per la campagna diretta. Per conferma reale sulle date usa il form o WhatsApp.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apartments
          .filter((a) => a.active !== false)
          .map((a) => {
            const st = map[a.id] ?? "occupied"
            const badge =
              st === "available"
                ? { text: "DISPONIBILE", className: "bg-emerald-600 text-white" }
                : st === "last"
                  ? { text: "ULTIMO", className: "bg-amber-500 text-slate-900" }
                  : { text: "OCCUPATO", className: "bg-slate-400 text-white" }

            return (
              <div
                key={a.id}
                className={cn(
                  "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
                  st === "occupied" && "opacity-60"
                )}
              >
                <div className="relative h-40">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span
                    className={cn(
                      "absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase",
                      badge.className
                    )}
                  >
                    {badge.text}
                  </span>
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="font-semibold text-slate-900">{a.name}</h3>
                  <p className="text-xs text-slate-500">
                    Fino a {a.guests} ospiti · {a.size}
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    Da €{a.price ?? config.priceFrom}/notte (indicativo)
                  </p>
                  <Link
                    href={`/contatti?source=seasonal_grid&month=${monthKey}&apartment=${encodeURIComponent(a.name)}#prenota`}
                    className="inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    Richiedi questo lodge
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
