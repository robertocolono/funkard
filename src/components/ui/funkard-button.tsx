import React from "react";

interface FunkardButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const FunkardButton: React.FC<FunkardButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  href,
}) => {
  const base =
    "px-6 py-2 rounded-full transition-all duration-300 font-semibold";

  const styles =
    variant === "primary"
      ? "border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black shadow-[0_0_10px_rgba(255,204,0,0.2)] hover:shadow-[0_0_25px_rgba(255,204,0,0.6)]"
      : "border border-[#FFCC00]/60 text-[#FFCC00]/80 hover:bg-[#FFCC00]/15 hover:text-[#FFCC00]";

  const buttonElement = (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className} inline-block`}>
        {children}
      </a>
    );
  }

  return buttonElement;
};
