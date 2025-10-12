import "./globals.css";
import Navbar from "@/components/ui/navbar";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description: "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#0b0b0b] text-white font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
