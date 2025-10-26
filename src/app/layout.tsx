import { SessionProvider } from "@/lib/context/SessionContext";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <SessionProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}