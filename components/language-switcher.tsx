"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Globe, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/language-context"
import { locales, localeNames, localeFlags, Locale } from "@/lib/i18n/config"

interface LanguageSwitcherProps {
  variant?: "default" | "minimal"
  scrolled?: boolean
}

export function LanguageSwitcher({ variant = "default", scrolled = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // ══════════════════════════════════════════════════
  // كشف هل نحن في صفحة داكنة (innovation)
  // ══════════════════════════════════════════════════
  const isDarkPage = pathname === "/innovation"

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 font-semibold transition-all duration-300 ${
            isDarkPage
              // ═══ صفحة Innovation: أبيض على أسود ═══
              ? "text-white hover:bg-white/15 hover:text-white"
              : scrolled
                // ═══ صفحات أخرى ( scrolled ): بني على أبيض ═══
                ? "text-amber-900 hover:bg-orange-50 hover:text-orange-600"
                // ═══ صفحات أخرى ( عادي ): بني على شفاف ═══
                : "text-amber-950 hover:bg-orange-50/50 hover:text-orange-600"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span>{localeFlags[locale]}</span>
          <ChevronDown className="h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className={`w-40 shadow-2xl ${
          isDarkPage
            // ═══ صفحة Innovation: قائمة داكنة ═══
            ? "bg-zinc-900 border-zinc-700"
            // ═══ صفحات أخرى: قائمة فاتحة ═══
            : "bg-white border-orange-100"
        }`}
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleSelect(loc)}
            className={`flex items-center justify-between gap-3 cursor-pointer ${
              isDarkPage
                // ═══ صفحة Innovation ═══
                ? locale === loc
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                // ═══ صفحات أخرى ═══
                : locale === loc
                  ? "bg-orange-50 text-orange-600"
                  : "text-amber-900 hover:bg-orange-50/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-6">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </div>
            {locale === loc && (
              <Check className={`h-4 w-4 ${
                isDarkPage ? "text-white" : "text-orange-500"
              }`} />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}