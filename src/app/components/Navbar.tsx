"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Funkard Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">
          <span className="text-primary">FUN</span><span className="text-neutral-800">KARD</span>
        </h1>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm">
        <a href="#collections" className="hover:text-primary transition text-neutral-600">Esplora le collezioni</a>
        <a href="#manage" className="hover:text-primary transition text-neutral-600">Gestisci la tua collezione</a>
        <a href="#gradelens" className="hover:text-primary transition text-neutral-600">Valuta le tue carte</a>
        <a href="#support" className="hover:text-primary transition text-neutral-600">Supporto</a>
        <a href="#faq" className="hover:text-primary transition text-neutral-600">FAQ</a>
        <a
          href="/signup"
          className="btn-funkard"
        >
          Registrati
        </a>
      </div>
    </nav>
  );
}
