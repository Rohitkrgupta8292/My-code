/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      width:{
        inherit: "inherit",
        px_70: "70px"
      },
      screens: {
        'm2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mxl': {'max': '1300px'},
        // => @media (max-width: 1279px) { ... }
  
        'mlg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mmd': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'msm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'mesm': {'max': '570px'},
        // => @media (max-width: 570px) { ... }
        'meesm': {'max': '530px'},
        // => @media (max-width: 570px) { ... }
        'mmm': {'max': '335px'},
        // => @media (max-width: 450px) { ... }

        'tallxl': { 'raw': '(min-height: 1200px)' },
        // => @media (min-height: 800px) { ... }
        'talllg': { 'raw': '(min-height: 1023px)' },
        // => @media (min-height: 800px) { ... }
      }  
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

