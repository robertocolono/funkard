"use client";

import { useState } from "react";
import AddToCollectionModal from "@/components/AddToCollectionModal";

export default function GradeResultPage() {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCollection = () => setShowModal(true);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Risultato GradeLens</h1>
      <p>Hai ottenuto un grado: <strong>Mint 9</strong></p>

      <button
        onClick={handleAddToCollection}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        ➕ Aggiungi alla collezione
      </button>

      {showModal && (
        <AddToCollectionModal
          defaultName="Charizard Base Set"
          defaultCondition="Mint 9"
          onClose={() => setShowModal(false)}
          userId="seed_user"
        />
      )}
    </div>
  );
}
