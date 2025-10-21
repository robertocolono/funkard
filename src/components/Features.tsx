export function Features() {
  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900 transition-colors">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 glow-yellow">
          Diventa un collezionista e divertiti!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Scopri tutte le funzionalità del mondo Funkard.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {[
          { title: 'Marketplace intuitivo', desc: 'Compra e vendi carte in modo semplice, sicuro e moderno.' },
          { title: 'GradeLens AI', desc: 'Analizza e valuta le tue carte con intelligenza artificiale.' },
          { title: 'La tua collezione', desc: 'Gestisci e mostra le tue carte come un vero collezionista.' },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 shadow-md glow-yellow transition-all hover:scale-[1.01]"
          >
            <h3 className="text-[var(--funkard-yellow)] font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
