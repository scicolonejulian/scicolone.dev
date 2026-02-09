'use client';

import { useState, useEffect } from 'react';

/**
 * Componente Navbar con efecto terminal hacker
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-hacker-darker bg-opacity-95 shadow-neon' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <span className="text-hacker-cyan">&lt;</span>
            <span className="text-hacker-accent glitch" data-text="Scicolone.DEV">Scicolone.DEV</span>
            <span className="text-hacker-cyan">/&gt;</span>
          </h1>

          {/* Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setActiveSection(link)}
                className={`capitalize transition-all duration-200 text-sm ${
                  activeSection === link
                    ? 'text-hacker-accent shadow-neon'
                    : 'text-hacker-accent text-opacity-60 hover:text-opacity-100'
                }`}
              >
                <span className="text-hacker-pink">[</span>
                {link}
                <span className="text-hacker-pink">]</span>
              </a>
            ))}
          </div>

          {/* Social Icons Terminal Style */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-hacker-cyan hover:text-hacker-pink transition-all duration-200 text-opacity-70 hover:text-opacity-100"
              title="GitHub"
            >
              {'{ git }'}
            </a>
            <a
              href="#"
              className="text-hacker-cyan hover:text-hacker-pink transition-all duration-200 text-opacity-70 hover:text-opacity-100"
              title="LinkedIn"
            >
              {'[ in ]'}
            </a>
          </div>
        </div>
      </div>

      {/* Terminal line effect */}
      <div className="h-px bg-gradient-to-r from-transparent via-hacker-accent to-transparent opacity-30"></div>
    </nav>
  );
}
