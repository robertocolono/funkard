"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FunkardButton } from "@/components/ui/funkard-button";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Funkard" className="h-8 w-auto" />
          <span className="text-yellow-500 font-bold tracking-wide">FUNKARD</span>
        </div>

        {/* Links */}
        <nav className="flex items-center space-x-6 text-white text-sm">
          <a href="#marketplace" className="hover:text-yellow-500 transition">Marketplace</a>
          <a href="#collezione" className="hover:text-yellow-500 transition">Collezione</a>
          <a href="#gradelens" className="hover:text-yellow-500 transition">GradeLens</a>
          <a href="#supporto" className="hover:text-yellow-500 transition">Supporto</a>
        </nav>

        {/* Bottone */}
        <button className="funkard-btn">Registrati</button>
      </div>
    </header>
  );
}