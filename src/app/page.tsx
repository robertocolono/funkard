"use client";

import { useState, useEffect } from "react";
import LoggedHome from "@/components/LoggedHome";
import GuestHome from "@/components/GuestHome";

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("funkard_token");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    // Check immediately
    checkAuth();

    // Listen for storage changes (login/logout from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "funkard_token") {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Caricamento...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <LoggedHome /> : <GuestHome />;
}

