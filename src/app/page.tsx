"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#0b0b0b] text-white overflow-hidden">

      {/* Glow radiale di sfondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23722_0%,_#0b0b0b_75%)] pointer-events-none" />

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center py-24 px-6 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#f2b237] text-lg md:text-xl font-semibold tracking-wide"
        >
          Benvenuto su <span className="font-[Bungee]">FUNKARD!</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-8"
        >
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={400}
            height={400}
            priority
            className="mx-auto w-64 md:w-80 lg:w-[420px] select-none drop-shadow-[0_0_25px_#f2b23755]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mt-10 max-w-3xl leading-tight tracking-tight"
        >
          COLLEZIONA. SCAMBIA. VIVI LA PASSIONE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-400 mt-5 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community
          in un&apos;unica piattaforma.
        </motion.p>

        {/* BOTTONI */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-5 mt-8"
        >
          <Link
            href="/marketplace"
            className="px-12 py-4 border-[3px] border-[#f2b237] rounded-md text-lg font-semibold text-white
                       hover:bg-[#f2b237] hover:text-black transition-all duration-300
                       shadow-[0_0_15px_#f2b23755] hover:shadow-[0_0_30px_#f2b237aa]"
          >
            Esplora il Marketplace
          </Link>

          <Link
            href="/gradelens"
            className="px-12 py-4 border-[3px] border-[#f2b237] rounded-md text-lg font-semibold text-white
                       hover:bg-[#f2b237] hover:text-black transition-all duration-300
                       shadow-[0_0_15px_#f2b23755] hover:shadow-[0_0_30px_#f2b237aa]"
          >
            Scopri GradeLens AI
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0c0c0c] py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#f2b237] mb-3 drop-shadow-[0_0_15px_#f2b23755]">
            Diventa un collezionista e divertiti!
          </h2>
          <p className="text-gray-400 text-lg">
            Scopri tutte le funzionalità del mondo Funkard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: "🛒", title: "Marketplace intuitivo", desc: "Compra e vendi carte in modo semplice, sicuro e moderno." },
            { icon: "🔍", title: "GradeLens AI", desc: "Analizza e valuta le tue carte con intelligenza artificiale." },
            { icon: "💼", title: "La tua collezione", desc: "Gestisci e mostra le tue carte come un vero collezionista." },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-[#111] p-8 rounded-2xl border border-[#f2b23733] shadow-[0_0_25px_#f2b23722]
                         hover:shadow-[0_0_35px_#f2b23755] hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-[#f2b237]">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#111] to-[#0A0A0A] text-center text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23711_0%,_transparent_80%)]" />
        <h2 className="text-5xl font-extrabold mb-6 text-[#f2b237] drop-shadow-[0_0_25px_#f2b23799]">
          Pronto a iniziare la tua avventura?
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Unisciti a centinaia di collezionisti — Crea il tuo account e scopri Funkard.
        </p>
        <Link
          href="/register"
          className="bg-[#f2b237] text-black font-bold text-lg py-4 px-12 rounded-xl
                     hover:bg-[#ffd04b] hover:shadow-[0_0_40px_#f2b237aa] transition-all duration-300"
        >
          Crea il tuo account
        </Link>
      </section>
    </main>
  );
}