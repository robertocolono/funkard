"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Collezione", href: "/collection" },
    { name: "GradeLens", href: "/gradelens" },
    { name: "Supporto", href: "/support" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-yellow-400/20"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-bold text-yellow-400 tracking-wide">
            FUN<span className="text-white">KARD</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="ml-6 px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-sm hover:opacity-90 transition"
          >
            Registrati
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-400 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a0a]/95 border-t border-yellow-400/20 px-6 py-4 flex flex-col gap-4 text-center"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-200 hover:text-yellow-400 transition text-base"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-sm hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Registrati
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}