import { ShoppingCart, Search, Briefcase } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-yellow-400 mx-auto mb-3" />,
      title: "Marketplace intuitivo",
      text: "Compra e vendi carte in modo semplice, sicuro e moderno.",
    },
    {
      icon: <Search className="w-8 h-8 text-yellow-400 mx-auto mb-3" />,
      title: "GradeLens AI",
      text: "Analizza e valuta le tue carte con intelligenza artificiale.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400 mx-auto mb-3" />,
      title: "La tua collezione",
      text: "Gestisci e mostra le tue carte come un vero collezionista.",
    },
  ];

  return (
    <section className="mt-16 text-center px-6 md:px-16 max-w-6xl mx-auto">
      <h3 className="text-3xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,204,0,0.6)]">
        Diventa un collezionista e divertiti!
      </h3>
      <p className="text-zinc-400 mt-2">
        Scopri tutte le funzionalità del mondo Funkard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 shadow-[0_0_15px_rgba(255,204,0,0.25)] hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] transition"
          >
            {f.icon}
            <h4 className="text-xl font-semibold text-yellow-400 mb-2">{f.title}</h4>
            <p className="text-zinc-400 text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
