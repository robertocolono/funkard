
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setHidden(true);
      else setHidden(false);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  const isLoggedIn = false; // temporaneo

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hidden && isHome ? "-translate-y-full" : "translate-y-0"
      } ${isHome ? "bg-transparent" : "bg-black/90 backdrop-blur-md"} py-4`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
        
        {/* LOGO + NOME CENTRATI */}
        <div className="flex items-center justify-center w-full space-x-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/favicon-32x32.png"
              alt="Funkard icon"
              width={30}
              height={30}
            />
            <span className="text-2xl font-extrabold transition-all group-hover:drop-shadow-[0_0_8px_#f2b237]">
              <span className="text-[#f2b237]">FUN</span>
              <span className="text-white">KARD</span>
            </span>
          </Link>
        </div>

        {/* CTA DESTRA */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          {isLoggedIn ? (
            <Link
              href="/login"
              className="px-5 py-2 rounded-full bg-[#f2b237] text-black font-semibold shadow-[0_0_12px_#f2b23788] hover:shadow-[0_0_20px_#f2b237cc] transition-all duration-300"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/register"
              className="px-5 py-2 rounded-full bg-[#f2b237] text-black font-semibold shadow-[0_0_12px_#f2b23788] hover:shadow-[0_0_20px_#f2b237cc] transition-all duration-300"
            >
              Registrati
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
