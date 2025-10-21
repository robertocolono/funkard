import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { Toaster as HotToaster } from "react-hot-toast";
import { NotificationProvider } from "@/context/NotificationContext";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description: "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#0b0b0b] text-white font-sans">
        <NotificationProvider>
          <Navbar />
          <div className="h-14" />
          {children}
          <Toaster richColors position="top-center" />
          <HotToaster position="bottom-right" />
        </NotificationProvider>
      </body>
    </html>
  );
}
