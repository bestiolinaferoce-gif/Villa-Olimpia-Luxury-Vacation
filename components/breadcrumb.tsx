"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  /** Localized home link (default `/`). */
  homeHref?: string
  /** Visible label for home (default `Home`). */
  homeLabel?: string
}

export function Breadcrumb({ items, homeHref = "/", homeLabel = "Home" }: BreadcrumbProps) {
  const homeItemUrl = `https://villaolimpiacaporizzuto.com${homeHref.startsWith("/") ? homeHref : `/${homeHref}`}`
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeLabel, item: homeItemUrl },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://villaolimpiacaporizzuto.com${item.href}` : undefined,
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link
              href={homeHref}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>{homeLabel}</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}


