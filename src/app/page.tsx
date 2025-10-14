"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* 🔥 Sfondo gradiente dinamico */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.12)_0%,transparent_70%)] blur-3xl" />

      {/* 🏷️ Logo o titolo */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-white drop-shadow-[0_0_15px_rgba(255,204,0,0.1)]">
        FUNKARD
      </h1>

      {/* 💬 Slogan principale */}
      <p className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl leading-relaxed mb-10">
        <span className="text-yellow-400 font-semibold">
          Accresci la tua collezione preferita
        </span>{" "}
        in modo facile e veloce.<br />
        Il primo vero Marketplace che connette il mondo intero con un semplice click!
      </p>

      {/* 🔘 Pulsanti azione */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => router.push("/marketplace")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-yellow-500/30"
        >
          🔥 Esplora il Marketplace
        </button>

        <button
          onClick={() => router.push("/collection")}
          className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
        >
          📚 La Mia Collezione
        </button>
      </div>

      {/* 🧩 Sezione feature */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {[
          {
            title: "Compra",
            text: "Scopri migliaia di carte rare e nuove release dai migliori venditori.",
            icon: "🛒",
          },
          {
            title: "Vendi",
            text: "Metti in vendita le tue carte in modo sicuro e trasparente, senza abbonamenti.",
            icon: "💸",
          },
          {
            title: "Valuta",
            text: "Analizza il valore delle tue carte con la nostra tecnologia di grading.",
            icon: "📈",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/60 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA finale */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Unisciti alla rivoluzione del collezionismo.</h2>
        <button
          onClick={() => router.push("/register")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-200"
        >
          🚀 Inizia ora
        </button>
      </div>
    </main>
  );
}
