/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        all: ['Noto Serif JP']
      }
    },
    screens: {
      'avg': {'max': '2000px', 'max': '900px'}
    },
    container: {
    }
  },
  plugins: [],
}
