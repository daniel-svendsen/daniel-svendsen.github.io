/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#f2f2f3',
        background: '#f2f2f3',
        textPrimary: '#111827',
        textSecondary: '#374151',
        borderColor: '#d1d5db',
        highlight: '#2563eb',
      },
      fontFamily: {
        poiret: ["'Poiret One'", 'sans-serif'],
      },
      spacing: {
        section: '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#1f2937',
              fontWeight: 'bold',
            },
            h2: {
              color: '#1f2937',
              fontWeight: 'semibold',
            },
            p: {
              color: '#374151',
            },
          },
        },
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        pop: 'pop 1.5s ease-in-out',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.2)',
            opacity: '1',
          },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
