/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fff0f3',
          100: '#ffdde4',
          200: '#ffc2cf',
          300: '#ff9eb3',
          400: '#ff6b8e',
          500: '#fa3d6e',
          600: '#e81e56',
          700: '#c41446',
          800: '#a31540',
          900: '#8b173c',
        },
        mist: {
          50: '#faf8ff',
          100: '#f3efff',
          200: '#e9e0ff',
          300: '#d6c8ff',
          400: '#bfa3ff',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 182, 193, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 182, 193, 0.6), 0 0 40px rgba(255, 182, 193, 0.2)' },
        }
      }
    },
  },
  plugins: [],
}