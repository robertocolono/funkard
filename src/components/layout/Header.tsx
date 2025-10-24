"use client";
import Link from "next/link";

const NAV = [
  { href: "/market", label: "Marketplace" },
  { href: "/collection", label: "Collezione" },
  { href: "/gradelens", label: "GradeLens" },
  { href: "/support", label: "Supporto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="h-16 md:h-18 flex items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="shrink-0 font-extrabold tracking-tight text-xl md:text-2xl">
            <span className="text-[#FFC72C]">FUN</span>
            <span className="text-white">KARD</span>
          </Link>

          {/* Right items */}
          <div className="ml-auto flex items-center gap-6 md:gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm md:text-[15px] text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Registrati */}
            <Link href="/register" className="btn-primary">
              Registrati
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
