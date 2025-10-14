import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { promises as fs } from "fs";
import path from "path";

async function saveUpload(file: File | null, subdir: string): Promise<string | null> {
  if (!file) return null;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadsDir = path.join(process.cwd(), "public", "uploads", subdir);
  await fs.mkdir(uploadsDir, { recursive: true });
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const filePath = path.join(uploadsDir, fileName);
  await fs.writeFile(filePath, buffer);
  return `/uploads/${subdir}/${fileName}`;
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const userId = String(form.get("userId") || "").trim();
    const name = String(form.get("name") || "").trim();
    const condition = form.get("condition") ? String(form.get("condition")) : null;
    const estimatedValueRaw = form.get("estimatedValue");
    const frontImageFile = form.get("frontImage") as unknown as File | null;
    const backImageFile = form.get("backImage") as unknown as File | null;

    if (!userId || !name) {
      return NextResponse.json({ error: "userId e name sono obbligatori" }, { status: 400 });
    }

    const estimatedValue = estimatedValueRaw != null && estimatedValueRaw !== ""
      ? parseFloat(String(estimatedValueRaw))
      : null;

    const [frontImage, backImage] = await Promise.all([
      saveUpload(frontImageFile, userId),
      saveUpload(backImageFile, userId),
    ]);

    const created = await prisma.userCard.create({
      data: {
        userId,
        name,
        condition: condition ?? undefined,
        estimatedValue: estimatedValue ?? undefined,
        frontImage: frontImage ?? undefined,
        backImage: backImage ?? undefined,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error("Errore POST /api/usercards:", err);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return NextResponse.json({ error: "userId richiesto" }, { status: 400 });
    }

    const items = await prisma.userCard.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(items);
  } catch (err) {
    console.error("Errore GET /api/usercards:", err);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
