import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const listings = await prisma.listing.findMany({
    include: {
      card: true,
      seller: {
        select: { username: true, name: true },
      },
    },
  });
  return NextResponse.json(listings);
}