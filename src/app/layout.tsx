import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Growth Gaming — Giocare per crescere",
    template: "%s | Growth Gaming",
  },
  description:
    "Associazione di promozione sociale dedicata alla cultura del videogioco. Esports, formazione, community. Sassari, Sardegna.",
  keywords: [
    "growth gaming",
    "esports",
    "gaming",
    "sassari",
    "sardegna",
    "formazione",
    "videogiochi",
    "growth academy",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Growth Gaming",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${geistMono.variable} antialiased bg-grid noise relative min-h-screen`}
      >
        <CursorGlow />
        <Navbar />
        <main className="pt-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
