import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Loader from "@/components/Loader";
import { SessionProvider } from "@/lib/context/SessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Funkard — Marketplace TCG",
  description: "Il marketplace globale per collezionisti di carte TCG.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <SessionProvider>
          <Loader />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}