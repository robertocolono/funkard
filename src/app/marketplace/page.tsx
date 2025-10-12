import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/Marketplace/ProductCard";
import { Suspense } from "react";
import { Prisma, Condition } from "@prisma/client";

// 🧠 Query lato server con tutti i filtri
async function getProducts(
  query: string,
  tcg: string,
  condition: string,
  sort: string,
  minPrice: string,
  maxPrice: string
) {
  const filters: Prisma.ProductWhereInput = {};

  if (query) {
    filters.OR = [
      { title: { contains: query } },
      { setName: { contains: query } },
      { rarity: { contains: query } },
    ];
  }

  if (tcg && tcg !== "all") filters.tcg = tcg;
  if (condition && condition !== "all") filters.condition = condition as Condition;

  // Prezzo minimo e massimo (in centesimi)
  if (minPrice || maxPrice) {
    filters.priceEUR = {};
    if (minPrice) filters.priceEUR.gte = parseInt(minPrice) * 100;
    if (maxPrice) filters.priceEUR.lte = parseInt(maxPrice) * 100;
  }

  // Ordinamento dinamico
  let orderBy: Prisma.ProductOrderByWithRelationInput = { createdAt: "desc" };
  if (sort === "low") orderBy = { priceEUR: "asc" };
  else if (sort === "high") orderBy = { priceEUR: "desc" };
  else if (sort === "new") orderBy = { createdAt: "desc" };

  const products = await prisma.product.findMany({
    where: filters,
    include: { seller: true },
    orderBy,
    take: 60, // limitiamo la query per performance
  });

  return products;
}

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    tcg?: string;
    condition?: string;
    sort?: string;
    min?: string;
    max?: string;
  }>;
}) {
  const sp = await searchParams;
  const query = sp.q || "";
  const tcg = sp.tcg || "all";
  const condition = sp.condition || "all";
  const sort = sp.sort || "new";
  const minPrice = sp.min || "";
  const maxPrice = sp.max || "";

  const products = await getProducts(query, tcg, condition, sort, minPrice, maxPrice);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 text-white">
      {/* HERO */}
      <header className="mb-8">
        <h1 className="text-3xl font-black">Marketplace</h1>
        <p className="text-white/60 mt-1">
          Scopri, filtra e acquista carte e prodotti da collezione.
        </p>
      </header>

      {/* FILTRI */}
      <form className="mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Cerca per nome o set..."
          className="rounded-xl bg-[#0c0c0c] px-3 py-2 text-sm placeholder-white/40 focus:outline-none border border-white/10"
        />

        <select
          name="tcg"
          defaultValue={tcg}
          className="rounded-xl bg-[#0c0c0c] px-3 py-2 text-sm text-white/80 border border-white/10"
        >
          <option value="all">Tutti i TCG</option>
          <option value="Pokémon">Pokémon</option>
          <option value="One Piece">One Piece</option>
          <option value="Magic">Magic</option>
          <option value="Yu-Gi-Oh!">Yu-Gi-Oh!</option>
        </select>

        <select
          name="condition"
          defaultValue={condition}
          className="rounded-xl bg-[#0c0c0c] px-3 py-2 text-sm text-white/80 border border-white/10"
        >
          <option value="all">Tutte le condizioni</option>
          <option value="MINT">Mint</option>
          <option value="NEAR_MINT">Near Mint</option>
          <option value="LIGHT_PLAYED">Light Played</option>
          <option value="PLAYED">Played</option>
          <option value="POOR">Poor</option>
        </select>

        <select
          name="sort"
          defaultValue={sort}
          className="rounded-xl bg-[#0c0c0c] px-3 py-2 text-sm text-white/80 border border-white/10"
        >
          <option value="new">Più recenti</option>
          <option value="low">Prezzo crescente</option>
          <option value="high">Prezzo decrescente</option>
        </select>

        <input
          type="number"
          name="min"
          placeholder="Prezzo min (€)"
          defaultValue={minPrice}
          className="rounded-xl bg-[#0c0c0c] px-3 py-2 text-sm placeholder-white/40 border border-white/10"
        />

        <input
          type="number"
          name="max"
          placeholder="Prezzo max (€)"
          defaultValue={maxPrice}
          className="rounded-xl bg-[#0c0c0c] px-3 py-2 text-sm placeholder-white/40 border border-white/10"
        />

        <button
          type="submit"
          className="col-span-2 sm:col-span-1 rounded-xl bg-[#f2b237] px-4 py-2 text-sm font-bold text-black transition hover:opacity-90"
        >
          Applica filtri
        </button>
      </form>

      {/* LISTA PRODOTTI */}
      <Suspense fallback={<p>Caricamento prodotti...</p>}>
        {products.length > 0 ? (
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </section>
        ) : (
          <p className="text-center text-white/60 mt-20">Nessun prodotto trovato.</p>
        )}
      </Suspense>
    </main>
  );
}