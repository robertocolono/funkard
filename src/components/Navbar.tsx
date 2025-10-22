"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/lib/context/ThemeContext';
import { useSession } from '@/lib/context/SessionContext';
import { Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useSession();
  const router = useRouter();

  const logoSrc = theme === 'light' ? '/logo2.png' : '/logo.png';
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-border bg-background transition-colors duration-300">
      {/* SX — Logo + testo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
        <Image
          src={logoSrc}
          alt="Funkard Logo"
          width={36}
          height={36}
          className="transition-opacity duration-300"
        />
        <span className={`text-xl font-bold tracking-tight ${textColor}`}>
          Funkard
        </span>
      </div>

      {/* DX — Navigazione + pulsanti */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/marketplace" className="hover:text-funkard-yellow transition-colors">
          Marketplace
        </Link>
        <Link href="/gradelens" className="hover:text-funkard-yellow transition-colors">
          Valuta carte
        </Link>
        <Link href="/support" className="hover:text-funkard-yellow transition-colors">
          Supporto
        </Link>

        {isAuthenticated ? (
          <Link href="/profile" className="hover:text-funkard-yellow transition-colors">
            Profilo
          </Link>
        ) : (
          <Link href="/register" className="bg-funkard-yellow text-black px-3 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Registrati
          </Link>
        )}

        <button
          onClick={toggleTheme}
          aria-label="Cambia tema"
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-zinc-700" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>

    </nav>
  );
}
