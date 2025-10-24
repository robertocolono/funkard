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
    <section className="mt-16 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="space-y-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center space-x-6 p-6 border-b border-yellow-400/20 last:border-b-0"
          >
            <div className="flex-shrink-0">
              {f.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-2">{f.title}</h4>
              <p className="text-zinc-400">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
