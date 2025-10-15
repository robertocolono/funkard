"use client";
import * as React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", inset = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-2xl border border-zinc-800 bg-zinc-900 shadow-sm",
          inset && "p-0",
          !inset && "p-4",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export default Card;
