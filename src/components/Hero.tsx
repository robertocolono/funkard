export function Hero() {
  return (
    <section className="text-center py-16 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Esplora, compra, vendi e scambia la tua collezione con un semplice click!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
        </p>

        <img
          src="/logo.png"
          alt="Funkard Logo"
          className="w-40 mx-auto mb-6"
        />

        <a
          href="/marketplace"
          className="inline-block px-6 py-3 bg-[var(--funkard-yellow)] text-black font-semibold rounded-lg hover:opacity-90 transition"
        >
          Esplora il Marketplace →
        </a>
      </div>
    </section>
  );
}