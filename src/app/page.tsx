import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-3xl font-extrabold group">
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
              FUN
            </span>
            <span className="text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              KARD
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium">
              <span className="relative z-10">Marketplace</span>
              <div className="absolute inset-0 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/collection" className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium">
              <span className="relative z-10">Collezione</span>
              <div className="absolute inset-0 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/gradelens" className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium">
              <span className="relative z-10">GradeLens</span>
              <div className="absolute inset-0 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/support" className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium">
              <span className="relative z-10">Supporto</span>
              <div className="absolute inset-0 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/register"
              className="group relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Registrati</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-24 pb-20 px-6 text-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5 dark:from-yellow-500/20 dark:via-transparent dark:to-yellow-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-500/15 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Logo with Glow Effect */}
          <div className="relative mb-8 animate-fadeInSlow">
            <Image
              src="/logo.png"
              alt="Funkard Logo"
              width={140}
              height={140}
              className="mx-auto drop-shadow-[0_0_30px_rgba(242,178,55,0.5)] hover:drop-shadow-[0_0_40px_rgba(242,178,55,0.7)] transition-all duration-500 hover:scale-105 animate-float"
              priority
            />
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl scale-150 animate-glow"></div>
          </div>
          
          {/* Main Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fadeInSlow">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Cerca il tuo{" "}
            </span>
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(242,178,55,0.5)] animate-glow">
              TCG
            </span>
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              {" "}preferito
            </span>
          </h1>
          
          {/* Subtitle with Better Typography */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fadeInSlow">
            Scopri, acquista e vendi carte da collezione in sicurezza. 
            <span className="text-yellow-500 font-medium animate-shimmer"> Tutti i TCG, un solo marketplace.</span>
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInSlow">
            <Link
              href="/marketplace"
              className="group relative px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,178,55,0.4)] transform animate-glow"
            >
              <span className="relative z-10">Vai al Marketplace</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/gradelens"
              className="group px-10 py-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-2xl hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,178,55,0.3)] backdrop-blur-sm bg-white/10 dark:bg-black/10 animate-float"
            >
              Analizza Carte
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Perché scegliere{" "}
              </span>
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Funkard?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Funzionalità pensate per ogni collezionista, da principianti a esperti.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Marketplace Intuitivo</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Compra e vendi carte con facilità. Interfaccia semplice, sicura e pensata per ogni livello di esperienza.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">GradeLens AI</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Analizza automaticamente le tue carte con intelligenza artificiale avanzata. Valutazioni precise e istantanee.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12C15.7 12 15.4 11.9 15.1 11.8L12 14.9L8.9 11.8C8.6 11.9 8.3 12 8 12C5.8 12 4 10.2 4 8S5.8 4 8 4C8.3 4 8.6 4.1 8.9 4.2L12 1.1L15.1 4.2C15.4 4.1 15.7 4 16 4M8 6C6.9 6 6 6.9 6 8S6.9 10 8 10 10 9.1 10 8 9.1 6 8 6M16 6C14.9 6 14 6.9 14 8S14.9 10 16 10 18 9.1 18 8 17.1 6 16 6M12 16.9L15.1 20L8.9 20L12 16.9Z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Community</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Connettiti con altri collezionisti, scambia esperienze e cresci insieme alla community più attiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/10 dark:from-yellow-500/10 dark:via-transparent dark:to-yellow-500/20"></div>
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-yellow-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Inizia la tua{" "}
            </span>
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              collezione
            </span>
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              {" "}oggi
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unisciti a migliaia di collezionisti che hanno già scelto Funkard.
            <span className="text-yellow-500 font-medium"> Inizia gratis, cresci con noi.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/register"
              className="group relative px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(242,178,55,0.5)] transform"
            >
              <span className="relative z-10">Registrati Gratis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/marketplace"
              className="px-12 py-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-2xl hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,178,55,0.3)] backdrop-blur-sm bg-white/10 dark:bg-black/10"
            >
              Esplora il Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                FUNKARD
              </span>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Da collezionisti per collezionisti. La community più attiva del mondo TCG.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Supporto</h3>
              <div className="space-y-2">
                <Link href="/support" className="block text-gray-300 hover:text-yellow-500 transition">
                  Centro Assistenza
                </Link>
                <Link href="/faq" className="block text-gray-300 hover:text-yellow-500 transition">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-yellow-500 transition">
                  Contattaci
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Azienda</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-yellow-500 transition">
                  Chi Siamo
                </Link>
                <Link href="/careers" className="block text-gray-300 hover:text-yellow-500 transition">
                  Lavora con Noi
                </Link>
                <Link href="/press" className="block text-gray-300 hover:text-yellow-500 transition">
                  Stampa
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Legale</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-gray-300 hover:text-yellow-500 transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-yellow-500 transition">
                  Termini di Servizio
                </Link>
                <Link href="/cookies" className="block text-gray-300 hover:text-yellow-500 transition">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Funkard. Tutti i diritti riservati. Made with ❤️ for collectors.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
