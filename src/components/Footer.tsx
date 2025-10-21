export function Footer() {
  return (
    <footer className="mt-20 bg-neutral-100 dark:bg-neutral-950 text-gray-700 dark:text-gray-300 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="grid md:grid-cols-2 gap-10 py-10 px-8 max-w-6xl mx-auto">
        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Supporto</h3>
          <p>Hai domande o problemi? Il nostro team è a disposizione.</p>
          <a href="/support" className="text-[var(--funkard-yellow)] font-semibold mt-2 inline-block">Vai al supporto →</a>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Community</h3>
          <p>Scopri guide, consigli e condividi esperienze con altri collezionisti.</p>
          <a href="/community" className="text-[var(--funkard-yellow)] font-semibold mt-2 inline-block">Entra in community →</a>
        </div>
      </div>

      <div className="text-center pb-8 text-sm text-gray-600 dark:text-gray-400">
        Funkard © 2025 — Da collezionisti per collezionisti.
      </div>
    </footer>
  );
}