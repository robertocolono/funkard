import { prisma } from "@/lib/prisma";
import Image from "next/image";
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
    <main className="mx-auto max-w-7xl px-6 py-16 text-white">
      {/* HERO */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-[#f2b237] drop-shadow-[0_0_10px_rgba(242,178,55,0.4)]">
          Marketplace
        </h1>
        <p className="text-white/70 mt-2 max-w-2xl mx-auto md:mx-0 font-medium">
          Scopri, filtra e acquista carte e prodotti da collezione in un ambiente
          sicuro, moderno e pensato per veri collezionisti.
        </p>
      </header>

      <div className="h-[1px] bg-white/5 my-10" />

      {/* FILTRI */}
      <section className="mb-12 bg-[#0c0c0c] border border-white/10 rounded-2xl p-6">
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Cerca per nome o set..."
            className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
          />

          <select
            name="tcg"
            defaultValue={tcg}
            className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white/80 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
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
            className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white/80 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
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
            className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white/80 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
          >
            <option value="new">Più recenti</option>
            <option value="low">Prezzo crescente</option>
            <option value="high">Prezzo decrescente</option>
          </select>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              name="min"
              placeholder="Prezzo min (€)"
              defaultValue={minPrice}
              className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm placeholder-white/40 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
            />
            <input
              type="number"
              name="max"
              placeholder="Prezzo max (€)"
              defaultValue={maxPrice}
              className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm placeholder-white/40 focus:ring-1 focus:ring-[#f2b237] hover:brightness-110"
            />
          </div>

          <button
            type="submit"
            className="btn-funkard w-full"
          >
            Applica filtri
          </button>
        </form>
      </section>

      <div className="h-[1px] bg-white/5 my-10" />

      {/* LISTA PRODOTTI */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-[#0b0b0b] border border-white/10 overflow-hidden hover:shadow-[0_0_15px_rgba(242,178,55,0.2)] transition-all duration-200"
            >
              <div className="relative w-full h-52 bg-[#111]">
                <Image
                  src={p.imageUrl || "/images/placeholder.svg"}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold truncate">{p.title}</h2>
                <p className="text-sm text-white/70 truncate font-medium">
                  {p.setName || "Set sconosciuto"}
                </p>
                <p className="mt-2 text-[#f2b237] font-bold">
                  € {(p.priceEUR / 100).toLocaleString("it-IT")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white/60 mt-20">
            Nessun prodotto trovato.
          </p>
        )}
      </section>
    </main>
  );
}