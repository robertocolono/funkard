import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Funkard — Colleziona, Scambia, Vivi la Passione",
  description: "Il nuovo ecosistema digitale per i collezionisti moderni.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#0b0b0b] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}