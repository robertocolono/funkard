export async function GET() {
  return new Response(
    JSON.stringify({ error: "Endpoint deprecato. Usa /api/usercards" }),
    { status: 410, headers: { "content-type": "application/json" } }
  );
}

export async function POST() {
  return new Response(
    JSON.stringify({ error: "Endpoint deprecato. Usa /api/usercards" }),
    { status: 410, headers: { "content-type": "application/json" } }
  );
}
