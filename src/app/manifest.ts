import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Growth Gaming",
    short_name: "GG",
    description:
      "Associazione di promozione sociale dedicata alla cultura del videogioco.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#ff6b00",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
