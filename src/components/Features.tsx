export function Features() {
  const features = [
    {
      title: "Marketplace intuitivo",
      desc: "Compra e vendi carte in modo semplice, sicuro e moderno.",
      icon: "🛒",
    },
    {
      title: "GradeLens AI",
      desc: "Analizza e valuta le tue carte con intelligenza artificiale.",
      icon: "🔍",
    },
    {
      title: "La tua collezione",
      desc: "Gestisci e mostra le tue carte come un vero collezionista.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-neutral-950 text-white">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_25px_#FFB300]">
          Diventa un collezionista e divertiti!
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Scopri tutte le funzionalità del mondo Funkard.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto px-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gradient-to-b from-neutral-900 to-neutral-800 border-2 border-yellow-400/30 rounded-3xl p-10 text-center shadow-2xl hover:shadow-[0_0_40px_#FFB300]/40 transition-all duration-500 hover:scale-105 hover:border-yellow-400/60 group"
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{f.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}