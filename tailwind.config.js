/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    'shadow-dark-glow', 'shadow-light-soft', 'shadow-card',
    'border', 'border-gray-800', 'rounded-xl', 'rounded-2xl',
    'grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4', 'gap-6', 'gap-8',
    'bg-funkard-black', 'bg-funkard-gray', 'bg-funkard-yellow',
    'text-funkard-yellow',
    'p-4','p-6','p-8','md:p-6',
    'hover:scale-[1.02]', 'transition-transform',
    'text-gray-300', 'text-gray-400', 'text-gray-500',
    'py-section', 'mb-3', 'mb-2', 'mb-4', 'mb-6', 'mb-12',
    'max-w-3xl', 'max-w-5xl', 'mx-auto', 'text-center',
    'drop-shadow-[0_0_15px_rgba(242,178,55,0.7)]',
  ],
  theme: {
    extend: {
      colors: {
        funkard: {
          yellow: "#f2b237",
          black: "#0b0b0b",
          white: "#ffffff",
          gray: {
            50: "#f9f9f9",
            100: "#f4f4f4",
            200: "#e6e6e6",
            300: "#d1d1d1",
            400: "#999999",
            500: "#666666",
            600: "#444444",
            700: "#2a2a2a",
            800: "#181818",
            900: "#111111",
          },
        },
        light: {
          bg: "#ffffff",
          text: "#0b0b0b",
          muted: "#555555",
          border: "#e6e6e6",
        },
        dark: {
          bg: "#0b0b0b",
          text: "#f1f1f1",
          muted: "#b3b3b3",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Luckiest Guy", "cursive"],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        DEFAULT: "0 2px 6px rgba(0,0,0,0.08)",
        md: "0 4px 10px rgba(0,0,0,0.1)",
        lg: "0 6px 15px rgba(0,0,0,0.15)",
        xl: "0 10px 25px rgba(0,0,0,0.2)",
        "funkard-glow": "0 0 20px rgba(242,178,55,0.25)",
      },
      transitionDuration: {
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      backgroundImage: {
        "funkard-gradient": "linear-gradient(135deg, #f2b237 0%, #ffd36e 100%)",
        "dark-gradient": "linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)",
      },
    },
  },
  plugins: [],
};