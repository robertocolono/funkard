/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'funkard-yellow': '#FFCC00',
        brand: {
          yellow: "#f2b237",
          orange: "#ff9800",
          dark: "#0a0a0a",
          gray: "#1f1f1f",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(242,178,55,0.25)",
      },
      backgroundImage: {
        "gradient-funkard":
          "linear-gradient(135deg, rgba(242,178,55,1) 0%, rgba(255,152,0,1) 100%)",
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};