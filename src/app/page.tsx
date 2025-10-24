import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GradeLensDemo from "./components/GradeLensDemo";
import SupportCommunity from "./components/SupportCommunity";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <GradeLensDemo />
      <SupportCommunity />
      <Footer />
    </main>
  );
}