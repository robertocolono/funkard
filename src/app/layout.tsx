import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SessionProvider } from "@/lib/context/SessionContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Funkard — Il Marketplace dei Collezionisti",
  description:
    "Compra, vendi e valuta carte da collezione. Da collezionisti, per collezionisti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white transition-colors duration-300">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <NotificationProvider>
              {/* Navbar Globale */}
              <Navbar />

              {/* Contenuto Pagina */}
              <div className="pt-24">{children}</div>
            </NotificationProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}