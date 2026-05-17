"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

// ✅ إصلاح 1: إضافة نوع TypeScript واضح لحل مشكلة الخاصية isNew
interface FooterLink {
  href: string
  label: string
  isNew?: boolean
}

export function Footer() {
  const { dictionary, isRtl } = useLanguage()

  const footerLinks = {
    quickLinks: [
      { href: "#home", label: dictionary.nav.home },
      { href: "#breeds", label: dictionary.nav.breeds },
      { href: "#process", label: dictionary.nav.howItWorks },
      { href: "#about", label: dictionary.nav.about },
      { 
        href: "/innovation", 
        label: dictionary.nav.innovation || "Innovation", 
        isNew: true 
      },
    ] as FooterLink[],
    services: [
      // ✅ إصلاح 2: إضافة optional chaining (?.) وقيم افتراضية لتجنب أخطاء undefined
      { href: "#breeds", label: dictionary.breeds?.breeds?.australorpBlack?.name || "Australorp Black" },
      { href: "#breeds", label: dictionary.breeds?.breeds?.goldenLeghorn?.name || "Golden Leghorn" },
      { href: "#breeds", label: dictionary.breeds?.breeds?.frenchHybrid?.name || "French Hybrid" },
      { href: "#breeds", label: dictionary.breeds?.breeds?.mrRoosterLight?.name || "Mr Rooster Light" },
    ] as FooterLink[],
  }

  return (
    <footer className="bg-orange-600 text-white border-t border-orange-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Brand & Logo Section */}
          <div className="space-y-6">
            <Link href="/" className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="bg-white rounded-full p-1 shadow-xl shadow-orange-950/20">
                <Image
                  src="/images/logo.png"
                  alt="Mr. Rooster Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  // ✅ إصلاح 3: إضافة unoptimized إذا كانت الصورة ثابتة، أو التأكد من وجودها في public
                  // unoptimized={process.env.NODE_ENV === 'development'} 
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white drop-shadow-sm">Mr.Rooster</span>
            </Link>
            <p className="text-orange-50/90 leading-relaxed text-sm font-medium">
              {dictionary.footer?.description || "Premium poultry farm in Morocco"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 decoration-white/30 decoration-2 underline-offset-8 underline">
              {dictionary.footer?.quickLinks || "Quick Links"}
            </h3>
            <ul className="space-y-6">
              {/* ✅ إصلاح 4: استخدام index كجزء من المفتاح لتجنب التكرار المحتمل */}
              {footerLinks.quickLinks.map((link, index) => (
                <li key={`quick-${index}`} className="relative group">
                  {link.isNew && (
                    <span className={`absolute -top-5 ${isRtl ? 'right-0' : 'left-0'} bg-blue-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-md shadow-blue-900/20 animate-bounce`}>
                      NEW
                    </span>
                  )}
                  <Link 
                    href={link.href} 
                    // ✅ إصلاح 5: دعم RTL في تأثير الحركة ( translate-x-1 يصبح -translate-x-1 في RTL)
                    className={`text-orange-50/80 hover:text-white transition-all font-semibold inline-block duration-200 ${
                      isRtl ? 'hover:-translate-x-1' : 'hover:translate-x-1'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 decoration-white/30 decoration-2 underline-offset-8 underline">
              {dictionary.footer?.ourBreeds || "Our Breeds"}
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={`breed-${index}`}>
                  <Link 
                    href={link.href} 
                    className={`text-orange-50/80 hover:text-white transition-all font-semibold inline-block duration-200 ${
                      isRtl ? 'hover:-translate-x-1' : 'hover:translate-x-1'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 decoration-white/30 decoration-2 underline-offset-8 underline">
              {dictionary.footer?.contactUs || "Contact Us"}
            </h3>
            <ul className="space-y-5">
              <li className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="tel:+212635064213" 
                  className="font-bold text-orange-50 hover:text-white transition-all" 
                  dir="ltr"
                  aria-label="Phone: +212 635 064 213"
                >
                  +212 635 064 213
                </a>
              </li>
              <li className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="mailto:service@mrrooster.com" 
                  className="font-bold text-orange-50 hover:text-white transition-all break-all"
                  aria-label="Email: service@mrrooster.com"
                >
                  service@mrrooster.com
                </a>
              </li>
              <li className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-orange-50 leading-snug">Morocco, Farm Region</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-orange-50/80 font-bold text-sm">
              {new Date().getFullYear()} Mr.Rooster Poultry Farm. {dictionary.footer?.allRightsReserved || "All rights reserved."}
            </p>
            <div className={`flex gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
              {/* ✅ إصلاح 6: استبدال # بروابط حقيقية أو javascript:void(0) لتجنب قفز الصفحة للأعلى */}
              <Link 
                href="/privacy-policy" 
                className="text-orange-50/80 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest"
              >
                {dictionary.footer?.privacyPolicy || "Privacy Policy"}
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-orange-50/80 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest"
              >
                {dictionary.footer?.termsOfService || "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
