export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-funkard-black">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-black font-bold">F</span>
        </div>
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
