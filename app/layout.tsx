import type { Metadata, Viewport } from 'next'
import { Poppins, Noto_Sans_Arabic } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/language-context'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-poppins" 
});
const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"], 
  weight: ["400", "700"], 
  variable: "--font-arabic" 
});

// هذا هو الجزء المسؤول عن إضافة الشعار (Favicon)
export const metadata: Metadata = {
  title: 'Mr.Rooster Poultry Farm | Healthy Poultry, Strong Breeds',
  description: 'Trusted Poultry Farm in Morocco',
  // تم إضافة مسار الشعار هنا
  icons: {
    icon: [
      {
        url: '/images/logo.png', // تأكد من وضع صورة الشعار في هذا المسار تماماً
        href: '/images/logo.png',
      },
    ],
    // اختياري: لأجهزة أبل
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF9900',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} ${notoSansArabic.variable} antialiased overflow-x-hidden relative w-full`}>
        <LanguageProvider>
          {/* محتويات الصفحة */}
          <main className="min-h-screen w-full overflow-x-hidden">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}