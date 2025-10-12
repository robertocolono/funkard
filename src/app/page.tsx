import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b] text-white">
      {/* Glow radiale al centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f2b23733_0%,_#0b0b0b_70%)] pointer-events-none" />

      {/* Sezione principale */}
      <section className="relative z-10 flex flex-col items-center text-center gap-8 px-4 py-32 md:py-40">
        
        {/* Titolo Benvenuto */}
        <p className="text-[#f2b237] text-lg md:text-xl font-semibold tracking-wide">
          Benvenuto su <span className="font-[Bungee]">FUNKARD!</span>
        </p>

        {/* Smile */}
        <div className="flex justify-center items-center">
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={400}
            height={400}
            priority
            className="w-64 md:w-80 lg:w-[420px] h-auto mx-auto select-none"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
          COLLEZIONA. SCAMBIA. VIVI LA PASSIONE.
        </h1>

        {/* Descrizione */}
        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community
          in un&apos;unica piattaforma.
        </p>

        {/* Bottoni */}
        <div className="flex flex-col items-center gap-5 mt-4">
          <Link
            href="/marketplace"
            className="px-10 py-4 border-[3px] border-[#f2b237] text-white font-semibold text-lg rounded-md
                       hover:bg-[#f2b237] hover:text-black shadow-[0_0_20px_#f2b23744] transition-all duration-200"
          >
            Esplora il Marketplace
          </Link>

          <Link
            href="/gradelens"
            className="px-10 py-4 border-[3px] border-[#f2b237] text-white font-semibold text-lg rounded-md
                       hover:bg-[#f2b237] hover:text-black shadow-[0_0_20px_#f2b23744] transition-all duration-200"
          >
            Scopri GradeLens AI
          </Link>
        </div>
      </section>
    </main>
  );
}