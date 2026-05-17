import { Locale } from './config'
import { en } from './dictionaries/en'
import { fr } from './dictionaries/fr'
import { ar } from './dictionaries/ar'

const dictionaries = {
  en,
  fr,
  ar,
}

export type Dictionary = typeof en

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en
}
