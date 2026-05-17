"use client"

import Image from "next/image"
import { Award, Clock, Heart, Users, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function AboutSection() {
  const { dictionary, isRtl, currentLang } = useLanguage()
  
  const activeLang = currentLang || (isRtl ? 'ar' : 'en');

  const stats = [
    { icon: Clock, value: "10+", label: dictionary.about.stats.yearsExperience },
    { icon: Users, value: "500+", label: dictionary.about.stats.happyFarmers },
    { icon: Award, value: "50K+", label: dictionary.about.stats.chicksDelivered },
    { icon: Heart, value: "100%", label: dictionary.about.stats.qualityFocus },
  ]

  const partners = [
    {
      nameAr: "علف الساحل",
      nameFr: "Alf Sahel",
      nameEn: "Alf Sahel",
      logo: "/images/partners/alf-sahel.png",
      url: "https://www.alfsahel.com/ar/contact",
    },
    {
      nameAr: "الأطلسي للأدوية البيطرية",
      nameFr: "Atlas Vétérinaire",
      nameEn: "Atlas Veterinary",
      logo: "/images/partners/atlas-vet.png",
      url: "https://www.atlasvet.net/ar/%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA/%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%AC%D9%86/item/12-bromoflor-fort.html",
    },
  ]

  return (
    <section 
      id="about" 
      style={{ backgroundColor: '#fff1de' }}
      className="py-16 md:py-24 min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRtl ? 'direction-rtl' : ''}`}>
          
          {/* الجانب الأيسر: شعار المزرعة */}
          <div className={`relative hidden lg:block ${isRtl ? 'lg:order-2' : ''}`}>
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div 
                style={{ backgroundColor: 'rgba(255,179,0,0.1)' }}
                className="absolute inset-0 rounded-[3rem] rotate-6 scale-95 blur-xl" 
              />
              <div className="relative w-full h-full border-0 shadow-2xl rounded-[2.5rem] bg-white flex items-center justify-center p-12">
                <Image
                  src="/images/logo.png"
                  alt="Mr. Rooster Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: المحتوى والشركاء */}
          <div className={`space-y-10 ${isRtl ? 'lg:order-1 text-right' : ''}`}>
            <div className="space-y-4">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block">
                {dictionary.about.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-amber-950 leading-tight">
                {dictionary.about.title} <span className="text-orange-500">{dictionary.about.titleHighlight}</span>
              </h2>
              <p className="text-amber-900/70 text-lg leading-relaxed font-medium">
                <span className="text-orange-500 font-bold">Mr.Rooster</span> {dictionary.about.intro?.replace(/.*:/, '')}
              </p>
            </div>

            {/* الإحصائيات */}
            <div 
              className="grid grid-cols-4 gap-4 py-8 border-y"
              style={{ borderColor: 'rgba(255,179,0,0.3)' }}
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <p className="text-2xl md:text-3xl font-black text-amber-950 group-hover:text-orange-500 transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-amber-700/60 font-bold uppercase tracking-tighter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* الشركاء */}
            <div className="pt-2">
              <h3 className="text-xs font-black text-amber-950/40 uppercase tracking-[0.3em] mb-6">
                {isRtl ? "شركاؤنا الاستراتيجيون" : "Our Strategic Partners"}
              </h3>
              
              <div className="flex flex-wrap gap-6 items-center">
                {partners.map((partner, idx) => {
                  const partnerName = activeLang === 'ar' ? partner.nameAr : (activeLang === 'fr' ? partner.nameFr : partner.nameEn);
                  return (
                    <a 
                      key={idx}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-36 h-20 md:w-44 md:h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 transition-all hover:border-orange-400 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                      style={{ borderColor: 'rgba(255,179,0,0.2)' }}
                      title={partnerName}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partnerName}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4 text-orange-400/50" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}