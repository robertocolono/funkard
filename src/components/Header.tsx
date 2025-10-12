import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-black border-b border-gray-800">
      {/* LOGO + SCRITTA */}
      <div className="flex items-center space-x-3">
        <Image
          src="/favicon.png"
          alt="Funkard icon"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <Link href="/" className="flex items-center text-2xl font-extrabold tracking-tight">
          <span className="text-yellow-400">FUN</span>
          <span className="text-white">KARD</span>
        </Link>
      </div>

      {/* NAV LINKS */}
      <nav className="flex space-x-6 text-sm font-medium">
        <Link href="/dashboard" className="text-gray-300 hover:text-yellow-400 transition">Dashboard</Link>
        <Link href="/login" className="text-gray-300 hover:text-yellow-400 transition">Login</Link>
        <Link href="/register" className="text-gray-300 hover:text-yellow-400 transition">Registrati</Link>
      </nav>
    </header>
  );
}
