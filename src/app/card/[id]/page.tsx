import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const card = await prisma.card.findUnique({ where: { id } });

  if (!card) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center text-white">
        <p>Carta non trovata.</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-white">
      <Link href="/marketplace" className="text-sm text-white/60 hover:text-white">← Torna al catalogo</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="relative w-full aspect-[3/4] bg-[#111] rounded-xl overflow-hidden">
          <Image src={card.image} alt={card.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{card.name}</h1>
          {card.description && (
            <p className="text-white/80 mb-4">{card.description}</p>
          )}
          <p className="text-2xl text-primary font-extrabold">€ {card.price.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
}
