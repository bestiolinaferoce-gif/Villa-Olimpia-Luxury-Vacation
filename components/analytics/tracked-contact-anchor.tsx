"use client"

import { trackEvent, trackPhoneClick, trackWhatsAppClick } from "@/components/analytics/google-analytics"

type ContactKind = "whatsapp" | "phone" | "email"

export interface TrackedContactAnchorProps {
  kind: ContactKind
  href: string
  source: string
  locale?: string
  className?: string
  children: React.ReactNode
}

/**
 * Anchor con tracking GA4 per i canali di contatto diretti (WhatsApp / telefono / email).
 * Mantiene il resto della pagina server-only: si importa solo dove serve.
 */
export function TrackedContactAnchor({
  kind,
  href,
  source,
  locale,
  className,
  children,
}: TrackedContactAnchorProps) {
  const onClick = () => {
    if (kind === "whatsapp") {
      trackWhatsAppClick(source, locale)
      return
    }
    if (kind === "phone") {
      const id = href.replace(/^tel:/, "")
      trackPhoneClick(`${id}_${source}`)
      return
    }
    // email
    const label = locale ? `${source}_${locale}` : source
    trackEvent("email_click", "Engagement", label)
  }

  const isExternal = kind === "whatsapp"

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}
