import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20">
        <Image
          src="/Progetto_senza_titolo_77.png" // percorso del sorriso bianco
          alt="Funkard Smile"
          width={260}
          height={260}
          className="drop-shadow-[0_0_25px_#f2b237]"
        />
        <h1 className="text-5xl font-extrabold mt-6 drop-shadow-[0_0_15px_#f2b237]">
          FUN<span className="text-[#f2b237]">KARD</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">Costruito per tutti!</p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/register"
            className="bg-[#f2b237] hover:bg-[#ffd95b] text-black font-bold px-8 py-3 rounded-full shadow-[0_0_15px_#f2b237] transition-all duration-300"
          >
            Unisciti ora
          </Link>

          <Link
            href="/marketplace"
            className="text-[#f2b237] hover:text-white underline underline-offset-4 transition-all"
          >
            Esplora il marketplace
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full text-center my-12">
        <h2 className="text-3xl font-bold text-[#f2b237] drop-shadow-[0_0_10px_#f2b237]">
          L’anima di Funkard
        </h2>
      </div>

      {/* FEATURE SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mb-16">
        {[
          {
            icon: "🛒",
            title: "Marketplace intuitivo",
            text: "Compra e vendi carte in modo semplice, sicuro e moderno.",
          },
          {
            icon: "🤖",
            title: "GradeLens AI",
            text: "Analizza e valuta le tue carte con intelligenza artificiale.",
          },
          {
            icon: "🎴",
            title: "La tua collezione",
            text: "Gestisci e mostra le tue carte come un vero collezionista.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-[#0d0d0d] p-6 rounded-2xl border border-[#f2b237]/30 shadow-[0_0_15px_#f2b23733] hover:shadow-[0_0_25px_#f2b23755] transition-all"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-[#f2b237] mb-2">
              {f.title}
            </h3>
            <p className="text-gray-300 text-sm">{f.text}</p>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION FINALE */}
      <section className="mb-24">
        <Link
          href="/register"
          className="bg-[#f2b237] hover:bg-[#ffd95b] text-black font-bold px-10 py-4 rounded-full shadow-[0_0_20px_#f2b237] transition-all duration-300"
        >
          Crea il tuo account
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#f2b237]/30 py-6 text-center text-gray-400 text-sm">
        © 2025 Funkard — Collect. Connect. Play.
      </footer>
    </main>
  );
}
