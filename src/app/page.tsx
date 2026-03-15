import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Growth Gaming — Giocare per crescere",
  description:
    "Associazione di promozione sociale dedicata alla cultura del videogioco. Esports, formazione, community a Sassari, Sardegna.",
  keywords: [
    "growth gaming",
    "esports sassari",
    "gaming sardegna",
    "formazione videogiochi",
    "growth academy",
    "tornei esports",
    "community gaming",
  ],
  alternates: {
    canonical: "https://growthgaming.it",
  },
};

export default function Home() {
  return <HomeClient />;
}
