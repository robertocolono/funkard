"use client";
import FunkardLogo from "./FunkardLogo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0C0C0C] text-white text-center relative overflow-hidden">
      {/* Logo principale */}
      <FunkardLogo />
      <Hero />

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Funkard — Collect. Connect. Play.
      </footer>
    </main>
  );
}
