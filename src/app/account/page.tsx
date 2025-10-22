"use client";

import { useState, useEffect } from "react";
import { getUserProfile } from "@/lib/funkardApi";
import ProfileTab from "@/components/account/ProfileTab";
import AddressesTab from "@/components/account/AddressesTab";
import PaymentTab from "@/components/account/PaymentTab";

export default function AccountPage() {
  const [tab, setTab] = useState<"profile" | "addresses" | "payment">("profile");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch {
        alert("Errore nel caricamento del profilo utente");
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Impostazioni account</h1>

        <div className="flex space-x-4 border-b border-zinc-700 mb-6">
          {["profile", "addresses", "payment"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`pb-2 px-2 font-medium transition-colors ${
                tab === t ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400 hover:text-yellow-300"
              }`}
            >
              {t === "profile"
                ? "Profilo"
                : t === "addresses"
                ? "Indirizzi di spedizione"
                : "Metodi di pagamento"}
            </button>
          ))}
        </div>

        {tab === "profile" && <ProfileTab user={user} />}
        {tab === "addresses" && <AddressesTab />}
        {tab === "payment" && <PaymentTab />}
      </div>
    </div>
  );
}