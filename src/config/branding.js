// 🎨 CONFIGURACIÓN DE MARCA Y COLORES
// ====================================

export const brandConfig = {
  // 🏢 INFORMACIÓN DE LA EMPRESA
  company: {
    name: "Lexi",
    tagline: "Automatización de Anuncios IA",
    description: "Plataforma de automatización de anuncios con IA para Facebook e Instagram",
    website: "https://lexilexi.ai"
  },

  // 🎨 COLORES (Cambiar aquí para personalizar)
  colors: {
    primary: "#6366f1",        // Color principal (botones, enlaces)
    secondary: "#f3f4f6",      // Color secundario
    accent: "#8b5cf6",         // Color de acento
    background: "#ffffff",     // Fondo principal
    text: "#1f2937",          // Color de texto principal
    muted: "#6b7280"          // Texto secundario/deshabilitado
  },

  // 🖼️ LOGOS (URLs de imágenes)
  logos: {
    // Logo principal (header)
    main: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center",
    
    // Logo alternativo (footer, emails)
    secondary: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center",
    
    // Favicon
    favicon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=32&h=32&fit=crop&crop=center"
  },

  // 🎯 CALL TO ACTIONS
  cta: {
    primary: "Iniciar Prueba Gratuita",
    secondary: "Ver Demo",
    contact: "Contactar Ventas"
  }
};

// ✅ CÓMO PERSONALIZAR:
/*
1. CAMBIAR COLORES:
   - Modifica los valores en `colors`
   - Usa códigos HEX (#6366f1) o nombres CSS

2. CAMBIAR LOGOS:
   - Reemplaza las URLs en `logos`
   - Asegúrate que las imágenes sean accesibles públicamente

3. CAMBIAR TEXTOS:
   - Modifica `company.name` y `company.tagline`
   - Personaliza los CTAs en `cta`

4. APLICAR CAMBIOS:
   - Los cambios se aplican automáticamente
   - Reinicia el servidor si es necesario
*/
