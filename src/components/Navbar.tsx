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

  // Badge notifiche (puoi collegarlo al tuo store/SSE)
  useEffect(() => {
    const stored = Number(localStorage.getItem("funkard_notif") || 0);
    setNotifCount(stored);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur"
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
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

        {/* Mobile trigger */}
        <div className="md:hidden">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}