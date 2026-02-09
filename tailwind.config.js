/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        hacker: {
          dark: '#0a0e27',
          darker: '#050812',
          accent: '#00ff41',
          cyan: '#00ffff',
          pink: '#ff006e',
          purple: '#9d00ff',
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 10px #00ff41',
        'neon-cyan': '0 0 10px #00ffff',
        'neon-pink': '0 0 10px #ff006e',
        glow: '0 0 20px rgba(0, 255, 65, 0.5)',
      },
      animation: {
        glitch: 'glitch 2s infinite',
        flicker: 'flicker 0.15s infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        scan: 'scan 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        flicker: {
          '0%': { opacity: '0.27207' },
          '5%': { opacity: '0.34769' },
          '10%': { opacity: '0.23604' },
          '15%': { opacity: '0.90626' },
          '20%': { opacity: '0.2559' },
          '25%': { opacity: '0.52559' },
          '30%': { opacity: '0.43915' },
          '35%': { opacity: '0.9854' },
          '40%': { opacity: '0.32291' },
          '45%': { opacity: '0.34939' },
          '50%': { opacity: '0.82683' },
          '55%': { opacity: '0.40719' },
          '60%': { opacity: '0.21313' },
          '65%': { opacity: '0.88839' },
          '70%': { opacity: '0.13395' },
          '75%': { opacity: '0.61514' },
          '80%': { opacity: '0.23957' },
          '85%': { opacity: '0.69386' },
          '90%': { opacity: '0.7999' },
          '95%': { opacity: '0.50364' },
          '100%': { opacity: '0.27207' },
        },
        scan: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
