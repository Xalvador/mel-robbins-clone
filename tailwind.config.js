/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD200',
          hover: '#E5BD00',
          light: '#FFF9D2',
          muted: '#FFF3A8',
        },
        cream: {
          DEFAULT: '#F8F5EE',
          light: '#FCFBF7',
          dark: '#F0ECE1',
        },
        dark: {
          DEFAULT: '#111111',
          soft: '#1A1A1A',
          gray: '#333333',
        },
        muted: {
          DEFAULT: '#6B6861',
          light: '#8F8B83',
          border: '#E5E0D5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Oswald', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        article: '1360px',
      },
      borderRadius: {
        'site': '1.25rem',
        'site-lg': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
