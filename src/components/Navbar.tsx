"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useNotifications } from "@/context/NotificationContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { unreadCount } = useNotifications();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem("funkard_token");
    setIsLoggedIn(!!token);
  }, []);

  // In questa versione semplificata non includiamo ancora il pulsante di logout.

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        {/* 👈 Sinistra: logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={theme === 'dark' ? '/smile-closed.png' : '/smile-closed.png'}
            alt="Funkard logo"
            width={40}
            height={40}
            className="hover:scale-105 transition-transform"
          />
          <span className="hidden sm:block font-extrabold text-xl">
            <span className="text-yellow-400">FUN</span>KARD
          </span>
        </div>

        {/* 👉 Destra: link principali */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => router.push("/marketplace")}
            className="hover:text-yellow-400 transition-colors"
          >
            Marketplace
          </button>
          <button
            onClick={() => router.push("/collection")}
            className="hover:text-yellow-400 transition-colors"
          >
            Collezione
          </button>
          <button
            onClick={() => router.push("/gradelens")}
            className="hover:text-yellow-400 transition-colors"
          >
            GradeLens
          </button>
          <div className="relative">
            <button
              onClick={() => router.push("/support")}
              className="hover:text-yellow-400 transition-colors"
            >
              Support
            </button>
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </div>

          {/* 🌙 Toggle Tema */}
          <button
            onClick={toggleTheme}
            className="hover:text-yellow-400 transition-colors text-lg"
            title={`Passa a modalità ${theme === 'dark' ? 'chiara' : 'scura'}`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* 🧠 Account */}
          {!isLoggedIn ? (
            <button
              onClick={() => router.push("/register")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1.5 rounded-md font-semibold"
            >
              Registrati
            </button>
          ) : (
            <button
              onClick={() => router.push("/profile")}
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-4 py-1.5 rounded-md font-semibold"
            >
              Profilo
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
