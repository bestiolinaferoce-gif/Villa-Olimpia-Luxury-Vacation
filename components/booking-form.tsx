"use client"

import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Users, Mail, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react"
import { apartments } from "@/data/apartments"
import { trackBookingInitiation, trackEvent } from "@/components/analytics/google-analytics"
import { useSearchParams } from "next/navigation"

const bookingSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(8, "Numero di telefono non valido"),
  checkIn: z.string().min(1, "Seleziona una data di check-in"),
  checkOut: z.string().min(1, "Seleziona una data di check-out"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  apartment: z.string().optional(),
  agency: z.string().optional(),
  message: z.string().optional(),
  company: z.string().optional(), // honeypot
  source: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  landingPage: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export function BookingForm() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const today = useMemo(() => new Date().toISOString().split("T")[0], [])

  const apartmentOptions = useMemo(
    () => apartments.map((apt) => ({ value: apt.name, label: `Appartamento ${apt.name}` })),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  useEffect(() => {
    const apartment = searchParams.get("apartment")
    const checkIn = searchParams.get("checkIn")
    const checkOut = searchParams.get("checkOut")
    const guests = searchParams.get("guests")
    const agency = searchParams.get("agency")

    if (apartment) setValue("apartment", apartment)
    if (checkIn) setValue("checkIn", checkIn)
    if (checkOut) setValue("checkOut", checkOut)
    if (guests) setValue("guests", guests)
    if (agency) setValue("agency", agency)
  }, [searchParams, setValue])

  const buildMailto = (data: BookingFormData) => {
    const source = data.source || "Diretta"
    const subject = encodeURIComponent(`Richiesta Preventivo - ${data.name}`)
    const body = encodeURIComponent(
      [
        `Nome: ${data.name}`,
        `Email: ${data.email}`,
        `Telefono: ${data.phone}`,
        `Agenzia: ${data.agency || "Non indicata"}`,
        `Fonte lead: ${source}`,
        `UTM Source: ${data.utmSource || "N/D"}`,
        `UTM Medium: ${data.utmMedium || "N/D"}`,
        `UTM Campaign: ${data.utmCampaign || "N/D"}`,
        `Check-in: ${data.checkIn}`,
        `Check-out: ${data.checkOut}`,
        `Ospiti: ${data.guests}`,
        `Appartamento preferito: ${data.apartment || "Non specificato"}`,
        `Messaggio: ${data.message || "Nessun messaggio aggiuntivo"}`,
      ].join("\n")
    )

    return `mailto:villaolimpiacaporizzuto@gmail.com?subject=${subject}&body=${body}`
  }

  const buildWhatsAppUrl = (data: BookingFormData) => {
    const source = data.source || "Diretta"
    const text = encodeURIComponent(
      [
        "Ciao, vorrei un preventivo per Villa Olimpia.",
        `Nome: ${data.name}`,
        `Email: ${data.email}`,
        `Telefono: ${data.phone}`,
        `Agenzia: ${data.agency || "Non indicata"}`,
        `Fonte lead: ${source}`,
        `UTM Source: ${data.utmSource || "N/D"}`,
        `UTM Medium: ${data.utmMedium || "N/D"}`,
        `UTM Campaign: ${data.utmCampaign || "N/D"}`,
        `Check-in: ${data.checkIn}`,
        `Check-out: ${data.checkOut}`,
        `Ospiti: ${data.guests}`,
        `Appartamento: ${data.apartment || "Nessuna preferenza"}`,
        `Messaggio: ${data.message || "Nessun messaggio aggiuntivo"}`,
      ].join("\n")
    )

    return `https://wa.me/393335773390?text=${text}`
  }

  const onSubmit = async (data: BookingFormData) => {
    if (data.company) return

    if (new Date(data.checkIn) >= new Date(data.checkOut)) {
      setSubmitError("Check-out deve essere successivo al check-in.")
      return
    }

    const payload: BookingFormData = {
      ...data,
      source: searchParams.get("source") || "direct_contact_form",
      utmSource: searchParams.get("utm_source") || "",
      utmMedium: searchParams.get("utm_medium") || "",
      utmCampaign: searchParams.get("utm_campaign") || "",
      landingPage: typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "",
    }

    setIsSubmitting(true)
    setSubmitError(null)
    trackBookingInitiation()

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const serverPayload = await response.json().catch(() => null)

      if (!response.ok || !serverPayload?.ok) {
        trackEvent("lead_submit_fallback", "Conversion", serverPayload?.reason || "unknown")
        setIsSubmitting(false)
        setSubmitError("Invio automatico non disponibile in questo momento. Ti apriamo WhatsApp con il messaggio già compilato.")
        const popup = window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer")
        if (!popup) {
          window.location.href = buildMailto(payload)
        }
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      trackEvent("lead_submit_success", "Conversion", payload.apartment || "no_apartment")
      reset()
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError(
        "Invio automatico non riuscito. Ti apriamo WhatsApp con il messaggio già compilato."
      )
      trackEvent("lead_submit_error", "Conversion", "network_error")
      const popup = window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer")
      if (!popup) {
        window.location.href = buildMailto(payload)
      }
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="flex items-center justify-center gap-3 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Richiesta pronta</h3>
        </div>
        <p className="mt-3 text-sm text-emerald-700/80">
          Abbiamo ricevuto la tua richiesta. Se non vedi la mail in uscita, puoi inviarla via WhatsApp o
          email con i pulsanti qui sotto.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => {
            setIsSubmitted(false)
            reset()
          }}
        >
          Invia un&apos;altra richiesta
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome e Cognome *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Mario Rossi"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="mario.rossi@email.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefono *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+39 123 456 7890"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="agency">Agenzia (opzionale)</Label>
          <Input
            id="agency"
            {...register("agency")}
            placeholder="Nome agenzia o tour operator"
            className={errors.agency ? "border-destructive" : ""}
          />
          {errors.agency && <p className="text-sm text-destructive">{errors.agency.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Numero Ospiti *</Label>
          <div className="relative">
            <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              {...register("guests")}
              placeholder="2"
              className={`pl-9 ${errors.guests ? "border-destructive" : ""}`}
            />
          </div>
          {errors.guests && <p className="text-sm text-destructive">{errors.guests.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="checkIn">Check-in *</Label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="checkIn"
              type="date"
              min={today}
              {...register("checkIn")}
              className={`pl-9 ${errors.checkIn ? "border-destructive" : ""}`}
            />
          </div>
          {errors.checkIn && <p className="text-sm text-destructive">{errors.checkIn.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkOut">Check-out *</Label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="checkOut"
              type="date"
              min={today}
              {...register("checkOut")}
              className={`pl-9 ${errors.checkOut ? "border-destructive" : ""}`}
            />
          </div>
          {errors.checkOut && <p className="text-sm text-destructive">{errors.checkOut.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="apartment">Appartamento preferito</Label>
        <select
          id="apartment"
          {...register("apartment")}
          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">Nessuna preferenza</option>
          {apartmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Messaggio</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Hai domande o richieste speciali?"
          rows={5}
        />
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("company")}
      />

      {submitError && (
        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <p className="text-sm text-amber-700">{submitError}</p>
        </div>
      )}

      <Button type="submit" variant="luxury" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Invio in corso..." : "Invia richiesta preventivo"}
      </Button>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          asChild
        >
          <a href="mailto:villaolimpiacaporizzuto@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Invia via Email
          </a>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          asChild
        >
          <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="mr-2 h-4 w-4" />
            Scrivi su WhatsApp
          </a>
        </Button>
      </div>
    </form>
  )
}
