"use client";
import { useEffect, useState } from "react";
import HomeMarketing from "@/components/HomeMarketing";
import HomeUser from "@/components/HomeUser";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('funkard_token');
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === null) {
    // Evita flash visivi durante il controllo
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <span className="text-sm text-gray-400">Caricamento...</span>
      </div>
    );
  }

  return isAuthenticated ? <HomeUser /> : <HomeMarketing />;
}

