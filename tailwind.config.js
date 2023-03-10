/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
    './src/sections/**/*.{html,js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      screens: {
        'xs': {'min': '300px','max': '500px'},
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
