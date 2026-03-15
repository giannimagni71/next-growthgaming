export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growth Gaming APS",
    url: "https://growthgaming.it",
    logo: "https://growthgaming.it/images/gg-logo.jpg",
    description:
      "Associazione di promozione sociale dedicata alla cultura del videogioco. Esports, formazione, community.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sassari",
      addressRegion: "SS",
      addressCountry: "IT",
    },
    sameAs: [
      "https://www.facebook.com/growthgamingss",
      "https://www.instagram.com/growthgamingss",
      "https://www.youtube.com/@growthgamingss",
      "https://discord.gg/growthgaming",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Growth Gaming",
    url: "https://growthgaming.it",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Organization",
      name: "Growth Gaming APS",
      url: "https://growthgaming.it",
    },
    publisher: {
      "@type": "Organization",
      name: "Growth Gaming APS",
      logo: {
        "@type": "ImageObject",
        url: "https://growthgaming.it/images/gg-logo.jpg",
      },
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: `https://growthgaming.it${image}`,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
