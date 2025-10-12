import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ✅ GET → storico prezzi
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const prices = await prisma.priceHistory.findMany({
    where: { productId: id },
    orderBy: { date: "desc" },
    take: 20,
  });

  const avg =
    prices.length > 0
      ? prices.reduce((a, b) => a + b.priceEUR, 0) / prices.length
      : 0;

  return NextResponse.json({
    items: prices.map((p) => ({
      id: p.id,
      date: p.date,
      priceEUR: p.priceEUR,
      source: p.source,
      note: p.note,
    })),
    average: Math.round(avg),
  });
}

// ✅ POST → aggiunge un nuovo valore prezzo
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { priceEUR, source, note } = body;

    if (!priceEUR || isNaN(priceEUR)) {
      return NextResponse.json(
        { error: "Valore prezzo non valido" },
        { status: 400 }
      );
    }

    const newPrice = await prisma.priceHistory.create({
      data: {
        productId: id,
        priceEUR: Math.round(priceEUR),
        source: source || "admin",
        note: note || "Aggiornamento manuale",
      },
    });

    return NextResponse.json({ success: true, data: newPrice });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Errore durante l'inserimento del prezzo" },
      { status: 500 }
    );
  }
}