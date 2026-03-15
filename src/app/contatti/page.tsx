import type { Metadata } from "next";
import ContattiClient from "./client";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Growth Gaming: email, social, form di contatto. Sassari, Sardegna.",
  keywords: [
    "contatti growth gaming",
    "email growth gaming",
    "gaming sassari contatti",
  ],
  alternates: {
    canonical: "https://growthgaming.it/contatti",
  },
  openGraph: {
    title: "Contatti | Growth Gaming",
    description: "Contatta Growth Gaming: email, social, form di contatto.",
    url: "https://growthgaming.it/contatti",
  },
};

export default function ContattiPage() {
  return <ContattiClient />;
}
