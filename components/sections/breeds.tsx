"use client"

import { useState, useEffect } from "react"
import { X, Phone, MessageCircle, Info, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const breedsData = [
  {
    id: "australorp",
    names: { ar: "أسترالورب الأسود", en: "Black Australorp", fr: "Australorp Noir" },
    descriptions: { 
      ar: "تعتبر الأسترالورب الفخر الوطني لأستراليا، وهي حاملة الرقم القياسي العالمي في غزارة إنتاج البيض. هي سلالة نشيطة جداً وتمتاز بريش أسود كثيف بلمعة خضراء ساحرة.",
      en: "The national pride of Australia, holding the world record for egg production. Known for its climate adaptability and rapid growth.",
      fr: "Fierté nationale de l'Australie, détenant le record mondial de ponte. Connue pour sa grande adaptabilité climatique."
    },
    images: ["/images/breeds/A1.jpg", "/images/breeds/a2_optimized.png"],
    available: { eggs: true, chicks: true, hens: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "أستراليا", en: "Australia", fr: "Australie" }, icon: "🇦🇺" },
      { labels: { ar: "الإنتاج", en: "Production", fr: "Production" }, values: { ar: "قياسي", en: "Record", fr: "Record" }, icon: "🏆" }
    ]
  },
  {
    id: "farnsi",
    names: { ar: "الدجاج الفرنسي (لا ماران)", en: "Marans (Fawn Black)", fr: "La Marans (Fauve Noir)" },
    descriptions: { 
      ar: "سلالة فرنسية أصيلة وعريقة، تشتهر عالمياً بلقب 'دجاجة البيض الذهبي' لإنتاجها بيضاً فريداً بلون بني داكن يشبه الشوكولاتة.",
      en: "An authentic French breed, globally nicknamed the 'Golden Egg Hen' for its unique chocolate-brown eggs.",
      fr: "Race française authentique, surnommée mondialement 'la poule aux œufs d'or' pour ses œufs uniques brun chocolat."
    },
    images: ["/images/breeds/f11.png", "/images/breeds/f1.png", "/images/breeds/f14.png"],
    available: { eggs: true, chicks: true, hens: true },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "فرنسا", en: "France", fr: "France" }, icon: "🇫🇷" },
      { labels: { ar: "اللحم", en: "Meat", fr: "Viande" }, values: { ar: "فاخر", en: "Premium", fr: "Premium" }, icon: "🍗" }
    ]
  },
  {
    id: "leghorn",
    names: { ar: "لجهورن الذهبي", en: "Golden Leghorn", fr: "Leghorn Doré" },
    descriptions: { 
      ar: "الماكينة الإيطالية الشهيرة التي لا تتوقف عن العطاء. تنفرد اللجهورن برشاقتها العالية وجمال ريشها الذهبي المنقط.",
      en: "The famous Italian egg machine. Unique for its agility and spotted golden feathers.",
      fr: "La célèbre machine à œufs italienne. Unique par son agilité et son plumage doré tacheté."
    },
    images: ["/images/breeds/leg1.png", "/images/breeds/leghorn_dor2.png"],
    available: { eggs: true, chicks: true, hens: false },
    features: [
      { labels: { ar: "الأصل", en: "Origin", fr: "Origine" }, values: { ar: "إيطاليا", en: "Italy", fr: "Italie" }, icon: "🇮🇹" },
      { labels: { ar: "البيض", en: "Eggs", fr: "Œufs" }, values: { ar: "أبيض ناصع", en: "Pure White", fr: "Blanc Pur" }, icon: "🥚" }
    ]
  },
  {
    id: "isabrown",
    names: { ar: "إيزا براون", en: "Isa Brown", fr: "Isa Brown" },
    descriptions: { 
      ar: "ملكة الاستثمار في قطاع الدواجن بلا منازع. هي هجين فرنسي تم تطويره ليكون الأكثر موثوقية وإنتاجية للبيض البني في العالم.",
      en: "The undisputed queen of poultry investment. A French hybrid developed for reliable brown egg production.",
      fr: "La reine incontestée de l'investissement avicole. Hybride français développé pour la production d'œufs bruns."
    },
    images: ["/images/breeds/isa2.png", "/images/breeds/isa1.png"],
    available: { eggs: true, chicks: true, hens: true },
    features: [
      { labels: { ar: "النوع", en: "Type", fr: "Type" }, values: { ar: "هجين بياض", en: "Hybrid Layer", fr: "Hybride" }, icon: "🧬" },
      { labels: { ar: "التكيف", en: "Adaptability", fr: "Adaptabilité" }, values: { ar: "ممتاز", en: "Excellent", fr: "Excellent" }, icon: "🌍" }
    ]
  }
];

