import type { MetadataRoute } from "next";

const baseUrl = "https://vantawear-custom-hoodie.chinayinshan.chatgpt.site";
const solutionSlugs = [
  "custom-team-hoodies",
  "custom-event-hoodies",
  "private-label-sportswear",
  "bulk-corporate-hoodies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          es: `${baseUrl}/?lang=es`,
          fr: `${baseUrl}/?lang=fr`,
          de: `${baseUrl}/?lang=de`,
          ja: `${baseUrl}/?lang=ja`,
          ko: `${baseUrl}/?lang=ko`,
          ar: `${baseUrl}/?lang=ar`,
          zh: `${baseUrl}/?lang=zh`,
        },
      },
    },
    {
      url: `${baseUrl}/factory`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...solutionSlugs.map((slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}
