"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { apartments } from "@/data/apartments"
import type { MonthConfig } from "@/lib/seasonalConfig"
import type { SeasonalMonth } from "@/lib/seasonalConfig"
import type { OccupancyStatus } from "@/lib/public-calendar/occupancy"
import { DEFAULT_LOCALE, type SupportedLocale } from "@/lib/i18n-config"
import { getSeasonalLandingCopy } from "@/lib/seasonal-landing-copy"

export interface SeasonalAvailabilityGridProps {
  config: MonthConfig
  monthKey: Exclude<SeasonalMonth, "other">
  locale?: SupportedLocale
}

export function SeasonalAvailabilityGrid({
  config,
  monthKey,
  locale = DEFAULT_LOCALE,
}: SeasonalAvailabilityGridProps) {
  const copy = getSeasonalLandingCopy(locale)
  const isDefaultLocale = locale === DEFAULT_LOCALE
  const monthLabel = isDefaultLocale ? config.label : copy.monthLabel
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
        {copy.grid.title} · {monthLabel}
      </h2>
      <p className="mt-2 max-w-2xl text-slate-600">{copy.grid.note}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apartments
          .filter((a) => a.active !== false)
          .map((a) => {
            const st = statuses[a.id] ?? "loading"
            const badge =
              st === "verified"
                ? { text: copy.grid.badgeVerified, className: "bg-emerald-700 text-white" }
                : st === "stale"
                  ? { text: copy.grid.badgeStale, className: "bg-amber-500 text-slate-900" }
                  : st === "loading"
                    ? { text: copy.grid.badgeLoading, className: "bg-slate-500 text-white" }
                    : { text: copy.grid.badgeUnknown, className: "bg-slate-700 text-white" }

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
                    {copy.grid.guestsLabel.replace("{guests}", String(a.guests))} · {a.size}
                  </p>
                  <p className="text-sm text-slate-600">{copy.grid.rateNote}</p>
                  <Link
                    href={`/contatti?source=seasonal_grid&month=${monthKey}&apartment=${encodeURIComponent(a.name)}#prenota`}
                    className="inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    {copy.grid.requestLodge}
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
