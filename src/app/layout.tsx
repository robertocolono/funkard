import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Toaster as HotToaster } from "react-hot-toast";
import { NotificationProvider } from "@/context/NotificationContext";
import { SessionProvider } from "@/lib/context/SessionContext";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description: "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="it">
      <body className="min-h-screen antialiased transition-colors duration-500 bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <NotificationProvider>
              <main className="px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <Toaster richColors position="top-center" />
              <HotToaster position="bottom-right" />
            </NotificationProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}