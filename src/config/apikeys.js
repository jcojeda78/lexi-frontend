// 🔑 CONFIGURACIÓN DE API KEYS
// ===========================

export const apiConfig = {
  // 🌐 BACKEND
  backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001',

  // 📊 ANALYTICS (Opcional)
  analytics: {
    // Google Analytics
    googleAnalyticsId: process.env.REACT_APP_GA_ID || null,
    
    // Facebook Pixel
    facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID || null,
    
    // Hotjar
    hotjarId: process.env.REACT_APP_HOTJAR_ID || null
  },

  // 💳 PAGOS (Opcional)
  payments: {
    // Stripe Public Key
    stripePublicKey: process.env.REACT_APP_STRIPE_PUBLIC_KEY || null
  },

  // 💬 CHAT/SOPORTE (Opcional)
  support: {
    // Intercom
    intercomAppId: process.env.REACT_APP_INTERCOM_APP_ID || null,
    
    // Crisp
    crispWebsiteId: process.env.REACT_APP_CRISP_WEBSITE_ID || null
  }
};

// ✅ CÓMO CONFIGURAR LAS API KEYS:
/*
MÉTODO 1 - Variables de entorno (.env):
REACT_APP_GA_ID=G-XXXXXXXXXX
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_xxxxx
REACT_APP_FB_PIXEL_ID=xxxxxxxxxx

MÉTODO 2 - Editar directamente aquí:
googleAnalyticsId: "G-XXXXXXXXXX",
stripePublicKey: "pk_test_xxxxx",

NOTA: Solo las variables que empiecen con REACT_APP_ 
      funcionarán en producción.
*/

export default apiConfig;

