import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_ROLE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_ROLE}`,
    short_name: SITE_NAME,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f16",
    theme_color: "#0b0f16",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}