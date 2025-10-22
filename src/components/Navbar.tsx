"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    setIsAuth(!!localStorage.getItem("funkard_token"));
  }, []);
  return isAuth;
}

export default function Navbar() {
  const isAuth = useAuth();
  const { theme } = useTheme();
  const [notifCount, setNotifCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Badge notifiche (puoi collegarlo al tuo store/SSE)
  useEffect(() => {
    const stored = Number(localStorage.getItem("funkard_notif") || 0);
    setNotifCount(stored);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/80 dark:bg-neutral-900/80 backdrop-blur"
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 relative md:static">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={theme === "light" ? "/logo2.png" : "/logo.png"}
            alt="Funkard"
            width={120}
            height={32}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {!isAuth ? (
            <>
              <Link className="hover:text-funkard-yellow transition-colors" href="/marketplace">
                Esplora le collezioni
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/collection">
                Gestisci la tua collezione
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/gradelens">
                Valuta le tue carte
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/support">
                Supporto
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/faq">
                FAQ
              </Link>
            </>
          ) : (
            <>
              <Link className="hover:text-funkard-yellow transition-colors" href="/marketplace">
                Marketplace
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/collection">
                Collezione
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/gradelens">
                GradeLens
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/support">
                Supporto
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/faq">
                FAQ
              </Link>
              <Link className="relative hover:text-funkard-yellow transition-colors" href="/notifications">
                Notifiche
                {notifCount > 0 && (
                  <span className="absolute -right-3 -top-2 rounded-full bg-funkard-yellow px-2 py-0.5 text-[10px] font-semibold text-black">
                    {notifCount}
                  </span>
                )}
              </Link>
              <Link className="hover:text-funkard-yellow transition-colors" href="/profile">
                Profilo
              </Link>
            </>
          )}

          {!isAuth && (
            <Link
              href="/register"
              className="rounded-lg bg-funkard-yellow px-4 py-2 font-medium text-black shadow-sm hover:opacity-90 transition"
            >
              Registrati
            </Link>
          )}

          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 p-4 text-center">
            <Link href="/marketplace" className="hover:text-funkard-yellow transition">Esplora le collezioni</Link>
            <Link href="/collection" className="hover:text-funkard-yellow transition">Gestisci la tua collezione</Link>
            <Link href="/gradelens" className="hover:text-funkard-yellow transition">Valuta le tue carte</Link>
            <Link href="/support" className="hover:text-funkard-yellow transition">Supporto</Link>
            <Link href="/faq" className="hover:text-funkard-yellow transition">FAQ</Link>
            {!isAuth && (
              <button className="mt-2 px-4 py-2 bg-funkard-yellow text-black rounded-md font-semibold">
                Registrati
              </button>
            )}
            <div className="flex justify-center mt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}