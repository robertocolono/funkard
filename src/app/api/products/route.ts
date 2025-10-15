// app/api/products/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase();
  const type = searchParams.get("type");
  const maxPrice = Number(searchParams.get("maxPrice") || Number.MAX_SAFE_INTEGER);

  const products = await prisma.product.findMany({
    where: {
      AND: [
        q
          ? { title: { contains: q } }
          : {},
        type && type !== "All" ? { type: type as any } : {}, // eslint-disable-line @typescript-eslint/no-explicit-any
        { priceEUR: { lte: maxPrice } },
      ],
    },
    include: { seller: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ items: products, total: products.length });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      type,
      tcg,
      setName,
      releaseYear,
      rarity,
      edition,
      isSealed,
      condition,
      priceEUR,
      quantity,
      imageUrl,
      description,
      sellerId,
    } = body || {};

    // Validazione minima
    if (!title || priceEUR == null || !sellerId || !tcg) {
      return NextResponse.json({ error: "Dati incompleti" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        title,
        type,
        tcg,
        setName: setName || null,
        releaseYear: typeof releaseYear === "number" ? releaseYear : releaseYear ? parseInt(releaseYear) : null,
        rarity: rarity || null,
        edition: edition || null,
        isSealed: typeof isSealed === "boolean" ? isSealed : String(isSealed) === "true",
        condition: condition || null,
        priceEUR: Math.round(Number(priceEUR) * 100),
        quantity: quantity ? parseInt(quantity) : 1,
        imageUrl: imageUrl || "/images/placeholder.svg",
        description: description || null,
        sellerId,
      },
    });

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error("Errore creazione prodotto:", error);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}