import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-neutral-800 text-gray-400">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="flex flex-col md:flex-row justify-center gap-12 text-white">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Supporto</h3>
            <p>Hai domande o problemi? Il nostro team è a disposizione.</p>
            <Link
              href="/support"
              className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
            >
              Vai al supporto →
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Community</h3>
            <p>Scopri guide, consigli e condividi esperienze con altri collezionisti.</p>
            <Link
              href="/community"
              className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
            >
              Entra in community →
            </Link>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-800 text-sm text-gray-500">
          Funkard © 2025 — Da collezionisti per collezionisti.
        </div>
      </div>
    </footer>
  );
}