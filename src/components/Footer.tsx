import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Navigazione */}
        <div>
          <h3 className="text-funkard-yellow font-semibold text-lg mb-4">
            Navigazione
          </h3>
          <ul className="space-y-2">
            <li><Link href="/marketplace" className="hover:text-funkard-yellow transition">Marketplace</Link></li>
            <li><Link href="/collection" className="hover:text-funkard-yellow transition">Collezione</Link></li>
            <li><Link href="/gradelens" className="hover:text-funkard-yellow transition">GradeLens</Link></li>
            <li><Link href="/support" className="hover:text-funkard-yellow transition">Supporto</Link></li>
          </ul>
        </div>

        {/* Legale */}
        <div>
          <h3 className="text-funkard-yellow font-semibold text-lg mb-4">
            Legale
          </h3>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-funkard-yellow transition">Termini e Condizioni</Link></li>
            <li><Link href="/privacy" className="hover:text-funkard-yellow transition">Privacy Policy</Link></li>
            <li><Link href="/cookie" className="hover:text-funkard-yellow transition">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-funkard-yellow font-semibold text-lg mb-4">
            Contatti
          </h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@funkard.com" className="hover:text-funkard-yellow transition">info@funkard.com</a></li>
            <li>Instagram: <a href="https://instagram.com/funkard" target="_blank" className="hover:text-funkard-yellow transition">@funkard</a></li>
            <li>Telegram: <a href="https://t.me/funkard" target="_blank" className="hover:text-funkard-yellow transition">@funkard</a></li>
          </ul>
        </div>
      </div>

      {/* Linea finale */}
      <div className="border-t border-neutral-800 py-6 text-center text-gray-500">
        © 2025 <span className="text-funkard-yellow font-semibold">Funkard</span> — 
        made by collezionisti, per collezionisti.
      </div>
    </footer>
  );
}