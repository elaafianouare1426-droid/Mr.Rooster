export type SupportedLang = 'ar' | 'fr' | 'en';

export interface InnovationTranslations {
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  btnDiscover: string;
  btnVision: string;
  sec1Badge: string;
  sec1Title1: string;
  sec1Title2: string;
  sec1Desc: string;
  card1Title: string;
  card1Desc: string;
  card2Title: string;
  card2Desc: string;
  sec2Badge: string;
  sec2Title1: string;
  sec2Title2: string;
  sec2Desc: string;
  feat1Title: string;
  feat1Desc: string;
  feat2Title: string;
  feat2Desc: string;
  sec3Title: string;
  sec3Desc: string;
  visionTitle: string;
  visionDesc: string;
  vCard1Title: string;
  vCard1Desc: string;
  vCard2Title: string;
  vCard2Desc: string;
  vCard3Title: string;
  vCard3Desc: string;
}

export const innovationTranslations: Record<SupportedLang, InnovationTranslations> = {
  ar: {
    heroBadge: "Poultry 4.0 — الثورة الزراعية الرقمية",
    heroTitle1: "التكليس الذكي",
    heroTitle2: "Rooster Eye & Smart-Link",
    heroDesc: "نظام متكامل يعتمد على تكنولوجيا إنترنت الأشياء (IoT) المتقدمة لمراقبة وإدارة مناخ الفقاسات عن بُعد على مدار الساعة، لضمان أعلى نسب تفقيس للسلالات الحرة والنقية في المغرب.",
    btnDiscover: "اكتشف الإبتكار",
    btnVision: "نظرتنا للمستقبل",
    sec1Badge: "أجهزة IoT",
    sec1Title1: "جهاز ROOSTER EYE",
    sec1Title2: "العين الذكية داخل الفقاسة",
    sec1Desc: "محطة تحكم فيزيائية متكاملة تعتمد على معالج ESP32 القوي. يقوم الجهاز برصد أدق التغيرات في البيئة الداخلية للحاضنة وعرضها مباشرة على شاشة OLED عالية التباين، مما يتيح تتبعاً حياً ومباشراً في مكان الإنتاج.",
    card1Title: "خوارزمية PID المتقدمة",
    card1Desc: "تحكم ذكي في السخانات للحفاظ على استقرار الحرارة بدقة تبلغ 0.1°C.",
    card2Title: "حماية ضد الطوارئ",
    card2Desc: "أنظمة أمان ذاتية للتعامل الفوري مع انقطاع التيار الكهربائي أو خلل التهوية.",
    sec2Badge: "المنصة السحابية",
    sec2Title1: "منصة Smart-Incubate Link",
    sec2Title2: "التحكم السحابي الكامل من أي مكان",
    sec2Desc: "هي لوحة التحكم الرقمية الخاصة بك، تم ربطها عبر بروتوكول MQTT السحابي فائق السرعة وتطويرها بـ Next.js. تتيح لك المنصة متابعة السجلات البيانية، وتلقي التنبيهات وإدارة أكثر من حاضنة في مزارع مختلفة بضغطة زر واحدة.",
    feat1Title: "مزامنة سحابية لحظية:",
    feat1Desc: "تحديث البيانات كل 5 ثوانٍ مع استهلاك شبكة شبه منعدم.",
    feat2Title: "إشعارات الطوارئ الذكية:",
    feat2Desc: "تنبيهات فورية عبر الواتساب في حال تخطي عتبات السلامة المحددة.",
    sec3Title: "هندسة بيئية مستدامة",
    sec3Desc: "مستوحى من الأنظمة الهيدروليكية العريقة والنافورات التاريخية؛ يدمج النظام وحدة رطوبة ذكية تعتمد على إعادة تدوير المياه في حلقة مغلقة، مما يقلل من هدر المياه بنسبة 60% ويمنع تراكم الأملاح الضارة بالحساسات.",
    visionTitle: "نظرتنا للمستقبل : نحو المزرعة المستقلة 100%",
    visionDesc: "ابتكاراتنا الحالية في Mr. Rooster هي حجر الأساس فقط. نحن نعمل على تطوير نظام بيئي متكامل مبني على الذكاء الإصطناعي (AI) لتقديم حلول إنتاجية رائدة في السوق المغربي والعالمي:",
    vCard1Title: "01. الإنتاج الصناعي",
    vCard1Desc: "الانتقال من مرحلة النماذج الأولية إلى الإنتاج الضخم للوحات تحكم قياسية مخصصة لشركات تصنيع الحاضنات العالمية.",
    vCard2Title: "02. كشف الأمراض المبكر",
    vCard2Desc: "دمج الكاميرات والحساسات الصوتية المدعومة بالذكاء الاصطناعي لتحليل سلوك الكتاكيت ورصد أي توعك صحي قبل انتشاره.",
    vCard3Title: "03. أتمتة الأمن الحيوي",
    vCard3Desc: "ربط أنظمة التلقيح البرمجية مع بوابات التطهير الآلي لضمان بيئة تربية خالية تماماً من المسببات المرضية الخارجية.",
  },
  fr: {
    heroBadge: "Poultry 4.0 — La Révolution Agricole Numérique",
    heroTitle1: "L'Incubation Intelligente",
    heroTitle2: "Rooster Eye & Smart-Link",
    heroDesc: "Un système intégré basé sur une technologie IoT avancée pour surveiller et gérer à distance le climat des incubateurs 24h/24, garantissant les meilleurs taux d'éclosion pour les races libres et pures au Maroc.",
    btnDiscover: "Découvrir l'innovation",
    btnVision: "Notre vision du futur",
    sec1Badge: "Équipement IoT",
    sec1Title1: "Appareil ROOSTER EYE",
    sec1Title2: "L'œil intelligent dans l'incubateur",
    sec1Desc: "Une station de contrôle physique intégrée basée sur le puissant processeur ESP32. L'appareil détecte les moindres variations de l'environnement interne et les affiche en direct sur un écran OLED haute contraste, pour un suivi en temps réel directement sur site.",
    card1Title: "Algorithme PID avancé",
    card1Desc: "Contrôle intelligent des chauffages pour maintenir une température stable à ±0.1°C.",
    card2Title: "Protection d'urgence",
    card2Desc: "Systèmes de sécurité autonomes pour réagir instantanément aux coupures de courant ou pannes de ventilation.",
    sec2Badge: "Plateforme Cloud",
    sec2Title1: "Plateforme Smart-Incubate Link",
    sec2Title2: "Contrôle total depuis n'importe où",
    sec2Desc: "Votre tableau de bord numérique connecté via le protocole MQTT ultra-rapide et développé en Next.js. Suivi des graphiques en temps réel, alertes instantanées et gestion multi-incubateurs sur plusieurs fermes en un clic.",
    feat1Title: "Synchronisation cloud instantanée :",
    feat1Desc: "Mise à jour des données toutes les 5 secondes avec une consommation réseau quasi nulle.",
    feat2Title: "Alertes d'urgence intelligentes :",
    feat2Desc: "Notifications instantanées par WhatsApp en cas de dépassement des seuils de sécurité.",
    sec3Title: "Ingénierie environnementale durable",
    sec3Desc: "Inspiré des systèmes hydrauliques ancestraux et fontaines historiques, le système intègre un module d'humidité intelligent en circuit fermé recyclant l'eau, réduisant le gaspillage de 60% et évitant l'accumulation de sel nuisible aux capteurs.",
    visionTitle: "Notre vision : vers la ferme 100% autonome",
    visionDesc: "Nos innovations actuelles chez Mr. Rooster ne sont que la première pierre. Nous développons un écosystème complet basé sur l'IA pour offrir des solutions de production leaders au Maroc et dans le monde :",
    vCard1Title: "01. Production industrielle",
    vCard1Desc: "Passage des prototypes à la production de masse de cartes de contrôle standardisées pour les fabricants mondiaux d'incubateurs.",
    vCard2Title: "02. Détection précoce des maladies",
    vCard2Desc: "Intégration de caméras et capteurs sonores IA pour analyser le comportement des poussins et détecter tout problème de santé avant propagation.",
    vCard3Title: "03. Biosécurité automatisée",
    vCard3Desc: "Connexion des systèmes de vaccination programmée aux portiques de désinfection automatique pour une biosécurité totale.",
  },
  en: {
    heroBadge: "Poultry 4.0 — The Digital Agricultural Revolution",
    heroTitle1: "Smart Incubation",
    heroTitle2: "Rooster Eye & Smart-Link",
    heroDesc: "A fully integrated system powered by advanced IoT technology for 24/7 remote monitoring and climate control of incubators — ensuring the highest hatching rates for free-range and pure breeds in Morocco.",
    btnDiscover: "Discover the Innovation",
    btnVision: "Our Vision for the Future",
    sec1Badge: "IoT Hardware",
    sec1Title1: "ROOSTER EYE Device",
    sec1Title2: "The Smart Eye Inside the Incubator",
    sec1Desc: "A complete physical control station built on the powerful ESP32 processor. It detects the slightest environmental changes inside the incubator and displays them live on a high-contrast OLED screen — enabling real-time monitoring directly at the production site.",
    card1Title: "Advanced PID Algorithm",
    card1Desc: "Intelligent heater control maintaining temperature stability within ±0.1°C.",
    card2Title: "Emergency Protection",
    card2Desc: "Autonomous safety systems for instant response to power outages or ventilation failures.",
    sec2Badge: "Cloud Platform",
    sec2Title1: "Smart-Incubate Link Platform",
    sec2Title2: "Full Cloud Control from Anywhere",
    sec2Desc: "Your digital dashboard connected via ultra-fast MQTT protocol and built with Next.js. Monitor real-time charts, receive instant alerts, and manage multiple incubators across different farms with a single tap.",
    feat1Title: "Real-time Cloud Sync:",
    feat1Desc: "Data updates every 5 seconds with near-zero network usage.",
    feat2Title: "Smart Emergency Alerts:",
    feat2Desc: "Instant WhatsApp notifications when safety thresholds are breached.",
    sec3Title: "Sustainable Environmental Engineering",
    sec3Desc: "Inspired by ancient hydraulic systems and historic fountains, our smart humidity module uses a closed-loop water recycling system — reducing water waste by 60% and preventing harmful salt buildup on sensors.",
    visionTitle: "Our Vision: Toward the 100% Autonomous Farm",
    visionDesc: "Today's Mr. Rooster innovations are just the foundation. We are building a complete AI-powered ecosystem to deliver world-leading production solutions in Morocco and beyond:",
    vCard1Title: "01. Industrial Production",
    vCard1Desc: "Scaling from prototypes to mass production of standardized control boards for global incubator manufacturers.",
    vCard2Title: "02. Early Disease Detection",
    vCard2Desc: "AI-powered cameras and sound sensors to analyze chick behavior and detect health issues before they spread.",
    vCard3Title: "03. Automated Biosecurity",
    vCard3Desc: "Linking programmed vaccination systems with automated disinfection gates for pathogen-free farming environments.",
  },
};