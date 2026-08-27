"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { apartments } from "@/data/apartments"
import type { MonthConfig } from "@/lib/seasonalConfig"
import type { SeasonalMonth } from "@/lib/seasonalConfig"
import type { OccupancyStatus } from "@/lib/public-calendar/occupancy"

export interface SeasonalAvailabilityGridProps {
  config: MonthConfig
  monthKey: Exclude<SeasonalMonth, "other">
}

export function SeasonalAvailabilityGrid({ config, monthKey }: SeasonalAvailabilityGridProps) {
  const [statuses, setStatuses] = useState<Record<number, OccupancyStatus | "loading">>({})

  useEffect(() => {
    let cancelled = false
    const activeApartments = apartments.filter((apartment) => apartment.active !== false)

    Promise.all(
      activeApartments.map(async (apartment) => {
        try {
          const response = await fetch(`/api/public-request/availability?lodgeId=${apartment.id}`)
          if (!response.ok) return [apartment.id, "unavailable"] as const
          const data = (await response.json()) as { status?: OccupancyStatus }
          return [apartment.id, data.status ?? "unavailable"] as const
        } catch {
          return [apartment.id, "unavailable"] as const
        }
      })
    ).then((entries) => {
      if (!cancelled) setStatuses(Object.fromEntries(entries))
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-playfair text-3xl font-bold text-slate-900">
        Lodge · {config.label}
      </h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        I calendari Airbnb vengono sincronizzati automaticamente. La disponibilità finale viene sempre confermata sulle date richieste.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apartments
          .filter((a) => a.active !== false)
          .map((a) => {
            const st = statuses[a.id] ?? "loading"
            const badge =
              st === "verified"
                ? { text: "CALENDARIO SINCRONIZZATO", className: "bg-emerald-700 text-white" }
                : st === "stale"
                  ? { text: "DA AGGIORNARE", className: "bg-amber-500 text-slate-900" }
                  : st === "loading"
                    ? { text: "CONTROLLO…", className: "bg-slate-500 text-white" }
                    : { text: "VERIFICA LE DATE", className: "bg-slate-700 text-white" }

            return (
              <div
                key={a.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
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
                    className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${badge.className}`}
                  >
                    {badge.text}
                  </span>
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="font-semibold text-slate-900">{a.name}</h3>
                  <p className="text-xs text-slate-500">
                    Fino a {a.guests} ospiti · {a.size}
                  </p>
                  <p className="text-sm text-slate-600">
                    Tariffa e disponibilità confermate in base a date e numero di ospiti.
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
