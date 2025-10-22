import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { Toaster } from "sonner";
import { Toaster as HotToaster } from "react-hot-toast";
import { NotificationProvider } from "@/context/NotificationContext";
import { SessionProvider } from "@/lib/context/SessionContext";
import { ThemeProvider } from "@/lib/context/ThemeContext";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description: "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="it">
      <body className="min-h-screen antialiased transition-colors duration-500 bg-background text-foreground">
        <SessionProvider>
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
                  <main className="px-4 sm:px-6 lg:px-8">
                    {children}
                  </main>
                </div>
                <MobileNavbar />
              </div>

              {/* Desktop Content */}
              <div className="hidden md:block">
                <main className="px-4 sm:px-6 lg:px-8">
                  {children}
                </main>
              </div>

              <Toaster richColors position="top-center" />
              <HotToaster position="bottom-right" />
            </NotificationProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}