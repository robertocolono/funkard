// Deprecated endpoint removed due to schema changes.
export async function GET() {
  return new Response(JSON.stringify([]), { headers: { "content-type": "application/json" } });
}