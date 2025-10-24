import Header from "@/components/layout/Header";
import { SessionProvider } from "@/lib/context/SessionContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-black text-zinc-100 antialiased">
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}