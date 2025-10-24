"use client";
import * as React from "react";
import { clsx } from "clsx";

export interface ButtonProps {
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
  [key: string]: any;
}

const variantClasses: Record<string, string> = {
  default: "bg-yellow-500 text-black hover:bg-yellow-600",
  outline: "border border-zinc-700 bg-transparent text-white hover:bg-zinc-800",
  ghost: "bg-transparent hover:bg-zinc-800 text-white",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
};

const sizeClasses: Record<string, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0 flex items-center justify-center",
};

export const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "md", ...props }: any, ref: any) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
