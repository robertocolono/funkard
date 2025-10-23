import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            FUNKARD
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="text-white hover:text-yellow-400 transition-colors">
              Esplora le collezioni
            </Link>
            <Link href="/collection" className="text-white hover:text-yellow-400 transition-colors">
              Gestisci la tua collezione
            </Link>
            <Link href="/gradelens" className="text-white hover:text-yellow-400 transition-colors">
              Valuta le tue carte
            </Link>
            <Link href="/support" className="text-white hover:text-yellow-400 transition-colors">
              Supporto
            </Link>
            <Link href="/faq" className="text-white hover:text-yellow-400 transition-colors">
              FAQ
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Registrati
            </Link>
            <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors">
              Light
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Esplora, compra, vendi e scambia la tua collezione con un semplice click!
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Esplora collezioni leggendarie, scambia con la community e diventa un collezionista esperto o amatoriale con il nostro supporto.
          </p>
          
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Dal marketplace</span>
            <Link href="/marketplace" className="text-white hover:text-yellow-400 transition-colors">
              Esplora il marketplace →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400" style={{textShadow: '0 0 20px rgba(255, 193, 7, 0.5)'}}>
            Diventa un collezionista e divertiti!
          </h2>
          <p className="text-xl text-white mb-12">
            Scopri tutte le funzionalità del mondo Funkard.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 border border-yellow-400/30 rounded-lg p-6 text-center hover:border-yellow-400/60 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Marketplace intuitivo</h3>
              <p className="text-gray-300">
                Compra e vendi carte in modo semplice, sicuro e moderno.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900 border border-yellow-400/30 rounded-lg p-6 text-center hover:border-yellow-400/60 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">GradeLens AI</h3>
              <p className="text-gray-300">
                Analizza e valuta le tue carte con intelligenza artificiale.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900 border border-yellow-400/30 rounded-lg p-6 text-center hover:border-yellow-400/60 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12C15.7 12 15.4 11.9 15.1 11.8L12 14.9L8.9 11.8C8.6 11.9 8.3 12 8 12C5.8 12 4 10.2 4 8S5.8 4 8 4C8.3 4 8.6 4.1 8.9 4.2L12 1.1L15.1 4.2C15.4 4.1 15.7 4 16 4M8 6C6.9 6 6 6.9 6 8S6.9 10 8 10 10 9.1 10 8 9.1 6 8 6M16 6C14.9 6 14 6.9 14 8S14.9 10 16 10 18 9.1 18 8 17.1 6 16 6M12 16.9L15.1 20L8.9 20L12 16.9Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">La tua collezione</h3>
              <p className="text-gray-300">
                Gestisci e mostra le tue carte come un vero collezionista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT & COMMUNITY */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Support */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Supporto</h3>
              <p className="text-gray-300 mb-6">
                Hai domande o problemi? Il nostro team è a disposizione. Apri un ticket e ti aiutiamo subito.
              </p>
              <Link href="/support" className="text-white hover:text-yellow-400 transition-colors">
                Vai al supporto →
              </Link>
            </div>
            
            {/* Community */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Community</h3>
              <p className="text-gray-300 mb-6">
                Scopri consigli, guide e novità dal mondo del collezionismo. Condividi esperienze con altri collezionisti.
              </p>
              <Link href="/community" className="text-white hover:text-yellow-400 transition-colors">
                Entra in community →
              </Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300"
            >
              Registrati ora
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Funkard © 2025 — Da collezionisti per collezionisti.
          </p>
        </div>
      </footer>
    </main>
  );
}
