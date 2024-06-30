/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      'smm': {'max': '639px'},
    },
  },
  plugins: [],
}