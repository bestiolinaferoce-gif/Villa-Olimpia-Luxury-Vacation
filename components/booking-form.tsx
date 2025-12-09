"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Mail, Phone, MessageSquare, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

const bookingSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(10, "Numero di telefono non valido"),
  checkIn: z.string().min(1, "Seleziona una data di check-in"),
  checkOut: z.string().min(1, "Seleziona una data di check-out"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  apartment: z.string().optional(),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // EmailJS configuration
      // IMPORTANTE: Configurare queste variabili su Vercel → Settings → Environment Variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      // Validate configuration
      if (!serviceId || serviceId.trim() === '') {
        throw new Error('Service ID non configurato. Configura NEXT_PUBLIC_EMAILJS_SERVICE_ID su Vercel.')
      }
      if (!templateId || templateId.trim() === '') {
        throw new Error('Template ID non configurato. Configura NEXT_PUBLIC_EMAILJS_TEMPLATE_ID su Vercel.')
      }
      if (!publicKey || publicKey.trim() === '') {
        throw new Error('Public Key non configurata. Configura NEXT_PUBLIC_EMAILJS_PUBLIC_KEY su Vercel.')
      }

      // Prepare email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        check_in: data.checkIn,
        check_out: data.checkOut,
        guests: data.guests,
        apartment: data.apartment || 'Non specificato',
        message: data.message || 'Nessun messaggio aggiuntivo',
        to_email: 'villaolimpiacaporizzuto@gmail.com',
        subject: `Nuova Richiesta Prenotazione - ${data.name}`,
      }

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setIsSubmitting(false)
      setIsSubmitted(true)
      reset() // Reset form after successful submission
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error('Errore invio email:', error)
      }
      setIsSubmitting(false)
      
      // Provide more specific error messages
      let errorMessage = 'Si è verificato un errore durante l\'invio. Riprova più tardi o contattaci direttamente.'
      
      if (error instanceof Error) {
        if (error.message.includes('Service ID') || error.message.includes('Template ID') || error.message.includes('Public Key')) {
          errorMessage = error.message + ' Riavvia il server di sviluppo dopo aver modificato .env.local'
        } else if (error.message.includes('400')) {
          errorMessage = 'Errore nella configurazione EmailJS. Verifica Service ID e Template ID.'
        } else if (error.message.includes('401') || error.message.includes('403')) {
          errorMessage = 'Errore di autenticazione EmailJS. Verifica la Public Key.'
        } else {
          errorMessage = error.message
        }
      }
      
      setSubmitError(errorMessage)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2">Richiesta Inviata con Successo!</h3>
        <p className="text-muted-foreground mb-4">
          Abbiamo ricevuto la tua richiesta di prenotazione.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Ti risponderemo entro 24 ore all&apos;indirizzo email fornito per confermare la disponibilità.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setCurrentStep(1)
            reset()
          }}
        >
          Invia Nuova Richiesta
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Step 1: Personal Info */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="name">Nome e Cognome *</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Mario Rossi"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="mario.rossi@email.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Telefono *</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+39 123 456 7890"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => setCurrentStep(2)}
          >
            Continua
          </Button>
        </motion.div>
      )}

      {/* Step 2: Booking Details */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkIn">Check-in *</Label>
              <Input
                id="checkIn"
                type="date"
                {...register("checkIn")}
                className={errors.checkIn ? "border-destructive" : ""}
              />
              {errors.checkIn && (
                <p className="text-sm text-destructive mt-1">
                  {errors.checkIn.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="checkOut">Check-out *</Label>
              <Input
                id="checkOut"
                type="date"
                {...register("checkOut")}
                className={errors.checkOut ? "border-destructive" : ""}
              />
              {errors.checkOut && (
                <p className="text-sm text-destructive mt-1">
                  {errors.checkOut.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="guests">Numero Ospiti *</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              {...register("guests")}
              placeholder="2"
              className={errors.guests ? "border-destructive" : ""}
            />
            {errors.guests && (
              <p className="text-sm text-destructive mt-1">
                {errors.guests.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="apartment">Appartamento Preferito (opzionale)</Label>
            <Input
              id="apartment"
              {...register("apartment")}
              placeholder="Es: Appartamento Vista Mare"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(1)}
            >
              Indietro
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(3)}
            >
              Continua
            </Button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Message & Submit */}
      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="message">Messaggio (opzionale)</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Hai domande o richieste speciali?"
              rows={5}
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(2)}
            >
              Indietro
            </Button>
            <Button
              type="submit"
              variant="luxury"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
            </Button>
          </div>

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
            >
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-destructive mb-1">Errore nell&apos;invio</p>
                <p className="text-sm text-destructive/80">{submitError}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Puoi contattarci direttamente via WhatsApp o email.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`h-2 w-2 rounded-full transition-colors ${
              step === currentStep
                ? "bg-primary"
                : step < currentStep
                ? "bg-primary/50"
                : "bg-muted"
            }`}
          />
        ))}
      </div>
    </form>
  )
}

