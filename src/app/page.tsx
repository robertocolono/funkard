import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="pt-12 sm:pt-16">
        <div className="mx-auto flex flex-col items-center text-center">
          {/* Logo piccolo sopra al titolo */}
          <div className="mb-6">
            <Image
              src="/logo-smile.png" // <-- usa il tuo path del logo (piccolo)
              alt="Funkard"
              width={72}
              height={72}
              priority
            />
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Esplora, compra, vendi e scambia in tutto il mondo{" "}
            <span className="text-[#F5C242]">con un semplice click!</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base text-zinc-300 sm:text-lg">
            Il marketplace TCG creato per i collezionisti. Sicuro, globale e completamente trasparente.
          </p>

          {/* Bottone unico */}
          <div className="mt-8">
            <Link
              href="/market"
              className="rounded-xl bg-[#E7B04B] px-5 py-2.5 font-semibold text-white shadow-[inset_0_-2px_0_rgba(0,0,0,.25)] hover:opacity-90 active:opacity-100 transition"
            >
              Entra nel Marketplace
            </Link>
          </div>

          {/* Divider con più respiro */}
          <hr className="mt-12 w-full border-zinc-800" />
        </div>
      </section>

      {/* FEATURE in ORIZZONTALE (3 card) */}
      <section className="py-12 sm:py-14">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Perché scegliere <span className="text-[#F5C242]">Funkard</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 text-center shadow-[0_0_40px_rgba(234,179,8,.08)]">
            <h3 className="mb-2 text-lg font-semibold">SafeTrade</h3>
            <p className="text-sm text-zinc-300">
              Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 text-center shadow-[0_0_40px_rgba(234,179,8,.08)]">
            <h3 className="mb-2 text-lg font-semibold">GradeLens</h3>
            <p className="text-sm text-zinc-300">
              Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 text-center shadow-[0_0_40px_rgba(234,179,8,.08)]">
            <h3 className="mb-2 text-lg font-semibold">Marketplace Globale</h3>
            <p className="text-sm text-zinc-300">
              Connettiti con collezionisti da tutto il mondo in un&apos;unica piattaforma.
            </p>
          </div>
        </div>
      </section>

      {/* POPOLARI: empty state pulito (nessun "terzo bottone") */}
      <section className="py-10">
        <h2 className="mb-6 text-center text-xl font-bold">Le carte più popolari del momento</h2>

        <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-8 text-center">
          <p className="text-sm text-zinc-300">
            Nessuna carta disponibile al momento. Torna presto: questa sezione si aggiornerà automaticamente
            quando saranno presenti i primi dati.
          </p>
        </div>
      </section>

      {/* FOOTER centrato */}
      <footer className="py-16">
        <div className="mx-auto grid max-w-4xl gap-12 text-center sm:grid-cols-3">
          <div>
            <h4 className="mb-3 font-semibold">Navigazione</h4>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li><Link href="/market" className="hover:text-white">Marketplace</Link></li>
              <li><Link href="/collection" className="hover:text-white">Collezione</Link></li>
              <li><Link href="/gradelens" className="hover:text-white">GradeLens</Link></li>
              <li><Link href="/support" className="hover:text-white">Supporto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Legale</h4>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li><Link href="/terms" className="hover:text-white">Termini e Condizioni</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contatti</h4>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li>info@funkard.com</li>
              <li>@funkard</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-400">
          © 2025 Funkard — made by collezionisti, per collezionisti.
        </p>
      </footer>
    </main>
  );
}