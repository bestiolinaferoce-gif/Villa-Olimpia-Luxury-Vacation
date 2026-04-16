import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import { defaultMetadata, BASE_URL, buildHreflangLanguages } from "@/lib/metadata"

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "it").map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) {
    return defaultMetadata
  }
  const canonical = locale === "it" ? BASE_URL : `${BASE_URL}/${locale}`
  return {
    ...defaultMetadata,
    alternates: {
      ...defaultMetadata.alternates,
      canonical,
      languages: buildHreflangLanguages("/"),
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
