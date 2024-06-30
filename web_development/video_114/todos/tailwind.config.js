/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'mxl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'mlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mmd': {'max': '770px'},
      // => @media (max-width: 767px) { ... }

      'msm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [],
}