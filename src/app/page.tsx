import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-16">
        {/* Logo piccolo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img
            src="/logo/funkard-smile.svg" /* aggiorna al path corretto */
            alt="Funkard"
            className="h-12 md:h-14 w-auto opacity-95"
          />
        </div>

        <h1 className="text-center text-3xl md:text-5xl font-extrabold tracking-[-0.02em] leading-tight">
          Esplora, compra, vendi e scambia in tutto il mondo <span className="text-[#FFC72C]">con un semplice click!</span>
        </h1>

        <p className="mt-4 text-center text-zinc-300 max-w-2xl mx-auto">
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
        </p>

        <div className="mt-6 flex justify-center">
          <a href="/market" className="btn-primary">Entra nel Marketplace</a>
        </div>

        {/* Divider con più aria */}
        <hr className="mt-10 md:mt-12 border-zinc-800" />
      </section>

      {/* FEATURE in ORIZZONTALE (3 colonne, aria generosa) */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold">
          Perché scegliere <span className="text-[#FFC72C]">Funkard</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SafeTrade */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-semibold mb-2">SafeTrade</h3>
            <p className="text-zinc-300">
              Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
            </p>
          </div>

          {/* GradeLens (meccanico) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-semibold mb-2">GradeLens</h3>
            <p className="text-zinc-300">
              Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.
            </p>
          </div>

          {/* Marketplace Globale */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-semibold mb-2">Marketplace Globale</h3>
            <p className="text-zinc-300">
              Connettiti con collezionisti da tutto il mondo in un'unica piattaforma.
            </p>
          </div>
        </div>
      </section>

      {/* ANTEPRIMA MARKETPLACE – vuota, pulita */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12">
        <h3 className="text-center text-2xl md:text-3xl font-bold">Le carte più popolari del momento</h3>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 text-center">
          <p className="text-zinc-300">
            Nessuna carta disponibile al momento. Torna presto: questa sezione si aggiornerà automaticamente quando
            saranno presenti i primi dati.
          </p>
        </div>
      </section>

      {/* FOOTER centrato */}
      <footer className="border-t border-zinc-800 mt-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Navigazione</h4>
              <ul className="space-y-1 text-zinc-300">
                <li><a href="/market">Marketplace</a></li>
                <li><a href="/collection">Collezione</a></li>
                <li><a href="/gradelens">GradeLens</a></li>
                <li><a href="/support">Supporto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legale</h4>
              <ul className="space-y-1 text-zinc-300">
                <li><a href="/terms">Termini e Condizioni</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contatti</h4>
              <ul className="space-y-1 text-zinc-300">
                <li>info@funkard.com</li>
                <li>@funkard</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Funkard — made by collezionisti, per collezionisti.
          </p>
        </div>
      </footer>
    </main>
  );
}