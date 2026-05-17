'use client';

import { useState, useEffect, useCallback } from 'react';

// ═══════════════════════════════════════════════════════
// النوع مُعرّف هنا مباشرة (بدون استيراد من ملف خارجي)
// ═══════════════════════════════════════════════════════
type SupportedLang = 'ar' | 'fr' | 'en';

function normalizeLang(raw: string | null | undefined): SupportedLang {
  if (!raw) return 'ar';
  const val = raw.toLowerCase().trim();

  if (['ar', 'arabic', 'arabe', 'العربية', 'عربي'].includes(val)) return 'ar';
  if (['fr', 'french', 'français', 'francais', 'الفرنسية', 'فرنسوي'].includes(val)) return 'fr';
  if (['en', 'english', 'anglais', 'الإنجليزية', 'انجليزي'].includes(val)) return 'en';

  return 'ar';
}

export function useInnovationLang() {
  const [lang, setLang] = useState<SupportedLang>('ar');
  const [mounted, setMounted] = useState(false);

  const detectLanguage = useCallback((): SupportedLang => {
    try {
      const stored = localStorage.getItem('language')
        || localStorage.getItem('lang')
        || localStorage.getItem('i18n_lang')
        || localStorage.getItem('app-language');
      if (stored) return normalizeLang(stored);

      if (document.documentElement.lang) {
        return normalizeLang(document.documentElement.lang);
      }

      const browserLang = navigator.language || (navigator as any).userLanguage;
      if (browserLang) return normalizeLang(browserLang);
    } catch {
      // ignore
    }
    return 'ar';
  }, []);

  useEffect(() => {
    setMounted(true);
    setLang(detectLanguage());

    const handleStorage = (e: StorageEvent) => {
      if (['language', 'lang', 'i18n_lang', 'app-language'].includes(e.key || '')) {
        setLang(normalizeLang(e.newValue));
      }
    };

    const handleLangChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setLang(normalizeLang(detail?.language || detail?.lang || detail));
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('languageChanged', handleLangChange);
    window.addEventListener('langchange', handleLangChange);
    window.addEventListener('i18n-change', handleLangChange);

    const observer = new MutationObserver(() => {
      const newLang = normalizeLang(document.documentElement.lang);
      setLang(prev => (prev !== newLang ? newLang : prev));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    });

    const interval = setInterval(() => {
      const detected = detectLanguage();
      setLang(prev => (prev !== detected ? detected : prev));
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('languageChanged', handleLangChange);
      window.removeEventListener('langchange', handleLangChange);
      window.removeEventListener('i18n-change', handleLangChange);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [detectLanguage]);

  return { lang, mounted };
}