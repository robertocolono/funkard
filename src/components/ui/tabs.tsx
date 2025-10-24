"use client";
import * as React from "react";
import { clsx } from "clsx";

interface TabsContextValue {
  value: string;
  setValue: (v: string) => void;
}
const TabsContext = React.createContext(null as TabsContextValue | null);

interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (v: string) => void;
  [key: string]: any;
}
export function Tabs({ defaultValue, value, onValueChange, className, children }: TabsProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value ?? internal;
  const setValue = (v: string) => {
    if (!value) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, children, ...rest }: any) {
  return (
    <div
      className={clsx(
        "inline-flex rounded-xl p-1 gap-1", // container
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  [key: string]: any;
}
export function TabsTrigger({ value, className, children, ...rest }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  const active = ctx?.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx?.setValue(value)}
      className={clsx(
        "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
        active
          ? "bg-yellow-500 text-black shadow"
          : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700",
        className
      )}
      aria-pressed={active}
      {...rest}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  [key: string]: any;
}
export function TabsContent({ value, className, children, ...rest }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.value !== value) return null;
  return (
    <div className={clsx("focus:outline-none", className)} {...rest}>
      {children}
    </div>
  );
}
