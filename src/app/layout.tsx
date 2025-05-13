import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stavební firma | Komplexní stavební řešení",
  description: "Poskytujeme komplexní stavební služby včetně demolací, výkopových prací, zednických prací a vzduchotechniky.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
