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
    <nav className="w-full bg-black border-b border-neutral-800 py-5 px-8 md:py-6 md:px-16 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-bold tracking-wide text-white hover:text-funkard-yellow transition-colors duration-300"
      >
        FUNKARD
      </Link>

      <div className="flex items-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base font-medium transition-colors duration-300 ${
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