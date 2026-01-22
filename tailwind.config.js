/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#050505', // Darker, deeper black
        'brand-light': '#f5f5f7', // Off-white
        'brand-accent': '#d4af37', // Metallic Gold
        'brand-accent-hover': '#b59326',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'], // Modern clean sans
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
