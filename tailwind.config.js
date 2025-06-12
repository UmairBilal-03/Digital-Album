/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'script': ['Great Vibes', 'cursive'],
        'elegant': ['Lora', 'serif'],
      },
      colors: {
        vintage: {
          brown: '#8B4513',
          cream: '#F5F5DC',
          sepia: '#704214',
          gold: '#DAA520',
          paper: '#FDF6E3',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'page-flip': 'pageFlip 0.8s ease-in-out',
        'envelope-drop': 'envelopeDrop 2s ease-out',
        'letter-unfold': 'letterUnfold 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pageFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(-180deg)' },
        },
        envelopeDrop: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: 0 },
          '70%': { transform: 'translateY(20px) rotate(5deg)', opacity: 1 },
          '100%': { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
        },
        letterUnfold: {
          '0%': { transform: 'scale(0.8) rotateX(45deg)', opacity: 0 },
          '100%': { transform: 'scale(1) rotateX(0deg)', opacity: 1 },
        }
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
};