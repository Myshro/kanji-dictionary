/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        all: ['Noto Serif JP']
      }
    },
    container: {
    }
  },
  plugins: [],
}
