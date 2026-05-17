"use client"

import React, { useEffect, useState } from "react"
import { 
  ShoppingCart, Send, Lightbulb, Gift, Syringe, ShieldCheck, 
  Activity, Thermometer, ArrowRight, ArrowLeft, Phone, MessageCircle, Truck, Info
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ProcessSection() {
  const { language: contextLanguage } = useLanguage()
  const [currentLang, setCurrentLang] = useState<"ar" | "en" | "fr">("fr")

  useEffect(() => {
    const updateLang = () => {
      const htmlLang = document.documentElement.lang as any
      if (["ar", "en", "fr"].includes(htmlLang)) {
        setCurrentLang(htmlLang)
      } else if (contextLanguage) {
        setCurrentLang(contextLanguage as any)
      }
    }
    updateLang()
    const observer = new MutationObserver(updateLang)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })
    return () => observer.disconnect()
  }, [contextLanguage])

  const isRtl = currentLang === "ar"
  const Arrow = isRtl ? ArrowLeft : ArrowRight

  const allTranslations = {
    ar: {
      title: "طريقة العمل والمعالجة",
      eggSalesTitle: "مراحل بيع البيض",
      vaccineTitle: "البروتوكول الصحي",
      days: "اليوم",
      steps: {
        order: { label: "طلب العميل", title: "كيفية الطلب", details: "إتمام الطلب عبر الهاتف أو الواتساب بنظام حجز مرن." },
        prep: { label: "التحضير والإرسال", title: "التغليف والشحن", details: "تغليف مضاد للصدمات لضمان وصول البيض بسلام." },
        test: { label: "المتابعة والاختبار", title: "فحص الخصوبة", details: "الفحص الضوئي في اليوم السابع للتأكد من نمو الجنين." },
        replace: { label: "التعويض", title: "ضمان التعويض", details: "تعويض مباشر ببيض جديد في حال عدم التخصيب." },
      },
      vax: {
        corza: { label: "كوريزا", title: "لقاح الكورزا", info: "يحمي من تورم الوجه والإفرازات التنفسية." },
        newcastle: { label: "نيوكاسل", title: "لقاح النيوكاسل", info: "يحمي من الفيروس القاتل للجهاز العصبي." },
        coccidia: { label: "كوكسيديا", title: "لقاح الكوكسيديا", info: "يحمي من الطفيليات المعوية والنزيف الداخلي." },
        salmonella: { label: "سالمونيلا", title: "لقاح السالمونيلا", info: "يحمي من البكتيريا المعوية وضمان صحة القطيع." },
        extra: { label: "إضافي", title: "فيتامينات إضافية", info: "تعزيز المناعة والمكملات الغذائية اللازمة." },
        booster: { label: "تذكير", title: "مُعزز مناعي", info: "جرعة تنشيطية لضمان استمرارية الحماية." },
      }
    },
    fr: {
      title: "Fonctionnement et Traitement",
      eggSalesTitle: "Étapes de vente des œufs",
      vaccineTitle: "Protocole Sanitaire",
      days: "Jour",
      steps: {
        order: { label: "Commande", title: "Comment commander", details: "Commande via téléphone أو WhatsApp." },
        prep: { label: "Préparation", title: "Expédition", details: "Emballage antichoc pour une arrivée sécurisée." },
        test: { label: "Suivi & Test", title: "Test de fertilité", details: "Mirage au 7ème jour." },
        replace: { label: "Remplacement", title: "Garantie", details: "Remplacement direct pour œufs non fertiles." },
      },
      vax: {
        corza: { label: "Corza", title: "Vaccin Coryza", info: "Protège contre les gonflements faciaux." },
        newcastle: { label: "Newcastle", title: "Vaccin Newcastle", info: "Protection contre le virus nerveux." },
        coccidia: { label: "Coccidia", title: "Vaccin Coccidiose", info: "Protège contre les parasites intestinaux." },
        salmonella: { label: "Salmonella", title: "Vaccin Salmonelle", info: "Protection contre les bactéries." },
        extra: { label: "Extra", title: "Vitamines", info: "Boosters d'immunité et compléments." },
        booster: { label: "Booster", title: "Rappel", info: "Dose de rappel pour la protection." },
      }
    },
    en: {
      title: "How It Works",
      eggSalesTitle: "Egg Sales Stages",
      vaccineTitle: "Vaccination Protocol",
      days: "Day",
      steps: {
        order: { label: "Order", title: "How to Order", details: "Order via phone or WhatsApp." },
        prep: { label: "Preparation", title: "Shipping", details: "Shockproof packaging for safety." },
        test: { label: "Monitoring", title: "Fertility Testing", details: "Day 7 light testing for embryos." },
        replace: { label: "Replacement", title: "Guarantee", details: "Instant replacement for unfertile eggs." },
      },
      vax: {
        corza: { label: "Coryza", title: "Coryza Vaccine", info: "Protects from facial swelling." },
        newcastle: { label: "Newcastle", title: "Newcastle Vaccine", info: "Protects from nervous system virus." },
        coccidia: { label: "Coccidia", title: "Coccidia Vaccine", info: "Protects from intestinal parasites." },
        salmonella: { label: "Salmonella", title: "Salmonella Vaccine", info: "Protects from intestinal bacteria." },
        extra: { label: "Extra", title: "Vitamines", info: "Immunity boosters and supplements." },
        booster: { label: "Booster", title: "Immune Booster", info: "Booster dose for protection." },
      }
    }
  }

  const t = allTranslations[currentLang]

  const eggJourney = [
    { icon: ShoppingCart, color: "bg-orange-500", ...t.steps.order, subIcon: <div className="flex gap-1"><Phone size={10} /><MessageCircle size={10} /></div> },
    { icon: Send, color: "bg-orange-500", ...t.steps.prep, subIcon: <Truck size={12} /> },
    { icon: Lightbulb, color: "bg-orange-600", ...t.steps.test },
    { icon: Gift, color: "bg-green-600", ...t.steps.replace },
  ]

  const vaccineSteps = [
    { icon: Syringe, label: t.vax.corza.label, day: `${t.days} 1`, title: t.vax.corza.title, info: t.vax.corza.info },
    { icon: ShieldCheck, label: t.vax.newcastle.label, day: `${t.days} 7`, title: t.vax.newcastle.title, info: t.vax.newcastle.info },
    { icon: Activity, label: t.vax.coccidia.label, day: `${t.days} 14`, title: t.vax.coccidia.title, info: t.vax.coccidia.info },
    { icon: Thermometer, label: t.vax.salmonella.label, day: `${t.days} 21`, title: t.vax.salmonella.title, info: t.vax.salmonella.info },
    { icon: Gift, label: t.vax.extra.label, day: `${t.days} 25`, title: t.vax.extra.title, info: t.vax.extra.info },
    { icon: ShieldCheck, label: t.vax.booster.label, day: `${t.days} 30`, title: t.vax.booster.title, info: t.vax.booster.info },
  ]

  return (
    <section id="process" dir={isRtl ? "rtl" : "ltr"} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-orange-950 tracking-tight">{t.title}</h2>
          <div className="h-1.5 w-16 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-16">
          {/* مراحل البيع - التفاعل بالضغط */}
          <div className="bg-orange-50/40 p-6 md:p-8 rounded-[2rem] border border-orange-100/60 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex justify-center w-full">
              <span className="bg-orange-100 text-orange-900 px-4 py-1.5 rounded-full font-black text-xs border border-orange-200">
                {t.eggSalesTitle}
              </span>
            </div>
            <div className={`grid grid-cols-2 md:flex md:justify-between items-center gap-y-10 mt-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
              {eggJourney.map((step, index) => (
                <React.Fragment key={index}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex flex-col items-center group relative outline-none">
                        <div className={`w-14 h-14 md:w-16 md:h-16 ${step.color} text-white rounded-2xl flex items-center justify-center shadow-lg transition-all active:scale-90 relative`}>
                          <step.icon size={24} />
                          {step.subIcon && <div className="absolute -top-2 -right-2 bg-white text-orange-600 p-1 rounded-full shadow-md border border-orange-50">{step.subIcon}</div>}
                        </div>
                        <span className="mt-3 font-bold text-orange-950 text-xs text-center flex items-center gap-1">
                          {step.label} <Info size={10} className="text-orange-400 md:hidden" />
                        </span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent side="top" className="w-64 bg-white border-2 border-orange-100 p-4 rounded-2xl shadow-xl z-50">
                      <p className="font-black text-orange-600 border-b pb-1 mb-1 text-sm">{step.title}</p>
                      <p className="text-xs leading-relaxed text-orange-900/80 font-medium">{step.details}</p>
                    </PopoverContent>
                  </Popover>
                  {index < eggJourney.length - 1 && <Arrow className="text-orange-200 hidden md:block opacity-40" size={20} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* نظام التلقيح - البروتوكول الصحي */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-blue-50 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex justify-center w-full">
              <span className="bg-blue-50 text-blue-900 px-4 py-1.5 rounded-full font-black text-xs border border-blue-100">
                {t.vaccineTitle}
              </span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 mt-6">
              {vaccineSteps.map((vax, index) => (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <button className="flex flex-col items-center group outline-none active:scale-90 transition-transform">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-blue-600 border border-blue-100 rounded-full flex items-center justify-center group-focus:bg-blue-600 group-focus:text-white transition-all shadow-sm">
                        <vax.icon size={20} />
                      </div>
                      <p className="mt-2 text-[10px] md:text-xs font-black text-orange-950 text-center">{vax.label}</p>
                      <span className="text-[9px] font-bold text-orange-400 uppercase">{vax.day}</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" className="w-64 bg-white border-2 border-blue-100 p-4 rounded-2xl shadow-xl z-50">
                    <p className="font-black text-blue-600 border-b pb-1 mb-1 text-sm">{vax.title}</p>
                    <p className="text-xs leading-relaxed text-blue-900/80 font-medium italic">{vax.info}</p>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}