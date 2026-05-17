"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, defaultLocale, isRtl } from './config'
import { Dictionary, getDictionary } from './get-dictionary'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  dictionary: Dictionary
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [dictionary, setDictionary] = useState<Dictionary>(getDictionary(defaultLocale))

  useEffect(() => {
    // Check for saved language preference
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && ['en', 'fr', 'ar'].includes(savedLocale)) {
      setLocaleState(savedLocale)
      setDictionary(getDictionary(savedLocale))
    }
  }, [])

  useEffect(() => {
    // Update document direction and language
    document.documentElement.lang = locale
    document.documentElement.dir = isRtl(locale) ? 'rtl' : 'ltr'
    
    // Add/remove RTL class for styling
    if (isRtl(locale)) {
      document.documentElement.classList.add('rtl')
    } else {
      document.documentElement.classList.remove('rtl')
    }
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setDictionary(getDictionary(newLocale))
    localStorage.setItem('locale', newLocale)
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        dictionary,
        isRtl: isRtl(locale),
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
