export function GradeLensShowcase() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-md p-8 transition-colors">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          🧠 GradeLens – Scansione simulata
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Analizza la tua carta in modo istantaneo con la nostra tecnologia AI.
        </p>

        <button className="w-full py-3 bg-[var(--funkard-yellow)] text-black font-semibold rounded-lg hover:opacity-90 transition">
          Analizza la carta
        </button>
      </div>
    </section>
  );
}
