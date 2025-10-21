import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { Toaster } from "sonner";
import { Toaster as HotToaster } from "react-hot-toast";
import { NotificationProvider } from "@/context/NotificationContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description: "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-[#0b0b0b] text-white font-sans">
        <ThemeProvider>
          <NotificationProvider>
            {/* Desktop Navbar */}
            <div className="hidden md:block">
              <Navbar />
              <div className="h-14" />
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden">
              <Navbar />
              <div className="h-14" />
              <div className="pb-16">
                {children}
              </div>
              <MobileNavbar />
            </div>
            
            {/* Desktop Content */}
            <div className="hidden md:block">
              {children}
            </div>
            
            <Toaster richColors position="top-center" />
            <HotToaster position="bottom-right" />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
