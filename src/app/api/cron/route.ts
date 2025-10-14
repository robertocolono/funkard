import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const auth = req.headers.get("Authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const started = Date.now();
  try {
    const response = await fetch("https://funkard-api.onrender.com/api/gradelens/cleanup", {
      method: "DELETE",
    });
    const data = await response.text();
    const durationMs = Date.now() - started;
    console.log(
      JSON.stringify({
        event: "gradelens_cleanup",
        ok: response.ok,
        status: response.status,
        durationMs,
        message: data.slice(0, 200),
        timestamp: new Date().toISOString(),
      })
    );
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: data || "Cleanup failed" }, { status: 500 });
    }
    return NextResponse.json({ ok: true, message: data, durationMs });
  } catch (err) {
    const durationMs = Date.now() - started;
    const errorMessage = (err instanceof Error) ? err.message : String(err);
    console.error(
      JSON.stringify({
        event: "gradelens_cleanup_error",
        error: errorMessage,
        durationMs,
        timestamp: new Date().toISOString(),
      })
    );
    return NextResponse.json({ ok: false, error: "Cleanup failed" }, { status: 500 });
  }
}
