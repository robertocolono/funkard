import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-40 text-center bg-gradient-to-b from-neutral-950 via-black to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-8 drop-shadow-[0_0_30px_#FFB300] leading-tight">
          Pronto a iniziare la tua avventura?
        </h2>
        <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Unisciti a centinaia di collezionisti — crea il tuo account e scopri Funkard.
        </p>
        <Link
          href="/register"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl py-6 px-16 rounded-2xl hover:from-yellow-300 hover:to-yellow-400 shadow-[0_0_50px_#FFB300]/70 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_#FFB300]/90 transform hover:-translate-y-1"
        >
          🚀 Crea il tuo account
        </Link>
      </div>
    </section>
  );
}