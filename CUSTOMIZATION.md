# Guía de Personalización

Esta guía te ayudará a personalizar tu portafolio para que refleje tu identidad y trabajo.

## 🎯 Paso 1: Información Personal

### Actualizar metadatos del sitio

En `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Portfolio | Tu Nombre", // Cambiar aquí
  description: "Tu descripción personalizada", // Cambiar aquí
  keywords: "tus, palabras, clave", // Cambiar aquí
};
```

## 🖼️ Paso 2: Sección Hero

En `components/Hero.tsx`, actualiza:

```jsx
<h2 className="text-6xl md:text-7xl font-bold mb-6">
  Hi, I am{" "}
  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
    TU NOMBRE AQUÍ
  </span>
</h2>
<p className="text-xl md:text-2xl text-gray-300 mb-8">
  TU TÍTULO/ESPECIALIDAD AQUÍ
</p>
```

## 📚 Paso 3: Sección Acerca de Mí

En `components/About.tsx`:

```jsx
<p className="text-gray-300 text-lg mb-6">
  TU DESCRIPCIÓN AQUÍ...
</p>

// Actualiza el array de skills
const skills = [
  "Tu", "Habilidad", "1", "Habilidad", "2", // ...
];
```

## 🚀 Paso 4: Proyectos

En `components/Projects.tsx`, reemplaza el array `projects`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Mi Proyecto Increíble",
    description: "Descripción del proyecto",
    image: "URL de la imagen",
    tech: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
  // más proyectos...
];
```

## 📧 Paso 5: Contacto

En `components/Contact.tsx`, actualiza:

```jsx
<a href="mailto:tu@email.com" className="...">
  tu@email.com
</a>

<a href="tel:+1234567890" className="...">
  +1 (234) 567-890
</a>

<p className="text-white">Tu Ciudad, País</p>
```

## 🔗 Paso 6: Enlaces Sociales

En `components/Navbar.tsx` y `components/Footer.tsx`, actualiza las URLs:

```jsx
<a href="https://github.com/tuusuario" className="...">
  <FaGithub size={20} />
</a>

<a href="https://linkedin.com/in/tuusuario" className="...">
  <FaLinkedin size={20} />
</a>

<a href="https://twitter.com/tuusuario" className="...">
  <FaTwitter size={20} />
</a>
```

## 🎨 Paso 7: Personalizar Colores

En `tailwind.config.js`, cambia el color principal:

```javascript
theme: {
  extend: {
    colors: {
      accent: "#ff6b6b", // Cambiar color aquí
    },
  },
},
```

## 📧 Paso 8: Integraciones (Opcional)

### EmailJS

Para que el formulario de contacto funcione:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com)
2. Obtén tus credenciales
3. Actualiza `.env.local`:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_clave_publica
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
```

4. Instala EmailJS:

```bash
npm install @emailjs/browser
```

5. Integra en `components/Contact.tsx`:

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    alert("Mensaje enviado exitosamente!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error:", error);
    alert("Error al enviar el mensaje");
  }
};
```

## 🚀 Paso 9: Deploy en Vercel

1. Sube tu código a GitHub
2. Ve a [Vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Acciona Deploy

## 💡 Consejos Finales

- **Optimización de imágenes**: Usa Next.js Image component para mejor rendimiento
- **SEO**: Actualiza `sitemap.xml` y `robots.txt`
- **Performance**: Usa Lighthouse para auditar tu sitio
- **Responsivo**: Prueba en diferentes dispositivos

---

¡Feliz personalización! 🎉
