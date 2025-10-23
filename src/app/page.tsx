import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-yellow-500">FUN</span>KARD
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/marketplace" className="hover:text-yellow-500 transition">
              Market
            </Link>
            <Link href="/collection" className="hover:text-yellow-500 transition">
              Collezione
            </Link>
            <Link href="/gradelens" className="hover:text-yellow-500 transition">
              GradeLens
            </Link>
            <Link href="/support" className="hover:text-yellow-500 transition">
              Support
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Registrati
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.png"
            alt="Funkard Logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cerca il tuo <span className="text-yellow-500">TCG</span> preferito
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Scopri, acquista e vendi carte da collezione in sicurezza. 
            Tutti i TCG, un solo marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Vai al Marketplace
            </Link>
            <Link
              href="/gradelens"
              className="px-8 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Analizza Carte
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perché scegliere Funkard?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketplace Intuitivo</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Compra e vendi carte con facilità. Interfaccia semplice e sicura.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">GradeLens AI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analizza automaticamente le tue carte con intelligenza artificiale.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connettiti con altri collezionisti e scambia esperienze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Inizia la tua collezione oggi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Unisciti a migliaia di collezionisti che hanno già scelto Funkard.
          </p>
          <Link
            href="/register"
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            Registrati Gratis
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-yellow-500">FUN</span>KARD
          </div>
          <p className="text-gray-400 mb-4">
            Da collezionisti per collezionisti
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/support" className="hover:text-yellow-500 transition">
              Support
            </Link>
            <Link href="/about" className="hover:text-yellow-500 transition">
              Chi Siamo
            </Link>
            <Link href="/privacy" className="hover:text-yellow-500 transition">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
