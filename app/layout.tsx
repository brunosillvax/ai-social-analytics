import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Social Analytics | Dashboard de Análise com IA",
  description: "Dashboard completo de análise de redes sociais com Inteligência Artificial. Monitore WhatsApp, Instagram, TikTok e mais em tempo real.",
  keywords: ["ai", "analytics", "social media", "dashboard", "automation"],
  authors: [{ name: "Bruno Silva", url: "https://github.com/brunosillvax" }],
  openGraph: {
    title: "AI Social Analytics",
    description: "Dashboard de análise de redes sociais com IA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
