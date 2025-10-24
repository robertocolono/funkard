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
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-yellow-500">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={42}
            height={42}
            className="drop-shadow-[0_0_10px_rgba(255,204,0,0.3)]"
          />
          <span className="font-extrabold text-xl text-funkard-yellow tracking-tight">
            FUNKARD
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Marketplace", path: "/marketplace" },
            { name: "Collezione", path: "/collection" },
            { name: "GradeLens", path: "/gradelens" },
            { name: "Supporto", path: "/support" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === link.path
                  ? "text-funkard-yellow"
                  : "text-gray-300 hover:text-funkard-yellow"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Button */}
          <div className="ml-4">
            <FunkardButton variant="primary" href="/register">
              Registrati
            </FunkardButton>
          </div>
        </div>
      </div>
    </header>
  );
}