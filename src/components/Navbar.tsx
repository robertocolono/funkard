"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import NavbarLogo from "@/components/NavbarLogo";
import { useSession } from "@/lib/context/SessionContext";

export function Navbar() {
  const { isAuthenticated, user, logout } = useSession();
  const { theme, toggleTheme } = useTheme();
  const [notifCount, setNotifCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  // Semplice canale per badge (puoi collegarlo al tuo store/SSE)
  useEffect(() => {
    // TODO: sostituisci con selettore reale (SSE/store)
    const stored = Number(localStorage.getItem("funkard_notif") || 0);
    setNotifCount(stored);
  }, []);

  return (
    <nav className="relative md:static flex justify-between items-center px-6 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* LOGO DINAMICO */}
      <NavbarLogo />

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-6">
        <a href="/marketplace" className="hover:text-[var(--funkard-yellow)] transition">Marketplace</a>
        {isAuthenticated && <a href="/collection" className="hover:text-[var(--funkard-yellow)] transition">Collezione</a>}
        <a href="/gradelens" className="hover:text-[var(--funkard-yellow)] transition">Valuta</a>
        <a href="/support" className="hover:text-[var(--funkard-yellow)] transition">Supporto</a>
        {!isAuthenticated && <a href="/faq" className="hover:text-[var(--funkard-yellow)] transition">FAQ</a>}
      </div>

      {/* CTA + THEME TOGGLE */}
      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <button 
            onClick={logout} 
            className="text-[var(--funkard-yellow)] hover:underline transition"
          >
            Profilo ({user?.username || user?.email})
          </button>
        ) : (
          <a 
            href="/register" 
            className="bg-[var(--funkard-yellow)] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Registrati
          </a>
        )}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-zinc-700" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>

      {/* MOBILE MENU TOGGLE */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU CONTENT */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 p-4 text-center">
          <a href="/marketplace" className="hover:text-[var(--funkard-yellow)]">Marketplace</a>
          {isAuthenticated && <a href="/collection" className="hover:text-[var(--funkard-yellow)]">Collezione</a>}
          <a href="/gradelens" className="hover:text-[var(--funkard-yellow)]">Valuta</a>
          <a href="/support" className="hover:text-[var(--funkard-yellow)]">Supporto</a>
          {!isAuthenticated && <a href="/faq" className="hover:text-[var(--funkard-yellow)]">FAQ</a>}
          {isAuthenticated ? (
            <button 
              onClick={logout} 
              className="mt-2 px-4 py-2 text-[var(--funkard-yellow)] hover:underline"
            >
              Logout ({user?.username || user?.email})
            </button>
          ) : (
            <a 
              href="/register" 
              className="mt-2 px-4 py-2 bg-[var(--funkard-yellow)] text-black rounded-md font-semibold"
            >
              Registrati
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
