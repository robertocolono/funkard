import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, description, price, image, userId } = await req.json();

    if (!name || price == null || !image) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    const card = await prisma.card.create({
      data: {
        name,
        description: description ?? null,
        price: typeof price === "number" ? price : parseFloat(String(price)),
        image,
        userId: userId || null,
      },
    });

    return NextResponse.json(card, { status: 201 });
  } catch (err: unknown) {
    console.error("Errore nel salvataggio:", err);
    return NextResponse.json(
      { error: "Errore nel salvataggio della carta." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cards = await prisma.card.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(cards);
  } catch (err: unknown) {
    console.error("Errore nel recupero:", err);
    return NextResponse.json({ error: "Errore nel recupero carte." }, { status: 500 });
  }
}
