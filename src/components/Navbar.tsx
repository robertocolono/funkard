"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Simula stato autenticazione (da collegare a Supabase o Auth.js dopo)
  const isLoggedIn = false;

  useEffect(() => {
    if (pathname !== "/") return; // navbar dinamica solo in home

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Cambia colore dopo un po’ di scroll
      setScrolled(currentScrollY > 30);

      // Mostra o nasconde la navbar in base alla direzione
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false); // nascondi se si scende
      } else {
        setShow(true); // mostra se si risale
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  // Stile base per la navbar
  const baseClasses =
    "fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-500";

  const dynamicClasses =
    pathname === "/"
      ? `${scrolled ? "bg-black/90 shadow-md" : "bg-transparent"} ${
          show ? "translate-y-0" : "-translate-y-full"
        }`
      : "bg-black shadow-md"; // navbar fissa nelle altre pagine

  return (
    <nav className={`${baseClasses} ${dynamicClasses}`}>
      {/* --- LOGO & TITLE --- */}
      <div className="flex items-center space-x-3">
        <Image
          src="/favicon-32x32.png"
          alt="Funkard icon"
          width={28}
          height={28}
          className="rounded-sm"
        />
        <Link href="/" className="text-xl font-extrabold text-white">
          <span className="text-[#f2b237] drop-shadow-[0_0_6px_#f2b237]">FUN</span>
          KARD
        </Link>
      </div>

      {/* --- LOGIN / REGISTRAZIONE --- */}
      <div>
        {!isLoggedIn ? (
          <Link
            href="/register"
            className="text-[#f2b237] font-semibold hover:text-white transition-all"
          >
            Registrati
          </Link>
        ) : (
          <Link
            href="/login"
            className="text-[#f2b237] font-semibold hover:text-white transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
