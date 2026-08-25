import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/navratri-mahautsav-2026",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/memories",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/sponsorship",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/faq",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/contact",
      lastModified: new Date(),
    },
  ];
}