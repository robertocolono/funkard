"use client";

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();
  const [welcome, setWelcome] = useState("👋 Benvenuto");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("funkard_token")) {
      setWelcome("👋 Bentornato");
    }
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-start px-6 pb-20 pt-24 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="mt-10 text-center relative z-10">
        <h2 className="text-lg text-gray-400 mb-2">{welcome}</h2>
        <Image
          src="/logo.png"
          alt="Funkard logo"
          width={280}
          height={90}
          priority
          className="mx-auto mb-6 object-contain"
        />
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          <span className="text-yellow-400 font-semibold">Accresci la tua collezione preferita</span>{" "}in modo facile e veloce.<br />Il primo vero Marketplace che connette il mondo intero con un semplice click!
        </p>
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
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl relative z-10">
        {[
          { title: "Compra", text: "Scopri migliaia di carte rare e nuove release dai migliori venditori.", icon: "🛒" },
          { title: "Vendi", text: "Metti in vendita le tue carte in modo sicuro e trasparente, senza abbonamenti.", icon: "💸" },
          { title: "Valuta", text: "Analizza il valore delle tue carte con la nostra tecnologia di grading.", icon: "📈" },
        ].map((item, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/60 transition-all duration-300">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center relative z-10">
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

