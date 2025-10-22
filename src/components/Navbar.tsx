"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import NavbarLogo from "@/components/NavbarLogo";

function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    setIsAuth(!!localStorage.getItem("funkard_token"));
  }, []);
  return isAuth;
}

export function Navbar() {
  const isAuth = useAuth();
  const { resolvedTheme } = useTheme();
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
        {!isAuth ? (
          <>
            <a href="/marketplace" className="hover:text-[var(--funkard-yellow)] transition">Esplora le collezioni</a>
            <a href="/collection" className="hover:text-[var(--funkard-yellow)] transition">Gestisci la tua collezione</a>
            <a href="/gradelens" className="hover:text-[var(--funkard-yellow)] transition">Valuta le tue carte</a>
            <a href="/support" className="hover:text-[var(--funkard-yellow)] transition">Supporto</a>
            <a href="/faq" className="hover:text-[var(--funkard-yellow)] transition">FAQ</a>
          </>
        ) : (
          <>
            <a href="/marketplace" className="hover:text-[var(--funkard-yellow)] transition">Marketplace</a>
            <a href="/support" className="hover:text-[var(--funkard-yellow)] transition">Supporto</a>
            <a href="/support" className="relative hover:text-[var(--funkard-yellow)] transition">
              Notifiche
              {notifCount > 0 && (
                <span className="absolute -right-3 -top-2 rounded-full bg-[var(--funkard-yellow)] px-2 py-0.5 text-[10px] font-semibold text-black">
                  {notifCount}
                </span>
              )}
            </a>
            <a href="/profile" className="hover:text-[var(--funkard-yellow)] transition">Profilo</a>
          </>
        )}
      </div>

      {/* CTA + THEME TOGGLE */}
      <div className="flex items-center gap-3">
        {!isAuth && (
          <button className="px-4 py-2 bg-[var(--funkard-yellow)] text-black rounded-md font-semibold hover:opacity-90 transition">
            Registrati
          </button>
        )}
        <ThemeToggle />
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
          <a href="/marketplace" className="hover:text-[var(--funkard-yellow)]">Esplora le collezioni</a>
          <a href="/collection" className="hover:text-[var(--funkard-yellow)]">Gestisci la tua collezione</a>
          <a href="/gradelens" className="hover:text-[var(--funkard-yellow)]">Valuta le tue carte</a>
          <a href="/support" className="hover:text-[var(--funkard-yellow)]">Supporto</a>
          <a href="/faq" className="hover:text-[var(--funkard-yellow)]">FAQ</a>
          <button className="mt-2 px-4 py-2 bg-[var(--funkard-yellow)] text-black rounded-md font-semibold">
            Registrati
          </button>
        </div>
      )}
    </nav>
  );
}
