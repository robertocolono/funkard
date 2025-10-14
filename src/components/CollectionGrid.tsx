"use client";
import { memo } from "react";
import CollectionCard from "@/components/CollectionCard";
import type { UserCard } from "@/types/usercard";

interface Props {
  cards: UserCard[];
  gridCols: string; // classi tailwind
  onCardClick?: (id: string | number) => void;
}

function CollectionGridComponent({ cards, gridCols, onCardClick }: Props) {
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {cards.map((c) => (
        <CollectionCard key={c.id} card={c} onClick={() => onCardClick?.(c.id)} />
      ))}
    </div>
  );
}

const CollectionGrid = memo(CollectionGridComponent);
export default CollectionGrid;
