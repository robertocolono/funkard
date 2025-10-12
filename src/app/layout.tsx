import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Funkard",
  description: "Marketplace moderno per collezionisti",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#0b0b0b] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}