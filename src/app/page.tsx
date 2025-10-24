import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Hero />
      <div className="mt-16 border-t border-zinc-800 w-3/4 mx-auto"></div>
      <Features />
      <Footer />
    </main>
  );
}