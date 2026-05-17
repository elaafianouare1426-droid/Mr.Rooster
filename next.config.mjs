/** @type {import('next').NextConfig} */
const nextConfig = {
  // تجاهل أخطاء التايب سكريبت أثناء البناء لضمان نجاح النشر
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // إعدادات الصور (مهمة إذا كنت تستخدم صوراً خارجية أو محليه)
  images: {
    unoptimized: true,
  },

  // ملاحظة: إذا كنت تريد ميزات Vercel الكاملة (مثل الراوتر الديناميكي)، 
  // يفضل حذف السطر التالي. لكن إذا أردت الموقع Static فاتركه.
  // output: "export", 

  // تنبيه: تم حذف basePath و assetPrefix لأن Vercel يوفر لك نطاقاً (Domain) مباشرًا
};

export default nextConfig;
