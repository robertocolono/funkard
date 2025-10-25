/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Palette principale Funkard
        primary: {
          DEFAULT: "#6C63FF", // Viola base
          light: "#7F75FF",   // Hover
          dark: "#5B54E6",    // Attivo
        },
        secondary: {
          DEFAULT: "#FFFFFF", // Bianco puro
          dark: "#F5F5F7",    // Fondo card / sezioni
        },
        neutral: {
          50: "#FAFAFB",
          100: "#F4F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        success: "#00B894",
        error: "#E74C3C",
        warning: "#F39C12",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.06)",
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        card: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};