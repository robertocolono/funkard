"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-md text-sm hover:opacity-80 transition"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
