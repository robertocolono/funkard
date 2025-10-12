import Image from "next/image";
import { Product, User } from "@prisma/client";

interface ProductWithSeller extends Product {
  seller?: Pick<User, "handle" | "rating" | "country">;
}

export function ProductCard({ product }: { product: ProductWithSeller }) {
  const {
    id,
    title,
    imageUrl,
    tcg,
    setName,
    releaseYear,
    rarity,
    edition,
    condition,
    isSealed,
    priceEUR,
    seller,
    description,
  } = product;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-3 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
      {/* Immagine prodotto */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
        <Image
          src={imageUrl || "/images/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute left-2 top-2 rounded-full bg-[#f2b237] px-2 py-1 text-xs font-bold text-black shadow-sm">
          {tcg}
        </div>
        {isSealed && (
          <div className="absolute right-2 top-2 rounded-full bg-green-500/90 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
            SIGILLATO
          </div>
        )}
      </div>

      {/* Info base */}
      <div className="mt-3 space-y-1">
        <h3 className="line-clamp-1 text-sm font-semibold text-white">{title}</h3>
        <p className="line-clamp-1 text-xs text-white/60">
          {setName ? `${setName}` : ""} {releaseYear ? `• ${releaseYear}` : ""}
          {rarity ? ` • ${rarity}` : ""}
          {condition ? ` • ${condition}` : ""}
        </p>

        {/* Prezzo */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-extrabold text-[#f2b237]">
            € {(priceEUR / 100).toLocaleString("it-IT")}
          </span>
          {edition && (
            <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/80">
              {edition}
            </span>
          )}
        </div>

        {/* Descrizione breve */}
        {description && (
          <p className="line-clamp-2 text-xs text-white/70 mt-1">{description}</p>
        )}

        {/* Venditore */}
        {seller && (
          <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
            <span>@{seller.handle}</span>
            {seller.rating ? <span>★ {seller.rating.toFixed(1)}</span> : null}
          </div>
        )}

        {/* CTA */}
        <a
          href={`/marketplace/${id}`}
          className="mt-3 block w-full rounded-xl bg-[#f2b237] px-4 py-2 text-sm font-bold text-black text-center transition hover:opacity-90"
        >
          Vedi dettagli
        </a>
      </div>
    </article>
  );
}
