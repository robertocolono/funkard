import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: { seller: true },
  });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-300">
        <h1 className="text-2xl font-semibold">Prodotto non trovato</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-gray-200 py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12">

        {/* --- Immagine principale --- */}
        <div className="flex-1 flex justify-center items-start relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
          {product.isSealed && (
            <span className="absolute top-4 left-4 bg-[#f2b237] text-black font-bold px-3 py-1 rounded-md text-xs">
              SIGILLATO
            </span>
          )}
        </div>

        {/* --- Info prodotto --- */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 text-white">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm bg-zinc-800 px-3 py-1 rounded-md uppercase tracking-wide">
                {product.tcg}
              </span>
              <span className="text-sm bg-zinc-800 px-3 py-1 rounded-md uppercase tracking-wide">
                {product.type}
              </span>
            </div>

            <p className="text-4xl font-semibold text-[#f2b237] mb-6">
              €{(product.priceEUR / 100).toFixed(2)}
            </p>

            <button className="w-full bg-[#f2b237] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#ffcb4d] transition-all duration-200 shadow-md">
              Acquista ora
            </button>

            {/* --- Scheda informazioni --- */}
            <div className="mt-8 space-y-2 text-sm text-gray-400 border-t border-gray-800 pt-6">
              {product.setName && <p><span className="text-gray-300">Set:</span> {product.setName}</p>}
              {product.releaseYear && <p><span className="text-gray-300">Anno:</span> {product.releaseYear}</p>}
              {product.rarity && <p><span className="text-gray-300">Rarità:</span> {product.rarity}</p>}
              {product.edition && <p><span className="text-gray-300">Edizione:</span> {product.edition}</p>}
              {product.condition && (
                <p>
                  <span className="text-gray-300">Condizione:</span> {product.condition}
                </p>
              )}
              <p><span className="text-gray-300">Quantità:</span> {product.quantity}</p>
            </div>

            {product.description && (
              <p className="mt-8 text-gray-300 leading-relaxed border-t border-gray-800 pt-6">
                {product.description}
              </p>
            )}
          </div>

          {/* --- Box sicurezza Funkard --- */}
          <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <p className="text-sm text-gray-400">
              🔒 Transazioni garantite Funkard — commissione fissa <span className="text-[#f2b237] font-semibold">3%</span>
            </p>
            <Link
              href="/support"
              className="mt-3 inline-block text-xs text-gray-400 underline hover:text-[#f2b237] transition"
            >
              Segnala prodotto
            </Link>
          </div>

          {/* --- Sezione venditore --- */}
          <div className="mt-8 border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400 mb-1">Venduto da</p>
            <p className="text-white font-medium">
              @{product.seller.handle}{product.seller.paese ? ` — ${product.seller.paese}` : ""}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {product.seller.tipoUtente === "BUSINESS" ? "Business" : "Privato"}
              {product.seller.verified ? " · Verificato" : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}