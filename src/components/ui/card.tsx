"use client";
import * as React from "react";
import { clsx } from "clsx";

export interface CardProps {
  inset?: boolean;
  [key: string]: any;
}

export const Card = React.forwardRef(
  ({ className = "", inset = false, ...props }: any, ref: any) => {
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
