import type { Metadata } from "next";
import ChiSiamoClient from "./client";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Growth Gaming APS: associazione di promozione sociale dedicata alla cultura del videogioco. Team, valori e manifesto. Sassari, Sardegna.",
  keywords: [
    "growth gaming",
    "chi siamo",
    "associazione gaming",
    "sassari",
    "esports sardegna",
  ],
  alternates: {
    canonical: "https://growthgaming.it/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo | Growth Gaming",
    description:
      "Growth Gaming APS: associazione di promozione sociale dedicata alla cultura del videogioco.",
    url: "https://growthgaming.it/chi-siamo",
  },
};

export default function ChiSiamoPage() {
  return <ChiSiamoClient />;
}
