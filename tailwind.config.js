/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "grid", "grid-cols-1", "grid-cols-3", "md:grid-cols-3", "gap-6", "gap-8",
    "px-8", "py-4", "rounded-xl",
    "text-funkard-yellow", "border-funkard-yellow",
    "flex", "flex-col", "md:flex-row",
    "hidden", "md:flex", "md:hidden",
    "flex-1", "mt-16", "max-w-6xl", "mx-auto",
  ],
  theme: {
    extend: {
      colors: {
        'funkard-yellow': '#FFCC00',
        funkard: {
          yellow: "#F5C242",
        },
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