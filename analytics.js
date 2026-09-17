/**
 * نظام التتبع الخفيف للأحداث التفاعلية وقمع التحويل
 */
const Analytics = {
  track: function(eventName, eventParams = {}) {
    // 1. تسجيل الحدث في وحدة التحكم للمطورين أثناء الفحص
    console.log(`[Event Tracked] ${eventName}:`, eventParams);

    // 2. إرسال الحدث إلى Google Analytics في حال وجوده
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }

    // 3. إرسال الحدث إلى Meta Pixel في حال وجوده
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, eventParams);
    }
  },

  // أحداث التحويل الأساسية
  heroCtaClick: () => Analytics.track('Hero_CTA_Click'),
  whatsappFloatClick: () => Analytics.track('WhatsApp_Floating_Click'),
  whatsappProductClick: (prodName) => Analytics.track('WhatsApp_Product_Inquiry', { product: prodName }),
  orderFormStarted: () => Analytics.track('Order_Form_Start'),
  orderSubmitted: (prodName) => Analytics.track('Order_Submitted_Success', { product: prodName }),
  phoneCallClick: () => Analytics.track('Direct_Phone_Call_Click')
};