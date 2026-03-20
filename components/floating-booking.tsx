"use client"

import { useState, useEffect, useMemo, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, X, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { apartments } from "@/data/apartments"
import {
  buildMailtoAvailabilityFallback,
  buildOfficialAvailabilityMessage,
  buildWhatsAppUrlFromText,
} from "@/lib/booking-contact"
import { trackEvent } from "@/components/analytics/google-analytics"
import { Label } from "@/components/ui/label"

export default function FloatingBooking() {
  const [show, setShow] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [apartment, setApartment] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const today = useMemo(() => new Date().toISOString().split("T")[0], [])

  const checkOutMin = useMemo(() => {
    if (!checkIn) return today
    const d = new Date(checkIn + "T12:00:00")
    if (Number.isNaN(d.getTime())) return today
    d.setDate(d.getDate() + 1)
    return d.toISOString().split("T")[0]
  }, [checkIn, today])

  const apartmentOptions = useMemo(
    () => apartments.filter((a) => a.active !== false),
    []
  )

  useEffect(() => {
    setMounted(true)
    if (typeof window === "undefined") return

    const handleScroll = () => setShow(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (checkOut && checkIn && new Date(checkOut) <= new Date(checkIn)) {
      setCheckOut("")
    }
  }, [checkIn, checkOut])

  const openWhatsAppFallback = () => {
    const msg = buildOfficialAvailabilityMessage({
      checkIn: checkIn || "(da definire)",
      checkOut: checkOut || "(da definire)",
      guests,
      apartment: apartment || undefined,
      sourceLabel: "sito ufficiale",
    })
    const url = buildWhatsAppUrlFromText(msg)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const openMailtoFallback = () => {
    const msg = buildOfficialAvailabilityMessage({
      checkIn: checkIn || "(da definire)",
      checkOut: checkOut || "(da definire)",
      guests,
      apartment: apartment || undefined,
      sourceLabel: "sito ufficiale",
    })
    window.location.href = buildMailtoAvailabilityFallback(
      "Richiesta disponibilità Villa Olimpia",
      msg
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (honeypot) return

    if (!checkIn || !checkOut) {
      setError("Seleziona check-in e check-out.")
      return
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      setError("Il check-out deve essere dopo il check-in.")
      return
    }

    setSubmitting(true)
    trackEvent("availability_sticky_submit", "Conversion", apartment || "any")

    try {
      const res = await fetch("/api/availability-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkIn,
          checkOut,
          guests,
          apartment: apartment || "",
          source: "floating_booking_bar",
          company: honeypot,
        }),
      })
      const data = await res.json().catch(() => null)

      if (res.ok && data?.ok) {
        setDone(true)
        setSubmitting(false)
        return
      }

      setSubmitting(false)
      setError("Invio non disponibile. Apri WhatsApp per completare la richiesta.")
      const w = window.open(
        buildWhatsAppUrlFromText(
          buildOfficialAvailabilityMessage({
            checkIn,
            checkOut,
            guests,
            apartment: apartment || undefined,
            sourceLabel: "sito ufficiale",
          })
        ),
        "_blank",
        "noopener,noreferrer"
      )
      if (!w) openMailtoFallback()
    } catch {
      setSubmitting(false)
      setError("Errore di rete. Apri WhatsApp per completare la richiesta.")
      openWhatsAppFallback()
    }
  }

  if (!mounted) return null

  const collapsedButton = (
    <Button
      size="lg"
      onClick={() => {
        setExpanded(true)
        setDone(false)
        setError(null)
      }}
      className="rounded-full shadow-2xl px-6 sm:px-8 h-14 sm:h-16 w-full md:w-auto"
      aria-label="Verifica disponibilità Villa Olimpia"
    >
      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 shrink-0" />
      Verifica disponibilità
    </Button>
  )

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed z-50 bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto p-3 md:p-0 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-lg mx-auto md:mx-0">
            {!expanded ? (
              <div className="flex justify-center md:justify-end pb-[env(safe-area-inset-bottom,0px)]">
                {collapsedButton}
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-border/60 p-4 sm:p-6 max-h-[85vh] overflow-y-auto mb-[env(safe-area-inset-bottom,0px)]"
              >
                <div className="flex justify-between items-center mb-4 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold font-playfair pr-2">
                    Verifica disponibilità
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setExpanded(false)
                      setDone(false)
                      setError(null)
                    }}
                    className="rounded-full p-2 hover:bg-muted shrink-0"
                    aria-label="Chiudi"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {done ? (
                  <div className="space-y-4 text-center py-2">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Richiesta inviata. Ti risponderemo al più presto. Puoi anche scriverci su WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <a
                          href={buildWhatsAppUrlFromText(
                            buildOfficialAvailabilityMessage({
                              checkIn,
                              checkOut,
                              guests,
                              apartment: apartment || undefined,
                              sourceLabel: "sito ufficiale",
                            })
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apri WhatsApp
                        </a>
                      </Button>
                      <Button className="flex-1" onClick={() => setDone(false)}>
                        Nuova richiesta
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="fb-checkin">Check-in</Label>
                        <input
                          id="fb-checkin"
                          type="date"
                          min={today}
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="fb-checkout">Check-out</Label>
                        <input
                          id="fb-checkout"
                          type="date"
                          min={checkOutMin}
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="fb-guests">Ospiti</Label>
                      <select
                        id="fb-guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={String(n)}>
                            {n} {n === 1 ? "ospite" : "ospiti"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="fb-apt">Appartamento (opzionale)</Label>
                      <select
                        id="fb-apt"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      >
                        <option value="">Nessuna preferenza</option>
                        {apartmentOptions.map((apt) => (
                          <option key={apt.id} value={apt.name}>
                            {apt.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      className="sr-only absolute -left-[9999px]"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      aria-hidden
                    />

                    {error && (
                      <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2">
                        {error}
                      </p>
                    )}

                    <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        "Verifica disponibilità"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Villa Olimpia Capo Rizzuto — prenotazione diretta, senza costi di intermediario.
                    </p>
                  </form>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
