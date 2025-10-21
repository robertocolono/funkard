'use client';
import Link from 'next/link';
import { Home, ShoppingBag, FolderKanban, Search, MessageCircle } from 'lucide-react';
import { useNotifications } from '@/context/NotificationContext';
import { useTheme } from 'next-themes';

export default function MobileNavbar() {
  const { unreadCount } = useNotifications();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 flex justify-around items-center py-3 z-50">
      <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
        <Home className="w-5 h-5" />
        <span className="text-[11px] mt-1">Home</span>
      </Link>

      <Link href="/marketplace" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
        <ShoppingBag className="w-5 h-5" />
        <span className="text-[11px] mt-1">Market</span>
      </Link>

      <Link href="/collection" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
        <FolderKanban className="w-5 h-5" />
        <span className="text-[11px] mt-1">Collezione</span>
      </Link>

      <Link href="/gradelens" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
        <Search className="w-5 h-5" />
        <span className="text-[11px] mt-1">GradeLens</span>
      </Link>

      {/* 💬 Supporto con badge dinamico */}
      <Link href="/support" className="relative flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
        <MessageCircle className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
            <span className="text-[11px] mt-1">Supporto</span>
          </Link>

          {/* 🌙 Toggle Tema */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition"
            title={`Passa a modalità ${theme === 'dark' ? 'chiara' : 'scura'}`}
          >
            <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span className="text-[11px] mt-1">Tema</span>
          </button>
        </nav>
      );
    }
