"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Layers,
  Search,
  HelpCircle,
  User,
} from "lucide-react";

export default function MobileNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/marketplace", icon: ShoppingBag, label: "Market" },
    { href: "/collection", icon: Layers, label: "Collezione" },
    { href: "/gradelens", icon: Search, label: "GradeLens" },
    { href: "/support", icon: HelpCircle, label: "Support" },
    { href: "/profile", icon: User, label: "Profilo" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-funkard-black border-t border-funkard-yellow/20 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center">
        {links.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center justify-center text-center"
            >
              <Icon
                size={22}
                className={`${
                  active
                    ? "text-funkard-yellow"
                    : "text-gray-400 hover:text-funkard-yellow"
                } transition`}
              />
              <span
                className={`text-xs mt-1 ${
                  active
                    ? "text-funkard-yellow font-medium"
                    : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
