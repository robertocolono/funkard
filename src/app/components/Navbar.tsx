"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Will");

  useEffect(() => {
    const logged = localStorage.getItem("funkard_user");
    if (logged) {
      setIsLoggedIn(true);
      setUsername(logged);
    }
  }, []);

  return (
    <nav className="w-full bg-[#111] border-b border-neutral-800 px-8 py-5 flex justify-between items-center sticky top-0 z-50">
      {/* Left Logo */}
      <Link href="/" className="flex items-center gap-1 select-none">
        <span className="text-[#f2b237] font-[Bungee] text-3xl sm:text-4xl font-bold">
          FUN
        </span>
        <span className="text-white font-[Bungee] text-3xl sm:text-4xl font-bold">
          KARD
        </span>
      </Link>

      {/* Right Button */}
      {!isLoggedIn ? (
        <Link
          href="/register"
          className="mr-6 font-semibold text-[#f2b237] hover:text-[#ffca47] transition-colors duration-200"
        >
          Registrati
        </Link>
      ) : (
        <Link
          href="/profile"
          className="mr-6 border border-[#f2b237] text-[#f2b237] font-semibold text-lg sm:text-xl px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#f2b237] hover:text-black transition-all"
        >
          Ciao, {username}
        </Link>
      )}
    </nav>
  );
}