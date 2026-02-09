// Configuración y constantes del portafolio

export const config = {
  siteName: "Portfolio",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_EMAIL || "your@email.com",
  phone: "+1 (234) 567-890",
  location: "Your City, Country",

  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
    "Git",
    "Docker",
  ],
};

export default config;
