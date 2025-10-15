"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { adminApi } from "@/lib/adminApi";

interface PendingItem {
  itemName: string;
  category: string;
  rangeType: string;
  updatedAt: string;
  status: string;
  manualCheck: boolean;
}

export default function AdminMarketPage() {
  const [items, setItems] = useState<PendingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPendingItems = async () => {
      try {
        const data = await adminApi.getPendingItems();
        setItems(data);
      } catch (err) {
        setError("Errore nel caricamento dei dati");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingItems();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-400">Caricamento...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">📈 Market Pending</h1>
        <p className="text-gray-400 text-sm">
          Gestisci i prodotti in attesa di revisione o con dati insufficienti
        </p>
      </div>

      {items.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
          <div className="text-gray-400 mb-2">🎉</div>
          <div className="text-sm text-gray-400">Nessun elemento in attesa.</div>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-800 text-gray-300">
              <tr>
                <th className="p-4 text-left font-medium">Item</th>
                <th className="p-4 text-left font-medium">Categoria</th>
                <th className="p-4 text-left font-medium">Range</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Ultimo update</th>
                <th className="p-4 text-left font-medium">Azione</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx} className="border-t border-zinc-700 hover:bg-zinc-800/50">
                  <td className="p-4 font-medium text-white">{item.itemName}</td>
                  <td className="p-4 text-gray-300">{item.category}</td>
                  <td className="p-4 text-gray-300">{item.rangeType}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "new_item" 
                        ? "bg-blue-900 text-blue-300" 
                        : item.status === "insufficient_data"
                        ? "bg-orange-900 text-orange-300"
                        : "bg-gray-900 text-gray-300"
                    }`}>
                      {item.status === "new_item" ? "Nuovo" : 
                       item.status === "insufficient_data" ? "Dati insufficienti" : 
                       item.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">
                    {new Date(item.updatedAt).toLocaleDateString("it-IT", {
                      day: "2-digit",
                      month: "2-digit", 
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </td>
                  <td className="p-4">
                    <Link
                      href={`/admin/${encodeURIComponent(item.itemName)}`}
                      className="text-yellow-400 hover:text-yellow-300 hover:underline font-medium"
                    >
                      Apri →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500">
        <p>💡 <strong>Tip:</strong> I prodotti vengono segnalati automaticamente quando:</p>
        <ul className="mt-1 ml-4 list-disc">
          <li>Non hanno storico sufficiente per il grafico</li>
          <li>Sono nuovi e in attesa di dati di mercato</li>
          <li>Richiedono revisione manuale</li>
        </ul>
      </div>
    </div>
  );
}
