import { NextResponse } from "next/server";

// Protezione basilare: opzionale header segreto (imposta NEXT_PUBLIC_CRON_SECRET o CRON_SECRET lato Vercel)
const CRON_SECRET = process.env.CRON_SECRET || process.env.NEXT_PUBLIC_CRON_SECRET;

export async function POST(req: Request) {
  // Se definito un segreto, richiedilo nell'header x-cron-secret
  if (CRON_SECRET) {
    const provided = req.headers.get("x-cron-secret");
    if (!provided || provided !== CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const response = await fetch("https://funkard-api.onrender.com/api/gradelens/cleanup", {
      method: "DELETE",
    });

    const data = await response.text();
    console.log("GradeLens cleanup eseguito:", data);

    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    console.error("Errore GradeLens cleanup:", error);
    return NextResponse.json({ error: "Cleanup failed" }, { status: 500 });
  }
}

export async function GET() {
  // Informativo: suggerisce uso metodo POST
  return NextResponse.json({ ok: false, message: "Usa POST per trigger cleanup." }, { status: 405 });
}
