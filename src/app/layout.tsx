import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ 
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas"
});

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
      <body className={`${inter.className} ${bebasNeue.variable} bg-black text-white`}>{children}</body>
    </html>
  );
}
