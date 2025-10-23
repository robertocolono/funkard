import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 bg-gradient-to-t from-black to-neutral-950 border-t border-yellow-400/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Support Card */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-yellow-400/20 rounded-2xl p-6 text-center hover:border-yellow-400/40 transition-all duration-300 hover:shadow-[0_0_25px_#FFB300]/20">
            <div className="text-3xl mb-3">🛟</div>
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Supporto</h3>
            <p className="text-gray-300 mb-4 text-sm">Hai domande o problemi? Il nostro team è a disposizione.</p>
            <Link
              href="/support"
              className="inline-block bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_#FFB300]/40 text-sm"
            >
              Vai al supporto →
            </Link>
          </div>

          {/* Community Card */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-yellow-400/20 rounded-2xl p-6 text-center hover:border-yellow-400/40 transition-all duration-300 hover:shadow-[0_0_25px_#FFB300]/20">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Community</h3>
            <p className="text-gray-300 mb-4 text-sm">Scopri guide, consigli e condividi esperienze con altri collezionisti.</p>
            <Link
              href="/community"
              className="inline-block bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_#FFB300]/40 text-sm"
            >
              Entra in community →
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-yellow-400/20 text-center">
          <p className="text-gray-500 text-lg">
            Funkard © 2025 — Da collezionisti per collezionisti.
          </p>
        </div>
      </div>
    </footer>
  );
}