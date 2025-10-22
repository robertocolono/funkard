"use client";

import { useSession } from "@/lib/context/SessionContext";
import LoggedHome from "@/components/LoggedHome";
import GuestHome from "@/components/GuestHome";

export default function HomePage() {
  const { isAuthenticated, loading } = useSession();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Caricamento...
      </div>
    );
  }

  return (
    <main className="bg-background text-foreground">
      {isAuthenticated ? <LoggedHome /> : <GuestHome />}
    </main>
  );
}