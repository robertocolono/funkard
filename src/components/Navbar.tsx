"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Collezione", href: "/collezione" },
    { name: "GradeLens", href: "/gradelens" },
    { name: "Support", href: "/support" },
    { name: "Registrati", href: "/register" },
  ];

  return (
    <nav className="w-full bg-black border-b border-neutral-800 py-6 md:py-8 px-6 md:px-12 flex items-center justify-between">
      {/* Left side: Funkard text */}
      <Link
        href="/"
        className="text-2xl md:text-3xl font-bold tracking-wide text-white hover:text-funkard-yellow transition-colors duration-300"
      >
        FUNKARD
      </Link>

      {/* Right side: menu links */}
      <div className="flex items-center space-x-6 md:space-x-10">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base md:text-lg font-medium transition-colors duration-300 ${
              pathname === link.href
                ? "text-funkard-yellow"
                : "text-white hover:text-funkard-yellow"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;