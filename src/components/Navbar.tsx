"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("funkard_token") : null;
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("funkard_token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav
      className="
        w-full fixed top-0 left-0 z-50
        bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800
        text-white flex items-center justify-between px-6 py-3 shadow-lg
      "
    >
      {/* LOGO SINISTRA */}
      <div
        onClick={() => router.push("/")}
        className="text-2xl font-extrabold tracking-tight cursor-pointer select-none"
      >
        <span className="text-yellow-500">FUN</span>
        <span className="text-white">KARD</span>
      </div>

      {/* 🌐 LINK CENTRALI CON LOGO */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/marketplace" className="hover:text-yellow-400 transition-colors">
          Marketplace
        </Link>
        <Image
          src="/smile-closed.png"
          alt="Funkard smile logo"
          width={42}
          height={42}
          className="object-contain opacity-90 hover:opacity-100 transition-all"
        />
        <Link href="/collection" className="hover:text-yellow-400 transition-colors">
          Collezione
        </Link>
      </div>

      {/* AREA DESTRA */}
      <div className="flex items-center gap-4 text-sm font-medium">
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => router.push("/register")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold transition-all"
            >
              Registrati
            </button>
            <button
              onClick={() => router.push("/login")}
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md font-semibold transition-all"
            >
              Accedi
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => router.push("/profile")}
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md font-semibold transition-all"
            >
              Profilo
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-red-400 transition-all"
            >
              Esci
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
