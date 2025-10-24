"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-zinc-800 bg-black sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Funkard Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">
          <span className="text-white">FUN</span><span className="text-yellow-400">KARD</span>
        </h1>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm">
        <a href="#collections" className="hover:text-yellow-400 transition">Esplora le collezioni</a>
        <a href="#manage" className="hover:text-yellow-400 transition">Gestisci la tua collezione</a>
        <a href="#gradelens" className="hover:text-yellow-400 transition">Valuta le tue carte</a>
        <a href="#support" className="hover:text-yellow-400 transition">Supporto</a>
        <a href="#faq" className="hover:text-yellow-400 transition">FAQ</a>
        <a
          href="/signup"
          className="bg-yellow-400 text-black font-semibold rounded-lg px-4 py-2 hover:bg-yellow-300 transition"
        >
          Registrati
        </a>
      </div>
    </nav>
  );
}
