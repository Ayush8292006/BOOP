/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          DEFAULT: '#3B160D',
          dark: '#29150F',
          light: '#542416',
          hover: '#4C1F13',
          border: '#5C2D20',
        },
        espresso: '#29150F',
        beige: {
          light: '#FBF5ED',
          DEFAULT: '#F5E9D8',
          dark: '#E8D5BF',
          border: '#E2CEB7',
        },
        ivory: {
          DEFAULT: '#FFFAF4',
          subtle: '#FAF3EA',
          card: '#FFFDF9',
        },
        caramel: {
          DEFAULT: '#B77A45',
          light: '#D49764',
          dark: '#935B2B',
        },
        sage: {
          DEFAULT: '#A6AD8A',
          light: '#D2D8BE',
          dark: '#828B63',
        },
        aquatic: {
          dark: '#031E2A',
          deep: '#063A4F',
          teal: '#0D9488',
          cyan: '#06B6D4',
          glow: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(59, 22, 13, 0.05), 0 2px 6px -1px rgba(59, 22, 13, 0.03)',
        'card': '0 8px 30px rgba(59, 22, 13, 0.07)',
        'hover': '0 14px 40px -4px rgba(59, 22, 13, 0.12)',
        'float': '0 20px 50px -10px rgba(59, 22, 13, 0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
