"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TrendChart from "@/components/TrendChart";
import { adminApi } from "@/lib/adminApi";

interface ProductDetails {
  itemName: string;
  category: string;
  rangeType: string;
  status: string;
  manualCheck: boolean;
  lastSoldPrice?: number;
  points?: Array<{ date: string; avgPrice: number }>;
  updatedAt: string;
  createdAt: string;
}

export default function AdminProductPage() {
  const router = useRouter();
  const { itemName } = useParams() as { itemName: string };
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("funkard_admin_token");
    if (!token || token !== "YOUR_SECRET_KEY") {
      router.push("/");
      return;
    }

    const fetchProductDetails = async () => {
      try {
        const data = await adminApi.getProductDetails(itemName);
        setProduct(data);
      } catch (err) {
        setError("Errore nel caricamento dei dettagli del prodotto");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [itemName, router]);

  const handleApprove = async () => {
    setActionLoading(true);
    try {
      await adminApi.approveProduct(itemName);
      // Ricarica i dati
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Errore nell'approvazione del prodotto");
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    setActionLoading(true);
    try {
      await adminApi.rejectProduct(itemName);
      // Torna alla lista
      router.push("/admin");
    } catch (err) {
      console.error(err);
      alert("Errore nel rifiuto del prodotto");
    } finally {
      setActionLoading(false);
    }
  };

  const handleMarkForReview = async () => {
    setActionLoading(true);
    try {
      await adminApi.markForReview(itemName);
      // Ricarica i dati
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Errore nella marcatura per revisione");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-gray-400">Caricamento dettagli...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64">
        <div className="text-red-400 mb-4">{error || "Prodotto non trovato"}</div>
        <Link href="/admin" className="text-yellow-400 hover:underline">
          ← Torna alla lista
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link 
            href="/admin" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Torna alla lista
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.itemName}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Categoria: {product.category}</span>
          <span>Range: {product.rangeType}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            product.status === "new_item" 
              ? "bg-blue-900 text-blue-300" 
              : product.status === "insufficient_data"
              ? "bg-orange-900 text-orange-300"
              : "bg-gray-900 text-gray-300"
          }`}>
            {product.status === "new_item" ? "Nuovo" : 
             product.status === "insufficient_data" ? "Dati insufficienti" : 
             product.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TREND CHART */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Trend Prezzi</h2>
          <TrendChart itemName={product.itemName} category={product.category} />
        </div>

        {/* PRODUCT INFO */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Informazioni Prodotto</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-500">Ultimo prezzo vendita:</span>
              <div className="text-white font-medium">
                {product.lastSoldPrice ? `€${product.lastSoldPrice.toFixed(2)}` : "—"}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Punti dati:</span>
              <div className="text-white font-medium">
                {product.points?.length || 0} punti
              </div>
            </div>
            <div>
              <span className="text-gray-500">Revisione manuale:</span>
              <div className="text-white font-medium">
                {product.manualCheck ? "Sì" : "No"}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Creato:</span>
              <div className="text-white font-medium">
                {new Date(product.createdAt).toLocaleDateString("it-IT")}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Ultimo aggiornamento:</span>
              <div className="text-white font-medium">
                {new Date(product.updatedAt).toLocaleDateString("it-IT", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Azioni Admin</h2>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={handleApprove}
            disabled={actionLoading}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {actionLoading ? "Elaborazione..." : "✅ Approva"}
          </Button>
          
          <Button
            onClick={handleMarkForReview}
            disabled={actionLoading}
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            {actionLoading ? "Elaborazione..." : "🔍 Marca per revisione"}
          </Button>
          
          <Button
            onClick={handleReject}
            disabled={actionLoading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {actionLoading ? "Elaborazione..." : "❌ Rifiuta"}
          </Button>
        </div>
        
        <div className="mt-4 text-xs text-gray-500">
          <p><strong>Approvazione:</strong> Rimuove il prodotto dalla lista pending</p>
          <p><strong>Revisione:</strong> Marca per controllo manuale futuro</p>
          <p><strong>Rifiuto:</strong> Rimuove il prodotto dal sistema</p>
        </div>
      </div>
    </div>
  );
}
