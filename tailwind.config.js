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
          deep: '#35150E',
          espresso: '#29100B',
          DEFAULT: '#35150E',
          brown: '#3B160D',
          hover: '#29100B',
          subtle: '#4A231A',
        },
        espresso: '#29100B',
        beige: {
          light: '#FBF5ED',
          DEFAULT: '#F5E9D8',
          dark: '#E7D7C2',
          border: '#E8DBC9',
        },
        ivory: {
          DEFAULT: '#FFFAF4',
          subtle: '#FBF4EB',
          surface: '#FFFFFF',
        },
        caramel: {
          DEFAULT: '#B77A45',
          light: '#CE935F',
          dark: '#965E2F',
        },
        sage: {
          DEFAULT: '#A6AD8A',
          light: '#CAD0B5',
          dark: '#7D8661',
        },
        aquatic: {
          deep: '#031E2A',
          navy: '#05293A',
          teal: '#0D9488',
          cyan: '#06B6D4',
          glow: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Manrope', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        ultra: '0.25em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(53, 21, 14, 0.04)',
        'luxury': '0 10px 30px -5px rgba(53, 21, 14, 0.08), 0 4px 10px -2px rgba(53, 21, 14, 0.04)',
        'elevation': '0 20px 45px -10px rgba(53, 21, 14, 0.12)',
      },
    },
  },
  plugins: [],
}
