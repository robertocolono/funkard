/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'funkard-yellow': '#f2b237',
        'funkard-black': '#0b0b0b',
        'funkard-gray': '#1a1a1a',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        luckiest: ['"Luckiest Guy"', 'cursive'],
      },
      boxShadow: {
        'dark-glow': '0 0 15px rgba(242, 178, 55, 0.6)',
        'light-soft': '0 4px 10px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};