import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-black border-b border-gray-800">
      <div className="flex items-center space-x-3">
        <img src="/favicon.png" alt="Funkard icon" className="h-8 w-8" />
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-yellow-400">FUN</span>KARD
        </Link>
      </div>

      <nav className="flex space-x-6 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Registrati</Link>
      </nav>
    </header>
  );
}
