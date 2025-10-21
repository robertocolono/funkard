"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    setIsAuth(!!localStorage.getItem("funkard_token"));
  }, []);
  return isAuth;
}

export function Navbar() {
  const isAuth = useAuth();
  const [notifCount, setNotifCount] = useState<number>(0);

  // Semplice canale per badge (puoi collegarlo al tuo store/SSE)
  useEffect(() => {
    // TODO: sostituisci con selettore reale (SSE/store)
    const stored = Number(localStorage.getItem("funkard_notif") || 0);
    setNotifCount(stored);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-[var(--bg)]/80 backdrop-blur"
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={"/logo2.png"} // light
            alt="Funkard"
            width={120}
            height={32}
            className="block dark:hidden"
          />
          <Image
            src={"/logo.png"} // dark
            alt="Funkard"
            width={120}
            height={32}
            className="hidden dark:block"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {!isAuth ? (
            <>
              <Link className="hover:text-[var(--accent)]" href="/marketplace">Esplora le collezioni</Link>
              <Link className="hover:text-[var(--accent)]" href="/collection">Gestisci la tua collezione</Link>
              <Link className="hover:text-[var(--accent)]" href="/gradelens">Valuta le tue carte</Link>
              <Link className="hover:text-[var(--accent)]" href="/support">Supporto</Link>
              <Link className="hover:text-[var(--accent)]" href="/about">FAQ</Link>
            </>
          ) : (
            <>
              {/* utente loggato: menù snello */}
              <Link className="hover:text-[var(--accent)]" href="/marketplace">Marketplace</Link>
              <Link className="hover:text-[var(--accent)]" href="/support">Supporto</Link>
              <Link className="relative hover:text-[var(--accent)]" href="/support">
                Notifiche
                {notifCount > 0 && (
                  <span className="absolute -right-3 -top-2 rounded-full bg-[var(--accent)] px-2 py-0.5 text-[10px] font-semibold text-black">
                    {notifCount}
                  </span>
                )}
              </Link>
              <Link className="hover:text-[var(--accent)]" href="/profile">Profilo</Link>
            </>
          )}

          {!isAuth && (
            <Link
              href="/register"
              className="rounded-lg bg-[var(--accent)] px-4 py-2 font-medium text-black shadow-sm hover:opacity-90"
            >
              Registrati
            </Link>
          )}

          <ThemeToggle />
        </div>

        {/* Mobile trigger: tieni la tua MobileNavbar esistente */}
        <div className="md:hidden">
          {/* qui il bottone che apre il drawer mobile già esistente */}
        </div>
      </nav>
    </header>
  );
}
