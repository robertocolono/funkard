import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-6">
          {/* LOGO TESTUALE */}
          <div className="text-2xl font-extrabold tracking-wide">
            <span className="text-yellow-400">FUN</span>
            <span className="text-white">KARD</span>
          </div>

          {/* NAVLINKS + BOTTONE */}
          <nav className="flex items-center space-x-16 text-base">
            <a href="#marketplace" className="hover:text-yellow-400 transition">Marketplace</a>
            <a href="#collezione" className="hover:text-yellow-400 transition">Collezione</a>
            <a href="#gradelens" className="hover:text-yellow-400 transition">GradeLens</a>
            <a href="#supporto" className="hover:text-yellow-400 transition">Supporto</a>
            <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition">
              Registrati
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-black">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Esplora, compra, vendi e scambia in tutto il mondo{" "}
          <span className="text-yellow-400">con un semplice click!</span>
        </h1>

        <p className="text-gray-300 mb-10 max-w-2xl">
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
          Entra nel Marketplace
        </button>

        {/* Linea divisoria con più respiro */}
        <div className="mt-16 border-b border-yellow-700/50 w-3/4"></div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-8 bg-black">
        <h2 className="text-2xl font-bold text-center mb-12">
          Perché scegliere <span className="text-yellow-400">Funkard</span>
        </h2>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-3">SafeTrade</h3>
            <p className="text-gray-300 text-sm">
              Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">GradeLens</h3>
            <p className="text-gray-300 text-sm">
              Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Marketplace Globale</h3>
            <p className="text-gray-300 text-sm">
              Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.
            </p>
          </div>
        </div>
      </section>

      {/* MARKETPLACE PREVIEW (vuota ma strutturata) */}
      <section id="marketplace" className="py-16 px-8 bg-black border-t border-yellow-700/40">
        <h2 className="text-2xl font-bold text-center mb-8">
          Le carte più popolari del momento
        </h2>

        {/* Qui si popolerà automaticamente con le carte reali */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center text-gray-400">
          {/* Placeholder logico per i dati dinamici */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-700/40 py-12 text-center bg-black">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-sm">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-3">Navigazione</h4>
              <ul className="space-y-2">
                <li><a href="#marketplace" className="hover:text-yellow-400">Marketplace</a></li>
                <li><a href="#collezione" className="hover:text-yellow-400">Collezione</a></li>
                <li><a href="#gradelens" className="hover:text-yellow-400">GradeLens</a></li>
                <li><a href="#supporto" className="hover:text-yellow-400">Supporto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-3">Legale</h4>
              <ul className="space-y-2">
                <li><a href="/terms" className="hover:text-yellow-400">Termini e Condizioni</a></li>
                <li><a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
                <li><a href="/cookies" className="hover:text-yellow-400">Cookie Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-3">Contatti</h4>
              <ul className="space-y-2">
                <li>Email: info@funkard.com</li>
                <li>Instagram: @funkard</li>
                <li>Telegram: @funkard</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-10">
            © 2025 <span className="text-yellow-400 font-semibold">Funkard</span> — made by collezionisti, per collezionisti.
          </p>
        </div>
      </footer>
    </main>
  );
}