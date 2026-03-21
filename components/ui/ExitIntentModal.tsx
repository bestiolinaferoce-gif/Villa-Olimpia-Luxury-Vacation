"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  SEASONAL_CAMPAIGN_YEAR,
  SEASONAL_CONFIG,
  getAvailabilityPercent,
  getCurrentSeasonalMonth,
  type SeasonalMonth,
} from "@/lib/seasonalConfig"
import { trackEvent } from "@/components/analytics/google-analytics"

const SESSION_EXIT = "exit_modal_shown_v1"
const LS_LEAD = "lead_submitted_v1"

/** Timer lungo solo su viewport stretti: su desktop resta solo l'uscita mouse verso l'alto (meno invasivo). */
const MOBILE_TIMER_MS = 40_000
const MOBILE_MAX_WIDTH_PX = 768

const MONTH_OPTIONS: Array<{ value: SeasonalMonth; label: string }> = [
  { value: "maggio", label: "Maggio" },
  { value: "giugno", label: "Giugno" },
  { value: "luglio", label: "Luglio" },
  { value: "other", label: "Altro / da definire" },
]

export function ExitIntentModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [month, setMonth] = useState<SeasonalMonth>("maggio")
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  const cfg = useMemo(() => {
    const m = month === "other" ? getCurrentSeasonalMonth() : month
    return m === "other" ? SEASONAL_CONFIG.other : SEASONAL_CONFIG[m]
  }, [month])

  const pct = getAvailabilityPercent(cfg)

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      if (sessionStorage.getItem(SESSION_EXIT) === "1") return
      if (localStorage.getItem(LS_LEAD) === "1") return
    } catch {
      return
    }

    const showOnce = (source: "timer_40s" | "mouse_top") => {
      try {
        if (sessionStorage.getItem(SESSION_EXIT) === "1") return
        if (localStorage.getItem(LS_LEAD) === "1") return
      } catch {
        return
      }
      setOpen(true)
      trackEvent("exit_intent_shown", "Conversion", source)
      try {
        sessionStorage.setItem(SESSION_EXIT, "1")
      } catch {
        /* ignore */
      }
    }

    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH_PX}px)`)
    let mobileTimer: number | undefined
    if (mq.matches) {
      mobileTimer = window.setTimeout(() => showOnce("timer_40s"), MOBILE_TIMER_MS)
    }

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return
      showOnce("mouse_top")
    }

    document.addEventListener("mouseout", onLeave)
    return () => {
      if (mobileTimer !== undefined) window.clearTimeout(mobileTimer)
      document.removeEventListener("mouseout", onLeave)
    }
  }, [])

  const dismiss = useCallback(() => {
    setOpen(false)
    trackEvent("exit_intent_dismissed", "Conversion", "click")
  }, [])

  const submit = useCallback(async () => {
    if (!email || !phone) return
    setBusy(true)
    try {
      const checkIn =
        month === "maggio"
          ? `${SEASONAL_CAMPAIGN_YEAR}-05-10`
          : month === "giugno"
            ? `${SEASONAL_CAMPAIGN_YEAR}-06-10`
            : month === "luglio"
              ? `${SEASONAL_CAMPAIGN_YEAR}-07-10`
              : `${SEASONAL_CAMPAIGN_YEAR}-06-01`
      const checkOut =
        month === "maggio"
          ? `${SEASONAL_CAMPAIGN_YEAR}-05-17`
          : month === "giugno"
            ? `${SEASONAL_CAMPAIGN_YEAR}-06-17`
            : month === "luglio"
              ? `${SEASONAL_CAMPAIGN_YEAR}-07-17`
              : `${SEASONAL_CAMPAIGN_YEAR}-06-08`

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Lead exit-intent",
          email,
          phone,
          checkIn,
          checkOut,
          guests: "2",
          apartment: "",
          message: "Richiesta da exit-intent modal",
          source: "exit_intent_modal",
          landingPage: typeof window !== "undefined" ? window.location.href : "",
          seasonalMonth: month === "other" ? undefined : month,
          marketingOptIn: true,
        }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.ok) {
        setDone(true)
        try {
          localStorage.setItem(LS_LEAD, "1")
        } catch {
          /* ignore */
        }
        trackEvent("exit_intent_submitted", "Conversion", month)
        window.setTimeout(() => setOpen(false), 1200)
      }
    } finally {
      setBusy(false)
    }
  }, [email, phone, month])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full p-2 hover:bg-slate-100"
              onClick={dismiss}
              aria-label="Chiudi"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 id="exit-intent-title" className="pr-10 text-xl font-bold text-slate-900">
              Aspetta! Prima di andare…
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Maggio e giugno hanno ancora disponibilità limitata in aggiornamento manuale — lasciaci email e telefono e ti richiamiamo.
            </p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-4 grid gap-3">
              <div>
                <Label htmlFor="exit-email">Email</Label>
                <Input
                  id="exit-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div>
                <Label htmlFor="exit-phone">Telefono</Label>
                <Input
                  id="exit-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </div>
              <div>
                <Label htmlFor="exit-month">Mese</Label>
                <select
                  id="exit-month"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={month}
                  onChange={(e) => setMonth(e.target.value as SeasonalMonth)}
                >
                  {MONTH_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={dismiss}>
                No grazie
              </Button>
              <Button type="button" onClick={submit} disabled={busy || done}>
                {done ? "Inviato" : "Voglio essere contattato"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
