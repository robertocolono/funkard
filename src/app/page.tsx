import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center pt-32 pb-16 w-full">
        <Image
          src="/Progetto_senza_titolo_77.png"
          alt="Funkard Smile"
          width={220}
          height={220}
          className="mb-8 drop-shadow-[0_0_40px_#f2b237]"
        />
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_0_20px_#f2b237]">
          FUN<span className="text-[#f2b237]">KARD</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">Costruito per tutti!</p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/register"
            className="bg-[#f2b237] hover:bg-[#ffd95b] text-black font-bold px-10 py-4 rounded-full shadow-[0_0_30px_#f2b237cc] transition-all duration-300 text-lg"
          >
            Unisciti ora
          </Link>
          <Link
            href="/marketplace"
            className="text-[#f2b237] hover:text-white underline underline-offset-4 transition-all text-base"
          >
            Esplora il marketplace
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full flex flex-col items-center my-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f2b237] drop-shadow-[0_0_12px_#f2b237] mb-2 tracking-tight">
          L’anima di Funkard
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#f2b237] via-[#ffd95b] to-[#f2b237] rounded-full mb-2"></div>
      </div>

      {/* FEATURE SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mb-20 w-full">
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
            className="bg-[#0d0d0d] p-7 rounded-2xl shadow-[0_0_30px_#f2b23744] hover:shadow-[0_0_40px_#f2b23788] transition-all duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-[#f2b237] mb-2 text-center">
              {f.title}
            </h3>
            <p className="text-gray-300 text-sm text-center">{f.text}</p>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION FINALE */}
      <section className="mb-20 flex flex-col items-center w-full">
        <Link
          href="/register"
          className="bg-[#f2b237] hover:bg-[#ffd95b] text-black font-bold px-12 py-5 rounded-full shadow-[0_0_40px_#f2b237cc] transition-all duration-300 text-xl"
        >
          Unisciti ora
        </Link>
        <Link
          href="/marketplace"
          className="mt-4 text-[#f2b237] hover:text-white underline underline-offset-4 transition-all text-base"
        >
          Esplora il marketplace
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#f2b237]/30 py-7 text-center text-gray-400 text-base">
        © 2025 Funkard — Collect. Connect. Play.
      </footer>
    </main>
  );
}
