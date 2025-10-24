// src/components/ui/FunkardButton.tsx
import React from "react";
import clsx from "clsx";

type FunkardButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | "a";
  href?: string;
  className?: string;
};

export function FunkardButton({
  as = "button",
  href,
  className,
  children,
  ...rest
}: FunkardButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 sm:px-5 h-10 sm:h-11 text-[15px] font-semibold text-white " +
    "bg-[#F6C356] shadow-[0_6px_18px_rgba(246,195,86,0.35)] border border-[#F6C356] " +
    "transition-transform active:translate-y-[1px]";

  if (as === "a" && href) {
    return (
      <a href={href} className={clsx(base, className)} {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={clsx(base, className)} {...rest}>
      {children}
    </button>
  );
}
