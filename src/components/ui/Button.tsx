"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  iconOnly?: boolean;
  loading?: boolean;
  children?: ReactNode;
};

// Varianti visive (statiche per Tailwind JIT)
const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-[#f2b237] text-black border-none hover:bg-[#ffca47]",
  secondary:
    "border border-[#f2b237] text-white hover:bg-[#f2b237] hover:text-black",
  ghost: "bg-transparent text-white hover:bg-neutral-800",
};

// Dimensioni base
const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  iconOnly = false,
  loading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "rounded-lg font-semibold inline-flex items-center justify-center select-none transition-all duration-150";
  const variantCls = VARIANT_CLASSES[variant];
  const sizeCls = SIZE_CLASSES[size];
  const iconMode =
    iconOnly &&
    "p-3 sm:p-4 aspect-square min-w-[48px] min-h-[48px] flex items-center justify-center";

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={clsx(
        base,
        variantCls,
        iconMode || sizeCls,
        className,
        (disabled || loading) && "opacity-50 pointer-events-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f2b237] focus-visible:ring-offset-[#0b0b0b]"
      )}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </motion.button>
  );
}
