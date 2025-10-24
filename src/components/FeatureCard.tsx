// src/components/FeatureCard.tsx
import React from "react";

type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <div
      className="
        relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6
        shadow-[0_0_40px_rgba(246,195,86,0.15)]
      "
    >
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-zinc-300">{description}</p>
    </div>
  );
}