const PHONE_NUMBER = "+2126XXXXXXXX"
const WHATSAPP_NUMBER = "2126XXXXXXXX"

export function BreedsSection() {
  const [currentLang, setCurrentLang] = useState<"ar" | "en" | "fr">("fr");
  const [selectedBreed, setSelectedBreed] = useState<any>(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [orderModal, setOrderModal] = useState<any>(null);

  useEffect(() => {
    const updateLang = () => {
      const htmlLang = document.documentElement.lang as any;
      if (["ar", "en", "fr"].includes(htmlLang)) setCurrentLang(htmlLang);
    };
    updateLang();
    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  const ui = {
    fr: { 
      title: "Nos Races d'Élite", 
      subtitle: "Sélectionnées pour leur performance et leur robustesse",
      eggs: "Œufs", chicks: "Poussins", hens: "Poules", details: "Détails", 
      order: "Commander", about: "À propos", call: "Appel", whatsapp: "WhatsApp", selectOrder: "Que souhaitez-vous ?" 
    },
    ar: { 
      title: "سلالاتنا المتميزة", 
      subtitle: "مختارة بعناية لضمان أعلى مستويات الإنتاج والجودة",
      eggs: "البيض المخصب", chicks: "الكتاكيت", hens: "الدجاج", details: "التفاصيل", 
      order: "طلب الآن", about: "نبذة عن السلالة", call: "اتصال", whatsapp: "واتساب", selectOrder: "ماذا ترغب في طلبه؟" 
    },
    en: { 
      title: "Our Elite Breeds", 
      subtitle: "Handpicked for performance and resilience",
      eggs: "Eggs", chicks: "Chicks", hens: "Hens", details: "Details", 
      order: "Order Now", about: "About", call: "Call", whatsapp: "WhatsApp", selectOrder: "What would you like?" 
    }
  }[currentLang];

   return (
    <section 
      id="breeds" 
      dir={currentLang === "ar" ? "rtl" : "ltr"} 
      style={{ backgroundColor: '#fff1de' }}
      className="py-12 md:py-24"
    >
  
      <div className="max-w-6xl mx-auto px-4">
        
        {/* العنوان */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-orange-950 tracking-tight">
            {ui.title}
          </h2>
          <p className="mt-4 text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
            {ui.subtitle}
          </p>
          <div className="h-1.5 w-16 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* شبكة السلالات */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {breedsData.map((breed) => (
            <div 
              key={breed.id} 
              className="
                relative group 
                bg-white rounded-[2rem] 
                border border-gray-200 
                p-4 md:p-6 
                flex flex-col items-center text-center 
                hover:border-orange-400 
                transition-all duration-500 
                shadow-sm hover:shadow-xl
                hover:shadow-orange-100
              "
            >
              <div className="cursor-pointer flex-grow" onClick={() => { setSelectedBreed(breed); setSelectedImgIdx(0); }}>
                <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-50 rounded-full mx-auto mb-4 overflow-hidden border-2 border-transparent group-hover:border-orange-400 transition-all">
                  <img src={breed.images[0]} className="w-full h-full object-cover" alt="breed" />
                </div>
                <h3 className="font-bold text-xs md:text-lg mb-3 h-10 flex items-center justify-center leading-tight text-amber-950">
                  {breed.names[currentLang]}
                </h3>
                
                <div className="flex justify-center gap-4 mb-4">
                  <div className={`flex flex-col items-center ${!breed.available.eggs && 'opacity-20 grayscale'}`}>
                    <span className="text-xl">🥚</span>
                    <span className="text-[9px] font-black text-yellow-700">{ui.eggs}</span>
                  </div>
                  <div className={`flex flex-col items-center ${!breed.available.chicks && 'opacity-20 grayscale'}`}>
                    <span className="text-xl">🐥</span>
                    <span className="text-[9px] font-black text-orange-600">{ui.chicks}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => { setSelectedBreed(breed); setSelectedImgIdx(0); }} 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl h-10 font-bold"
              >
                {ui.details}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* مودال التفاصيل */}
      <AnimatePresence>
        {selectedBreed && (
          <div 
            onClick={() => setSelectedBreed(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-0 md:p-6 backdrop-blur-md"
          >
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} 
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl max-h-screen overflow-y-auto md:rounded-[3rem] relative shadow-2xl"
            >
              <button onClick={() => setSelectedBreed(null)} className="absolute top-6 right-6 z-[110] p-3 bg-black/20 rounded-full text-white">
                <X className="w-6 h-6"/>
              </button>

              <div className="relative aspect-square md:aspect-video bg-black overflow-hidden flex items-center justify-center">
                <motion.img
                  key={selectedImgIdx}
                  src={selectedBreed.images[selectedImgIdx]}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 md:p-12">
                <h2 className="text-2xl md:text-4xl font-black text-orange-600 mb-6">{selectedBreed.names[currentLang]}</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-widest text-[10px]">
                      <Info className="w-4 h-4"/> {ui.about}
                    </h4>
                    <p className="leading-relaxed text-sm md:text-lg text-gray-700">{selectedBreed.descriptions[currentLang]}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedBreed.features.map((f: any, i: number) => (
                      <div key={i} className="p-5 bg-orange-50 rounded-3xl border border-orange-100 flex items-center gap-4">
                        <span className="text-3xl">{f.icon}</span>
                        <div>
                          <span className="text-[10px] text-gray-500 block font-bold uppercase">{f.labels[currentLang]}</span>
                          <span className="font-bold text-orange-600 md:text-lg">{f.values[currentLang]}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <h4 className="text-center font-bold mb-6 text-amber-950">{ui.selectOrder}</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <Button onClick={() => setOrderModal({ b: selectedBreed.names[currentLang], t: ui.eggs })} disabled={!selectedBreed.available.eggs} variant="outline" className="h-24 rounded-3xl flex flex-col gap-2 border-2 border-gray-200 hover:border-orange-400">
                        <span className="text-2xl">🥚</span><span className="text-[10px] font-black">{ui.eggs}</span>
                      </Button>
                      <Button onClick={() => setOrderModal({ b: selectedBreed.names[currentLang], t: ui.chicks })} disabled={!selectedBreed.available.chicks} variant="outline" className="h-24 rounded-3xl flex flex-col gap-2 border-2 border-gray-200 hover:border-orange-400">
                        <span className="text-2xl">🐥</span><span className="text-[10px] font-black">{ui.chicks}</span>
                      </Button>
                      <Button onClick={() => setOrderModal({ b: selectedBreed.names[currentLang], t: ui.hens })} disabled={!selectedBreed.available.hens} variant="outline" className="h-24 rounded-3xl flex flex-col gap-2 border-2 border-gray-200 hover:border-orange-400">
                        <span className="text-2xl">🐔</span><span className="text-[10px] font-black">{ui.hens}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* مودال التواصل */}
      <AnimatePresence>
        {orderModal && (
          <div onClick={() => setOrderModal(null)} className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-6 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-[2.5rem] max-w-sm w-full text-center relative border border-gray-200 shadow-2xl">
              <button onClick={() => setOrderModal(null)} className="absolute top-6 right-6"><X/></button>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600"><ShoppingCart/></div>
              <h3 className="text-xl font-black mb-2 text-amber-950">{ui.order}</h3>
              <p className="text-sm text-gray-500 mb-8">{orderModal.b} - {orderModal.t}</p>
              <div className="grid gap-3">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center justify-center gap-3 p-4 bg-[#25D366] text-white rounded-2xl font-black"><MessageCircle className="w-5 h-5"/> {ui.whatsapp}</a>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-3 p-4 bg-orange-600 text-white rounded-2xl font-black"><Phone className="w-5 h-5"/> {ui.call}</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}