import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // (Opzionale) protezione via Authorization Bearer CRON_SECRET
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("Authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const response = await fetch("https://funkard-api.onrender.com/api/gradelens/cleanup", {
      method: "DELETE",
    });

    const data = await response.text();
    console.log("🧹 Cleanup:", data);

    return NextResponse.json({ ok: true, message: data });
  } catch (err) {
    console.error("❌ Cleanup error:", err);
    return NextResponse.json({ ok: false, error: "Cleanup failed" }, { status: 500 });
  }
}
