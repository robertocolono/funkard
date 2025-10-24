import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="w-32 h-32 mb-6">
          <Image
            src="/logo.png" // percorso corretto del tuo logo
            alt="Funkard Logo"
            width={128}
            height={128}
            className="object-contain mx-auto"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
          Esplora, compra, vendi e scambia in tutto il mondo con un{" "}
          <span className="text-yellow-400">semplice click!</span>
        </h1>
        <p className="mt-4 text-neutral-300 text-sm md:text-base">
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </p>

        <div className="mt-8 flex space-x-4">
          <Link
            href="/marketplace"
            className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Entra nel Marketplace
          </Link>
        </div>

        <div className="border-b border-yellow-400 w-2/3 mt-14"></div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">SafeTrade</h3>
          <p className="mt-2 text-neutral-300 text-sm">
            Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">GradeLens</h3>
          <p className="mt-2 text-neutral-300 text-sm">
            Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Marketplace Globale</h3>
          <p className="mt-2 text-neutral-300 text-sm">
            Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-10 text-center text-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Navigazione</h4>
            <ul className="space-y-1 text-neutral-300">
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/collezione">Collezione</Link></li>
              <li><Link href="/gradelens">GradeLens</Link></li>
              <li><Link href="/supporto">Supporto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Legale</h4>
            <ul className="space-y-1 text-neutral-300">
              <li><Link href="/termini">Termini e Condizioni</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/cookie">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Contatti</h4>
            <p className="text-neutral-300 text-sm">info@funkard.com</p>
            <p className="text-neutral-300 text-sm">@funkard</p>
          </div>
        </div>

        <p className="mt-8 text-neutral-500 text-xs">
          © 2025 <span className="text-yellow-400">Funkard</span> — made by collezionisti, per collezionisti.
        </p>
      </footer>
    </div>
  );
}