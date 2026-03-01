import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['it', 'en', 'de', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Valida che il locale richiesto sia supportato
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Carica i messaggi dal file JSON corrispondente
  return {
    locale: locale as Locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

