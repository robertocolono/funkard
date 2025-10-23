export function Features() {
  const features = [
    {
      title: "Marketplace intuitivo",
      desc: "Compra e vendi carte in modo semplice, sicuro e moderno.",
    },
    {
      title: "GradeLens AI",
      desc: "Analizza e valuta le tue carte con intelligenza artificiale.",
    },
    {
      title: "La tua collezione",
      desc: "Gestisci e mostra le tue carte come un vero collezionista.",
    },
  ];

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
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-neutral-900 border border-yellow-400/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_0_25px_#FFB300]/30 transition-all hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">{f.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}