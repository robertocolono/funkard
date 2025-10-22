'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavbarLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Evita flicker in SSR
  if (!mounted) {
    return (
      <div className="h-8 w-24 bg-gray-300/10 rounded-md animate-pulse" />
    );
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={resolvedTheme === 'light' ? '/logo2.png' : '/logo.png'}
        alt="Funkard Logo"
        width={100}
        height={30}
        priority
        className="object-contain h-8 w-auto transition-all duration-300"
      />
    </Link>
  );
}
