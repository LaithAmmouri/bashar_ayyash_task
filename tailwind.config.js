const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        luckytrip: {
          DEFAULT: '#ff6068',
          '50': '#fff7f7',
          '100': '#ffeff0',
          '200': '#ffd7d9',
          '300': '#ffbfc3',
          '400': '#ff9095',
          '500': '#ff6068',
          '550': '#ff6161',
          '570': '#ff7b99',
          '600': '#e6565e',
          '700': '#bf484e',
          '800': '#993a3e',
          '900': '#7d2f33'
        }
      },
      animation: {
        'breathing': 'breathing 3s ease-out infinite'
      },
      keyframes: {
        breathing: {
          '0%': { transform: 'scale(0.9)' },
          '25%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(0.9)' }
        }
      },
      spacing:{
        '85': '22.438rem'
      },
      inset: {
        '3.5': '0.813rem',
        '4.5': '1.125rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-rtl"),
  ],
}
