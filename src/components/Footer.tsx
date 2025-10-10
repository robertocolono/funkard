export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-gray-400 text-center py-10 relative overflow-hidden">
      {/* bordo superiore con effetto cartoon */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB300] via-[#FF7A00] to-[#FFB300] animate-pulse"></div>

      {/* contenuto */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo_sorriso.png"
          alt="Funkard Smile"
          className="w-12 h-auto opacity-90 hover:rotate-12 transition-transform duration-300"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.onerror = null;
            img.src = "/logo.png"; // fallback al logo principale se il sorriso manca
          }}
        />
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/about" className="hover:text-[#FFB300] transition-colors">About</a>
          <a href="/support" className="hover:text-[#FFB300] transition-colors">Supporto</a>
          <a href="/terms" className="hover:text-[#FFB300] transition-colors">Termini</a>
        </nav>
      </div>

      <p className="text-xs mt-6 opacity-70">
        © 2025 Funkard — Collect. Connect. Play.
      </p>
    </footer>
  );
}
 
