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
  primary:
    "bg-gradient-to-b from-[#f2b237] to-[#e5a42d] text-black font-bold border border-[#f2b237]/40 shadow-[0_4px_14px_#f2b23740] hover:shadow-[0_6px_20px_#f2b23760] hover:scale-[1.03]",
  secondary:
    "bg-transparent text-white font-bold border border-[#f2b237] hover:bg-[#f2b237] hover:text-black shadow-[inset_0_0_0_1px_#f2b237]",
  ghost: "text-white hover:text-[#f2b237]",
};

// Dimensioni base
const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
  xl: "px-12 py-5 text-xl",
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
    "rounded-xl font-semibold inline-flex items-center justify-center select-none transition-all duration-150";
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
