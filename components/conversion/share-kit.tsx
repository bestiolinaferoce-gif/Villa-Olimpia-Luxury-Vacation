"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { Copy, MessageCircle, Share2 } from "lucide-react"
import { trackEvent } from "@/components/analytics/google-analytics"

const shareUrl = `${SITE_CONFIG.url}/contatti?source=referral`
const shareText =
  "Consiglio Villa Olimpia a Capopiccolo: appartamenti con piscina a 100m dal mare. Rispondono entro 24h."

function buildWhatsAppUrl(text: string, url: string) {
  const payload = encodeURIComponent(`${text} ${url}`)
  return `https://wa.me/${SITE_CONFIG.whatsappPrimary}?text=${payload}`
}

export function ShareKit() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      setCopied(true)
      trackEvent("share_copy", "Marketing", "referral")
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-6 shadow-lg">
      <div className="flex items-center gap-2">
        <Share2 className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-playfair font-bold text-slate-900">Condividi e fai girare il passaparola</h3>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        A costo zero puoi aiutarci con un semplice messaggio. Ti forniamo il testo pronto.
      </p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
        {shareText} <span className="text-primary">{shareUrl}</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button asChild variant="luxury" className="w-full">
          <a href={buildWhatsAppUrl(shareText, shareUrl)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Condividi su WhatsApp
          </a>
        </Button>
        <Button variant="outline" className="w-full" onClick={handleCopy}>
          <Copy className="mr-2 h-4 w-4" />
          {copied ? "Copiato" : "Copia testo"}
        </Button>
      </div>
    </div>
  )
}
