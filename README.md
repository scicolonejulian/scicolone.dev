# Portfolio Boilerplate - Next.js

Un moderno boilerplate de portafolio personal construido con **Next.js 15**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Animaciones suaves con Framer Motion
- 🌗 Tema oscuro elegante
- 📱 Totalmente responsive (mobile, tablet, desktop)
- ⚡ Performance optimizado con Next.js 15
- 🎯 Secciones: Hero, About, Projects, Contact, Footer
- 📧 Formulario de contacto funcional
- 🔗 Integración con redes sociales
- 💻 TypeScript para mayor seguridad de tipos

## 📋 Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn

## 🔧 Instalación

1. **Clonar o descargar el proyecto**

```bash
cd scicolone.dev
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar el servidor de desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
scicolone.dev/
├── app/
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección principal
│   ├── About.tsx           # Sección sobre mí
│   ├── Projects.tsx        # Galería de proyectos
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
├── public/                 # Archivos estáticos
├── globals.css             # Estilos globales
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Personalización

### Cambiar nombre y información personal

Edita los siguientes componentes:
- [app/layout.tsx](app/layout.tsx) - Metadata del sitio
- [components/Hero.tsx](components/Hero.tsx) - Nombre y descripción principal
- [components/Navbar.tsx](components/Navbar.tsx) - Enlaces sociales
- [components/Contact.tsx](components/Contact.tsx) - Información de contacto
- [components/Footer.tsx](components/Footer.tsx) - Año y créditos

### Modificar proyectos

Edita el array `projects` en [components/Projects.tsx](components/Projects.tsx) con tus propios proyectos.

### Cambiar colores

Personaliza los colores en [tailwind.config.js](tailwind.config.js):

```js
colors: {
  dark: "#0f172a",
  darker: "#020617",
  accent: "#3b82f6", // Cambiar color principal
}
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **React 18** - Librería UI
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animaciones
- **React Icons** - Iconos
- **PostCSS** - Transformación CSS
- **Autoprefixer** - Prefijos CSS

## 📦 Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar linter
npm run format   # Formatear código con Prettier
```

## 🚀 Desplegar

### Vercel (Recomendado)

El boilerplate está optimizado para Vercel:

1. Sube el repositorio a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Haz clic en "Deploy"

### Otras plataformas

El proyecto puede desplegarse en:
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- **Firebase Hosting**

## 📝 Licencia

Este proyecto está bajo la licencia MIT - siéntete libre de usarlo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o crea un pull request.

---

**Hecho con ❤️ usando Next.js**
