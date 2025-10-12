import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* background soft + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-[#0a0a0a] to-[#0b0b0b]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-[#f2b237]/14 blur-[120px]" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-28 flex flex-col items-center text-center">
        {/* Tag di benvenuto */}
        <p className="text-[#f2b237] text-lg md:text-xl font-semibold tracking-wide mb-6">
          Benvenuto su <span className="font-[Bungee]">Funkard!</span>
        </p>

        {/* Smile centrale */}
        <div className="mb-10">
          <Image
            src="/smile-closed.png"
            alt="Funkard Smile"
            width={420}
            height={420}
            priority
            className="w-60 md:w-80 lg:w-[420px] h-auto mx-auto select-none"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          COLLEZIONA. SCAMBIA. <br className="hidden md:block" /> VIVI LA PASSIONE.
        </h1>

        {/* Sottotitolo */}
        <p className="text-gray-400 max-w-3xl text-base md:text-lg leading-relaxed mb-10">
          Il nuovo ecosistema digitale per i collezionisti moderni. Marketplace, AI e community
          in un&apos;unica piattaforma.
        </p>

        {/* CTA – uno sotto l'altro, centrati */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/marketplace"
            className="px-8 py-3 border-[3px] border-[#f2b237] text-white font-bold text-lg rounded-md
                       hover:bg-[#f2b237] hover:text-black transition-all duration-200"
          >
            Esplora il Marketplace
          </Link>

          <Link
            href="/gradelens"
            className="px-8 py-3 border-[3px] border-[#f2b237] text-white font-bold text-lg rounded-md
                       hover:bg-[#f2b237] hover:text-black transition-all duration-200"
          >
            Scopri GradeLens AI
          </Link>
        </div>
      </section>
    </main>
  );
}