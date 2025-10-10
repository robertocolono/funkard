export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-[Poppins]">
      {/* 🔸 NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-extrabold">
          <span className="text-[#f2b237]">FUN</span>KARD
        </h1>
        <a
          href="/register"
          className="text-white hover:text-[#f2b237] transition-colors text-lg font-medium"
        >
          Registrati
        </a>
      </nav>

      {/* 🔸 HERO */}
      <section className="flex flex-col items-center text-center mt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png" // 🔹 sostituiscilo con il sorriso trasparente
          alt="Funkard Logo"
          className="w-48 h-48 md:w-64 md:h-64 mb-6"
        />

        <h2 className="text-xl md:text-2xl mb-4 font-medium text-gray-200">
          Costruito per tutti!
        </h2>

        <a
          href="/marketplace"
          className="bg-[#f2b237] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_#f2b237] transition-all"
        >
          Esplora il Marketplace
        </a>
      </section>

      {/* 🔸 LINEA SEPARATRICE */}
      <div className="w-4/5 mx-auto my-16 border-t border-gray-600 opacity-40"></div>

      {/* 🔸 FEATURE SECTION */}
      <section className="text-center px-6">
        <h3 className="text-2xl font-extrabold mb-10 text-[#f2b237]">
          L&apos;anima di Funkard
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* FEATURE 1 */}
          <div className="p-6 rounded-xl bg-[#111] border border-[#f2b237]/20 hover:border-[#f2b237]/60 transition-all hover:shadow-[0_0_20px_#f2b23744]">
            <div className="text-3xl mb-3">🛒</div>
            <h4 className="text-lg font-semibold mb-2 text-[#f2b237]">
              Marketplace intuitivo
            </h4>
            <p className="text-gray-300 text-sm">
              Compra e vendi carte in modo semplice, sicuro e moderno.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="p-6 rounded-xl bg-[#111] border border-[#f2b237]/20 hover:border-[#f2b237]/60 transition-all hover:shadow-[0_0_20px_#f2b23744]">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="text-lg font-semibold mb-2 text-[#f2b237]">
              GradeLens AI
            </h4>
            <p className="text-gray-300 text-sm">
              Analizza e valuta le tue carte con intelligenza artificiale.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="p-6 rounded-xl bg-[#111] border border-[#f2b237]/20 hover:border-[#f2b237]/60 transition-all hover:shadow-[0_0_20px_#f2b23744]">
            <div className="text-3xl mb-3">🗂️</div>
            <h4 className="text-lg font-semibold mb-2 text-[#f2b237]">
              La tua collezione
            </h4>
            <p className="text-gray-300 text-sm">
              Gestisci e mostra le tue carte come un vero collezionista.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
