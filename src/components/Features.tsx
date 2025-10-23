export function Features() {
  return (
    <section className="py-28 bg-gradient-to-b from-black to-neutral-950 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400 drop-shadow-[0_0_20px_#FFB300]">
          Diventa un collezionista e divertiti!
        </h2>
        <p className="text-gray-400 text-lg">
          Scopri tutte le funzionalità del mondo Funkard.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-8">
        {[
          { title: 'Marketplace intuitivo', desc: 'Compra e vendi carte in modo semplice, sicuro e moderno.' },
          { title: 'GradeLens AI', desc: 'Analizza e valuta le tue carte con intelligenza artificiale.' },
          { title: 'La tua collezione', desc: 'Gestisci e mostra le tue carte come un vero collezionista.' },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 shadow-lg hover:border-yellow-400/60 hover:shadow-[0_0_25px_#FFB300]/30 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-yellow-400 font-bold text-xl mb-4">{item.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
