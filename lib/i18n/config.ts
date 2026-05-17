export const locales = ['en', 'fr', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
}

export const localeFlags: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  ar: 'AR',
}

export const rtlLocales: Locale[] = ['ar']

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}
