/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#E33A6D',
        black: '#161616',
        grey: '#7A7A7A',
      },
      fontFamily: {
        openSans: ['openSansRegular'],
      },
    },
  },
  plugins: [],
};
