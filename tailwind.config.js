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
      animation: {
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      variants: {
        animation: ['motion-safe', 'motion-reduce']
      },
    },
  },
  plugins: [
  ],
}

