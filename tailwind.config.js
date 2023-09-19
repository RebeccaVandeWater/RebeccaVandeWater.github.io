/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        'satisfy': ['"Satisfy"', 'cursive'],
        'montserrat': ["'Montserrat'", 'sans-serif']
      },
    },
  },
  plugins: [
  ],
}

