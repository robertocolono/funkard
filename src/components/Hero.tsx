"use client";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="flex flex-col items-center justify-center text-center py-section px-4">
      {/* Logo grande dinamico */}
      <Image
        src={resolvedTheme === 'light' ? '/logo2.png' : '/logo.png'}
        alt="Funkard Logo"
        width={260}
        height={80}
        priority
        className="object-contain mb-8"
      />

      {/* Testo descrittivo */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Esplora, compra, vendi e scambia la tua collezione con un semplice click!
      </h1>

      {/* CTA principale */}
      <div className="mt-6 flex gap-4">
        <a
          href="/marketplace"
          className="bg-funkard-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Esplora il Marketplace
        </a>
        <a
          href="/register"
          className="border border-funkard-yellow text-funkard-yellow px-6 py-3 rounded-lg font-semibold hover:bg-funkard-yellow hover:text-black transition-colors"
        >
          Registrati ora
        </a>
      </div>
    </section>
  );
}