/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    // screens: {
    //   '2xlm': {'max': '1535px'},
    //   // => @media (max-width: 1535px) { ... }

    //   'xlm': {'max': '1279px'},
    //   // => @media (max-width: 1279px) { ... }

    //   'lgm': {'max': '1023px'},
    //   // => @media (max-width: 1023px) { ... }

    //   'mdm': {'max': '767px'},
    //   // => @media (max-width: 767px) { ... }

    //   'smm': {'max': '639px'},
    //   // => @media (max-width: 639px) { ... }
    // },
  },
  plugins: [],
};
