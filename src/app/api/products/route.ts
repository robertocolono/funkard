// app/api/products/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { ProductType } from "@prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase();
  const type = searchParams.get("type");
  const maxPrice = Number(searchParams.get("maxPrice") || Number.MAX_SAFE_INTEGER);

  const products = await prisma.product.findMany({
    where: {
      AND: [
        q
          ? { title: { contains: q, mode: "insensitive" } }
          : {},
        type && type !== "All" ? { type: type as ProductType } : {},
        { priceEUR: { lte: maxPrice } },
      ],
    },
    include: { seller: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json({ items: products, total: products.length });
}