"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("funkard_admin_token");
      if (!token || token !== "b7d525303780f51248225e8130a8697e56d6c3ba070a83e19136f74bd83134d4") {
        router.push("/");
        return;
      }
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-gray-400">Verifica accesso admin...</div>
      </div>
    );
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: "📊" },
    { href: "/admin/market", label: "Market", icon: "📈" },
    { href: "/admin/support", label: "Support", icon: "🎧" },
    { href: "/admin/users", label: "Utenti", icon: "👥" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <div className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-yellow-400">🧠 Funkard Admin</h1>
            <div className="text-sm text-gray-400">
              Sistema di gestione completo
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* SIDEBAR */}
        <div className="w-64 bg-zinc-900 border-r border-zinc-800 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-yellow-500 text-black font-medium"
                        : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
