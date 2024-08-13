/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'custom-cubic': 'cubic-bezier(0.41, 0.64, 0.32, 1.575)',
      },
      rotate: {
        '40': '40deg',
        '90': '90deg',
      },
      keyframes: {
        showRay: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        showRay: 'showRay 0.4s ease 1 forwards',
      },
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
  },
  plugins: [],
}

