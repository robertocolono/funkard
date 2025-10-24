"use client";
import { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type Range = "7d" | "30d" | "1y";

export default function TrendChart({ itemName, category = "card" }: { itemName: string; category?: string; }) {
  const [range, setRange] = useState("30d" as Range);
  const [data, setData] = useState(null as {
    itemName: string;
    category: string;
    rangeType: string;
    points: Array<{ date: string; avgPrice: number }>;
    lastSoldPrice: number;
    updatedAt: string;
    status: string;
    manualCheck: boolean;
  } | null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    const load = async (r: Range) => {
      setLoading(true);
      try {
        const base = process.env.NEXT_PUBLIC_API_URL!;
        const res = await fetch(`${base}/api/valuation/trend/${r}/${encodeURIComponent(itemName)}?category=${category}`, { cache: "no-store" });
        setData(await res.json());
      } finally { setLoading(false); }
    };
    
    load(range); 
  }, [range, itemName, category]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-sm text-gray-400">Ultima vendita:</div>
        <div className="text-sm font-semibold">{data?.lastSoldPrice ? `${data.lastSoldPrice.toFixed(2)} €` : "—"}</div>
        <div className="ml-auto flex rounded-lg overflow-hidden border border-zinc-700">
          {(["7d","30d","1y"] as Range[]).map(r => (
            <button key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 text-sm ${range===r?"bg-yellow-500 text-black":"bg-zinc-900 text-gray-300 hover:bg-zinc-800"}`}>
              {r === "7d" ? "7g" : r === "30d" ? "1m" : "1a"}
            </button>
          ))}
        </div>
      </div>

      {loading && <div className="text-sm text-gray-400">Caricamento trend…</div>}

      {data?.status !== "ok" ? (
        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-sm">
          {data?.status === "new_item" && "Nuovo prodotto: in attesa di storico. Segnalato all'admin."}
          {data?.status === "insufficient_data" && "Storico insufficiente per mostrare il grafico. Segnalato all'admin."}
        </div>
      ) : (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.points}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={["auto","auto"]} />
              <Tooltip />
              <Line type="monotone" dataKey="avgPrice" stroke="#facc15" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
