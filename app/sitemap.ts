import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL("/about", siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL("/navratri-mahautsav-2026", siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL("/memories", siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL("/sponsorship", siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL("/faq", siteUrl).toString(),
      lastModified,
    },
    {
      url: new URL("/contact", siteUrl).toString(),
      lastModified,
    },
  ];
}
