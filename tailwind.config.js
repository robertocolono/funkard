/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 🎨 FUNKARD BRAND COLORS
        primary: {
          DEFAULT: "#f2b237", // giallo Funkard
          light: "#ffcc4d",   // hover/gradient light
          dark: "#d99c2f",    // gradient dark
        },
        accent: {
          DEFAULT: "#ff7a00", // arancio complementare
          light: "#ffa733",
        },
        dark: {
          DEFAULT: "#0b0b0b", // sfondo principale
          deep: "#0c0c0c",    // variante profonda
          card: "#121212",    // superfici (input/box)
        },
        neutral: {
          white: "#ffffff",
          gray: "#b3b3b3",
        },
        success: "#22c55e",
        error: "#ef4444",
        funkard: {
          yellow: "#f2b237",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        luckiest: ["Luckiest Guy", "cursive"],
      },
      boxShadow: {
        funkard: "0 0 15px rgba(242,178,55,0.25)",
        soft: "0 0 8px rgba(255,255,255,0.05)",
        card: "0 1px 4px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
