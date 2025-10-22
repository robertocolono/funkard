"use client";
import { useSession } from "@/lib/context/SessionContext";
import HomeMarketing from "@/components/HomeMarketing";
import HomeUser from "@/components/HomeUser";

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
      {isAuthenticated ? <HomeUser /> : <HomeMarketing />}
    </main>
  );
}

