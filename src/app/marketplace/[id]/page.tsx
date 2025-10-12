import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { seller: true },
  });

  if (!product)
    return (
      <main className="mx-auto max-w-4xl px-4 py-10 text-center text-white">
        <p>Prodotto non trovato.</p>
      </main>
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      {/* HEADER */}
      <header className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight">{product.title}</h1>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-white/70">
            <span className="rounded-full bg-[#f2b237]/20 px-2 py-1 text-[#f2b237] font-semibold text-xs">
              {product.tcg}
            </span>
            {product.isSealed && (
              <span className="rounded-full bg-green-500/20 px-2 py-1 text-green-400 text-xs font-semibold">
                SIGILLATO
              </span>
            )}
            {product.rarity && (
              <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold">
                {product.rarity}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 md:mt-0 text-right">
          <div className="text-4xl font-extrabold text-[#f2b237]">
            € {(product.priceEUR / 100).toLocaleString("it-IT")}
          </div>
          <div className="mt-3 flex items-center gap-3 justify-end">
            <button className="rounded-xl bg-[#f2b237] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90">
              Acquista ora
            </button>
            <button className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition">
              Contatta venditore
            </button>
          </div>
          {product.seller && (
            <p className="mt-2 text-xs text-white/60">
              Venditore: @{product.seller.handle}
              {product.seller.country ? ` • ${product.seller.country}` : ""}
              {product.seller.rating ? ` • ★${product.seller.rating.toFixed(1)}` : ""}
            </p>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* IMMAGINE PRINCIPALE */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-xl">
          <Image
            src={product.imageUrl || "/images/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* INFO DETTAGLIATE */}
        <section>
          <h2 className="text-xl font-bold mb-4">Dettagli prodotto</h2>
          <div className="space-y-2 text-sm">
            <p><span className="text-white/50">Set:</span> {product.setName || "—"}</p>
            <p><span className="text-white/50">Anno:</span> {product.releaseYear || "—"}</p>
            <p><span className="text-white/50">Condizione:</span> {product.condition || "—"}</p>
            <p><span className="text-white/50">Rarità:</span> {product.rarity || "—"}</p>
            <p><span className="text-white/50">Edizione:</span> {product.edition || "—"}</p>
            <p><span className="text-white/50">Tipo:</span> {product.type}</p>
          </div>

          {/* DESCRIZIONE */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">Descrizione</h2>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              {product.description || "Descrizione non fornita dal venditore."}
            </p>
          </div>

          {/* SICUREZZA E SISTEMA */}
          <div className="mt-8 rounded-xl border border-white/10 bg-[#0b0b0b] p-4 text-sm text-white/70">
            <p>🛡️ Transazioni garantite da <strong>Funkard SafeTrade</strong></p>
            <p className="mt-1">Commissione fissa 3% — Pagamenti sicuri con Stripe (in arrivo).</p>
            <Link href="/support" className="mt-2 inline-block text-[#f2b237] underline text-xs">
              Segnala prodotto o apri ticket
            </Link>
          </div>

          {/* SEZIONE VENDITORE */}
          {product.seller && (
            <div className="mt-8 rounded-xl border border-white/10 bg-[#0c0c0c] p-4 text-sm">
              <p className="font-bold">@{product.seller.handle}</p>
              {product.seller.rating && (
                <p className="text-white/70">★ {product.seller.rating.toFixed(1)} / 5</p>
              )}
              {product.seller.country && (
                <p className="text-white/70 mt-1">🌍 {product.seller.country}</p>
              )}
              <p className="mt-3 text-xs text-white/50">
                {product.seller.handle === "FunkardDemo"
                  ? "Venditore demo — esempio di profilo."
                  : "Venditore registrato su Funkard."}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}