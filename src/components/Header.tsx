import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-funkard-black">
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Funkard logo" width={48} height={48} className="w-12 h-12" />
        <h1 className="font-bold text-xl text-funkard-yellow tracking-wide">FUNKARD</h1>
      </div>
      <nav className="flex gap-6 text-white/80">
        <a href="/dashboard" className="hover:text-funkard-yellow transition">Dashboard</a>
        <a href="/login" className="hover:text-funkard-yellow transition">Login</a>
        <a href="/register" className="hover:text-funkard-yellow transition">Registrati</a>
      </nav>
    </header>
  );
}
