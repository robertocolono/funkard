import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { Toaster } from "sonner";
import { Toaster as HotToaster } from "react-hot-toast";
import { NotificationProvider } from "@/context/NotificationContext";
import { SessionProvider } from "@/lib/context/SessionContext";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description: "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="it">
      <body className="min-h-screen antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <NotificationProvider>
              <Navbar />
              <main className="pt-24 pb-16">
                {children}
              </main>
              <MobileNavbar />
              <Toaster richColors position="top-center" />
              <HotToaster position="bottom-right" />
            </NotificationProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}