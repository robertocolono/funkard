// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FunkardButton } from "@/components/ui/FunkardButton";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* HERO */}
      <section className="pt-10 sm:pt-14">
        {/* Logo piccolo in alto */}
        <div className="mx-auto mb-4 flex justify-center">
          {/* Sostituisci il path con il tuo asset reale */}
          <Image
            src="/logo-smile.svg"
            alt="Funkard"
            width={72}
            height={72}
            priority
            className="opacity-95"
          />
        </div>

        <h1 className="mx-auto max-w-4xl text-center text-3xl sm:text-4xl font-extrabold leading-tight">
          Esplora, compra, vendi e scambia in tutto il mondo{" "}
          <span className="text-[#F6C356]">con un semplice click!</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-[15px] text-zinc-300">
          Il marketplace TCG creato per i collezionisti. Sicuro, globale e
          completamente trasparente.
        </p>

        {/* CTA + separatore con respiro */}
        <div className="mt-6 flex justify-center">
          <FunkardButton as="a" href="/marketplace">
            Entra nel Marketplace
          </FunkardButton>
        </div>

        <hr className="mx-auto mt-8 h-px w-full max-w-4xl border-0 bg-[#F6C356]/40" />
      </section>

      {/* FEATURE (orizzontali) */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Perché scegliere <span className="text-[#F6C356]">Funkard</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <FeatureCard
            title="SafeTrade"
            description="Scambi sicuri e verificati, con protezione integrata per acquirenti e venditori."
            icon={<span>🛡️</span>}
          />

          <FeatureCard
            title="GradeLens"
            description="Analizza e confronta le tue carte grazie al nostro sistema di grading meccanico."
            icon={<span>🧠</span>}
          />

          <FeatureCard
            title="Marketplace Globale"
            description="Connettiti con collezionisti da tutto il mondo in un'unica piattaforma."
            icon={<span>🌐</span>}
          />
        </div>
      </section>

      {/* GRADE LENS CARD */}
      <section className="py-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 text-zinc-900">
            <div className="mb-4 text-center text-xl font-bold">
              🧠 GradeLens — Scansione simulata
            </div>

            <div className="mb-5 flex justify-center">
              <FunkardButton>Analizza la carta</FunkardButton>
            </div>

            <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
              <div className="mb-1 font-semibold">⚠️ Importante</div>
              <p className="leading-6">
                Il punteggio assegnato da GradeLens è una{" "}
                <span className="font-semibold">stima simulata</span> basata su
                parametri tecnici e/o valutazione manuale. Non rappresenta una
                certificazione ufficiale di condizione o valore.
              </p>
              <p className="mt-2 leading-6">
                Le valutazioni possono{" "}
                <span className="font-semibold">
                  differire da quelle di enti di grading professionali
                </span>{" "}
                (PSA, BGS, CGC, ecc.).
              </p>
            </div>

            <p className="mt-3 text-center text-xs text-zinc-500">
              *Valutazione simulata non ufficiale. Le carte possono differire da
              grading professionali.
            </p>
          </div>
        </div>
      </section>

      {/* ANTEPRIMA MARKETPLACE (placeholder vuoto) */}
      <section className="py-10">
        <h3 className="mb-4 text-center text-xl font-semibold">
          Le carte più popolari del momento
        </h3>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 text-center text-zinc-400">
          Nessuna carta disponibile al momento. Torna presto: questa sezione si
          aggiornerà automaticamente quando saranno presenti i primi dati.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <div className="mb-2 font-semibold text-white">Navigazione</div>
              <ul className="space-y-2 text-zinc-300">
                <li>
                  <Link href="/marketplace">Marketplace</Link>
                </li>
                <li>
                  <Link href="/collection">Collezione</Link>
                </li>
                <li>
                  <Link href="/gradelens">GradeLens</Link>
                </li>
                <li>
                  <Link href="/support">Supporto</Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-2 font-semibold text-white">Legale</div>
              <ul className="space-y-2 text-zinc-300">
                <li>
                  <Link href="/terms">Termini e Condizioni</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-2 font-semibold text-white">Contatti</div>
              <ul className="space-y-2 text-zinc-300">
                <li>
                  <a href="mailto:info@funkard.com">info@funkard.com</a>
                </li>
                <li>
                  <a href="https://t.me/funkard" target="_blank">
                    @funkard
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-sm text-zinc-400">
            © {new Date().getFullYear()} <span className="text-[#F6C356]">Funkard</span> — made by collezionisti, per
            collezionisti.
          </p>
        </div>
      </footer>
    </main>
  );
}