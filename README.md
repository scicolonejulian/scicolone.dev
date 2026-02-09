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

## 📋 Requisitos Previos

- Node.js 14+ (opcional, solo para dev server)
- VS Code o algún editor de texto
- Navegador moderno

## 🔧 Instalación y Ejecución

### Opción 1: Usar un servidor local (Recomendado)

```bash
# Instalar dependencias (solo Prettier)
npm install

# Iniciar servidor de desarrollo en puerto 8000
npm run dev
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: Directamente en el navegador

Simplemente abre `index.html` en tu navegador (sin necesidad de servidor).

**Nota:** Algunos navegadores requieren servidor local para módulos ES6.

## 📁 Estructura del Proyecto

```
scicolone.dev/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos CSS (puro, sin Tailwind)
│   └── js/
│       └── main.js         # Lógica JavaScript
├── public/
│   ├── robots.txt          # Para SEO
│   └── sitemap.xml         # Para SEO
├── package.json            # Configuración del proyecto
└── README.md               # Este archivo
```

## 🎨 Personalización

### Cambiar nombre y información personal

Edita los siguientes elementos en `index.html`:
- Línea ~12: `<title>Portfolio | Your Name</title>`
- Línea ~39: `<h2 class="hero-title">` - Cambiar nombre
- Línea ~81: `<a href="mailto:your@email.com">` - Cambiar email
- Línea ~88: `<a href="tel:+1234567890">` - Cambiar teléfono
- Línea ~95: Cambiar ubicación

### Modificar proyectos

Edita el array `projects` en `assets/js/main.js` (línea ~4):

```javascript
const projects = [
  {
    id: 1,
    title: "Mi Proyecto",
    description: "Descripción del proyecto",
    tech: ["Tech1", "Tech2"],
    icon: "🎨", // O emoji que prefieras
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
  // más proyectos...
];
```

### Cambiar colores

Edita las variables CSS en `assets/css/styles.css` (línea ~11):

```css
:root {
  --primary-color: #3b82f6;    /* Azul principal */
  --primary-dark: #2563eb;     /* Azul oscuro */
  --accent: #3b82f6;           /* Color acentuado */
  /* ... más colores */
}
```

Colores populares:
- Rojo: `#ef4444`, `#dc2626`
- Verde: `#10b981`, `#059669`
- Púrpura: `#a855f7`, `#7c3aed`
- Naranja: `#f97316`, `#ea580c`

### Cambiar fuente

En `assets/css/styles.css`, línea ~23:

```css
font-family: "Tu Font", sans-serif;
```

O importa desde Google Fonts:

```html
<!-- En index.html, antes de </head> -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

## 📱 Funcionalidades

### Formulario de Contacto

El formulario está totalmente funcional. Para enviar emails realmente:

1. **Con Formspree** (Recomendado):
   - Ve a [formspree.io](https://formspree.io)
   - Crea un nuevo formulario
   - Reemplaza `<form>` en `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST" id="contactForm">
   ```

2. **Con EmailJS**:
   - Ve a [emailjs.com](https://emailjs.com)
   - Obtén tus credenciales
   - Añade el script en `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
   ```
   - Modifica `assets/js/main.js`:
   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     emailjs.send(...);
   };
   ```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Sube a GitHub
2. Conecta en [Netlify](https://netlify.com)
3. Haz clic en Deploy

### GitHub Pages

```bash
git subtree push --prefix . origin gh-pages
```

### Otras opciones

- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **DigitalOcean**
- **Heroku** (con simple servidor)

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Semántico y accesible
- **CSS3** - Animaciones, Grid, Flexbox
- **JavaScript Vanilla** - Sin dependencias
- **Font Awesome** - Iconos (CDN)

## 📊 Performance

Este portafolio está optimizado para:
- ⚡ Carga rápida (< 1s)
- 📱 Mobile-first responsive
- ♿ Accesibilidad (WCAG)
- 🔍 SEO-friendly
- 💾 Bajo uso de datos

## 📝 Scripts Disponibles

```bash
npm run dev       # Iniciar servidor de desarrollo
npm run build     # Build (verificación)
npm run format    # Formatear código
npm run lint      # Linter (verificación)
```

## 🚀 Próximas Mejoras Sugeridas

- [ ] Agregar blog/artículos
- [ ] Soporte para modo claro (Light Mode)
- [ ] Galería de imágenes mejorada
- [ ] Integración real con formulario de contacto
- [ ] Estadísticas (Google Analytics)
- [ ] Búsqueda (con Algolia)
- [ ] Dark/Light theme toggle
- [ ] Multi-idioma (i18n)
- [ ] Service Worker (PWA)
- [ ] Comentarios en blog

## 📄 Licencia

MIT - Siéntete libre de usar este código.

## 🤝 Contribuciones

Contribuciones bienvenidas. Por favor abre un issue o crea un pull request.

---

**Hecho con ❤️ usando Vanilla JavaScript**

Para más información sobre personalización, ver [CUSTOMIZATION.md](CUSTOMIZATION.md)

