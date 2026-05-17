"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Phone, Sparkles, Lightbulb, Cpu } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import Link from "next/link"

export function HeroSection() {
  const { dictionary, isRtl } = useLanguage()
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-24 pb-6 lg:pb-12 overflow-hidden bg-orange-50">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white" />
      
      {/* كلمة ROOSTER الخلفية */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[30vw] md:text-[20vw] font-black tracking-tighter text-orange-900 uppercase">ROOSTER</h1>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10">
        <div dir={isRtl ? 'rtl' : 'ltr'} className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* القسم الأيسر: النصوص والأزرار */}
          <div className={`w-full flex flex-col items-center text-center lg:items-start lg:text-left ${isRtl ? 'lg:items-start lg:text-right' : ''} space-y-4 lg:space-y-6`}>
            <div className="inline-flex items-center gap-3 bg-orange-200/50 border border-orange-300 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-orange-900 text-[10px] font-bold uppercase tracking-widest">{dictionary.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-orange-950 leading-tight">
              Mr.Rooster
            </h1>

            <p className="text-orange-900/70 text-base md:text-lg max-w-md font-medium">
              {dictionary.hero.description}
            </p>

            {/* الأزرار المتجاوبة بالكامل على كافة الشاشات */}
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full justify-center lg:justify-start">
              
              <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:w-auto">
                {/* زر Races */}
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-3 sm:px-6 py-4 sm:py-5 h-auto text-xs sm:text-base font-bold w-full sm:w-auto" asChild>
                  <Link href="#breeds">
                    <span className="truncate">{dictionary.hero.viewBreeds}</span>
                    <ArrowIcon className="mx-1 h-4 w-4 hidden sm:inline-block" />
                  </Link>
                </Button>

                {/* زر Contact */}
                <Button size="lg" variant="outline" className="bg-white/50 rounded-xl px-3 sm:px-6 py-4 sm:py-5 h-auto text-xs sm:text-base font-bold w-full sm:w-auto" asChild>
                  <Link href="#contact">
                    <Phone className="mx-1 h-4 w-4 hidden sm:inline-block" />
                    <span className="truncate">Contact</span>
                  </Link>
                </Button>
              </div>

              {/* زر Innovation المحدث: يظهر الآن على الهاتف بشكل متناسق في سطر كامل بدلاً من اختفائه */}
              <Button size="lg" variant="outline" className="bg-orange-100/40 hover:bg-orange-100/80 text-orange-950 border-orange-200 rounded-xl px-6 py-4 sm:py-5 h-auto text-xs sm:text-base font-bold w-full sm:w-auto flex items-center justify-center gap-2" asChild>
                <Link href="/innovation">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  {isRtl ? "إبتكاراتنا" : "Innovation"}
                </Link>
              </Button>

            </div>
          </div>

          {/* القسم الأيمن: بطاقة الابتكار المرتفعة مع تأثير الإثارة (Pulse Glow) */}
          <div className="w-full flex justify-center lg:justify-end mt-2 lg:mt-0">
            <Link 
              href="/innovation" 
              className="block bg-white p-5 sm:p-6 rounded-[2rem] shadow-xl border border-orange-100 w-full max-w-[280px] sm:max-w-sm text-center space-y-3 sm:space-y-4 transition-all duration-300 group cursor-pointer relative
                         animate-[pulse_3s_infinite] hover:animate-none shadow-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.03]"
            >
              {/* شارة IoT ملونة بالأزرق التقني الأنيق لتناسق الهوية البصرية للأجهزة الذكية */}
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-bounce">
                IoT
              </span>

              {/* حاوية الصورة المستطيلة للجهاز */}
              <div className="relative w-full h-36 sm:h-48 bg-slate-950 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-900">
                <Image 
                  src="/eyo.png" 
                  alt="Rooster Eye IoT Device" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  priority
                />
              </div>

              {/* نصوص الأيقونة والعنوان */}
              <div className="flex items-center justify-center gap-2 text-orange-950">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                <h3 className="text-base sm:text-lg font-black tracking-tight group-hover:text-orange-600 transition-colors">
                  {isRtl ? "إبتكار: Rooster Eye" : "INNOVATION: Rooster Eye"}
                </h3>
              </div>

              {/* رابط See More */}
              <div className="text-orange-600 font-bold flex items-center justify-center gap-2 text-xs sm:text-sm pt-0.5">
                <span>{isRtl ? "اكتشف النظام" : "See More"}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}