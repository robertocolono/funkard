"use client";

import { useEffect, useState } from "react";
import AddToCollectionPrompt from "@/components/AddToCollectionPrompt";
import AddToCollectionModal from "@/components/AddToCollectionModal";

interface AddToCollectionTriggerProps {
  cardName: string;
  condition: string;
  source: "purchase" | "gradelens";
  delay?: number; // in ms, default 1500
  userId?: string;
}

export default function AddToCollectionTrigger({
  cardName,
  condition,
  source,
  delay = 1500,
  userId,
}: AddToCollectionTriggerProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      {showPrompt && (
        <AddToCollectionPrompt
          defaultName={cardName}
          defaultCondition={condition}
          onConfirm={() => {
            setShowPrompt(false);
            setShowModal(true);
          }}
          onCancel={() => setShowPrompt(false)}
        />
      )}

      {showModal && (
        <AddToCollectionModal
          defaultName={cardName}
          defaultCondition={condition}
          onClose={() => setShowModal(false)}
          userId={userId}
          source={source}
        />
      )}
    </>
  );
}
