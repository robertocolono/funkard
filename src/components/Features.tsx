export default function Features() {
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
      icon: "💼",
    },
  ];

  return (
    <section className="bg-[#0C0C0C] text-white py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB300] mb-3 drop-shadow-[0_0_15px_#FFB300]">
          Diventa un collezionista e divertiti!
        </h2>
        <p className="text-gray-400 text-lg">
          Scopri tutte le funzionalità del mondo Funkard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#111] p-8 rounded-2xl shadow-[0_0_20px_#FFB30040] border border-[#FFB30020]
                       hover:shadow-[0_0_40px_#FFB30080] hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-[#FFB300]">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
