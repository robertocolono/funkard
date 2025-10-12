/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        luckiest: ["Luckiest Guy", "cursive"],
      },
      colors: {
        "funkard-yellow": "#FFB300",
        "funkard-orange": "#FF7A00",
        "funkard-black": "#0C0C0C",
      },
    },
  },
  plugins: [],
};
