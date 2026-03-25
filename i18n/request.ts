import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['it', 'en', 'de', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';

export default getRequestConfig(async ({ locale }: { locale?: string }) => {
  // Locale assente (es. richieste fuori da [locale]): usa default, non 404 sull'intero sito
  if (locale && !locales.includes(locale as Locale)) {
    notFound();
  }

  const resolved = (locale && locales.includes(locale as Locale) ? locale : defaultLocale) as Locale

  return {
    locale: resolved,
    messages: (await import(`../messages/${resolved}.json`)).default,
  };
});

