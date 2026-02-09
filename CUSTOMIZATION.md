# Guía de Personalización - Vanilla JavaScript Portfolio

Esta guía te ayudará a personalizar tu portafolio para que refleje tu identidad y trabajo único.

## 🎯 Paso 1: Información Personal

### Cambiar metadatos del sitio

En `index.html`, línea ~12:

```html
<title>Portfolio | Tu Nombre</title>
<meta name="description" content="Tu descripción aquí" />
```

## 🖼️ Paso 2: Sección Hero

En `index.html`, alrededor de línea ~49:

```html
<h2 class="hero-title">
  Hi, I am
  <span class="gradient-text">TU NOMBRE AQUÍ</span>
</h2>
<p class="hero-subtitle">
  TU ESPECIALIDAD O PROFESIÓN AQUÍ
</p>
```

## 📚 Paso 3: Sección About

En `index.html`, línea ~73:

```html
<p class="about-paragraph">
  TU DESCRIPCIÓN AQUÍ...
</p>
```

Cambiar skills en HTML (línea ~84):

```html
<div class="skills-grid">
  <span class="skill-tag">Mi Skill 1</span>
  <span class="skill-tag">Mi Skill 2</span>
  <span class="skill-tag">Mi Skill 3</span>
  <!-- Agregar más skills aquí -->
</div>
```

## 🚀 Paso 4: Proyectos

En `assets/js/main.js`, línea ~4, edita el array `projects`:

```javascript
const projects = [
  {
    id: 1,
    title: "Mi Proyecto Increíble",
    description: "Descripción breve del proyecto",
    tech: ["React", "Node.js", "MongoDB"],
    icon: "🚀", // Cambia a tu emoji favorito
    liveUrl: "https://tu-proyecto.com",
    githubUrl: "https://github.com/tuusuario/proyecto",
  },
  {
    id: 2,
    title: "Otro Proyecto",
    description: "Descripción...",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "⚡",
    liveUrl: "#",
    githubUrl: "#",
  },
  // Agrega más proyectos aquí
];
```

Emojis populares para proyectos:
- 🛒 E-commerce
- 💬 Chat / Mensajería
- 📱 App móvil
- 🎮 Juegos
- 🎨 Diseño
- 📊 Dashboard
- 🔐 Seguridad
- 🌐 Web app
- 📚 Blog
- 🎵 Música

## 📧 Paso 5: Contacto

En `index.html`, línea ~195:

```html
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>Tu Ciudad, País</p>
```

### Hacer funcional el formulario de contacto

**Opción A: Formspree (Recomendado)**

1. Ve a [formspree.io](https://formspree.io)
2. Créate una cuenta y nuevo formulario
3. Copia tu ID de formulario
4. En `index.html`, línea ~221, reemplaza:

```html
<form class="contact-form slide-right" action="https://formspree.io/f/TU_ID_AQUI" method="POST">
```

**Opción B: EmailJS**

1. Ve a [emailjs.com](https://emailjs.com)
2. Crea cuenta y obtén tus IDs
3. En `index.html`, antes de `</body>`, agrega:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

4. En `assets/js/main.js`, modifica `setupContactForm()`:

```javascript
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "tu@email.com",
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value,
    };

    try {
      await emailjs.send("SERVICE_ID", "TEMPLATE_ID", templateParams);
      alert("¡Mensaje enviado con éxito!");
      contactForm.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  });
}
```

## 🔗 Paso 6: Enlaces Sociales

En `index.html`:

- Línea ~36: GitHub
- Línea ~41: LinkedIn
- Línea ~46: Twitter

Reemplaza `#` con tus URLs:

```html
<a href="https://github.com/tuusuario" class="social-icon">
  <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/tuusuario" class="social-icon">
  <i class="fab fa-linkedin"></i>
</a>
<a href="https://twitter.com/tuusuario" class="social-icon">
  <i class="fab fa-twitter"></i>
</a>
```

## 🎨 Paso 7: Personalizar Colores

En `assets/css/styles.css`, línea ~11, edita `:root`:

```css
:root {
  --primary-color: #3b82f6;      /* Color principal */
  --primary-dark: #2563eb;       /* Color principal oscuro */
  --bg-dark: #0f172a;            /* Fondo oscuro */
  --bg-darker: #020617;          /* Fondo más oscuro */
  --bg-card: #1e293b;            /* Fondo de tarjetas */
  --text-light: #f1f5f9;         /* Texto claro */
  --text-muted: #a1aec6;         /* Texto atenuado */
  --accent: #3b82f6;             /* Color acentuado */
}
```

Esquemas de colores populares:

**Azul (Defecto)**
```css
--primary-color: #3b82f6;
--primary-dark: #2563eb;
```

**Rojo**
```css
--primary-color: #ef4444;
--primary-dark: #dc2626;
```

**Verde**
```css
--primary-color: #10b981;
--primary-dark: #059669;
```

**Púrpura**
```css
--primary-color: #a855f7;
--primary-dark: #7c3aed;
```

**Naranja**
```css
--primary-color: #f97316;
--primary-dark: #ea580c;
```

## 🔤 Paso 8: Cambiar Fuente

### Opción 1: Google Fonts

En `index.html`, antes de `</head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

En `assets/css/styles.css`, línea ~23:

```css
font-family: "Poppins", sans-serif;
```

### Opción 2: Fuente del Sistema

En `assets/css/styles.css`:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

## 🎯 Paso 9: Agregar Secciones Nuevas

### Agregar una nueva sección

1. En `index.html`, antes de `</main>`:

```html
<section id="blog" class="section blog">
  <div class="container">
    <h2 class="section-title">Blog <span class="accent">Posts</span></h2>
    <!-- Contenido aquí -->
  </div>
</section>
```

2. En `assets/js/main.js`:

```javascript
// Agregar función nueva si es necesaria
function setupBlog() {
  // Lógica del blog
}

// En la función init():
function init() {
  // ... código existente ...
  setupBlog();
}
```

3. En `assets/css/styles.css`:

```css
.blog {
  background: transparent;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
```

## 📱 Paso 10: Agregar Icono de Sitio (Favicon)

1. Crea una imagen PNG de 32x32 o usa [favicon-generator.org](https://favicon-generator.org)
2. Coloca en `public/favicon.ico`
3. En `index.html`, después de `<meta name>`:

```html
<link rel="icon" type="image/x-icon" href="public/favicon.ico">
```

## 🚀 Paso 11: Deploy

### A Vercel

```bash
npm install -g vercel
vercel
```

### A Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### A GitHub Pages

```bash
# Asegúrate que tienes git
git push origin main
# Activa Pages en settings del repositorio
```

## 💡 Consejos Final

- **Test responsivo**: Abre DevTools (F12) y prueba en diferentes tamaños
- **Performance**: Usa Lighthouse en Chrome DevTools
- **Accesibilidad**: Verifica contraste de colores
- **SEO**: Actualiza metadatos en `index.html`
- **Analíticas**: Agrega Google Analytics si deseas (opcional)

## 🔗 Recursos Útiles

- [Font Awesome Icons](https://fontawesome.com/icons) - Más iconos
- [Google Fonts](https://fonts.google.com) - Fuentes gratuitas
- [Coolors.co](https://coolors.co) - Paletas de colores
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Accesibilidad

---

¡Feliz personalización! 🎉

