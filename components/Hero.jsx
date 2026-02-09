'use client';

import { useEffect, useState } from 'react';

/**
 * Hero Section con efecto de terminal y animaciones hacker
 */
export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '> system.initialize()';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Matrix background */}
      <div className="matrix-bg"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full border-t border-hacker-accent"
              style={{
                top: `${(i + 1) * 5}%`,
                animation: `flicker ${2 + i * 0.1}s infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Terminal-like container */}
        <div className="bg-hacker-dark border-2 border-hacker-accent rounded-lg p-12 shadow-neon backdrop-blur-sm">
          {/* Terminal header */}
          <div className="flex gap-2 mb-6 pb-4 border-b border-hacker-accent border-opacity-30">
            <div className="w-3 h-3 rounded-full bg-hacker-pink"></div>
            <div className="w-3 h-3 rounded-full bg-hacker-accent"></div>
            <div className="w-3 h-3 rounded-full bg-hacker-cyan"></div>
          </div>

          {/* Typing effect */}
          <div className="text-left font-mono text-sm mb-8 min-h-6">
            <span className="text-hacker-cyan">$</span>
            <span className="ml-2 text-hacker-accent">{displayedText}</span>
            <span className="animate-pulse ml-1">_</span>
          </div>

          {/* Main text */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-hacker-cyan">$</span>
            {' '}
            <span
              className="glitch inline-block"
              data-text="WELCOME"
              style={{ '--text-color': '#00ff41' }}
            >
              WELCOME
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-hacker-accent mb-8 font-mono">
            <span className="text-hacker-pink">{'>'}</span> Full Stack Developer | Security Enthusiast | Open Source
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#projects" className="btn-hacker">
              {'>> BROWSE_PROJECTS()'}
            </a>
            <a href="#contact" className="btn-hacker">
              {'>> SEND_MESSAGE()'}
            </a>
          </div>

          {/* Terminal footer */}
          <div className="mt-8 pt-4 border-t border-hacker-accent border-opacity-30 text-left font-mono text-xs text-hacker-accent text-opacity-60">
            <div>{'// Access Level: PUBLIC'}</div>
            <div>{'// Last Update: 2024-02-09'}</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-hacker-cyan opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-hacker-pink opacity-10 animate-pulse"></div>
    </section>
  );
}
