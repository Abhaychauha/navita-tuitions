/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Vibrant Royal Blue
          600: '#2563EB', // Core Blue
          700: '#1D4ED8', // Rich Blue
          800: '#1E40AF', // Deep Royal Blue
          900: '#0F2C59', // Academic Navy
          950: '#0A192F', // Midnight Academic Blue
        },
        electric: {
          blue: '#2563EB',
          purple: '#7C3AED',
          indigo: '#4F46E5',
          cyan: '#0284C7',
          pink: '#DB2777',
          coral: '#E11D48',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Warm Amber Gold
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        whatsapp: {
          light: '#25D366',
          DEFAULT: '#25D366',
          dark: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 44, 89, 0.05)',
        'soft': '0 4px 20px -2px rgba(37, 99, 235, 0.08)',
        'card': '0 10px 30px -4px rgba(15, 44, 89, 0.08), 0 4px 12px -2px rgba(37, 99, 235, 0.04)',
        'card-hover': '0 20px 40px -8px rgba(15, 44, 89, 0.16), 0 8px 16px -4px rgba(37, 99, 235, 0.16)',
        'elevated': '0 25px 50px -12px rgba(15, 44, 89, 0.22)',
        'glow-blue': '0 0 25px -4px rgba(37, 99, 235, 0.45)',
        'glow-purple': '0 0 25px -4px rgba(124, 58, 237, 0.45)',
        'glow-amber': '0 0 25px -4px rgba(245, 158, 11, 0.45)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'float-badge': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
