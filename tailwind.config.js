/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // shadows & borders usate nelle card
    'shadow-dark-glow', 'shadow-light-soft',
    'border', 'border-gray-800', 'rounded-xl', 'rounded-2xl',
    // griglie e spacing
    'grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4', 'gap-6', 'gap-8',
    // background e testi brand
    'bg-funkard-black', 'bg-funkard-gray', 'bg-funkard-yellow',
    'text-funkard-yellow',
    // padding card
    'p-4','p-6','p-8','md:p-6',
    // hover effects
    'hover:scale-[1.02]', 'transition-transform',
    // text colors
    'text-gray-300', 'text-gray-400', 'text-gray-500',
    // spacing
    'py-section', 'mb-3', 'mb-2', 'mb-4', 'mb-6', 'mb-12',
    // layout
    'max-w-3xl', 'max-w-5xl', 'mx-auto', 'text-center',
    // custom drop shadows
    'drop-shadow-[0_0_15px_rgba(242,178,55,0.7)]',
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