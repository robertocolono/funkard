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
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo testuale */}
        <span className="text-yellow-500 font-bold text-xl tracking-wide">FUNKARD</span>

        {/* Nav links allineati a destra con più respiro */}
        <nav className="flex items-center space-x-12 text-white text-base">
          <a href="#marketplace" className="hover:text-yellow-500 transition">Marketplace</a>
          <a href="#collezione" className="hover:text-yellow-500 transition">Collezione</a>
          <a href="#gradelens" className="hover:text-yellow-500 transition">GradeLens</a>
          <a href="#supporto" className="hover:text-yellow-500 transition">Supporto</a>

          {/* Margine visivo prima del bottone */}
          <div className="ml-10">
            <button className="funkard-btn">Registrati</button>
          </div>
        </nav>
      </div>
    </header>
  );
}