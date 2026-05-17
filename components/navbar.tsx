"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  const languageContext = useLanguage()
  const dictionary = languageContext?.dictionary
  const isRtl = languageContext?.isRtl || false

  // ══════════════════════════════════════════════════
  // كشف هل نحن في صفحة داكنة (innovation)
  // ══════════════════════════════════════════════════
  const isDarkPage = pathname === "/innovation"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#home", label: dictionary?.nav?.home || (isRtl ? "الرئيسية" : "Accueil"), isBlue: false },
    { href: "/#breeds", label: dictionary?.nav?.breeds || (isRtl ? "السلالات" : "Races"), isBlue: false },
    { href: "/#process", label: dictionary?.nav?.howItWorks || (isRtl ? "كيف نعمل" : "Comment ça marche"), isBlue: false },
    { href: "/innovation", label: isRtl ? "إبتكاراتنا" : "Innovation", isBlue: true }, 
    { href: "/#about", label: dictionary?.nav?.about || (isRtl ? "من نحن" : "À propos"), isBlue: false },
    { href: "/#contact", label: dictionary?.nav?.contact || (isRtl ? "اتصل بنا" : "Contact"), isBlue: false },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-500 z-[9999] ${
      isDarkPage
        // ═══ صفحة Innovation: نافبار شفاف/داكن ═══
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4"
        : scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-orange-100 py-4" 
          : "bg-transparent border-b border-transparent py-5" 
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between h-16 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* ══════ Logo ══════ */}
          <Link href="/" className={`flex items-center gap-3 group ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className={`rounded-full p-1.5 shadow-md border ${
              isDarkPage 
                ? "bg-white/10 border-white/20" 
                : "bg-white border-orange-100"
            }`}>
              <Image
                src="/images/logo.png"
                alt="Mr. Rooster Logo"
                width={50}
                height={50}
                className="h-10 w-10 object-contain"
                priority
              />
            </div>
            <span className={`text-xl font-black tracking-tight drop-shadow-sm transition-colors ${
              isDarkPage
                ? "text-white group-hover:text-amber-300"
                : scrolled 
                  ? "text-orange-950 group-hover:text-orange-700" 
                  : "text-orange-950 group-hover:text-orange-600"
            }`}>
              Mr.<span className={isDarkPage ? "text-amber-400" : "text-orange-500"}>Rooster</span>
            </span>
          </Link>

          {/* ══════ Desktop Navigation ══════ */}
          <div className={`hidden md:flex items-center gap-5 lg:gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => {
              if (link.isBlue) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 font-extrabold px-4 py-2 rounded-full border transition-all duration-300 text-sm lg:text-base shadow-sm ${
                      isDarkPage
                        // ═══ صفحة Innovation: أزرق على داكن ═══
                        ? "text-blue-400 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50"
                        : scrolled
                          ? "text-blue-600 border-blue-200 bg-blue-50/60 hover:bg-blue-100/70 hover:border-blue-300"
                          : "text-blue-400 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50"
                    }`}
                  >
                    <Lightbulb size={16} className={
                      isDarkPage ? "text-blue-400" : scrolled ? "text-blue-600" : "text-blue-400"
                    } />
                    <span>{link.label}</span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse block" />
                  </Link>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-bold transition-all duration-300 relative py-2 text-sm lg:text-base ${
                    isDarkPage
                      // ═══ صفحة Innovation: أبيض ═══
                      ? "text-gray-300 hover:text-white"
                      : scrolled 
                        ? "text-amber-900 hover:text-orange-600" 
                        : "text-amber-950 hover:text-orange-500"
                  } after:absolute after:bottom-0 ${isRtl ? 'after:right-0' : 'after:left-0'} after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* ══════ CTA Button & Language Switcher ══════ */}
          <div className={`hidden md:flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher scrolled={scrolled} /> 
            <Button asChild className={`border-0 shadow-md px-5 py-2.5 h-auto text-sm font-bold transition-transform active:scale-95 ${
              isDarkPage
                // ═══ صفحة Innovation: زر برتقالي على داكن ═══
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-orange-600 hover:bg-orange-700 text-white"
            }`}>
              <Link href="/#contact">
                {dictionary?.nav?.contact || (isRtl ? "اتصل بنا" : "Contact")}
              </Link>
            </Button>
          </div>

          {/* ══════ Mobile Menu Button ══════ */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isDarkPage
                ? "text-white hover:bg-white/10"
                : scrolled 
                  ? "text-amber-950 hover:bg-slate-100" 
                  : "text-amber-950 hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ══════ Mobile Navigation ══════ */}
      {isOpen && (
        <div className={`md:hidden border-t shadow-xl absolute top-full left-0 w-full ${
          isDarkPage
            // ═══ صفحة Innovation: قائمة داكنة ═══
            ? "bg-black/95 border-white/10"
            : scrolled 
              ? "bg-white border-slate-100" 
              : "bg-white border-slate-200"
        }`}>
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => {
              if (link.isBlue) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 font-bold py-3 px-4 rounded-xl ${
                      isDarkPage
                        ? "text-blue-400 bg-blue-500/10 hover:bg-blue-500/15"
                        : "text-blue-500 bg-blue-500/5 hover:bg-blue-500/10"
                    } ${isRtl ? 'flex-row-reverse' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Lightbulb size={16} />
                    <span>{link.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </Link>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block transition-all font-bold py-3 px-4 rounded-xl ${
                    isDarkPage
                      // ═══ صفحة Innovation: أبيض على داكن ═══
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      // ═══ صفحات أخرى: بني على أبيض ═══
                      : "text-amber-900 hover:text-orange-600 hover:bg-orange-50/50"
                  }`}
                  style={{ textAlign: isRtl ? 'right' : 'left' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className={`pt-4 flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher scrolled={scrolled} />
              <Button asChild className={`flex-1 py-5 h-auto font-bold ${
                isDarkPage
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-orange-600 hover:bg-orange-700 text-white"
              }`}>
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  {dictionary?.nav?.contact || (isRtl ? "اتصل بنا" : "Contact")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}