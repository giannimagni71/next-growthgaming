import type { Metadata } from "next";
import GrowthAcademyClient from "./client";

export const metadata: Metadata = {
  title: "Growth Academy",
  description:
    "Growth Academy: 3 mesi, 30 ore di formazione gaming. Hardware, storia dei videogiochi, marketing esports, psicologia cognitiva. Sassari.",
  keywords: [
    "growth academy",
    "formazione gaming",
    "corso esports",
    "formazione videogiochi sassari",
    "gaming education",
  ],
  alternates: {
    canonical: "https://growthgaming.it/growth-academy",
  },
  openGraph: {
    title: "Growth Academy | Growth Gaming",
    description:
      "Growth Academy: 3 mesi, 30 ore di formazione gaming. Il programma che trasforma la passione in competenze.",
    url: "https://growthgaming.it/growth-academy",
  },
};

export default function GrowthAcademyPage() {
  return <GrowthAcademyClient />;
}
