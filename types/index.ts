// Tipos personalizados para el portafolio

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
