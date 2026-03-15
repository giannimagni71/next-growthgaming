import type { Metadata } from "next";
import NewsClient from "./client";

export const metadata: Metadata = {
  title: "News & Eventi",
  description:
    "News, eventi e aggiornamenti dal mondo Growth Gaming. Tornei, talk, formazione e community.",
  keywords: [
    "news gaming",
    "eventi esports",
    "tornei sassari",
    "growth gaming news",
  ],
  alternates: {
    canonical: "https://growthgaming.it/news",
  },
  openGraph: {
    title: "News & Eventi | Growth Gaming",
    description:
      "News, eventi e aggiornamenti dal mondo Growth Gaming.",
    url: "https://growthgaming.it/news",
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
