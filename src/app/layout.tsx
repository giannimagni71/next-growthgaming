import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { CursorGlow } from "@/components/cursor-glow";
import { AgentationDev } from "@/components/agentation-dev";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growthgaming.it"),
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
  authors: [{ name: "Growth Gaming APS" }],
  creator: "Growth Gaming APS",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://growthgaming.it",
    siteName: "Growth Gaming",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Growth Gaming — Giocare per crescere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Gaming — Giocare per crescere",
    description:
      "Associazione di promozione sociale dedicata alla cultura del videogioco. Esports, formazione, community.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://growthgaming.it",
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
        <CookieBanner />
        <AgentationDev />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
