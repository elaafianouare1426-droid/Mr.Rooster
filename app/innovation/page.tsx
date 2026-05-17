'use client';

import { useEffect, useState, useCallback } from 'react';
import { Navbar } from '@/components/navbar';
import {
  Cpu, Wifi, Bell, Droplets, Target,
  ArrowRight, ShieldCheck, Zap, Eye, Cloud,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SupportedLang = 'ar' | 'fr' | 'en';

function normalizeLang(raw: string | null | undefined): SupportedLang {
  if (!raw) return 'ar';
  const v = raw.toLowerCase().trim();
  if (['ar', 'arabic', 'arabe', 'عربي', 'العربية'].includes(v)) return 'ar';
  if (['fr', 'french', 'français', 'francais', 'فرنسوي', 'الفرنسية'].includes(v)) return 'fr';
  if (['en', 'english', 'anglais', 'انجليزي', 'الإنجليزية'].includes(v)) return 'en';
  return 'ar';
}

const translations: Record<SupportedLang, Record<string, string>> = {
  ar: {
    heroBadge: "Poultry 4.0 — الثورة الزراعية الرقمية",
    heroTitle1: "التكليس الذكي",
    heroTitle2: "Rooster Eye & Smart-Link",
    heroDesc: "نظام متكامل يعتمد على تكنولوجيا إنترنت الأشياء (IoT) المتقدمة لمراقبة وإدارة مناخ الفقاسات عن بُعد على مدار الساعة، لضمان أعلى نسب تفقيس للسلالات الحرة والنقية في المغرب.",
    btnDiscover: "اكتشف الإبتكار",
    btnVision: "نظرتنا للمستقبل",
    discoverBadge: "اكتشف الإبتكار",
    discoverTitle: "المكونات الأساسية للنظام",
    discoverDesc: "نظام MR. ROOSTER يعتمد على ركيزتين أساسيتين تعملان بتناغم تام لضمان أعلى نسب تفقيس",
    eyeTitle: "ROOSTER EYE",
    eyeSubtitle: "العين الذكية",
    eyeDesc: "العين الذكية داخل الفقاسة — تراقب الحرارة والرطوبة ونسبة ثاني أكسيد الكربون في الوقت الفعلي وتعرض البيانات على شاشة مدمجة، مع حماية ذكية ضد انقطاع الكهرباء وخلل التهوية. تُرسل إشعارات فورية للهاتف عند أي تغير مفاجئ في درجة الحرارة أو الرطوبة لضمان سلامة الكتاكيت في كل الأوقات.",
    eyeFeature1: "إشعارات الطوارئ الذكية عبر الهاتف عند تغير الحرارة أو الرطوبة",
    eyeFeature2: "حماية ذكية ضد انقطاع التيار وخلل التهوية",
    eyeFeature3: "شاشة OLED للعرض المباشر للبيانات في مكان الإنتاج",
    linkTitle: "Smart Controller",
    linkSubtitle: "متحكم ذكي",
    linkDesc: "جهاز تحكم بيئي ذكي ومستقل، صُمم لإدارة ورعاية الكتاكيت من عمر يوم واحد وحتى 30 يوماً. يتميز الجهاز بنظام منحنى الحرارة التلقائي (Automated Temperature Curve)، حيث يقوم بخفض درجة الحرارة تدريجياً وبدقة متناهية يومياً (من 37°C في الأيام الأولى ليتلاءم مع ضعف مناعة الكتكوت، وصولاً إلى 20°C عند اكتمال نمو الريش في اليوم الثلاثين). يقوم النظام بأتمتة كاملة لعوامل التربية الحرجة (التدفئة، التهوية المتداخلة لمنع تراكم الأمونيا، وضبط الرطوبة)، مما يقلل من نسب النفوق (Mortality Rate) إلى أدنى حد ويضمن نمواً متناسقاً وصحياً للسلالات النقية.",
    linkFeature1: "منحنى حرارة تلقائي (37°C إلى 20°C) على مدى 30 يوماً",
    linkFeature2: "أتمتة كاملة للتدفئة والتهوية وضبط الرطوبة",
    linkFeature3: "تقليل نسب النفوق وضمان نمو صحي متناسق",
    sec1Badge: "أجهزة IoT",
    sec1Title1: "جهاز ROOSTER EYE",
    sec1Title2: "العين الذكية داخل الفقاسة",
    sec1Desc: "محطة تحكم فيزيائية متكاملة تعتمد على معالج ESP32 القوي.",
    card1Title: "خوارزمية PID المتقدمة",
    card1Desc: "تحكم ذكي في السخانات للحفاظ على استقرار الحرارة بدقة تبلغ 0.1°C.",
    card2Title: "حماية ضد الطوارئ",
    card2Desc: "أنظمة أمان ذاتية للتعامل الفوري مع انقطاع التيار الكهربائي أو خلل التهوية.",
    sec2Badge: "تربية ذكية",
    sec2Title1: "Smart Brooder",
    sec2Title2: "نظام تربية الكتاكيت الذكي",
    sec2Desc: "جهاز تحكم بيئي ذكي لإدارة ورعاية الكتاكيت من اليوم الأول حتى اليوم الثلاثين.",
    sec3Title: "هندسة بيئية مستدامة",
    sec3Desc: "مستوحى من الأنظمة الهيدروليكية العريقة؛ يدمج النظام وحدة رطوبة ذكية تعتمد على إعادة تدوير المياه في حلقة مغلقة.",
    visionTitle: "رؤيتنا: نحو مزرعة ذكية 100%",
    visionDesc: "نخطو بثبات نحو بناء نظام بيئي متكامل للدواجن، يبدأ بالتحكم الذكي ويصل إلى إدارة صحية شاملة.",
    stage1Title: "01. الجهاز الذكي",
    stage1Desc: "متحكم بيئي ذكي يدير رحلة نمو الكتكوت من عمر يوم إلى 30 يوماً بأتمتة كاملة، عبر خوارزمية ديناميكية تخفض الحرارة تلقائياً لتضمن أعلى معدلات البقاء والنمو.",
    stage2Title: "02. Rooster Platform",
    stage2Desc: "نظام متكامل لإدارة الفقاسات والحاضنات من يوم الكتاكيت حتى الشهر الأول.",
    stage3Title: "03. صحة الكتاكيت",
    stage3Desc: "منصة ذكية لمراقبة صحة الكتاكيت واكتشاف الأمراض مبكراً باستخدام الذكاء الاصطناعي.",
    discoverMore: "اكتشف المزيد", // ✅ إضافة مفتاح الترجمة للجوال
  },
  fr: {
    heroBadge: "Poultry 4.0 — La Révolution Agricole Numérique",
    heroTitle1: "L'Incubation Intelligente",
    heroTitle2: "Rooster Eye & Smart-Link",
    heroDesc: "Un système intégré basé sur une technologie IoT avancée pour surveiller et gérer à distance le climat des incubateurs 24h/24.",
    btnDiscover: "Découvrir l'innovation",
    btnVision: "Notre vision du futur",
    discoverBadge: "Découvrir l'innovation",
    discoverTitle: "Les Composants Essentiels du Système",
    discoverDesc: "Le système MR. ROOSTER repose sur deux piliers fondamentaux qui fonctionnent en parfaite harmonie.",
    eyeTitle: "ROOSTER EYE",
    eyeSubtitle: "L'œil intelligent",
    eyeDesc: "L'œil intelligent de l'incubateur — Surveille en temps réel la température, l'humidité et le CO₂, affiche les données sur un écran intégré, avec protection contre les coupures de courant et les pannes de ventilation. Envoie des notifications instantanées sur le téléphone en cas de variation significative de la température ou de l'humidité pour garantir la sécurité des poussins à tout moment.",
    eyeFeature1: "Alertes d'urgence intelligentes sur téléphone en cas de variation de température ou d'humidité",
    eyeFeature2: "Protection intelligente contre les pannes de courant et de ventilation",
    eyeFeature3: "Écran OLED pour l'affichage direct des données sur site",
    linkTitle: "Smart Controller",
    linkSubtitle: "contrôleur intelligent",
    linkDesc: "Dispositif de contrôle environnemental intelligent et autonome, conçu pour gérer et prendre soin des poussins de 1 à 30 jours. Il dispose d'un système de courbe de température automatique (Automated Temperature Curve), réduisant progressivement et précisément la température chaque jour (de 37°C dans les premiers jours pour s'adapter à l'immunité faible du poussin, jusqu'à 20°C à la fin de la croissance des plumes au 30ème jour). Le système automatise complètement les facteurs d'élevage critiques (chauffage, ventilation croisée pour prévenir l'accumulation d'ammoniac, régulation de l'humidité), réduisant ainsi le taux de mortalité au minimum et assurant une croissance saine et uniforme.",
    linkFeature1: "Courbe de température automatique (37°C à 20°C) sur 30 jours",
    linkFeature2: "Automatisation complète du chauffage, ventilation et humidité",
    linkFeature3: "Réduction du taux de mortalité et croissance saine uniforme",
    sec1Badge: "Équipement IoT",
    sec1Title1: "Appareil ROOSTER EYE",
    sec1Title2: "L'œil intelligent dans l'incubateur",
    sec1Desc: "Station de contrôle physique basée sur le processeur ESP32.",
    card1Title: "Algorithme PID avancé",
    card1Desc: "Contrôle intelligent des chauffages à ±0.1°C.",
    card2Title: "Protection d'urgence",
    card2Desc: "Systèmes de sécurité autonomes pour réagir instantanément.",
    sec2Badge: "Élevage Intelligent",
    sec2Title1: "Smart Brooder",
    sec2Title2: "Système d'élevage intelligent des poussins",
    sec2Desc: "Dispositif de contrôle environnemental intelligent pour l'élevage des poussins du premier jour au 30ème jour.",
    sec3Title: "Ingénierie environnementale durable",
    sec3Desc: "Inspiré des systèmes hydrauliques ancestraux, le système intègre un module d'humidité en circuit fermé.",
    visionTitle: "Notre vision : vers une ferme intelligente 100%",
    visionDesc: "Nous avançons à pas sûrs vers la construction d'un écosystème avicole intégré, du contrôle intelligent à la gestion sanitaire complète.",
    stage1Title: "01. Le Contrôleur Intelligent",
    stage1Desc: "Un contrôleur environnemental intelligent qui gère l'élevage des poussins de 1 à 30 jours, réduisant automatiquement la température via une courbe dynamique pour maximiser le taux de survie.",
    stage2Title: "02. Rooster Platform",
    stage2Desc: "Système intégré pour gérer les couveuses et écloseries du poussin d'un jour au mois.",
    stage3Title: "03. Santé des Poussins",
    stage3Desc: "Plateforme intelligente pour surveiller la santé des poussins et détecter précocement les maladies.",
    discoverMore: "En savoir plus", // ✅ الترجمة الفرنسية للجوال
  },
  en: {
    heroBadge: "Poultry 4.0 — The Digital Agricultural Revolution",
    heroTitle1: "Smart Incubation",
    heroTitle2: "Rooster Eye & Smart-Link",
    heroDesc: "A fully integrated system powered by advanced IoT technology for 24/7 remote monitoring and climate control of incubators.",
    btnDiscover: "Discover the Innovation",
    btnVision: "Our Vision for the Future",
    discoverBadge: "Discover the Innovation",
    discoverTitle: "The Core Components of the System",
    discoverDesc: "The MR. ROOSTER system is built on two fundamental pillars working in perfect harmony.",
    eyeTitle: "ROOSTER EYE",
    eyeSubtitle: "The Smart Eye",
    eyeDesc: "The Smart Eye inside the incubator — Monitors temperature, humidity, and CO₂ levels in real-time with a built-in display, featuring intelligent protection against power outages and ventilation failures. Sends instant phone notifications when temperature or humidity levels spike or drop unexpectedly, ensuring your chicks are safe at all times.",
    eyeFeature1: "Smart emergency alerts via phone when temperature or humidity changes",
    eyeFeature2: "Smart protection against power outages and ventilation failures",
    eyeFeature3: "OLED screen for direct data display at the production site",
    linkTitle: "Smart Controller",
    linkSubtitle: "Smart Controller",
    linkDesc: "An intelligent, standalone environmental control device designed to manage and care for chicks from day 1 to 30 days old. It features an Automated Temperature Curve system that gradually and precisely lowers the temperature daily (from 37°C in the early days to match the chick's weak immunity, down to 20°C when feather growth is complete on day 30). The system fully automates critical brooding factors (heating, cross-ventilation to prevent ammonia buildup, and humidity control), minimizing the mortality rate and ensuring healthy, uniform growth for pure breeds.",
    linkFeature1: "Automated temperature curve (37°C to 20°C) over 30 days",
    linkFeature2: "Full automation of heating, ventilation, and humidity",
    linkFeature3: "Minimized mortality rate and healthy uniform growth",
    sec1Badge: "IoT Hardware",
    sec1Title1: "ROOSTER EYE Device",
    sec1Title2: "The Smart Eye Inside the Incubator",
    sec1Desc: "Physical control station built on the ESP32 processor.",
    card1Title: "Advanced PID Algorithm",
    card1Desc: "Intelligent heater control within ±0.1°C.",
    card2Title: "Emergency Protection",
    card2Desc: "Autonomous safety systems for instant response.",
    sec2Badge: "Smart Brooding",
    sec2Title1: "Smart Controller",
    sec2Title2: "Smart Chick Brooding System",
    sec2Desc: "Intelligent environmental control device for raising chicks from day one to day thirty.",
    sec3Title: "Sustainable Environmental Engineering",
    sec3Desc: "Inspired by ancient hydraulic systems, our smart humidity module uses a closed-loop water recycling system.",
    visionTitle: "Our Vision: Toward a 100% Smart Farm",
    visionDesc: "We are steadily building an integrated poultry ecosystem, from smart control to comprehensive health management.",
    stage1Title: "01. Smart Brooder",
    stage1Desc: "A smart environmental controller that automates chick brooding from day 1 to 30, dynamically lowering the temperature day by day to ensure maximum survival and optimal growth.",
    stage2Title: "02. Rooster Platform",
    stage2Desc: "Integrated system to manage hatcheries and incubators from day-old chicks to one month old.",
    stage3Title: "03. Chick Health",
    stage3Desc: "Smart platform to monitor chick health and detect diseases early using artificial intelligence.",
    discoverMore: "Discover more", // ✅ الترجمة الإنجليزية للجوال
  },
};

export default function InnovationPage() {
  const [lang, setLang] = useState<SupportedLang>('ar');
  const [mounted, setMounted] = useState(false);
  const [selectedCard, setSelectedCard] = useState<'eye' | 'brooder' | null>(null);

  const detectLang = useCallback((): SupportedLang => {
    try {
      const keys = ['language', 'lang', 'i18n_lang', 'app-language', 'locale'];
      for (const key of keys) {
        const val = localStorage.getItem(key);
        if (val) return normalizeLang(val);
      }
      if (document.documentElement.lang) {
        return normalizeLang(document.documentElement.lang);
      }
    } catch { /* ignore */ }
    return 'ar';
  }, []);

  useEffect(() => {
    setMounted(true);
    setLang(detectLang());

    const handleStorage = (e: StorageEvent) => {
      const keys = ['language', 'lang', 'i18n_lang', 'app-language', 'locale'];
      if (keys.includes(e.key || '')) {
        setLang(normalizeLang(e.newValue));
      }
    };

    const handleCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setLang(normalizeLang(detail?.language || detail?.lang || detail));
    };

    const handleMutation = () => {
      const newLang = normalizeLang(document.documentElement.lang);
      setLang(prev => (prev !== newLang ? newLang : prev));
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('languageChanged', handleCustom);
    window.addEventListener('langchange', handleCustom);
    window.addEventListener('i18n-change', handleCustom);

    const observer = new MutationObserver(handleMutation);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    });

    const poll = setInterval(() => {
      const d = detectLang();
      setLang(prev => (prev !== d ? d : prev));
    }, 300);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('languageChanged', handleCustom);
      window.removeEventListener('langchange', handleCustom);
      window.removeEventListener('i18n-change', handleCustom);
      observer.disconnect();
      clearInterval(poll);
    };
  }, [detectLang]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, mounted]);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  const t = translations[lang];
  const isRTL = lang === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  const cards = [
    {
      id: 'eye' as const,
      title: t.eyeTitle,
      subtitle: t.eyeSubtitle,
      desc: t.eyeDesc,
      features: [t.eyeFeature1, t.eyeFeature2, t.eyeFeature3],
      icon: Eye,
      badge: 'IoT Device',
      badgeColor: 'bg-amber-500 text-black',
      iconColor: 'text-amber-500',
      bgGradient: 'from-amber-900/20 to-orange-900/20',
      borderHover: 'hover:border-amber-500/50',
      shadowHover: 'hover:shadow-amber-500/10',
      featureIcons: [Bell, ShieldCheck, Zap],
      featureColors: ['text-amber-500', 'text-green-500', 'text-blue-500'],
      image: '/images/eye.png',
    },
    {
      id: 'brooder' as const,
      title: t.linkTitle,
      subtitle: t.linkSubtitle,
      desc: t.linkDesc,
      features: [t.linkFeature1, t.linkFeature2, t.linkFeature3],
      icon: Cloud,
      badge: 'Smart Brooder',
      badgeColor: 'bg-purple-500 text-white',
      iconColor: 'text-purple-500',
      bgGradient: 'from-purple-900/20 to-blue-900/20',
      borderHover: 'hover:border-purple-500/50',
      shadowHover: 'hover:shadow-purple-500/10',
      featureIcons: [Wifi, Bell, Target],
      featureColors: ['text-cyan-500', 'text-red-500', 'text-purple-500'],
      image: '/images/smart.png',
    },
  ];

  return (
    <div dir={dir} lang={lang} className="min-h-screen bg-black text-white dark">

      {/* ══════ NAVBAR ══════ */}
      <Navbar />

      {/* ══════ HERO ══════ */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600 rounded-full blur-[128px]" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
            {t.heroBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
            {t.heroTitle1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
            {t.heroDesc}
          </p>
          
          {/* ✅ أزرار متجاوبة تماماً للجوال */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-xs sm:max-w-none mx-auto px-4 sm:px-0">
            <a 
              href="#discover" 
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 text-sm sm:text-base"
            >
              {t.btnDiscover}
              <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isRTL ? 'rotate-180' : ''} group-hover:translate-x-1`} />
            </a>
            <a 
              href="#vision" 
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-amber-500/40 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-all duration-300 font-semibold text-center text-sm sm:text-base"
            >
              {t.btnVision}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION: DISCOVER INNOVATION (2 بطاقات)           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section id="discover" className="py-16 sm:py-24 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* العنوان */}
          <div className="text-center mb-12 sm:mb-20 px-2">
            <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              {t.discoverBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
              {t.discoverTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2 sm:px-0">
              {t.discoverDesc}
            </p>
          </div>

          {/* البطاقتان - ✅ تنسيق محسن للجوال */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`group relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden ${card.borderHover} transition-all duration-500 hover:shadow-2xl ${card.shadowHover} cursor-pointer`}
              >
                {/* صورة الجهاز - ✅ ارتفاع أصغر للجوال */}
                <div className={`relative h-48 sm:h-56 md:h-80 bg-gradient-to-br ${card.bgGradient} overflow-hidden flex items-center justify-center`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain p-3 sm:p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 px-2 py-1 ${card.badgeColor} text-[10px] sm:text-xs font-black rounded-lg`}>
                    {card.badge}
                  </div>
                </div>

                {/* المحتوى المختصر - ✅ padding أصغر للجوال */}
                <div className="p-4 sm:p-5 md:p-8">
                  <div className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <card.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${card.iconColor}`} />
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight">{card.title}</h3>
                      <p className={`${card.iconColor} text-xs font-semibold hidden sm:block`}>{card.subtitle}</p>
                    </div>
                  </div>

                  {/* ✅ نص مختصر للجوال فقط (مخفي على الشاشات الكبيرة) */}
                  <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base sm:hidden line-clamp-2">
                    {card.desc.substring(0, 100)}...
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base hidden md:block line-clamp-3">
                    {card.desc}
                  </p>

                  <div className="space-y-3 md:space-y-4 hidden md:block">
                    {card.features.map((feat, idx) => (
                      <div key={idx} className={`flex items-start gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          {(() => {
                            const IconComponent = card.featureIcons[idx];
                            return <IconComponent className={`w-3 h-3 sm:w-4 sm:h-4 ${card.featureColors[idx]}`} />;
                          })()}
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">{feat}</p>
                      </div>
                    ))}
                  </div>

                  {/* ✅ رابط اكتشف المزيد المترجم للجوال */}
                  <div className="md:hidden mt-4 pt-3 border-t border-zinc-800/50">
                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${card.iconColor} ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {t.discoverMore} {/* ✅ استخدام الترجمة بدلاً من النص الثابت */}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ═════= MODAL ═════= */}
      <AnimatePresence>
        {selectedCard && (() => {
          const card = cards.find(c => c.id === selectedCard)!;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setSelectedCard(null)}
                  className={`absolute top-3 sm:top-4 ${isRTL ? 'left-3 sm:left-4' : 'right-3 sm:right-4'} z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition`}
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <div className={`relative h-40 sm:h-48 md:h-64 bg-gradient-to-br ${card.bgGradient} flex items-center justify-center`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain p-4 sm:p-8"
                  />
                  <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 ${card.badgeColor} text-[10px] sm:text-xs font-black rounded-lg`}>
                    {card.badge}
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className={`flex items-center gap-3 mb-3 sm:mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <card.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${card.iconColor}`} />
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">{card.title}</h3>
                      <p className={`${card.iconColor} text-xs sm:text-sm font-semibold`}>{card.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-justify sm:text-left">
                    {card.desc}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    {card.features.map((feat, idx) => (
                      <div key={idx} className={`flex items-start gap-2 sm:gap-3 bg-zinc-800/50 rounded-xl p-3 sm:p-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                          {(() => {
                            const IconComponent = card.featureIcons[idx];
                            return <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${card.featureColors[idx]}`} />;
                          })()}
                        </div>
                        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed flex-1">{feat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* ═════= SECTION 3: SUSTAINABLE ═════= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-5xl mx-auto text-center px-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <Droplets className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-8">
            {t.sec3Title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {t.sec3Desc}
          </p>
        </div>
      </section>

      {/* ═════= TIMELINE ═════= */}
      <section id="vision" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-amber-500 rounded-full blur-[150px] -translate-x-1/2" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-20 px-2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
              {t.visionTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
              {t.visionDesc}
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[2.25rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
            <div className="md:hidden absolute top-0 bottom-0 right-4 sm:right-8 w-0.5 bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-8">
              {[
                { icon: Cpu, title: t.stage1Title, desc: t.stage1Desc },
                { icon: Cloud, title: t.stage2Title, desc: t.stage2Desc },
                { icon: ShieldCheck, title: t.stage3Title, desc: t.stage3Desc },
              ].map((stage, i) => (
                <div key={i} className="relative flex md:flex-col items-center gap-4 sm:gap-6 md:gap-0">
                  <div className={`absolute right-4 sm:right-8 top-0 md:static md:mb-6 z-10 ${isRTL ? 'left-4 sm:left-8 right-auto' : ''}`}>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-500 border-2 sm:border-4 border-black shadow-[0_0_0_2px_rgba(245,158,11,0.2)] sm:shadow-[0_0_0_4px_rgba(245,158,11,0.2)]" />
                  </div>
                  <div className={`flex-1 md:text-center ${isRTL ? 'pr-12 sm:pr-16 pl-0 md:pr-0' : 'pr-12 sm:pr-16 md:pr-0'}`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mx-auto">
                      <stage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{stage.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════= FOOTER ═════= */}
      <footer className="border-t border-zinc-800 py-6 sm:py-8 px-4 sm:px-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} MR. ROOSTER — Poultry 4.0
      </footer>
    </div>
  );
}
