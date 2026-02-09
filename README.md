# Portfolio Boilerplate - Vanilla JavaScript

Un moderno portafolio personal construido con **HTML5 puro**, **CSS3**, y **Vanilla JavaScript** sin dependencias externas (excepto Font Awesome para iconos).

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Animaciones suaves con CSS puro
- 🌗 Tema oscuro elegante
- 📱 Totalmente responsive (mobile, tablet, desktop)
- ⚡ Performance optimizado (sin frameworks)
- ⚙️ JavaScript vanilla sin dependencias
- 🎯 Secciones: Hero, About, Projects, Contact, Footer
- 📧 Formulario de contacto funcional
- 🔗 Integración con redes sociales
- 🎪 Scroll animations e interactividad
- 🎯 Zero build configuration

## 📋 Requisitos Previos

- Node.js 14+ (opcional, solo para dev server)
- Navegador moderno
- Editor de texto (VS Code recomendado)

## 🔧 Instalación y Ejecución

### Opción 1: Servidor local (Recomendado para desarrollo)

```bash
npm install
npm run dev
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: Directamente en el navegador

Simplemente abre `index.html` en tu navegador (sin necesidad de servidor).

**Nota:** Algunos navegadores requieren servidor local para características modernas.

## 📁 Estructura del Proyecto

```
scicolone.dev/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos CSS puro
│   └── js/
│       └── main.js         # Lógica JavaScript vanilla
├── public/
│   ├── robots.txt          # Para SEO
│   └── sitemap.xml         # Para sitemap
├── vercel.json             # Configuración para Vercel
├── package.json            # Configuración del proyecto
└── README.md               # Este archivo
```

## 🎨 Personalización

Ver [CUSTOMIZATION.md](CUSTOMIZATION.md) para instrucciones detalladas de personalización.

Cambios rápidos:
- **Nombre**: Edita `index.html` línea ~39
- **Proyectos**: Edita array en `assets/js/main.js` línea ~4
- **Colores**: Edita CSS variables en `assets/css/styles.css` línea ~11
- **Email**: Edita `index.html` línea ~195

## 🚀 Despliegue en Vercel

### Método 1: Recomendado (Automático)

1. Sube a GitHub:
```bash
git push origin main
```

2. Ve a [Vercel.com](https://vercel.com) y conecta tu repositorio
3. Vercel detectará automáticamente que es un proyecto estático
4. Haz clic en "Deploy"

### Método 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Método 3: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Semántico y accesible
- **CSS3** - Animaciones, Grid, Flexbox
- **JavaScript Vanilla** - Sin dependencias
- **Font Awesome** - Iconos (CDN)

## 📊 Performance

Este portafolio está optimizado para:
- ⚡ Carga rápida (< 500ms)
- 📱 Mobile-first responsive
- ♿ Accesibilidad (WCAG)
- 🔍 SEO-friendly
- 💾 Bajo uso de datos (< 100KB)
- 🌍 Funciona sin JavaScript (con graceful degradation)

## 📦 Scripts Disponibles

```bash
npm run dev       # Iniciar servidor de desarrollo (puerto 8000)
npm run start     # Iniciar servidor a producción
npm run format    # Formatear código con Prettier
```

## 💡 Consejos

- **Prueba responsivo**: DevTools (F12) → Mobile view
- **Optimización SEO**: Actualiza `sitemap.xml` y `robots.txt`
- **Formulario de contacto**: Ver [CUSTOMIZATION.md](CUSTOMIZATION.md) paso 5
- **Imágenes**: Usa formato WebP para mejor performance

## 🚀 Próximas Mejoras Sugeridas

- [ ] Blog/Artículos section
- [ ] Soporte para modo claro (Light Mode toggle)
- [ ] Galería de imágenes mejorada
- [ ] Integración real con correo
- [ ] Analytics (Google Analytics)
- [ ] Búsqueda (Algolia)
- [ ] Internacionalización (i18n)
- [ ] Service Worker (PWA)

## 📄 Licencia

MIT - Siéntete libre de usar este código.

## 🤝 Contribuciones

Contribuciones bienvenidas. Por favor abre un issue o crea un pull request.

---

**Hecho con ❤️ usando Vanilla JavaScript**

Para más información sobre personalización, ver [CUSTOMIZATION.md](CUSTOMIZATION.md)


