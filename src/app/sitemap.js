import { siteConfig } from "../data/siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}