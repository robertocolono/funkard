"use client";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-[var(--hover)]"
      aria-label="Cambia tema"
      title="Cambia tema"
      style={{ borderColor: "var(--border)" }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
