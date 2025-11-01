/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          'dark': '#0a192f',
          'light': '#112240',
          'lighter': '#233554',
        },
        'slate': {
          'light': '#ccd6f6',
          'dark': '#8892b0',
        },
        'cyan': {
          'primary': '#64ffda',
          'secondary': '#4ec9b0',
        },
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'shimmer': 'shimmer 3s infinite',
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.2)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}

