"use client"

import { useState } from "react"
import { Phone, Mail, Send, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const { dictionary, isRtl } = useLanguage()

  // 1. تجميع بيانات الحقول تلقائياً
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "visit",
    message: ""
  })

  // 2. دالة التعامل مع إرسال الإيميل للمستلم الجديد
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // الإيميل الرسمي الجديد الخاص بك
    const myEmail = "service@mrrooster.com" 
    
    const subjectText = formData.subject === "visit" ? "Request a Visit Appointment" : "General Inquiry"
    const emailBody = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    
    window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isRtl ? 'direction-rtl' : ''}`}>
          
          <div className={`space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl font-black text-orange-950">
              {isRtl ? <>اتصل <span className="text-orange-600">بنا</span></> : <>Contact <span className="text-orange-600">Us</span></>}
            </h2>
            
            {/* عرض الأيقونات التفاعلية مع الرقم الجديد */}
            <div className="grid grid-cols-2 gap-4 text-center">
              {/* رابط الواتساب المباشر مع الرقم الجديد ورسالة مسبقة */}
              <a 
                href="https://wa.me/212635064213?text=Bonjour%20Mr.Rooster%2C%20je%20souhaite%20avoir%20plus%20d%27informations." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white border border-orange-100 rounded-[2rem] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-green-100">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="font-bold text-orange-950 text-[10px] sm:text-xs uppercase tracking-tighter">WhatsApp</span>
              </a>

              {/* رابط الاتصال الهاتفي المباشر بالرقم الجديد */}
              <a 
                href="tel:+212635064213" 
                className="flex flex-col items-center p-4 bg-white border border-orange-100 rounded-[2rem] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-orange-100">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="font-bold text-orange-950 text-[10px] sm:text-xs uppercase tracking-tighter">Call</span>
              </a>
            </div>
          </div>

          {/* نموذج المراسلة الفعلي */}
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-orange-50 shadow-2xl shadow-orange-900/5">
            <div className={`flex items-center gap-3 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-950">{isRtl ? 'أرسل رسالة' : 'Send Message'}</h3>
            </div>
            
            <form onSubmit={handleEmailSubmit} className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder={isRtl ? 'الاسم' : 'Name'} 
                  className="w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500" 
                />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder={isRtl ? 'البريد الإلكتروني' : 'Email'} 
                  className="w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500" 
                />
              </div>

              <select 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className={`w-full h-12 px-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500 appearance-none bg-white font-medium text-orange-900/70 ${isRtl ? 'text-right pr-4' : 'text-left pl-4'}`}
              >
                <option value="visit">{isRtl ? 'طلب موعد زيارة مسبق' : 'Request a Visit Appointment'}</option>
                <option value="general">{isRtl ? 'استفسار عام' : 'General Inquiry'}</option>
              </select>

              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder={isRtl ? 'أكتب رسالتك هنا...' : 'Tell us about your requirements...'} 
                className="w-full p-4 rounded-xl border border-orange-100 min-h-[100px] outline-none focus:border-orange-500 resize-none"
              ></textarea>
              
              <button type="submit" className={`w-full h-14 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                {isRtl ? 'إرسال لطلب موعد أو زيارة' : 'Send for appointment or visit'} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
