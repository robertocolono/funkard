export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-[#0A0A0A] min-h-screen">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Funkard logo"
        className="w-40 h-auto mb-8 drop-shadow-[0_0_25px_#FFB300]"
      />

      {/* Titolo */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-[#FFB300] tracking-tight mb-4">
        FUNKARD
      </h1>

      {/* Sottotitolo */}
      <h2 className="text-2xl text-gray-200 mb-6 font-medium">
        Costruito per tutti!
      </h2>

      {/* Descrizione */}
      <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
        Il nuovo modo di collezionare, connettere e giocare.  
        Una piattaforma creata per rendere il collezionismo accessibile,  
        divertente e pieno di opportunità.
      </p>

      {/* Bottone */}
      <a
        href="/marketplace"
        className="bg-gradient-to-r from-[#FFB300] to-[#FF7A00] text-black font-bold text-lg py-3 px-10 rounded-xl 
                   shadow-[0_0_25px_#FFB300] hover:shadow-[0_0_40px_#FF7A00] transition-all duration-300 hover:scale-105"
      >
        Esplora il Marketplace
      </a>

      {/* Slogan footer piccolo */}
      <p className="text-sm text-gray-500 mt-16">
        © 2025 Funkard — Collect. Connect. Play.
      </p>
    </section>
  );
}
