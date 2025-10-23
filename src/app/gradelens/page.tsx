import Link from "next/link";

export default function GradeLensPage() {
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
            <Link href="/gradelens" className="text-yellow-400">
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

      {/* MAIN CONTENT */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Valuta le tue carte (GradeLens)</h1>
            <Link href="/gradelens" className="text-white hover:text-yellow-400 transition-colors">
              Prova ora →
            </Link>
          </div>

          {/* GradeLens Modal */}
          <div className="bg-white rounded-lg p-8 text-black">
            {/* Header */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold">GradeLens – Scansione simulata</h2>
            </div>

            {/* Analyze Button */}
            <div className="text-center mb-6">
              <button className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Analizza la carta
              </button>
            </div>

            {/* Warning Box */}
            <div className="bg-yellow-400 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-yellow-900 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Importante</h3>
                  <p className="text-yellow-900 text-sm mb-2">
                    Il punteggio assegnato da GradeLens è una stima simulata basata su parametri tecnici e/o valutazione manuale. Non rappresenta una certificazione ufficiale di condizione o valore.
                  </p>
                  <p className="text-yellow-900 text-sm">
                    Le valutazioni possono differire da quelle di enti di grading professionali (PSA, BGS, CGC, ecc.).
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-gray-600 text-sm">
              *Valutazione simulata non ufficiale. Le carte possono differire da grading professionali.
            </p>
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