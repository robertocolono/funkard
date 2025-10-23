import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28 text-center bg-gradient-to-b from-yellow-500/20 via-black to-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-[0_0_25px_#FFB300]">
          Pronto a iniziare la tua avventura?
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Unisciti a centinaia di collezionisti — crea il tuo account e scopri Funkard.
        </p>
        <Link
          href="/register"
          className="inline-block bg-yellow-400 text-black font-bold text-lg py-4 px-12 rounded-lg hover:bg-yellow-300 shadow-[0_0_35px_#FFB300]/60 transition-all duration-300 hover:scale-105"
        >
          Crea il tuo account
        </Link>
      </div>
    </section>
  );
}
