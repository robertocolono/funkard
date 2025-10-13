import { prisma } from "@/lib/prisma";
import Image from "next/image";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
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
    <section className="min-h-screen bg-[#0b0b0b] text-gray-200 py-16 px-6 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-10">
        {/* Immagine */}
        <div className="flex-1">
          <Image
            src={product.imageUrl || "/images/placeholder.svg"}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Info prodotto */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">
              {product.title}
            </h1>
            <p className="text-lg text-[#f2b237] mb-4">
              €{(product.priceEUR / 100).toFixed(2)}
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>Tipo: {product.type}</p>
              {product.condition && <p>Condizione: {product.condition}</p>}
              <p>Quantità disponibile: {product.quantity}</p>
              <p>TCG: {product.tcg}</p>
            </div>

            {product.description && (
              <p className="mt-6 text-gray-300 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400 mb-1">Venduto da</p>
            <p className="text-white font-medium">
              @{product.seller?.handle} — ⭐ {product.seller?.rating ?? "N/A"}
            </p>

            <button className="mt-6 bg-[#f2b237] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#ffcb4d] transition-all duration-200">
              Acquista ora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}