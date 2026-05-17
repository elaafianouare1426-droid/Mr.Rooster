import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { BreedsSection } from "@/components/sections/breeds"
import { ProcessSection } from "@/components/sections/process"
// تم حذف VaccinationSection من هنا لإصلاح خطأ النظام
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BreedsSection />
      {/* هذا القسم يحتوي الآن على مراحل بيع البيض فقط كما صممناه سابقاً */}
      <ProcessSection /> 
      {/* تم إزالة VaccinationSection من هنا لمنع ظهور شاشة الخطأ السوداء */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}