import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-[#111] to-[#0A0A0A] text-center text-white py-32 px-6">
      <h2 className="text-5xl font-extrabold mb-6 text-[#FFB300] drop-shadow-[0_0_20px_#FF7A00]">
        Pronto a iniziare la tua avventura?
      </h2>
      <p className="text-lg text-gray-400 mb-10">
        Unisciti a centinaia di collezionisti — Crea il tuo account e scopri Funkard.
      </p>

      <Link
        href="/register"
        className="bg-gradient-to-r from-[#FFB300] to-[#FF7A00] text-black font-bold text-lg py-4 px-12 
                   rounded-xl shadow-[0_0_25px_#FF7A00] hover:shadow-[0_0_40px_#FFB300] transition-all duration-300 hover:scale-105"
      >
        Crea il tuo account
      </Link>
    </section>
  );
}
