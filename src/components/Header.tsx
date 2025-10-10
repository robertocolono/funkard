export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-funkard-black">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Funkard logo" className="w-10 h-10" />
        <h1 className="font-bold text-xl text-funkard-yellow tracking-wide">FUNKARD</h1>
      </div>
      <nav className="flex gap-6 text-white/80">
        <a href="#" className="hover:text-funkard-yellow transition">Marketplace</a>
        <a href="#" className="hover:text-funkard-yellow transition">GradeLens</a>
        <a href="#" className="hover:text-funkard-yellow transition">Community</a>
      </nav>
    </header>
  );
}
