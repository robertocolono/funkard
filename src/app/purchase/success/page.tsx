"use client";

import AddToCollectionTrigger from "@/components/AddToCollectionTrigger";

export default function PurchaseSuccessPage() {
  return (
    <div className="p-8 text-center text-white">
      <h1 className="text-2xl font-bold mb-4">✅ Acquisto completato!</h1>
  <p>La tua carta &quot;Charizard Holo&quot; è ora nel tuo account.</p>

      <div className="mt-6 flex justify-center">
        <AddToCollectionTrigger
          cardName="Charizard Holo"
          condition="Mint"
          source="purchase"
          userId="seed_user"
        />
      </div>
    </div>
  );
}
